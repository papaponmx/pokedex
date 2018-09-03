/*
 * UniqArray
 * This is my implemantation of uniq method in loadash
 */

const uniqArray = arrArg =>
  arrArg.filter((elem, pos, arr) => arr.indexOf(elem) === pos);

export default uniqArray;
