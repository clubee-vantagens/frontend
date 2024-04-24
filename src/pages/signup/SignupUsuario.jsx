import { useState } from 'react';
import { LuChevronLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { IoCloseOutline } from "react-icons/io5";
import clubeeLogo from '../../assets/icons/clubee-logo.png'
import {useNavigate} from 'react-router-dom'

export default function SignupUsuario() {
  const { form, onChange } = useForm({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    termos: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="bg-[#FFFAEB] h-screen">
      <header className="grid grid-cols-3 h-40">
        <LuChevronLeft
          className="size-10 text-gray-400"
          onClick={() => navigate('/login')}
        />

        <h1 className="font-bold text-3xl self-center col-start-2 col-end-4">
          Sou cliente
        </h1>
      </header>
      <main className="bg-[#FEFAEA] rounded-t-xl ml-1 mr-1 h-[73%] text-center">
        <form>
          <fieldset className="flex flex-col items-center gap-5 py-10">
            <input
              className="rounded-md h-12 py-1 w-4/5 pl-2 bg-[#FFFFFF] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-center"
              required
              type="text"
              placeholder="Nome"
              value={form.nome}
              onChange={onChange}
              name="nome"
            />
            <input
              className="rounded-md h-12 py-1 w-4/5 pl-2 bg-[#FFFFFF] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-center"
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              name="email"
            />
            <input
              className="rounded-md h-12 py-1 w-4/5 pl-2 bg-[#FFFFFF] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-center"
              required
              type="password"
              placeholder="Senha"
              value={form.senha}
              onChange={onChange}
              name="senha"
            />
            <input
              className="rounded-md h-12 py-1 w-4/5 pl-2 bg-[#FFFFFF] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-center"
              type="password"
              placeholder="Confirmar Senha"
              value={form.confirmarSenha}
              onChange={onChange}
              name="confirmarSenha"
            />
            <div className="flex w-4/5">
              <input
                className="mr-4"
                type="checkbox"
                id="termos"
                name="termos"
                checked={form.termos}
                onChange={onChange}
              />
              <label className="text-[#757575]" htmlFor="termos">
                Concordo com os{" "}
                <Link className="underline" to="/termos">
                  termos e condições
                </Link>
              </label>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log(form);
                setIsModalOpen(true);
              }}
              className="w-4/5 h-12 rounded-md bg-[#6ff79a] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
            >
              Cadastrar
            </button>
          </fieldset>
        </form>
        {isModalOpen && (
          <div className="bg-[#FFFAEB] w-4/5 h-1/2 absolute rounded-3xl top-[25%] left-[10%] flex flex-col justify-between items-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
            <IoCloseOutline onClick={() => setIsModalOpen(false)} className="self-end size-10" />
            <img src={clubeeLogo}/>
            <p>Cadastro realizado com sucesso!</p>
            <button className='bg-[#6ff79a] w-48 h-12 rounded-md drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] mb-3 font-bold' onClick={() => setIsModalOpen(false)}>Continuar</button>
          </div>
        )}
        <p>
          Já tem uma conta?{" "}
          <Link className="font-bold" to="/login">
            Acessar!
          </Link>
        </p>
      </main>
    </div>
  );
}
