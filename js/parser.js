function parseSJDF(input) {
  const lines = input.split("\n");
  const stack = [{}];
  const indentStack = [0];

  for (let rawLine of lines) {
    let line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    let indent = rawLine.search(/\S/);

    while (indent < indentStack[indentStack.length - 1]) {
      stack.pop();
      indentStack.pop();
    }

    let current = stack[stack.length - 1];

    if (line.startsWith("- ")) {
      let value = parseValue(line.slice(2));
      if (!Array.isArray(current._array)) {
        current._array = [];
      }
      current._array.push(value);
      continue;
    }

    let [key, ...rest] = line.split(":");
    let value = rest.join(":").trim();

    if (!value) {
      current[key] = {};
      stack.push(current[key]);
      indentStack.push(indent);
    } else {
      current[key] = parseValue(value);
    }
  }

  return cleanArrays(stack[0]);
}

function parseValue(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  if (!isNaN(value)) return Number(value);

  if (value.startsWith("[") && value.endsWith("]")) {
    return value
      .slice(1, -1)
      .split(",")
      .map(v => parseValue(v.trim()));
  }

  return value.replace(/^"|"$/g, "");
}

function cleanArrays(obj) {
  if (obj._array) return obj._array;

  for (let key in obj) {
    obj[key] = cleanArrays(obj[key]);
  }

  return obj;
}

module.exports = parseSJDF;
