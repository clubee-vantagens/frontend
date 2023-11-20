import { Email, Password, Submit } from './styleForm'
import useForm from '../../hooks/useForm'

function Form() {
  const { form, onChange } = useForm({email: "", password: ""})

  return (
    <form action="" method="post">
      <Email type="email" name="email" placeholder='Email' value={form.email} onChange={onChange} /> <br />
      <Password type="password" name="password" placeholder='Senha' value={form.password} onChange={onChange} /> <br />
      <Submit type="submit" value="Login" onClick={() => { }} />
    </form>
  )
}

export default Form