function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
      <h1 className="text-4xl font-bold mb-4">Bem-vinde a loja de jogos</h1>
      <p className="text-lg mb-8">
        Encontre os melhores jogos para todas as plataformas. Navegue por nossa
        coleção e descubra novos títulos incríveis!
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Descubra a sua próxima aventura!
      </button>
    </div>
  );
}
export default Landing;
