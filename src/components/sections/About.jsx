function About() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="about" className="py-20 bg-gray-50" aria-labelledby="about-title">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Title */}
                <div className="text-center mb-16">
                    <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Коротко обо мне
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Создаю решения, которые работают и приносят результат
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Кто я */}
                    <div className="text-center lg:text-left">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Кто я</p>
                        
                        <div className="relative inline-block mb-8">
                            <div className="p-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                                <img 
                                    src="assets/images/askar-photo.jpg"
                                    alt="Аскар - Разработчик Telegram ботов и лендингов" 
                                    className="w-48 h-48 aspect-square rounded-full object-cover bg-white"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                                <svg aria-hidden="true" className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Аскар
                        </h3>
                        <p className="text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold mb-6">
                            Разработчик Telegram ботов и лендингов
                        </p>
                        
                        <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                            Специализируюсь на создании Telegram-ботов и лендингов, которые реально 
                            работают и приносят клиентов. Каждый проект — это не просто код, а 
                            инструмент для роста бизнеса.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button 
                                variant="gradient" 
                                onClick={() => scrollToSection('portfolio')}
                                className="shadow-lg"
                            >
                                Посмотреть работы
                            </Button>
                            <Button 
                                variant="secondary"
                                href="./assets/askar-resume.pdf"
                                download
                                className="border-2 border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 bg-white"
                            >
                                Скачать резюме
                            </Button>
                        </div>
                        
                        <p className="mt-4 text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
                            <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Отвечу в течение 24 часов
                        </p>
                    </div>

                    {/* Чем помогу */}
                    <div className="space-y-6">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Чем помогу</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    title: "5+ лет опыта",
                                    description: "В разработке Python-ботов и веб-приложений",
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                },
                                {
                                    title: "MVP за 5-10 дней",
                                    description: "С фокусом на быстрый запуск",
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                },
                                {
                                    title: "Современный стек",
                                    description: "Python, FastAPI, React/Next.js, PostgreSQL",
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                },
                                {
                                    title: "Аналитика в каждом проекте",
                                    description: "Оптимизация конверсии и ROI",
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                }
                            ].map((point, index) => (
                                <div key={index} className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:bg-white/70 hover:shadow-lg transition-all">
                                    <div aria-hidden="true" className="text-purple-600 mb-4">
                                        {point.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        {point.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Почему мне доверяют */}
                <div className="mt-20">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide text-center mb-8">Почему мне доверяют</p>
                    
                    <dl className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center hover:bg-white/70 hover:shadow-lg transition-all">
                            <dt className="sr-only">Успешных проектов</dt>
                            <dd className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">50+</dd>
                            <dd className="text-gray-600 text-sm">Успешных проектов</dd>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center hover:bg-white/70 hover:shadow-lg transition-all">
                            <dt className="sr-only">Довольных клиентов</dt>
                            <dd className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">98%</dd>
                            <dd className="text-gray-600 text-sm">Довольных клиентов</dd>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center hover:bg-white/70 hover:shadow-lg transition-all col-span-2 md:col-span-1">
                            <dt className="sr-only">Среднее время ответа</dt>
                            <dd className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">24ч</dd>
                            <dd className="text-gray-600 text-sm">Среднее время ответа</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}

window.About = About;
