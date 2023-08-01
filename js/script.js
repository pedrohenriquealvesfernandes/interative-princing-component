const numpage = document.getElementById("number-page")
const payment = document.getElementById("payment")
const myRange = document.getElementById("page-range")
const prices = [8, 12, 16, 24, 36]
const checkboxinp = document.getElementById("checkboxinp")
const checkboxspan = document.querySelector(".box-check")
 

window.onload= ()=>{
   
    function handlePricingChanges(value){
        let pricing = 8
        if (value >= 0 && value <= 19 ){
            numpage.innerHTML = "10K PAGEVIEWS"
            pricing = 8
        }else if (value >= 20 && value <=49){
            numpage.innerHTML = "50K PAGEVIEWS" 
            pricing = 12
        }else if (value >= 50 && value <= 74){
            numpage.innerHTML = "100K PAGEVIEWS"
            pricing = 16
        }else if (value >= 75 && value <= 99){
            numpage.innerHTML = "500K PAGEVIEWS"
            pricing = 24 
        }else {
            numpage.innerHTML = "1M PAGEVIEWS"  
            pricing = 36
        }

        if(checkboxinp.checked){
            const totalValor = pricing - pricing * 0.25
            payment.innerText = `$${totalValor}.00`

            checkboxspan.style.backgroundColor = "hsl(174, 86%, 45%)"
        }else{
            payment.innerText = `$${pricing}.00`

            checkboxspan.style.backgroundColor = ""
        }

        myRange.style.background = `linear-gradient(
            to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${value}%,
            hsl(224, 65%, 95%) 50%,
            hsl(224, 65%, 95%) 100%
        )`;
  
    }

    myRange.addEventListener('input', () => {
        const value = myRange.value;
        handlePricingChanges(value);
    });

    checkboxspan.addEventListener('click',  ()=> {
        checkboxinp.checked = !checkboxinp.checked

        const value = myRange.value;
        handlePricingChanges(value);
    });

}










