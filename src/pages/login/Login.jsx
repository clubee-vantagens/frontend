import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";

function Login() {
  return (
    <main className="flex flex-col justify-between items-center w-screen h-screen bg-yellow-400">
      <div className="text-xl font-bold mt-2.5" id="login"></div>
      <Form id="login-form" />
      <Footer />
    </main>
  );
}

export default Login;
