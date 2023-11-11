import Form from "../../components/form"
import { styled } from 'styled-components'

const TagMain = styled.main`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`

const Div = styled.div`
  font-size: 26px
`

function Login() {

  return (
    <TagMain>
      <Div>Login</Div>
      <Form />
    </TagMain>
  )
}

export default Login