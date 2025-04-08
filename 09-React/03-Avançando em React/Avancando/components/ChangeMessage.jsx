const ChangeMessage = ({handlMessage}) => {
  const messages = ["Oi", "Ola", "Tudo bem?"]
  return (
    <div>
        <button onClick={() => handlMessage(messages[0])}>1</button>
        <button onClick={() => handlMessage(messages[1])}>2</button>
        <button onClick={() => handlMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessage