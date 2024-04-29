import React from "react";

const WhatsAppLink = ({ message }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/+77717488223?text=${encodedMessage}`;
  
  return (
    <button
      className="btn btn-secondary"
      onClick={() => window.open(whatsappUrl, "_blank")}
    >
      Записаться на демо
    </button>
  );
};

export default WhatsAppLink;
