// import React from 'react'

const TemplateExpression = () => {
    const name = "Gerson Bernardo"
    const data = {
        age:54,
        job:"Analista de Sistemas",
    };

  return (
    <div>
        <p>A soma é {2+2}</p>
        <h4>Bem vindo {name}</h4>
        <p>Sua idade é {data.age} anos e você é um {data.job}</p>
    </div>
  )
}

export default TemplateExpression