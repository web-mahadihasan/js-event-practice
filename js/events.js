
 const h2 = document.getElementById("main-heading");
 const colorName = document.getElementById("color-name");
// Option 2 

function makeGreen(){
    document.body.style.backgroundColor = 'green';
    h2.style.color = 'white';
    colorName.innerText = "Green";
}

// Option 3

const makePurple = document.getElementById("make-purple");

makePurple.onclick = purple;
function purple(){
    document.body.style.backgroundColor = "purple";
    h2.style.color = "white";
    colorName.innerText = 'Purple'
}

// Option 3 alternative

const makeSteelBlue = document.getElementById("make-steelblue");

makeSteelBlue.onclick = function(){
        document.body.style.backgroundColor = "steelblue";
        h2.style.color = "black";
        colorName.innerText = "Steel blue";
}

// Option 4 

const makeGoldenRod = document.getElementById("make-goldenrod");

makeGoldenRod.addEventListener("click", goldenRod);
function goldenRod(){
    document.body.style.backgroundColor = 'goldenrod';
    h2.style.color = 'black';
    colorName.innerText = "Golden rod";
}

// Option 4 alternative

const makePink = document.getElementById("make-pink");

makePink.addEventListener('click', function(){
    document.body.style.backgroundColor = "pink";
    h2.style.color = "black";
    colorName.innerText = "Pink";
});

// Option 4 final we use it

document.getElementById("make-aquamarine").addEventListener('click', function(){
    document.body.style.backgroundColor = "aquamarine";
    h2.style.color = "orangered";
    colorName.innerText = "Aqua Marine";
});



// Get user input using and display option 4


const fName = document.getElementById("user-fName");
const lName = document.getElementById("user-lName");
const userInfo = document.getElementById("user-info");

// get comment
const getComment = document.getElementById("comment");
const commentContainer2 = document.getElementById("comment-container");

// check comment length for remove 
// const allReview = document.querySelectorAll("#comment-container div");
// const beforeLength = allReview.length;
// console.log(beforeLength);
// check comment length for remove 
// output
document.getElementById("submit").addEventListener("click", function () {
    const getFName = fName.value;
    const getLName = lName.value;
    const fullName = getFName.concat(" " + getLName);
    
    // display name
    // userInfo.innerText = fullName;
    const getCommentValue = getComment.value;

    // display  name
    const addDetails = document.createElement("div");
    const h3 = document.createElement('h3')
    h3.innerText = fullName;
    addDetails.appendChild(h3);
    fName.value = "";
    lName.value = "";

    // Display comment
    const p = document.createElement('p');
    p.innerText = getCommentValue;
    addDetails.appendChild(p);
    getComment.value = "";

    if (getCommentValue.length === 0 || getFName.length === 0 || getLName === 0) {
      alert(`add comment and name`);
    } else {
      commentContainer2.appendChild(addDetails);
    }
});


// Get user comment in display option 4



// Remove comment 

// console.log(last);

document
.getElementById("removed-input").addEventListener("keyup", function (event) {
    const inputValue = event.target.value;
    console.log(inputValue);
    const removeBtn = document.getElementById("removed-btn");
    if (inputValue === "removed") {
        removeBtn.removeAttribute("disabled");
        inputValue.value = '';
    } else {
        removeBtn.setAttribute("disabled", false);
    }
});

const allReview = document.querySelectorAll("#comment-container div");
const afterLength = allReview.length;

document.getElementById("removed-btn").addEventListener('click', function(){
    const allReviewAfterAdd = document.querySelectorAll("#comment-container div");
    const last = allReviewAfterAdd[allReviewAfterAdd.length - 1];

    const getInputText = document.getElementById("removed-input");


    if (allReviewAfterAdd.length > afterLength) {
      last.style.display = "none";
      getInputText.value = "";
    } else {
      alert(`you don't submit your review`);
      getInputText.value = "";
    }
});

