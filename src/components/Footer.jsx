function Footer() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { label: 'Telegram-боты', href: '#services' },
            { label: 'Лендинги', href: '#services' },
            { label: 'Интеграции', href: '#services' },
            { label: 'Поддержка', href: '#services' }
        ],
        portfolio: [
            { label: 'Все проекты', href: '#portfolio' },
            { label: 'Боты', href: '#portfolio' },
            { label: 'Сайты', href: '#portfolio' },
            { label: 'Кейсы', href: '#portfolio' }
        ],
        company: [
            { label: 'Обо мне', href: '#about' },
            { label: 'Процесс', href: '#process' },
            { label: 'Цены', href: '#pricing' },
            { label: 'Отзывы', href: '#testimonials' }
        ],
        support: [
            { label: 'FAQ', href: '#faq' },
            { label: 'Контакты', href: '#contact' },
            { label: 'Telegram', href: 'https://t.me/askar_dev' },
            { label: 'WhatsApp', href: 'https://wa.me/79991234567' }
        ]
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold gradient-text bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                                Аскар
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Разработка Telegram ботов и лендингов, которые приводят клиентов
                            </p>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                                <a href="https://t.me/askar_dev" className="text-gray-300 hover:text-white transition-colors">
                                    @askar_dev
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                </svg>
                                <a href="https://wa.me/79991234567" className="text-gray-300 hover:text-white transition-colors">
                                    +7 (999) 123-45-67
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:hello@askar-dev.ru" className="text-gray-300 hover:text-white transition-colors">
                                    hello@askar-dev.ru
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Услуги</h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                                        className="text-gray-300 hover:text-white transition-colors text-left"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Portfolio */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Портфолио</h4>
                        <ul className="space-y-2">
                            {footerLinks.portfolio.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                                        className="text-gray-300 hover:text-white transition-colors text-left"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">О компании</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                                        className="text-gray-300 hover:text-white transition-colors text-left"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    {link.href.startsWith('http') ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={() => scrollToSection(link.href.replace('#', ''))}
                                            className="text-gray-300 hover:text-white transition-colors text-left"
                                        >
                                            {link.label}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Аскар. Все права защищены.
                        </div>
                        
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Политика конфиденциальности
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Пользовательское соглашение
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

window.Footer = Footer;
