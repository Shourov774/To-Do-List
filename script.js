const inputBox = document.querySelector("#scarch");
const listItemUl = document.querySelector(".lists");
function addFunction() {
    if (inputBox.value == "") {
        alert("Write something");
    }else{
        let listItem = document.createElement("li");
    listItem.innerHTML = `<i class='fa-regular fa-circle'></i>${inputBox.value}<i class='fa-solid fa-xmark'></i>`;
    listItemUl.appendChild(listItem);
    }
    inputBox.value = "";
    saveData();
}

listItemUl.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {        
        if (e.target.classList.value == "checked") {
            e.target.classList.remove("checked");
            e.target.children[0].classList.remove("fa-circle");
            e.target.children[0].classList.add("fa-circle-check");
            saveData();
        }else{
            e.target.classList.add("checked");
            e.target.children[0].classList.add("fa-circle");
            e.target.children[0].classList.remove("fa-circle-check");
            saveData();
        }
    } 
    else{
        e.target.parentElement.remove();
        saveData();       
    }
})

document.addEventListener("keypress",function(x) {
    if (x.key == "Enter") {
    addFunction();
    saveData();       
    }
})

// document.addEventListener("load", function() {
//     getData();
// })

const saveData = () => {
    localStorage.setItem("data", listItemUl.innerHTML)
}
const getData = () => {
    listItemUl.innerHTML = localStorage.getItem("data");
}
getData();








// for (let index = 0; index < listItemUlLi.length; index++) {
//     listItemUlLi[index].addEventListener("click", function(e) {
//     console.log(e.target);
//     if (listItemUlLi[index].classList == '') {
//         listItemUlLi[index].firstChild.classList.add("fa-solid ");
//         listItemUlLi[index].firstChild.classList.add("fa-check");
//         listItemUlLi[index].firstChild.classList.remove("fa-regular");
//         listItemUlLi[index].firstChild.classList.remove("fa-circle");
//         listItemUlLi[index].classList.add("checked");
//     }else
//     listItemUlLi[index].classList.remove("checked");
//     // listItemUlLi.className.add("checked");
    
// })}