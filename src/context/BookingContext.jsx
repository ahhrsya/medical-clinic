import React, { createContext, useContext, useState } from 'react';
import { mockAppointments } from '../data/mockData';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
    const [appointments, setAppointments] = useState(mockAppointments);

    const addAppointment = (newAppt) => {
        setAppointments([...appointments, { ...newAppt, id: Date.now(), status: 'Confirmed' }]);
    };

    const cancelAppointment = (id) => {
        setAppointments(appointments.map(app => app.id === id ? { ...app, status: 'Cancelled' } : app));
    };

    return (
        <BookingContext.Provider value={{ appointments, addAppointment, cancelAppointment }}>
            {children}
        </BookingContext.Provider>
    );
};
