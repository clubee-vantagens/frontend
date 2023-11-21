import { Email, Password, Submit, FormContainer, Label } from './styleForm'
import useForm from '../../hooks/useForm'


function Form() {
  const { form, onChange } = useForm({email: "", password: ""})

  return (
    <FormContainer action="" method="post">
      <Label htmlFor='email'>Email</Label>
      <Email type="email" name="email" placeholder='Email' value={form.email} onChange={onChange} /> <br />
      <Label htmlFor='password'>Senha</Label>
      <Password type="password" name="password" placeholder='Senha' value={form.password} onChange={onChange} /> <br />
      <Submit type="submit" value="Login" onClick={() => { }} />
    </FormContainer>
  )
}

export default Form