import {useState} from 'react';

const ListRender = () => {
    const [list] = useState(["Matheus","Gerson","Abner"]);

    const [users,setUsers] = useState([
      {id:1,name:"Mateus",age:32},
      {id:2,name:"Gerson",age:54},
      {id:3,name:"Marcos",age:52},
    ])

    const deleteRandom = () =>{
      const randomNumber = Math.floor(Math.random()*4)

      setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id));

    }
    
  return (
    <div>
        {/* 4 - render sem key */}
        <ul>
            {list.map((item,i) => (
                <li key={i}>{item}</li>
            )) }
        </ul>
        {/* 5 - render com key */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>
                {user.name} - {user.age} anos
            </li>
          ))}
        </ul>
        {/* 6 - previous state */}
        <button onClick={deleteRandom}>Delete randm user</button>
    </div>
  )
}

export default ListRender