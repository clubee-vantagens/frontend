import Footer from "../../components/footer/Footer"
import Form from "../../components/form/Form"
import { styled } from 'styled-components'

const TagMain = styled.main`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
`

const Div = styled.div`
  font-size: 26px
`

function Login() {

  return (
    <TagMain>
      <Div>Login</Div>
      <Form />
      <Footer />
    </TagMain>
  )
}

export default Login