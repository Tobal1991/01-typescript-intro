function addnumbers(a: number, b: number) {
  return a + b;
}

const addnumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiplay(
  firstnumber: number,
  secondnumber?: number,
  base: number = 2
) {
  return firstnumber * base;
}

//const result = addnumbers(2, 2);
//const result2 = addnumbersArrow(2, 2);
//const result3 = multiplay(2, 3, 3);

//console.log({ result, result2, result3 });

export {};
