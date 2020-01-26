// Question 1 - 
const attentionSeek = function() {
                                  console.log("Meow!");
                                 }
const cat = {
             complain: attentionSeek 
            };

// Call the function within the object
cat.complain();
// 1st Answer  - Meow!                                                                 shaun-fields-js1-ma1.js:3
///////////////////////////////////////////////////////////////////////////////////////
//Question 2 - Select the h3 from the HTML below using the querySelector method 
// and assign it to a variable called heading.
const heading = document.querySelector("h3");
 console.log(heading);
// 2nd Answer  -  <h3 class=​"subheading" style=​"font-size:​ 2em;​">​ subheading ​</h3>​     shaun-fields-js1-ma1.js:16
//////////////////////////////////////////////////////////////////////////////////////
//Question 3- 
heading.style.fontSize = "2em";
//////////////////////////////////////////////////////////////////////////////////////
// Question 4- Add a class to the heading variable called subheading.
heading.classList.add("subheading");
 console.log(heading.className);
// 4th Answer- subheading                                                              shaun-fields-js1-ma1.js:24
/////////////////////////////////////////////////////////////////////////////////////                                 
// Question 5 Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
const paragraphs=document.querySelectorAll("p");
 console.log(paragraphs);
// 5th Answer-
// NodeList(2) [p, p]
//  length: 2
//  0: p
//  1: p
//  __proto__: NodeList                                                                 shaun-fields-js1-ma1.js:29
///////////////////////////////////////////////////////////////////////////////////// 
// Question 6 Select the div by its class from the HTML below, assign it to a variable called resultsContainer 
//and set its inner HTML to be <p>New paragraph</p>.

// <div class="results"></div>

const resultContainer = document.querySelector(".results");
resultContainer.innerHTML = `<p> New paragraph </p>`;
console.log(resultContainer.innerHTML)
//   6th Answer - <p> New paragraph </p>                                               shaun-fields-js1-ma1.js:44
///////////////////////////////////////////////////////////////////////////////////////
// Question 7 
// Inside the function, loop through the catArray argument '
// and console log the name property in each object.
// Call the function and pass in the cats variable below.
function printArguments(catArray){
                                    for (let i = 0; i < catArray.length; i++)
                                        {   
                                            console.log(catArray[i].name);
                                         }
                                  }

const cats = [
                {
                    name: "Blob",
                    age: 10
                },
                {
                    name: "Harold",
                },
                {
                    name: "Blurt",
                    age: 21
                }
             ];
printArguments(cats); 
// Blob
// Harold
// Blurt                                                                        shaun-fields-js1-ma1.js:60
/////////////////////////////////////////////////////////////////////////////////////
// Question 8 
// Using the function and cats variable from the above question 7 , 
//instead of logging the name property, wrap each name property in an h5 tag,
// add it to a variable you declare before the loop and return the variable 
// from the function after the loop.
let newHTML="";
// Declare newHTML string ouside the function so we can output it 
function printArgAgain(catArray){

       for (let i = 0; i < catArray.length; i++)
           {   
               const details = `
                        <h5>${catArray[i].name}</h5>`;
               newHTML += details
            }
            return newHTML;
     }
printArgAgain(cats); 
console.log(newHTML);    
//<h5>Blob</h5>
//<h5>Harold</h5>
//<h5>Blurt</h5>
////////////////////////////////////////////////////////////////////////////////////
// Question 9
// Call the function from question 8, pass it the cats variable from question 7 and 
// set the inner HTML of the resultsContainer variable 
// from question 6 to the return value of the function.
let nextHTML="";

function printArgAndAgain(catArray) {

       for (let i = 0; i < catArray.length; i++)
           {   
               const details = `
                   <h5>${catArray[i].name}</h5>`;
               nextHTML += details
            }
         
            return nextHTML;
      
                            }
printArgAndAgain(cats)
resultContainer.innerHTML=nextHTML;  
console.log(resultContainer.innerHTML)
// <h5>Blob</h5>
// <h5>Harold</h5>
// <h5>Blurt</h5>
//////////////////////////////////////////////////////////////////////////////////
// Question 10
// Using the function from question 8, add a p element containing the age property
// from each object. If the age property is missing, it should display Age unknown instead.
//Wrap the h5 and p in a div.
let nHTML="";
function makeCatgreat(catArray) {

        for (let i = 0; i < catArray.length; i++) 
            {
                let ageValue = "Age unknown";

                if (catArray[i].age) 
                {
                ageValue = catArray[i].age;
                }
            
                const details = `
                            <div>
                            <h5>${catArray[i].name}</h5>
                            <p>${ageValue}</p>
                            </div>
                            `;

                 nHTML += details;
            }

}
makeCatgreat(cats)
console.log(nHTML)
// 10th Answer
///       <div>
//        <h5>Blob</h5>
//        <p>10</p>
//        </div>
//        
//        <div>
//        <h5>Harold</h5>
//        <p>Age unknown</p>
//        </div>
//        <div>
//        <h5>Blurt</h5>
//        <p>21</p>
//        </div>
        