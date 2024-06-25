export function NotFound () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">404 - Filme Não Encontrado.</h2>
        <p className="text-gray-600">APor favor escreva correctamente o nome do filme.</p>
      </div>
    </div>
  );
};
