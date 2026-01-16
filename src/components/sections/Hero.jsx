function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const techBadges = [
        { name: 'Digital Marketing', color: 'bg-blue-100 text-blue-800' },
        { name: 'AI & Automation', color: 'bg-purple-100 text-purple-800' },
        { name: 'Chat Bots', color: 'bg-green-100 text-green-800' },
        { name: 'Voice Bots', color: 'bg-orange-100 text-orange-800' },
        { name: 'CRM Systems', color: 'bg-red-100 text-red-800' },
        { name: 'Asterisk', color: 'bg-cyan-100 text-cyan-800' }
    ];

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0" style={{
                background: 'linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 25%, #4a2b6f 50%, #7b2d5f 75%, #a4306d 100%)',
            }}>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-[900px] mx-auto">
                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Full-Stack Digital Marketer &{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                            Automation Expert
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                        Строю масштабируемые системы продаж: от трафика и комьюнити до AI-ботов, CRM и голосовой телефонии
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch md:items-center mb-12">
                        <Button 
                            variant="gradient" 
                            size="lg"
                            onClick={() => scrollToSection('contact')}
                            className="w-full md:w-auto"
                        >
                            Получить расчёт за 24 часа
                        </Button>
                        <Button 
                            variant="secondary" 
                            size="lg"
                            href="https://t.me/askar_dev"
                            className="w-full md:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
                        >
                            Написать в Telegram
                        </Button>
                        <Button 
                            variant="ghost" 
                            size="lg"
                            onClick={() => scrollToSection('portfolio')}
                            className="w-full md:w-auto text-white hover:bg-white/10"
                        >
                            Смотреть кейсы
                        </Button>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {techBadges.map((tech, index) => (
                            <Badge 
                                key={index} 
                                variant="default" 
                                className={`${tech.color} border-0`}
                            >
                                {tech.name}
                            </Badge>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                            <div className="mb-3">
                                <svg className="w-8 h-8 mx-auto text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                            <div className="text-gray-300 text-sm">Проектов запущено</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                            <div className="mb-3">
                                <svg className="w-8 h-8 mx-auto text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5-10</div>
                            <div className="text-gray-300 text-sm">Дней на MVP</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                            <div className="mb-3">
                                <svg className="w-8 h-8 mx-auto text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">40%</div>
                            <div className="text-gray-300 text-sm">Средний рост конверсии</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <button 
                    onClick={() => scrollToSection('about')}
                    className="text-white/70 hover:text-white transition-colors animate-scroll-hint"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

window.Hero = Hero;
