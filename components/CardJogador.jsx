export default function CardJogador({ nome, posicao, time, imagem }) {
  return (
    <div className="w-64 text-black bg-white rounded-xl shadow-lg overflow-hidden">
      
      <img
        src={imagem}
        alt={nome}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-2xl font-bold text-green-700">
          {nome}
        </h2>

        <p className="mt-2">
          <strong>Posição:</strong> {posicao}
        </p>

        <p>
          <strong>Time:</strong> {time}
        </p>
      </div>
    </div>
  );
}