import Footer from "../../components/login/Footer";
import FormLogin from "../../components/login/FormLogin";

function Login() {
  return (
    <main className="flex flex-col justify-between items-center w-screen h-screen bg-background__primary">
      <div className="text-xl font-bold mt-2.5" id="login"></div>
      <FormLogin id="login-form" />
      <Footer />
    </main>
  );
}

export default Login;
