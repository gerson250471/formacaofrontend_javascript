// 01 - Início do Projeto
import './App.css'

// 02 - CSS de componente
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  // 04 - inline style dinâmico
  const n = 15

  // 05 - classe dinâmica
  const redTitle = true;

  return (
    <div className='App'>
      {/* 01 - css global */}
      <h1>CSS NO REACT</h1>
      {/* 02 - css de component */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
      {/* 03 - inline style */}
      <p style={{color:'chocolate',padding:"25px",borderTop:"1px dotted blue"}}>Este elemento tem estilos inline</p>
      {/* 04 - inline style dinâmico */}
      <h2 style={ n > 10 ? {color:"purple"} : {color:"magenta"}}>CSS Dinâmico</h2>
      <h2 style={ n > 20 ? {color:"purple"} : {color:"magenta"}}>CSS Dinâmico 2</h2>
      {/* 05 - classe dinâmica */}
      <h3 className= {redTitle ? "red-title" : "title"} >Este estilo vai ter uma classe</h3>
      {/* 06 - css modules */}
      <Title />
    </div>
  )
}

export default App
