import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { Circles } from "react-loader-spinner";

function ListaCategorias() {
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      if (
        error.toString().includes("403") ||
        error.toString().includes("401")
      ) {
        alert("Você precisa estar logado para acessar esta página.");
        navigate("/home");
      }
    }
  }
  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <Circles
          height="200"
          width="200"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria
                key={categoria.id}
                categoria={categoria}
                descricao={categoria}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ListaCategorias;
