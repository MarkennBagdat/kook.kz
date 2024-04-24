import React from 'react';

function DemoButton() {
  // The message to be sent
  const message = "Здравствуйте! Я бы хотел(а) записаться на демонстрацию продукта. Можем ли мы обговорить время и дату? Буду ждать вашего подтверждения. Спасибо!";
  // Encoding the message
  const encodedMessage = encodeURIComponent(message);
  // WhatsApp link with the phone number and encoded message
  const whatsappUrl = `https://wa.me/+77717488223?text=${encodedMessage}`;

  return (
    <button className="button-demo" onClick={() => window.open(whatsappUrl, '_blank')}>
      Записаться на демо
    </button>
  );
}

export default DemoButton;
