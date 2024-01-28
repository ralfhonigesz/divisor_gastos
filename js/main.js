let saludar = "Bienvenido al divisor de gastos! Empecemos"
alert(saludar)

let motivoCuenta = prompt("Ingrese motivo de la nueva cuenta de gastos")
console.log(motivoCuenta)

const participantes = [
    {
        nombre: prompt("Ingrese su nombre"),
        apellido: prompt("Ingrese su apellido")
    }
]
console.log(participantes)

let agregar = true
while (agregar) {

    const addElement = () => {
        const nombre = prompt("Ingrese nombre nuevo participante")
        const apellido = prompt("Ingrese apellido nuevo participante")

        const participante = {
            nombre: nombre,
            apellido: apellido
        }
        participantes.push(participante)
    }

    addElement()

    let confirmacion = prompt("Desea agregar nuevo participante? (si/no)").toLowerCase()
    if (confirmacion == "no") {
        agregar = false
        break
    }
}

let continuar = true
while (continuar) {
    let menu = parseInt(prompt(" Ingrese 1 para agregar nuevo gasto a un participante \n Ingrese 2 para agregar nuevo participante \n Ingrese 3 para eliminar participante \n Ingrese 4 para liquidar cuenta \n Ingrese 5 para salir"))
    switch (menu) {

        case 1:

            
            break

        case 2:

            const addElement = () => {
                const nombre = prompt("Ingrese nombre nuevo participante")
                const apellido = prompt("Ingrese apellido nuevo participante")

                const participante = {
                    nombre: nombre,
                    apellido: apellido
                }
                participantes.push(participante)
            }

            addElement()
            console.log(participantes)
            break

        case 3:

            participantes.pop()
            console.log(participantes)
            break

        case 4:

            break

        default:

            console.log("Hasta el proximo gasto!")
            break

    }

    let confirmación = prompt("Desea volver al menu? (si / no)").toLowerCase()
    if (confirmación == "no") {
        continuar = false
        alert("Hasta el proximo gasto!")
    }
}


