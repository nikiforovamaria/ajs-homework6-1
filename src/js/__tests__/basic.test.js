import orderByProps from '../basic';

test('1 - should return sorted object', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, ['name', 'level'])).toEqual(result);
});

test('2 - should return new sorted object', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, ['name', 'level'])).not.toBe(result);
});

test('3 - should return sorted object if func without second parameter', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(orderByProps(obj, [])).toEqual(result);
});

test('4 - should return empty object if func without first parameter', () => {
  const obj = {};
  const result = [];
  expect(orderByProps(obj, ['name', 'level'])).toEqual(result);
});

test('5 - should return sorted object only by second parameter', () => {
  const obj = {
    name: 'мечник', level: 2,
  };
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
  ];
  expect(orderByProps(obj, ['name', 'level'])).toEqual(result);
});
