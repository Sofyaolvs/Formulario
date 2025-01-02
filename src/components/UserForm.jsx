import React from 'react'

//recebe as props data e updateFieldHandler
export const UserForm = ({data, updateFieldHandler}) => {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input type="text"
           required
           name='text' 
           placeholder='Digite seu nome' 
           //controled usa o valor recebido pela prop data
           value={data.name || ""}
           //att o estado chamando a func passada via props
           onChange={(e)=> updateFieldHandler("name", e.target.value)}
           />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail:</label>
          <input 
          required 
          type="email" 
          name='email' 
          placeholder='Digite seu E-mail' 
          value={data.email || ""}
           onChange={(e)=> updateFieldHandler("email", e.target.value)}
           />
        </div>


    </div>
  )
}
