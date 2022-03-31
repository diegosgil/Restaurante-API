//VAR, LET CONST
//var nombre2="desarrollo"
// if (12>11){
//     let nombre = "udem"
//     console.log(nombre);
// }
// console.log(nombre);

//CALLBACKS
/*
const fx_imprimir = () => {
    console.log("Hola Mundo");
}

const ejecutador = (nombreFuncion, funcion) => {
    console.log("Ejecutar la funcion: " + nombreFuncion)
    console.log();
    funcion(123)
}

ejecutador("funcion de imprimir", fx_imprimir)

ejecutador("Impresion 2", (data) => {
    console.log("Holamundo impresion 2", data);
})
*/

console.log("1");

const MAIN = () => {
}

//PROMESAS

const conectarDB = () => {
    return new Promise((resolve, reject) => {
        if(1 == 1){
            resolve({ok:true, message:"Conectado"})
        }else{
            reject()
        }
    })
}
conectarDB().then((data) => {
    console.log("Conexión OK", data)
}).catch ((error => {
    console.log("Error al conectar")
}))


//ASYNC AWAIT
const name = () => {

    let r1 = await conectarDB()
    let r2 = await conectarDB()


}

MAIN().thenk(() => {
    console.log("Ejecucion finalizada");
})


