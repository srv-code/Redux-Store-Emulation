const { actionTypes } = require('./action-types');
const { produce } = require('../utils/immer');
const { logDebugInfo } = require('../utils/debug');

const intialState = {
  users: [],
  bugs: [],
};

const orderReducer = (state = intialState, action) => {
  logDebugInfo('orderReducer', { state, action });

  switch (action.type) {
    case actionTypes.ADD_BUG:
      return produce(state, draft => {
        draft.bugs.push(action.payload);
      });

    case actionTypes.DELETE_BUG:
      return produce(state, draft => {
        const index = draft.bugs.findIndex(b => b.id === action.payload.id);
        if (index !== -1) draft.bugs.splice(index, 1);
      });

    default:
      return state;
  }
};

// const tester1 = () => {
//   const testState = { ...intialState };
//   const testActionPayload = { id: 100, description: 'new bug 1' };

//   console.log('reducers::test', {
//     testState,
//     testActionPayload,
//     result: JSON.stringify(
//       produce(testState, draft => {
//         draft.bugs.push(testActionPayload);
//       }),
//       null,
//       2
//     ),
//   });
// };

// tester1();

module.exports = { orderReducer };
