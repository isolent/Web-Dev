console.log("1:")

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMessages = new WeakSet();
  
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  readMessages.add(messages[0]);
  
  console.log("Read message 0: " + readMessages.has(messages[0])); // true
  
  messages.shift();

  console.log(readMessages)

console.log("2:")
let mes = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(mes[0], new Date(2017, 1, 1));
console.log(readMap)