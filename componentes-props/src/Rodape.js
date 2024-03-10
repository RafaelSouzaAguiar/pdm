import React from 'react'

const Rodape = (props) => {
    return (
        <div className="card align-items-center">
            <div className="card-body text-center">
                <p>{props.nomeEmpresa}</p>
                <i className={`fa-brands fa-2x ${props.social1}`}></i>
                <i className={`fa-brands fa-2x ${props.social2}`}></i>
                <i className={`fa-brands fa-2x ${props.social3}`}></i>
            </div>
        </div>
    )
}

export default Rodape

