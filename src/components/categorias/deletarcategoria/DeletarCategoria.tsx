import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import type Categoria from "../../../models/Categoria";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Aconteceu um erro ao buscar a categoria.");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarTema() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      alert("Tema apagado com sucesso");
    } catch (error: any) {
      if (
        error.toString().includes("403") ||
        error.toString().includes("401")
      ) {
        alert("Erro ao deletar o tema.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="p-5 space-y-4 border rounded-lg bg-white shadow-md">
        <h3 className="text-3xl font-bold text-gray-900">
          {categoria.categoria}
        </h3>
        <p className="text-gray-500 mt-1">{categoria.descricao}</p>
      </div>
      <div className="flex">
        <button
          className="text-slate-100 bg-[#1d294f] hover:bg-blue-900 w-full py-2 rounded-lg"
          onClick={retornar}
        >
          Não
        </button>
        <button
          className="w-full text-slate-100 bg-red-400 hover:bg-red-600 py-2 flex items-center justify-center rounded-lg"
          onClick={deletarTema}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>Sim</span>
          )}
        </button>
      </div>
    </div>
  );
}
export default DeletarCategoria;
