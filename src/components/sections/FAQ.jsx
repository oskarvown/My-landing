function FAQ() {
    const [openItems, setOpenItems] = React.useState(new Set());

    const faqData = [
        {
            q: "Сколько времени занимает разработка?",
            a: "Простой бот или лендинг — 5-10 дней. Сложные проекты с интеграциями — 2-4 недели. Всегда обсуждаем сроки на этапе технического задания."
        },
        {
            q: "Что входит в стоимость разработки?",
            a: "Разработка, тестирование, техническая документация, 30-90 дней поддержки (зависит от тарифа), обучение работе с системой."
        },
        {
            q: "Можно ли изменить функционал после запуска?",
            a: "Да, в рамках поддержки можно добавлять новые функции. Сложные изменения обсуждаются отдельно и могут потребовать дополнительной оплаты."
        },
        {
            q: "Какие гарантии вы предоставляете?",
            a: "Fix-price по техническому заданию, 30 дней на исправление багов, договор с четкими обязательствами, акты выполненных работ."
        },
        {
            q: "Нужно ли покупать хостинг отдельно?",
            a: "Для ботов хостинг не нужен. Для сайтов могу порекомендовать надежные хостинг-провайдеры или помочь с настройкой."
        },
        {
            q: "Как происходит оплата?",
            a: "50% предоплата, 50% после сдачи проекта. Для крупных проектов возможна поэтапная оплата. Работаю по договору с НДС."
        },
        {
            q: "Можете ли вы доработать существующий проект?",
            a: "Да, занимаюсь доработкой и поддержкой существующих проектов. Сначала изучаю код и оцениваю объем работ."
        },
        {
            q: "Что если проект не понравится?",
            a: "На этапе разработки показываю промежуточные результаты и вношу правки. Если что-то не устраивает — дорабатываю до полного соответствия ТЗ."
        }
    ];

    const toggleItem = (index) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(index)) {
            newOpenItems.delete(index);
        } else {
            newOpenItems.add(index);
        }
        setOpenItems(newOpenItems);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Часто задаваемые вопросы
                    </h2>
                    <p className="text-xl text-gray-600">
                        Ответы на популярные вопросы о работе
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium text-gray-900 pr-4">
                                        {item.q}
                                    </h3>
                                    <svg 
                                        className={`w-5 h-5 text-gray-500 transition-transform ${
                                            openItems.has(index) ? 'rotate-180' : ''
                                        }`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            
                            {openItems.has(index) && (
                                <div className="px-6 pb-4 bg-gray-50">
                                    <p className="text-gray-700 leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Не нашли ответ на свой вопрос?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Свяжитесь со мной, и я отвечу на все ваши вопросы
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gradient" size="lg">
                                Задать вопрос
                            </Button>
                            <Button variant="outline" size="lg">
                                Написать в Telegram
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

window.FAQ = FAQ;
