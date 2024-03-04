// GLOBAL

const gastos = []

let agregar = document.getElementById("agregar")
let nombre = document.getElementById("nombre")
let gasto = document.getElementById("gasto")
let avisosError = document.getElementById("avisos-de-error")


// INGRESO VALORES

agregar.onclick = () => {

    let nombreValor = nombre.value
    let gastoValor = parseFloat(gasto.value)


    // Verificar nombre ingresado y gasto >= 0
    if (nombreValor !== '' && gastoValor >= 0) {

        // Verificar nombre repetido
        if (nombreRepetido(nombre.value)) {

            avisosError.innerText = "Nombre ya ingresado"

            limpiarInputs()

        } else {

            // Pushear nombre y gasto como objeto al array gastos
            let nombreGasto = {
                nombre: nombreValor,
                gasto: gastoValor
            }

            gastos.push(nombreGasto)

            limpiarInputs()

            borrarError()

            limpiarListaDeudas()

            // Mostrar nombre y gasto en lista html
            let lista = document.getElementById("lista")

            let print = document.createElement("li")
            print.innerHTML = `${nombreValor} gastó $${gastoValor.toFixed(2)}`
            lista.appendChild(print)

        }

    } else {

        // Aviso de datos ingresados incorrectos
        avisosError.innerText = "Datos incorrectos, vuelva a intentar"

        limpiarInputs()
    }
}

// CALCULAR DIVISION DE DEUDAS

let calcular = document.getElementById("calcular")
let listaDeudas = document.getElementById("lista-deudas")

calcular.onclick = () => {

    // Funcion calcular deudas
    function calcularDeudas() {
        const totalGastos = gastos.reduce((total, gasto) => total + gasto.gasto, 0)

        let gastoPorPersona = totalGastos / gastos.length

        gastos.forEach((gasto) => {
            let deuda = gastoPorPersona - gasto.gasto
            let li = document.createElement('li')
            li.textContent = `${gasto.nombre} debe ${deuda >= 0 ? 'dar' : 'recibir'} $${Math.abs(deuda).toFixed(2)}`
            listaDeudas.appendChild(li)
        })
    }
    calcularDeudas()
}

// GUARDAR EVENTO

let listaContainer = document.getElementById("lista-container")
let listaDeudasContainer = document.getElementById("lista-deudas-container")

let guardar = document.getElementById("guardar")

guardar.onclick = () => {
    localStorage.setItem('eventoGuardado', listaContainer.innerHTML)
    localStorage.setItem('eventoGuardado2', listaDeudasContainer.innerHTML)
    mostrarGuardados.innerHTML = "Guardado con exito!"
}

// VER EVENTOS GUARDADOS

let verGuardados = document.getElementById("ver-guardado")
let mostrarGuardados = document.getElementById("mostrar-guardados")

verGuardados.onclick = () => {

    let seccionGuardada = localStorage.getItem('eventoGuardado')
    let seccionGuardada2 = localStorage.getItem('eventoGuardado2')

    if (seccionGuardada) {
        mostrarGuardados.innerHTML = seccionGuardada + seccionGuardada2
    } else {
        mostrarGuardados.innerHTML = "No hay eventos guardados."
    }
}


// FUNCIONES

// funcion verificar nombre repetido
function nombreRepetido(nombre) {
    return gastos.some(function (gasto) {
        return gasto.nombre.toLowerCase() === nombre.toLowerCase()
    })
}

// funcion para borrar aviso de error
function borrarError() {
    avisosError.innerText = ""
}

// funcion limpiar inputs
function limpiarInputs() {
    nombre.value = ''
    gasto.value = ''
}

// Funcion limpiar lista de deudas
function limpiarListaDeudas() {
    listaDeudas.innerHTML = ''
}
















