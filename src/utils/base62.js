const characters =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const base = characters.length;

function encode(num) {
  let ShortCode = "";

  while (num > 0) {
    ShortCode = characters[num % base] + ShortCode;
    num = Math.floor(num / base);
  }

  return ShortCode;
}

module.exports = { encode };
