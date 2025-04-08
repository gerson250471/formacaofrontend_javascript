import './App.css'

// 02 - imagem em assets
import night from "./assets/night.jpg";

// 03 - useState
import Data from '../components/Data';

// 04 - renderização de lista
import ListRender from '../components/ListRender';

// 07 - Render condicional
import ConditionalRender from '../components/ConditionalRender';

// 08 - props
import ShowUserName from '../components/ShowUserName';

// 09 - Desestruturando props
import CarDetails from '../components/CarDetails';

// 11 - renderização de listas com componente
const cars = [
  {id:1,brand:"Ferrari",Color:"Amarelo",km:0},
  {id:2,brand:"kia",Color:"Branco",km:20000},
  {id:3,brand:"Renault",Color:"Azul",km:32000},
]

// 12 - fragment
import Fragment from '../components/Fragment';

// 13 - children
import Container from '../components/Container';

// 14 - Função em prop
import ExecuteFunction from '../components/ExecuteFunction';

// 15 - state lift
import { useState } from 'react';
import Message from '../components/Message';
import ChangeMessage from '../components/ChangeMessage';

function App() {
  // 14 - Função em prop
  function showMessage() {
    console.log("Evento do componente pai")
  }

  // 15 - state lift
  const [message, setMessage] = useState("");
 
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <div className='App' style={{paddingBottom:"800px"}}>
        <h1>Avançando em React</h1>
        {/* 01 - imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />
        {/* 02 - imagem em assets */}
        <img src={night} alt="Outra imagem" />
        {/* 03 - useState */}
        <Data />
        {/* 04 - renderização de lista  */}
        <ListRender />
        {/* 07 - Render conditional */}
        <ConditionalRender />
        {/* 08 - props */}
        <ShowUserName name = "Gerson Bernardo" />
        {/* 09 - desestruturando props */}
        <CarDetails brand={"Fiat"} km={999} color="Vermelho"/>
        {/* 10 - reaproveitamento dos componentes */}
        <CarDetails brand={"Chevrole"} km={12456} color="blue"/>
        <CarDetails km={9987} color="orange" brand={"Honda"}  />
        {/* 11 - renderização de lista com componente */}
        {cars.map((car) => (
          <CarDetails
          id = {car.id}
          brand={car.brand}
          km={car.km}
          color={car.Color}
          />
        ))}
        {/* 12 - fragment */}
        <Fragment />
        {/* 13 - children */}
        <Container>
          <p>Alguma coisa</p>
        </Container>
        {/* 14 - função em prop */}
        <ExecuteFunction myFunction = {showMessage}/>
        {/* 15 - state lift */}
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}  />
      </div>
    </>
  )
}

export default App
