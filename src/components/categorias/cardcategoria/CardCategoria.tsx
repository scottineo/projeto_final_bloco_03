import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
  descricao: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
      <div className="relative">
        <img
          src="https://img.freepik.com/vetores-premium/videogames-padrao_693527-6.jpg?semt=ais_items_boosted&w=740"
          alt="Jogos"
          className="w-full h-42 object-cover"
        />
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-3xl font-bold text-gray-900">
            {categoria.categoria}
          </h3>
          <p className="text-gray-500 mt-1">{categoria.descricao}</p>
        </div>
        <div className="flex-col justify-center items-center ">
          <Link to={`/editarcategoria/${categoria.id}`}>
            <button className="w-full bg-[#1d294f] hover:bg-blue-900 text-white font-medium py-3 rounded-lg transition-colors my-1">
              Editar
            </button>
          </Link>
          <Link to={`/deletarcategoria/${categoria.id}`}>
            <button className="w-full bg-red-800 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
              Deletar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardCategoria;
