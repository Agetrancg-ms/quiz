// Arquivo separado para as questões devido ao tamanho
const generateQuestions = () => {
  const easyQuestions = Array(200).fill(null).map((_, index) => ({
    text: [
      "Qual a cor do semáforo que indica 'pare'?",
      "Qual é a idade mínima para obter a CNH na categoria B?",
      "O que significa a placa PARE?",
      "Qual é o documento obrigatório para dirigir?",
      "Qual é a cor da faixa de pedestres?",
      "Em que lado da via deve-se dirigir no Brasil?",
      "Qual é o limite de velocidade em áreas escolares?",
      "O que significa a luz amarela do semáforo?",
      "Qual é o primeiro socorro em caso de acidente?",
      "O que significa uma placa triangular vermelha?",
      "Qual é o número de emergência da polícia?",
      "O que significa uma faixa contínua amarela?",
      "Quando usar a luz alta dos faróis?",
      "O que fazer ao ver uma ambulância com sirene?",
      "Qual é a validade da CNH para motoristas até 50 anos?",
      "O que significa a placa 'Proibido Estacionar'?",
      "Qual é a distância segura do ciclista ao ultrapassar?",
      "O que significa piscar o pisca-alerta?",
      "Quando usar a buzina?",
      "O que significa placa com fundo amarelo?"
    ][index % 20],
    options: [
      ["Vermelho", "Verde", "Amarelo", "Azul"],
      ["18 anos", "16 anos", "21 anos", "20 anos"],
      ["Parar obrigatoriamente", "Diminuir a velocidade", "Preferência", "Seguir em frente"],
      ["CNH", "RG", "CPF", "Título de Eleitor"],
      ["Branca", "Amarela", "Vermelha", "Azul"],
      ["Direito", "Esquerdo", "Qualquer lado", "Centro"],
      ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
      ["Atenção", "Pare", "Siga", "Reduza"],
      ["Chamar o socorro", "Remover a vítima", "Medicar", "Ir embora"],
      ["Perigo", "Informação", "Regulamentação", "Serviços"],
      ["190", "192", "193", "191"],
      ["Proibido ultrapassar", "Permitido ultrapassar", "Pare", "Siga"],
      ["À noite em vias não iluminadas", "Sempre", "Nunca", "Durante o dia"],
      ["Dar passagem", "Ignorar", "Acelerar", "Parar"],
      ["10 anos", "5 anos", "3 anos", "1 ano"],
      ["Não pode parar", "Pode parar 5 min", "Pode parar", "Livre"],
      ["1,5 metros", "1 metro", "2 metros", "0,5 metro"],
      ["Emergência/perigo", "Festa", "Chegada", "Ultrapassagem"],
      ["Em emergências", "Sempre", "Nunca", "Para chamar atenção"],
      ["Advertência", "Regulamentação", "Informação", "Serviços"]
    ][index % 20],
    correctOption: 0,
    difficultyLevel: 1
  }))

  const mediumQuestions = Array(200).fill(null).map((_, index) => ({
    text: [
      "Qual a penalidade para dirigir sob influência de álcool?",
      "Em caso de aquaplanagem, qual a ação correta?",
      "O que significa ABS no sistema de freios?",
      "Como proceder em caso de pane em túnel?",
      "Qual a ordem de preferência em cruzamento sem sinalização?",
      "O que é hidroplanagem e como evitar?",
      "Como agir em caso de falha nos freios?",
      "O que significa a sigla PRF?",
      "Como proceder ao ser ultrapassado?",
      "O que é o ponto cego do veículo?",
      "Como agir em caso de colisão traseira?",
      "O que é frenagem de emergência?",
      "Como atravessar área alagada?",
      "O que é distância de frenagem?",
      "Como realizar baliza corretamente?",
      "O que é o cambio automático?",
      "Como agir em caso de incêndio no veículo?",
      "O que é direção defensiva?",
      "Como proceder em caso de neblina?",
      "O que é o sistema EBD?"
    ][index % 20],
    options: [
      ["Multa e suspensão da CNH", "Apenas multa", "Advertência", "Pontos na CNH"],
      ["Manter direção e tirar pé do acelerador", "Frear bruscamente", "Acelerar", "Virar bruscamente"],
      ["Sistema Antitravamento de Freios", "Sistema de Airbag", "Sistema de Alarme", "Sistema de Ar"],
      ["Ligar pisca-alerta e sinalizar", "Continuar até sair", "Parar imediatamente", "Fazer retorno"],
      ["Direita, em frente, esquerda", "Esquerda, direita, em frente", "Todos iguais", "Maior primeiro"],
      ["Perda de aderência na água", "Pneu furado", "Motor desligado", "Freio travado"],
      ["Usar freio motor e reduzir", "Frear forte", "Saltar do carro", "Acelerar mais"],
      ["Polícia Rodoviária Federal", "Política Regional Federal", "Patrulha Rodoviária Fixa", "Posto Rodoviário Fiscal"],
      ["Manter velocidade e faixa", "Acelerar", "Frear", "Mudar de faixa"],
      ["Área não visível nos espelhos", "Retrovisor quebrado", "Vidro sujo", "Farol queimado"],
      ["Documentar e sinalizar", "Sair do carro", "Fugir", "Discutir"],
      ["Parada rápida e segura", "Qualquer freada", "Freio quebrado", "Freio normal"],
      ["Evitar se possível", "Acelerar forte", "Frear dentro", "Qualquer jeito"],
      ["Espaço até parar totalmente", "Distância entre carros", "Espaço na frente", "Metro padrão"],
      ["Técnica de estacionamento", "Dar ré apenas", "Virar tudo", "Ir pra frente"],
      ["Transmissão automática", "Câmbio manual", "Marcha específica", "Tipo de direção"],
      ["Usar extintor adequado", "Jogar água", "Continuar dirigindo", "Empurrar"],
      ["Dirigir prevenindo acidentes", "Dirigir devagar", "Dirigir rápido", "Dirigir normal"],
      ["Reduzir e usar farol baixo", "Usar farol alto", "Aumentar velocidade", "Parar sempre"],
      ["Distribuição de Força de Frenagem", "Sistema de Direção", "Tipo de Freio", "Modelo de Carro"]
    ][index % 20],
    correctOption: 0,
    difficultyLevel: 2
  }))

  const hardQuestions = Array(200).fill(null).map((_, index) => ({
    text: [
      "Quais as especificações técnicas para transporte de produtos perigosos?",
      "Como funciona o sistema de injeção eletrônica?",
      "Qual a classificação completa de veículos articulados?",
      "O que é o sistema ESP e como funciona?",
      "Quais os procedimentos para transporte internacional?",
      "Como funciona o sistema híbrido de um veículo?",
      "Qual a regulamentação para cargas indivisíveis?",
      "O que é o sistema Start-Stop?",
      "Como funciona o câmbio CVT?",
      "O que é o sistema TPMS?",
      "Como funciona o turbocompressor?",
      "O que é o sistema Lane Departure Warning?",
      "Como funciona o controle de estabilidade?",
      "O que é o sistema EGR?",
      "Como funciona o freio regenerativo?",
      "O que é o sistema AdBlue?",
      "Como funciona o diferencial autoblocante?",
      "O que é o sistema de vetorização de torque?",
      "Como funciona o sistema de freios ABS+EBD?",
      "O que é o sistema de pós-tratamento SCR?"
    ][index % 20],
    options: [
      ["MOPP e documentação específica", "Apenas nota fiscal", "Qualquer documento", "Sem requisitos"],
      ["Controle eletrônico de combustível", "Sistema manual", "Apenas carburação", "Sem controle"],
      ["Combinações específicas de peso/eixos", "Qualquer caminhão", "Todo reboque", "Sem padrão"],
      ["Controle Eletrônico de Estabilidade", "Sistema de Freios", "Controle de Tração", "Direção Elétrica"],
      ["Documentos internacionais específicos", "Apenas CNH", "Qualquer documento", "Sem exigência"],
      ["Combinação combustível/elétrico", "Só gasolina", "Só elétrico", "Qualquer motor"],
      ["Autorizações especiais específicas", "Liberação comum", "Sem regras", "Qualquer jeito"],
      ["Desligamento automático do motor", "Partida manual", "Sistema comum", "Chave comum"],
      ["Transmissão continuamente variável", "Câmbio manual", "Câmbio automático", "Câmbio simples"],
      ["Monitoramento pressão pneus", "Sistema de freios", "Controle de tração", "Medidor comum"],
      ["Compressão de ar para potência", "Motor normal", "Sem compressão", "Sistema simples"],
      ["Alerta de saída de faixa", "GPS comum", "Sensor normal", "Câmera básica"],
      ["Sistema eletrônico de correção", "Controle manual", "Sem controle", "Direção comum"],
      ["Recirculação de gases escape", "Sistema de ar", "Filtro comum", "Sem filtro"],
      ["Recuperação energia na frenagem", "Freio comum", "Sistema normal", "Sem recurso"],
      ["Redução emissões diesel", "Combustível comum", "Água normal", "Sem tratamento"],
      ["Bloqueio automático diferencial", "Sistema manual", "Sem bloqueio", "Tração simples"],
      ["Distribuição variável torque", "Força fixa", "Sem controle", "Sistema básico"],
      ["Integração de sistemas de freio", "Freio simples", "Sistema único", "Sem integração"],
      ["Redução catalítica seletiva", "Filtro comum", "Sistema básico", "Sem tratamento"]
    ][index % 20],
    correctOption: 0,
    difficultyLevel: 3
  }))

  return {
    easyQuestions,
    mediumQuestions,
    hardQuestions
  }
}

module.exports = generateQuestions()