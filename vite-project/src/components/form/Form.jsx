import { useState } from 'react'
import { styled } from 'styled-components'

const TagForm = styled.form`
  
`

const Email = styled.input`
  margin-bottom: 5px;
  padding: 5px;
  width: 80%
`

const Password = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 80%
`

const Submit = styled.input`
  padding: 5px;
  width: 30%
`

function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <TagForm action="" method="post">
      <Email type="email" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
      <Password type="password" name="pasword" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
      <Submit type="submit" value="Login" onClick={() => { }} />
    </TagForm>
  )
}

export default Form