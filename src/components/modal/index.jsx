import "./style.css"

function Modal({ children, visible, onClose }){

  if( !visible ){
    return null
  }

  return  (

    <div className="container-modal">

        <div className="modal-header">

             <button onClick={onClose} id="bt-fechar">X</button>

        </div>

        <h1 id="title">Dados Cadastrais</h1>

        {children}

   </div>
)

}

export default  Modal