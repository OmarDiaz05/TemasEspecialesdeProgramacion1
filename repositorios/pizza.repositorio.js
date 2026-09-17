//Esta es la capa dpnde se persisten los datos

const sleep = (ms) => new Promise ((resolve) => setTimeout(resolve, ms))
let pizzas = [{ id:1, nombre: "Toluqueña", descripcion: "Chorizo, queso oaxaca y piña"}]   

/**
 * Retorna la lista de las pizzas 
 * @returns []
 */

export async function obtenerTodasLasPizzasAsync() {
    await sleep(2000)

    return pizzas
}

/**
 * Regresa la pizza del id buscado o undefined si no lo encuentra 
 * @param {*} id 
 * @returns 
 */
export async function obtenerPizzaPorIdAsync(id) {
    await sleep(1000)
    const pizza = pizzas.find (x => x.id == id)

    return pizza
}

export async function agregarPizzaAsync(pizza){
    await sleep(1000)
    pizzas.push(pizza)
}


export async function actualzarPizzaAsync(pizza){
    await sleep(1000)

    //buscar la pizza
    const pizzaEncontrada = pizzas.find(x => x.id == pizza.id)

    //actualizar los datos
    pizzaEncontrada.nombre = pizza.nombre
    pizzaEncontrada.descripcion = pizza.descripcion
}

export async function borrarPizzaAsync(id){
    await sleep(1000)

    const indice = pizzas.findIndex(x => x.id == id)

    pizzas.splice(indice, 1)
}