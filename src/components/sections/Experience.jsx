function Experience() {
    const experienceData = [
        {
            id: 1,
            company: "Infusion.Games",
            position: "Digital Marketing & Automation Lead",
            period: "2022 - Present",
            description: "Ведущий специалист по цифровому маркетингу и автоматизации в игровой индустрии",
            achievements: [
                "Разработал и внедрил комплексную систему цифрового маркетинга",
                "Создал Discord-боты для автоматизации community management",
                "Организовал рост сообщества более чем на 300%",
                "Реализовал системы retention для удержания пользователей"
            ],
            technologies: ["Digital Marketing", "Discord Bots", "Community Growth", "Analytics"]
        },
        {
            id: 2,
            company: "Digital Cube / Green Cube",
            position: "Performance Marketing Expert",
            period: "2020 - 2022",
            description: "Эксперт по performance-маркетингу и генерации лидов",
            achievements: [
                "Запустил высокоэффективные кампании performance-маркетинга",
                "Организовал системы генерации лидов с конверсией >25%",
                "Разработал и оптимизировал продающие воронки",
                "Внедрил комплексную систему аналитики и отчетности"
            ],
            technologies: ["Performance Marketing", "Lead Generation", "Funnels", "Analytics"]
        }
    ];
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Опыт работы
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Профессиональный путь в цифровом маркетинге и автоматизации
                    </p>
                </div>

                <div className="space-y-8">
                    {experienceData.map((experience, index) => (
                        <div key={experience.id} className="relative">
                            {/* Timeline line */}
                            {index !== experienceData.length - 1 && (
                                <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent"></div>
                            )}

                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Timeline dot */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5M4 7h16" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                                {experience.position}
                                            </h3>
                                            <p className="text-lg text-primary-600 font-semibold">
                                                {experience.company}
                                            </p>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-2 md:mt-0">
                                            {experience.period}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-6">
                                        {experience.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Ключевые достижения:</h4>
                                        <ul className="space-y-2">
                                            {experience.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start text-gray-600">
                                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Технологии и инструменты:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

window.Experience = Experience;