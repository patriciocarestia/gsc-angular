"use strict";
let multiply;
let capitalize;
multiply = function (x, y) {
    return x * y;
    ;
};
capitalize = function (value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};
console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));
