import { useState } from 'react';

interface UserFormProps {
  onSubmit: (userData: any) => void;
}

export function UserForm({ onSubmit }: UserFormProps) {
  const [userData, setUserData] = useState({
    name: '',
    bairro: '',
    idade: '',
    sexo: '',
    cnh: [] as string[],
    conducao: [] as string[],
    outrosConducao: ''
  });
  const [error, setError] = useState('');

  const handleCNHChange = (category: string) => {
    setUserData(prev => ({
      ...prev,
      cnh: prev.cnh.includes(category)
        ? prev.cnh.filter(c => c !== category)
        : [...prev.cnh, category]
    }));
  };

  const handleConducaoChange = (tipo: string) => {
    setUserData(prev => ({
      ...prev,
      conducao: prev.conducao.includes(tipo)
        ? prev.conducao.filter(t => t !== tipo)
        : [...prev.conducao, tipo]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!userData.name.trim()) {
      setError('Nome é obrigatório');
      return;
    }

    onSubmit(userData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Identificação</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            value={userData.name}
            onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Digite seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="bairro" className="block text-sm font-medium text-gray-700 mb-1">
            Bairro
          </label>
          <input
            type="text"
            id="bairro"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            value={userData.bairro}
            onChange={e => setUserData(prev => ({ ...prev, bairro: e.target.value }))}
            placeholder="Digite seu bairro"
          />
        </div>

        <div>
          <label htmlFor="idade" className="block text-sm font-medium text-gray-700 mb-1">
            Idade
          </label>
          <input
            type="number"
            id="idade"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            value={userData.idade}
            onChange={e => setUserData(prev => ({ ...prev, idade: e.target.value }))}
            placeholder="Digite sua idade"
          />
        </div>

        <div>
          <label htmlFor="sexo" className="block text-sm font-medium text-gray-700 mb-1">
            Sexo
          </label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="sexoM"
                name="sexo"
                value="M"
                required
                checked={userData.sexo === 'M'}
                onChange={e => setUserData(prev => ({ ...prev, sexo: e.target.value }))}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Masculino</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="sexoF"
                name="sexo"
                value="F"
                checked={userData.sexo === 'F'}
                onChange={e => setUserData(prev => ({ ...prev, sexo: e.target.value }))}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Feminino</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            CNH (Se possuir)
          </label>
          <div className="space-x-4">
            {['A', 'B', 'C', 'D', 'E'].map(category => (
              <label key={category} className="inline-flex items-center">
                <input
                  type="checkbox"
                  id={`cnh${category}`}
                  checked={userData.cnh.includes(category)}
                  onChange={() => handleCNHChange(category)}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Modo de condução
          </label>
          <div className="space-y-2">
            {['Carro', 'Moto', 'Bicicleta', 'Ônibus', 'Aplicativos'].map(tipo => (
              <label key={tipo} className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  id={`conducao${tipo}`}
                  checked={userData.conducao.includes(tipo)}
                  onChange={() => handleConducaoChange(tipo)}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">{tipo}</span>
              </label>
            ))}
          </div>
          <div className="mt-2">
            <label htmlFor="outros" className="block text-sm font-medium text-gray-700">
              Outros meios de transporte
            </label>
            <input
              type="text"
              id="outros"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={userData.outrosConducao}
              onChange={e => setUserData(prev => ({ ...prev, outrosConducao: e.target.value }))}
              placeholder="Digite outros meios de transporte"
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
              transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
          >
            Começar Quiz
          </button>
        </div>
      </form>
    </div>
  );
}