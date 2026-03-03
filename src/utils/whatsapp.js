export const generateWhatsAppLink = ({
  name,
  phone,
  service,
  date,
  time,
}) => {
  const clinicNumber = "919876543210"; // Replace with clinic number

  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 10 && hour < 19; // 10AM–7PM

  const message = isOpen
    ? `Hello Doctor, I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}
Preferred Time: ${time}`
    : `Hello Doctor, I would like to book an appointment (outside clinic hours).

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}
Preferred Time: ${time}

Please confirm availability.`;

  return `https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`;
};