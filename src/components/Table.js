import React from 'react'
import { useFetchInfo } from '../hooks/useFetchInfo'

export const Table = () => {

    const { data: info } = useFetchInfo();

    return (
        <>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                </tr>
                {info.map(product => (
                    <tr>
                        <td>{product.codigo}</td>
                        <td>{product.descripcion}</td>
                        <td>{product.precio}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}
