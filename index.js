let sliderImages = Array.from(document.querySelectorAll(".slide-container img")),
    slidesCount = sliderImages.length ,
    currentSlide = 1 ,
    slideNumber = document.querySelector(".slide-number")
    prevButton = document.querySelector(".previous"),
    nextButton = document.querySelector(".next");

let paginationElement = document.createElement("ul")
paginationElement.setAttribute("class" , "pagination-ul")
for (let index = 1; index <= slidesCount; index++){
    let paginationItem = document.createElement("li")
    paginationItem.setAttribute("data-index",index)
    paginationItem.appendChild(document.createTextNode(index))
    paginationElement.appendChild(paginationItem) 
}
document.querySelector(".indicators").appendChild(paginationElement)

let paginationCreatedUl = document.querySelector(".pagination-ul"),
    paginationArrLi  = Array.from(document.querySelectorAll(".pagination-ul li"))
    thechecker()
    paginationArrLi.forEach((li) => {
        li.onclick = function(){
        currentSlide = parseInt(li.getAttribute("data-index"))
        thechecker()
        }
    })

prevButton.onclick = prevslide;
nextButton.onclick = nextSlide;


function thechecker(){
    removeAllActive()
    sliderImages[currentSlide - 1].classList.add("active")
    paginationCreatedUl.children[currentSlide - 1].classList.add("active")
    slideNumber.textContent = "# Slide  "+ currentSlide + " Of  " +slidesCount
    
    if (currentSlide == 1) {
        prevButton.classList.add("disable")
        
    }else {
        prevButton.classList.remove("disable")
    }
    if (currentSlide == slidesCount) {
        nextButton.classList.add("disable")
        
    }else {
        nextButton.classList.remove("disable")
    }
}

function prevslide(){
    if(currentSlide == 1 ){
        // Dont Do Any Thing
        }else{
    currentSlide --;
    thechecker()
        }
}
function nextSlide(){
    if(currentSlide == paginationArrLi.length ){
    // Dont Do Any Thing
    }else{
    currentSlide ++;
    thechecker()
}
}
function removeAllActive(){
    sliderImages.forEach((img) => {
        img.classList.remove("active")
    })
    paginationArrLi.forEach((li) => {
        li.classList.remove("active")
    })
}