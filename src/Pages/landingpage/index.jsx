import CanvasAnimation from "../../components/canva";
import "../landingpage/styles.css";
import first from "../../assets/Sun energy-pana (1).png";
import sec from "../../assets/Sun energy-amico.png";
import thi from "../../assets/Sun energy-bro.png";
import designer from "../../assets/contactusimg.jpg";
import four from "../../assets/Sun energy-rafiki.png";
import fif from "../../assets/Environmental audit-pana.png";
import { FaFacebookSquare } from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import { TiLocation } from "react-icons/ti";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import "./styles.css";
import { useState } from "react";
import axios from "axios";
export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
console.log(formData,"formmmmmdattaa")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Us Form Submission</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                padding: 20px;
            }
            .content {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #489A1A;
                text-align: center;
            }
            p {
                font-size: 16px;
                line-height: 1.5;
                color: #333333;
            }
            .field-label {
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <h2>Contact Us Form Submission</h2>
                <p><span class="field-label">Name:</span> ${formData.name}</p>
                <p><span class="field-label">Email:</span> ${formData.email}</p>
                <p><span class="field-label">Phone:</span> ${formData.phone}</p>
                <p><span class="field-label">Message:</span> ${formData.message}</p>
            </div>
        </div>
    </body>
    </html>
    `;
console.log(htmlContent,"htmlContent")
    try {
      const response = await axios.post("http://192.168.2.112:10587/ggexcel",{htmlContent},{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(response.data);
      // Handle success (e.g., show a success message, clear the form, etc.)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <section
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-offset="0"
      className="scrollspy-example section banner banner-section"
      tabindex="0"
    >
      <div id="home" className="first-section">
        <CanvasAnimation />
      </div>
      {/* <section id="scrollspyHeading2" style={{marginTop:"-6rem"}} className="section banner banner-section"> */}
      {/* ABOUT SECTION */}
      <div id="about-us" style={{ paddingTop: "7rem" }} className="backimg">
        {/* <h2 style={{borderRadius:"1rem",textAlign:"center", paddingBottom:"0.5rem",color:"black"}}>About Us</h2> */}
        <div className="container" style={{ padding: 0 }}>
          <div className="row">
            <div className="col-12">
              <div>
                <div className="">
                  <h2 className="h2-img">
                    IntelliGrid provides Business-to-Business and Peer-to-Peer
                    Energy Trading and Distribution Systems and Services.
                  </h2>
                </div>
                <ul
                  className="ul-line back-content"
                  style={{ textAlign: "left" }}
                >
                  <li className="h2-img">
                    Energy Trading and Distribution from Independent Power
                    Producers IPP (Solar and Wind Farms, Hydroelectric Plants)
                    to Retail Energy Suppliers RES and Commercial Customers
                    (Business-to-Business)
                  </li>
                  <li className="h2-img">
                    Energy Trading and Distribution at the Microgrid level and
                    Trading among Peers (Peer-to-Peer)
                  </li>
                  <li className="h2-img">
                    Battery Storage Logic and Optimisation
                  </li>
                  <li className="h2-img">State-of-the-art Cybersecurity</li>
                  <li className="h2-img">Data protection and privacy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="services"
        style={{ paddingTop: "7rem" }}
        className="container text-center"
      >
        {/* <h2 style={{background:"#449c18",textAlign:"center", borderRadius:"1rem", color:"#ffff", paddingBottom:"0.5rem"}}>Services</h2> */}
        {/* FIRST SECTION */}
        <div className="row wrapper-res">
          <div className="col ">
            <img src={thi} className="service-img" />
          </div>
          <div className="col cotent-center">
            <div className="row">
              <div className="myBox">
                <h2> Green Energy Trading and Distribution</h2>
              </div>
              <ul className="ul-line">
                <li>
                  Certified Green Energy Tokens follows the electricity
                  throughout its lifecycle. Production Distribution Storage
                  Consumption
                </li>
                <li>
                  Fully auditability and traceability of Green Energy units
                  throughout lifecycle{" "}
                </li>
                <li>
                  Hardware integration directly into Smart Meter technology
                </li>
                <li>
                  Fully auditability and traceability of Green Energy units
                  throughout lifecycle{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* SECOND SECTION */}
        <div className="row wrapper-res1">
          <div className="col cotent-center">
            <div className="row">
              <div className="myBox">
                <h2>Carbon Credits Certification and Trading</h2>
              </div>
              <ul className="ul-line">
                <li>
                  We quantify and certify carbon emissions and credits a the
                  point of renewable energy production
                </li>
                <li>
                  Carbon Credit Tokens can traded locally or cross-boarder
                </li>
              </ul>
            </div>
          </div>
          <div className="col ">
            <img src={sec} className="service-img" />
          </div>
        </div>
        {/* THIRD SECTION */}
        <div className="row wrapper-res">
          <div className="col ">
            <img src={fif} className="service-img" />
          </div>
          <div className="col cotent-center">
            <div className="row">
              <div className="myBox">
                <h2>ESG/CSR Reporting</h2>
              </div>
              <ul className="ul-line">
                <li>
                  Report ESG/CSR indictors according to UN-SDG standards
                  (including GRI and SASB)
                </li>
                <li>
                  Data confidentiality – permissioning data to those who need to
                  know
                </li>
                <li>Fully auditable and traceable disclosures </li>
                <li>
                  3rd-Party validation and certification of ESG/CSR reports{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* FOURTH SECTION */}
        <div className="row wrapper-res1">
          <div className="col cotent-center">
            <div className="row">
              <div className="myBox">
                <h2> Asset Management</h2>
              </div>
              <ul className="ul-line">
                <li>
                  Certified Tokenisation of digital assets (eg. Smart Meters,
                  Inverters, Battery Storage)
                </li>
                <li>3rd-Part Audits and Certifications </li>
                <li>Valuation for financial services </li>
                <li>Maintenance and repair history</li>
                <li>Integration with Grid Network Topology</li>
              </ul>
            </div>
          </div>
          <div className="col ">
            <img src={four} className="service-img" />
          </div>
        </div>
        {/* FIFTH SECTION */}
        <div className="row wrapper-res">
          <div className="col ">
            <img src={first} className="service-img" />
          </div>
          <div className="col cotent-center">
            <div className="row">
              <div className="myBox">
                <h2> Real-time Energy and Carbon Auctions</h2>
              </div>
              <ul className="ul-line">
                <li>
                  Real-Time DLT based Auction for Carbon Certificates – locally
                  or cross-boarder
                </li>
                <li>
                  Real-Time DLT based Auction for Renewable Energy – Smart
                  Contract Auctions of digital-PPAs (Power Purchase Agreements)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" style={{ paddingTop: "7rem" }} className="containers">
        {/* <span className="big-circle"></span> */}
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            {/* <h3 className="title">Let's get in touch</h3> */}
            {/* <img src={designer} style={{height:"6rem", margin:"8rem 0 8rem 0"}} alt="" /> */}
            {/* <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
              </p>

              <div className="info">
                <div className="information">
                  <TiLocation />

                  <span>92 Cherry Drive Uniondale, NY 11553</span>
                </div>
                <div className="information">
                  <BiSolidMessageDetail />
                  <span>lorem@ipsum.com</span>
                </div>
                <div className="information">
                  <FaPhone />
                  <span>123-456-789</span>
                </div>
              </div>

              <div className="social-media">
                <div className="social-icons">
                  <a href="#">
                    <FaFacebookSquare />
                  </a>
                  <a href="#">
                    <VscTwitter />
                  </a>
                  <a href="#">
                    <RiInstagramFill />
                  </a>
                  <a href="#">
                    <ImLinkedin />
                  </a>
                </div>
              </div> */}
            {/* <img src={Designer} alt="" /> */}
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form onSubmit={handleSubmit} autocomplete="off">
              <div
                style={{ textAlign: "center", color: "white" }}
                className="myBox"
              >
                <h2> Contact Us</h2>
              </div>
              <div className="input-container">
                <input
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  className="input"
                />
                <span>Name</span>
              </div>
              <div className="input-container">
                <input
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input"
                />
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="input"
                />
                <span>Phone</span>
              </div>
              <div required className="input-container textarea">
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  name="message"
                  className="input"
                ></textarea>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" id="btn" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
