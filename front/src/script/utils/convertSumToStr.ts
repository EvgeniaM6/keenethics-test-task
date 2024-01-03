export const convertSumToStr = (num: number): string => {
  let str = `${num}`;

  if (!str.includes('.')) {
    str = `${str}.00`;
  }

  const [strInteger, strFrac] = str.split('.');
  if (strFrac.length === 1) {
    str = `${str}0`;
  }
  if (strInteger === '0') {
    str = `0${str}`;
  }

  if (num >= 1000) {
    const arrDigitsAndComma: Array<string> = [];
    const lastDigitIndex = strInteger.length - 1;
    strInteger
      .split('')
      .reverse()
      .forEach((digit, i) => {
        arrDigitsAndComma.push(digit);
        if (!((i + 1) % 3) && i < lastDigitIndex) {
          arrDigitsAndComma.push(',');
        }
      });
    const strIntegerComma = arrDigitsAndComma.reverse().join('');
    str = `${strIntegerComma}.${strFrac}`;
  }
  return str;
};
