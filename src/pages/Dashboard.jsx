import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { services, doctors } from '../data/mockData';
import { Card, Button, Badge } from '../components/UI';
import { Calendar, Clock, MapPin, User, ChevronRight, CheckCircle } from 'lucide-react';

export const Dashboard = () => {
    const { appointments, addAppointment, cancelAppointment } = useBooking();
    const [activeTab, setActiveTab] = useState('overview');
    const [bookingStep, setBookingStep] = useState(1);
    const [newBooking, setNewBooking] = useState({ serviceId: '', doctorId: '', date: '', time: '' });

    const upcomingAppt = appointments.find(a => a.status === 'Confirmed' || a.status === 'Pending');
    const pastAppts = appointments.filter(a => a.id !== upcomingAppt?.id).sort((a, b) => b.id - a.id);

    const handleBook = (e) => {
        e.preventDefault();
        const doc = doctors.find(d => d.id === parseInt(newBooking.doctorId));
        const srv = services.find(s => s.id === parseInt(newBooking.serviceId));

        addAppointment({
            doctorId: doc.id,
            doctorName: doc.name,
            serviceId: srv.id,
            serviceName: srv.title,
            date: newBooking.date,
            time: newBooking.time,
            location: 'Main Clinic, Floor 2'
        });

        setBookingStep(4); // Success step
        setTimeout(() => {
            setActiveTab('overview');
            setBookingStep(1);
            setNewBooking({ serviceId: '', doctorId: '', date: '', time: '' });
        }, 3000);
    };

    return (
        <div className="pt-20 min-h-screen bg-surface-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar */}
                    <div className="w-full md:w-64 shrink-0">
                        <Card className="p-4 sticky top-28">
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-medical-blue text-white flex items-center justify-center font-bold text-xl">
                                    JD
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark-navy">John Doe</h3>
                                    <p className="text-xs text-cool-gray">Patient ID: #84920</p>
                                </div>
                            </div>

                            <nav className="space-y-2">
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'overview' ? 'bg-medical-blue/10 text-medical-blue' : 'text-cool-gray hover:bg-gray-50'}`}
                                >
                                    Dashboard Overview
                                </button>
                                <button
                                    onClick={() => setActiveTab('book')}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'book' ? 'bg-medical-blue/10 text-medical-blue' : 'text-cool-gray hover:bg-gray-50'}`}
                                >
                                    Book Appointment
                                </button>
                                <button
                                    onClick={() => setActiveTab('history')}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'history' ? 'bg-medical-blue/10 text-medical-blue' : 'text-cool-gray hover:bg-gray-50'}`}
                                >
                                    Medical History
                                </button>
                            </nav>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {activeTab === 'overview' && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div>
                                    <h2 className="text-3xl font-bold text-dark-navy mb-2">Welcome back, John</h2>
                                    <p className="text-cool-gray">Here is your health overview for today.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <Card hover className="bg-medical-blue text-white border-none relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                                        <h3 className="text-xl font-bold mb-2 relative z-10">Need to see a doctor?</h3>
                                        <p className="text-white/80 mb-6 text-sm relative z-10">Schedule an appointment with one of our specialists. We have available slots today.</p>
                                        <Button onClick={() => setActiveTab('book')} className="bg-white text-medical-blue hover:bg-gray-50 relative z-10 w-full md:w-auto border-none">
                                            Book New Appointment
                                        </Button>
                                    </Card>

                                    {upcomingAppt ? (
                                        <Card hover className="border border-medical-blue/20">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="font-bold text-dark-navy">Upcoming Visit</h3>
                                                <Badge status={upcomingAppt.status}>{upcomingAppt.status}</Badge>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 text-cool-gray">
                                                    <User className="w-5 h-5 text-medical-blue" />
                                                    <span className="font-semibold text-dark-navy">{upcomingAppt.doctorName}</span>
                                                    <span className="text-sm">({upcomingAppt.serviceName})</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-cool-gray text-sm">
                                                    <Calendar className="w-5 h-5 text-medical-blue" /> {upcomingAppt.date}
                                                </div>
                                                <div className="flex items-center gap-3 text-cool-gray text-sm">
                                                    <Clock className="w-5 h-5 text-medical-blue" /> {upcomingAppt.time}
                                                </div>
                                                <div className="flex items-center gap-3 text-cool-gray text-sm">
                                                    <MapPin className="w-5 h-5 text-medical-blue" /> {upcomingAppt.location}
                                                </div>
                                            </div>
                                            <div className="mt-6 pt-4 border-t border-gray-100 flex gap-3">
                                                <Button variant="outline" className="text-sm px-4 py-2 w-full" onClick={() => cancelAppointment(upcomingAppt.id)}>Cancel</Button>
                                                <Button className="text-sm px-4 py-2 w-full">Reschedule</Button>
                                            </div>
                                        </Card>
                                    ) : (
                                        <Card className="flex flex-col items-center justify-center text-center p-8 border border-gray-100">
                                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                                <Calendar className="w-8 h-8 text-cool-gray" />
                                            </div>
                                            <h3 className="font-bold text-dark-navy mb-2">No upcoming visits</h3>
                                            <p className="text-cool-gray text-sm">You have no scheduled appointments at the moment.</p>
                                        </Card>
                                    )}
                                </div>

                                <Card className="border border-gray-100">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="font-bold text-dark-navy text-lg">Recent History</h3>
                                        <button onClick={() => setActiveTab('history')} className="text-medical-blue text-sm font-semibold hover:underline">View All</button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="text-cool-gray text-sm border-b border-gray-100">
                                                    <th className="pb-3 font-semibold">Date</th>
                                                    <th className="pb-3 font-semibold">Doctor</th>
                                                    <th className="pb-3 font-semibold">Department</th>
                                                    <th className="pb-3 font-semibold">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {pastAppts.slice(0, 3).map(appt => (
                                                    <tr key={appt.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 text-sm font-medium text-dark-navy">{appt.date}</td>
                                                        <td className="py-4 text-sm text-cool-gray">{appt.doctorName}</td>
                                                        <td className="py-4 text-sm text-cool-gray">{appt.serviceName}</td>
                                                        <td className="py-4"><Badge status={appt.status}>{appt.status}</Badge></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Card>
                            </div>
                        )}

                        {activeTab === 'book' && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <Card className="max-w-2xl mx-auto border border-gray-100 relative overflow-hidden">
                                    {bookingStep === 4 ? (
                                        <div className="text-center py-16 animate-in zoom-in duration-300">
                                            <div className="w-20 h-20 bg-soft-green/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                                                <CheckCircle className="w-10 h-10" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-dark-navy mb-2">Booking Confirmed!</h2>
                                            <p className="text-cool-gray mb-8">Your appointment has been successfully scheduled.</p>
                                            <p className="text-sm text-cool-gray">Redirecting to dashboard...</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="mb-8">
                                                <h2 className="text-2xl font-bold text-dark-navy mb-2">Book an Appointment</h2>
                                                <p className="text-cool-gray">Follow the steps below to schedule your visit.</p>
                                            </div>

                                            {/* Stepper */}
                                            <div className="flex items-center mb-8">
                                                {[1, 2, 3].map((step) => (
                                                    <React.Fragment key={step}>
                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${bookingStep >= step ? 'bg-medical-blue text-white' : 'bg-gray-100 text-cool-gray'}`}>
                                                            {step}
                                                        </div>
                                                        {step < 3 && <div className={`flex-1 h-1 mx-2 rounded ${bookingStep > step ? 'bg-medical-blue' : 'bg-gray-100'}`}></div>}
                                                    </React.Fragment>
                                                ))}
                                            </div>

                                            <form onSubmit={handleBook} className="space-y-6">
                                                {bookingStep === 1 && (
                                                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                                                        <h3 className="font-semibold text-dark-navy">Select a Service</h3>
                                                        <div className="grid sm:grid-cols-2 gap-4">
                                                            {services.map(s => (
                                                                <div
                                                                    key={s.id}
                                                                    onClick={() => setNewBooking({ ...newBooking, serviceId: s.id })}
                                                                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${newBooking.serviceId === s.id ? 'border-medical-blue bg-medical-blue/5' : 'border-gray-100 hover:border-gray-200'}`}
                                                                >
                                                                    <p className="font-bold text-dark-navy">{s.title}</p>
                                                                    <p className="text-xs text-cool-gray mt-1">{s.duration}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <Button
                                                            type="button"
                                                            className="w-full mt-6"
                                                            disabled={!newBooking.serviceId}
                                                            onClick={() => setBookingStep(2)}
                                                        >
                                                            Continue <ChevronRight className="w-4 h-4 ml-1" />
                                                        </Button>
                                                    </div>
                                                )}

                                                {bookingStep === 2 && (
                                                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                                                        <h3 className="font-semibold text-dark-navy">Select a Doctor</h3>
                                                        <div className="space-y-3">
                                                            {doctors.map(d => (
                                                                <div
                                                                    key={d.id}
                                                                    onClick={() => setNewBooking({ ...newBooking, doctorId: d.id })}
                                                                    className={`p-4 rounded-xl border-2 flex items-center gap-4 cursor-pointer transition-all ${newBooking.doctorId === d.id ? 'border-medical-blue bg-medical-blue/5' : 'border-gray-100 hover:border-gray-200'}`}
                                                                >
                                                                    <img src={d.image} alt={d.name} className="w-12 h-12 rounded-full object-cover" />
                                                                    <div>
                                                                        <p className="font-bold text-dark-navy">{d.name}</p>
                                                                        <p className="text-xs text-cool-gray">{d.specialty}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="flex gap-3 mt-6">
                                                            <Button variant="outline" type="button" onClick={() => setBookingStep(1)} className="w-1/3">Back</Button>
                                                            <Button
                                                                type="button"
                                                                className="w-2/3"
                                                                disabled={!newBooking.doctorId}
                                                                onClick={() => setBookingStep(3)}
                                                            >
                                                                Continue <ChevronRight className="w-4 h-4 ml-1" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                )}

                                                {bookingStep === 3 && (
                                                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                                                        <h3 className="font-semibold text-dark-navy">Select Date & Time</h3>
                                                        <div className="space-y-4">
                                                            <div>
                                                                <label className="block text-sm font-medium text-cool-gray mb-1">Date</label>
                                                                <input
                                                                    type="date"
                                                                    required
                                                                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-medical-blue outline-none"
                                                                    value={newBooking.date}
                                                                    onChange={e => setNewBooking({ ...newBooking, date: e.target.value })}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-cool-gray mb-1">Time</label>
                                                                <select
                                                                    required
                                                                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-medical-blue outline-none bg-white"
                                                                    value={newBooking.time}
                                                                    onChange={e => setNewBooking({ ...newBooking, time: e.target.value })}
                                                                >
                                                                    <option value="">Select a time slot</option>
                                                                    <option value="09:00 AM">09:00 AM</option>
                                                                    <option value="10:30 AM">10:30 AM</option>
                                                                    <option value="13:00 PM">01:00 PM</option>
                                                                    <option value="15:30 PM">03:30 PM</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-3 mt-6">
                                                            <Button variant="outline" type="button" onClick={() => setBookingStep(2)} className="w-1/3">Back</Button>
                                                            <Button
                                                                type="submit"
                                                                className="w-2/3"
                                                                disabled={!newBooking.date || !newBooking.time}
                                                            >
                                                                Confirm Booking
                                                            </Button>
                                                        </div>
                                                    </div>
                                                )}
                                            </form>
                                        </>
                                    )}
                                </Card>
                            </div>
                        )}

                        {activeTab === 'history' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-3xl font-bold text-dark-navy mb-6">Medical History</h2>
                                <Card className="border border-gray-100">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse min-w-[600px]">
                                            <thead>
                                                <tr className="text-cool-gray text-sm border-b border-gray-100">
                                                    <th className="pb-3 font-semibold px-4">Date & Time</th>
                                                    <th className="pb-3 font-semibold px-4">Doctor</th>
                                                    <th className="pb-3 font-semibold px-4">Service</th>
                                                    <th className="pb-3 font-semibold px-4">Location</th>
                                                    <th className="pb-3 font-semibold px-4 text-right">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {appointments.sort((a, b) => b.id - a.id).map(appt => (
                                                    <tr key={appt.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-sm font-medium text-dark-navy">
                                                            {appt.date} <br /><span className="text-cool-gray text-xs font-normal">{appt.time}</span>
                                                        </td>
                                                        <td className="py-4 px-4 text-sm text-dark-navy">
                                                            {appt.doctorName}
                                                        </td>
                                                        <td className="py-4 px-4 text-sm text-cool-gray">{appt.serviceName}</td>
                                                        <td className="py-4 px-4 text-sm text-cool-gray">{appt.location}</td>
                                                        <td className="py-4 px-4 text-right"><Badge status={appt.status}>{appt.status}</Badge></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
