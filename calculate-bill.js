function billCalculated(){

    var callTotal = 2.75;
    var smsTotal = 0.85;
    var warningLevel = 5;
    var dangerLevel = 10;
  
    var theTotal = 0;
    var theWarningTotal = 0;
    var theDangerTotal = 0;


    function action(type) {

      if (type === 'call') {
        makeCall();
      } else if (type === 'sms') {
        sendSms();
      }
      
    }

    function makeCall (){
      return theTotal += callTotal;
  
    }
  
    function callMade (){
      return theTotal.toFixed(2);
  
    }
  
    function sendSms () {
      return theTotal += smsTotal;
  
    }
  
    function smsSent (){
      return theTotal.toFixed(2);
  
    }
  
    function billOverallTotal () {
      return theTotal.toFixed(2);
  
    }
  
    function setDangerLevel () {
      theDangerTotal = dangerLevel;
  
    }
  
    function getDangerLevel () {
      return theDangerTotal;
  
    }
  
    function setWarningLevel () {
      theWarningTotal = warningLevel;
  
    }
  
    function getWarningLevel () {
      return theWarningTotal;
  
    }
  
    function totalReachedDangerLevel () {
      return theTotal >= getDangerLevel ();
  
    }
  
    function totalReachedWarningLevel () {
      return theTotal >= getWarningLevel ();
  
    }
  
    function totalClassName() {
      
      if (totalReachedDangerLevel()) {
        return "danger"
      }
    }
  
    function totalClassNameTwo() {
  
      if (totalReachedWarningLevel()) {
        return "warning"
      }
    }
  
    return {
      makeCall,
      callMade,
      sendSms,
      smsSent,
      billOverallTotal,
      setDangerLevel,
      getDangerLevel,
      setWarningLevel,
      getWarningLevel,
      totalClassName,
      totalClassNameTwo
  
    }
  
  }