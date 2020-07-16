// function billCalculated(){

//     var callTotal = 2.75;
//     var smsTotal = 0.85;
//     var warningLevel = 30;
//     var dangerLevel = 50;
  
//     var theTotal = 0;
//     var theWarningTotal = 0;
//     var theDangerTotal = 0;


//     function action(type) {

//       if (type === 'call') {
//         makeCall();
//       } else if (type === 'sms') {
//         sendSms();
//       }
//       var roundedTotal = calculateBillFact.billOverallTotal();

  
//    var billList = billString.split(",");
//    var billTotal = 0;

  
//   for (var i = 0; i < billList.length; i++) {
  
//    var billCost = billList[i].trim();
//      if (billCost === "call"){
//          billTotal += 2.75;
//    }
//    else if (billCost === "sms") {
//           billTotal += 0.75;
//     }
//    }

    
//    return roundedTotal;
 
//     }

//     function makeCall (){
//       return theTotal += callTotal;
  
//     }
  
//     function callMade (){
//       return theTotal.toFixed(2);
  
//     }
  
//     function sendSms () {
//       return theTotal += smsTotal;
  
//     }
  
//     function smsSent (){
//       return theTotal.toFixed(2);
  
//     }
  
//     function billOverallTotal () {
//       return theTotal.toFixed(2);
  
//     }
  
//     function setDangerLevel () {
//       theDangerTotal = dangerLevel;
  
//     }
  
//     function getDangerLevel () {
//       return theDangerTotal;
  
//     }
  
//     function setWarningLevel () {
//       theWarningTotal = warningLevel;
  
//     }
  
//     function getWarningLevel () {
//       return theWarningTotal;
  
//     }
  
//     function totalReachedDangerLevel () {
//       return theTotal >= getDangerLevel ();
  
//     }
  
//     function totalReachedWarningLevel () {
//       return theTotal >= getWarningLevel ();
  
//     }
  
//     function totalClassName() {
      
//       if (totalReachedDangerLevel()) {
//         return "danger"
//       }
  
//       if (totalReachedWarningLevel()) {
//         return "warning"
//       }
//     }
  
//     return {
//       makeCall,
//       callMade,
//       sendSms,
//       smsSent,
//       billOverallTotal,
//       setDangerLevel,
//       getDangerLevel,
//       setWarningLevel,
//       getWarningLevel,
//       totalClassName,
//       // totalClassNameTwo,
//       action
//     }
  
//   }



function totalPhoneBill(billString) {

  //split the string
   var billList = billString.split(",");
   var billTotal = 0;

  // Looping over the list items
  for (var i = 0; i < billList.length; i++) {
   //you logic here to calculate the total
   var billCost = billList[i].trim();
     if (billCost === "call"){
         billTotal += 2.75;
   }
   else if (billCost === "sms") {
          billTotal += 0.75;
    }
   }

       return billTotal;

 };