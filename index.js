let uservalue;
let ans=9;
let toTemp;
let fromTemp;
let inp=document.querySelector(".userTemp");
document.querySelectorAll(".btn")[0].addEventListener("click",function(){
    
    giveAns();
    reset();


});


// document.getElementById("userTemp").oninput=function(){
    
//     giveAns();
//     reset();


// }



function giveAns()
{
     toTemp=document.getElementById("to").value;
     fromTemp=document.getElementById("from").value;
    uservalue=document.querySelector(".userTemp").value;
    if(toTemp===fromTemp)
    {
        ans=uservalue;
    }
    else
    {
       
        switch(fromTemp)
        {
            case "celcius":
                celcius();
                inp.value=uservalue;
                break;
            case "kelvin":
                kelvin();
                inp.value=uservalue;
                break;
            case "farenheit":
                farenheit();
                inp.value=uservalue;
                break;
            
        }

        
    }
    document.querySelector(".ans").innerHTML=ans;
   
   
}



// document.getElementById("ct").onchange=function(){

//      updateCel();
   
// };
  
function celcius()
{
    let cel=uservalue;
    switch(toTemp)
        {
            
            case "kelvin":
                ans=parseInt(cel)+(parseInt(273));
                ans=ans+"K";
                break;
            case "farenheit":
                ans=parseFloat((cel*9/5)+32).toFixed(2)+"°F";
                
                break;
            
        }

  
}

function farenheit()
{
    let faren=uservalue;
    let cel=parseFloat((faren-32)*5/9).toFixed(2);
    switch(toTemp)
        {
            case "celcius":
                ans=cel+"°C";
                break;
            case "kelvin":
                ans=parseFloat(cel)+parseFloat(273);
                ans=ans+"K"
                break;
            
        }
    


}

function kelvin()
{
    let kel=uservalue;
    let cel=kel-273;
    let faren=parseFloat((cel*9/5)+32).toFixed(2);
    switch(toTemp)
        {
            case "celcius":
                ans=cel+"°C";
                break;
            case "farenheit":
                ans=faren+"°F";
                break;
            
        }
    
}

function reset()
{
    uservalue=0;
    toTemp="";
    fromTemp="";
    ans=0
}


