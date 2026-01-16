function Card({ 
    children, 
    className = "", 
    hover = false,
    padding = "default",
    ...props 
}) {
    const baseClasses = "bg-white rounded-xl border border-gray-200 transition-all duration-200";
    const hoverClasses = hover ? "hover:shadow-lg hover:-translate-y-1" : "";
    
    const paddingClasses = {
        none: "",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10"
    };
    
    const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;
    
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
}

function CardHeader({ children, className = "", ...props }) {
    return (
        <div className={`mb-4 ${className}`} {...props}>
            {children}
        </div>
    );
}

function CardTitle({ children, className = "", ...props }) {
    return (
        <h3 className={`text-xl font-semibold text-gray-900 ${className}`} {...props}>
            {children}
        </h3>
    );
}

function CardDescription({ children, className = "", ...props }) {
    return (
        <p className={`text-gray-600 mt-2 ${className}`} {...props}>
            {children}
        </p>
    );
}

function CardContent({ children, className = "", ...props }) {
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
}

function CardFooter({ children, className = "", ...props }) {
    return (
        <div className={`mt-6 ${className}`} {...props}>
            {children}
        </div>
    );
}

window.Card = Card;
window.CardHeader = CardHeader;
window.CardTitle = CardTitle;
window.CardDescription = CardDescription;
window.CardContent = CardContent;
window.CardFooter = CardFooter;
