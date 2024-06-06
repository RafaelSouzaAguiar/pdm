import React from 'react'

const Pedido = ({iconeNome, iconeEfeito, titulo, descricao}) => {
    return (
        <div className="d-flex">
            <div className="d-flex align-items-center">
                <i className={`fa-solid fa-2x ${iconeNome} ${iconeEfeito}`}></i>
            </div>
            <div className="flex-grow-1 ms-3 border">
                <h4 className="text-center">{titulo}</h4>
                <p className="text-center">{descricao}</p>
            </div>
        </div>

    )
}

export default Pedido;