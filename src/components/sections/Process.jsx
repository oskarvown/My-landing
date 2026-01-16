function Process() {
    const processSteps = [
        {
            step: 1,
            title: "Бриф",
            description: "Обсуждаем задачи, цели и требования к проекту",
            details: [
                "Анализ бизнес-процессов",
                "Определение целевой аудитории",
                "Техническое задание"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            step: 2,
            title: "КП",
            description: "Составляю коммерческое предложение с фиксированной стоимостью",
            details: [
                "Детальная смета",
                "Сроки выполнения",
                "Этапы разработки"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            step: 3,
            title: "Прототип",
            description: "Создаю прототип для согласования логики и дизайна",
            details: [
                "Wireframes и макеты",
                "Пользовательские сценарии",
                "Согласование с заказчиком"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            step: 4,
            title: "Разработка",
            description: "Реализую проект с регулярными демо и обратной связью",
            details: [
                "Итеративная разработка",
                "Еженедельные демо",
                "Тестирование и отладка"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            step: 5,
            title: "Запуск",
            description: "Деплой, настройка и передача проекта в эксплуатацию",
            details: [
                "Настройка хостинга",
                "Обучение команды",
                "Техническая поддержка"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section id="process" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Как мы работаем
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Прозрачный процесс от идеи до запуска
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transform -translate-y-1/2"></div>
                        
                        <div className="grid grid-cols-5 gap-8">
                            {processSteps.map((step, index) => (
                                <div key={step.step} className="relative">
                                    {/* Step Circle */}
                                    <div className="relative z-10 w-16 h-16 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                        <div className="text-primary-600">
                                            {step.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Step Content */}
                                    <div className="text-center">
                                        <div className="text-sm font-medium text-primary-600 mb-2">
                                            Шаг {step.step}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {step.description}
                                        </p>
                                        <ul className="text-sm text-gray-500 space-y-1">
                                            {step.details.map((detail, detailIndex) => (
                                                <li key={detailIndex}>• {detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="lg:hidden space-y-8">
                    {processSteps.map((step, index) => (
                        <div key={step.step} className="flex items-start space-x-4">
                            {/* Step Circle */}
                            <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white">
                                <span className="text-sm font-bold">{step.step}</span>
                            </div>
                            
                            {/* Step Content */}
                            <div className="flex-1">
                                <div className="text-sm font-medium text-primary-600 mb-1">
                                    Шаг {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    {step.description}
                                </p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    {step.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>• {detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-primary-600 mb-2">5-10</div>
                        <div className="text-gray-600">Дней на MVP</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary-600 mb-2">2-4</div>
                        <div className="text-gray-600">Недели на полный проект</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary-600 mb-2">30-90</div>
                        <div className="text-gray-600">Дней поддержки</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Готовы начать?
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Обсудим ваш проект и составим план разработки
                    </p>
                    <Button variant="gradient" size="lg">
                        Обсудить проект
                    </Button>
                </div>
            </div>
        </section>
    );
}

window.Process = Process;
