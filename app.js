function OpenName(img) {
  randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 3) {
    console.log("winner");
    document.write("you won")
  }
  switch (randomNumber) {
    case 1:
      img.src = "Images/j.jpeg";
      break;
    case 2:
      img.src = "Images/q.jpeg";
      break;
    case 3:
      img.src = "Images/k.jpeg";         
      break;
  }
}
function reload() {
  location.reload();
}
