import "./index.css";
import Location from "../../Images/location.JPG";

const ContactSection = () => (
  <div>
    <h1 className='contact-section-heading'>My Contact</h1>
    <img className='location-image' src={Location} alt='location-map' />
    <p className='contact-section-description'>
      I have been looking for a new Oppurtunity where I can utilize my skills
      and learn new techs and trends in the market. If you like my profile,
      Please do contact me. Thank you!!
    </p>
    <p className='contact-details'>Please Contact:</p>
    <p className='mobile-number'>9010433267</p>
    <p
      className='email'
      onClick={(e) => {
        window.location = "mailto:mallula9010@gmail.com";
        e.preventDefault();
      }}
    >
      mallula9010@gmail.com
    </p>
  </div>
);

export default ContactSection;
