function Services() {
    const servicesData = [
        {
            category: "Marketing & Growth",
            skills: [
                {
                    id: 1,
                    title: "SMM",
                    description: "Стратегии в социальных сетях для привлечения и удержания аудитории",
                    icon: "📱"
                },
                {
                    id: 2,
                    title: "Community Management",
                    description: "Управление сообществами и построение лояльных отношений",
                    icon: "👥"
                },
                {
                    id: 3,
                    title: "Lead Generation",
                    description: "Генерация лидов и привлечение целевой аудитории",
                    icon: "🎯"
                },
                {
                    id: 4,
                    title: "Funnels & Retention",
                    description: "Продажные воронки и системы удержания клиентов",
                    icon: "📈"
                },
                {
                    id: 5,
                    title: "Analytics",
                    description: "Анализ данных и оптимизация маркетинговых кампаний",
                    icon: "📊"
                }
            ]
        },
        {
            category: "AI & Automation",
            skills: [
                {
                    id: 6,
                    title: "Chat-bots",
                    description: "Автоматизация общения и клиентского сервиса",
                    icon: "🤖"
                },
                {
                    id: 7,
                    title: "Voice-bots",
                    description: "Голосовые ассистенты и телефонная автоматизация",
                    icon: "🎤"
                },
                {
                    id: 8,
                    title: "CRM automation",
                    description: "Автоматизация процессов в CRM системах",
                    icon: "⚙️"
                },
                {
                    id: 9,
                    title: "API integrations",
                    description: "Интеграция систем через API и вебхуки",
                    icon: "🔗"
                },
                {
                    id: 10,
                    title: "Asterisk telephony",
                    description: "Собственная телефония и голосовые решения",
                    icon: "📞"
                }
            ]
        }
    ];
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Навыки
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Экспертиза в цифровом маркетинге и автоматизации бизнес-процессов
                    </p>
                </div>

                <div className="space-y-16">
                    {servicesData.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.skills.map((skill) => (
                                    <div key={skill.id} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                        <div className="text-4xl mb-4">{skill.icon}</div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                            {skill.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            {skill.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Нужен индивидуальный подход?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Каждый проект уникален. Обсудим ваши задачи и найдем оптимальное решение
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gradient" size="lg">
                                Обсудить проект
                            </Button>
                            <Button variant="outline" size="lg">
                                Посмотреть кейсы
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

window.Services = Services;
