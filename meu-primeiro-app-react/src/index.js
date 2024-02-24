import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

//function f(){}
//const f = () => {}


const App = () => {
    const textoDoRotulo = 'Nome:'
    const estilosDoBotao = {marginTop: 12, paddingTop: 8, 
        paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', 
        border: 'none', width: '100%', borderRadius: 8}
    const obterTextoDoBotao = () => {
        return 'Enviar'
    }
    const fuiClicado = () => {

    }

    return(
        //expressão JSX (Javascript Extension)
        <div style={{margin: 'auto', width: 768, 
        backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
            <label className='rotulo' htmlFor="nome" style={{display: 'block', 
            marginBottom: 4}}>
                {textoDoRotulo}
            </label>
            <input type='text' id='nome' style={{paddingTop: 8,
            paddingBottom: 8, borderStyle: 'hidden', width: '100%',
            borderRadius: 8, outline: 'none'}}></input>
            <button style={estilosDoBotao}>
                {obterTextoDoBotao()}
            </button>
        </div>
    );
}
const Disciplina = () => {
    return(
        <t>Programação de Dispositivos Moveis</t>
    );
}
const Nome = () => {
    return(
        <t>Rafael Souza Aguiar</t>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')  
);

