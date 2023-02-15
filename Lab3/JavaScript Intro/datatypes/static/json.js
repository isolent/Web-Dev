console.log("1:")
let user = {
    name: "John Smith",
    age: 35
  };
  
  let user2 = JSON.parse(JSON.stringify(user));
  console.log(user2)
console.log("2:")
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));
  