// // output : {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

const swapKeyValue = (obj) => {
  const entries = Object.entries(obj);
  console.log(entries);
  const map = entries.map((value) => {
    return ([value[0], value[1]] = [value[1], value[0]]);
  });
  console.log(map);
  const swapObject = Object.fromEntries(map);
  return swapObject;
};
swapKeyValue({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" });
console.log(
  swapKeyValue({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
);
