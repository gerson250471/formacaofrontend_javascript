// 01 - Início do Projeto
import './App.css'

// 02 - CSS de componente
import MyComponent from './components/MyComponent'

function App() {

  return (
    <div className='App'>
      {/* 01 - css global */}
      <h1>CSS NO REACT</h1>
      {/* 02 - css de component */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
    </div>
  )
}

export default App
