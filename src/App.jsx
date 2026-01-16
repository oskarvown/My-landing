const { Routes, Route } = ReactRouterDOM;

// Main App Component
function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/case/:slug" element={<CaseStudy />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

// Placeholder for case study page
function CaseStudy() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Кейс в разработке</h1>
                <p className="text-gray-600 mb-8">Страница кейса будет доступна в ближайшее время</p>
                <a href="/" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Вернуться на главную
                </a>
            </div>
        </div>
    );
}

// Export for use in main.jsx
window.App = App;
