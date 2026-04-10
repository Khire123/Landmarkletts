import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle2 } from "lucide-react"; // Added CheckCircle2
import { supabase } from "../supabaseClient";

export default function ScheduleViewingModal({ isOpen, onClose, propertyName }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // New state for success view
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", date: "", time: ""
  });

  if (!isOpen) return null;

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const day = selectedDate.getUTCDay();
    if (day === 0 || day === 6) {
      setError("Please select a weekday. We are closed on weekends.");
      setFormData({ ...formData, date: "" });
    } else {
      setError("");
      setFormData({ ...formData, date: e.target.value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.time < "09:00" || formData.time > "18:00") {
      setError("Please select a time between 09:00 and 18:00.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { error: sbError } = await supabase
        .from('tour_requests')
        .insert([{ 
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          appointment_date: formData.date,
          appointment_time: formData.time,
          property_name: propertyName 
        }]);

      if (sbError) throw sbError;

      // SUCCESS: Switch to success view instead of alert
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", date: "", time: "" });
    } catch (err) {
      console.error("Supabase error:", err);
      setError(err.message || "System busy. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to close and reset the view
  const handleClose = () => {
    setSubmitted(false);
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose}></div>
      
      <div className="relative bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl">
        <button onClick={handleClose} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900">
          <X size={20} />
        </button>

        {submitted ? (
          /* ================= SUCCESS VIEW ================= */
          <div className="py-10 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Request Received!</h2>
            <p className="text-gray-500 mb-8">
              Thank you. Our consultant will contact you shortly to confirm your viewing of <strong>{propertyName}</strong>.
            </p>
            <button 
              onClick={handleClose}
              className="w-full bg-[#c79b5d] text-white py-4 rounded-xl font-semibold hover:bg-[#b38a52] transition-all"
            >
              Back to Property
            </button>
          </div>
        ) : (
          /* ================= FORM VIEW ================= */
          <>
            <h2 className="text-2xl font-semibold mb-2">Request a Tour</h2>
            <p className="text-gray-500 text-sm mb-6">{propertyName}</p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input required type="text" placeholder="Full Name" className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#c79b5d]"
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
              
              <div className="grid grid-cols-2 gap-4">
                <input required type="email" placeholder="Email" className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#c79b5d]"
                  onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input required type="tel" placeholder="Phone" className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#c79b5d]"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 text-gray-400" size={16} />
                  <input required type="date" min={new Date().toISOString().split("T")[0]} value={formData.date} className="w-full p-3 pl-10 rounded-xl border border-gray-200 text-sm" onChange={handleDateChange} />
                </div>
                <div className="relative">
                  <Clock className="absolute left-3 top-3.5 text-gray-400" size={16} />
                  <input required type="time" value={formData.time} className="w-full p-3 pl-10 rounded-xl border border-gray-200 text-sm" onChange={(e) => setFormData({...formData, time: e.target.value})} />
                </div>
              </div>

              {error && <div className="p-3 bg-red-50 text-red-600 text-xs rounded-lg">{error}</div>}

              <button type="submit" disabled={loading} className={`w-full text-white py-4 rounded-xl font-semibold transition-all ${loading ? 'bg-gray-400' : 'bg-[#c79b5d] hover:bg-[#b38a52]'}`}>
                {loading ? "Sending..." : "Confirm Appointment"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}