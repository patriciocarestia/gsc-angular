"use strict";
// Exercise 1.6
const elementoInventario = ['tuerca', 11];
// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario;
const mensaje = agregarInventario(nombre, cantidad);
console.log('[Ejercicio 1.6]', mensaje);
function agregarInventario(nombre, cantidad) {
    return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}
