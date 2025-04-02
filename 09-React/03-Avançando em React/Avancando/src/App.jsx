import './App.css'

// 02 - imagem em assets
import night from "./assets/night.jpg";

// 03 - useState
import Data from '../components/Data';

// 04 - renderização de lista
import ListRender from '../components/ListRender';

function App() {
  return (
    <>
      <div className='App' style={{paddingBottom:"800px"}}>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />
        {/* 2 - imagem em assets */}
        <img src={night} alt="Outra imagem" />
        {/* 3 - useState */}
        <Data/>
        {/* 4 - renderização de lista  */}
        <ListRender/>
      </div>
    </>
  )
}

export default App
