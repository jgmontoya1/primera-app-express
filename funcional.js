 // funcion .map
 function doubleAll(numbers) { const result = numbers.map(x => x * 2); }

 // funcion .filter
 
     messages = [
         {
             message: 'Esse id amet quis eu esse aute officia ipsumEsse id amet quis eu esse aute officia ipsum.' // random
         },
         {
             message: 'Hola mundo' // random
         },
         {
             message: 'K ase' // random
         }
     ]
 
   function getShortMessages(messages) {
     
     var result = messages.filter(objeto => objeto.length < 50).map(objeto => objeto.message)
   }
 
   getShortMessages(messages)
 
   module.exports = getShortMessages 
  
 // funciona .reduce
 
 var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
 
 inputWords.reduce(function(cont, countWords){
   if (countWords === 'Apple') {
     return cont + 1;
   } else {
     return cont;
   }
 }, 0)
 console.log(inputWords);
 console.log(inputWords);
 