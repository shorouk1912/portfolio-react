import styles from "./Home.module.css";
import { FaEnvelope, FaWhatsapp, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <section className={styles.homeSection} id="home">
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.title}>Hi, I'm Shorouk Taha</h3>
          <h1>Web Developer | Front-End Developer</h1>
          <p className={styles.detail}>
            As a passionate and detail-oriented Junior Front-End Developer, I am
            actively seeking an internship or entry-level opportunity where I
            can apply and grow my skills in building responsive and
            user-friendly web interfaces. With a solid foundation in HTML, CSS,
            and JavaScript, and hands-on experience with React, I’m eager to
            contribute to a collaborative development team and gain real-world
            experience on impactful projects. I’m quick to learn, highly
            adaptable, and motivated to continuously improve my craft by
            following best practices and modern standards in web development.
          </p>

          <div className={styles.socialLinks}>
            <a
              href="mailto:shorouktaha19121998@gmail.com"
              className={styles.socialBtn}
            >
              <FaEnvelope /> Send me an Email
            </a>

            <a
              href="https://wa.me/201032977116"
              className={styles.socialBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Contact me on WhatsApp
            </a>

            <a
              href="/She روق.pdf"
              className={styles.socialBtn}
              download
            >
              <FaDownload /> View My CV
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/Images/personal pic.jpg"
            alt="Shorouk"
            className={styles.profileImg}
          />
        </div>
      </div>
    </section>
  );
}
