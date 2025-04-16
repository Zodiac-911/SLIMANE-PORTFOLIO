import "./styles.css";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-text">
          {" "}
          <h1>📬 Contact</h1>
          <p>
            Let’s connect! Whether you’re interested in working together, have a
            question, or just want to chat about creative ideas — I’m always
            open to new conversations.
          </p>
          <p>
            I believe great things happen when passionate people come together.
            So if you’ve got a project in mind, need a fresh perspective, or
            simply want to say hello, don’t hesitate to reach out.
          </p>
          <p>
            You can use the form below or contact me directly at
            zodiacmadafac911@gmail.com. I’ll get back to you as soon as possible
            — usually within a day or two!
          </p>
          <p>Looking forward to hearing from you.</p>
        </div>
        <div className="contact-img">
          <a
            className="whatsapp"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=213540829011"
          ></a>
          <a
            className="instagram"
            target="_blank"
            href="https://www.instagram.com/zodiacc911/"
          ></a>
          <a
            className="facebook"
            target="_blank"
            href="https://www.facebook.com/sliman.boudjelida"
          ></a>
        </div>
      </div>
    </>
  );
}

export default Contact;
