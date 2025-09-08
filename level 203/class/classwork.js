function reverseIt(data) {
  // If data is a string or number
  if (typeof data === "string" || typeof data === "number") {
    // Convert to string, split, reverse, join
    return data.toString().split("").reverse().join("");
  }
  // For any other type, return as is
  return data;
}
