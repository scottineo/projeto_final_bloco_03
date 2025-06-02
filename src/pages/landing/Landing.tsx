import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white p-8 bg-gradient-to-b from-black to-blue-500">
      <h1 className="text-4xl font-bold mb-4">Bem-vinde a farmácia Ga-mes</h1>
      <p className="text-lg mb-8">Aqui, sua saúde não é um jogo.</p>
      <Link to="/categorias">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Ache seus medicamentos
        </button>
      </Link>
    </div>
  );
}
export default Landing;
