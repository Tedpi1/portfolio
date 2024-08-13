const filterBtn=document.querySelectorAll(".btn-portfolio button");
const filterItem=document.querySelectorAll(".portfolio-items .portfolio-item-inner");
// console.log(filterBtn)
// console.log(filterItem)
//function to filter items
const filterDish=(e)=>{
    document.querySelector(".btn-portfolio button.active").classList.remove("active");
    e.target.classList.add("active");
    // console.log(e.target)
    //iterate for each filter item
    filterItem.forEach(item=>{
        //add hide class to the item initially
        item.classList.add("hide");
        //check if the item has the same category as the button clicked
        if(item.dataset.id===e.target.dataset.id || e.target.dataset.id==="all")
        {
            //remove hide class if the item has the same category as the button clicked
            item.classList.remove("hide");
        }
    })
}
//add click event to listen for each filter button
filterBtn.forEach(btn=>btn.addEventListener("click",filterDish));































































