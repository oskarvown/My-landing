function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        contact: '',
        description: '',
        budget: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const budgetOptions = [
        'До 50 000 ₽',
        '50 000 - 100 000 ₽',
        '100 000 - 200 000 ₽',
        '200 000 - 500 000 ₽',
        'Свыше 500 000 ₽',
        'Обсудим индивидуально'
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Обсудим ваш проект
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Расскажите о своих задачах, и я предложу оптимальное решение
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="p-8">
                        <CardHeader>
                            <CardTitle className="text-2xl mb-2">
                                Отправить запрос
                            </CardTitle>
                            <CardDescription>
                                Заполните форму, и я свяжусь с вами в течение 2 часов
                            </CardDescription>
                        </CardHeader>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Ваше имя *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                    placeholder="Иван Иванов"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                                    Контакт для связи *
                                </label>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                    placeholder="Telegram, WhatsApp, email или телефон"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                    Краткое описание задачи *
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                                    placeholder="Опишите, что нужно сделать, какие задачи решить, какой результат ожидаете"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                                    Бюджет проекта
                                </label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                >
                                    <option value="">Выберите диапазон</option>
                                    {budgetOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button 
                                    type="submit" 
                                    variant="gradient" 
                                    size="lg"
                                    className="flex-1"
                                >
                                    Отправить запрос
                                </Button>
                                <Button 
                                    type="button" 
                                    variant="outline" 
                                    size="lg"
                                    href="https://t.me/askar_dev"
                                    className="flex-1"
                                >
                                    Написать в Telegram
                                </Button>
                            </div>

                            <p className="text-xs text-gray-500">
                                Нажимая кнопку "Отправить запрос", вы соглашаетесь с обработкой персональных данных
                            </p>
                        </form>
                    </Card>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <Card className="p-8">
                            <CardHeader>
                                <CardTitle className="text-2xl mb-4">
                                    Контакты
                                </CardTitle>
                            </CardHeader>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">Telegram</div>
                                        <a href="https://t.me/askar_dev" className="text-primary-600 hover:text-primary-700">
                                            @askar_dev
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">WhatsApp</div>
                                        <a href="https://wa.me/79991234567" className="text-green-600 hover:text-green-700">
                                            +7 (999) 123-45-67
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">Email</div>
                                        <a href="mailto:hello@askar-dev.ru" className="text-blue-600 hover:text-blue-700">
                                            hello@askar-dev.ru
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <CardHeader>
                                <CardTitle className="text-xl mb-4">
                                    Время работы
                                </CardTitle>
                            </CardHeader>
                            <div className="space-y-2 text-gray-600">
                                <div>Пн-Пт: 10:00 - 19:00 (МСК)</div>
                                <div>Сб-Вс: по договоренности</div>
                                <div className="text-sm text-gray-500 mt-4">
                                    Ответ в течение 2 часов в рабочее время
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8 bg-gradient-to-r from-primary-50 to-accent-50">
                            <CardHeader>
                                <CardTitle className="text-xl mb-4">
                                    Быстрый старт
                                </CardTitle>
                            </CardHeader>
                            <div className="space-y-3 text-gray-700">
                                <div className="flex items-start">
                                    <span className="text-primary-600 font-bold mr-2">1.</span>
                                    <span>Опишите задачу в Telegram</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-primary-600 font-bold mr-2">2.</span>
                                    <span>Получите расчёт за 24 часа</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-primary-600 font-bold mr-2">3.</span>
                                    <span>Начинаем разработку</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

window.Contact = Contact;
