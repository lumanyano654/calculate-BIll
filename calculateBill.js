const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringTotalElement = document.querySelector(".billString");
const billTotalSpanElement = document.querySelector(".total");

   function totalPhoneBill(billString) {

  //split the string
  var billList = billString.split(",");
  var billTotal = 0;

  //Looping over the list items
  for(var i=0;i<billList.length;i++){
    //you logic here to calculate the total
var billCost = billList[i].trim();
  if (billCost === "call"){
      billTotal += 2.75;
}
 else if (billCost === "sms") {
      billTotal += 0.75;
}
} 
 var roundedTotal = billTotal.toFixed(2);
   return roundedTotal;
  };
  
      //create a logic for adding color when a certian level is reach
     
function phoneBillColor(roundedTotal){

  const theTotal = Number(roundedTotal);

  billTotalSpanElement.classList.remove("warning");
  billTotalSpanElement.classList.remove("danger");

 
 if (theTotal >= 20 && theTotal < 30){
      billTotalSpanElement.classList.add(" warning");
 }

  if (theTotal >= 30){
      billTotalSpanElement.classList.add("danger");
}

}; 
    //fix the code here to append the t

function calculateBtnClicked() {
var billString = billStringTotalElement.value;

  const roundedTotal = totalPhoneBill(billString);

    billTotalElement.innerHTML= roundedTotal;
    phoneBillColor(roundedTotal);

  billTotalElement.innerHTML = roundedTotal;
};
calculateBtn.addEventListener("click", calculateBtnClicked);



