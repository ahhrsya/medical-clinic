import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';
import { Button } from './UI';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Dashboard', path: '/dashboard' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center gap-2">
                        <HeartPulse className="h-8 w-8 text-medical-blue" />
                        <span className="text-2xl font-bold text-dark-navy tracking-tight">CarePlus</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-semibold transition-colors ${isActive(link.path) ? 'text-medical-blue' : 'text-cool-gray hover:text-medical-blue'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/dashboard">
                            <Button variant="primary">Book Appointment</Button>
                        </Link>
                    </div>

                    <div className="flex md:hidden items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-dark-navy p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg absolute w-full">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'text-medical-blue bg-medical-blue/5' : 'text-cool-gray hover:text-medical-blue hover:bg-surface-gray'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-2 px-3">
                        <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                            <Button className="w-full justify-center">Book Appointment</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
