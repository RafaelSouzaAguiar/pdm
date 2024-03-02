import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom'

const App = () => {
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
                <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-hard-drive fa-2x fa-beat-fade"></i>
                        </div>
                        <div className="flex-grow-1 ms-3 border">
                            <div className="h4 text-center">HD</div>
                            <div className="p text-center">HD 1Tb</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-memory fa-2x fa-bounce"></i>
                        </div>
                        <div className="flex-grow-1 ms-3 border">
                            <div className="h4 text-center">RAM</div>
                            <div className="p text-center">Memória 16Gb</div>
                        </div>
                    </div>
                </div>

            </div>
            

            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                            <i className="fa-brands fa-java fa-2x fa-flip"></i>
                        </div>
                        <div className="flex-grow-1 ms-3 border">
                            <div className="h4 text-center">Java</div>
                            <div className="p text-center">Projeto Simples</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="col-sm-12 col-lg-6 col-xxl-3">
                <div className="card">
                    <div className="card-header text-muted">22/04/2021</div>
                    <div className="card-body d-flex">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-gamepad fa-2x fa-shake"></i>
                        </div>
                        <div className="flex-grow-1 ms-3 border">
                            <div className="h4 text-center">Gamepad</div>
                            <div className="p text-center">Controle Multiplataforma</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)