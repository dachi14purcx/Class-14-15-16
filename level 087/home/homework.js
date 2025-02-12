// 1. Map ქვეყნების და დედაქალაქების შენახვა
const countries = new Map([
    ["France", "Paris"],
    ["Germany", "Berlin"],
    ["Italy", "Rome"]
  ]);
  countries.forEach((capital, country) => console.log(`${country}: ${capital}`));
  
  // 2. გასაღების არსებობის შემოწმება
  console.log(countries.has("Tbilisi"));
  
  // 3. სტუდენტების ქულების შენახვა
  const students = new Map([
    ["Ana", 85],
    ["Luka", 90],
    ["Nino", 78]
  ]);
  console.log(students.get("Luka"));
  
  // 4. გასაღებების დაბეჭდვა
  for (let key of students.keys()) {
    console.log(key);
  }
  
  // 5. კონკრეტული ელემენტის წაშლა
  students.delete("Nino");
  console.log(students);
  
  // 6. Map-ის ზომის დადგენა
  console.log(students.size);
  
  // 7. მნიშვნელობის განახლება
  students.set("Luka", 95);
  console.log(students);
  
  // 8. ცარიელი Map-ის შემოწმება
  console.log(new Map().size === 0);
  
  // 9. ობიექტიდან Map
  const product = { name: "Laptop", price: 1200 };
  const productMap = new Map(Object.entries(product));
  console.log(productMap);
  
  // 10. ყველა ელემენტის წაშლა
  countries.clear();
  console.log(countries.size === 0);  