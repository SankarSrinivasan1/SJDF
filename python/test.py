from parser import parse_sjdf

with open("../examples/array.sjdf") as f:
    data = f.read()

result = parse_sjdf(data)
print(result)
