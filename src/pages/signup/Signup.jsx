import clubeeLogo from "../../assets/svgs/clubee-logo-2.svg";
import { LuChevronRight } from "react-icons/lu";

export default function Signup() {
  return (
    <div className="bg-yellow-400 h-screen">
      <header className="flex flex-col items-center p-8">
        <img src={clubeeLogo} className="size-[150px]" />
        <h1 className="font-bold text-3xl">Cadastro</h1>
      </header>
      <main className="bg-white rounded-t-xl ml-1 mr-1 h-[80%]">
        <nav>
          <ul className="flex gap-8 text-xl justify-evenly text-gray-300 font-semibold">
            <li>Estabelecimento</li>
            <li className="bg-gray-500">Cliente</li>
          </ul>
        </nav>
        <form>
          <fieldset className="flex flex-col items-center gap-5 py-10">
            <input
              className="border border-gray-400 rounded-full py-1 w-4/5 "
              required
              type="text"
              placeholder="Nome Fantasia"
            />
            <input
              className="border border-gray-400 rounded-full py-1 w-4/5 "
              required
              type="email"
              placeholder="Email"
            />
            <input
              className="border border-gray-400 rounded-full py-1 w-4/5 "
              required
              type="password"
              placeholder="Senha"
            />
            <input
              className="border border-gray-400 rounded-full py-1 w-4/5 "
              type="password"
              placeholder="Confirmar Senha"
            />
            <input
              className="border border-gray-400 rounded-full py-1 w-4/5 "
              type="text"
              placeholder="CNPJ"
            />
            <select
              className="border border-gray-400 rounded-full py-1 w-4/5 "
              type="text"
              placeholder="Segmento"
            >
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
        </form>
      </main>
    </div>
  );
}
