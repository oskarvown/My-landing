function Badge({ 
    children, 
    variant = "default", 
    size = "md", 
    className = "",
    ...props 
}) {
    const baseClasses = "inline-flex items-center font-medium rounded-full";
    
    const variants = {
        default: "bg-gray-100 text-gray-800",
        primary: "bg-primary-100 text-primary-800",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        error: "bg-red-100 text-red-800",
        accent: "bg-accent-100 text-accent-800",
        gradient: "bg-gradient-to-r from-primary-500 to-accent-500 text-white"
    };
    
    const sizes = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-2 text-base"
    };
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
    
    return (
        <span className={classes} {...props}>
            {children}
        </span>
    );
}

window.Badge = Badge;
