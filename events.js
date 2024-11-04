// option one directly set in the html element 

// option two 
function makeRed(){
    document.body.style.backgroundColor="red";
}
 
// option three 
const makeBlueButton = document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;
     
        function makeBlue(){
            document.body.style.backgroundColor= 'blue';
        }

        // option three another 
        const makeSkyBlue = document.getElementById('make-skyblue');
        makeSkyBlue.onclick = function makeskyblue(){
            document.body.style.backgroundColor= 'skyblue';
        }