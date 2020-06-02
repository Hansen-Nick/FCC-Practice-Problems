function palindrome(str) {
  let strArray = str.split("");
  let alphanum = strArray.filter((item) => item.match(/^[a-z0-9]+$/i));
  let alphanumClone = [...alphanum];
  console.log(alphanum);

  return alphanumClone.join("").toLowerCase() ===
    alphanum.reverse().join("").toLowerCase()
    ? true
    : false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
