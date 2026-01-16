function Portfolio() {
    const [activeFilter, setActiveFilter] = React.useState('Все');

    const portfolioItems = [
        {
            slug: "telegram-bot-ecommerce",
            title: "Бот для интернет-магазина",
            cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            tags: ["Боты", "E-commerce", "Python"],
            challenge: "Автоматизировать продажи в Telegram для интернет-магазина одежды",
            solution: "Создал бота с каталогом, корзиной, оплатой и интеграцией с 1С",
            results: [
                "Увеличение продаж на 40%",
                "Сокращение времени обработки заказов в 3 раза",
                "Автоматизация 80% рутинных операций"
            ]
        },
        {
            slug: "landing-page-saas",
            title: "Лендинг для SaaS-продукта",
            cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tags: ["Сайты", "SaaS", "React"],
            challenge: "Создать конверсионный лендинг для запуска нового SaaS-продукта",
            solution: "Разработал лендинг с A/B-тестированием и интеграцией с CRM",
            results: [
                "Конверсия 12% (средняя по рынку 3-5%)",
                "Снижение стоимости лида на 60%",
                "Запуск за 7 дней"
            ]
        },
        {
            slug: "booking-bot-restaurant",
            title: "Бот для бронирования столиков",
            cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
            tags: ["Боты", "Бронирование", "Интеграции"],
            challenge: "Автоматизировать бронирование столиков в ресторане",
            solution: "Бот с календарем, уведомлениями и интеграцией с системой управления",
            results: [
                "Сокращение no-show на 25%",
                "Увеличение бронирований на 35%",
                "Экономия времени администратора 2 часа в день"
            ]
        },
        {
            slug: "lead-generation-landing",
            title: "Лендинг для генерации лидов",
            cover: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
            tags: ["Сайты", "Лендинги", "Конверсия"],
            challenge: "Создать лендинг для B2B-компании с высокой конверсией",
            solution: "Многостраничный лендинг с персонализацией и интеграцией с CRM",
            results: [
                "Конверсия 18%",
                "Снижение стоимости лида на 45%",
                "ROI 340% за 3 месяца"
            ]
        },
        {
            slug: "support-bot-crm",
            title: "Бот техподдержки с CRM",
            cover: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
            tags: ["Боты", "CRM", "Поддержка"],
            challenge: "Автоматизировать первичную техподдержку и распределение заявок",
            solution: "Умный бот с базой знаний и автоматическим созданием тикетов",
            results: [
                "Сокращение времени ответа в 5 раз",
                "Автоматическое решение 70% запросов",
                "Повышение NPS на 25%"
            ]
        },
        {
            slug: "ecommerce-platform",
            title: "Платформа для онлайн-школы",
            cover: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
            tags: ["Сайты", "E-learning", "Интеграции"],
            challenge: "Создать платформу для продажи онлайн-курсов",
            solution: "Полнофункциональная платформа с платежами и доступом к курсам",
            results: [
                "Увеличение продаж курсов на 60%",
                "Автоматизация 90% процессов",
                "Снижение нагрузки на поддержку в 4 раза"
            ]
        }
    ];

    const filters = ['Все', 'Боты', 'Сайты', 'Интеграции'];

    const filteredItems = activeFilter === 'Все' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.tags.includes(activeFilter));

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Портфолио
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Реальные проекты с измеримыми результатами
                    </p>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${
                                activeFilter === filter
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <Card key={item.slug} hover className="overflow-hidden">
                            <div className="relative">
                                <img 
                                    src={item.cover} 
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <Badge key={tag} variant="primary" size="sm">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            
                            <CardContent>
                                <CardTitle className="mb-3">
                                    {item.title}
                                </CardTitle>
                                
                                <div className="space-y-3 mb-6">
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Задача:</h4>
                                        <p className="text-sm text-gray-600">{item.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Решение:</h4>
                                        <p className="text-sm text-gray-600">{item.solution}</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-2">Результаты:</h4>
                                    <ul className="space-y-1">
                                        {item.results.map((result, index) => (
                                            <li key={index} className="flex items-start text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => alert('Подробный кейс скоро будет доступен')}
                                    className="w-full"
                                >
                                    Смотреть кейс
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Хотите такой же результат?
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Обсудим ваш проект и создадим решение, которое принесет результат
                    </p>
                    <Button variant="gradient" size="lg">
                        Обсудить проект
                    </Button>
                </div>
            </div>
        </section>
    );
}

window.Portfolio = Portfolio;
