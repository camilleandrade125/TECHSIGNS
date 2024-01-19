import "./style.css"

function Jogo2() {
  return (
    <>
      <div className="superior">
	<button>pause</button>
        <label>00:00:00</label>
      </div>

      <div className="Buttons-superior">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>

      <div className="Buttons-inferior">
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
      </div>
    </>
  )
}

export default Jogo2