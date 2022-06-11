const { createStore } = require('./redux/store');
const { orderReducer } = require('./client/reducers');
const { initDebug } = require('./utils/debug');
const { addBug, removeBug } = require('./client/actions');

initDebug(true);

const test1 = () => {
  const orderStore = createStore(orderReducer, 'orders');

  const showUsers = () => {
    console.log('** store updated', { users: orderStore.getState()?.users });
  };

  const showBugs = () => {
    console.log('** store updated', { bugs: orderStore.getState()?.bugs });
  };

  const unsubscribeShowUsers = orderStore.subscribe(showUsers);
  const unsubscribeShowBugs = orderStore.subscribe(showBugs);

  orderStore.dispatch(addBug(1, 'login failed'));
  console.log('Unsubscribing show users');
  unsubscribeShowUsers();
  orderStore.dispatch(addBug(2, 'sign up error'));

  console.log('store state, after adding:', orderStore.getState());

  console.log('Unsubscribing show bugs');
  unsubscribeShowBugs();

  orderStore.dispatch(removeBug(2));

  console.log('store state, after deleting 2:', orderStore.getState());

  console.log('Unsubscribing show users');
  unsubscribeShowUsers();

  console.log('Unsubscribing show bugs');
  unsubscribeShowBugs();
};

test1();
