import { styled } from 'styled-components'

const Email = styled.input`
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 5px;
  padding: 5px;
  width: 100%
`

const Password = styled.input`
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  padding: 5px;
  width: 100%
`

const Submit = styled.input`
  padding: 5px;
  width: 30%;
  align-self: center;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`
const Label = styled.label`
  font-weight: 600;
  font-size: 20px;
`

export { Email, Password, Submit, FormContainer, Label }