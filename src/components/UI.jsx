import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = 'inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-medical-blue text-white hover:bg-blue-700 focus:ring-medical-blue shadow-sm hover:shadow',
        secondary: 'bg-white text-dark-navy border border-gray-200 hover:bg-surface-gray focus:ring-gray-200',
        outline: 'bg-transparent border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white focus:ring-medical-blue',
        ghost: 'bg-transparent text-cool-gray hover:text-dark-navy hover:bg-surface-gray'
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export const Card = ({ children, className = '', hover = false }) => {
    return (
        <div className={`bg-white rounded-xl shadow-soft p-6 ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''} ${className}`}>
            {children}
        </div>
    );
};

export const Badge = ({ children, status }) => {
    const styles = {
        Completed: 'bg-soft-green/20 text-emerald-700',
        Confirmed: 'bg-soft-green/20 text-emerald-700',
        Pending: 'bg-soft-orange/20 text-amber-700',
        Upcoming: 'bg-medical-blue/10 text-medical-blue',
        Cancelled: 'bg-danger-red/10 text-danger-red'
    };

    return (
        <span className={`px-3 py-1 text-xs font-bold rounded-full ${styles[status] || 'bg-gray-100 text-gray-600'}`}>
            {children}
        </span>
    );
};
