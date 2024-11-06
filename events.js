// // option one directly set in the html element 

// // option two 
// function makeRed(){
//     document.body.style.backgroundColor="red";
// }
 
// // option three 
// const makeBlueButton = document.getElementById('make-blue');
//         makeBlueButton.onclick = makeBlue;
     
//         function makeBlue(){
//             document.body.style.backgroundColor= 'blue';
//         }

//         // option three another 
//         const makeSkyBlue = document.getElementById('make-skyblue');
//         makeSkyBlue.onclick = function makeskyblue(){
//             document.body.style.backgroundColor= 'skyblue';
//         }

//         // Option four 
//         const pinkButton = document.getElementById('make-pink');
//      pinkButton.addEventListener('click', makePink);

//      function makePink(){
//         document.body.style.backgroundColor='pink';
//      }
//     //  option four another 
//     const makeGreenButton = document.getElementById('make-green');
//     makeGreenButton.addEventListener('click', function makeGreen(){
//         document.body.style.backgroundColor='green';
//     }) 

//     // option four final 
//     // important : we will use this sometimes 
//     document.getElementById('make-orange').addEventListener('click', function(){
//         document.body.style.backgroundColor= 'orange';
//     }); 



    function sum (num1, num2){
        const plus = num1+num2;
        return plus 
    }

    const result = sum(25,347)
    console.log(result);