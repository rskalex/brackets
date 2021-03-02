module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(item => item.join(''));
  
  for (let i = 0; i < brackets.length; i++) {

    if( str.includes(brackets[i]) ) {
      str = str.replace(brackets[i], '');
      i = -1;
    }
  }

  if(str.length === 0) {
    return true;
  } else {
    return false;
  }
}
