var numbers = [12,25,4,96,3,20,78]

function ShowMin(Arrays){

   if(Array.isArray(Arrays)=== true) {
    var min=Arrays[0]
    for (let index = 0; index < Arrays.length; index++) {
        if(Arrays[index]<min){
            min= Arrays[index]
             }  
    }
    
   }
   else{
    alert('Array deyil')
   }
   return min
}

// console.log(ShowMin(numbers));


// task2
var word = "salaml"

function ShowSameChar(anyword){
    // if(typeof(anyword)){
        var char = word[0]
        var chars = new Array;
        for (let index = 0; index < anyword.length; index++) {
           for (let index1 =index+1; index1 < anyword.length; index1++) {
            if(anyword[index]===anyword[index1]){
               chars.push(anyword[index])
                }
            
           }
            
        }
        return chars
    }
    // else{
    //     alert('string deyil')
    // }
 


console.log(ShowSameChar(word));