let user = "John";
console.log(user ?? "Anonymous");
let use;
console.log(use ?? user);
let val = 0;
console.log(use ?? val);

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous");
console.log(firstName || lastName || nickName || "Anonymous");