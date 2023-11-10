import { useState } from 'react'
import { Container } from './style-form'

function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container action="" method="post">
      <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
      <input type="password" name="pasword" id="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
      <input type="submit" value="Login" onClick={() => { }} />
    </Container>
  )
}

export default Form