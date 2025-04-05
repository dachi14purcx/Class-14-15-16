function createStudentMap(studentList) {
    const studentMap = new Map();
    studentList.forEach(student => {
      const { name, score } = student;
      studentMap.set(name, score);
    });
    return studentMap;
  }
  
  // მაგ: გამოყენება
  const students = [
    { name: "ნიკა", score: 85 },
    { name: "თამარ", score: 92 },
    { name: "ლევან", score: 78 }
  ];
  
  const studentMap = createStudentMap(students);
  console.log(studentMap); // Map(3) { 'ნიკა' => 85, 'თამარ' => 92, 'ლევან' => 78 } 