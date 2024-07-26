
exports.getDate = function(){

const today = new Date();
    
    const options = {
        timeZone:"Asia/Kolkata",
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: 'numeric',
        minute:'numeric'
        
    };
    
    return today.toLocaleDateString("en-US",options);
    
}

exports.getDay = function(){

    const today = new Date();
        
        const options = {
            timeZone:"Asia/Kolkata",
            weekday: 'long'
          
            
        };
        
        return today.toLocaleDateString("en-US",options);
        
    }


