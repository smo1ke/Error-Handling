"use strict";

// Для рекурсивной функции возведения числа в степень pow(base, exponent) реализовать валидацию передаваемых значений и генерацию ошибок соответствующих типов.
// Вызов функции заключить в блок try с отлавливанием исключительных ситуаций (ошибок) разных типов с оповещением пользователя о типе наступившей ошибки.

// Если ДЗ по рекурсии не сделано, вместо рекурсивного алгоритма реализуйте возврат значения base**exponent, основание считайте целым, показатель степени  положительным.
function pow(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError(`inccorect data type`);
  }
  if (x <= 0 || y <= 0 || Number.isNaN(x) || Number.isNaN(y)) {
    throw new RangeError("Incorect value");
  }

  return y === 1 ? x : x * pow(x, y - 1);
}
try {
  const result = pow(3, -4);
  console.log("Result of exponentiation >>", result);
} catch (err) {
  console.log(err);
}
