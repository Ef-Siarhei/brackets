module.exports = function check(str, bracketsConfig) {

   const Open_Brackets = [];
   const Brackets_Pair = {};

   for (let i = 0; i < bracketsConfig.length; i++) {
      let key = bracketsConfig[i][1];
      let value = bracketsConfig[i][0];
      Open_Brackets.push(value);
      Brackets_Pair[key] = value;
   }

   let stack = [];
   for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      let topElement = stack[stack.length - 1];
      if (Brackets_Pair[currentSymbol] === topElement && stack.length > 0) {
         stack.pop();
      }
      else {
         if (Open_Brackets.includes(currentSymbol)) stack.push(currentSymbol);
         if (stack.length === 0) return false;
      }
   }
   return stack.length === 0;
}