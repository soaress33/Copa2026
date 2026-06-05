export default function CardJogador({
  nome,
  posicao,
  time,
  imagem,
  gols,
  jogos,
  camisa
}) {
  return (
    <div className="w-64 hover:scale-110  transition duration-300 text-black bg-white rounded-xl shadow-2xl overflow-hidden">

      <img
        src={imagem}
        alt={nome}
        className="w-full h-64 object-cover object-top"
      />

      <div className="p-3">

        <h2 className="text-2xl font-bold text-green-700">
          {nome}
        </h2>

        <p className="mt-2">
          <strong>Posição:</strong> {posicao}
        </p>

        <p>
          <strong>Time:</strong> {time}
        </p>

        {/* Jogos | Gols | Camisa */}

        <div className="flex justify-between mt-5 bg-gray-100 rounded-lg p-3">

          <div className="flex flex-col items-center">
            <p className="font-bold text-green-700">
              Jogos
            </p>
            <p>{jogos}</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-bold text-green-700">
              Gols
            </p>
            <p>{gols}</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-bold text-green-700">
              Camisa
            </p>
            <p>{camisa}</p>
          </div>

        </div>

      </div>

    </div>
  );
}