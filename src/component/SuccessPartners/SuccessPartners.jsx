import "../SuccessPartners/SuccessPartners.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import item1 from '../../assets/Lc.jpg';
import item2 from '../../assets/Lacoste.jpg';
import item3 from '../../assets/defacto.jpg';
import item4 from '../../assets/shein.jpg';


export default function SuccessPartners() {
  const partners = [
        {img:item1,name:"ال سي واكيكي"}, 
       {img:item2,name:"لاكوست"}, 
      {img:item3,name:"دي فاكتو"}, 
       {img:item4,name:"شي ان"}, 
  ];

  return (
    <section className="partners-section mt-5 ">
      <h2 className="partners-title text-dark d-flex justify-content-start px-5 mx-5">شركاء النجاح</h2>

      <div className="partners-grid ">
        {partners.map((item, index) => (
<div className="partner-card" key={index}>
  <div className="partner-logo">
    {item.img ? (
      <img src={item.img} alt={item.name} />
    ) : (
      <span className="partner-icon">{item.icon}</span>
    )}
  </div>
  <p>{item.name}</p>
</div>

        ))}
      </div>
    </section>
  );
}
