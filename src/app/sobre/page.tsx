export default function Sobre() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-3xl w-full p-8 bg-card text-card rounded-lg shadow-lg flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-8 text-theme text-center">
          Sobre o Quiz de Trânsito
        </h1>
        <p className="mb-4 text-left">
          O <strong>Quiz de Trânsito</strong> é uma iniciativa educativa que visa
          promover o conhecimento sobre as leis, regras e boas práticas no trânsito
          brasileiro. Nosso objetivo é contribuir para a formação de cidadãos mais
          conscientes e responsáveis, tornando as ruas e estradas mais seguras para
          todos.
        </p>
        <p className="mb-4 text-left">
        O quiz foi desenvolvido pela Agência Municipal de Trânsito (AGETRAN) em 
        parceria com a Agência Municipal de Tecnologia da Informação e Inovação 
        (AGETEC) da Prefeitura de Campo Grande - MS. Com o apoio de especialistas 
        na área. Ele utiliza questões atualizadas e baseadas no Código de Trânsito 
        Brasileiro (CTB), garantindo um conteúdo preciso e relevante. Esperamos que 
        a experiência seja divertida, inclusiva e enriquecedora para todos os 
        participantes, contribuindo para a educação no trânsito em nossa capital.
        </p>
        <p className="mb-4 text-left">
          Se você tiver sugestões, críticas ou quiser saber mais sobre o projeto,
          entre em contato conosco pela página de contato.
        </p>
        <p className="text-sm text-input mt-8 w-full text-center">
          &copy; {new Date().getFullYear()} Agetran. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
}
