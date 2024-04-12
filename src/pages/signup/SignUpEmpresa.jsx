import { useState } from "react";
import { LuChevronLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import clubeeLogo from '../../assets/icons/clubee-logo.png'
import { IoCloseOutline } from "react-icons/io5";

export default function SignupEmpresa() {
  const { form, onChange } = useForm({
    nomeFantasia: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    segmento: "",
    termos: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-[#FFFAEB] h-screen">
      <header className="grid grid-cols-3 h-40">
        <LuChevronLeft
          className="size-10 text-gray-400"
          onClick={() => console.log("pressed")}
        />

        <h1 className="font-bold text-3xl self-center col-start-2 col-end-4">
          Sou empresa
        </h1>
      </header>
      <main className="bg-[#FEFAEA] rounded-t-xl ml-1 mr-1 h-[73%] text-center">
        <form>
          <fieldset className="flex flex-col items-center gap-5 py-10">
            <input
              className="rounded-md h-12 py-1 w-4/5 pl-2 bg-[#FFFFFF] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-center"
              required
              type="text"
              placeholder="Nome Fantasia"
              value={form.nome}
              onChange={onChange}
              name="nomeFantasia"
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
            <select
              className="rounded-md h-12 py-1 w-4/5 pl-2 bg-[#FFFFFF] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-center"
              type="text"
              defaultValue="segmento"
              value={form.segmento}
              onChange={onChange}
              name="segmento"
            >
              <option disabled value="segmento">
                Segmento
              </option>
              <option value="restaurante">Restaurante</option>
              <option value="cafeteria">Cafeteria</option>
              <option value="padaria">Padaria</option>
              <option value="bar">Bar</option>
              <option value="food-truck">Food truck</option>
              <option value="sorveteria">Sorveteria</option>
              <option value="fast-food">Fast food</option>
              <option value="supermercado">Supermercado</option>
              <option value="loja-de-roupas">Loja de roupas</option>
              <option value="loja-de-eletronicos">Loja de eletrônicos</option>
              <option value="farmacia">Farmácia</option>
              <option value="loja-de-moveis">Loja de móveis</option>
              <option value="livraria">Livraria</option>
              <option value="loja-de-conveniencia">Loja de conveniência</option>
            </select>
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
            <IoCloseOutline className="self-end size-10" />
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
/* <form>
<fieldset className="flex flex-col items-center gap-5 py-10">
<input
  className="rounded-md h-12 py-1 w-4/5 pl-2 bg-[#FFFFFF] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-center"
  required
  type="text"
  placeholder="Nome Fantasia"
/>
<input
  className="border border-gray-400 rounded-full py-1 w-4/5 pl-2 bg-[#FEFAEA]"
  required
  type="email"
  placeholder="Email"
/>
<input
  className="border border-gray-400 rounded-full py-1 w-4/5 pl-2 bg-[#FEFAEA]"
  required
  type="password"
  placeholder="Senha"
/>
<input
  className="border border-gray-400 rounded-full py-1 w-4/5 pl-2 bg-[#FEFAEA]"
  type="password"
  placeholder="Confirmar Senha"
/>
<input
  className="border border-gray-400 rounded-full py-1 w-4/5 pl-2 bg-[#FEFAEA]"
  type="text"
  placeholder="CNPJ"
/>
<select
  className="border border-gray-400 rounded-full py-1 w-4/5 bg-[#FEFAEA]"
  type="text"
  defaultValue='segmento'
>
  <option disabled value="segmento">Segmento</option>
  <option value="restaurante">Restaurante</option>
  <option value="cafeteria">Cafeteria</option>
  <option value="padaria">Padaria</option>
  <option value="bar">Bar</option>
  <option value="food-truck">Food truck</option>
  <option value="sorveteria">Sorveteria</option>
  <option value="fast-food">Fast food</option>
  <option value="supermercado">Supermercado</option>
  <option value="loja-de-roupas">Loja de roupas</option>
  <option value="loja-de-eletronicos">Loja de eletrônicos</option>
  <option value="farmacia">Farmácia</option>
  <option value="loja-de-moveis">Loja de móveis</option>
  <option value="livraria">Livraria</option>
  <option value="loja-de-conveniencia">Loja de conveniência</option>
</select>
<button className="self-end mt-20" type="submit">
  <LuChevronRight className="size-20 text-gray-400" />
</button>
</fieldset>
</form> */
