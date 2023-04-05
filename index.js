// function scuberGreetingForFeet(heightInFeet){
//   // Write your code here!
//   if (heightInFeet <=400) {
//       return 'This one is on me!'
//   } 
//   else if (heightInFeet >=2000 && heightInFeet <2500){
//       return `I will gladly take your thirty bucks.`
//   }
    
//   else if (heightInFeet>2500) {
//         return `No can do.`
//     }
   
// } 

// switch statement for the above code
function scuberGreetingForFeet(heightInFeet){
  switch (true){
      case heightInFeet <= 400:
          return 'This one is on me!';
      case heightInFeet > 2000 && heightInFeet < 2500:
          return 'I will gladly take your thirty bucks.';
      case heightInFeet > 2500:
          return 'No can do.';
      default:
          return 'Invalid input';
  }
}
    
function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC"? `Ok, sounds good.`: `No go.`
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous" :
      return `Thank you so much.`;
    case "not as generous" :
      return `Thank you.`;
    default :
      return `Bye.`
  }
}

