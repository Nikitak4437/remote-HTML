const sayHi = (friend) => {
  console.log(`hello ${friend}`);
};
const greeting = (friend, callbackFn) => {
  callbackFn(friend);
};
greeting("ravi", sayHi);
