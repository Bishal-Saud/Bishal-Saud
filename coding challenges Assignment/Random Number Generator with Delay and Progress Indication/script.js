// let randomNo = () =>{


//         for(let i =0; i < 10; i++){
//         let num = Math.floor(Math.random()*100);
//         console.log(num)
//         }
 
// }

// // setInterval(randomNo,2000)
// //     setTimeout(()=>{
// //     clearInterval(randomNo,5000)
// // },2000)

function generateRandomNumberWithDelay(delay) {
    let timeRemaining = delay;
    let countdownInterval = setInterval(function() {
      console.log("Time remaining: " + timeRemaining + " seconds");
      timeRemaining--;
  
      if (timeRemaining === 0) {
        clearInterval(countdownInterval);
        let randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
        console.log("Random number generated: " + randomNumber);
      }
    }, 1000);
  }
  
  var delayInSeconds = 3;
  generateRandomNumberWithDelay(delayInSeconds);
  