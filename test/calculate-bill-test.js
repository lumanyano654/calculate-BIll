describe("The calculate bill factory functions", function() {
    
    it ("should be able to give call total when 'call' is entered", function() {

        let calculateBillFact = billCalculated();

        calculateBillFact.makeCall ();

        assert.equal(2.75, calculateBillFact.billOverallTotal())
        
    })

    it ("should be able to give call total when 'call' is entered more than once", function() {

        let calculateBillFact = billCalculated();

        calculateBillFact.makeCall ();
        calculateBillFact.makeCall ();
        calculateBillFact.makeCall ();
        calculateBillFact.makeCall ();

        assert.equal(11.00, calculateBillFact.billOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered", function() {

        let calculateBillFact = billCalculated();

        calculateBillFact.sendSms ();

        assert.equal(0.85, calculateBillFact.billOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered more than once", function() {

        let calculateBillFact = billCalculated();

        calculateBillFact.sendSms ();
        calculateBillFact.sendSms ();
        calculateBillFact.sendSms ();
        calculateBillFact.sendSms ();

        assert.equal(3.40, calculateBillFact.billOverallTotal())
        
    })

    it ("should be able to give totals when 'sms & call' is entered", function() {

        let calculateBillFact = billCalculated();

        calculateBillFact.makeCall ();
        calculateBillFact.makeCall ();
        calculateBillFact.sendSms ();

        assert.equal(6.35, calculateBillFact.billOverallTotal())
       
        



        describe("The Danger & Warning Level for Calculate Bill", function() {
            
            it ("should be able to return class name 'danger' when danger level is reached", function() {
        
                let calculateBillFact = billCalculated();
            
                
                calculateBillFact.setDangerLevel(10);

                calculateBillFact.makeCall ();
                calculateBillFact.makeCall ();
                calculateBillFact.makeCall ();
                calculateBillFact.sendSms ();
                calculateBillFact.sendSms ();
                calculateBillFact.sendSms ();
    
                assert.equal("danger", calculateBillFact.totalClassName())
                assert.equal(10.80, calculateBillFact.billOverallTotal())
                
                
            })
    
        
            it ("should be able to return class name 'warning' when warning level is reached", function() {
        
                let calculateBillFact = billCalculated();

                calculateBillFact.setWarningLevel(5);
                calculateBillFact.setDangerLevel(10);


                calculateBillFact.makeCall ();
                calculateBillFact.makeCall ();
            

                assert.equal(5.50, calculateBillFact.billOverallTotal())
                assert.equal("warning", calculateBillFact.totalClassNameTwo())
                  
            })
    
        })
    })
    
    })

   