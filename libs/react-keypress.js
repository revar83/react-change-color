import { default as Keypress } from "keypress.js";
var elements = new WeakMap();

module.exports = function (keys) {
  var listener = new Keypress.keypress.Listener();
  console.log("in key");
  listener.listen();
  listener.register_many(keys);
  listener.unregister_many(keys);
};
