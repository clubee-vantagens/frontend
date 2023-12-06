import { styled } from 'styled-components'

const Email = styled.input`
  border: none;
  border-radius: 15px;
  margin-bottom: 5px;
  padding: 5px;
  width: 80%;
  height: 45px;
  text-align: center;
`

const Password = styled.input`
  border: none;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  height: 45px;
  text-align: center;
`

const Submit = styled.input`
  padding: 5px;
  width: 30%;
  align-self: center;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const PasswordContainer = styled.div`
  position: relative;
  width: 80%;
  .show-hide-icon {
    position: absolute;
    right: 10px;
    top: 40%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`
const LogoImage = styled.img`

`

export { Email, Password, Submit, FormContainer, PasswordContainer, LogoImage }