function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Loja de Jogos</h1>
      <p className="text-lg">
        Selecione uma categoria para começar a explorar nossos jogos incríveis!
      </p>
      <div>
        {" "}
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Ver Categorias
        </button>
      </div>
    </div>
  );
}
export default Home;
