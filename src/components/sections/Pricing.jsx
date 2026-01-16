function Pricing() {
    const pricingPlans = [
        {
            name: "Мини",
            priceFrom: "от 50 000 ₽",
            description: "Простой бот или лендинг для быстрого старта",
            features: [
                "Простой Telegram-бот (до 5 функций)",
                "Базовый лендинг (до 5 секций)",
                "1 интеграция (CRM или платежи)",
                "Техническая документация",
                "30 дней поддержки"
            ],
            note: "Идеально для тестирования гипотез",
            cta: "Заказать",
            popular: false
        },
        {
            name: "Оптимальный",
            priceFrom: "от 120 000 ₽",
            description: "Полнофункциональное решение с интеграциями",
            features: [
                "Сложный бот с базой знаний",
                "Многостраничный лендинг",
                "3-5 интеграций (CRM, платежи, аналитика)",
                "A/B-тестирование",
                "Аналитика и отчеты",
                "60 дней поддержки"
            ],
            note: "Самый популярный выбор",
            cta: "Заказать",
            popular: true
        },
        {
            name: "Про",
            priceFrom: "от 250 000 ₽",
            description: "Комплексное решение с аналитикой и оптимизацией",
            features: [
                "Многофункциональный бот с AI",
                "Полноценный сайт/платформа",
                "Неограниченные интеграции",
                "Персонализация и сегментация",
                "Детальная аналитика",
                "90 дней поддержки + оптимизация"
            ],
            note: "Для серьезного бизнеса",
            cta: "Обсудить проект",
            popular: false
        },
        {
            name: "Поддержка",
            priceFrom: "от 15 000 ₽/мес",
            description: "Техническая поддержка и развитие существующих проектов",
            features: [
                "Мониторинг 24/7",
                "Исправление багов",
                "Добавление новых функций",
                "Оптимизация производительности",
                "Консультации по развитию",
                "Приоритетная поддержка"
            ],
            note: "Для развивающихся проектов",
            cta: "Подключить",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Прозрачные цены
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Фиксированная стоимость по техническому заданию. Никаких скрытых платежей
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <Card 
                            key={index} 
                            hover 
                            className={`relative ${plan.popular ? 'ring-2 ring-primary-500 shadow-xl' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <Badge variant="gradient" size="lg">
                                        Популярный
                                    </Badge>
                                </div>
                            )}
                            
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl mb-2">
                                    {plan.name}
                                </CardTitle>
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {plan.priceFrom}
                                </div>
                                <CardDescription>
                                    {plan.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start text-sm">
                                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-center">
                                    <p className="text-sm text-gray-500 mb-4">
                                        {plan.note}
                                    </p>
                                    <Button 
                                        variant={plan.popular ? "gradient" : "primary"} 
                                        size="lg"
                                        className="w-full"
                                    >
                                        {plan.cta}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Что входит в стоимость?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Разработка</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Анализ требований</li>
                                    <li>• Проектирование архитектуры</li>
                                    <li>• Разработка и тестирование</li>
                                    <li>• Документация</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Запуск</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Настройка хостинга</li>
                                    <li>• Деплой и настройка</li>
                                    <li>• Обучение команды</li>
                                    <li>• Передача проекта</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Поддержка</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Исправление багов</li>
                                    <li>• Техническая поддержка</li>
                                    <li>• Консультации</li>
                                    <li>• Мониторинг работы</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Note */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        * Цены указаны ориентировочно. Точная стоимость рассчитывается после анализа требований.<br/>
                        Работаю по договору с НДС. Предоставляю все необходимые документы.
                    </p>
                </div>
            </div>
        </section>
    );
}

window.Pricing = Pricing;
