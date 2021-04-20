function change(){
  var p1 = Math.floor(Math.random() * 6) + 1;
  var p2 = Math.floor(Math.random() * 6) + 1;

  if(!(p1 === p2)){
    if(p1 > p2){
      document.querySelector("h1").textContent = "Player 1 won 🎉🎊";
    }
    else {
      document.querySelector("h1").textContent = "Player 2 won 🎉🎊";
    }
  }
  else{
    document.querySelector("h1").textContent = "It's a TIE 😑";
  }
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + p1 + ".png");
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + p2 + ".png");
}
// console.log("Hello World, I am Abhijit Mukherjee");
// alert("Working");
