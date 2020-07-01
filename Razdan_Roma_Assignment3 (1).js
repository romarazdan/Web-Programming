var buffer = 0;
var result = 0;
var currentop = '';
const display = document.getElementById("output");
var result0 = true;
/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   result = 0; 
   buffer = 0;
   currentop = '';
   setDisplay(0);
   result1 = true;
}
resetCalc();

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str){
   document.getElementById('output').innerText = str;
}

   


/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   return result; 
   
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   result = result * 10 + num;
   setDisplay(result);

   if(num !== 0){
      result1=false;
   }
   if(result > 999999999){
      setDisplay(999999999);
   }
   else if(result < -999999999){
      setDisplay(-999999999);
   }   
   else {
      setDisplay(result);
   }   
}


/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   if(!result1) {
      pressEquals();
      buffer = result;
      result = 0;
   }
   result1=true;
   currentop = op;
   setDisplay(result);
   
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   if (currentop === "+"){
      result = buffer + result;
      setDisplay(result);
   }

   if (currentop === "-"){
      result = buffer - result;
      setDisplay(result);
   }

   if (currentop === "*"){
      result = buffer * result;
      setDisplay(result);
   }

   if (currentop === "/"){
      if (result == 0) {
         setDisplay("ERROR");
      }

      else {
         result=Math.floor(buffer/result);
            setDisplay(result);
      }
   }

 
   currentop = '';
   buffer = 0;
   
}