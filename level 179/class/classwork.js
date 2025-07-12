function sc(floor) {
  if (floor <= 1) return "";
  
  let scream = "Aa~ ";
  let result = scream.repeat(floor - 1) + "Pa!";
  
  if (floor <= 6) result += " Aa!";
  
  return result;
}