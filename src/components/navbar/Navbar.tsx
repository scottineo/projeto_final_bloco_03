import { GameControllerIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-4 w-full">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <GameControllerIcon size={32} />
            <p>Loja de Jogos</p>
          </div>
        </Link>
        <div className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
          <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="/home"
                  className="hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]"
                >
                  Home
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="/sobre"
                  className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                >
                  Sobre
                </Link>
              </li>
            </ul>

            <ul className="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ml-auto">
              <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                <Link
                  to="/contato"
                  className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-l border-[#333] h-6 max-lg:hidden"></div>

        <div className="flex items-center ml-auto space-x-6">
          <Link
            to="/categorias"
            className="text-[#007bff] font-bold text-[15px] hover:text-[#0056b3] transition-colors duration-300"
          >
            Categorias
          </Link>
          <button className="px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]">
            Crie uma categoria
          </button>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
