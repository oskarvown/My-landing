// Main App Component - Simple version without routing
function MainApp() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Home />
            </main>
            <Footer />
        </div>
    );
}

// Render the app
ReactDOM.render(<MainApp />, document.getElementById('root'));
