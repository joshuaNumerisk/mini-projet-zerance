/*import {Client as GenderApiClient, ResultSingleName} from "gender-api.com-client";*/


const slide =["Artboard_1.jpg","Artboard_2.jpg"]
let numero = 0;



function ChangeSlide(sens) {
    let url='';

    let div = document.getElementById("slider");

    numero = numero + sens;
   
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
    if(slide[numero]=="Artboard_2.jpg")
        url= "Artboard_1.jpg"; 
    else
        url= "Artboard_2.jpg"; 

    div.style.backgroundImage = `url(${url})`;
       }
function closeForm(){
    document.getElementById("form-popup").style.display="none";


    }
function openForm(){
    
    document.getElementById("form-popup").style.display="flex";
    
        }
/*function getGenre(){
    debugger;
    let input = document.getElementById("nom").value;
    var GenderApi = require('gender-api.com-client');
    const genderApiClient = new GenderApiClient("NSB7cFbru97FAVBbRGJwneRbotuKvtUFjLyb");


    genderApiClient.getByFirstName(input, function (response) {
        console.log(response.gender); //female
        console.log(response.accuracy); //98
});

}*/

