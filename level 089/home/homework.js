// 1. სტუდენტების შენახვა Map-ში
function createStudentMap(studentsArray) {
    return new Map(studentsArray);
}
  
// 2. დუბლიკატების წაშლა Set-ის გამოყენებით
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
  
// 3. სტუდენტების ქულების ასლის შექმნა და გაზრდა
function increaseScores(map) {
    return new Map([...map].map(([key, val]) => [key, val + 5]));
}
  