import React from 'react';
import { HeartPulse, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-dark-navy text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <HeartPulse className="h-8 w-8 text-medical-blue" />
                            <span className="text-2xl font-bold tracking-tight">CarePlus</span>
                        </div>
                        <p className="text-cool-gray/80 text-sm leading-relaxed">
                            Your health is our priority. Providing compassionate, comprehensive healthcare for you and your family.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="text-cool-gray hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-cool-gray hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-cool-gray hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-cool-gray/80">
                            <li><a href="/" className="hover:text-medical-blue transition-colors">Home</a></li>
                            <li><a href="/services" className="hover:text-medical-blue transition-colors">Our Services</a></li>
                            <li><a href="/dashboard" className="hover:text-medical-blue transition-colors">Patient Dashboard</a></li>
                            <li><a href="#" className="hover:text-medical-blue transition-colors">Meet the Doctors</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Our Services</h4>
                        <ul className="space-y-3 text-sm text-cool-gray/80">
                            <li>Primary Care</li>
                            <li>Cardiology</li>
                            <li>Pediatrics</li>
                            <li>Orthopedics</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-cool-gray/80">
                            <li className="flex gap-3"><MapPin className="w-5 h-5 text-medical-blue shrink-0" /> 123 Health Ave, Medical District, NY 10001</li>
                            <li className="flex gap-3"><Phone className="w-5 h-5 text-medical-blue shrink-0" /> +1 (555) 123-4567</li>
                            <li className="flex gap-3"><Mail className="w-5 h-5 text-medical-blue shrink-0" /> contact@careplus.health</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-cool-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-cool-gray/60">&copy; 2024 CarePlus Healthcare. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-cool-gray/60">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
