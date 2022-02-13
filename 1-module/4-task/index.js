function checkSpam(str) {
  const strTemp = str.toLowerCase();
  return ['1xBet', 'xxxxx'].some(strSpam => strTemp.includes(strSpam.toLowerCase()));
}
