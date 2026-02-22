import React from 'react';
import { services } from '../data/mockData';
import { Card, Button } from '../components/UI';
import { ArrowRight, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
    return (
        <div className="pt-20">
            {/* Page Header */}
            <section className="bg-gradient-to-br from-medical-blue/10 to-transparent py-16 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-sm font-semibold text-medical-blue mb-4">
                        <Link to="/" className="hover:underline">Home</Link> &gt; Our Services
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-dark-navy mb-4">Our Medical Services</h1>
                    <p className="text-lg text-cool-gray max-w-2xl text-balance">
                        Comprehensive care for you and your family. We offer a wide range of medical specialties supported by modern technology and expert compassionate care.
                    </p>
                </div>
            </section>

            {/* Services Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <Card key={service.id} className="border border-gray-100/50 p-8 flex flex-col h-full hover:border-medical-blue/30 transition-colors">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue text-2xl font-bold">
                                        {service.title.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-dark-navy">{service.title}</h3>
                                        <span className="flex items-center text-sm text-cool-gray mt-1">
                                            <Clock className="w-4 h-4 mr-1" /> Typical Duration: {service.duration}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-cool-gray mb-8 flex-grow leading-relaxed">
                                    {service.description} Our {service.title} department is staffed by top-tier professionals dedicated to providing the highest standard of care using evidence-based practices.
                                </p>

                                <div className="pt-6 border-t border-gray-100 mt-auto flex justify-between items-center">
                                    <Link to="/dashboard" className="text-medical-blue font-semibold hover:underline flex items-center">
                                        Book appointment <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Banner */}
            <section className="bg-medical-blue/5 py-16 border-t border-medical-blue/10 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h3 className="text-2xl font-bold text-dark-navy mb-4">Not sure which service you need?</h3>
                    <p className="text-cool-gray mb-8">Our general practitioners are here to help diagnose and direct you to the right specialist.</p>
                    <Link to="/dashboard">
                        <Button>Book a General Consultation</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};
