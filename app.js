const title = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
    console.log("title was clicked");
}

title.addEventListener("click", handleTitleClick);









