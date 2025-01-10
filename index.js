var selectedNumber = 0;
const showContentBtn = document.getElementById("showcontent");
const contentOne = document.getElementById("first-main");
const contentTwo = document.getElementById("second-main");
const divs = document.querySelectorAll(".flex-container");

// divs.forEach((div) => {
//   div.addEventListener("click", function (e) {
//     selectedNumber = parseInt(e.target.innerHTML);
//     // console.log("Selected number:", selectedNumber);
//   });
// });

divs.forEach(contentDiv);

function contentDiv(div){
  div.addEventListener("click", function (e) {
    selectedNumber = parseInt(e.target.innerHTML);
    console.log("Selected number:", selectedNumber);
  });
};

showContentBtn.addEventListener("click", function () {
  if (selectedNumber > 0) {
    contentOne.style.display = "none";
    contentTwo.style.display = "block";
    document.getElementById("selected-number").textContent = selectedNumber;
    console.log("Content displayed with number:", selectedNumber);
  } else {
    alert("Please select a number before submitting!");
  }
});
