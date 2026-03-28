import { useState } from "react";
import "./whatsapp.css";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);

  // ✅ UPDATED NUMBER (with country code)
  const phoneNumber = "917039376721";

  // ✅ UPDATED DEFAULT MESSAGE
  const message = "Hi, I'm interested in your services. Can you share more details?";

  const handleSend = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-container">
      {open && (
        <div className="whatsapp-box">
          <div className="whatsapp-header">
            <p>Chat with us</p>
            <span onClick={() => setOpen(false)}>✕</span>
          </div>

          <div className="whatsapp-body">
            <p>Hello 👋</p>
            <p>How can we help you?</p>
          </div>

          <button className="whatsapp-btn" onClick={handleSend}>
            Start Chat
          </button>
        </div>
      )}

      <div className="whatsapp-icon" onClick={() => setOpen(!open)}>
        💬
      </div>
    </div>
  );
};

export default WhatsAppWidget;