export const getInfo = async () => {
    const url = `http://scratchya.com.ar/react/datos.php`;
    const respond = await fetch(url);
    const data = await respond.json();

    const info = data.map(datas => {
        return {
            codigo: datas.codigo,
            descripcion: datas.descripcion,
            precio: datas.precio
        }
    });

    return info;
}
