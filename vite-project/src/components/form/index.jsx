import { useState } from 'react'
import { styled } from 'styled-components'

const TagForm = styled.form`
  margin-top: 200px
`

function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <TagForm action="" method="post">
      <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
      <input type="password" name="pasword" id="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
      <input type="submit" value="Login" onClick={() => { }} />
    </TagForm>
  )
}

export default Form