import React, { useEffect, useState } from 'react'

function Table () {

    const [state, setState] = useState([]);
    const url = `http://scratchya.com.ar/react/datos.php`;
    const getInfo = async () => {
        const respond = await fetch(url);
        const data = await respond.json();
        setState(data);
    };

    useEffect(() => {
        getInfo()
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>¿Borrar?</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map(product => (
                        <tr>
                            <td>{product.codigo}</td>
                            <td>{product.descripcion}</td>
                            <td>{product.precio}</td>
                            <td><button onClick={() =>{
                                var data = state.filter((producto) => producto.codigo !== product.codigo);
                                var newData = [];
                                Object.assign(newData, data);
                                setState(newData);
                            }}>Borrar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table;