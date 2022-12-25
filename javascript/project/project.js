const data = [
  { title: "you are a lion", img: "./images/lion.png" },
  { title: "you are a bear", img: "./images/bear.png" },
  { title: "you are a crocodile", img: "./images/crocodile.png" },
  { title: "you are a fox", img: "./images/fox.png" },
  { title: "you are a rhino", img: "./images/rhino.png" },
];
//0,1,2,3,4
let main = document.getElementById("main"); // Min div
let images = document.getElementById("images"); // Min div
let heading = document.getElementById("heading"); // Min div

// Step 1 create id of tag
// Step 2 Set value to the attributes

function randomClick() {
  let value = Math.random() * 5; // random float value
  let newvalue = Math.floor(value); // number
  main.className = "show";
  images.src = data[newvalue].img;
  heading.innerHTML = data[newvalue].title;

  console.log(data[newvalue]);
  console.log(data[newvalue].img);
  //   console.log(data[value]);
  //   console.log(newvalue);
}
