def parse_sjdf(text):
    lines = text.split("\n")
    stack = [{}]
    indent_stack = [0]

    for raw_line in lines:
        if not raw_line.strip() or raw_line.strip().startswith("#"):
            continue

        indent = len(raw_line) - len(raw_line.lstrip())
        line = raw_line.strip()

        while indent < indent_stack[-1]:
            stack.pop()
            indent_stack.pop()

        current = stack[-1]

        if line.startswith("- "):
            value = parse_value(line[2:])
            current.setdefault("_array", []).append(value)
            continue

        parts = line.split(":")
        key = parts[0]
        value = ":".join(parts[1:]).strip()

        if not value:
            current[key] = {}
            stack.append(current[key])
            indent_stack.append(indent)
        else:
            current[key] = parse_value(value)

    return clean_arrays(stack[0])


def parse_value(value):
    if value == "true":
        return True
    if value == "false":
        return False

    try:
        return int(value)
    except:
        pass

    if value.startswith("[") and value.endswith("]"):
        return [parse_value(v.strip()) for v in value[1:-1].split(",")]

    return value.strip('"')


def clean_arrays(obj):
    if isinstance(obj, dict):
        if "_array" in obj:
            return obj["_array"]
        return {k: clean_arrays(v) for k, v in obj.items()}
    return obj
