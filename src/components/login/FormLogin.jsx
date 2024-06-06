import useForm from "../../hooks/useForm";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import clubeeLogo from "../../assets/icons/clubee-logo.png";

function FormLogin() {
  const { form, onChange } = useForm({ email: "", password: "" });
  const [isEyesHidden, setIsEyesHidden] = useState(true);

  const handleShowPassword = () => {
    setIsEyesHidden((prevState) => !prevState);
  };

  return (
    <form
      className="flex flex-col items-center w-full gap-5"
      action=""
      method="post"
    >
      <img className="w-72 h-56 " src={clubeeLogo} />
      <input
        type="email"
        name="email"
        placeholder="Informe seu email"
        value={form.email}
        onChange={onChange}
        className="border-none outline-none rounded-2xl mb-3 p-4 w-4/5 h-11"
      />{" "}
      <div className="relative w-4/5">
        <input
          type={isEyesHidden ? "password" : "text"}
          name="password"
          placeholder="Senha"
          value={form.password}
          onChange={onChange}
          className="border-none outline-none rounded-2xl mb-1.5 p-4 w-full h-11"
        />{" "}
        <br />
        {isEyesHidden ? (
          <FaRegEye
            className="absolute right-2.5 top-[45%] -translate-y-1/2 cursor-pointer"
            onClick={handleShowPassword}
          />
        ) : (
          <FaRegEyeSlash
            className="absolute right-2.5 top-[45%] -translate-y-1/2 cursor-pointer"
            onClick={handleShowPassword}
          />
        )}
      </div>
      <div className="w-4/5 flex justify-end mb-10">
        <a href="#" className="text-gray-500">
          recuperar a senha?
        </a>
      </div>
      <input
        className="p-1 items-center w-[215px] h-[50px] rounded-3xl bg-white hover:bg-green-600 hover:text-white"
        type="submit"
        value="Entrar"
        onClick={() => {}}
      />
    </form>
  );
}

export default FormLogin;
