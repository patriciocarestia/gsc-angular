// Exercise 1.6

const elementoInventario: [string, number] = ['tuerca', 11];

const [nombre, cantidad]: [string, number] = elementoInventario;
const mensaje: string = agregarInventario(nombre, cantidad);

console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string, cantidad: number): string {
    return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}