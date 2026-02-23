export const services = [
    { id: 1, title: 'Primary Care', description: 'Comprehensive medical care and health maintenance.', icon: 'Stethoscope', duration: '30 mins' },
    { id: 2, title: 'Cardiology', description: 'Expert heart care and diagnostic testing.', icon: 'Heart', duration: '45 mins' },
    { id: 3, title: 'Pediatrics', description: 'Compassionate care for children and infants.', icon: 'Baby', duration: '30 mins' },
    { id: 4, title: 'Dermatology', description: 'Advanced skin treatments and regular screenings.', icon: 'Activity', duration: '30 mins' },
    { id: 5, title: 'Orthopedics', description: 'Specialized bone and joint care.', icon: 'Bone', duration: '60 mins' },
    { id: 6, title: 'Dental Care', description: 'Complete dental health services.', icon: 'Smile', duration: '45 mins' }
];

export const doctors = [
    { id: 1, name: 'Dr. Aisha Al-Hassan', specialty: 'General Practitioner', rating: 4.9, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 2, name: 'Dr. Yusuf Ibrahim', specialty: 'Cardiologist', rating: 4.8, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 3, name: 'Dr. Fatima Zein', specialty: 'Pediatrician', rating: 5.0, image: 'https://images.unsplash.com/photo-1594824436998-ef2286ed577a?auto=format&fit=crop&q=80&w=300&h=300' },
    { id: 4, name: 'Dr. Omar Farooq', specialty: 'Orthopedist', rating: 4.7, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300' }
];

export const testimonials = [
    { id: 1, name: 'Emma Davis', text: 'The care I received was outstanding. The staff makes you feel truly valued.', rating: 5 },
    { id: 2, name: 'Robert Johnson', text: 'Very professional clinic. Dr. Wilson was attentive and explained everything clearly.', rating: 5 },
    { id: 3, name: 'Sophia Miller', text: 'Easy to book appointments and minimal waiting time. Highly recommended!', rating: 4 }
];

export const mockAppointments = [
    { id: 101, doctorId: 1, doctorName: 'Dr. Aisha Al-Hassan', serviceId: 1, serviceName: 'Primary Care', date: '2023-11-05', time: '10:00 AM', status: 'Completed', location: 'Room 302' },
    { id: 102, doctorId: 2, doctorName: 'Dr. Yusuf Ibrahim', serviceId: 2, serviceName: 'Cardiology', date: '2023-10-24', time: '14:30 PM', status: 'Pending', location: 'Room 105' },
    { id: 103, doctorId: 4, doctorName: 'Dr. Omar Farooq', serviceId: 5, serviceName: 'Orthopedics', date: '2023-09-12', time: '09:00 AM', status: 'Cancelled', location: 'Room 410' }
];
