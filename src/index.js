module.exports = function multiply(first, second) {
  
  let firstReverseArr = first.split('').reverse();
  let secondReverseArr = second.split('').reverse();
  let stack = [];

  for(let i = 0; i < firstReverseArr.length; i++) {
    for(let j = 0; j < secondReverseArr.length; j++) {
      let charsMultiplying = firstReverseArr[i] * secondReverseArr[j];
        stack[i + j] = stack[i + j] ? stack[i + j] + charsMultiplying : charsMultiplying;
    }
  }

  for(let i = 0; i < stack.length; i ++) {
    let number = stack[i] % 10;
    let restToMove = Math.floor(stack[i] / 10);
    stack[i] = number;

    if (stack[i+1]) {
      stack[i+1] += restToMove;
    } else if(restToMove != 0) {
      stack[i+1] = restToMove;
    }
  }
  return stack.reverse().join('');
}
