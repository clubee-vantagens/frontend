import { useState } from "react";
import clubeeLogo from "../../assets/svgs/clubee-logo-2.svg";
import { LuChevronRight } from "react-icons/lu";

export default function Signup() {
  const [activeForm, setActiveForm] = useState('estabelecimento')
  
  return (
    <div className="bg-yellow-400 h-screen">
      <header className="flex flex-col items-center p-8">
        <img src={clubeeLogo} className="size-[150px]" />
        <h1 className="font-bold text-3xl">Cadastro</h1>
      </header>
      <main className="bg-[#FEFAEA] rounded-t-xl ml-1 mr-1 h-[73%]">
        <nav>
          <ul className="flex text-xl text-gray-400 font-semibold h-14 items-center">
            <li onClick={() => {setActiveForm('estabelecimento')}} className={`flex items-center justify-center w-1/2 h-full rounded-br-xl rounded-tl-xl ${activeForm === 'estabelecimento' ? `bg-gray-200 w-1/2 h-full` : null}`}>Estabelecimento</li>
            <li onClick={() => {setActiveForm('cliente')}} className={`flex items-center justify-center  w-1/2 h-full rounded-bl-xl rounded-tr-xl ${activeForm === 'cliente' ? `bg-gray-200` : null}`}>Cliente</li>
          </ul>
        </nav>
        {activeForm === 'estabelecimento' && (<form>
          <fieldset className="flex flex-col items-center gap-5 py-10">
            <input
              className="border border-gray-400 rounded-full py-1 w-4/5 pl-2 bg-[#FEFAEA]"
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
        </form>)}
        {activeForm === 'cliente' && (<form>
          <fieldset className="flex flex-col items-center gap-5 py-10">
            <input
              className="border border-gray-400 rounded-full py-1 w-4/5 pl-2 bg-[#FEFAEA]"
              required
              type="text"
              placeholder="Nome"
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
            <button className="self-end mt-20" type="submit">
              <LuChevronRight className="size-20 text-gray-400" />
            </button>
          </fieldset>
        </form>)}
      </main>
    </div>
  );
}
