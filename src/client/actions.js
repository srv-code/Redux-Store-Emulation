const { actionTypes } = require('./action-types');

const addBug = (id, description) => ({
  type: actionTypes.ADD_BUG,
  payload: { id, description },
});

const removeBug = id => ({
  type: actionTypes.DELETE_BUG,
  payload: { id },
});

// const tester1 = () => {
//   console.log({
//     addBug: addBug(1, 'Wassup??'),
//     removeBug: removeBug(1),
//   });
// };

// tester1();

module.exports = { addBug, removeBug };
