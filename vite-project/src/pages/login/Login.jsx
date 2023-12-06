import Footer from "../../components/footer/Footer"
import Form from "../../components/form/Form"
import { TagMain, Div } from './styleLogin'


function Login() {

  return (
    <TagMain>
      <Div id="login"></Div>
      <Form id="login-form" />
      <Footer />
    </TagMain>
  )
}

export default Login