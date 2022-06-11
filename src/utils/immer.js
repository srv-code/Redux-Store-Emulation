const produce = (originalObject, draftCallback) => {
  let newObject = Object.assign({}, originalObject);
  draftCallback(newObject);
  return newObject;
};

// const tester = () => {
//   const obj1 = { name: 'sd' };
//   const obj2 = obj1;
//   // const obj3 = produce(obj1);
//   // const obj3 = produce(obj1, { age: 21 });
//   const obj3 = produce(obj1, draft => {
//     draft.name = 'xx';
//     draft.age = 21;
//   });

//   console.log(obj1 === obj2);
//   console.log(obj1 === obj3);
//   console.log({ obj1, obj2, obj3 });
// };

// tester();

module.exports = { produce };
