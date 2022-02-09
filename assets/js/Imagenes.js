import Personajes from "./Consulta.js";

//interaccion de boton ver imagenes
//id="buttonImages"

//3. Realizar una consulta asíncrona utilizando una función async/await para obtener las
//   imágenes correspondientes a los peleadores.

document.getElementById("buttonImages").addEventListener("click", async ()=>{
    const { personajes } = await Personajes.getData();
    console.log(personajes);
    const pj = document.getElementById("nombre").value; //segun lo que se seleccione en input id="nombre"
    //con el valor del nombre haremos lo siguiente
    //buscando en arreglo de objetos coincidencia de nombre seleccionado y personaje
    //entrando al atributo imagenes
    const imagenesPjTemplate = personajes.find((p) => p.name == pj).imagenes.map((i) => `<img width="200" src="/assets/imgs/${pj}/${i}"/>`).join("");

    document.getElementsByClassName("personajes")[0].innerHTML = imagenesPjTemplate;

    document.querySelectorAll(".personajes img").forEach((i) => {
        i.addEventListener("click", (e) =>{
            $("#imagenesModal").modal("toggle");
            const imagenSrc = e.target.src;
            document.getElementById("preview").style.backgroundImage = `url(${imagenSrc})`;
        })
    })
});