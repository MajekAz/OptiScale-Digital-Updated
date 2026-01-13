
import { Booking } from '../types';

const STORAGE_KEY = 'optiscale_bookings';
const MAX_BOOKINGS_PER_SLOT = 5;

export const getBookings = (): Booking[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.warn("localStorage access denied or failed:", error);
    return [];
  }
};

export const saveBooking = (bookingData: Omit<Booking, 'id' | 'timestamp' | 'status'>): Booking => {
  const bookings = getBookings();
  
  const newBooking: Booking = {
    ...bookingData,
    id: Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toISOString(),
    status: 'new'
  };

  try {
    const updatedBookings = [...bookings, newBooking];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));
  } catch (error) {
    console.warn("Failed to save booking to localStorage:", error);
  }

  // Simulate Email Sending
  simulateEmails(newBooking);

  return newBooking;
};

export const getSlotAvailability = (date: string, timeSlot: string): number => {
  const bookings = getBookings();
  const count = bookings.filter(b => b.preferredDate === date && b.preferredTimeSlot === timeSlot).length;
  return MAX_BOOKINGS_PER_SLOT - count;
};

export const isSlotAvailable = (date: string, timeSlot: string): boolean => {
  return getSlotAvailability(date, timeSlot) > 0;
};

const simulateEmails = (booking: Booking) => {
  // Client Confirmation Email
  console.log("%c--- CLIENT CONFIRMATION EMAIL ---", "color: #3b82f6; font-weight: bold;");
  console.log(`To: ${booking.email}`);
  console.log(`Subject: Booking request received – ${booking.serviceType}`);
  console.log(`Body:
Hi ${booking.name},

We’ve received your booking request for ${booking.serviceType} on ${booking.preferredDate} at ${booking.preferredTimeSlot}.

We’ll review your request and confirm availability as soon as possible.

If you need to update your request, reply to this email with your changes.

Best regards,
OptiScale Digital LTD.`);

  // Owner Notification Email
  console.log("%c--- OWNER NOTIFICATION EMAIL ---", "color: #ef4444; font-weight: bold;");
  console.log(`To: info@optiscaledigital.co.uk`);
  console.log(`Subject: New booking request – ${booking.serviceType}`);
  console.log(`Details:
- Name: ${booking.name}
- Email: ${booking.email}
- Phone: ${booking.phone || 'N/A'}
- Service: ${booking.serviceType}
- Date: ${booking.preferredDate}
- Slot: ${booking.preferredTimeSlot}
- Project: ${booking.projectDetails}
- Received: ${booking.timestamp}`);
};
