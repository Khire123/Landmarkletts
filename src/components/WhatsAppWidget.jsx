import { useState } from "react";
import "./whatsapp.css";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "917039376721";
  const message =
    "Hi, I'm interested in your services. Can you share more details?";

  const handleSend = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-container">
      {open && (
        <div className="whatsapp-box">
          
          {/* HEADER */}
          <div className="wa-header">
            <div>
              <strong>Landmarklets</strong>
              <p>Typically replies within minutes</p>
            </div>
            <span onClick={() => setOpen(false)}>✕</span>
          </div>

          {/* BODY */}
          <div className="wa-body">
            <div className="wa-message">
              👋 Hello! <br />
              We're here to assist you with service inquiries, support,
              or any other queries. <br />
              How may we help you?
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="wa-footer">
            <button onClick={handleSend}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="wa"
              />
              WhatsApp Us
            </button>
          </div>
        </div>
      )}

      {/* FLOATING ICON */}
      <div className="whatsapp-icon" onClick={() => setOpen(!open)}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </div>
    </div>
  );
};

export default WhatsAppWidget;