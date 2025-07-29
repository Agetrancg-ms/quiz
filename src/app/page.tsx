import Link from 'next/link'
import Image from 'next/image'

const quizCategories = [
	{
		id: 'ciclista',
		title: 'Ciclista',
		description: '10 perguntas sobre segurança e regras para quem pedala',
		color: 'bg-[#31D893]',
		icon: 'fas fa-bicycle',
	},
	{
		id: 'motorista',
		title: 'Motorista',
		description: '10 perguntas sobre direção defensiva e legislação',
		color: 'bg-[#2F7CF6]',
		icon: 'fas fa-car',
	},
	{
		id: 'pedestre',
		title: 'Pedestre',
		description: '10 perguntas sobre travessia segura e direitos',
		color: 'bg-[#9747FF]',
		icon: 'fas fa-walking',
	},
	{
		id: 'motociclista',
		title: 'Motociclista',
		description: '10 perguntas sobre pilotagem segura e normas',
		color: 'bg-[#FF4545]',
		icon: 'fas fa-motorcycle',
	},
]

export default function HomePage() {
	return (
		<div className="h-full w-full flex flex-col overflow-x-hidden">
			<div className="flex-1">
				<div className="flex flex-col gap-6 max-w-4xl mx-auto py-6 px-5 sm:px-6 md:px-8 transform-gpu origin-top xl:scale-100 lg:scale-[0.85]">
					{/* Welcome section */}
					<div className="text-center">
						<h2 className="text-2xl sm:text-3xl font-bold text-theme mb-3">
							Bem-vindo ao Quiz de Trânsito
						</h2>
						<p className="text-theme max-w-2xl mx-auto mb-8 text-sm sm:text-base">
							Teste seus conhecimentos sobre trânsito e segurança viária. Escolha um dos
							módulos abaixo e responda às perguntas para avaliar seu conhecimento.
						</p>
					</div>

					{/* Difficulty level cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
						<Link
							href="/quiz/fundamental"
							className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
						>
							<div className="flex items-center gap-4">
								<div className="bg-green-100 p-3 rounded-lg">
									<i className="fas fa-book text-green-600 text-xl"></i>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-800">Nível Fundamental</h3>
									<p className="text-sm text-gray-600">Questões básicas sobre regras e sinais de trânsito</p>
								</div>
							</div>
						</Link>

						<Link
							href="/quiz/medio"
							className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
						>
							<div className="flex items-center gap-4">
								<div className="bg-yellow-100 p-3 rounded-lg">
									<i className="fas fa-graduation-cap text-yellow-600 text-xl"></i>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-800">Nível Médio</h3>
									<p className="text-sm text-gray-600">Questões intermediárias sobre regras e conduta</p>
								</div>
							</div>
						</Link>
					</div>

					{/* Quiz categories grid */}
					<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
						{quizCategories.map((category) => (
							<Link
								key={category.id}
								href={`/quiz/${category.id}`}
								className={`group ${category.color} text-white p-5 rounded-2xl 
                  transition-all duration-300 shadow-lg hover:shadow-xl
                  flex flex-col min-h-[180px] relative overflow-hidden`}
							>
								{/* Hover overlay */}
								<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

								<div className="flex flex-col items-center text-center h-full justify-between gap-3 relative z-10">
									<div className="mb-1 transform group-hover:scale-110 transition-transform duration-300">
										<i className={`${category.icon} text-4xl`}></i>
									</div>
									<div className="space-y-2">
										<h3 className="text-xl font-semibold">{category.title}</h3>
										<p className="text-sm leading-snug opacity-90">
											{category.description}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* Footer section with mascot */}
			<div className="relative">
				{/* Mascote posicionado acima do rodapé - versão desktop grande */}
				<div className="hidden lg:block absolute -top-[100px] right-4 w-40 h-40 pointer-events-none z-20">
					<Image
						src="/mascote.png"
						alt="Mascote"
						width={160}
						height={160}
						className="w-full h-full object-contain"
					/>
				</div>

				<footer className="bg-[#1e293b] text-white relative overflow-x-hidden z-10">
					{/* Footer content */}
					<div className="container mx-auto px-5 sm:px-6 md:px-8 py-4">
						<div className="grid grid-cols-12 gap-4">
							{/* Logo PREFCG - versão desktop grande */}
							<div className="hidden lg:block col-span-2">
								<Image
									src="/prefcg_agetran_logo.png"
									alt="Prefeitura Campo Grande e Agetran"
									width={200}
									height={140}
									className="object-contain w-32 md:w-40 lg:w-44 xl:w-50"
								/>
							</div>
							
							{/* Textos centralizados */}
							<div className="col-span-12 lg:col-span-10 pl-0 lg:pl-0 xl:pl-0 md:pr-10 lg:pr-25 xl:pr-30">
								<p className="mb-4 text-center text-gray-300 text-sm xl:text-base">
									Este quiz foi desenvolvido para ajudar motoristas e futuros condutores a testarem seus
									conhecimentos sobre as leis e regras de trânsito. As questões são baseadas no Código
									de Trânsito Brasileiro (CTB) e em situações reais do dia a dia.
								</p>
								<p className="mb-6 text-center text-xs xl:text-sm text-gray-400">
									* Seus resultados serão armazenados e usados apenas para fins
									estatísticos e de pesquisa sobre o conhecimento em relação às leis
									de trânsito.
								</p>

								{/* Logo e mascote em telas < 1024px */}
								<div className="lg:hidden flex justify-center items-center gap-2 mb-6">
									<div className="flex-shrink-0">
										<Image
											src="/prefcg_agetran_logo.png"
											alt="Prefeitura Campo Grande e Agetran"
											width={120}
											height={80}
											className="object-contain w-24"
										/>
									</div>
									<div className="flex-shrink-0">
										<Image
											src="/mascote.png"
											alt="Mascote"
											width={100}
											height={100}
											className="object-contain w-24 h-24"
										/>
									</div>
								</div>

								<hr className="border-t border-gray-400 w-full my-2" />
								<div className="flex justify-between items-center">
									<p className="text-xs xl:text-sm text-gray-400">
										© 2023 Agetran. Todos os direitos reservados.
									</p>
									{/* Ícones sociais */}
									<div className="flex gap-4">
										<a href="https://www.facebook.com/pages/Agetran/212168202147315" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
											<i className="fab fa-facebook-f text-lg xl:text-xl"></i>
										</a>
										<a href="https://www.instagram.com/agetran.cg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
											<i className="fab fa-instagram text-lg xl:text-xl"></i>
										</a>
										<a href="https://www.youtube.com/@agetranimprensa1897" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
											<i className="fab fa-youtube text-lg xl:text-xl"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	)
}
