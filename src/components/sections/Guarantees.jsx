function Guarantees() {
    const guarantees = [
        {
            title: "Fix-price по ТЗ",
            description: "Фиксированная стоимость по техническому заданию. Никаких доплат за изменения в рамках ТЗ",
            icon: (
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            details: [
                "Четкое техническое задание",
                "Фиксированная стоимость",
                "Никаких скрытых платежей",
                "Прозрачная смета"
            ]
        },
        {
            title: "30 дней на баг-фиксы",
            description: "Бесплатное исправление всех найденных багов в течение 30 дней после сдачи проекта",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            details: [
                "Быстрое исправление багов",
                "Приоритетная поддержка",
                "Мониторинг работы системы",
                "Консультации по использованию"
            ]
        },
        {
            title: "Договор и акты",
            description: "Работаю официально по договору с НДС. Предоставляю все необходимые документы",
            icon: (
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            details: [
                "Официальный договор",
                "Акты выполненных работ",
                "Счет-фактуры с НДС",
                "Все документы для бухгалтерии"
            ]
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Гарантии и доверие
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Работаю честно и прозрачно. Ваши интересы защищены
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {guarantees.map((guarantee, index) => (
                        <Card key={index} hover className="text-center">
                            <div className="flex justify-center mb-6">
                                {guarantee.icon}
                            </div>
                            
                            <CardTitle className="mb-4">
                                {guarantee.title}
                            </CardTitle>
                            
                            <CardDescription className="mb-6">
                                {guarantee.description}
                            </CardDescription>
                            
                            <ul className="space-y-2 text-left">
                                {guarantee.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>

                {/* Additional Trust Indicators */}
                <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                            <div className="text-gray-600">Успешных проектов</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                            <div className="text-gray-600">Довольных клиентов</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                            <div className="text-gray-600">Лет опыта</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary-600 mb-2">24ч</div>
                            <div className="text-gray-600">Время ответа</div>
                        </div>
                    </div>
                </div>

                {/* Security Badges */}
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Безопасность и конфиденциальность
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center space-x-2 text-gray-600">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <span>Защита данных</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <span>NDA при необходимости</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Сертифицированные решения</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

window.Guarantees = Guarantees;
