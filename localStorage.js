
var enterTeam=document.getElementById('enterValue');
var removeTeam=document.getElementById('removeValue');
document.getElementById('addBtn').addEventListener("click",function(){
  
   if (enterTeam.value==='') {
alert('please type the team name first!!');
   }else{
      var addedTeam=document.createElement('LI');
      window.localStorage.setItem("team",enterTeam.value);
      addedTeam.innerHTML=addedTeam.innerHTML+window.localStorage.getItem("team");
      document.querySelector('OL').appendChild(addedTeam);
      console.log(window.localStorage.getItem("team"));
      window.localStorage.setItem('list',document.querySelector('OL').innerHTML);
      
   }
});
document.getElementById('removeBtn').addEventListener('click',function (){
  
  var teams=document.querySelectorAll('LI');
  var listOfTeams=[];
  for (let i=0;i++;i<teams.length) {
    listOfTeams[i]=team[i];
  }
  
   if (removeTeam.value==='') {
    alert('Enter the team number you want to remove first!');
   }else if (teams.length<parseInt(removeTeam.value)) {
alert('No Such Team in the List');
console.log(teams[2]);
console.log(localStorage.getItem('list'));

   }else{
    var m=parseInt(removeValue.value);
     document.querySelector('OL').removeChild(teams[m-1]);
     
    
    localStorage.setItem('list',document.querySelector('OL').innerHTML);
    
   }
   
      
   
});
window.onload=function(){
   document.querySelector('OL').innerHTML=window.localStorage.getItem('list');
};

