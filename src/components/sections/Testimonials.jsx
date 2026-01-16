function Testimonials() {
    const testimonials = [
        {
            quote: "Аскар создал для нас бота, который автоматизировал 80% рутинных операций. Продажи выросли на 40%, а время на обработку заказов сократилось в 3 раза. Очень рекомендую!",
            author: "Мария Петрова",
            role: "Директор интернет-магазина одежды",
            avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        },
        {
            quote: "Лендинг, который сделал Аскар, дал нам конверсию 18% — это в 3 раза выше среднего по рынку. Проект запустили за неделю, и уже в первый месяц окупили вложения.",
            author: "Алексей Смирнов",
            role: "Основатель SaaS-стартапа",
            avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        },
        {
            quote: "Бот для бронирования столиков работает идеально. Сократили no-show на 25%, увеличили количество бронирований на 35%. Клиенты довольны, мы экономим время.",
            author: "Елена Козлова",
            role: "Управляющая рестораном",
            avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        },
        {
            quote: "Аскар не просто программист, а настоящий партнер по бизнесу. Он понимает задачи, предлагает решения и всегда на связи. Проект сдал в срок, качество отличное.",
            author: "Дмитрий Волков",
            role: "CEO IT-компании",
            avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
        },
        {
            quote: "Интеграция с CRM и платежной системой прошла без проблем. Бот работает стабильно, поддержка на высоте. Рекомендую как надежного исполнителя.",
            author: "Анна Морозова",
            role: "Маркетинг-директор",
            avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Отзывы клиентов
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Что говорят о работе со мной
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} hover className="relative">
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V8a1 1 0 112 0v2.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <CardContent>
                                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>

                                <div className="flex items-center">
                                    <img 
                                        src={testimonial.avatarUrl} 
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                            <div className="text-gray-600">Довольных клиентов</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                            <div className="text-gray-600">Рекомендуют друзьям</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary-600 mb-2">4.9</div>
                            <div className="text-gray-600">Средняя оценка</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                            <div className="text-gray-600">Проектов в срок</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Станьте следующим довольным клиентом
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Обсудим ваш проект и создадим решение, которое принесет результат
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
        </section>
    );
}

window.Testimonials = Testimonials;
