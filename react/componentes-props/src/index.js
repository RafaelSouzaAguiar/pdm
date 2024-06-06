import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Rodape from './Rodape'
import Feedback from './Feedback'

const App = () => {

    const feedback = <Feedback
        textoOK="Já chegou"
        textoNOK="Ainda não chegou"
        funcaoOK={() => alert("Obrigado pelo feedback!")}
        funcaoNOK={() => alert("Verificaremos o que houve")}
    />

    return <div className="container-fluid border mt-2">
        <div className="row">
            <div className="col-12">
                {/* h1.display-5.text-center{Seus Pedidos} */}
                <h1 className="display-5 text-center">Seus Pedidos</h1>
            </div>
        </div>

        {/* essa é a linha dos pedidos */}
        <div className="row">
            {/* Primeiro pedido */}
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="22/04/2024">
                    <Pedido
                        iconeNome="fa-memory"
                        iconeEfeito="fa-bounce"
                        titulo="Memória RAM"
                        descricao="16 Gb" 
                    />
                    {feedback}
                </Cartao>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="22/04/2023">
                    <Pedido
                        iconeNome="fa-hdd"
                        iconeEfeito="fa-fade"
                        titulo="HDD"
                        descricao="1 Tb"
                    />
                    {feedback}
                </Cartao>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="21/01/2023">
                    <Pedido
                        iconeNome="fa-book"
                        iconeEfeito="fa-shake"
                        titulo="Livro"
                        descricao="Concrete Mathematics"
                    />
                    {feedback}
                </Cartao>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <Cartao cabecalho="22/04/2022">
                    <Pedido
                        iconeNome="fa-laptop"
                        iconeEfeito="fa-flip"
                        titulo="Notebook"
                        descricao="i7 12th"
                    />
                    {feedback}
                </Cartao>
            </div>
        </div>

        <Rodape 
            nomeEmpresa="RSA Equipamentos e Informatica"
            social1="fa-facebook"
            social2="fa-twitter"
            social3="fa-instagram" />

    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)