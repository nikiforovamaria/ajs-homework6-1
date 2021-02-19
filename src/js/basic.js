export default function orderByProps(obj, rule) {
  const newObj = obj;
  const result = [];

  for (const prop in rule) {
    if (rule.length !== 0) {
      for (const i in newObj) {
        if (i === rule[prop]) {
          result.push({ key: i, value: newObj[i] });
          delete newObj[i];
        }
      }
    }
  }

  const sorted = Object.keys(newObj).sort().reduce((object, key) => {
    const output = { ...object };
    output[key] = newObj[key];
    return output;
  }, {});

  for (const prop in sorted) {
    if (sorted.length !== 0) {
      result.push({ key: prop, value: sorted[prop] });
    }
  }

  return result;
}
