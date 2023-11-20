import { useState } from 'react'
import { Email, Password, Submit } from './styleForm'

function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form action="" method="post">
      <Email type="email" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
      <Password type="password" name="pasword" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
      <Submit type="submit" value="Login" onClick={() => { }} />
    </form>
  )
}

export default Form