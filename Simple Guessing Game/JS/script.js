var count=1;
var r=Math.floor(Math.random()*10+1);
var str=[]; 
function guess()
{
 
  var num=document.getElementById("input").value;
  var s=String(num);
  console.log(typeof s);
  if (num=="")
    {
      alert("Enter number between 1 & 10");
      return false;    
    }
while(num!=r)
  {
    str.push(s);
    if (num>r)
    {
      document.querySelector("#result").innerHTML="You Guess Is High";
      document.querySelector("#n").innerHTML="Number of guess: "+count;
      document.querySelector("#g").innerHTML="Guessed Numbers are: "+str.join(",");
      count+=1; 
     return false;
    }
    if (num<r)
    {
      document.querySelector("#result").innerHTML="You Guess Is Low";
      document.querySelector("#n").innerHTML="Number of guess: "+count;
      document.querySelector("#g").innerHTML="Guessed Numbers are: "+str.join(",");
      count+=1; 
      return false;
    }
  
   }
   if(num==r){
   var rlt=document.querySelector("#result");
   rlt.innerHTML="You Won";
   setInterval(()=>{
    location.reload();
  
   },3000);
   
   
  return false;
   
  
   } 
    return true;
}