// Question -- 1 
// function power(a, b) {
//     return Math.pow(a, b);
//   }
 
//   var result = power(2, 3);  
//   console.log(result); 


  
  // Question -- 2
//   function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true; // It's a leap year
//     } else {
//       return false; // It's not a leap year
//     }
//   }
  
//   // Example usage:
//   var year = 2024; // You can replace this with any year you want to check
//   var result = isLeapYear(year);
  
//   if (result) {
//     console.log(year + " is a leap year.");
//   } else {
//     console.log(year + " is not a leap year.");
//   }
  

// Question -- 3
// function removeVowels(sentence) {
//     if (sentence.length > 25) {
//       return "Sentence is too long. It should be 25 characters or less.";
//     }
  
//     // Use a regular expression to remove vowels (both lowercase and uppercase)
//     const result = sentence.replace(/[aeiouAEIOU]/g, "");
  
//     return result;
//   }
  
//   // Example usage:
//   var sentence = "This is a test sentence"; // Replace this with your sentence
//   var result = removeVowels(sentence);
  
//   console.log("Original Sentence: " + sentence);
//   console.log("Sentence without Vowels: " + result);
  
// Question -- 4
// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;
    
//     if (hoursWorked <= regularHours) {
//       return 0; // No overtime pay if hours worked are within the regular hours (40 hours)
//     } else {
//       const overtimeHours = hoursWorked - regularHours;
//       const overtimePay = overtimeHours * overtimeRate;
//       return overtimePay;
//     }
//   }
  
//   // Example usage:
//   var hoursWorked = 45; // Replace this with the actual hours worked
//   var overtimePay = calculateOvertimePay(hoursWorked);
  
//   console.log("Hours Worked: " + hoursWorked);
//   console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2)); // Format the result to display with 2 decimal places
  