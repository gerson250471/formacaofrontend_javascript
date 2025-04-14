import "./MyForm.css"
import { useState } from "react";

const MyForm = ({userName,userEmail}) => {
    // 03 - Gerenciamento de dados
    const[name,setName] = useState(userName);
    const[email,setEmail] = useState(userEmail);

    const[bio,setBio] = useState("");
    const [role,setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    // 05 - Envio de form
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name,email,bio,role)

        // validação

        // envio

        // Limpar Formulário
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    console.log(name,email)

return (
    <div>
        {/* 01 - Criação form */}
        {/* 05 - envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" 
                name="name" 
                onChange={handleName} 
                // 06 - controlled input
                value={name || ""}
                />
            </div>
            {/* 02 - label envolvendo o input */}
            <label>
                <span>E-mail:</span>
                <input type="text" 
                name="email" 
                placeholder="Digite o seu e=mail" 
                // 04 - simplificando manipulação
                onChange={(e) => setEmail(e.target.value) }
                // 06 - controlled input
                value={email || ""}
                />
            </label>
            <label>
                <span>Bio:</span>
                <textarea name="bio"
                placeholder="Descrição do usuário" 
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                ></textarea>
            </label>
            {/* 09 - select */}
            <label>
                <span>Função no sistema</span>
                <select name="role"
                onChange={(e) => setRole(e.target.value)}
                value={role}
                >
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm