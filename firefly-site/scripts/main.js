/*let myHeading = document.querySelector("h1");
myHeading.textContent = "流萤!";*/
document.querySelector("a").addEventListener("click", () => {
  alert("协议42,启动:\n正在前往流萤...");
});
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefly8.jpg") {
    myImage.setAttribute("src", "images/firefly9.jpg");
  } else {
    myImage.setAttribute("src", "images/firefly8.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "流萤最好看！你说对吧，" + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "流萤最好看！你说对吧，" + storedName;
}
myButton.onclick = function () {
  setUserName();
};
