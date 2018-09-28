// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   var obj = {};
    if (currency > 10000){
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    } 
    if (currency / 50 >= 1){
        obj.H = Math.floor(currency / 50);
        currency = currency - obj.H * 50;
    }

    if (currency / 25 >= 1){
        obj.Q = Math.floor(currency / 25);
        currency = currency - obj.Q * 25;
    }
    if (currency / 10 >= 1){
        obj.D = Math.floor(currency / 10);
        currency = currency - obj.D * 10;
    }
    if (currency / 5 >= 1){
        obj.N = Math.floor(currency / 5);
        currency = currency - obj.N * 5;
    }
    if (currency / 1 >= 1){
        obj.P = Math.floor(currency / 1);
    }
    return obj;

}
