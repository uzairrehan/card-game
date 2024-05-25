function reload() {
  location.reload();
}
function OpenName(img) {
  randomNumber = Math.ceil(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      img.src = "Images/j.jpeg";
      break;
    case 2:
      img.src = "Images/q.jpeg";
      break;
    case 3:
      img.src = "Images/k.jpeg";
      h1El = document.querySelectorAll("h1")
      h1El[0].innerHTML = "You Won"
      break;
    }
    if (randomNumber === 3) {
      setTimeout(function (){
      reload()
      }, 1000);
    }
}
