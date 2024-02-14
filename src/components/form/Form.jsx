import { Email, Password, Submit, FormContainer, PasswordContainer, LogoImage } from './styleForm'
import useForm from '../../hooks/useForm'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react'
import clubeeLogo from '../../assets/svgs/Clubee_logo1.svg'



function Form() {
  const { form, onChange } = useForm({email: "", password: ""})
  const [isHidden, setIsHidden] = useState(true)

  const handleShowPassword = () => {
    setIsHidden(prevState => !prevState)
  }
  
  return (
    <FormContainer action="" method="post">
      <LogoImage src={clubeeLogo} />
      <Email type="email" name="email" placeholder='Informe seu email' value={form.email} onChange={onChange} /> <br />
      <PasswordContainer>
        <Password type={isHidden ? 'password': 'text'} name="password" placeholder='senha' value={form.password} onChange={onChange} /> <br />
        {isHidden ? <FaRegEye className="show-hide-icon" onClick={handleShowPassword}/> : <FaRegEyeSlash className="show-hide-icon" onClick={handleShowPassword}/>}
      </PasswordContainer>
      <Submit type="submit" value="Login" onClick={() => { }} />
    </FormContainer>
  )
}

export default Form