import { useState } from 'react'
import '../assets/style/book.css'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vehicleType: '',
    serviceRequired: '',
    preferredDate: '',
    preferredTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Booking submitted! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      vehicleType: '',
      serviceRequired: '',
      preferredDate: '',
      preferredTime: '',
    });
  };

  return (
    <div className="booking-form-container" style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Book a Service Appointment</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div>
          <label>Name:</label>
          <input className='req' type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
        </div>

        <div>
          <label>Email / Phone:</label>
          <input className='req' type="text" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email or phone" />
        </div>

        <div>
          <label>Vehicle Type:</label>
          <input className='req' type="text" name="vehicleType" value={formData.vehicleType} onChange={handleChange} required placeholder="e.g., Toyota, Honda" />
        </div>

       <div className="form-group">
          <label>Service Required:</label>
          <input  type="text" name="serviceRequired" list="services" value={formData.serviceRequired} onChange={handleChange} placeholder="Select or type a service" require />
          <datalist id="services">
            <option value="Engine Diagnostics" />
            <option value="Oil Change" />
            <option value="Transmission Service" />
            <option value="Air Conditioning" />
            <option value="Battery Testing/Replacement" />
            <option value="Comprehensive Vehicle Inspection" />
            <option value="Brake" />
            <option value="CNG " />
          </datalist>
        </div>


        <div>
          <label>Preferred Date:</label>
          <input className='req' type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} require />
        </div>

        <div>
          <label>Preferred Time:</label>
          <input className='req' type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} require />
        </div>

        <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
