function multiplicationTable(num) {
    console.log(`Generate Multiplication Table for: ${num}`);
    for (let i = 1; i <= 10; i++) {
      const result = num * i;
      
      console.log(`${i} X ${num} = ${result}`);
    }
  }
  
  multiplicationTable(5);