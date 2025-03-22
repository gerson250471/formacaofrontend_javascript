// import React from 'react'

const Events = () => {
    const handleClick = () =>{
        console.log("Executou")
    }

    // 08 - Função de Renderização
    const renderSomething = (x) => {
        if (x){
            return <h1>Renderizando Isso</h1>;
        }else{
            return <h1>Renderizando Outra coisa</h1>;
        }
    };



  return (
    <div>
        <div>
            <button onClick={() => console.log("Teste de Botão no React")}>Clique aqui</button>
        </div>
        {/* 07 - evento com função */}
        <div>
            <button onClick={handleClick}>Favor Clicar</button>
        </div>
        {/* 08 - Função com renderização */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events