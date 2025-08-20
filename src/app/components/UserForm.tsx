import { useState } from 'react';
import { UserData } from '@/types/quiz';

interface UserFormProps {
  onSubmit: (userData: UserData) => void;
}

export function UserForm({ onSubmit }: UserFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    age: '',
    gender: '',
    driverLicense: [],
    transport: [],
    otherTransport: ''
  });
  const [error, setError] = useState('');

  const handleDriverLicenseChange = (category: string) => {
    setUserData(prev => ({
      ...prev,
      driverLicense: prev.driverLicense?.includes(category)
        ? prev.driverLicense.filter(c => c !== category)
        : [...(prev.driverLicense || []), category]
    }));
  };

  const handleTransportChange = (type: string) => {
    setUserData(prev => ({
      ...prev,
      transport: prev.transport?.includes(type)
        ? prev.transport.filter(t => t !== type)
        : [...(prev.transport || []), type]
    }));
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        if (!userData.name.trim()) return 'Nome é obrigatório';
        if (!userData.age) return 'Idade é obrigatória';
        if (!userData.gender) return 'Gênero é obrigatório';
        break;
      case 3:
        if (!userData.transport?.length && !userData.otherTransport) 
          return 'Selecione pelo menos um meio de transporte ou especifique outro';
        break;
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stepError = validateStep(currentStep);
    setError(stepError);

    if (stepError) return;

    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      return;
    }
    
    onSubmit(userData);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    setError('');
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center my-4">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold 
              ${currentStep >= step ? 'bg-button text-button' : 'bg-input border-2 border-theme text-theme'}`}
          >
            {step}
          </div>
          {step < 4 && (
            <div
              className={`w-4 h-0.5 mx-0.5 ${
                currentStep > step ? 'bg-button' : 'bg-input'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
  

  const renderStep1 = () => (
    <div className="space-y-6 animate-fade-in-up">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-theme mb-1">
          Nome <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full p-3 border border-theme rounded-lg bg-input text-input cursor-pointer"
          value={userData.name}
          onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Digite seu nome"
        />
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-theme mb-1">
          Idade <span className="text-error">*</span>
        </label>
        <input
          type="number"
          id="age"
          required
          className="w-full p-3 border border-theme rounded-lg bg-input text-input cursor-pointer"
          value={userData.age}
          min={3}
          max={120}
          onChange={e => setUserData(prev => ({ ...prev, age: e.target.value }))}
          placeholder="Digite sua idade"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-theme mb-3">
          Gênero <span className="text-error">*</span>
        </label>
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: 'M', label: 'Masculino' },
            { value: 'F', label: 'Feminino' },
            { value: 'N', label: 'Não Informar' }
          ].map(({ value, label }) => (
            <label
              key={value}
              className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all
                ${userData.gender === value 
                  ? 'border-button bg-button text-white' 
                  : 'border-theme hover:border-button/50 text-theme'}`}
            >
              <input
                type="radio"
                name="gender"
                value={value}
                checked={userData.gender === value}
                onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                className="sr-only"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6 animate-fade-in-up">
      <div>
        <label className="block text-lg font-medium text-theme mb-4">
          Categorias de CNH <span className="text-sm font-normal text-theme">(Opcional)</span>
        </label>
        <div className="grid grid-cols-5 gap-4">
          {['A', 'B', 'C', 'D', 'E'].map(category => (
            <label
              key={category}
              className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all
                ${userData.driverLicense?.includes(category)
                  ? 'border-button bg-button text-white' 
                  : 'border-theme hover:border-button/50 text-theme'}`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={userData.driverLicense?.includes(category)}
                onChange={() => handleDriverLicenseChange(category)}
              />
              <span className="text-lg font-semibold">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6 animate-fade-in-up">
      <div>
        <label className="block text-lg font-medium text-theme mb-4">
          Meio de Transporte <span className="text-error">*</span>
          <span className="text-sm font-normal ml-2">(Selecione ao menos um ou especifique outro)</span>
        </label>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {['Carro', 'Motocicleta', 'Bicicleta', 'Ônibus', 'Aplicativos', 'Caminhada'].map(type => (
            <label
              key={type}
              className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all
                ${userData.transport?.includes(type)
                  ? 'border-button bg-button text-white' 
                  : 'border-theme hover:border-button/50 text-theme'}`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={userData.transport?.includes(type)}
                onChange={() => handleTransportChange(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
        <div>
          <label htmlFor="otherTransport" className="block text-sm font-medium text-theme mb-2">
            Outro meio de transporte <span className="text-sm font-normal">(Opcional)</span>
          </label>
          <input
            type="text"
            id="otherTransport"
            className="w-full p-3 border border-theme rounded-lg bg-input text-input cursor-pointer"
            value={userData.otherTransport}
            onChange={e => setUserData(prev => ({ ...prev, otherTransport: e.target.value }))}
            placeholder="Especifique outro meio de transporte"
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6 animate-fade-in-up">
      <div className="p-6 bg-card rounded-lg border border-theme">
        <div className="mb-6 p-4 bg-highlight rounded-lg text-highlight text-sm leading-relaxed">
          Seus dados serão utilizados apenas para fins estatísticos e de pesquisa sobre mobilidade urbana,
          sem divulgação de informações pessoais. Os resultados auxiliarão no planejamento de políticas
          públicas de trânsito e transporte.
        </div>
        <label className="flex items-start space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={(userData.transport?.length ?? 0) > 0 || !!userData.otherTransport}
            disabled
            className="mt-1 h-5 w-5 rounded border-theme text-button focus:ring-button cursor-pointer"
          />
          <span className="text-theme group-hover:text-button transition-colors">
            Concordo com o uso dos meus dados para fins estatísticos e de pesquisa sobre mobilidade urbana
          </span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="bg-card text-card p-6 sm:p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-theme text-center mb-2">
        {currentStep === 1 && "Identificação"}
        {currentStep === 2 && "Habilitação"}
        {currentStep === 3 && "Meios de Transporte"}
        {currentStep === 4 && "Termos de Uso"}
      </h2>
      
      <StepIndicator />
      
      {error && (
        <div className="mb-6 p-4 bg-error text-error rounded-lg text-sm" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}

        <div className="flex justify-between pt-6">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-3 rounded-lg border-2 border-theme text-theme hover:bg-input 
                transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button cursor-pointer"
            >
              Voltar
            </button>
          )}
          <button
            type="submit"
            className={`${currentStep > 1 ? 'ml-auto' : 'w-full'} px-6 py-3 bg-button text-button rounded-lg 
              hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-button font-medium cursor-pointer`}
          >
            {currentStep === 4 ? 'Começar Quiz' : 'Próximo'}
          </button>
        </div>
      </form>
    </div>
  );
}