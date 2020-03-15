module.exports = function check(str, bracketsConfig) {
  if (typeof str !== "string" || str.trim().length === 0) {
  return false;
  }
  while (str.length > 0) {
  let a = str.length;
  str = str.replace(/\(\)/g, "");
  str = str.replace(/\{\}/g, "");
  str = str.replace(/\|\|/g, "");
  str = str.replace(/\[\]/g, "");
  str = str.replace(/12/g, "");
  str = str.replace(/34/g, "");
  str = str.replace(/56/g, "");
  str = str.replace(/77/g, "");
  str = str.replace(/88/g, "");
  if (str.length === a) {
  return false;
  }
  }
  return true;
  }
