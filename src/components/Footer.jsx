import footer from "./footer.module.css";
import samalyot from "./img/samalyot.png";

const Footer = () => {
  return (
    <div className={footer.body}>

      <div className={footer.left}>
        <h1>Contact</h1>

        <p>
          Want a website for your brand and business?<br />
          I design what you desire....
        </p>

        <img src={samalyot} alt="Paper plane" />
      </div>
      <div className={footer.right}>
        <label>Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />
        <label >Message</label>
        <textarea rows='6'></textarea>
        <button>Submit</button>

      </div>
    </div>
  );
};

export default Footer;