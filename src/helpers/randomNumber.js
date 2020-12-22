export function rand(min, max) {
  let randomNum = Math.random() * (max - min) + min;
  return randomNum;
}
