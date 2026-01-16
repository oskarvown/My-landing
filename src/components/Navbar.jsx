function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { label: 'Обо мне', id: 'about' },
        { label: 'Навыки', id: 'services' },
        { label: 'Опыт', id: 'experience' },
        { label: 'Портфолио', id: 'portfolio' },
        { label: 'Цены', id: 'pricing' },
        { label: 'Процесс', id: 'process' },
        { label: 'Отзывы', id: 'testimonials' },
        { label: 'FAQ', id: 'faq' },
        { label: 'Контакты', id: 'contact' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-black/40 backdrop-blur-md shadow-lg border-b border-white/10' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                                        isScrolled ? 'text-white hover:text-white/80' : 'text-white hover:text-white/80'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button 
                            variant="gradient" 
                            size="sm"
                            onClick={() => scrollToSection('contact')}
                        >
                            Получить расчёт
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden ml-auto">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md transition-colors text-white hover:bg-white/10"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-white/10 rounded-md w-full text-left"
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className="px-3 py-2">
                            <Button 
                                variant="gradient" 
                                size="sm"
                                className="w-full"
                                onClick={() => scrollToSection('contact')}
                            >
                                Получить расчёт
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

window.Navbar = Navbar;
