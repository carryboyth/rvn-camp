
const LocationMap = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Find Us Here</h2>
      <div className="aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.3558040670387!2d100.84770147475835!3d13.619845586857763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d60dd168e9c15%3A0x40ec1b3e7dfa8f0!2sT.K.D.%20Fiber%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sth!4v1710848947954!5m2!1sen!2sth"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
