interface Question {
  text: string;
  options: string[];
  correctOption: number;
  explanation: string;
  group: string;
  difficultyLevel: number;
}

export const questions: Question[] = [
  {
    text: "Qual a cor do semáforo que indica 'pare'?",
    options: ["Vermelho", "Verde", "Amarelo", "Azul"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "O semáforo vermelho é o sinal universal que obriga todos os veículos a parar (CTB Art. 89, CTB Anexo II). Conforme o Código de Trânsito Brasileiro, a luz vermelha indica 'parada obrigatória'."
  },
  {
    text: "O que significa uma placa de trânsito circular com borda vermelha?",
    options: ["Advertência", "Indicação", "Serviço", "Regulamentação"],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Conforme o Manual Brasileiro de Sinalização de Trânsito Vol. I (Res. CONTRAN 180/2005), placas circulares com borda vermelha são de regulamentação, indicando obrigações, limitações, proibições ou restrições."
  },
  {
    text: "O que fazer ao avistar um pedestre na faixa?",
    options: [
      "Ligar o pisca alerta",
      "Buzinar",
      "Reduzir a velocidade e parar o veículo antes da faixa",
      "Acelerar"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "De acordo com o CTB Art. 214, não dar preferência de passagem a pedestre na faixa a ele destinada é infração gravíssima. O condutor deve reduzir a velocidade e parar o veículo para permitir a travessia segura."
  },
  {
    text: "Qual é a cor da faixa de pedestres?",
    options: ["Amarela", "Vermelha", "Azul", "Branca"],
    correctOption: 3,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Segundo o Manual Brasileiro de Sinalização Horizontal (Res. CONTRAN 236/2007), as faixas de pedestres são demarcadas em branco para garantir contraste e máxima visibilidade."
  },
  {
    text: "Qual é o número de emergência da Polícia Rodoviária Federal?",
    options: ["192", "191", "190", "193"],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "O telefone 191 é o canal direto para acionar a PRF em rodovias federais."
  },
  {
    text: "O que significa a luz amarela do semáforo?",
    options: [
      "Prossiga com atenção",
      "Reduza a velocidade e prepare-se para parar",
      "Atenção",
      "Pare"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "A luz amarela avisa que o sinal vai fechar, orientando a reduzir e parar com segurança (CTB Art. 29, §1º)."
  },
  {
    text: "Em que lado da via se deve dirigir no Brasil?",
    options: ["Qualquer lado", "Direito", "Esquerdo", "Centro"],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "No Brasil, circula-se pelo lado direito da via, conforme as normas de trânsito (CTB Art. 29, I)."
  },
  {
    text: "O que significa uma placa triangular amarela?",
    options: ["Indicação", "Advertência", "Regulamentação", "Serviço"],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Placas triangulares amarelas são de advertência, alertando para situações de perigo (CTB Anexo I)."
  },
  {
    text: "Qual a idade mínima para obter a CNH categoria B?",
    options: ["16 anos", "21 anos", "18 anos", "20 anos"],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "É preciso ter, no mínimo, 18 anos para requerer a CNH de categoria B (CTB Art. 140, I)."
  },
  {
    text: "O que fazer ao ver uma ambulância com sirene ligada?",
    options: ["Parar", "Dar passagem", "Seguir a ambulância", "Acelerar"],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Ao ouvir sirene, o veículo deve dar passagem, desviando com segurança (CTB Art. 29, VII)."
  },
  {
    text: "Qual é a validade da CNH para motoristas até 50 anos?",
    options: ["5 anos", "10 anos", "3 anos", "1 ano"],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Para condutores até 50 anos, a CNH vale por 10 anos antes da renovação (CTB Art. 147, I)."
  },
  {
    text: "Qual é a distância segura do ciclista ao ultrapassar?",
    options: ["0,5 metro", "1,5 metros", "2 metros", "1 metro"],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 2,
    explanation: "O CTB exige 1,5 m de separação lateral ao ultrapassar um ciclista, garantindo sua segurança (CTB Art. 201, parágrafo único)."
  },
  {
    text: "O que significa piscar o pisca-alerta?",
    options: ["Festa", "Chegada", "Emergência/perigo", "Ultrapassagem"],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Piscar o pisca-alerta sinaliza situação de emergência ou perigo no veículo (CTB Art. 40, §2º)."
  },
  {
    text: "O que significa placa com fundo azul?",
    options: ["Serviços auxiliares", "Advertência", "Regulamentação", "Indicação"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Placas azuis indicam serviços e facilidades para o usuário da via (CTB Anexo I)."
  },
  {
    text: "O que significa uma faixa contínua amarela?",
    options: [
      "Permitido ultrapassar",
      "Pare",
      "Proibido ultrapassar",
      "Siga"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Faixa amarela contínua inibe ultrapassagens, mantendo a segurança do tráfego (CTB Art. 29, §1º)."
  },
  {
    text: "O que significa uma placa circular vermelha com desenho de bicicleta?",
    options: [
      "Pista mista",
      "Estacionamento de bicicletas",
      "Área de circulação exclusiva para bicicletas",
      "Proibido bicicletas"
    ],
    correctOption: 2,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Esse símbolo delimita espaço exclusivo para ciclistas, separando-os do tráfego motorizado (CTB Art. 58)."
  },
  {
    text: "Qual a cor das placas de advertência?",
    options: ["Amarela", "Azul", "Branca", "Verde"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Placas de advertência têm fundo amarelo para chamar atenção a riscos adiante (CTB Anexo I)."
  },
  {
    text: "O cinto de segurança é obrigatório para:",
    options: [
      "Todos os ocupantes",
      "Apenas motorista",
      "Apenas passageiro da frente",
      "Apenas crianças"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "O CTB obriga o uso do cinto por todos os ocupantes, reforçando a segurança em colisões (CTB Art. 65)."
  },
  {
    text: "É permitido estacionar em calçada?",
    options: ["Não", "Sim se breve", "Sim se vazio", "Sim à noite"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Estacionar em calçada é infração: a área deve ficar livre para pedestres (CTB Art. 181, V)."
  },
  {
    text: "O que indica uma placa retangular, com fundo amarelo e desenho de crianças atravessando uma faixa de pedestres?",
    options: [
      "Travessia somente para crianças",
      "Parque para crianças",
      "Estacionamento Escolar",
      "Proximidade de escola"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Essa placa avisa proximidade de escola e alerta para redução de velocidade e atenção redobrada (CTB Art. 61)."
  },
  {
    text: "Quando o semáforo está verde, o que fazer?",
    options: ["Prosseguir com atenção", "Parar", "Acelerar ao máximo", "Buzinar"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Sinal verde autoriza prosseguir, mas sempre com atenção ao tráfego e pedestres (CTB Art. 29, I)."
  },
  {
    text: "Qual o objetivo do triângulo de sinalização?",
    options: ["Avisar emergência", "Iluminar a via", "Indicar velocidade", "Apontar sentido"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "O triângulo é o dispositivo obrigatório para sinalizar veículo parado em emergência (CTB Art. 40, §2º)."
  },
  {
    text: "O que é faixa de retenção?",
    options: [
      "Linha que impede avanço",
      "Faixa exclusiva",
      "Faixa de ônibus",
      "Faixa de pedestre"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Faixa de retenção marca onde o veículo deve parar antes de uma faixa de pedestres ou sinal (CTB Art. 89)."
  },
  {
    text: "Qual a função do farol alto?",
    options: [
      "Melhor visão noturna",
      "Avisar pedestres",
      "Decorar o carro",
      "Piorar a visão dos outros"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Farol alto amplia o alcance da iluminação em vias sem iluminação pública (CTB Art. 40, §3º)."
  },
  {
    text: "Pode ultrapassar pelo acostamento?",
    options: ["Não", "Sim em emergência", "Sim com motocicleta", "Sim em dia de chuva"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Acostamento não é via de ultrapassagem, exceto em casos de emergência devidamente sinalizados (CTB Art. 29, §3º)."
  },
  {
    text: "Qual o significado do sinal vermelho intermitente?",
    options: [
      "Pare e siga quando possível",
      "Atenção",
      "Siga sem parar",
      "Emergência"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Sinal vermelho intermitente funciona como placa de Pare: parar e só seguir quando seguro (CTB Art. 29, §3º)."
  },
  {
    text: "O que fazer diante de lombada sem sinalização?",
    options: ["Reduzir velocidade", "Ignorar", "Ultrapassar", "Acelerar"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Sem sinalização, lombadas devem ser enfrentadas com redução de velocidade para segurança (CTB Art. 44)."
  },
  {
    text: "Qual a cor da placa de rota turística?",
    options: ["Marrom", "Azul", "Verde", "Amarela"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Placas marrons identificam rotas e pontos de interesse turístico (CTB Anexo I)."
  },
  {
    text: "O que indica faixa de pedestre elevada?",
    options: [
      "Reduzir velocidade para proteger pedestres",
      "Pista exclusiva",
      "Estacionamento",
      "Retorno proibido"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Faixa elevada (lombofaixa) serve como lombada para reduzir velocidade e proteger pedestres (CTB Art. 61, §2º)."
  },
  {
    text: "O espelho retrovisor permite:",
    options: [
      "Monitorar o tráfego atrás",
      "Sinalizar o distanciamento de seu veículo",
      "Medir velocidade",
      "Melhorar a aerodinâmica"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Retrovisores permitem ver o que acontece atrás sem girar a cabeça, aumentando a segurança (CTB Art. 105, IV)."
  },
  {
    text: "Quando você deve usar farol baixo:",
    options: [
      "À noite em via urbana",
      "Só em rodovia",
      "O tempo todo",
      "Só em chuva"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Farol baixo não ofusca e é obrigatório à noite em via urbana (CTB Art. 40, §3º)."
  },
  {
    text: "Placa “Dê preferência” tem formato:",
    options: ["Triângulo invertido", "Circular", "Quadrada", "Retangular"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Placas de preferência são triângulos invertidos, sinalizando que você deve ceder passagem (CTB Anexo I)."
  },
  {
    text: "Qual a função do sinal sonoro ao dar ré?",
    options: [
      "Alertar pedestres e veículos próximos",
      "Anunciar mudança de marcha",
      "Sem nenhuma função específica",
      "Evitar colisão frontal"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "O som da ré alerta pedestres e veículos próximos de que o carro está recuando (CTB Art. 105, VI)."
  },
  {
    text: "Qual a cor da placa de rodovia federal?",
    options: ["Verde", "Azul", "Marrom", "Amarela"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Placas verdes são usadas em rodovias federais para indicar direções (CTB Anexo I)."
  },
  {
    text: "O que indica uma faixa amarela contínua no meio da via?",
    options: [
      "Permitida ultrapassagem",
      "Proibido estacionar",
      "Passagem obrigatória",
      "Proibido ultrapassar"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Faixa amarela contínua proíbe ultrapassagens, sinalizando via de mão dupla segura (CTB Art. 29, §1º)."
  },
  {
    text: "Qual equipamento acionar em emergência?",
    options: ["Pisca-alerta", "Farol alto", "Buzina", "Farol de neblina"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "O pisca-alerta é o dispositivo de emergência para sinalizar veículo parado ou pane (CTB Art. 40, §2º)."
  },
  {
    text: "Qual função do retrovisor interno?",
    options: [
      "Ver tráfego atrás",
      "Se olhar no espelho",
      "Reduzir ponto cego lateral",
      "Olhar os passageiros do veículo"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "O retrovisor interno permite monitorar o tráfego atrás sem virar a cabeça (CTB Art. 105, IV)."
  },
  {
    text: "O que significa placa com símbolo de hospital?",
    options: [
      "Indicação de hospital",
      "Estacionamento de ambulância",
      "Proibido buzinar",
      "Retorno próximo"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Placas com símbolo de hospital indicam proximidade de pronto-socorro ou atendimento médico (CTB Anexo I)."
  },
  {
    text: "Placa verde com nome de cidade é de:",
    options: [
      "Indicação de direção",
      "Adentramento urbano",
      "Serviço turístico",
      "Regulamentação local"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Placas verdes com nomes de cidades orientam direções e distâncias (CTB Anexo I)."
  },
  {
    text: "O que significa faixa zebrada?",
    options: [
      "Área proibida para veículos",
      "Faixa de pedestre",
      "Faixa de retenção",
      "Faixa exclusiva"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Faixa zebrada demarca área proibida ao tráfego, usada em entroncamentos e obstáculos (CTB Art. 90, §1º)."
  },
  {
    text: "Qual luz do farol usar na chuva?",
    options: ["Baixa", "Alta", "Neblina dianteira", "Neblina traseira"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Farol baixo evita ofuscamento em chuvas; neblinas têm dispositivos específicos (CTB Art. 40, §3º)."
  },
  {
    text: "Qual equipamento obrigatório para criança?",
    options: [
      "Cadeirinha",
      "Apoio de pé",
      "Assento comum",
      "Cinto de ombro"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Cadeirinha conforme a idade é obrigatória para proteger crianças em veículos (Resolução CONTRAN 819/21)."
  },
  {
    text: "Qual sinalização avisa lombada?",
    options: [
      "Placa de advertência com formato de lombada",
      "Faixa amarela no chão",
      "Placa azul",
      "Seta verde"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Placas de advertência com símbolo de lombada alertam para redução de velocidade (CTB Anexo I)."
  },
  {
    text: "Para que serve o triângulo de sinalizaçãol?",
    options: [
      "Alertar chegada a acidente",
      "Iluminar a via",
      "Indicar preferência",
      "Marcar velocidade mínima"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Triângulo de sinalização avisa que há veículo parado ou pane adiante em emergência (CTB Art. 40, §2º)."
  },
  {
    text: "Quando usar luz baixa durante o dia?",
    options: ["Em rodovias", "Sempre em túneis", "Nunca durante o dia", "Em vias urbanas iluminadas"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Farol baixo diurno é obrigatório em rodovias para maior visibilidade (Resolução CONTRAN 816/21)."
  },
  {
    text: "Qual documento comprova a propriedade do veículo?",
    options: [
      "CRV - Certificado de Registro de Veículo",
      "CRLV - Certificado de Registro e Licenciamento",
      "CNH - Carteira Nacional de Habilitação",
      "IPVA - Imposto sobre Propriedade"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "O CRV é o documento que comprova a propriedade; o CRLV comprova licenciamento (CTB Art. 120)."
  },
  {
    text: "Qual a validade do licenciamento anual?",
    options: [
      "Até 31 de janeiro do ano seguinte",
      "1 ano a partir da data de pagamento",
      "6 meses",
      "3 anos"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "O licenciamento vence em 31 de janeiro do ano seguinte ao exercício (CTB Art. 131)."
  },
  {
    text: "O que fazer ao ouvir sirene de veículo de emergência?",
    options: [
      "Parar o veículo ou deslocar-se para direita",
      "Acelerar para sair rápido",
      "Manter posição na via",
      "Buzinar em resposta"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Sinal sonoro de emergência exige liberar passagem, deslocando-se à direita (CTB Art. 29, VII)."
  },
  {
    text: "Qual a idade mínima para usar capacete em moto?",
    options: [
      "Não há idade mínima - obrigatório para todos",
      "Apenas acima de 18 anos",
      "Acima de 12 anos",
      "Acima de 10 anos"
    ],
    correctOption: 0,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "O uso do capacete é obrigatório para todos os motociclistas, sem exceção de idade (CTB Art. 244)."
  },
  {
    text: "O que indica uma linha amarela contínua dupla?",
    options: [
      "Proibido ultrapassar em ambos os sentidos",
      "Ultrapassagem permitida",
      "Estacionamento permitido",
      "Via de ônibus"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Faixa amarela dupla contínua indica proibição de ultrapassagem nos dois sentidos (CTB Art. 29, §1º)."
  },
  {
    text: "Qual equipamento acionar em situação de emergência?",
    options: ["Pisca‑alerta", "Farol alto", "Buzina", "Farol de neblina"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "O pisca‑alerta deve ser acionado em caso de pane ou emergência (CTB Art. 40, §2º)."
  },
  {
    text: "O que você deve fazer ao ver placa “Proibido Estacionar”?",
    options: [
      "Não estacionar no local",
      "Parar brevemente",
      "Estacionar por poucos minutos",
      "Ficar dentro do veículo"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Placa R‑6 proíbe qualquer estacionamento no local indicado (CTB Art. 88)."
  },
  {
    text: "Placa “Velocidade mínima” indica:",
    options: [
      "Velocidade mínima obrigatória",
      "Velocidade recomendada",
      "Velocidade máxima permitida",
      "Velocidade média da via"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Placa R‑3 obriga veículos a manter pelo menos a velocidade indicada (CTB Art. 87)."
  },
  {
    text: "O que significa a placa ‘Pare’?",
    options: [
      "Parar totalmente antes de seguir",
      "Diminuir velocidade",
      "Parar apenas se houver pedestre",
      "Prosseguir com atenção"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Placa R‑1 exige parada total antes de prosseguir (CTB Art. 87, I)."
  },
  {
    text: "O que significa uma placa com fundo vermelho e símbolo de caminhão?",
    options: [
      "Proibido trânsito de caminhões",
      "Área de estacionamento para caminhões",
      "Circulação exclusiva para caminhões",
      "Parada obrigatória para caminhões"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 2,
  explanation: "A placa R-39 indica 'Circulação exclusiva de caminhões'. Segundo o Anexo II da Resolução CONTRAN nº 160/2004 (atualizado pelas Resoluções posteriores), placas de regulamentação circulares com fundo branco e borda vermelha, contendo apenas o pictograma do veículo, indicam obrigatoriedade ou exclusividade. Nesse caso, somente caminhões podem circular pela via sinalizada com essa placa."
  },
  {
    text: "O que fazer ao se aproximar de um cruzamento sem sinalização?",
    options: [
      "Reduzir e dar preferência a quem está à direita",
      "Acelerar para evitar colisões",
      "Passar normalmente",
      "Parar completamente e só passar com autorização"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Em cruzamento não sinalizado, cede‑se passagem ao que vem pela direita (CTB Art. 29, III)."
  },
  {
    text: "Quando deve‑se usar o cinto de segurança?",
    options: [
      "Sempre que o veículo estiver em movimento",
      "Somente em rodovias",
      "Somente no banco da frente",
      "Nunca"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "É obrigatório o uso do cinto por todos os ocupantes em movimento (CTB Art. 65)."
  },
  {
    text: "Qual documento comprova a habilitação para dirigir?",
    options: [
      "Carteira Nacional de Habilitação (CNH)",
      "Certificado de Registro do Veículo (CRV)",
      "Documento de identidade",
      "Certificado de Registro e Licenciamento do Veículo (CRLV)"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Somente a CNH é o documento legal que autoriza a condução (CTB Art. 159)."
  },
  {
    text: "Qual é a cor das placas que indicam serviços auxiliares, como hospitais, restaurantes e postos de combustível?",
    options: ["Azul", "Vermelha", "Marrom", "Verde"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Placas com fundo azul são utilizadas para indicar serviços auxiliares (CTB Anexo II, placas de indicação)."
  },
  {
    text: "Quando o semáforo está amarelo, o que o motorista deve fazer?",
    options: [
      "Parar, se possível com segurança",
      "Acelerar para passar",
      "Parar imediatamente",
      "Passar, se possível com segurança"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Amarelo indica atenção e preparação para parada, sem avanço imprudente (CTB Art. 29, §1º)."
  },
  {
    text: "Qual a distância mínima que o motorista deve manter ao estacionar próximo à guia da calçada?",
    options: ["30 centímetros", "10 centímetros", "50 centímetros", "1 metro"],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Deve‑se parar a até 50 cm da guia, conforme regulamentação do CONTRAN (Resolução CONTRAN 303/2008)."
  },
  {
    text: "Ao se aproximar de um cruzamento com semáforo apagado, o que o motorista deve fazer?",
    options: [
      "Parar e seguir com segurança",
      "Acelerar para passar rápido",
      "Ignorar o semáforo",
      "Seguir normalmente"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Sem sinalização, trata‑se como Pare: parar antes de prosseguir (CTB Art. 29, §3º)."
  },
  {
    text: "Qual a cor da placa que indica uma área escolar?",
    options: ["Amarela", "Vermelha", "Azul", "Verde"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Placas de advertência escolares são amarelas, alertando presença de crianças (CTB Anexo I)."
  },
  {
    text: "O que fazer ao avistar um sinal de trânsito com luz vermelha?",
    options: ["Parar completamente", "Reduzir a velocidade", "Acelerar para passar", "Ignorar"],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Luz vermelha obriga parada total antes da linha de retenção (CTB Art. 29, I)."
  },
  {
    text: "Qual a idade mínima para conduzir motocicleta?",
    options: [
      "16 anos",
      "18 anos",
      "21 anos",
      "Não há idade mínima"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 2,
    explanation: "É necessário ter, no mínimo, 18 anos para conduzir motocicletas, conforme o CTB (CTB Art. 140, II)."
  },
  {
    text: "Quando o motorista deve dar preferência a pedestres?",
    options: [
      "Sempre que eles estiverem na faixa",
      "Somente em cruzamentos",
      "Quando solicitado",
      "Sempre"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Motoristas devem ceder passagem a pedestres na faixa, garantindo segurança (CTB Art. 214)."
  },
  {
    text: "Qual o objetivo da faixa amarela dupla contínua?",
    options: [
      "Permitir ultrapassagem",
      "Separar faixas exclusivas",
      "Indicar faixa de pedestre",
      "Proibir ultrapassagem em ambos os sentidos"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Dual contínua amarela proíbe ultrapassagens em ambos sentidos (CTB Art. 29, §1º)."
  },
  {
    text: "Qual documento deve estar sempre no veículo?",
    options: [
      "CRLV",
      "CRV",
      "CNH",
      "IPVA"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "O CRLV comprova licenciamento e deve estar no veículo, conforme CTB Art. 133."
  },
  {
    text: "Qual a faixa que indica passagem exclusiva para ônibus?",
    options: [
      "Faixa branca",
      "Faixa vermelha",
      "Faixa azul",
      "Faixa pintada de amarelo contínuo"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Faixa pintada de amarelo contínuo é reservada ao transporte coletivo (CTB Art. 94)."
  },
  {
    text: "O que significa a placa com símbolo de ciclista?",
    options: [
      "Proibido bicicletas",
      "Estacionamento para bicicletas",
      "Faixa para pedestres",
      "Ciclofaixa ou pista compartilhada"
    ],
    correctOption: 3,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Indica ciclovia ou ciclofaixa, local reservado a ciclistas (CTB Art. 58)."
  },
  {
    text: "Quando o farol alto deve ser desligado?",
    options: [
      "Quando não houver mais ninguém",
      "Durante a noite",
      "Nunca",
      "Ao encontrar veículo contrário"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Farol alto ofusca; deve ser desligado ao cruzar outros veículos (CTB Art. 40, §4º)."
  },
  {
    text: "Qual o procedimento correto ao estacionar?",
    options: [
      "Deixar o carro ligado",
      "Estacionar em qualquer lugar",
      "Não usar o freio de mão",
      "Acionar freio de mão e desligar motor"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Para segurança, estacionar usando freio de mão e desligar o motor (CTB Art. 40)."
  },
  {
    text: "O que indica uma placa de fundo amarelo com seta curva para esquerda?",
    options: [
      "Proibido virar à esquerda",
      "Retorno proibido",
      "Rotatória",
      "Curva para a esquerda à frente"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Placas de advertência de curva sinalizam mudança de traçado à frente (CTB Anexo I)."
  },
  {
    text: "O que deve fazer o condutor ao avistar faixa de pedestre com pedestre esperando?",
    options: [
      "Buzinar para o pedestre",
      "Seguir normalmente",
      "Ultrapassar o pedestre",
      "Parar e esperar o pedestre atravessar"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Pedestre esperando tem preferência; motorista deve parar e aguardar (CTB Art. 214)."
  },
  {
    text: "O que é considerado infração gravíssima?",
    options: [
      "Estacionar em local proibido",
      "Ultrapassar pela direita",
      "Dirigir sem cinto de segurança",
      "Dirigir sob efeito de álcool"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Dirigir sob efeito de álcool é infração gravíssima multiplicada por 10 (CTB Art. 165)."
  },
  {
    text: "Qual a distância mínima para usar farol de neblina dianteiro?",
    options: [
      "Durante o dia",
      "Sempre que quiser",
      "Somente à noite",
      "Em condições de neblina, chuva forte ou fumaça"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Farol de neblina é permitido apenas em visibilidade reduzida por neblina ou chuva forte (CTB Art. 40, Anexo I)."
  },
  {
    text: "Qual o significado da placa R‑1 ‘Pare’?",
    options: [
      "Acelerar",
      "Reduzir a velocidade e seguir",
      "Proibido continuar",
      "Parada obrigatória e total"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "R‑1 exige parada total e obrigatória antes de seguir em frente (CTB Art. 87, I)."
  },
  {
    text: "Quando usar o farol de neblina traseiro?",
    options: [
      "Durante o dia",
      "Ao estacionar",
      "Nas estradas/rodovias",
      "Quando a visibilidade estiver muito baixa"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Farol traseiro de neblina só em baixa visibilidade (CTB Art. 40, Anexo I)."
  },
  {
    text: "O que é permitido na faixa de pedestres?",
    options: [
      "Passagem para ciclistas",
      "Estacionamento",
      "Passagem para motociclistas",
      "Passagem exclusiva para pedestres"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Faixa de pedestre é reservada única e exclusivamente ao atravessamento de pedestres (CTB Art. 214)."
  },
  {
    text: "Quando usar o farol alto?",
    options: [
      "Dentro da cidade",
      "Sempre que quiser",
      "Em túneis",
      "Em rodovias sem iluminação"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Farol alto é indicado em rodovias sem iluminação para melhor visibilidade (CTB Art. 40, §3º)."
  },
  {
    text: "Qual o procedimento correto ao estacionar em uma rua com guia rebaixada?",
    options: [
      "Estacionar junto à guia",
      "Estacionar afastado da guia",
      "Não estacionar",
      "Estacionar em qualquer lugar"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Em guias rebaixadas, estaciona‑se junto à guia para não obstruir o acesso (CTB Art. 40)."
  },
  {
    text: "O que deve fazer o motorista ao se aproximar de uma faixa de pedestres com pedestres esperando?",
    options: [
      "Parar e aguardar a travessia",
      "Passar devagar",
      "Buzinar para alertar",
      "Ignorar"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Motorista deve parar e aguardar pedestres na faixa (CTB Art. 214)."
  },
  {
    text: "Qual a função do extintor de incêndio no veículo?",
    options: [
      "Combater incêndios",
      "Avisar sobre acidente",
      "Sinalizar quebra‑molas",
      "Medir pressão dos pneus"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Extintor serve para combater incêndios em veículos, conforme NR‑24 e CONTRAN (CTB Art. 105, IX)."
  },
  {
    text: "Quando o semáforo está vermelho intermitente, o que deve fazer o motorista?",
    options: [
      "Parar e só seguir quando seguro",
      "Acelerar",
      "Ignorar",
      "Parar somente se houver pedestres"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Vermelho intermitente funciona como placa de Pare — parar sempre (CTB Art. 29, §3º)."
  },
  {
    text: "Em rodovia, quando não há iluminação, qual farol usar?",
    options: [
      "Baixo",
      "Alto",
      "Neblina dianteira",
      "Neblina traseira"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Em rodovias sem iluminação, farol alto aumenta a visibilidade (CTB Art. 40, §3º)."
  },
  {
    text: "Qual o tipo de placa que obriga parada antes do cruzamento?",
    options: [
      "R‑1 (Pare)",
      "R‑2 (Dê preferência)",
      "A‑13 (Junção)",
      "A‑15 (Parada obrigatória à frente)"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "R‑1 é a placa de Pare, exige parada total antes do cruzamento (CTB Art. 87, I)."
  },
  {
    text: "Qual documento comprova que o veículo está licenciado?",
    options: [
      "CRLV",
      "CRV",
      "CNH",
      "IPVA pago"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "CRLV é comprovante de licenciamento anual obrigatório (CTB Art. 133)."
  },
  {
    text: "Ao perceber problemas na direção, o que o motorista deve fazer?",
    options: [
      "Continuar até destino",
      "Parar em local seguro e sinalizar",
      "Acelerar para manter estabilidade",
      "Ignorar e seguir viagem"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Em pane na direção, parar em segurança e usar o triângulo de sinalização (CTB Art. 40)."
  },
  {
    text: "Qual sinalização de solo indica faixa de pedestres?",
    options: [
      "Linhas brancas paralelas",
      "Zebras amarelas",
      "Setas verdes",
      "Faixa vermelha"
    ],
    correctOption: 0,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Faixa de pedestres é demarcada por linhas brancas largas paralelas no pavimento (CTB Art. 214)."
  },
  {
    text: "Onde o ciclista deve circular quando não houver ciclovia?",
    options: [
      "Na calçada",
      "No acostamento ou bordo direito",
      "Na contramão",
      "No meio da via"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 2,
    explanation: "Sem ciclovia, ciclistas devem usar acostamento ou borda direita da via (CTB Art. 58)."
  },
  {
    text: "É permitido pedalar duas pessoas em bicicleta comum?",
    options: [
      "Sim, se apenas por trecho curto",
      "Não, cada bicicleta é para um ocupante",
      "Sim, se forem crianças",
      "Sim, se forem parentes"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Bicicleta comum é monolugar; transportar mais de um configura infração (CTB Art. 58, §1º)."
  },
  {
    text: "Qual a obrigatoriedade de campainha em bicicleta?",
    options: [
      "Obrigatória",
      "Opcional",
      "Somente para ciclomotores",
      "Somente em cidade grande"
    ],
    correctOption: 0,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Campainha é equipamento de sinalização obrigatório (CTB Art. 105, VI)."
  },
  {
    text: "Como o pedestre deve atravessar em cruzamento sem semáforo?",
    options: [
      "Parar, olhar para ambos os lados e atravessar com segurança",
      "Atravessar correndo logo",
      "Seguir bicicleta que passa primeiro",
      "Aguarde o carro parar"
    ],
    correctOption: 0,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Pedestre deve garantir segurança parando, observando fluxo e atravessando em linha reta (CTB Art. 70)."
  },
  {
    text: "Qual a cor do semáforo que indica 'siga com cautela' para pedestres?",
    options: ["Vermelha", "Amarela", "Verde", "Azul"],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "A luz amarela para pedestres indica que ainda há tempo, mas pede cautela, preparando‑se para parar (CTB Art. 70)."
  },
  {
    text: "O que deve fazer o motorista ao entrar em área escolar com faixa elevada?",
    options: [
      "Manter velocidade normal",
      "Reduzir velocidade e dar preferência",
      "Ultrapassar veículos parados",
      "Buzinar para alertar estudantes"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Em zona escolar com faixa elevada, é obrigatório reduzir a velocidade e dar preferência ao pedestre (CTB Art. 61)."
  },
  {
    text: "Ciclista, ao sinalizar conversão à esquerda, deve:",
    options: [
      "Estender o braço direito",
      "Buzinar",
      "Estender o braço esquerdo",
      "Abaixar o guidão"
    ],
    correctOption: 2,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "CTB Art. 58, §2º exige braço esquerdo estendido para sinalizar conversão à esquerda."
  },
  {
    text: "Motociclista, qual equipamento é obrigatório além do capacete?",
    options: [
      "Luvas",
      "Óculos ou viseira",
      "Botas especiais",
      "Protetor de coluna"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "CTB Art. 244 exige uso de capacete com viseira ou óculos de proteção para motociclistas."
  },
  {
    text: "Pedestre, ao atravessar na faixa sem semáforo, deve:",
    options: [
      "Confiar que os carros vão parar",
      "Verificar fluxo dos dois lados antes de prosseguir",
      "Buzinar nos motoristas",
      "Correr para atravessar logo"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "CTB Art. 70 recomenda observar ambos os lados, garantindo segurança antes de atravessar."
  },
  {
    text: "O que significa a placa com um 'E' cortado por uma faixa vermelha em fundo branco?",
    options: [
      "Proibido parar e estacionar",
      "Proibido parar",
      "Proibido estacionar",
      "Permitido estacionar"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "A placa R-6b, conforme o Anexo II do CTB, indica 'Proibido estacionar'. Isso significa que o veículo não pode ser deixado parado no local, embora possa haver parada momentânea para embarque ou desembarque."
  },
  {
    text: "O que significa a com um 'E' cortado por duas faixas vermelhas em forma de X?",
    options: [
      "Proibido parar",
      "Proibido estacionar",
      "Permitido parada com pisca-alerta",
      "Proibido parar e estacionar"
    ],
    correctOption: 3,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "A placa R-6a, segundo o Anexo II do CTB, indica 'Proibido parar e estacionar'. Isso significa que o condutor não pode sequer parar o veículo no local, nem mesmo para embarque ou desembarque de passageiros."
  },  
  {
    text: "Qual a sinalização noturna traseira obrigatória para ciclistas?",
    options: [
      "Vermelha",
      "Branca",
      "Azul",
      "Verde"
    ],
    correctOption: 0,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "CTB Art. 105, I exige luz traseira vermelha ou refletor para ciclistas à noite."
  },
  {
    text: "Pedestre, em rua sem calçada, deve caminhar:",
    options: [
      "Pela direita, de costas para os veículos",
      "Pela esquerda, de frente para os veículos",
      "No meio da rua",
      "Na contramão"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "CTB Art. 68 e Res. 619/16 recomendam pedestre à esquerda, de frente ao tráfego."
  },
  {
    text: "Motociclista, ao parar no semáforo, deve manter distância segura:",
    options: [
      "Colado no veículo da frente",
      "1 metro",
      "50 cm",
      "50 cm a 1 m de distância"
    ],
    correctOption: 3,
    group: "Motociclista",
    difficultyLevel: 2,
    explanation: "Manter espaço de 50 cm a 1 m evita aquaplanagem de gases e garante segurança (CTB Art. 29)."
  },
  {
    text: "Motorista, a luz verde no semáforo indica:",
    options: [
      "Parar",
      "Reduzir velocidade",
      "Prosseguir com cautela",
      "Buzinar"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "CTB Art. 29 define que verde libera passagem, mas com atenção ao entorno."
  },
  {
    text: "Ciclista, ao passar próximo a veículo estacionado, deve:",
    options: [
      "Passar rente ao carro",
      "Manter distância para evitar portas abertas",
      "Buzinar no motorista",
      "Passar pela calçada"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Manter distância previne acidentes com portas abertas (CTB Art. 201)."
  },
  {
    text: "Pedestre, se encontrar obras na calçada, deve:",
    options: [
      "Ultrapassar correndo",
      "Atravessar pela via após observar o trânsito",
      "Ignorar a sinalização",
      "Seguir pelo acostamento"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Recomenda-se aguardar espaço seguro na via e atravessar observando fluxo (CTB Art. 70)."
  },
  {
    text: "Motociclista, ao trafegar à noite, deve usar:",
    options: [
      "Farol baixo",
      "Luzes de posição",
      "Pisca-alerta",
      "Farol alto"
    ],
    correctOption: 0,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Farol baixo evita ofuscamento e garante visibilidade à noite (CTB Art. 40)."
  },
  {
    text: "Pedestre, qual postura ao usar fone de ouvido?",
    options: [
      "Sem cuidados especiais",
      "Retirar ao atravessar rua para ouvir veículos",
      "Aumentar volume",
      "Reduzir volume ao atravessar"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Retirar fone ao cruzar vias melhora percepção de sons de trânsito (CTB Art. 70)."
  },
  {
    text: "Motorista, ao perder a faixa de rolamento, deve:",
    options: [
      "Retornar imediatamente",
      "Buzinar",
      "Sinalizar e retornar com segurança",
      "Ignorar e seguir"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Qualquer manobra deve ser sinalizada antecipadamente (CTB Art. 196)."
  },
  {
    text: "Ciclista pode transitar em calçada?",
    options: [
      "Sim, sempre",
      "Não, exceto quando sinalização autoriza",
      "Sim, em baixa velocidade",
      "Nunca é permitido"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "CTB Art. 59 proíbe ciclista na calçada, salvo autorização específica."
  },
  {
    text: "Pedestre, em dia de chuva forte, deve:",
    options: [
      "Andar normalmente",
      "Redobrar atenção ao atravessar e usar guarda‑chuva",
      "Correr para se abrigar",
      "Ficar em casa"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Reduzir distrações e garantir visibilidade do tráfego em condições adversas (CTB Art. 68)."
  },
  {
    text: "Motociclista, ao ultrapassar outro veículo, deve:",
    options: [
      "Ultrapassar à direito",
      "Sinalizar e ultrapassar pela esquerda",
      "Buzinar e ultrapassar",
      "Ultrapassar pela contramão"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Ultrapassagem sempre pela esquerda, com sinalização (CTB Art. 29)."
  },
  {
    text: "Pedestre, ao pedir aplicativo de corrida, deve:",
    options: [
      "Aguardar no ponto indicado pelo aplicativo",
      "Usar ponto indicado pelo motorista",
      "Combinar ponto seguro e na calçada",
      "Aguardar na rua",
    ],
    correctOption: 2,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Combinar sempre ponto seguro, de preferência em calçada, para subir e descer do veículo (CTB Art. 49)."
  },
  {
    text: "Ciclista, ao trafegar em grupo, deve manter:",
    options: [
      "Distância lateral curta",
      "Formação lado a lado",
      "Distância de 1,5 m entre eles",
      "Distância segura e sinalização"
    ],
    correctOption: 3,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "O CTB, em seu Art. 58, orienta que o ciclista deve circular pelo bordo da pista no mesmo sentido do fluxo. Em grupos, recomenda-se trafegar em fila única, respeitando as regras de circulação e sinalizando manobras, conforme boas práticas descritas no Manual de Sinalização e Resoluções do Contran."
  },
  {
    text: "Motorista, ao trafegar em pista escorregadia, deve:",
    options: [
      "Acelerar",
      "Manter velocidade constante",
      "Reduzir velocidade e manter distância",
      "Ultrapassar veículos lentos"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Em pista escorregadia, redução de velocidade e maior distância são essenciais (CTB Art. 29)."
  },
  {
    text: "Motociclista, se chuva forte reduzir visibilidade, deve:",
    options: [
      "Acelerar para sair rápido",
      "Parar em local seguro",
      "Manter farol alto",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Parar em local seguro até melhorar visibilidade evita acidentes (CTB Art. 40)."
  },
  {
    text: "Pedestre, sinal sonoro de pedestre (apito) indica:",
    options: [
      "Tempo de espera",
      "Hora de atravessar",
      "Emergência",
      "Não atravessar ainda"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Sinal sonoro nas faixas com semáforo auxilia pedestre a iniciar travessia (CTB Art. 70)."
  },
  {
    text: "Ciclista, o que indica faixa zebrada no solo?",
    options: [
      "Faixa de pedestre",
      "Área proibida para veículos",
      "Faixa exclusiva de ônibus",
      "Faixa de retenção"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 2,
    explanation: "Zebradas indicam área proibida ao tráfego, usada para canalização (CTB Art. 90)."
  },
  {
    text: "Pedestre, ao caminhar em via rural sem passeio nem acostamento, deve:",
    options: [
      "Andar no mesmo sentido dos veículos",
      "Andar no sentido contrário ao dos veículos",
      "Caminhar no centro da pista",
      "Evitar caminhar durante o dia"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Caminhar de frente ao tráfego permite melhor percepção de veículos (CTB Art. 68)."
  },
  {
    text: "Motorista, ao ultrapassar ciclista, deve buzinar?",
    options: [
      "Sim, para avisar",
      "Não, apenas reduzir velocidade",
      "Sim, se for rápido",
      "Depende"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Buzinar pode assustar ciclista; o correto é reduzir velocidade e manter 1,5 m de distância (CTB Art. 201)."
  },
  {
    text: "Motociclista, ao trafegar à tarde em túnel iluminado, deve usar:",
    options: [
      "Farol baixo",
      "Farol alto",
      "Pisca-alerta",
      "Neblina dianteira"
    ],
    correctOption: 0,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Mesmo em túnel iluminado, farol baixo aumenta visibilidade e sinalização (CTB Art. 40)."
  },
  {
    text: "Pedestre, ao guiar criança, deve:",
    options: [
      "Segurar pelo braço",
      "Segurá‑la pela mão",
      "Ignorar cuidados",
      "Permitir correr"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Manter crianças próximas e mão na mão evita quedas e separações (CTB Art. 70)."
  },
  {
    text: "Ciclista, ao precisar desmontar, deve:",
    options: [
      "Empurrar a bicicleta na calçada",
      "Continuar pedalando",
      "Empurrar na pista",
      "Ignorar regras"
    ],
    correctOption: 0,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Ao usar calçada, ciclista deve desmontar e empurrar bicicleta (CTB Art. 59)."
  },
  {
    text: "Motociclista, para conduzir em grupo, a formação correta é:",
    options: [
      "Lado a lado",
      "Em fila indiana",
      "Em dois pelotões",
      "Misturada com carros"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 2,
    explanation: "Formação em fila aumenta visibilidade e reduz risco de acidentes em grupo (CTB Art. 196)."
  },
  {
    text: "Motorista, em chuva forte, farol de neblina dianteiro é:",
    options: [
      "Obrigatório",
      "Proibido",
      "Opcional",
      "Sem importância"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Conforme Res. 882/2021 do Contran, o uso é opcional em chuva forte."
  },
  {
    text: "Ciclista, ao trafegar em ciclofaixa, deve usar:",
    options: [
      "Capacete e luzes",
      "Buzina",
      "Bicicleta de praia",
      "Sem cuidados"
    ],
    correctOption: 0,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Uso de capacete e sinalização noturna é obrigatório em ciclovias (CTB Art. 105)."
  },
  {
    text: "Pedestre, ao aguardar ônibus, deve:",
    options: [
      "Ficar na pista",
      "Ficar na calçada ou ponto sinalizado",
      "Andar atrás do ônibus",
      "Corrigir caminho"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Aguardar ônibus em local seguro, calçada ou ponto específico, evitando riscos (CTB Art. 68)."
  },
  {
    text: "Motociclista, ao parar em um semáforo, pode deixar o motor ligado?",
    options: [
      "Sim, em paradas normais no trânsito",
      "Não, desligar motor e usar pisca-alerta",
      "Depende",
      "Sem importância"
    ],
    correctOption: 0,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "O CTB não exige desligar o motor em semáforos, apenas em caso de pane ou emergência (CTB Art. 40)."
  },
  {
    text: "Pedestre em ponto de ônibus sem abrigo, deve esperar:",
    options: [
      "Na rua",
      "No meio fio recuado",
      "Dentro da pista",
      "Dentro do ônibus"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Esperar ônibus em área recuada no meio fio, fora da pista de rolamento (CTB Art. 68)."
  },
  {
    text: "Ciclista pode trafegar em ciclofaixa de pedestre?",
    options: [
      "Sim",
      "Não",
      "Depende",
      "Opcional"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Ciclovias e ciclofaixas exclusivas para ciclistas; pedal em faixa de pedestre é proibido (CTB Art. 59)."
  },
  {
    text: "Motociclista, em rodovia com chuva, deve usar:",
    options: [
      "Capacete sem viseira",
      "Capacete com viseira limpa",
      "Capacete com óculos escuros",
      "Sem capacete"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Capacete com viseira limpa garante visibilidade em chuva (CTB Art. 244)."
  },
  {
    text: "Pedestre, em área industrial, usar:",
    options: [
      "Equipamento de proteção",
      "Roupa clara",
      "Calçado antiderrapante",
      "Sem cuidados"
    ],
    correctOption: 2,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Em áreas de carga e descarga, calçado seguro é recomendado (NR-24)."
  },
  {
    text: "Ciclista, sinal sonoro (campainha) serve para:",
    options: [
      "Afastar pedestres",
      "Avisar presença",
      "Acelerar",
      "Decorativo"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Campainha é sinalização sonora obrigatória para alertar pedestres (CTB Art. 105)."
  },
  {
    text: "O que fazer ao avistar faixa de pedestre com pedestre esperando?",
    options: [
      "Ignorar",
      "Parar e aguardar travessia",
      "Passar lentamente",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Faixa de pedestre obriga parada para pedestre aguardando (CTB Art. 214)."
  },
  {
    text: "Pode utilizar celular ao volante?",
    options: [
      "Sim, em semáforos",
      "Não, em nenhuma situação",
      "Somente com fone",
      "Quando não estiver em movimento"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Uso de celular ao volante é infração gravíssima (CTB Art. 252, V). A Resolução CONTRAN nº 909/2022 Reforça que o uso de celular deve ocorrer apenas com o veículo estacionado e desligado, fora da situação de condução."
  },
  {
    text: "Pedestre, o que fazer ao atravessar com chuva e sem guarda-chuva?",
    options: [
      "Correr sem olhar",
      "Esperar abrigo ou usar capa",
      "Ignorar chuva",
      "Sinalizar motoristas"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Buscar abrigo ou capa e atenção ao trânsito evita acidentes em piso escorregadio (CTB Art. 68)."
  },
  {
    text: "Ciclista, em ciclovia compartilhada com pedestre, deve:",
    options: [
      "Acelerar para ultrapassar",
      "Manter velocidade reduzida e sinalizar",
      "Ignorar pedestres",
      "Ultrapassar pela calçada"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Em ciclovias mistas, manter velocidade baixa e sinalizar ultrapassagens (CTB Art. 58)."
  },
  {
    text: "Em situação de emergência (pane), deve:",
    options: [
      "Continuar dirigindo até o destino",
      "Sinalizar local e acionar pisca-alerta",
      "Buzinar insistentemente",
      "Parar no meio da pista sem sinalização"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Em panes e emergências, é obrigatório acionar pisca-alerta e sinalizar o local (CTB Art. 40)."
  },
  {
    text: "Ciclista, em túnel sem iluminação, deve usar:",
    options: [
      "Nenhum equipamento",
      "Luz dianteira e traseira",
      "Somente refletores",
      "Somente campainha"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "CTB Art. 105 exige sinalização noturna (dianteira e traseira) em túneis e locais escuros."
  },
  {
    text: "Pedestre, se sinal sonoro divergir do visual, deve:",
    options: [
      "Seguir só o som",
      "Seguir só o visual",
      "Ignorar ambos",
      "Aguardar resolução do defeito"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Visual (verde/vermelho) precede o sonoro em semáforos; atravessar só no verde visual (CTB Art. 70)."
  },
  {
    text: "Em alagamento leve, deve:",
    options: [
      "Acelerar para atravessar rápido",
      "Procurar desviar de poças",
      "Manter velocidade normal",
      "Ultrapassar veículos lentos"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Desviar de poças previne perda de controle e aquaplanagem (CTB Art. 28)."
  },
  {
    text: "Motorista, ao estacionar próximo a hidrante, é permitido?",
    options: [
      "Sim, em emergência",
      "Não, hidrantes sempre livres",
      "Sim, se ficar 1 minuto",
      "Depende do horário"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Estacionar perto de hidrante é infração grave; hidrante deve estar sempre livre (CTB Art. 181)."
  },
  {
    text: "Ciclista, antes de entrar na via, deve:",
    options: [
      "Acelerar sem olhar",
      "Verificar tráfego e sinalizar",
      "Buzinar nos motoristas",
      "Empurrar bicicleta sem olhar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Sinalizar e checar fluxo de veículos antes de entrar na via (CTB Art. 196)."
  },
  {
    text: "Pedestre, ao sair de veículo estacionado, deve:",
    options: [
      "Abrir porta sem olhar",
      "Observar tráfego antes de abrir",
      "Sair correndo",
      "Ignorar trânsito"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Observar o trânsito antes de abrir porta evita atropelamento por ciclistas/veículos (CTB Art. 49)."
  },
  {
    text: "Ao se aproximar de uma lombada, o motociclista deve:",
    options: [
      "Reduzir a velocidade e passar com segurança",
      "Parar sobre a lombada",
      "Acelerar para evitar impacto",
      "Buzinar para alertar pedestres"
    ],
    correctOption: 0,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Parar o veículo na área de cruzamento de vias, sobre faixas de pedestres, ciclovias, e sobre lombadas Pode caracterizar infração leve ou média, dependendo do contexto (CTB – Art. 183). Deve-se reduzir a velocidade antes da lombada para segurança e conforto (CTB Art. 28 e Res. CONTRAN 600/2016)."
  },
  {
    text: "Ao trafegar atrás de caminhão, deve:",
    options: [
      "Colar no pára‑choque",
      "Manter distância segura",
      "Ultrapassar pela direita",
      "Buzinar para agilizar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Manter distância evita ponto cego e riscos de frenagem súbita (CTB Art. 29)."
  },
  {
    text: "Ciclista, ao cruzar via férrea, deve:",
    options: [
      "Correr sobre trilhos",
      "Desmontar e empurrar bicicleta",
      "Passar pedalando rápido",
      "Ignorar trilhos"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Desmontar e empurrar bicicleta em cruzamentos de trilhos garante estabilidade e segurança (CTB Art. 58)."
  },
  {
    text: "Pedestre, ao aguardar sinal de pedestre, deve:",
    options: [
      "Ficar atrás da guia",
      "Ficar na rua",
      "Aguardar próximo ao meio‑fio",
      "Ficar atrás de veículos"
    ],
    correctOption: 2,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Aguardar próximo ao meio‑fio, mas fora da pista de rolamento, para segurança (CTB Art. 70)."
  },
  {
    text: "Ao estacionar na via pública, o condutor deve manter distância segura de:",
    options: [
      "Portas de veículos e garagens",
      "Postes e árvores",
      "Sinalizações verticais",
      "Meio-fio pintado de branco"
    ],
    correctOption: 0,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Evitar obstrução e risco de colisão com portas ou portões em movimento (CTB Art. 181 e Res. CONTRAN 268/2008)."
  },
  {
    text: "Motorista, ao ver linha tracejada branca no centro da via, o que significa?",
    options: [
      "Ultrapassagem permitida com segurança",
      "Obrigação de ultrapassar",
      "Proibição de parar",
      "Pode ignorar a linha"
    ],
    correctOption: 0,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "A linha tracejada branca indica que a ultrapassagem é permitida, desde que feita com segurança (CTB Art. 90 e Res. CONTRAN 160/2004)."
  },
  {
    text: "Ciclista, ao ouvir buzina, deve:",
    options: [
      "Ignorar",
      "Observar ao redor e sinalizar",
      "Buzinar de volta",
      "Acelerar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Observar motivo da buzina e sinalizar intenção para evitar colisões (CTB Art. 41)."
  },
  {
    text: "Pedestre, ao caminhar à noite fora de área iluminada, deve:",
    options: [
      "Usar roupas escuras",
      "Usar roupas claras ou refletivas",
      "Ficar na pista",
      "Correr"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Roupas claras/refletivas aumentam visibilidade à noite (CTB Art. 68)."
  },
  {
    text: "Ao trafegar em via molhada, deve:",
    options: [
      "Ultrapassar rápido",
      "Reduzir velocidade e frear suavemente",
      "Manter mesma velocidade",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Reduzir velocidade e frear suavemente evita derrapagens em piso molhado (CTB Art. 29)."
  },
  {
    text: "Ciclista, ao encontrar obstáculo na ciclovia, deve:",
    options: [
      "Descer e empurrar bicicleta contornando",
      "Sinalizar e seguir pedalando",
      "Ultrapassar rápido",
      "Ignorar obstáculo"
    ],
    correctOption: 0,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Descer e empurrar garante estabilidade e evita quedas (CTB Art. 59)."
  },
  {
    text: "Pedestre, ao acompanhar animal de estimação, deve:",
    options: [
      "Soltar animal",
      "Usar guia curta e passarela se houver",
      "Correr com animal",
      "Ignorar trânsito"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Usar guia curta e, se disponível, passarela, mantém controle e segurança (CTB Art. 68)."
  },
  {
    text: "Motociclista, ao rebocar carga, deve:",
    options: [
      "Prender carga em guidão",
      "Usar dispositivo adequado e sem exceder largura",
      "Ultrapassar pela direita",
      "Carregar na garupa"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Carga deve ser fixada de forma segura, sem exceder largura máxima (CTB Art. 105)."
  },
  {
    text: "Motorista, ao ver linha dupla amarela, deve:",
    options: [
      "Ultrapassar",
      "Parar",
      "Não ultrapassar em nenhum sentido",
      "Estacionar"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 2,
    explanation: "Linha dupla amarela proíbe ultrapassagem em ambos os sentidos (CTB Art. 90)."
  },
  {
    text: "Ciclista, ao trafegar por via sem acostamento, deve:",
    options: [
      "Pedalar próximo à guia",
      "Caminhar empurrando bicicleta",
      "Pedalar no meio da via",
      "Ignorar fluxo"
    ],
    correctOption: 0,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "CTB Art. 58 recomenda ciclista circular junto ao meio fio na ausência de ciclovia."
  },
  {
    text: "Pedestre, ao atravessar grupo escolar em horário de entrada, deve:",
    options: [
      "Atravessar correndo",
      "Usar faixa escolar e aguardar veículos pararem",
      "Ignorar sinalização",
      "Buzinar nos motoristas"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Faixa escolar obriga parada de veículos e preferência ao pedestre (CTB Art. 61)."
  },
  {
    text: "Motociclista, ao ultrapassar pedestre na ciclofaixa, deve:",
    options: [
      "Ultrapassar rápido",
      "Manter distância lateral e sinalizar",
      "Ignorar presença",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Em ciclovias mistas, sinalizar e manter distância lateral garantem segurança (CTB Art. 58)."
  },
  {
    text: "Motorista, ao ver pedestre iniciando travessia fora da faixa, deve:",
    options: [
      "Reduzir a velocidade e buzinar para o pedestre sair da frente",
      "Reduzir a velocidade e dar preferência de passagem",
      "Acelerar e ultrapassar rapidamente",
      "Parar e ligar o pisca-alerta"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Pedestre que já iniciou a travessia tem prioridade, mesmo fora da faixa (CTB Art. 214, III). Já o pisca-alerta é reservado para situações de emergência (CTB Art. 40, parágrafo único)."
  },
  {
    text: "Ciclista, ao cruzar caminho de veículos pesados, deve:",
    options: [
      "Acelerar",
      "Parar e aguardar passagem",
      "Ultrapassar",
      "Ignorar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Parar e aguardar veículos pesados passa oferece visibilidade e segurança (CTB Art. 58)."
  },
  {
    text: "Pedestre, em calçada interrompida por canteiro, deve:",
    options: [
      "Ultrapassar pelo canteiro",
      "Descer e usar faixa ou acostamento",
      "Correr pelo meio-fio",
      "Ignorar interrupção"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Calçada interrompida obriga o pedestre a descer e usar faixa ou acostamento (CTB Art. 68)."
  },
  {
    text: "Em curvas sinuosas, deve:",
    options: [
      "Acelerar",
      "Reduzir velocidade e manter trajetória",
      "Ultrapassar veículos lentos",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Em curvas, redução de velocidade e trajetória estável evitam derrapagens (CTB Art. 29)."
  },
  {
    text: "Em rodovia de pista simples, é obrigatório usar:",
    options: [
      "Farol alto durante o dia",
      "Farol baixo durante o dia",
      "Pisca-alerta",
      "Lanternas traseiras"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Resolução Contran 816/21 exige farol baixo em rodovias de pista simples durante o dia."
  },
  {
    text: "Ciclista, ao parar no topo de lombada sem visibilidade, deve:",
    options: [
      "Manter bicicleta em movimento",
      "Descer e empurrar até ter visão",
      "Acelerar",
      "Ultrapassar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Garanta visão ao descer da bicicleta e empurrar sobre lombadas sem sinalização (CTB Art. 58)."
  },
  {
    text: "Pedestre, ao caminharem em fila indiana, deve:",
    options: [
      "Ocupar toda via",
      "Manter formação e usar calçada",
      "Correr",
      "Dividir em duplas"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Manter formação em fila e usar calçada evita obstrução de via e riscos (CTB Art. 68)."
  },
  {
    text: "Motociclista, ao parar em faixa de retenção, deve:",
    options: [
      "Parar sobre faixa",
      "Parar atrás da faixa",
      "Ultrapassar faixa",
      "Ignorar faixa"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Parar atrás da faixa de retenção respeita sinalização e evita avanço indevido (CTB Art. 89)."
  },
  {
    text: "Motorista, ao avistar placa de pedestre atravessando, deve:",
    options: [
      "Ignorar",
      "Reduzir velocidade e aguardar travessia",
      "Ultrapassar pedestres",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "CTB Art. 214 obriga parada para pedestre em faixa, com redução de velocidade."
  },
  {
    text: "Ciclista, ao trafegar com carga, deve:",
    options: [
      "Extrapolar largura da via",
      "Centralizar carga sem desequilibrar",
      "Segurar carga à mão",
      "Ignorar peso"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Distribuir carga adequadamente evita queda e mantém equilíbrio (CTB Art. 105)."
  },
  {
    text: "Pedestre, ao usar faixa compartilhada, deve:",
    options: [
      "Exigir preferência sobre ciclistas",
      "Aguardar ciclistas passarem",
      "Ignorar ciclistas",
      "Ultrapassar ciclistas"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Em faixas compartilhadas, aguardar passagem dá prioridade e evita acidentes (CTB Art. 59)."
  },
  {
    text: "Motociclista, ao trafegar com criança passageira, deve:",
    options: [
      "Levar no tanque",
      "Levar no colo traseiro com capacete",
      "Permitir andar sem capacete",
      "Ignorar peso"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "CTB Art. 244 proíbe transporte de crianças em motocicletas; somente em dispositivo adequado."
  },
  {
    text: "Ao avistar sinal de parada obrigatória, deve:",
    options: [
      "Reduzir apenas",
      "Parar completamente",
      "Passar se não vier carro",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "R‑1 'parada obrigatória' exige parada total antes de prosseguir, independentemente de tráfego (CTB Art. 44)."
  },
  {
    text: "Ciclista, ao trafegar à noite sem luz dianteira, é:",
    options: [
      "Permitido",
      "Infração leve",
      "Infração grave",
      "Sem penalidade"
    ],
    correctOption: 2,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Ausência de luz dianteira noturna é infração grave (CTB Art. 105, I)."
  },
  {
    text: "Pedestre, ao caminhar em rua semáforo, deve:",
    options: [
      "Atravessar no fluxo de carros",
      "Procurar faixa mais próxima",
      "Utilizar faixa de rolamento",
      "Correr sem olhar"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Sempre buscar faixa de pedestre, mesmo sem semáforo, para travessia segura (CTB Art. 70)."
  },
  {
    text: "Motociclista, se veículo dianteiro sinalizar à direita, deve:",
    options: [
      "Ultrapassar pela direita",
      "Aguardar manobra e manter distância",
      "Buzinar",
      "Ignorar seta"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Manter distância e aguardar o veículo concluir manobra para evitar colisões (CTB Art. 196)."
  },
  {
    text: "Motorista, ao trafegar pela esquerda em pista de mão única, deve:",
    options: [
      "Seguir normalmente",
      "Ultrapassar ciclistas",
      "Retornar para direita quando seguro",
      "Buzinar"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Em mão única, permanecer à direita e usar faixa esquerda só para ultrapassagem, retornando depois (CTB Art. 29)."
  },
  {
    text: "Pedestre, em via com tráfego intenso, deve:",
    options: [
      "Usar acostamento ou calçada",
      "Caminhar no meio da rua",
      "Ignorar veículos",
      "Correr"
    ],
    correctOption: 0,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Usar acostamento ou calçada sempre que disponível é norma de circulação segura (CTB Art. 68)."
  },
  {
    text: "Motociclista, se chuva forte, pode usar farol alto?",
    options: [
      "Sim",
      "Não, usar farol baixo",
      "Depende da via",
      "Sempre usar neblina"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Farol alto ofusca veículos contrários; em chuva forte usar farol baixo (CTB Art. 40)."
  },
  {
    text: "Ao ver sinalização de obras, deve:",
    options: [
      "Acelerar para passar rápido",
      "Reduzir velocidade e observar cones",
      "Ignorar cones",
      "Ultrapassar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Sinalização de obras exige redução de velocidade e atenção (CTB Art. 66)."
  },
  {
    text: "Ciclista, ao trafegar em contramão, é:",
    options: [
      "Permitido em ciclovias",
      "Proibido",
      "Permitido em baixa velocidade",
      "Permitido se não houver veículos"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Contramão para ciclistas é proibido, salvo em áreas específicas sinalizadas (CTB Art. 58)."
  },
  {
    text: "Pedestre, ao utilizar passarela, deve:",
    options: [
      "Passar correndo",
      "Andar calmamente e usar degraus",
      "Ultrapassar degraus",
      "Ignorar corrimão"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Usar passarela com calma e corrimão evita quedas (CTB Art. 69)."
  },
  {
    text: "Ao trafegar próximo a escola em horário de entrada, deve:",
    options: [
      "Passar em alta velocidade",
      "Reduzir velocidade e redobrar atenção",
      "Ignorar faixa escolar",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Zona escolar exige redução de velocidade e atenção redobrada (CTB Art. 61)."
  },
  {
    text: "Ao viajar longas distâncias, deve:",
    options: [
      "Dirigir sem parar",
      "Fazer pausas regulares",
      "Acelerar",
      "Ignorar fadiga"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Fazer pausas regulares evita fadiga e melhora segurança (CTB Art. 28)."
  },
  {
    text: "Ciclista, ao usar guia elevada, deve:",
    options: [
      "Pedalar sobre guia",
      "Descer e empurrar bicicleta",
      "Ultrapassar guia",
      "Ignorar guia"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Descer e empurrar bicicleta em guias elevadas garante segurança e estabilidade (CTB Art. 59)."
  },
  {
    text: "Pedestre, ao atravessar fora de faixa em zona rural, deve:",
    options: [
      "Atravessar correndo",
      "Procurar local seguro e sinalizar com a mão",
      "Ignorar veículos",
      "Atravessar sem olhar"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Fora de faixa, o pedestre deve escolher local com boa visibilidade e sinalizar antecipadamente (CTB Art. 70)."
  },
  {
    text: "Motorista, ao trafegar em neblina, deve usar:",
    options: [
      "Farol alto",
      "Farol baixo e neblina",
      "Pisca-alerta só",
      "Nenhum farol"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Em neblina, usar farol baixo e farol de neblina dianteiro/traseiro (CTB Art. 40)."
  },
  {
    text: "Ciclista, ao sinalizar conversão à esquerda, deve:",
    options: [
      "Içar braço direito",
      "Estender braço esquerdo",
      "Acionar buzina",
      "Girar guidão"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Para converter à esquerda, o ciclista deve estender o braço esquerdo horizontalmente (CTB Art. 196)."
  },
  {
    text: "Pedestre, em calçada interrompida por canteiro, deve:",
    options: [
      "Ultrapassar pelo canteiro",
      "Descer e usar faixa ou acostamento",
      "Correr pelo meio-fio",
      "Ignorar interrupção"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Calçada interrompida obriga o pedestre a descer e usar faixa ou acostamento (CTB Art. 68)."
  },
  {
    text: "Motociclista, ao trafegar atrás de ônibus em ponto, deve:",
    options: [
      "Ultrapassar pela direita",
      "Aguardar ônibus partir",
      "Buzinar para acelerar",
      "Passar entre ônibus e ponto"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Aguardar ônibus partir evita atropelamento de pedestres desembarcando (CTB Art. 29)."
  },
  {
    text: "Motorista, ao perceber ponto cego grande veículo, deve:",
    options: [
      "Colar na traseira",
      "Manter distância lateral",
      "Ultrapassar rápido",
      "Ignorar ponto cego"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Manter distância lateral evita ficar no ponto cego de caminhões e ônibus (CTB Art. 29)."
  },
  {
    text: "Ciclista, ao usar ciclovia compartilhada, deve:",
    options: [
      "Circular na contramão",
      "Circular acompanhando fluxo de bicicletas e pedestres",
      "Ultrapassar corredores de pedestres",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Em ciclovia compartilhada, circular no mesmo sentido e respeitar pedestres (CTB Art. 58)."
  },
  {
    text: "Pedestre, ao encontrar semáforo inoperante, deve:",
    options: [
      "Correr sem olhar",
      "Parar no meio-fio e aguardar oportunidade segura",
      "Ultrapassar veículos parados",
      "Ignorar condição"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Semáforo inoperante obriga pedestre a aguardar local seguro para atravessar (CTB Art. 29)."
  },
  {
    text: "Motociclista, se veículo estacionado obstruir faixa, deve:",
    options: [
      "Ultrapassar pela calçada",
      "Reduzir velocidade e aguardar liberação",
      "Sinalizar e contornar rápido",
      "Ignorar obstrução"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Obstrução de faixa exige redução de velocidade e espera de liberação (CTB Art. 29)."
  },
  {
    text: "Motorista, ao ver pedestre com deficiência visual, deve:",
    options: [
      "Sinalizar ultrapassagem",
      "Acelerar para evitar obstrução",
      "Parar e aguardar travessia",
      "Ignorar pedestre"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Parar e aguardar pedestre com deficiência visual atravessar garante prioridade e segurança (CTB Art. 214)."
  },
  {
    text: "Ciclista, em via de pista simples, deve usar faróis:",
    options: [
      "Não usar",
      "Só sirene",
      "Baixo durante o dia",
      "Alto sempre"
    ],
    correctOption: 2,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Farol baixo diurno em via simples aumenta visibilidade (Res. CONTRAN 816/21)."
  },
  {
    text: "Pedestre, ao atravessar com criança de colo, deve:",
    options: [
      "Correr",
      "Empurrar carrinho",
      "Aguardar semáforo e usar faixa segura",
      "Atravessar fora de faixa"
    ],
    correctOption: 2,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Aguardando semáforo e usando faixa, garante segurança de ambos (CTB Art. 70)."
  },
  {
    text: "Motociclista, em rodovia, deve manter distância mínima de:",
    options: [
      "1 carro",
      "2 metros",
      "Distância que permita frenagem segura",
      "Colado"
    ],
    correctOption: 2,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Mantendo distância que permita frenagem segura reduz risco de colisão traseira (CTB Art. 29)."
  },
  {
    text: "Motorista, ao se aproximar de escola sem semáforo, deve:",
    options: [
      "Ultrapassar rápido",
      "Reduzir velocidade e dar preferência",
      "Ignorar faixa escolar",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Faixa escolar obriga redução de velocidade e preferência (CTB Art. 61)."
  },
  {
    text: "Ciclista, em cruzamento sem sinalização, deve:",
    options: [
      "Acelerar",
      "Dar preferência a quem vem da direita",
      "Ignorar prioridade",
      "Ultrapassar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "No cruzamento sem sinal, prioridade para quem vem da direita (CTB Art. 29)."
  },
  {
    text: "Pedestre, ao usar smartphone caminhando, deve:",
    options: [
      "Caminhar sem olhar",
      "Parar e usar calçada",
      "Correr e olhar no celular",
      "Ignorar tráfego"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Parar para usar smartphone fora da via garante segurança (CTB Art. 68)."
  },
  {
    text: "Motociclista, em chuva intensa, deve usar:",
    options: [
      "Farol alto",
      "Farol baixo e neblina",
      "Nenhum farol",
      "Só piscas"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Farol baixo e neblina dianteira/as traseira otimizam visibilidade na chuva (CTB Art. 40)."
  },
  {
    text: "Motorista, em rua estreita, deve:",
    options: [
      "Ultrapassar ciclistas pela contramão",
      "Reduzir velocidade e manter distância",
      "Buzinar para ciclistas saírem",
      "Ignorar ciclistas"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Redução de velocidade e distância lateral garantem segurança em ruas estreitas (CTB Art. 29)."
  },
  {
    text: "Ciclista, ao parar em semáforo, não pode:",
    options: [
      "Parar atrás da faixa de retenção",
      "Avançar semáforo fechado",
      "Manter pé no chão",
      "Sinalizar conversão"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Avançar semáforo fechado é infração grave (CTB Art. 208)."
  },
  {
    text: "Pedestre, ao circular em calçada escorregadia, deve:",
    options: [
      "Correr",
      "Usar calcanhar e caminhar devagar",
      "Ignorar risco",
      "Saltitar"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Caminhar devagar e apoio no calcanhar aumenta aderência e segurança (CTB Art. 68)."
  },
  {
    text: "Motociclista, ao rebocar outro veículo, pode:",
    options: [
      "Rebocar com corda improvisada",
      "Rebocar com equipamento adequado e seguro",
      "Rebocar sem sinalização",
      "Rebocar pela contramão"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Reboque deve usar dispositivo seguro sem exceder dimensões (CTB Art. 105)."
  },
  {
    text: "Motorista, ao sair de garagem, deve:",
    options: [
      "Aplicar aceleração brusca",
      "Verificar trânsito e sinalizar",
      "Sair sem olhar",
      "Buzinar insistentemente"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Sinalizar e verificar fluxo ao sair de garagem garante segurança (CTB Art. 196)."
  },
  {
    text: "Ciclista, ao transitar próximo a pedestres, deve:",
    options: [
      "Passar entre pedestres",
      "Reduzir velocidade e sinalizar",
      "Ultrapassar rápido",
      "Ignorar pedestres"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Reduzir velocidade e sinalizar garante convivência segura em espaços compartilhados (CTB Art. 58)."
  },
  {
    text: "Pedestre, ao atravessar com chuva, deve:",
    options: [
      "Correr sem olhar",
      "Segurar guarda-chuva e olhar para os dois lados",
      "Ignorar tráfego",
      "Atravessar em qualquer lugar"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Usar guarda-chuva sem obstruir visão e checar ambos os lados (CTB Art. 70)."
  },
  {
    text: "Motociclista, ao trafegar atrás de ambulância com sirene, deve:",
    options: [
      "Seguir ambulância",
      "Dar passagem e manter distância",
      "Buzinar",
      "Ultrapassar"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Dar passagem e manter distância para não atrapalhar socorro (CTB Art. 29)."
  },
  {
    text: "Motorista, ao se aproximar de passagem de nível, deve:",
    options: [
      "Acelerar para atravessar rápido",
      "Reduzir velocidade e olhar trilhos",
      "Buzinar",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Reduzir velocidade e verificar trilhos evita acidentes com trens (CTB Art. 26)."
  },
  {
    text: "Ciclista, ao pedalar em grupo, deve:",
    options: [
      "Circular lado a lado",
      "Circular em fila indiana e sinalizar",
      "Buzinar em outros ciclistas",
      "Ultrapassar grupo"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Fila indiana e sinalização coordenada evitam colisões e obstrução (CTB Art. 58)."
  },
  {
    text: "Pedestre, ao encontrar semáforo com contagem regressiva, deve:",
    options: [
      "Correr sempre",
      "Aguardar tempo restante e iniciar travessia no verde",
      "Ignorar contagem",
      "Atravessar no amarelo"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Contagem regressiva indica tempo seguro restante para atravessar (CTB Art. 70)."
  },
  {
    text: "Motociclista, ao estacionar em rampa, deve:",
    options: [
      "Desligar motor e acionar freio de estacionamento",
      "Deixar motor ligado",
      "Ultrapassar rampa",
      "Ignorar freio"
    ],
    correctOption: 0,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Freio de estacionamento garante estabilidade em rampas (CTB Art. 40)."
  },
  {
    text: "Motorista, ao trafegar em faixa reversível, deve:",
    options: [
      "Ignorar sinalização",
      "Obedecer semáforos e painéis",
      "Sinalizar ultrapassagem",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Faixas reversíveis usam semáforos/painéis para indicar sentido válido (CTB Art. 90)."
  },
  {
    text: "Ciclista, em intersecção com semáforo, deve:",
    options: [
      "Avançar no amarelo",
      "Obedecer luzes como veículos",
      "Ignorar semáforo",
      "Ultrapassar veículo parado"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Ciclistas devem obedecer semáforo tal qual veículos automotores (CTB Art. 59)."
  },
  {
    text: "Pedestre, ao ver indicação sinalizada de rota turística, deve:",
    options: [
      "Seguir itinerário para caminhada segura",
      "Ignorar placas",
      "Ultrapassar placa",
      "Buzinar"
    ],
    correctOption: 0,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Placas de rota turística auxiliam pedestres e motoristas no roteamento seguro (CTB Anexo I)."
  },
  {
    text: "Motociclista, em rodovia federal, deve obedecer limite de:",
    options: [
      "80 km/h",
      "90 km/h",
      "110 km/h",
      "60 km/h"
    ],
    correctOption: 2,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Limite em rodovias federais varia, mas padrão comum é 110 km/h para motos (CTB Art. 61)."
  },
  {
    text: "Motorista, em via de mão única, pode:",
    options: [
      "Buzinar contramão",
      "Ultrapassar pela direita",
      "Ultrapassar pela esquerda",
      "Estacionar na contramão"
    ],
    correctOption: 2,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Em mão única, ultrapassagem pela esquerda é permitida (CTB Art. 29)."
  },
  {
    text: "Ciclista, ao se deparar com semáforo intermitente amarelo, deve:",
    options: [
      "Prosseguir com atenção",
      "Parar imediatamente",
      "Ignorar semáforo",
      "Buzinar"
    ],
    correctOption: 0,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Semáforo intermitente amarelo indica atenção e prosseguir com cuidado (CTB Art. 53)."
  },
  {
    text: "Pedestre, ao atravessar via arterial sem faixa, deve:",
    options: [
      "Correr sem olhar",
      "Procurar travessia adequada ou passarela",
      "Atravessar no meio da pista",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Vias arteriais exigem uso de travessias sinalizadas ou passarelas (CTB Art. 70)."
  },
  {
    text: "Motociclista, ao trafegar por via pavimentada irregular, deve:",
    options: [
      "Acelerar",
      "Reduzir velocidade e desviar de buracos",
      "Ultrapassar rápido",
      "Ignorar irregularidades"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Reduzir velocidade e desviar de buracos evita queda e danos (CTB Art. 29)."
  },
  {
    text: "Motorista, ao ver placa de retorno permitido, pode:",
    options: [
      "Fazer retorno em qualquer ponto",
      "Fazer retorno apenas onde sinalizado",
      "Fazer retorno pela faixa de pedestres",
      "Ignorar placa"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Retorno permitido apenas nos pontos indicados pela sinalização (CTB Art. 89)."
  },
  {
    text: "Ciclista, ao pedalar na chuva, deve:",
    options: [
      "Acelerar",
      "Reduzir velocidade e usar roupas impermeáveis",
      "Ultrapassar rápido",
      "Ignorar condições"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Redução de velocidade e roupas adequadas melhoram aderência e conforto (CTB Art. 58)."
  },
  {
    text: "Pedestre, ao circular em vias com poste baixo, deve:",
    options: [
      "Passar por baixo do poste",
      "Desviar e usar passarela ou acostamento",
      "Bater cabeça",
      "Ignorar obstáculo"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Desviar evita choque com obstáculo e garante circulação segura (CTB Art. 68)."
  },
  {
    text: "Motociclista, ao trafegar por ponte estreita, deve:",
    options: [
      "Buzinar",
      "Reduzir velocidade e manter centro da faixa",
      "Ultrapassar caminhões",
      "Ignorar larguras"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Reduzir velocidade e manter posição central evita choque em pontes estreitas (CTB Art. 29)."
  },
  {
    text: "Motorista, ao ver placa indicativa de periculosidade, deve:",
    options: [
      "Acelerar",
      "Reduzir velocidade e ter atenção",
      "Ignorar placa",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Placas de advertência exigem redução de velocidade e atenção redobrada (CTB Art. 81)."
  },
  {
    text: "Ciclista, ao trafegar por trecho com desnível, deve:",
    options: [
      "Manter velocidade alta",
      "Reduzir velocidade e manter postura",
      "Ultrapassar veículos",
      "Ignorar desnível"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Redução de velocidade e postura correta evitam quedas em desníveis (CTB Art. 58)."
  },
  {
    text: "Pedestre, ao atravessar via com dividido, deve:",
    options: [
      "Atravessar diretamente",
      "Aguardar em canteiro central se não conseguir completar",
      "Ignorar canteiro",
      "Ultrapassar canteiro correndo"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Se não completar travessia, aguardar em canteiro central para maior segurança (CTB Art. 70)."
  },
  {
    text: "Motociclista, ao trafegar por aclive íngreme, deve:",
    options: [
      "Manter marcha alta",
      "Reduzir marcha e manter aceleração suave",
      "Ultrapassar veículos",
      "Ignorar inclinação"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Redução de marcha e aceleração suave garantem torque e estabilidade em aclives (CTB Art. 29)."
  },
  {
    text: "Motorista, ao ver placa de velocidade máxima permitida, deve:",
    options: [
      "Ultrapassar limite em caso de urgência",
      "Manter velocidade até o limite indicado",
      "Ignorar placa",
      "Reduzir abaixo do limite sempre"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Limite de velocidade deve ser obedecido até sinalização em contrário (CTB Art. 61)."
  },
  {
    text: "Ciclista, ao trafegar por via com pedestres, deve:",
    options: [
      "Ultrapassar pedestres de qualquer lado",
      "Reduzir velocidade e sinalizar antes de ultrapassar",
      "Buzinar para alertar",
      "Ignorar pedestres"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "Sinalizar e reduzir velocidade ao ultrapassar pedestres previne acidentes (CTB Art. 58)."
  },
  {
    text: "Pedestre, ao usar escadaria pública, deve:",
    options: [
      "Correr",
      "Usar corrimão e caminhar devagar",
      "Ignorar corrimão",
      "Pular degraus"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "Uso de corrimão e atenção nos degraus evita quedas (CTB Art. 68)."
  },
  {
    text: "Motociclista, ao trafegar com vento lateral forte, deve:",
    options: [
      "Acelerar",
      "Reduzir velocidade e segurar guidão firmemente",
      "Ultrapassar rapidamente",
      "Ignorar vento"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "Redução de velocidade e firmeza no guidão mantém controle em ventos laterais (CTB Art. 29)."
  },
  {
    text: "Motorista, ao estacionar em local com guia pintada, deve:",
    options: [
      "Estacionar sobre pintura",
      "Não estacionar em guia pintada",
      "Estacionar por poucos minutos",
      "Ignorar pintura"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Guia pintada indica área de proibição de estacionamento (CTB Art. 181)."
  },
  {
    text: "Motorista, ao trafegar em área de escolas, deve:",
    options: [
      "Manter velocidade normal",
      "Reduzir velocidade e ter atenção redobrada",
      "Buzinar constantemente",
      "Ignorar sinalização escolar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Em área escolar, CTB Art. 61 §1º exige redução de velocidade e atenção especial aos estudantes."
  },
  {
    text: "Ciclista, ao ver ambulância com sirene, deve:",
    options: [
      "Continuar normalmente",
      "Dar passagem imediata",
      "Acelerar",
      "Ignorar sirene"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "CTB Art. 29 inciso VII obriga dar passagem a veículos de emergência com sirene."
  },
  {
    text: "Pedestre, ao usar passarela, tem:",
    options: [
      "Preferência sobre veículos",
      "Que aguardar veículos",
      "Que correr",
      "Que desviar"
    ],
    correctOption: 0,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "CTB Art. 69 garante preferência do pedestre em passarelas e faixas a ele destinadas."
  },
  {
    text: "Motociclista, em caso de aquaplanagem, deve:",
    options: [
      "Frear bruscamente",
      "Manter direção e reduzir aceleração gradualmente",
      "Aumentar velocidade",
      "Fazer manobras bruscas"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "CTB Art. 28 determina que o condutor deverá guardar distância de segurança e manter o veículo sob controle em condições adversas."
  },
  {
    text: "Motorista, ao transportar criança, deve usar:",
    options: [
      "Cinto normal",
      "Dispositivo de retenção adequado à idade",
      "Apenas colo",
      "Banco dianteiro"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "Resolução CONTRAN 819/21 exige uso de dispositivo de retenção adequado à idade, peso e altura da criança."
  },
  {
    text: "Em área escolar, ao ver sinalização de criança, motorista deve:",
    options: [
      "Acelerar",
      "Reduzir velocidade e ter atenção",
      "Buzinar constantemente",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "CTB Art. 61 e Res. CONTRAN 483/14 exigem redução de velocidade e atenção em áreas escolares."
  },
  {
    text: "Pedestre, ao ver faixa de ciclista, deve:",
    options: [
      "Caminhar sobre faixa",
      "Procurar faixa de pedestre",
      "Correr sobre faixa",
      "Ignorar faixa"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: "CTB Art. 68 determina que pedestres devem utilizar faixas ou passagens a eles destinadas."
  },
  {
    text: "Ciclista, ao trafegar à noite, deve usar:",
    options: [
      "Nenhuma sinalização",
      "Luz dianteira e traseira",
      "Apenas campainha",
      "Apenas refletor"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: "CTB Art. 105-VI exige uso de sinalização noturna dianteira, traseira, lateral e nos pedais."
  },
  {
    text: "Motociclista, ao ver carro entrando na via, deve:",
    options: [
      "Acelerar para passar",
      "Reduzir velocidade e observar",
      "Buzinar constantemente",
      "Ignorar veículo"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: "CTB Art. 44 determina redução de velocidade em situações de risco potencial."
  },
  {
    text: "Motorista, em curva sem visibilidade, pode ultrapassar?",
    options: [
      "Sim, se estiver com pressa",
      "Não, ultrapassagem proibida",
      "Sim, em baixa velocidade",
      "Depende do horário"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: "CTB Art. 203-II proíbe ultrapassagem em curvas sem visibilidade, considerada infração gravíssima."
  },
  {
    text: "Pedestre, ao encontrar faixa de pedestre molhada, deve:",
    options: [
      "Correr para atravessar mais rápido",
      "Verificar aderência e atravessar com cuidado",
      "Ignorar a condição",
      "Ultrapassar veículos parados"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `O art. 70 do CTB estabelece que o pedestre deve atravessar com cuidado “observando o fluxo de veículos” – em condições adversas, como piso molhado, isso significa verificar a aderência e movimentar-se lentamente para evitar quedas.`
  },
  {
    text: "Motorista, ao se aproximar de cruzamento com placa de preferência, deve:",
    options: [
      "Ultrapassar sem reduzir",
      "Reduzir e dar preferência ao trânsito da via principal",
      "Buzinar para os outros pararem",
      "Ignorar a placa"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `O art. 44, inciso I do CTB define a placa R-2 (“Dê preferência”) como “forma triangular invertida” e determina que o condutor “deve reduzir a velocidade e dar preferência de passagem ao trânsito na via com prioridade”.`
  },
  {
    text: "Ciclista, ao trafegar em via sem acostamento, deve:",
    options: [
      "Circular pelo meio da pista",
      "Manter-se o mais à direita possível, observando o fluxo",
      "Ultrapassar veículos pela direita",
      "Ignorar a ausência de acostamento"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `O art. 58 do CTB dispõe que “os ciclistas devem andar o mais próximo [...] possível do bordo da pista, no mesmo sentido do trânsito”. Em vias sem acostamento, isso significa manter-se o mais à direita possível.`
  },
  {
    text: "Pedestre, ao aguardar ônibus em ponto, deve:",
    options: [
      "Ficar na via junto ao meio-fio",
      "Aguardar fora da pista de rolamento, em local seguro",
      "Sentar-se na guia pintada",
      "Sinalizar para o ônibus partir"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `O art. 68 do CTB orienta que o pedestre “deve permanecer na calçada ou local seguro, sem invadir a pista de rolamento”. Nos pontos de ônibus, isso significa aguardar fora da via, em local protegido.`
  },
  {
    text: "Motociclista, ao transportar carga, deve:",
    options: [
      "Prender com corda solta",
      "Distribuir peso de forma estável e usar equipamento seguro",
      "Ultrapassar com a carga solta",
      "Transportar apenas pequenos objetos"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `O art. 105, inciso VII do CTB exige que a carga seja “segura e distribuída de modo a não prejudicar o equilíbrio do veículo”. Devem ser usados dispositivos adequados e fixação firme.`
  },
  {
    text: "Motorista, ao trafegar em estrada de terra, deve:",
    options: [
      "Manter alta velocidade",
      "Reduzir velocidade e evitar freagens bruscas",
      "Ignorar condições da pista",
      "Ultrapassar sem cuidado"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `O art. 29 do CTB estabelece que o condutor deve “manter velocidade compatível com a segurança”. Em estrada de terra, pistas soltas exigem redução de velocidade e frenagens suaves para evitar derrapagens.`
  },
  {
    text: "Ciclista, ao pedalar à noite, deve usar:",
    options: [
      "Apenas roupas escuras",
      "Sinalização luminosa dianteira branca e traseira vermelha",
      "Nenhuma luz",
      "Farol alto dos carros"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Conforme art. 105 do CTB, as bicicletas “devem ter dispositivo de sinalização noturna – luz branca frontal e vermelha traseira” para serem visíveis à noite.`
  },
  {
    text: "Pedestre, ao usar faixa elevada, deve:",
    options: [
      "Atravessar sem olhar",
      "Observar o fluxo, pois veículos obrigados a reduzir",
      "Correr sobre a faixa",
      "Ignorar faixas elevadas"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `O art. 70 do CTB garante prioridade à faixa elevada, porém recomenda-se observar o fluxo para confirmar que os veículos reduziram antes de iniciar a travessia.`
  },
  {
    text: "Motociclista, ao encarar lombada, deve:",
    options: [
      "Acelerar para passar rápido",
      "Reduzir velocidade e manter equilíbrio",
      "Ignorar a lombada",
      "Ultrapassar pela contramão"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `O art. 81 do CTB define a lombada como obstáculo que exige redução de velocidade. Manter equilíbrio evita perda de controle.`
  },
  {
    text: "Motorista, ao avistar placa de “Pare e siga quando possível”, deve:",
    options: [
      "Ultrapassar sem reduzir",
      "Parar, observar o fluxo e prosseguir quando seguro",
      "Buzinar para outros carros saírem",
      "Ignorar placa"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `A placa R‑25 (semáforo adicional) intermitente em vermelho exige parada completa antes de prosseguir quando seguro (CTB Art. 77).`
  },
  {
    text: "Ciclista, ao se aproximar de ponte sem acostamento, deve:",
    options: [
      "Ultrapassar outros pedestres",
      "Reduzir velocidade e manter-se o mais à direita possível",
      "Acelerar para atravessar",
      "Ignorar obstáculo"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `O art. 58 do CTB requer que o ciclista circule o mais próximo possível do bordo; em ponte sem acostamento, isso é ainda mais crítico para evitar quedas.`
  },
  {
    text: "Pedestre, ao atravessar em faixa sem semáforo, deve:",
    options: [
      "Correr sem olhar",
      "Reduzir velocidade e atravessar com atenção",
      "Ultrapassar veículos parados",
      "Ignorar pedestres atrás"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `O art. 70 do CTB orienta que pedestres devem atravessar “observando o fluxo de veículos” – reduzir velocidade e olhar em ambas as direções.`
  },
  {
    text: "Motociclista, ao trafegar em via urbana iluminada, deve:",
    options: [
      "Usar farol alto",
      "Usar farol baixo",
      "Desligar farol",
      "Usar apenas piscas"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `A Res. 816/21 determina uso de farol baixo durante o dia em rodovias; em via urbana iluminada, farol baixo mantém visibilidade sem ofuscar.`
  },
  {
    text: "Motorista, ao trafegar em trecho de obras, deve:",
    options: [
      "Acelerar para não atrasar",
      "Reduzir velocidade, observar sinalização e operadores",
      "Ignorar cones",
      "Ultrapassar veículos de obra"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `O art. 61 do CTB prevê redução de velocidade e respeito à sinalização extra em trechos de obras para proteger trabalhadores e usuários.`
  },
  {
    text: "Ciclista, ao trafegar com passageiro, deve:",
    options: [
      "Carregar qualquer peso adicional",
      "Não transportar passageiros, exceto se equipamento apropriado",
      "Ultrapassar rápido",
      "Ignorar regras"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `O art. 58 parágrafo único do CTB proíbe transporte de passageiros em bicicletas, salvo se houver dispositivo específico que garanta equilíbrio.`
  },
  {
    text: "Pedestre, ao caminhar em área sem calçada, deve:",
    options: [
      "Caminhar no meio da via",
      "Utilizar acostamento ou bordo esquerdo, de frente para o tráfego",
      "Ignorar sentido",
      "Correr para não ser atingido"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `O art. 68 do CTB recomenda trânsito de pedestres “pelo bordo da pista, sentido contrário ao do tráfego” quando não houver calçadas.`
  },
  {
    text: "Motociclista, ao trafegar em via com limite 50 km/h, deve:",
    options: [
      "Manter até 60 km/h",
      "Respeitar e não ultrapassar 50 km/h",
      "Ultrapassar em situação de urgência",
      "Ignorar limite"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `O art. 61 do CTB estabelece que o condutor não pode exceder o limite de velocidade indicado pela sinalização.`
  },
  {
    text: "Motorista, ao trafegar em rua de mão dupla, deve:",
    options: [
      "Ultrapassar pela contramão",
      "Ultrapassar pela esquerda quando seguro",
      "Ultrapassar pela direita",
      "Ignorar regras"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `O art. 29 do CTB autoriza ultrapassagem pela esquerda em via de mão dupla, desde que respeite sinalização e segurança.`
  },
  {
    text: "Ciclista, ao trafegar por via com lombada sinalizada, deve:",
    options: [
      "Acelerar sobre a lombada",
      "Reduzir velocidade antes da lombada",
      "Ultrapassar lombada pela contramão",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Placa A-13 (lombada) exige redução de velocidade antes do obstáculo (CTB Anexo II).`
  },
  {
    text: "Pedestre, ao caminhar em rua sem iluminação, deve:",
    options: [
      "Ignorar falta de luz",
      "Usar lanternas ou roupas reflexivas",
      "Correr sem atenção",
      "Andar no centro da rua"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB não especifica, mas Res. 105/2004 do Contran recomenda pedestres usarem elementos refletivos em condições de baixa visibilidade.`
  },
  {
    text: "Motociclista, ao trafegar em via rural, deve:",
    options: [
      "Manter farol baixo",
      "Manter farol baixo aceso dia e noite",
      "Desligar faróis durante o dia",
      "Usar apenas luz de freio"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `Resolução 816/21 obriga uso de farol baixo em rodovias e vias rurais durante o dia para maior visibilidade.`
  },
  {
    text: "Motorista, ao se aproximar de ciclovia, deve:",
    options: [
      "Ignorar ciclistas",
      "Reduzir velocidade e acostar-se ao bordo antes de cruzar",
      "Ultrapassar ciclistas na contramão",
      "Buzinar ciclistas"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB Art. 29 exige cautela e redução de velocidade ao cruzar ciclovias, dando espaço seguro aos ciclistas.`
  },
  {
    text: "Ciclista, ao pedalar junto a canaletas de drenagem, deve:",
    options: [
      "Circular exatamente na canaleta",
      "Manter distância lateral para evitar roda presa",
      "Ultrapassar canaleta",
      "Ignorar presença de canaleta"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Manter distância evita que as rodas fiquem presas nos sulcos das canaletas, prevenindo quedas (boas práticas).`
  },
  {
    text: "Pedestre, ao atravessar em faixa de pedestre com ciclovia integrada, deve:",
    options: [
      "Correr sem olhar",
      "Parar e observar tanto carros quanto ciclistas",
      "Ultrapassar ciclistas",
      "Ignorar ciclovia"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `Em faixa integrada, é necessário observar simultaneamente veículos e ciclistas antes de atravessar (CTB Art. 70).`
  },
  {
    text: "Motociclista, ao trafegar com garupa, deve:",
    options: [
      "Transportar sem capacete",
      "Garantir que ambos usem capacete e mantenham-se centralizados",
      "Permitir que garupa ultrapasse o motorista",
      "Ignorar legislação"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB Art. 244 exige uso de capacete para piloto e passageiro; ambos devem estar centralizados para manter equilíbrio.`
  },
  {
    text: "Motorista, ao avistar sinalização de “Sem saída”, deve:",
    options: [
      "Entrar e depois retornar",
      "Evitar entrar a menos que destino seja naquela via",
      "Ultrapassar obstáculo",
      "Ignorar placa"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa R‑2c (sem saída) indica via sem continuidade; o motorista deve evitá-la se não for o destino (CTB Anexo II).`
  },
  {
    text: "Ciclista, ao trafegar em via sinuosa, deve:",
    options: [
      "Ultrapassar em curvas",
      "Reduzir velocidade e manter centro da faixa",
      "Ignorar curvas",
      "Buzinar em curvas"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Placas de curva (A‑3 e A‑4) exigem redução de velocidade para segurança em trechos sinuosos (CTB Anexo II).`
  },
  {
    text: "Pedestre, ao usar smartphone, antes de atravessar, deve:",
    options: [
      "Continuar olhando tela",
      "Guardar smartphone e olhar para o trânsito",
      "Caminhar enquanto digita",
      "Ignorar pedestres ao lado"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB Art. 69 exige atenção plena ao cruzar; manusear smartphone reduz percepção de riscos.`
  },
  {
    text: "Motociclista, ao trafegar em área escolar, deve:",
    options: [
      "Acelerar para passar rápido",
      "Reduzir velocidade e dar preferência a pedestres",
      "Ignorar pedestres",
      "Ultrapassar escolares"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB Art. 61 prevê redução de velocidade em área escolar e prioridade a pedestres, especialmente crianças.`
  },
  {
    text: "Motorista, ao ver faixa de retenção pintada, deve:",
    options: [
      "Estacionar sobre ela",
      "Não ultrapassar o limite da faixa antes de parar",
      "Ultrapassar ligeiramente",
      "Ignorar pintura"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB Art. 88 define faixa de retenção como linha que delimita onde o veículo deve parar quando o sinal estiver fechado.`
  },
  {
    text: "Ciclista, ao parar em semáforo, deve manter:",
    options: [
      "Pé no chão junto à faixa de retenção",
      "Bicicleta inclinada no meio da via",
      "Pé no pedal e avançar no vermelho",
      "Ignorar retenção"
    ],
    correctOption: 0,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `A melhor prática é apoiar o pé no chão antes da faixa de retenção, garantindo estabilidade e respeitando o semáforo (CTB Art. 59).`
  },
  {
    text: "Pedestre, ao caminhar em via rural não iluminada, deve:",
    options: [
      "Usar roupas escuras",
      "Usar elementos refletivos e caminhar pelo bordo",
      "Andar na contramão sem refletivo",
      "Ignorar condições"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB Art. 68 e Res. 105/04 recomendam roupas claras ou refletivas e caminhar de frente para o tráfego.`
  },
  {
    text: "Motociclista, ao rebocar com corda, deve:",
    options: [
      "Usar corda improvisada curta",
      "Usar equipamento adequado e corda especificada",
      "Ultrapassar veículos rebocados",
      "Ignorar segurança"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB Art. 105 exige uso de equipamento adequado para reboque, sem exceder dimensões ou comprometer segurança.`
  },
  {
    text: "Motorista, ao avistar pedestre idoso na faixa, deve:",
    options: [
      "Buzinar para apressar",
      "Reduzir ainda mais a velocidade e aguardar travessia completa",
      "Ultrapassar antes que ele atravesse",
      "Ignorar lento deslocamento"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB Art. 29, inciso XII, obriga ao condutor a dar preferência especial a pedestres idosos e reduzir velocidade para auxiliá-los.`
  },
  {
    text: "Ciclista, ao utilizar linha tracejada no centro, pode:",
    options: [
      "Ultrapassar se seguro",
      "Avançar no sinal vermelho",
      "Ultrapassar sobre faixa de pedestres",
      "Ignorar sinalização"
    ],
    correctOption: 0,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB Art. 90 define linha tracejada como indicativa de faixa dupla, permitindo ultrapassagem se segurança for garantida.`
  },
  {
    text: "Pedestre, ao atravessar com chuva forte, deve:",
    options: [
      "Correr sem olhar",
      "Segurar guarda-chuva e verificar veículos antes de cada passo",
      "Ignorar chuva",
      "Ultrapassar por trás de ônibus"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB Art. 70’s “observar o fluxo” estende-se a condições de chuva, verificando veículos antes de cada avanço.`
  },
  {
    text: "Motociclista, ao usar faixa exclusiva de ônibus, deve:",
    options: [
      "Circular sem restrição",
      "Não usar faixa exclusiva de ônibus, exceto se autorizada",
      "Ultrapassar ônibus nessa faixa",
      "Buzinar dentro da faixa"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB Art. 29 proíbe circulação de ciclomotores e motocicletas em faixas exclusivas de ônibus, salvo autorização específica.`
  },
  {
    text: "Motorista, ao trafegar em curva sem sinalização, deve:",
    options: [
      "Acelerar",
      "Reduzir velocidade e manter trajetória segura",
      "Ultrapassar rápido",
      "Ignorar condição"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB Art. 29 recomenda velocidade compatível com a segurança; sem placa, reduzir antes da curva para manter controle.`
  },
  {
    text: "Ciclista, ao parar em semáforo, pode:",
    options: [
      "Avançar no vermelho",
      "Apoiar o pé no chão antes da faixa de retenção",
      "Manter bicicleta em movimento lento",
      "Ignorar retenção"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB Art. 59 e Art. 88 indicam que bicicleta deve parar antes da faixa de retenção e o ciclista pode apoiar o pé no chão para estabilidade.`
  },
  {
    text: "Pedestre, ao usar passarela com escada, deve:",
    options: [
      "Ultrapassar correndo",
      "Seguir a orientação da passarela mantendo atenção nos degraus",
      "Descer correndo",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB Art. 70 e Res. 619/16 recomendam uso de passarelas e atenção ao circular por escadas para evitar quedas.`
  },
  {
    text: "Motociclista, ao encarar lombada eletrônica, deve:",
    options: [
      "Acelerar para registrar velocidade alta",
      "Reduzir velocidade para não ser autuado",
      "Ultrapassar lombada",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `Embora lombada eletrônica fiscalize velocidade, CTB Art. 61 e Res. 396/11 impõem respeito aos limites com redução antes do obstáculo.`
  },
  {
    text: "Motorista, ao trafegar em via com solo solto, deve:",
    options: [
      "Acelerar para limpar pneus",
      "Reduzir velocidade e manter distância segura",
      "Ultrapassar sem cuidado",
      "Ignorar condições"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB Art. 29 requer velocidade compatível com a segurança, incluindo vias com terreno solto.`
  },
  {
    text: "Ciclista, ao pedalar em zona escolar, deve:",
    options: [
      "Ultrapassar crianças rapidamente",
      "Reduzir velocidade e sinalizar intenções",
      "Ignorar placas escolares",
      "Usar buzina"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB Art. 61 obriga redução de velocidade em zona escolar; ciclistas devem sinalizar e trafegar lentamente para maior segurança de crianças.`
  },
  {
    text: "Pedestre, ao sinalizar com braile na calçada, deve:",
    options: [
      "Ignorar piso tátil",
      "Utilizar piso tátil para orientação",
      "Cobrir piso tátil com objetos",
      "Ultrapassar piso tátil"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `Res. 396/11 do Contran define piso tátil direciona pedestres com deficiência visual; deve-se usar e não obstruir.`
  },
  {
    text: "Motociclista, ao trafegar em trecho com grade metálica no chão, deve:",
    options: [
      "Acelerar sobre a grade",
      "Reduzir velocidade e evitar contato direto",
      "Ultrapassar pela contramão",
      "Ignorar presença"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `Grades metálicas são escorregadias – reduzir velocidade e desviar evita derrapagens.`
  },
  {
    text: "Motorista, ao avistar sinalização de obras, deve:",
    options: [
      "Acelerar para passar rápido",
      "Reduzir velocidade e respeitar orientação",
      "Ignorar trabalhadores",
      "Ultrapassar trilhas"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB Art. 61 e Res. 200/06 determinam redução de velocidade e respeito a sinalização de obras.`
  },
  {
    text: "Ciclista, ao pedalar em área rural sem iluminação, deve:",
    options: [
      "Não usar luz dianteira",
      "Usar luz branca dianteira e refletivos",
      "Ignorar ausência de iluminação",
      "Ultrapassar veículos lentos"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB Art. 105 e Res. 227/07 impõem sinalização noturna – luz branca frontal e coletes/refletores em vias escuras.`
  },
  {
    text: "Pedestre, ao atravessar com carrinho de bebê, deve:",
    options: [
      "Correr pondo bebê em risco",
      "Aguardar semáforo e usar faixa de pedestre com cuidado",
      "Ultrapassar veículos parados",
      "Ignorar semáforo"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB Art. 70 exige uso de faixa e observação do fluxo; com carrinho, atenção redobrada e regra mantém-se a mesma.`
  },
  {
    text: "Motociclista, ao trafegar em via com faixa amarela intermitente, deve:",
    options: [
      "Prosseguir sem atenção",
      "Reduzir velocidade e prosseguir com cuidado",
      "Buzinar",
      "Ultrapassar veículos"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB Art. 53 e Res. 396/11 definem faixa amarela intermitente como sinal de atenção redobrada.`
  },
  {
    text: "Motorista, ao ver ciclista parado na via, deve:",
    options: [
      "Ultrapassar colado",
      "Reduzir velocidade e manter distância lateral segura",
      "Buzinar",
      "Ignorar ciclista"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB Art. 29 e Art. 201 (distância mínima de 1,5 m) obrigam o condutor a reduzir velocidade e manter espaço seguro ao ultrapassar ciclistas.`
  },
  {
    text: "Ciclista, ao trafegar em via compartilhada com pedestres, deve:",
    options: [
      "Ultrapassar pedestres rapidamente",
      "Reduzir velocidade e sinalizar aproximação",
      "Ignorar pedestres",
      "Buzinar para avisar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `O art. 58 do CTB estabelece que o ciclista “deve ajustar sua velocidade e comportamento ao ambiente”, em faixa mista reduzindo a velocidade e sinalizando para não surpreender pedestres.`
  },
  {
    text: "Motorista, ao avistar placa de ‘Velocidade máxima permitida’, deve:",
    options: [
      "Exceder levemente o limite",
      "Manter-se abaixo ou igual ao valor indicado",
      "Ignorar o valor em rodovias",
      "Acelerar até 20% acima"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `O art. 61 do CTB determina que ao avistar placa R‑19, o condutor “não pode exceder a velocidade máxima” ali estabelecida.`
  },
  {
    text: "Pedestre, ao atravessar via em declive, deve:",
    options: [
      "Correr para subir rápido",
      "Reduzir velocidade e observar o tráfego nos dois sentidos",
      "Ultrapassar veículos parados",
      "Ignorar condições de relevo"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `O art. 70 do CTB reforça observação do fluxo em todos os casos; em declive, a visibilidade pode ser reduzida, exigindo atenção redobrada.`
  },
  {
    text: "Motociclista, ao trafegar com baixa carga de combustível, deve:",
    options: [
      "Parar imediatamente na pista",
      "Buscar local seguro para abastecer antes de prosseguir",
      "Ignorar nível de combustível",
      "Ultrapassar veículos para chegar logo"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `Boa prática de segurança (Art. 29 do CTB) recomenda planejar abastecimento em local seguro para não parar no meio da via, evitando risco de colisão.`
  },
  {
    text: "Motorista, ao avistar placa de ‘Proibido Ultrapassar’, deve:",
    options: [
      "Ultrapassar se for rápido",
      "Não ultrapassar até área liberada",
      "Ultrapassar apenas à noite",
      "Ignorar placa"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa R‑8 (Proibido Ultrapassar) – CTB art. 89 estabelece que “é proibido ultrapassar veículos em área sinalizada”.`
  },
  {
    text: "Pedestre, ao usar smartphone em passarela, deve:",
    options: [
      "Confiar no corrimão para seguir",
      "Observar degraus e usar corrimão",
      "Correr distraído",
      "Ignorar superfície escorregadia"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `Res. 619/16 do Contran orienta atenção às superfícies e uso de corrimão em passarelas e escadas para prevenir queda.`
  },
  {
    text: "Ciclista, ao trafegar em via de terra, deve:",
    options: [
      "Manter alta velocidade",
      "Reduzir velocidade e evitar buracos",
      "Ultrapassar veículos de carga",
      "Ignorar irregularidades"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 impõe condução em velocidade compatível com segurança; em solo sem pavimento, reduzir e desviar de buracos evita quedas.`
  },
  {
    text: "Motorista, ao avistar sinal de ‘Rotatória à frente’, deve:",
    options: [
      "Acelerar para entrar primeiro",
      "Reduzir velocidade e sinalizar saída",
      "Ignorar sinal",
      "Ultrapassar pela direita"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa A‑15 (rotatória) – CTB Anexo II: reduz-se a velocidade antes de acessar e sinaliza-se saída para orientar demais usuários.`
  },
  {
    text: "Pedestre, ao caminhar próximo a área de descarga de caminhões, deve:",
    options: [
      "Aproximar-se para ver melhor",
      "Manter distância e atenção aos veículos",
      "Ultrapassar área de descarga",
      "Ignorar operações"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB Art. 68 recomenda permanecer em lugar seguro e evitar obstáculos móveis — em área de descarga, manter distância de veículos.`
  },
  {
    text: "Motociclista, ao trafegar em noite chuvosa, deve:",
    options: [
      "Acelerar para atravessar rápido",
      "Reduzir velocidade e usar luz baixa",
      "Ultrapassar veículos lentos",
      "Ignorar condições meteorológicas"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 e Res. 396/11 exigem redução de velocidade e uso de luz baixa para não ofuscar e manter visibilidade em chuva.`
  },
  {
    text: "Ciclista, ao sinalizar conversão, deve:",
    options: [
      "Usar buzina",
      "Estender braço correspondente à direção",
      "Acenar com livre",
      "Ultrapassar antes de sinalizar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58 parágrafo 2º: “o ciclista deve sinalizar a manobra estendendo o braço na direção correspondente”.`
  },
  {
    text: "Motorista, ao avistar faixas zebras, deve:",
    options: [
      "Estacionar sobre elas",
      "Não estacionar nem circular sobre elas",
      "Ultrapassar rapidamente",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 90 define faixa zebrada como área proibida de circulação ou estacionamento para garantir passagem segura.`
  },
  {
    text: "Pedestre, ao caminhar em via sem sinalização, deve:",
    options: [
      "Atravessar correndo",
      "Escolher ponto com boa visibilidade e atravessar com cuidado",
      "Ultrapassar veículos parados",
      "Ignorar fluxo"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70 orienta atravessar “em linha reta e observando o fluxo de veículos”, escolhendo pontos com visibilidade.`
  },
  {
    text: "Motociclista, ao trafegar com chuvas fortes, deve:",
    options: [
      "Ultrapassar veículos lentos",
      "Reduzir velocidade ainda mais e manter distância lateral",
      "Acelerar para dissipar água",
      "Ignorar visibilidade reduzida"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: velocidade compatível com segurança; chuva forte exige reduzir mais e aumentar distância lateral para evitar aquaplanagem.`
  },
  {
    text: "Motorista, ao avistar placa de ‘Risco de derrapagem’, deve:",
    options: [
      "Parar instantaneamente",
      "Reduzir velocidade e prosseguir com atenção",
      "Acelerar para passar rápido",
      "Ignorar advertência"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa A‑49 (derrapagem) – CTB Anexo II: exige reduzir velocidade e prosseguir com cuidado para evitar saída de pista.`
  },
  {
    text: "Ciclista, ao ser ultrapassado por veículo, deve:",
    options: [
      "Manter trajetória e permitir ultrapassagem segura",
      "Virar bruscamente para a direita",
      "Acelerar para impedir ultrapassagem",
      "Ignorar aproximação"
    ],
    correctOption: 0,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Boas práticas (CTB art. 29) recomendam manter trajetória e permitir que veículos ultrapassem com segurança, sem movimentos bruscos.`
  },
  {
    text: "Pedestre, ao andar em calçada estreita, deve:",
    options: [
      "Caminhar virado para o trânsito",
      "Andar em fila única, mantendo-se à direita",
      "Correr para liberar espaço",
      "Ignorar pedestres contrários"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68 recomenda circulação em calçadas pela direita, em fila única se necessário para convívio seguro.`
  },
  {
    text: "Motociclista, ao trafegar em local com neblina, deve:",
    options: [
      "Usar farol alto",
      "Usar luz de neblina dianteira/traseira e reduzir velocidade",
      "Acelerar para sair logo",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 e Res. 396/11 orientam uso de luz de neblina e redução de velocidade em baixa visibilidade.`
  },
  {
    text: "Motorista, ao avistar placa de ‘Retorno proibido’, deve:",
    options: [
      "Fazer retorno à direita",
      "Não realizar retorno naquele local",
      "Retornar pela contramão",
      "Ignorar placa"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa R‑2d (retorno proibido) – CTB Anexo II proíbe retorno naquele trecho, sob pena de infração.`
  },
  {
    text: "Ciclista, ao pedalar em ciclofaixa exclusiva de ônibus, deve:",
    options: [
      "Circular normalmente",
      "Evitar uso da faixa exclusiva de ônibus",
      "Ultrapassar ônibus",
      "Ignorar demarcação"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 proíbe circulação de bicicletas em faixas exclusivas de ônibus, garantindo prioridade exclusiva ao transporte coletivo.`
  },
  {
    text: "Pedestre, ao atravessar em faixa sem sinal, deve:",
    options: [
      "Avançar sem olhar",
      "Reduzir velocidade, olhar e atravessar somente se seguro",
      "Ignorar circulação",
      "Proteger veículos"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70 reforça observação do fluxo e travessia segura, mesmo sem semáforo.`
  },
  {
    text: "Motociclista, ao trafegar em via de mão única, deve:",
    options: [
      "Ultrapassar pela direita",
      "Ultrapassar apenas pela esquerda",
      "Ultrapassar pelos acostamento",
      "Ignorar regras"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: em mão única, ultrapassagem ocorre pela esquerda, respeitando sinalização e segurança.`
  },
  {
    text: "Motorista, ao ver faixa de pedestre elevada, deve:",
    options: [
      "Acelerar para passar rápido",
      "Reduzir velocidade e dar preferência ao pedestre",
      "Ignorar elevação",
      "Ultrapassar pedestre"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 70: faixa elevada é considerada faixa de pedestre, com prioridade e redução de velocidade obrigatórias.`
  },
  {
    text: "Ciclista, ao trafegar em via com lombofaixa, deve:",
    options: [
      "Ultrapassar rápido",
      "Reduzir velocidade antes e sobre a lombofaixa",
      "Ignorar lombofaixa",
      "Ultrapassar pedestres"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Lombofaixa (lombada elevada) impõe redução de velocidade para proteger pedestres e manter estabilidade (Anexo I, CTB).`
  },
  {
    text: "Pedestre, ao usar faixa com semáforo de contagem regressiva, deve:",
    options: [
      "Iniciar travessia a qualquer momento",
      "Iniciar apenas com contagem verde completa",
      "Ignorar contagem",
      "Ultrapassar veículos"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 69: semáforo de pedestres com contagem regressiva indica tempo disponível; iniciar travessia apenas se houver tempo suficiente para cruzar com segurança.`
  },
  {
    text: "Motociclista, ao trafegar em via local, deve:",
    options: [
      "Ultrapassar veículos estacionados pela calçada",
      "Reduzir velocidade, observar pedestres e estacionados",
      "Acelerar entre carros",
      "Ignorar pedestres"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: em via local, há maior presença de pedestres e veículos estacionados, exigindo redução de velocidade e atenção.`
  },
  {
    text: "Motorista, ao avistar faixa amarela contínua no meio, deve:",
    options: [
      "Ultrapassar se rápido",
      "Não ultrapassar e manter-se à direita",
      "Estacionar sobre ela",
      "Ignorar faixa"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 90: faixa contínua amarela proíbe ultrapassagem e troca de faixa, devendo o condutor manter-se à direita.`
  },
  {
    text: "Ciclista, ao trafegar em cruzamento sem semáforo, deve:",
    options: [
      "Ultrapassar sem parar",
      "Reduzir velocidade, observar o fluxo e parar se necessário",
      "Buzinar para abrir caminho",
      "Ignorar regras"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 59: ciclistas obedecem mesmas regras de trânsito de veículos, reduzindo e parando em cruzamentos sem semáforo conforme necessidade.`
  },
  {
    text: "Pedestre, ao atravessar em faixa com semáforo verde para veículos, deve:",
    options: [
      "Atravessar com cuidado mesmo sinal verde de veículos",
      "Aguardar sinal de pedestre antes de iniciar",
      "Ignorar semáforo de pedestre",
      "Ultrapassar veículos parados"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 69: pedestres só devem iniciar travessia após sinal verde específico para pedestres, observando semáforo dedicado.`
  },
  {
    text: "Motociclista, ao trafegar em área residencial, deve:",
    options: [
      "Acelerar para ultrapassar carros estacionados",
      "Reduzir velocidade e zelar por segurança de moradores",
      "Ignorar limites",
      "Ultrapassar pedestres"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 61: em áreas residenciais com limite reduzido, condutor deve respeitar velocidade e zelar por pedestres e crianças.`
  },
  {
    text: "Motorista, ao avistar ciclista em ciclofaixa à esquerda, deve:",
    options: [
      "Ultrapassar pela esquerda",
      "Aguardar passagem antes de virar à esquerda",
      "Buzinar no ciclista",
      "Ignorar presença"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: antes de conversão à esquerda, deve-se aguardar ciclistas na ciclofaixa e ceder passagem.`
  },
  {
    text: "Ciclista, ao trafegar com bicicleta adaptada para carga, deve:",
    options: [
      "Carregar peso além da capacidade",
      "Respeitar limites de carga e equilíbrio",
      "Ultrapassar veículos lenta",
      "Ignorar regras"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 105: carga em bicicletas deve respeitar capacidade e não comprometer equilíbrio, usando dispositivos adequados.`
  },
  {
    text: "Pedestre, ao caminhar em faixa elevada sem semáforo, deve:",
    options: [
      "Correr sem olhar",
      "Observar se veículos reduziram antes de atravessar",
      "Ultrapassar veículos parados",
      "Ignorar obstáculos"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: faixa elevada é equivalente a semáforo vermelho para veículos; pedestre observa redução e só então inicia travessia.`
  },
  {
    text: "Motociclista, ao trafegar em via com tantos veículos estacionados, deve:",
    options: [
      "Ultrapassar pela contramão",
      "Reduzir velocidade e manter espaço para abertura de portas",
      "Acelerar entre carros",
      "Ignorar presença"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: manter velocidade compatível e distância lateral para evitar “portas abertas” e preservar segurança.`
  },
  {
    text: "Motorista, ao se aproximar de faixa de ônibus elevada, deve:",
    options: [
      "Ultrapassar rapidamente",
      "Reduzir velocidade e respeitar demarcação",
      "Estacionar sobre a faixa",
      "Ignorar area"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Mesmo sendo exclusiva, a faixa elevada também exige redução de velocidade e respeito à demarcação para evitar acidentes com passageiros.`
  },
  {
    text: "Ciclista, ao pedalar em faixa compartilhada sem sinalização, deve:",
    options: [
      "Manter velocidade máxima",
      "Reduzir velocidade e ceder passagem a pedestres",
      "Buzinar para abrirem espaço",
      "Ignorar pedestres"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58 e art. 68: em vias mistas, ciclistas cedem passagem a pedestres e ajustam velocidade.`
  },
  {
    text: "Pedestre, ao cruzar linha férrea, deve:",
    options: [
      "Correr sobre trilhos",
      "Observar ambos os sentidos e cruzar somente quando seguro",
      "Ignorar movimentos de trem",
      "Ultrapassar vagões parados"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: embora não trate diretamente de linhas férreas, adota-se princípio de “observar fluxo” – aqui, trens.`
  },
  {
    text: "Motociclista, ao trafegar em pista molhada, deve:",
    options: [
      "Acelerar",
      "Reduzir velocidade e evitar frenagens bruscas",
      "Ultrapassar veículos lentos",
      "Ignorar condições"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 e art. 29, inciso II: seguir velocidade compatível e evitar frenagens bruscas em piso escorregadio.`
  },
  {
    text: "Motorista, ao trafegar em via urbana com ciclovia, deve:",
    options: [
      "Invadir ciclovia",
      "Manter-se fora da ciclovia e ceder espaço a ciclistas",
      "Ultrapassar ciclistas dentro da ciclovia",
      "Ignorar demarcação"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: ciclovias são exclusivas para ciclistas; condutores devem respeitar e não invadir.`
  },
  {
    text: "Ciclista, ao pedalar com mochila grande, deve:",
    options: [
      "Não usar capacete",
      "Distribuir carga de forma equilibrada",
      "Ultrapassar veículos rapidamente",
      "Ignorar regras"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 105: carga deve ser equilibrada para não prejudicar manobrabilidade e segurança.`
  },
  {
    text: "Pedestre, ao encontrar piso tátil direcional, deve:",
    options: [
      "Ignorar piso tátil",
      "Seguir orientação do piso até ponto seguro",
      "Caminhar ao lado do piso",
      "Cobrir piso tátil"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `Res. 396/11 do Contran: piso tátil direcional guia pedestres com deficiência visual, devendo-se seguir até local seguro.`
  },
  {
    text: "Motociclista, ao trafegar em via com lombada seca (sem sinalização), deve:",
    options: [
      "Acelerar para ultrapassar rápido",
      "Reduzir velocidade e observar terreno",
      "Ignorar lombada",
      "Ultrapassar pela contramão"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `Mesmo sem placa, obstáculo exige redução de velocidade (CTB art. 29) e cuidado adicional.`
  },
  {
    text: "Motorista, ao avistar faixa de pedestre sem semáforo mas com guarda-corpo, deve:",
    options: [
      "Ultrapassar rapidamente",
      "Respeitar faixa e aguardar liberação de guarda-corpo",
      "Ignorar guarda-corpo",
      "Estacionar na faixa"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 70 e diretrizes de acessibilidade: guarda-corpo indica travessia controlada; aguardar liberação para garantir segurança.`
  },
  {
    text: "Ciclista, ao trafegar em via sem acostamento e sem ciclovia, deve:",
    options: [
      "Andar no meio da via",
      "Manter-se o mais à direita possível e atento ao tráfego",
      "Ultrapassar veículos pela direita",
      "Ignorar regras"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58: ciclistas circulam o mais próximo possível do bordo e no mesmo sentido do trânsito.`
  },
  {
    text: "Pedestre, ao atravessar em curva sem visibilidade, deve:",
    options: [
      "Correr sem olhar",
      "Buscar ponto mais visível antes de cruzar",
      "Ignorar curva",
      "Chamar veículo"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: escolher local com visibilidade antes de atravessar, evitando cruzar em pontos cegos.`
  },
  {
    text: "Motociclista, ao trafegar em via com movimento intenso, deve:",
    options: [
      "Zig‑zaguear entre carros",
      "Manter distância segura e sinalizar manobras",
      "Ignorar trânsito",
      "Ultrapassar pela contramão"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: cabe manter distância, prever manobras e sinalizar, mesmo em tráfego intenso, para segurança de todos.`
  },
  {
    text: "Motorista, ao se aproximar de faixa de pedestre e não haver pedestres, deve:",
    options: [
      "Parar sempre",
      "Reduzir velocidade e prosseguir com atenção",
      "Ultrapassar sobre a faixa",
      "Ignorar demarcação"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 70 exige que o condutor reduza a velocidade ao se aproximar de faixa de pedestre, mesmo sem pedestres, para eventual travessia.`
  },
  {
    text: "Ciclista, ao trafegar em via com trânsito misto, deve:",
    options: [
      "Buzinar para liberar espaço",
      "Manter velocidade moderada e ceder passagem a pedestres",
      "Ignorar pedestres",
      "Ultrapassar veículos parados"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58 e art. 68: em trânsito misto, ciclistas ajustam velocidade e respeitam pedestres.`
  },
  {
    text: "Pedestre, ao atravessar rua com duas faixas por sentido, deve:",
    options: [
      "Correr entre faixas rapidamente",
      "Aguardar sinal verde de pedestre ou esperar ambas as faixas livres",
      "Ignorar faixa oposta",
      "Ultrapassar veículos parados"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 69: pedestres aguardam sinal verde específico; em travessia sem semáforo, aguardam momento seguro para ambas as faixas.`
  },
  {
    text: "Motociclista, ao encostar em pedestre para ultrapassagem, deve:",
    options: [
      "Buzinar próximo ao ouvido do pedestre",
      "Manter distância lateral segura e sinalizar",
      "Ultrapassar rente ao pedestre",
      "Ignorar presença"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 201 (distância mínima de 1,5 m) e art. 29 exigem manter espaço lateral ao ultrapassar pedestres ou ciclistas.`
  },
  {
    text: "Motorista, ao avistar placa de ‘Parada obrigatória’, deve:",
    options: [
      "Reduzir lentamente e prosseguir",
      "Parar completamente antes da linha de retenção",
      "Ultrapassar sem parar",
      "Ignorar placa"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa R‑1 – CTB art. 44 determina “parada obrigatória e total do veículo antes da linha de retenção ou, na falta desta, antes da via transversal”.`
  },
  {
    text: "Ciclista, ao chegar em entroncamento sem sinalização, deve:",
    options: [
      "Acelerar para passar primeiro",
      "Reduzir velocidade e dar preferência a quem vier pela direita",
      "Ignorar regras de preferência",
      "Ultrapassar pela contramão"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 e art. 29, inciso V: em entroncamentos, aplica-se preferência a quem vier pela direita, inclusive ciclistas.`
  },
  {
    text: "Pedestre, ao atravessar na faixa de pedestre elevada, deve:",
    options: [
      "Pular pela lombada",
      "Aguardar os veículos pararem e atravessar com calma",
      "Ultrapassar veículos em movimento",
      "Correr sem olhar"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: faixa elevada confere prioridade ao pedestre; ele deve aguardar a parada dos veículos antes de iniciar a travessia.`
  },
  {
    text: "Motociclista, ao trafegar em via rural sem acostamento, deve:",
    options: [
      "Dirigir no centro da via",
      "Manter-se o mais à direita possível e atento a veículos de grande porte",
      "Ultrapassar caminhões pela contramão",
      "Ignorar acostamento"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: em vias sem acostamento, motociclista circula o mais próximo possível do bordo, mantendo atenção a veículos maiores.`
  },
  {
    text: "Motorista, ao avistar placa de ‘Curva perigosa à esquerda’, deve:",
    options: [
      "Acelerar para vencer a curva",
      "Reduzir velocidade e manter trajetória interna",
      "Ultrapassar antes da curva",
      "Ignorar advertência"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa A‑3a – CTB Anexo II: alerta para curva perigosa; condutor deve reduzir velocidade e não invadir pista oposta.`
  },
  {
    text: "Ciclista, ao se aproximar de ponte estreita, deve:",
    options: [
      "Ajeitar-se ao centro da ponte",
      "Reduzir velocidade e manter-se direito para evitar colisões",
      "Ultrapassar outros ciclistas",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: aproximações de trechos estreitos exigem redução de velocidade e manutenção de trajetória segura.`
  },
  {
    text: "Pedestre, ao atravessar rua com tráfego intenso de ônibus, deve:",
    options: [
      "Atravessar sem olhar",
      "Buscar ponto com semáforo ou faixa e aguardar liberação",
      "Iniciar travessia rapidamente",
      "Ultrapassar ônibus parados"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: priorizar travessia em local sinalizado; evitar áreas de ônibus embarcando/desembaracando.`
  },
  {
    text: "Motociclista, ao trafegar em pista molhada, deve:",
    options: [
      "Frear bruscamente antes de curva",
      "Reduzir velocidade e usar freio motor",
      "Acelerar nas retas",
      "Ignorar condições"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: frenar de modo gradual e usar freio motor em piso escorregadio evita bloqueio de rodas e queda.`
  },
  {
    text: "Motorista, ao avistar ciclista sinalizando conversão, deve:",
    options: [
      "Acelerar para passar primeiro",
      "Aguardar e não ultrapassar durante a manobra",
      "Ultrapassar rente ao ciclista",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 58 parágrafo 2º e art. 29: manobra de ciclista sinalizada obriga condutor a aguardar e manter distância segura durante a conversão.`
  },
  {
    text: "Pedestre, ao caminhar em calçada com obstáculos, deve:",
    options: [
      "Contornar obstáculos pela via",
      "Utilizar rota mais segura, mesmo que mais longa",
      "Ignorar obstáculos",
      "Correr para passar rápido"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: circulação em calçadas deve ser feita de forma segura, contornando obstáculos com antecedência e mantendo distância de veículos.`
  },
  {
    text: "Motociclista, ao trafegar em meia-luz, deve:",
    options: [
      "Usar luz alta",
      "Usar luz baixa e lanternas auxiliares",
      "Desligar luzes para economizar bateria",
      "Ignorar visibilidade"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 40 e Res. 498/14 do Contran: uso de luz baixa obrigatório ao amanhecer e entardecer, com lanternas auxiliares se necessário.`
  },
  {
    text: "Motorista, ao estacionar em via urbana, deve:",
    options: [
      "Deixar veículo no meio da via",
      "Estacionar paralelo, o mais perto possível do meio-fio",
      "Estacionar em diagonal",
      "Ignorar vagas demarcadas"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 181, inciso I: estacionamento paralelo à guia, próximo ao meio-fio, exceto quando houver vagas demarcadas diferentes.`
  },
  {
    text: "Ciclista, ao trafegar em curva, deve:",
    options: [
      "Manter velocidade máxima",
      "Reduzir velocidade antes da curva",
      "Ultrapassar pela interna",
      "Ignorar geometria"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: adaptação de velocidade à geometria da via, reduzindo antes de curvas para manter aderência e equilíbrio.`
  },
  {
    text: "Pedestre, ao se aproximar de via férrea com cancela, deve:",
    options: [
      "Passar antes da cancela baixar",
      "Aguardar totalmente a abertura da cancela e passagem segura",
      "Ultrapassar barramento",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `Equivalência ao CTB art. 70: circulação segura em passagens de nível com cancela exige aguardar abertura completa.`
  },
  {
    text: "Motociclista, ao trafegar à noite, deve:",
    options: [
      "Usar farol alto sem alternar",
      "Alternar farol alto-baixo conforme aproximação de veículos",
      "Desligar farol alto",
      "Ignorar outros veículos"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 40: alternar farol alto para não ofuscar condutores de veículos em sentido contrário.`
  },
  {
    text: "Motorista, ao avistar placa de ‘Pare intermitente’, deve:",
    options: [
      "Passar sem parar",
      "Parar, sinalizar e prosseguir com segurança",
      "Acelerar",
      "Ignorar sinal"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa R‑2b (pare intermitente) – CTB art. 44: exige parada total e prosseguimento apenas quando seguro.`
  },
  {
    text: "Ciclista, ao trafegar em via compartilhada, deve:",
    options: [
      "Ultrapassar pedestres",
      "Manter velocidade compatível e ceder passagem",
      "Ignorar pedestres",
      "Buzinar para alertar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58 e art. 68: em compartilhamento, ciclista mantém velocidade segura e cede espaço a pedestres.`
  },
  {
    text: "Pedestre, ao cruzar via com canteiro central, deve:",
    options: [
      "Correr e cruzar de uma vez",
      "Aguardar no canteiro se necessário e prosseguir quando seguro",
      "Ultrapassar carros parados no canteiro",
      "Ignorar canteiro"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: canteiro central pode servir como ponto de espera, iniciando travessia de parte a parte com segurança.`
  },
  {
    text: "Motociclista, ao trafegar em rodovia sem iluminação, deve:",
    options: [
      "Usar luz baixa apenas",
      "Usar farol alto e auxiliar, reduzindo velocidade",
      "Desligar luzes",
      "Ignorar escuridão"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 40: em rodovias sem iluminação, farol alto e auxiliares garantem visibilidade, acompanhado de redução de velocidade.`
  },
  {
    text: "Motorista, ao encontrar cruzamento sem sinal, deve:",
    options: [
      "Acelerar para passar primeiro",
      "Reduzir velocidade e respeitar preferência à direita",
      "Ultrapassar pela contramão",
      "Ignorar regras"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 e art. 29, inciso V: preferência a quem vier pela direita em cruzamentos sem sinalização.`
  },
  {
    text: "Ciclista, ao trafegar em estrada rural, deve:",
    options: [
      "Manter-se no centro",
      "Manter-se o mais à direita possível e usar sinalização",
      "Ultrapassar veículos lentos",
      "Ignorar condições"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58: ciclistas circulam à direita e sinalizam sempre a intenção de manobra, mesmo em estradas rurais.`
  },
  {
    text: "Pedestre, ao caminhar em via sob chuva forte, deve:",
    options: [
      "Ignorar chuva",
      "Usar roupas adequadas e redobrar atenção aos veículos",
      "Correr sem olhar",
      "Atravessar sem cuidado"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: condições adversas exigem uso de elementos de proteção e maior atenção ao fluxo de veículos.`
  },
  {
    text: "Motociclista, ao trafegar em via com lombada sinalizada, deve:",
    options: [
      "Acelerar na lombada",
      "Reduzir velocidade antes de passar sobre ela",
      "Recorrer lombada em alta velocidade",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 e sinalização de lombada (A‑13) exigem redução de velocidade antes de passar sobre lombadas.`
  },
  {
    text: "Motorista, ao ver faixa amarela intermitente, deve:",
    options: [
      "Parar imediatamente",
      "Reduzir velocidade e prosseguir com cautela",
      "Ignorar faixa",
      "Estacionar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 53 (Anexo II): faixa amarela intermitente indica situação de atenção/perigo, exigindo redução de velocidade.`
  },
  {
    text: "Ciclista, ao circular em rota turística sinalizada, deve:",
    options: [
      "Ignorar rota",
      "Seguir placas de orientação e respeitar regras de trânsito locais",
      "Ultrapassar pedestres",
      "Andar fora da rota"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Placas marrons de rota turística (Anexo II, CTB) orientam trajeto; ciclistas devem seguir para melhor orientação e segurança.`
  },
  {
    text: "Pedestre, ao atravessar em faixa com semáforo sonoro, deve:",
    options: [
      "Ignorar sinais sonoros",
      "Ouvir sinais e atravessar conforme indicação sonora",
      "Ultrapassar veículos pendentes",
      "Correr sem atenção"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `Res. 396/11: semáforo sonoro auxilia pedestres com deficiência visual; sinais sonoros indicam início/fim da travessia.`
  },
  {
    text: "Motociclista, ao trafegar em via com ciclovia separada, deve:",
    options: [
      "Invadir ciclovia para ultrapassar",
      "Manter-se fora da ciclovia e respeitar exclusividade",
      "Ignorar demarcação",
      "Ultrapassar pedestres na ciclovia"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: ciclovias são exclusivas para bicicletas; motociclistas não devem invadir ou utilizar.`
  },
  {
    text: "Motorista, ao ver sinalização de ‘Retorno permitido’, pode:",
    options: [
      "Fazer retorno em qualquer ponto",
      "Fazer retorno apenas no local sinalizado",
      "Ignorar sinalização",
      "Ultrapassar para retornar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa R‑2c (retorno permitido) – CTB Anexo II: retorno valido apenas no local indicado, evitando manobras perigosas.`
  },
  {
    text: "Ciclista, ao trafegar em via sem iluminação, deve:",
    options: [
      "Circular sem luz",
      "Usar sinalização noturna dianteira e traseira",
      "Ignorar visibilidade",
      "Acelerar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 105 e Res. 396/11: bicicletas devem ter sinalização noturna dianteira e traseira em vias sem iluminação.`
  },
  {
    text: "Pedestre, ao utilizar passarela com rampa, deve:",
    options: [
      "Descer correndo pela rampa",
      "Utilizar corrimão e caminhar com cuidado",
      "Ignorar condições",
      "Empurrar carrinhos de compras"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `Diretrizes de acessibilidade (Res. 703/17 do Contran) recomendam uso de corrimão e cuidado em rampas para segurança.`
  },
  {
    text: "Motociclista, ao trafegar em via alagada, deve:",
    options: [
      "Acelerar para dispersar água",
      "Reduzir velocidade e evitar pontos profundos",
      "Ultrapassar veículos devagar",
      "Ignorar situação"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: em alagamentos, manter baixa velocidade e evitar áreas profundas para não perder controle da moto.`
  },
  {
    text: "Motorista, ao se aproximar de cruzamento com semáforo apagado, deve:",
    options: [
      "Passar normalmente",
      "Reduzir velocidade e tratar como cruzamento não sinalizado",
      "Ultrapassar pela direita",
      "Acelerar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: semáforo apagado configura-se cruzamento sem sinalização; aplica-se preferência a quem vier pela direita.`
  },
  {
    text: "Ciclista, ao trafegar em faixa mista de circulação, deve:",
    options: [
      "Ultrapassar pedestres rapidamente",
      "Manter velocidade moderada e ceder passagem",
      "Ignorar pedestres",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58 e art. 68: em faixas mistas, ciclistas devem ajustar velocidade e ceder passagem a pedestres.`
  },
  {
    text: "Pedestre, ao caminhar em via urbana com passeios irregulares, deve:",
    options: [
      "Correr para evitar tropeçar",
      "Manter-se atento ao piso e contornar imperfeições",
      "Ultrapassar pela rua",
      "Ignorar calçada"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: obrigatório cuidado redobrado em calçadas irregulares, contornando imperfeições para prevenir quedas.`
  },
  {
    text: "Motociclista, ao perceber aquaplanagem, deve:",
    options: [
      "Frear bruscamente",
      "Reduzir aceleração e manter pista reta",
      "Acelerar para retomar aderência",
      "Ignorar situação"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 e orientações de segurança recomendam reduzir aceleração, manter trajetória reta e não frear bruscamente em aquaplanagem.`
  },
  {
    text: "Motorista, ao passar por ponte com piso metálico, deve:",
    options: [
      "Acelerar para atravessar rápido",
      "Reduzir velocidade e manter trajetória central",
      "Ultrapassar veículos lentos",
      "Ignorar piso"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: pisos metálicos reduzem atrito; condutor deve reduzir velocidade e manter trajetória central para evitar derrapagem.`
  },
  {
    text: "Ciclista, ao trafegar próximo de veículos estacionados, deve:",
    options: [
      "Ultrapassar rente aos veículos",
      "Manter distância para evitar portas abertas",
      "Ignorar presença",
      "Acelerar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 e art. 201: manter distância lateral para evitar acidentes com portas abertas de veículos estacionados.`
  },
  {
    text: "Pedestre, ao caminhar em via com fluxo de ciclistas, deve:",
    options: [
      "Invadir ciclovia",
      "Manter-se na calçada e observar ciclovia antes de atravessar",
      "Ultrapassar ciclistas",
      "Ignorar ciclistas"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: pedestres circulam na calçada; ao cruzar ciclovia, observam fluxo de bicicletas antes de atravessar.`
  },
  {
    text: "Motociclista, ao sinalizar parada de emergência, deve:",
    options: [
      "Acionar farol alto",
      "Acionar pisca-alerta e posicionar o veículo em local seguro",
      "Ignorar sinais",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 40 e art. 68: pisca-alerta sinaliza emergência; motociclista deve parar em local seguro para não obstruir via.`
  },
  {
    text: "Motorista, ao avistar placa de ‘Piso Escorregadio’, deve:",
    options: [
      "Acelerar",
      "Reduzir velocidade e evitar manobras bruscas",
      "Ignorar placa",
      "Frear bruscamente"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa A‑49 (escorregadio) – CTB Anexo II: alerta para superfície escorregadia; condutor reduz velocidade e evita manobra brusca.`
  },
  {
    text: "Ciclista, ao trafegar em via com lombada seca sem sinalização, deve:",
    options: [
      "Passar em alta velocidade",
      "Reduzir velocidade e manter equilíbrio",
      "Ultrapassar pedestres",
      "Ignorar lombada"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: obstáculos não sinalizados requerem redução de velocidade e controle do veículo para manter equilíbrio.`
  },
  {
    text: "Pedestre, ao atravessar via de mão dupla sem sinalização, deve:",
    options: [
      "Correr sem olhar",
      "Observar ambos os sentidos e atravessar em linha reta",
      "Ultrapassar carros parados",
      "Ignorar fluxo"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: travessia em linha reta com observação do fluxo em ambas as direções em vias sem sinalização.`
  },
  {
    text: "Motociclista, ao trafegar com garupa, deve:",
    options: [
      "Manter distância do solo",
      "Ajustar suspensão e manter distância segura",
      "Ultrapassar veículos lentos",
      "Ignorar garupa"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 105: moto com passageiro requer ajuste de suspensão e manutenção de distância para estabilidade.`
  },
  {
    text: "Motorista, ao avistar faixa de pedestre pintada de amarelo, deve:",
    options: [
      "Ultrapassar sobre ela",
      "Reduzir velocidade e parar se houver pedestre",
      "Estacionar sobre a faixa",
      "Ignorar diferenciação"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Faixa amarela de advertência de segurança (CTB Anexo II) indica cuidado; motorist﻿a deve reduzir velocidade e ceder passagem.`
  },
  {
    text: "Ciclista, ao trafegar em via com sinal sonoro para pedestre, deve:",
    options: [
      "Ignorar sinal sonoro",
      "Reduzir velocidade e não obstruir travessia",
      "Ultrapassar pedestres",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 69 e Res. 396/11: sinal sonoro alerta pedestres; ciclistas não devem obstruir área de travessia.`
  },
  {
    text: "Pedestre, ao aguardar travessia em faixa com semáforo, deve:",
    options: [
      "Ficar no meio da rua",
      "Aguardar calçado junto ao meio-fio",
      "Ultrapassar rotineiramente",
      "Ignorar semáforo"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 69: pedestres aguardam sinal verde na calçada junto ao meio-fio, dentro da área de travessia demarcada.`
  },
  {
    text: "Motociclista, ao trafegar em via com piso irregulares (paralelepípedos), deve:",
    options: [
      "Aumentar velocidade",
      "Reduzir velocidade e manter firmeza no guidão",
      "Ultrapassar carros parados",
      "Ignorar irregularidade"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: piso irregular demanda redução de velocidade e controle firme do guidão para evitar perda de aderência.`
  },
  {
    text: "Motorista, ao avistar ciclista sinalizando parada, deve:",
    options: [
      "Ultrapassar sem parar",
      "Manter distância e não buzinar",
      "Ignorar ciclista",
      "Buzinar para que libere a via"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 201: ao ultrapassar ciclista parado, manter distância lateral e evitar buzinares, garantindo segurança.`
  },
  {
    text: "Ciclista, ao trafegar com bagagem volumosa, deve:",
    options: [
      "Sobrecarregar a bicicleta",
      "Distribuir peso de forma equilibrada e usar suportes adequados",
      "Ignorar estabilidade",
      "Ultrapassar veículos"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 105: bagagem volumosa deve ser distribuída uniformemente, usando bagageiros apropriados para manter estabilidade.`
  },
  {
    text: "Pedestre, ao usar travessia com semáforo e botoeira, deve:",
    options: [
      "Pressionar e aguardar luz verde antes de atravessar",
      "Correr sem aguardar",
      "Ignorar botoeira",
      "Ultrapassar veículos parados"
    ],
    correctOption: 0,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 69 e normas de sinalização: botoeiras acionam semáforo para pedestre; aguardar luz verde específica antes de iniciar travessia.`
  },
  {
    text: "Motociclista, ao manobrar em estacionamento, deve:",
    options: [
      "Fazer manobra rápida sem observar entorno",
      "Reduzir velocidade, usar pisca e verificar pontos cegos",
      "Ultrapassar veículos estacionados",
      "Ignorar pedestres"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: manobras em baixa velocidade requerem uso de indicativo luminoso e observação de pontos cegos para segurança.`
  },
  {
    text: "Motorista, ao trafegar em via com neblina densa, deve:",
    options: [
      "Usar luz alta para melhor visão",
      "Reduzir velocidade e usar luz baixa e neblina",
      "Manter velocidade normal",
      "Desligar faróis"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 40: em neblina, uso de luz baixa e farol de neblina é obrigatório; velocidade deve ser compatível com visibilidade.`
  },
  {
    text: "Ciclista, ao trafegar com restrição de visibilidade (curva), deve:",
    options: [
      "Manter velocidade elevada",
      "Tocar campainha constantemente",
      "Reduzir velocidade antes da curva e sinalizar",
      "Ignorar restrição"
    ],
    correctOption: 2,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: em pontos de visibilidade reduzida, ciclista reduz velocidade e sinaliza manobras para alertar outros usuários.`
  },
  {
    text: "Pedestre, ao se aproximar de travessia em desnível (passarela), deve:",
    options: [
      "Ignorar corrimão",
      "Subir rapidamente sem olhar",
      "Usar corrimão e atenção ao piso",
      "Pular degraus"
    ],
    correctOption: 2,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `Diretrizes de acessibilidade (Res. 703/17) recomendam uso de corrimão e atenção ao piso em travessias elevadas.`
  },
  {
    text: "Motociclista, ao rebocar outro veículo, deve:",
    options: [
      "Usar corda improvisada sem sinalização",
      "Utilizar dispositivo aprovado e sinalizar manobra",
      "Ultrapassar pela contramão",
      "Ignorar regras"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 105: reboque por motocicleta requer uso de dispositivo aprovado e sinalização adequada para segurança.`
  },
  {
    text: "Motorista, ao trafegar em via com piso solto (areia), deve:",
    options: [
      "Acelerar para dispersar detritos",
      "Reduzir velocidade e evitar frenagens bruscas",
      "Ultrapassar veículos lentos",
      "Ignorar condição"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: piso solto exige redução de velocidade e condução suave para evitar derrapagens.`
  },
  {
    text: "Ciclista, ao transpor lombada sinalizada, deve:",
    options: [
      "Acelerar no topo",
      "Reduzir velocidade antes e manter equilíbrio",
      "Ultrapassar pedestres",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Sinalização de lombada (A‑13) – CTB Anexo II: exige redução de velocidade e controle para transposição sem desequilíbrio.`
  },
  {
    text: "Pedestre, ao utilizar travessia de ciclovia, deve:",
    options: [
      "Invadir ciclovia sem olhar",
      "Observar ciclistas e atravessar com cuidado",
      "Ignorar ciclovia",
      "Correr para atravessar"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: ao cruzar ciclovia, pedestre observa fluxo de bicicletas e aguarda espaço seguro antes de atravessar.`
  },
  {
    text: "Motociclista, ao trafegar em estrada de terra, deve:",
    options: [
      "Acelerar ao máximo",
      "Reduzir velocidade e escolher trajetória limpa",
      "Ultrapassar sem cuidado",
      "Ignorar condições"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: estradas de terra exigem velocidade reduzida e escolha de trajetória sem buracos para manter controle.`
  },
  {
    text: "Motorista, ao trafegar em trevo de acesso, deve:",
    options: [
      "Acelerar para sair primeiro",
      "Reduzir velocidade e sinalizar mudança de faixa",
      "Ultrapassar veículos na entrada",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: manobra de saída em trevo requer redução de velocidade e uso de seta para indicar mudança de faixa.`
  },
  {
    text: "Ciclista, ao trafegar em ciclofaixa junto a via, deve:",
    options: [
      "Ultrapassar veículos pela direita",
      "Manter-se no interior da ciclofaixa e respeitar semáforo",
      "Invadir pista",
      "Ignorar semáforo"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58: ciclista em ciclofaixa deve permanecer dentro dos limites e obedecer semáforos específicos.`
  },
  {
    text: "Pedestre, ao aguardar transporte público, deve:",
    options: [
      "Ficar na pista",
      "Aguardar na calçada ou ponto demarcado",
      "Caminhar na frente do ônibus",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: pontos de ônibus demarcados oferecem área segura para espera, sem invadir pista de rolamento.`
  },
  {
    text: "Motociclista, ao trafegar em pista de rolamento ondulada, deve:",
    options: [
      "Manter velocidade constante",
      "Reduzir velocidade e manter guidão firme",
      "Ultrapassar veículos",
      "Ignorar ondulações"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: ondulações espalhadas na via exigem redução de velocidade e firmeza no guidão para evitar desequilíbrio.`
  },
  {
    text: "Motorista, ao trafegar em via de pista dupla, deve:",
    options: [
      "Transitar sempre pela pista da esquerda",
      "Manter-se pela direita e só usar a esquerda para ultrapassar",
      "Ultrapassar pela direita",
      "Ignorar faixas"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: via de pista dupla impõe manter-se à direita e ocupar faixa esquerda apenas para ultrapassar.`
  },
  {
    text: "Ciclista, ao trafegar em pista compartilhada com pedestres, deve:",
    options: [
      "Ultrapassar pedestres rapidamente",
      "Reduzir velocidade e sinalizar presença",
      "Ignorar pedestres",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 68: em compartilhamento, ciclista reduz velocidade e sinaliza presença ao ultrapassar pedestres.`
  },
  {
    text: "Pedestre, ao caminhar em calçada estreita, deve:",
    options: [
      "Invadir via para contornar pedestres",
      "Aguardar que passagem seja desobstruída ou usar faixa",
      "Correr",
      "Ignorar espaço"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: calçadas estreitas requerem paciência; pedestre aguarda passagem ou utiliza faixa de pedestre segura.`
  },
  {
    text: "Motociclista, ao trafegar em rodovia de pista simples, deve:",
    options: [
      "Ultrapassar sempre que possível",
      "Manter-se à direita e usar seta em ultrapassagens",
      "Ultrapassar pela direita",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 e art. 196: veículos, inclusive motocicletas, mantêm-se à direita e só ultrapassam pela esquerda, sinalizando com antecedência.`
  },
  {
    text: "Motorista, ao avistar ciclista na via, deve:",
    options: [
      "Ultrapassar rente a ciclista",
      "Manter distância lateral mínima de 1,5 m",
      "Ignorar ciclista",
      "Buzinar constantemente"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 201, parágrafo único: ultrapassagem de ciclistas exige distância mínima de 1,5 m para segurança.`
  },
  {
    text: "Ciclista, ao estacionar bicicleta em área pública, deve:",
    options: [
      "Encostar em poste sem prender",
      "Usar cadeado em suporte fixo",
      "Ignorar segurança",
      "Deixar em via"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Recomendações gerais de segurança urbana: uso de cadeado em suporte fixo previne furto e obstrução de passeio público.`
  },
  {
    text: "Pedestre, ao caminhar em faixa elevada, deve:",
    options: [
      "Ignorar sinalização",
      "Aguardar parada dos veículos e atravessar com calma",
      "Ultrapassar veículos",
      "Correr sem olhar"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: faixa elevada funciona como lombada; pedestre aguarda parada dos veículos antes de iniciar travessia.`
  },
  {
    text: "Motociclista, ao trafegar com garupa, deve:",
    options: [
      "Ultrapassar sem considerar peso extra",
      "Reduzir velocidade e garantir boa comunicação com passageiro",
      "Acelerar repentinamente",
      "Ignorar passageiro"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 105: condução com garupa exige adaptação de velocidade e comunicação clara para postura e segurança.`
  },
  {
    text: "Motorista, ao trafegar em via com ônibus parado, deve:",
    options: [
      "Ultrapassar pela direita",
      "Reduzir velocidade, usar seta e ultrapassar pela esquerda",
      "Ignorar situação",
      "Acelerar para passar rápido"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 196: ultrapassagem de ônibus parado requer sinalização e ultrapassar pela esquerda com segurança.`
  },
  {
    text: "Ciclista, ao trafegar em dia de chuva, deve:",
    options: [
      "Aumentar velocidade",
      "Reduzir velocidade, usar roupas impermeáveis e sinalização extra",
      "Ultrapassar veículos",
      "Ignorar clima"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: condições adversas de chuva exigem redução de velocidade, roupas impermeáveis e sinalização adicional para visibilidade.`
  },
  {
    text: "Pedestre, ao atravessar via com divisor físico, deve:",
    options: [
      "Ignorar divisor",
      "Usar passagem demarcada e cortar divisor",
      "Aguardar área designada e usar passagem segura",
      "Ultrapassar divisor"
    ],
    correctOption: 2,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: divisores físicos possuem passagens demarcadas; pedestre aguarda e atravessa somente em locais apropriados.`
  },
  {
    text: "Motociclista, ao trafegar em via com lombada triangular (sinalização), deve:",
    options: [
      "Acelerar",
      "Reduzir velocidade antes de lombada e manter controle",
      "Ultrapassar lombada",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `Placa A‑13b – CTB Anexo II: alerta para lombada; condutor reduz velocidade antes de transpor obstáculo com segurança.`
  },
  {
    text: "Motorista, ao trafegar em via mista (ônibus & carros), deve:",
    options: [
      "Ultrapassar ônibus pela direita",
      "Aguardar liberação de faixa exclusiva antes de ultrapassar",
      "Ignorar faixas exclusivas",
      "Buzinar para ônibus"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 86: faixas exclusivas de ônibus exigem respeito; ultrapassagem só após fim de faixa ou autorização específica.`
  },
  {
    text: "Ciclista, ao trafegar em via interdita parcialmente, deve:",
    options: [
      "Forçar passagem pelo bloqueio",
      "Desviar pelo trecho permitido e sinalizar presença",
      "Ultrapassar bloqueio por fora",
      "Ignorar interdição"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Diretrizes de obras (Res. 556/15): ciclovias interdictas requerem desvio sinalizado, sem invadir área em obra.`
  },
  {
    text: "Pedestre, ao observar semáforo com contagem regressiva, deve:",
    options: [
      "Iniciar travessia sem olhar",
      "Aguardar término da contagem antes de atravessar",
      "Correr no meio da via",
      "Ignorar contagem"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 69 e normas de sinalização: contadores regressivos indicam tempo disponível; pedestre aguarda fim antes de iniciar travessia.`
  },
  {
    text: "Motociclista, ao usar freios ABS intrigados, deve:",
    options: [
      "Frear de modo gradual e não bombear alavanca",
      "Frear com bomba intermitente manual",
      "Ignorar ABS",
      "Remover ABS manualmente"
    ],
    correctOption: 0,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 105: sistemas ABS dispensam bombeamento; freio gradual com alavanca fixa evita bloqueio de rodas.`
  },
  {
    text: "Motorista, ao trafegar em curva com sinalização de velocidade máxima, deve:",
    options: [
      "Ignorar velocidade indicada",
      "Reduzir velocidade abaixo ou igual ao indicado",
      "Acelerar para vencer curva",
      "Ultrapassar pela direita"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa de regulamentação R‑26 indica velocidade máxima; CTB art. 87 exige obediência ao limite em curvas.`
  },
  {
    text: "Ciclista, ao trafegar em via de mão única, pode:",
    options: [
      "Circular no sentido contrário",
      "Circular somente no sentido da via e manter-se à direita",
      "Ultrapassar veículos pela esquerda",
      "Ignorar sentido"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: circulação em mão única é sempre no sentido da via; ciclistas mantêm-se à direita.`
  },
  {
    text: "Pedestre, ao caminhar em área rural sem calçada, deve:",
    options: [
      "Circulardireto pela rodovia",
      "Manter-se pelo acostamento, no sentido contrário aos veículos",
      "Andar no centro da pista",
      "Ignorar vegetação"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: na ausência de calçadas, pedestre utiliza acostamento, circulando em sentido contrário ao tráfego para maior visibilidade.`
  },
  {
    text: "Motociclista, ao trafegar em via com faixa zebrada, deve:",
    options: [
      "Ultrapassar faixa",
      "Não circular sobre faixa zebrada, pois indica área proibida",
      "Ignorar faixa",
      "Estacionar sobre faixa"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `Faixa zebrada (CTB Anexo II) delimita área proibida de circulação; motociclista não deve trafegar sobre ela.`
  },
  {
    text: "Motorista, ao ver sinalização de ‘Dê preferência’, deve:",
    options: [
      "Parar sem olhar",
      "Reduzir velocidade e ceder passagem a quem vem da via principal",
      "Acelerar para evitar fila",
      "Ignorar sinal"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa R‑1c (dê preferência) – CTB art. 29.III: indica dar preferência a veículos da via transversal que se aproximam pela direita.`
  },
  {
    text: "Ciclista, ao trafegar em pista compartilhada com veículos motorizados, deve:",
    options: [
      "Ultrapassar veículos lentos",
      "Manter-se o mais à direita possível e sinalizar manobras",
      "Ignorar fluxo de carros",
      "Buzinar para abrir passagem"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58: ao compartilhar pista com veículos motorizados, ciclista fica o mais à direita e sinaliza movimentos.`
  },
  {
    text: "Pedestre, ao caminhar em via com buracos, deve:",
    options: [
      "Correr para atravessar buracos",
      "Desviar ou contornar localiçam ens buracos, mantendo atenção",
      "Andar sem olhar",
      "Ignorar buracos"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: circulação segura em via com irregularidades exige desviar de buracos e manter atenção ao passo.`
  },
  {
    text: "Motociclista, ao rebocar em segunda motocicleta, deve:",
    options: [
      "Usar corda frouxa e sem sinalização",
      "Não rebocar motocicleta, pois é proibido pelo CTB",
      "Ultrapassar pedestres com reboque",
      "Ignorar proibição"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 234: rebocar motocicleta por outra é proibido; cria situação de risco extremo.`
  },
  {
    text: "Motorista, ao trafegar em via com sinalização semafórica inverterida (semáforo invertido– verde aceso em cima), deve:",
    options: [
      "Ignorar inversão",
      "Respeitar semáforo normalmente, obedecendo verde, amarelo e vermelho",
      "Ultrapassar sinal apagadosemáforo",
      "Buzinarpara alertar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: sequência de luzes semafóricas mantém significado independentemente da posição física; obedece-se conforme cor.`
  },
  {
    text: "Ciclista, ao trafegar em via de trânsito rápido (rodovia urbana com acesso controlado), deve:",
    options: [
      "Circular normalmente na via principal",
      "Utilizar acostamento ou rota alternativa, pois ciclistas não têm acesso permitido",
      "Ultrapassar veículos",
      "Ignorar restrição"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 59: ciclistas não podem trafegar em vias de trânsito rápido de acesso controlado; devem usar rotas alternativas.`
  },
  {
    text: "Pedestre, ao aguardar o transporte escolar, deve:",
    options: [
      "Ficar na pista para sinalizar",
      "Aguardar na calçada ou ponto seguro e manter distância do borda",
      "Ignorar local demarcado",
      "Correr para embarcar"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 67: transporte escolar possui pontos demarcados; pedestres aguardam fora da via, em área segura.`
  },
  {
    text: "Motociclista, ao trafegar em via com indicação de velocidade mínima, deve:",
    options: [
      "Circular abaixo do mínimo",
      "Manter velocidade igual ou superior ao indicado",
      "Ignorar sinalização",
      "Ultrapassar pela direita"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `Placa R‑3 (velocidade mínima) – CTB art. 87: exige velocidade igual ou superior ao valor indicado para manter fluidez do tráfego.`
  },
  {
    text: "Motorista, ao encontrar pedestre no meio da via, deve:",
    options: [
      "Buzinar para expulsar",
      "Reduzir velocidade e permitir travessia com segurança",
      "Ultrapassar com buzina",
      "Ignorar presença"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 e art. 70: presença de pedestre na via requer redução de velocidade e cessão de passagem para travessia segura.`
  },
  {
    text: "Ciclista, ao trafegar em dias de ventania lateral, deve:",
    options: [
      "Manter mesma trajetória sem ajuste",
      "Reduzir velocidade e firmar o giro para compensar rajadas",
      "Ultrapassar veículos grandes",
      "Ignorar vento"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29 e orientações técnicas: ventos laterais exigem redução de velocidade e ajuste de manuseio para estabilidade.`
  },
  {
    text: "Pedestre, ao caminhar em via com acústico de transporte público, deve:",
    options: [
      "Invadir faixa de rolamento",
      "Manter distância segura do ônibus em movimento",
      "Ultrapassar ônibus",
      "Ignorar rotina"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: transporte público em movimento gera fluxo de pedestres; manter distância reduz risco de atropelamentos.`
  },
  {
    text: "Motociclista, ao trafegar com farol de neblina dianteiro ligado indevidamente, ocorre:",
    options: [
      "Melhora sempre visibilidade para todos",
      "Pode ofuscar motoristas e gerar infração média",
      "Não tem efeito",
      "É obrigatório em dia claro"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 40 e Res. 716/17: uso inadequado de farol de neblina causa ofuscamento e configura infração média.`
  },
  {
    text: "Motorista, ao trafegar em via com ciclovia elevada, deve:",
    options: [
      "Invadir ciclovia",
      "Não trafegar sobre ele e dar preferência a ciclistas",
      "Ignorar demarcação",
      "Ultrapassar ciclistas pela ciclovia"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 58 e art. 29: ciclovia elevada é exclusiva para ciclistas; veículos motorizados não devem invadir nem obstruir.`
  },
  {
    text: "Ciclista, ao trafegar em via com pavimento irregular, deve:",
    options: [
      "Evitar usar mãos no guidão",
      "Reduzir velocidade e segurar firmemente o guidão",
      "Ultrapassar veículos",
      "Ignorar irregularidade"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: em piso irregular, ciclista reduz velocidade e segura firmemente o guidão para controlar estabilidade.`
  },
  {
    text: "Pedestre, ao caminhar com carrinho de bebê, deve:",
    options: [
      "Empurrar pela via",
      "Manter-se na calçada e usar rampas de acesso",
      "Invadir pista",
      "Ignorar segurança"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: circulação com carrinho de bebê deve ocorrer na calçada, utilizando rampas e passagens apropriadas para segurança.`
  },
  {
    text: "Motociclista, ao trafegar em via com placa de ‘Proibido Ultrapassar’, deve:",
    options: [
      "Ultrapassar pela esquerda",
      "Não ultrapassar e manter posição",
      "Ultrapassar pela direita",
      "Ignorar placa"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `Placa R‑6 – CTB art. 186: ultrapassagem proibida em todo trecho; motociclista não deve ultrapassar até o fim da restrição.`
  },
  {
    text: "Motorista, ao trafegar em via com pista de desaceleração, deve:",
    options: [
      "Permanece na pista principal até a parada",
      "Usar pista de desaceleração para reduzir velocidade antes de saída",
      "Ultrapassar veículos na desaceleração",
      "Ignorar faixa de desaceleração"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Princípios de direção segura: pista de desaceleração serve para reduzir velocidade antes de saída; CTB art. 29 recomenda uso apropriado de faixas auxiliares.`
  },
  {
    text: "Ciclista, ao trafegar em via com canteiro central, deve:",
    options: [
      "Transpor canteiro sem autorização",
      "Utilizar passarelas ou locais indicados para bicicletas",
      "Ultrapassar pelo canteiro",
      "Atravessar sem olhar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58: quando existir infraestrutura para circulação, ciclistas devem usá-la e não transpor canteiros de forma imprópria.`
  },
  {
    text: "Motorista, ao trafegar em via com ciclovia acima do nível da pista, deve:",
    options: [
      "Invadir ciclovia para estacionamento",
      "Respeitar exclusividade e não invadir ciclovia",
      "Ultrapassar ciclistas pela ciclovia",
      "Buzinar ciclistas"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 58: ciclovias são de uso exclusivo de ciclistas; veículos motorizados não devem invadir ou estacionar sobre elas.`
  },
  {
    text: "Pedestre, ao caminhar em via urbana com acostamento, deve:",
    options: [
      "Usar o acostamento no sentido contrário aos veículos",
      "Andar no meio da via",
      "Ignorar acostamento",
      "Correr pela pista"
    ],
    correctOption: 0,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: na falta de calçada, pedestre utiliza acostamento, circulando em sentido contrário ao fluxo para melhor visibilidade.`
  },
  {
    text: "Motociclista, ao rebocar objeto leve, deve:",
    options: [
      "Usar corda e improvisar sem sinalização",
      "Não rebocar objetos, pois só é permitido reboque de outro veículo com dispositivo próprio",
      "Ultrapassar veículos com o reboque",
      "Ignorar regras"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 105: motocicleta só pode rebocar outro veículo por dispositivo aprovado; reboque de objetos simples não é permitido.`
  },
  {
    text: "Motorista, ao trafegar em pista dupla com via lateral, deve:",
    options: [
      "Ultrapassar pela via lateral",
      "Manter-se na pista principal e usar via lateral apenas para acesso local",
      "Ignorar via lateral",
      "Buzinar para entrar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Princípios de circulação: pista lateral serve a acesso local; via principal mantém fluxo de trânsito mais rápido.`
  },
  {
    text: "Ciclista, ao transpor obstrução temporária na ciclovia, deve:",
    options: [
      "Forçar passagem pelo obstáculo",
      "Descer da bicicleta e empurrar ao atravessar local interditado",
      "Ultrapassar obstrução pedalando",
      "Ignorar bloqueio"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 60, VI: ciclistas devem desmontar e empurrar a bicicleta ao atravessar obstáculos em ciclovias ou calçadas.`
  },
  {
    text: "Pedestre, ao encontrar obra na calçada, deve:",
    options: [
      "Transpor pelo meio-fio",
      "Desviar pela via de rolamento sem olhar",
      "Aguardar liberação ou usar desvio sinalizado",
      "Ignorar sinalização"
    ],
    correctOption: 2,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: obras na calçada devem possuir desvio sinalizado; pedestre segue indicação para manter segurança.`
  },
  {
    text: "Motociclista, ao trafegar em via sinuosa, deve:",
    options: [
      "Manter velocidade constante sem reduzir",
      "Reduzir velocidade antes das curvas e sinalizar movimento",
      "Ultrapassar em curva",
      "Ignorar limites"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: curvas exigem redução de velocidade e sinalização antecipada para manobra segura.`
  },
  {
    text: "Motorista, ao trafegar em área escolar com sinalização, deve:",
    options: [
      "Ultrapassar sem atenção",
      "Reduzir velocidade e dar preferência a pedestres",
      "Ignorar sinalização",
      "Buzinar para evacuar área"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 61: áreas escolares requerem atenção redobrada e redução de velocidade para proteção de crianças.`
  },
  {
    text: "Ciclista, ao trafegar em faixa mista de uso compartilhado, deve:",
    options: [
      "Invadir faixa exclusiva de ônibus",
      "Circular no lado direito da faixa e sinalizar manobras",
      "Ultrapassar sem sinalizar",
      "Ignorar veículos motorizados"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58: em faixa mista, ciclistas mantêm-se à direita e sinalizam suas intenções para segurança de todos.`
  },
  {
    text: "Pedestre, ao atravessar rua sem semáforo, deve:",
    options: [
      "Correr no ponto mais próximo",
      "Escolher local com boa visibilidade e atravessar em linha reta",
      "Atravessar em diagonal",
      "Ignorar trânsito"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: pedestre escolhe local visível, aguarda momento seguro e atravessa em linha reta para reduzir tempo de exposição.`
  },
  {
    text: "Motociclista, ao trafegar em via com sinalização de velocidade máxima, deve:",
    options: [
      "Ultrapassar o limite para recuperar tempo",
      "Respeitar o limite indicado e ajustar velocidade",
      "Ignorar limite",
      "Reduzir ainda mais abaixo do limite"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 87: limites de velocidade são obrigatórios; exceder configura infração.`
  },
  {
    text: "Motorista, ao trafegar em avenida com ciclofaixa, deve:",
    options: [
      "Ultrapassar ciclistas pela ciclovia",
      "Manter distância e respeitar exclusividade da ciclofaixa",
      "Buzinar ciclistas",
      "Ignorar separação física"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 58: ciclofaixa é exclusiva para bicicletas; veículos motorizados devem respeitar separação e distância de segurança.`
  },
  {
    text: "Ciclista, ao trafegar em via com interseção complexa, deve:",
    options: [
      "Ultrapassar veículos sem sinalizar",
      "Reduzir velocidade, sinalizar e posicionar-se corretamente antes da interseção",
      "Ignorar sinalização",
      "Acelerar para cruzar primeiro"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: interseções requerem redução de velocidade e sinalização antecipada, garantindo posicionamento seguro.`
  },
  {
    text: "Pedestre, ao caminhar em calçada sem rebaixamento, deve:",
    options: [
      "Forçar descida abrupta no meio-fio",
      "Procurar rampa de acesso ou local rebaixado",
      "Correr para atravessar",
      "Ignorar necessidade de acessibilidade"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `Normas de acessibilidade (Res. 73/2014): calçadas sem rebaixamento exigem busca por rampas ou pontos adequados de travessia.`
  },
  {
    text: "Motociclista, ao trafegar em dia de neblina, deve:",
    options: [
      "Manter luz alta para penetrar neblina",
      "Usar luz baixa e neblina, reduzir velocidade",
      "Ignorar condições",
      "Ultrapassar sem sinalizar"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 40: em neblina, farol alto ofusca; recomenda-se farol baixo e neblina, com redução de velocidade.`
  },
  {
    text: "Motorista, ao trafegar em via com placa de ‘Semáforo à frente’, deve:",
    options: [
      "Acelerar antes do semáforo",
      "Reduzir velocidade e preparar para parar",
      "Ignorar placa",
      "Ultrapassar semáforo"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `Placa A‑28 – CTB Anexo II: alerta de semáforo à frente requer redução de velocidade e atenção ao dispositivo.`
  },
  {
    text: "Ciclista, ao trafegar em pista compartilhada com pedestres, deve:",
    options: [
      "Buzinar para pedestres",
      "Reduzir velocidade e sinalizar aproximação",
      "Ultrapassar sem cuidado",
      "Ignorar pedestres"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 68: em áreas compartilhadas, ciclistas mantêm velocidade baixa e comunicam aproximação para evitar colisões.`
  },
  {
    text: "Pedestre, ao caminhar em via com piso escorregadio, deve:",
    options: [
      "Correr para passar rápido",
      "Reduzir velocidade e observar piso",
      "Ignorar condição",
      "Andar de costas"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: condições de piso escorregadio exigem passo cuidadoso e redução de velocidade para evitar quedas.`
  },
  {
    text: "Motociclista, ao trafegar em via com curvas sucessivas, deve:",
    options: [
      "Ultrapassar veículos em cada curva",
      "Reduzir velocidade antes de cada curva e sinalizar manobras",
      "Ignorar sinalização",
      "Acelerar em curvas"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: curvas sucessivas requerem redução de velocidade e sinalização antecipada para cada manobra.`
  },
  {
    text: "Motorista, ao trafegar em pista molhada, deve:",
    options: [
      "Frear bruscamente",
      "Reduzir velocidade e aumentar distância de segurança",
      "Ultrapassar veículos sem cuidado",
      "Ignorar condição"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: pista molhada reduz aderência; exige redução de velocidade e maior distância ao veículo da frente.`
  },
  {
    text: "Ciclista, ao trafegar em via com faixa de ônibus, deve:",
    options: [
      "Circular sobre faixa de ônibus",
      "Manter distância da faixa e não invadi-la",
      "Ultrapassar ônibus pela faixa",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 88: faixa de ônibus é exclusiva; ciclistas não devem invadir nem trafegar sobre ela.`
  },
  {
    text: "Pedestre, ao cruzar via com lombada, deve:",
    options: [
      "Correr para evitar impacto",
      "Reduzir velocidade ao caminhar sobre lombada elevada",
      "Ignorar sinalização",
      "Ultrapassar carros"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: lombada elevada funciona como faixa de pedestre; pedestre caminha com atenção e passo reduzido.`
  },
  {
    text: "Motociclista, ao trafegar com passageiro, deve:",
    options: [
      "Desconsiderar peso extra",
      "Reduzir velocidade e ajustar postura",
      "Ultrapassar com maior velocidade",
      "Ignorar passageiro"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 105: condução com passageiro exige redução de velocidade e ajuste de postura para estabilidade.`
  },
  {
    text: "Motorista, ao trafegar em via com diversas faixas, deve:",
    options: [
      "Mudar de faixa sem sinalizar",
      "Sinalizar mudança e verificar espelhos",
      "Ultrapassar pela direita em todas as faixas",
      "Ignorar espelhos"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 196: mudança de faixa requer uso da seta e verificação de espelhos e pontos cegos.`
  },
  {
    text: "Ciclista, ao trafegar em pista com desnível, deve:",
    options: [
      "Acelerar sobre desnível",
      "Reduzir velocidade antes e manter equilíbrio",
      "Ultrapassar veículos na borda",
      "Ignorar pista"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: desníveis na via exigem redução de velocidade e controle de equilíbrio para segurança.`
  },
  {
    text: "Pedestre, ao caminhar sob iluminação insuficiente, deve:",
    options: [
      "Correr sem olhar",
      "Utilizar lanterna ou roupa refletiva e atenção constante",
      "Ignorar iluminação",
      "Andar de olhos fechados"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `Recomendações gerais de segurança: iluminação insuficiente requer uso de refletivos ou lanterna para visibilidade.`
  },
  {
    text: "Motociclista, ao trafegar em estacionamento estreito, deve:",
    options: [
      "Acelerar entre veículos",
      "Reduzir velocidade e manobrar com cuidado",
      "Ultrapassar pedestres",
      "Ignorar obstáculos"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: estacionamento estreito exige manobra em baixa velocidade e atenção a pedestres e outros veículos.`
  },
  {
    text: "Motorista, ao chegar em interseção com semáforo apagado, deve:",
    options: [
      "Ultrapassar sem redução",
      "Tratar como parada obrigatória e só prosseguir com segurança",
      "Ignorar semáforo",
      "Acelerar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: semáforo apagado requer tratamento como parada obrigatória (placa R-2) e avanço seguro.`
  },
  {
    text: "Ciclista, ao trafegar em cenário urbano noturno, deve:",
    options: [
      "Circular sem iluminação",
      "Uso de luzes dianteira branca e traseira vermelha e roupas refletivas",
      "Ignorar normas",
      "Acelerar"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 105: bicicletas devem ter sinalização noturna dianteira (branca) e traseira (vermelha) e uso de vestimenta refletiva.`
  },
  {
    text: "Pedestre, ao caminhar em via de tráfego intenso, deve:",
    options: [
      "Invadir pista para encurtar caminho",
      "Procurar faixa ou passarela mais próxima",
      "Ignorar fluxo",
      "Correr pelo meio"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: tráfego intenso recomenda uso de travessias seguras como faixas ou passarelas.`
  },
  {
    text: "Motociclista, ao trafegar em rodovia de pista simples, deve:",
    options: [
      "Ultrapassar sempre pela esquerda sem seta",
      "Manter-se à direita e sinalizar ultrapassagem",
      "Ultrapassar pela direita",
      "Ignorar faixa"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 196: ultrapassagem em pista simples deve ocorrer pela esquerda, com indicativo luminoso e segurança.`
  },
  {
    text: "Motorista, ao trafegar próximo a faixa de pedestre usada por pessoas com mobilidade reduzida, deve:",
    options: [
      "Ultrapassar antes de faixa",
      "Reduzir velocidade e dar prioridade",
      "Ignorar presença",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 70 e Lei 10.098/2000: faixas acessíveis priorizam pedestres com mobilidade reduzida; condutor dá preferência e reduz velocidade.`
  },
  {
    text: "Ciclista, ao trafegar em estrada de serra com aclives e declives, deve:",
    options: [
      "Descer em alta velocidade no declive",
      "Reduzir velocidade e usar freio motor ao descer",
      "Ultrapassar veículos grandes",
      "Ignorar relevo"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Princípios de segurança: aclives e declives em serra exigem uso dos freios controlado e redução de velocidade para estabilidade.`
  },
  {
    text: "Pedestre, ao usar faixa elevada perto de escola, deve:",
    options: [
      "Correr rapidamente",
      "Aguardar veículos parados e atravessar devagar",
      "Ignorar escola",
      "Ultrapassar alunos"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 61: faixas escolares elevadas exigem travessia lenta e atenção ao entorno escolar.`
  },
  {
    text: "Motociclista, ao trafegar em dia chuvoso, deve:",
    options: [
      "Manter mesma velocidade",
      "Reduzir velocidade, aumentar distância e usar equipamentos impermeáveis",
      "Ultrapassar ônibus",
      "Ignorar chuva"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: condições de chuva implicam em velocidade reduzida, maior distância de segurança e proteção contra intempéries.`
  },
  {
    text: "Motorista, ao trafegar em via com desnível acentuado, deve:",
    options: [
      "Acelerar para vencer desnível",
      "Reduzir velocidade antes do desnível e manter controle",
      "Ultrapassar em desnível",
      "Ignorar campo"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: desníveis acentuados requerem redução de velocidade prévia para manter estabilidade e segurança.`
  },
  {
    text: "Ciclista, ao trafegar em trecho de obras, deve:",
    options: [
      "Forçar passagem sobre máquinas",
      "Desviar pela área segura ou desmontar e empurrar",
      "Ultrapassar pedestres",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 58 e Res. 556/15: em trechos de obras, ciclista deve seguir desvios sinalizados ou desmontar a bicicleta para empurrar.`
  },
  {
    text: "Pedestre, ao atravessar faixa de pedestre com semáforo sonoro, deve:",
    options: [
      "Ignorar som",
      "Ouvir sinal sonoro e iniciar travessia conforme orientação",
      "Atravessar sem olhar",
      "Correr"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 69: semáforos sonoros auxiliam travessia de pedestres com deficiência visual; pedestre inicia travessia ao ouvir sinal.`
  },
  {
    text: "Motociclista, ao trafegar em via com lombada triangular, deve:",
    options: [
      "Acelerar no topo",
      "Reduzir velocidade antes e manter postura vertical",
      "Ultrapassar lombada",
      "Ignorar alerta"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `Placa A‑13a – CTB Anexo II: alerta para lombada triangular; condutor reduz velocidade e mantém postura para transposição segura.`
  },
  {
    text: "Motorista, ao se aproximar de travessia de ciclistas, deve:",
    options: [
      "Buzinar para ciclistas saírem da frente",
      "Reduzir velocidade e aguardar ciclistas atravessarem",
      "Ultrapassar rapidamente",
      "Ignorar ciclistas"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 58: travessias de ciclistas requerem redução de velocidade e espera para garantir segurança.`
  },
  {
    text: "Ciclista, ao trafegar em trecho com sinalização de piso tátil, deve:",
    options: [
      "Circular sobre piso tátil",
      "Desviar do piso tátil para não prejudicar deficiência visual",
      "Ignorar piso tátil",
      "Ultrapassar pedestres"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Normas de acessibilidade (NBR 16537): piso tátil é destinado a deficientes visuais; ciclistas devem evitá-lo para não impedir orientação.`
  },
  {
    text: "Pedestre, ao usar faixa de pedestre sem semáforo, deve:",
    options: [
      "Ultrapassar veículos sem atenção",
      "Reduzir velocidade ao entrar na faixa e manter contato visual com motoristas",
      "Ignorar motoristas",
      "Correr sempre"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 70: pedestre deve reduzir velocidade ao entrar na faixa e buscar contato visual com motoristas para assegurar travessia.`
  },
  {
    text: "Motociclista, ao trafegar em via com residências, deve:",
    options: [
      "Acelerar para afastar",
      "Reduzir velocidade e manter atenção a pedestres e saídas de garagens",
      "Ignorar área residencial",
      "Ultrapassar crianças"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 29: áreas residenciais exigem condução defensiva, redução de velocidade e atenção a pedestres e acessos privados.`
  },
  {
    text: "Motorista, ao trafegar próximo a ponto de táxi, deve:",
    options: [
      "Ultrapassar veículo parar rapidamente",
      "Reduzir velocidade e aguardar passageiros embarcarem/desembarc",
      "Buzinar passageiros",
      "Ignorar táxi"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 47: operação de embarque/desembarque em pontos de táxi requer atenção e redução de velocidade para segurança.`
  },
  {
    text: "Ciclista, ao trafegar em via com sinalização “Pare”, deve:",
    options: [
      "Reducir velocidade apenas se houver veículo",
      "Parar completamente e só seguir quando seguro",
      "Ignorar placa",
      "Prosseguir com atenção"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `Placa R‑2 (Pare) – CTB art. 44: exige parada total antes de cruzar qualquer via.`
  },
  {
    text: "Pedestre, ao caminhar em via com calçada irregular, deve:",
    options: [
      "Ignorar irregularidades",
      "Desviar de buracos ou desníveis e manter atenção",
      "Correr sem olhar",
      "Andar em diagonal"
    ],
    correctOption: 1,
    group: "Pedestre",
    difficultyLevel: 1,
    explanation: `CTB art. 68: irregularidades em calçada exigem atenção e desvio cuidadoso para evitar quedas.`
  },
  {
    text: "Motociclista, ao trafegar em via com travessia de pedestres, deve:",
    options: [
      "Ultrapassar antes da faixa",
      "Reduzir velocidade e dar preferência aos pedestres",
      "Buzinar para pedestres saírem",
      "Ignorar travessia"
    ],
    correctOption: 1,
    group: "Motociclista",
    difficultyLevel: 1,
    explanation: `CTB art. 70: travessia de pedestres requer preferência e redução de velocidade, inclusive por motociclistas.`
  },
  {
    text: "Motorista, ao trafegar em via com ciclovia e ciclista sinalizando conversão, deve:",
    options: [
      "Ultrapassar ciclista sem cautela",
      "Respeitar sinalização do ciclista e aguardar manobra",
      "Ignorar ciclista",
      "Buzinar"
    ],
    correctOption: 1,
    group: "Motorista",
    difficultyLevel: 1,
    explanation: `CTB art. 58: ciclista tem direito de sinalizar manobra; motoristas devêm respeitar e aguardar conversão.`
  },
  {
    text: "Ciclista, ao trafegar em via com faixa de pedestre elevada, deve:",
    options: [
      "Descer da bicicleta e empurrar na travessia",
      "Reduzir velocidade, sinalizar e atravessar com cuidado",
      "Ultrapassar pedestres na faixa",
      "Ignorar sinalização"
    ],
    correctOption: 1,
    group: "Ciclista",
    difficultyLevel: 1,
    explanation: `CTB art. 70: faixa elevada funciona como lombada; ciclista reduz velocidade, sinaliza e mantém controle ao atravessar.`
  }
];