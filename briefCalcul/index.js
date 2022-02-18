const calculator = function(){
    let total ;
    let firstN;
   let secondN;
         
         return {
             add : function(firstN,secondN){
                 total = firstN + secondN
                 return total ;
             },
             substract : function(firstN,secondN){
                 total = firstN - secondN
                 return total ;
             },
             divide : function(firstN,secondN){
                 total = firstN / secondN
                 return total ;
             }, multiply : function(firstN,secondN){
                 total = firstN * secondN
                 return total ;
             },
             total : function(firstN,secondN){
         
                 return total ;
             },
         
         }
}
module.exports = calculator();

