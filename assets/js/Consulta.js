let personajes = (() => {
    const url = "http://localhost:5500/dbz.json"; //Almaceno en una constante la dbz.json
    const getData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    return { getData };
}) (); //4. Realizar por lo menos una función autoejecutable IIFE.

export default personajes;