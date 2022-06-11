# Emulated Redux Store

This is just an emulation of the main functions of the redux store.

Store functions emulated:

- `createStore`
- `store::dispatch`
- `store::subscribe`
- `store::getState`

Also created the following redux boilerplate codes:

- `reducers`
- `action creators`
- `action types`

Emulated an immer library function

- `produce`

---

#### To run type the following in command line:

```
node src/tester1.js
```

Note: By default not showing the debug information, if required then uncomment the following line:

```
initDebug(true);
```
