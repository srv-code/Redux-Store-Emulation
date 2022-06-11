const { logDebugInfo } = require('../utils/debug');

/**
 * A replica of the original Redux store
 */
class Store {
  constructor(reducer, name) {
    if (!reducer) throw new Error('No reducer provided');
    this._reducer = reducer;

    this._id = `Store@${Date.now()}`;

    if (name) {
      this._name = name;
      this._id += `-${name}`;
    }

    this._state = undefined;
    this._subsciptionList = [];

    // logDebugInfo('Store::constructor', { reducer });
  }

  /**
   * Calls actions, updates the state, calls subscribed functions (if any),
   * only way to manipulate state from the outside
   */
  dispatch(action) {
    logDebugInfo('Store::dispatch', { action });

    this._state = this._reducer(this._state, action);

    logDebugInfo('Store::dispatch', { _state: this._state });

    this._subsciptionList.forEach(callback => callback());
  }

  /**
   * Calls the functions, if any, passed
   * @returns Function to unsubscribe
   */
  subscribe(callback) {
    callback.id = `${callback.name}@${
      Date.now() + this._subsciptionList.length + 1
    }`;
    this._subsciptionList.push(callback);
    logDebugInfo('Store::subscribe', `callback (ID: ${callback.id}) added`);

    return () => {
      const index = this._subsciptionList.findIndex(
        cb => cb.id === callback.id
      );
      if (index !== -1) {
        this._subsciptionList.splice(index, 1);
        logDebugInfo(
          'Store::unsubscribe',
          `successful (callback ID: ${callback.id})`
        );
      } else
        logDebugInfo(
          'Store::unsubscribe',
          `failed: callback (ID: ${callback.id}) not found`
        );
    };
  }

  /**
   * @returns An immutable object representing internal state
   */
  getState() {
    return { ...this._state };
  }

  /**
   * @returns A string representing this store's identity
   */
  toString() {
    return this._name ?? this._id;
  }
}

const createStore = (reducer, name) => new Store(reducer, name);

module.exports = { createStore };
