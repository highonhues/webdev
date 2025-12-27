// document.getElementById("count-el").innerText = count

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let countEl= document.getElementById("count-el")

let count =0 
function increment(){
    console.log("button was clicked. Count changed from ",count)
    count +=1
    countEl.innerText = count
    console.log(count)
    
}


