import { useState } from 'react';
import { UserData } from '@/types/quiz';

interface UserFormProps {
  onSubmit: (userData: UserData) => void;
}

export function UserForm({ onSubmit }: UserFormProps) {
  const [userData, setUserData] = useState({
    name: '',
    bairro: '',
    idade: '',
    cpf: '',
    sexo: '',
    cnh: [] as string[],
    conducao: [] as string[],
    outrosConducao: '',
    aceiteTermo: false
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

    const idadeNum = Number(userData.idade);
    if (isNaN(idadeNum) || idadeNum < 3 || idadeNum > 120) {
      setError('A idade deve ser um número entre 3 e 120');
      return;
    }

    /*if (!userData.cpf.trim()) {
      setError('CPF é obrigatório');
      return;
    }*/

    if (!userData.aceiteTermo) {
      setError('É necessário aceitar os termos de uso dos dados');
      return;
    }
    
    onSubmit(userData);
  };

  // Função utilitária para formatar CPF
  function formatCPF(value: string) {
    return value
      .replace(/\D/g, '')
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  return (
    <div className="bg-card text-card p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-theme mb-6">Identificação</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-error text-error rounded-lg" aria-live="polite" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" role="form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-theme mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full p-2 border border-theme rounded-md bg-input text-input"
              value={userData.name}
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Digite seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="bairro" className="block text-sm font-medium text-theme mb-1">
              Bairro
            </label>
            <input
              type="text"
              id="bairro"
              required
              className="w-full p-2 border border-theme rounded-md bg-input text-input"
              value={userData.bairro}
              onChange={e => setUserData(prev => ({ ...prev, bairro: e.target.value }))}
              placeholder="Digite seu bairro"
            />
          </div>

          <div>
            <label htmlFor="idade" className="block text-sm font-medium text-theme mb-1">
              Idade
            </label>
            <input
              type="number"
              id="idade"
              required
              className="w-full p-2 border border-theme rounded-md bg-input text-input"
              value={userData.idade}
              min={3}
              max={120}
              onChange={e => setUserData(prev => ({ ...prev, idade: e.target.value }))}
              placeholder="Digite sua idade"
            />
          </div>

          <div>
            <label htmlFor="cpf" className="block text-sm font-medium text-theme mb-1">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              //required
              className="w-full p-2 border border-theme rounded-md bg-input text-input"
              value={userData.cpf}
              onChange={e => {
                const formatted = formatCPF(e.target.value);
                setUserData(prev => ({ ...prev, cpf: formatted }));
              }}
              placeholder="Digite seu CPF"
              autoComplete="off"
              inputMode="none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="sexo" className="block text-sm font-medium text-theme mb-1">
                Sexo
              </label>
              <div className="mt-1 space-x-6">
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
                  <span className="ml-2 text-theme">Masculino</span>
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
                  <span className="ml-2 text-theme">Feminino</span>
                </label>            
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="sexoN"
                    name="sexo"
                    value="N"
                    checked={userData.sexo === 'N'}
                    onChange={e => setUserData(prev => ({ ...prev, sexo: e.target.value }))}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-theme">Não informar</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-theme mb-2">
                CNH (Se possuir)
              </label>
              <div className="flex flex-wrap gap-4">
                {['A', 'B', 'C', 'D', 'E'].map(category => (
                  <label key={category} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      id={`cnh${category}`}
                      checked={userData.cnh.includes(category)}
                      onChange={() => handleCNHChange(category)}
                      className="form-checkbox text-blue-600"
                    />
                    <span className="ml-2 text-theme">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-theme mb-2">
              Modo de condução
            </label>
            <div className="flex flex-wrap gap-3">
              {['Carro', 'Moto', 'Bicicleta', 'Ônibus', 'Aplicativos'].map(tipo => (
                <label key={tipo} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    id={`conducao${tipo}`}
                    checked={userData.conducao.includes(tipo)}
                    onChange={() => handleConducaoChange(tipo)}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-theme">{tipo}</span>
                </label>
              ))}
            </div>
            <div className="mt-2">
              <label htmlFor="outros" className="block text-sm font-medium text-theme">
                Outros meios de transporte
              </label>
              <input
                type="text"
                id="outros"
                className="w-full p-2 border border-theme rounded-md bg-input text-input"
                value={userData.outrosConducao}
                onChange={e => setUserData(prev => ({ ...prev, outrosConducao: e.target.value }))}
                placeholder="Digite outros meios de transporte"
              />
            </div>
          </div>
        </div>

        <div className="border-t-2 border-theme pt-6 mt-6">
          <div className="mb-4 p-4 bg-highlight rounded-lg text-sm text-button">
            Seus dados serão utilizados apenas para fins estatísticos e de pesquisa sobre mobilidade urbana, 
            sem divulgação de informações pessoais. Os resultados auxiliarão no planejamento de políticas 
            públicas de trânsito e transporte.
          </div>
          <label className="flex items-start space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              id="aceiteTermo"
              checked={userData.aceiteTermo}
              onChange={e => setUserData(prev => ({ ...prev, aceiteTermo: e.target.checked }))}
              className="mt-0.5 h-5 w-5 rounded border-theme text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <span className="text-base text-card group-hover:text-theme">
              Concordo com o uso dos meus dados para fins de pesquisa e planejamento urbano
            </span>
          </label>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-button text-button py-3 px-4 rounded-md hover:opacity-90 
              transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-lg"
          >
            Começar Quiz
          </button>
        </div>
      </form>
    </div>
  );
}