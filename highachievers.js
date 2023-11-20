filter an array of student objects to create a new array (highAchievers) containing only those students who have a grade
 greater than 90

 const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 95 }
  ];

  const highAchievers = (students)=>{
    return students.filter((student)=>student.grade > 90)
  }
  console.log("highAchievers:", highAchievers(students));
  