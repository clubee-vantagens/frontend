import { Email, Password, Submit, FormContainer, Label, PasswordContainer } from './styleForm'
import useForm from '../../hooks/useForm'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react'


function Form() {
  const { form, onChange } = useForm({email: "", password: ""})
  const [isHidden, setIsHidden] = useState(true)

  const handleShowPassword = () => {
    setIsHidden(prevState => !prevState)
  }
  
  return (
    <FormContainer action="" method="post">
      <Label htmlFor='email'>Email</Label>
      <Email type="email" name="email" placeholder='Email' value={form.email} onChange={onChange} /> <br />
      <Label htmlFor='password'>Senha</Label>
      <PasswordContainer>
        <Password type={isHidden ? 'password': 'text'} name="password" placeholder='Senha' value={form.password} onChange={onChange} /> <br />
        {isHidden ? <FaRegEye className="show-hide-icon" onClick={handleShowPassword}/> : <FaRegEyeSlash className="show-hide-icon" onClick={handleShowPassword}/>}
      </PasswordContainer>
      <Submit type="submit" value="Login" onClick={() => { }} />
    </FormContainer>
  )
}

export default Form