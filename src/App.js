// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import your CSS file for styling
import profilePhoto from './profile-photo.jpg'; // Import the profile photo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLink, faExternalLinkAlt, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          {/* Profile photo */}
          <div className='phoy'>
            <img
              src={profilePhoto}
              alt="Profile"
              className="profile-photo"
            />
            <h1>Sarthak Ashok Chaudhari</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#research">Research-Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
              <p>
              I am an Electronics and Computer Engineer with a strong interest in learning and adapting to new challenges. I am looking for a career opportunity where I can use my skills and training to contribute to the success of a company. I enjoy working on projects related to software development, web development, and embedded systems. My knowledge of Japanese adds an international perspective to my work, helping me communicate and collaborate effectively in diverse settings.
              </p>
            </div>
          </section>
          <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-items">
              <div className="portfolio-item">
                <div className='link'>
                  <h3>Iris-Detection</h3>
                  <p>The Iris-Detection Project leverages deep learning to accurately detect and estimate iris positions in images. It involves two main phases: Data Collection and Iris Estimation. The Data Collection phase includes gathering and annotating images, followed by creating an augmented dataset to enhance model training. In the Iris Estimation phase, a convolutional neural network (CNN) with ResNet152V2 as the backbone is built and trained to predict iris positions. The project also features real-time detection using a webcam, enabling the model to identify and track the iris in live video feeds.</p>
                  <a href="https://github.com/Sarthak404/Iris-Detection/blob/main/IrisEstimation.ipynb">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>

              </div>
              <div className="portfolio-item">
                <h3>InfoHub Connect - Streamlining College Dynamics</h3>
                <p>Engineered a college management system with two dynamic Android applications using React Native and Firebase. Key features include a library management system with book search and reservations, real-time event notifications, seamless attendance tracking, digital live results, and updated placement opportunities, significantly enhancing operational efficiency and user engagement.</p>
                <h5>Consolation Prize in the 3rd National Level Project Competition</h5>
                <a href="https://github.com/Sarthak404/Infohub-Application">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
              <div className="portfolio-item">
                <h3>Database Management Project for Car Rental Services</h3>
                <p>Developed a highly responsive web application using ReactJS for the frontend and Firebase for backend services. Designed an intuitive user interface that enables customers to effortlessly browse available cars, select rental dates, and make seamless reservations. The application also features real-time car availability, enhancing user experience and operational efficiency.</p>
                <a href="https://github.com/Sarthak404/Car-Rental-Services">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
              <div className="portfolio-item">
                <h3>Ultrasonic Radar System For Military Drone Detection</h3>
                <p>
                  Developed a cutting-edge Ultrasonic Radar System tailored for military applications, focusing on the detection and tracking of drones and other objects. This project integrates ultrasonic sensors with an Arduino microcontroller to precisely measure the distance and angle of detected objects. The system's data is processed and visualized on a custom software interface, delivering real-time positional information. By enhancing surveillance capabilities, this cost-effective solution significantly improves security and situational awareness in critical environments.
                  (First Prize in Inter-department Project Competition)</p>
                <a href="#">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
              <div className="portfolio-item">
                <h3>IOT Project (Nirbhaya - Empowering Women's Safety)</h3>
                <p>Developed a cutting-edge safety system designed to empower women with enhanced security. Integrates GPS technology, GSM service, and a stun gun mechanism for comprehensive personal safety. Features a panic button for sending live location via SMS and a self-defense mechanism for protection. Aims to revolutionize women's safety with a versatile and adaptable solution.</p>
                <a href="#">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </section>
          <section id="research">
            <h2>Research Work</h2>
            <div className="research-items">
              <div className="research-item">
                <h3>DESIGN OF BLOCKCHAIN MODELS FOR THE IDENTIFICATION OF HARMFUL ATTACK ACTIVITIES IN INDUSTRIAL INTERNET OF THINGS (IIOT)</h3>
                <p>2023 4th International Conference on Computation, Automation and Knowledge Management (ICCAKM)</p>
                <p>Year: 2023 | Conference Paper | Publisher: IEEE</p>
                <a href="https://ieeexplore.ieee.org/document/10449607">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
              <div className="research-item">
                <h3>An Approach for Securing Data Access with Blockchain Technology and Machine Learning</h3>
                <p>2023 4th International Conference on Computation, Automation and Knowledge Management (ICCAKM)</p>
                <p>Year: 2023 | Conference Paper | Publisher: IEEE</p>
                <a href="https://ieeexplore.ieee.org/document/10449630">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
              <div className="research-item">
                <h3>Spectral-Spatial Deep Learning for Multispectral Enhanced Image Classification and Analysis</h3>
                <p>2023 4th International Conference on Computation, Automation and Knowledge Management (ICCAKM)</p>
                <p>Year: 2023 | Conference Paper | Publisher: IEEE</p>
                <a href="https://ieeexplore.ieee.org/document/10449548">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
              <div className="research-item">
                <h3>Exploring the Relationship between Internet of Things and 6G Networks: A Review</h3>
                <p>(Strad Research, Volume 10, Issue 9, September)</p>
                <p>Year: 2023 | UGC Care Group 2 Journal | Web of Science Group | ISSN: 0039-2049</p>
                <a href="https://drive.google.com/file/d/1TmGnz5HsnTra8E8wwRhgyqOCFTlC_ZCT/view?usp=sharing">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </section>
          <section id="contact">
            <h2 className='contitile'>Contact Me</h2>
            <div className="contact-info">
              <p><strong>Mail:</strong> chaudharisarthak10@gmail.com</p>
              <p><strong>Mobile No.:</strong> +917083438379</p>
              <div className="contact-buttons">
                <a href="mailto:chaudharisarthak10@gmail.com" className="btn btn-email">
                  Email Me
                </a>
                <a href="https://wa.me/917083438379" className="btn btn-whatsapp">
                  WhatsApp Me
                </a>
              </div>
            </div>
            <ContactForm />
          </section>

        </main>
        <footer>
        <div className='picon'>
            <a href="https://github.com/Sarthak404">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a href="http://linkedin.com/in/sarthak--chaudhari">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Sarthak Ashok Chaudhari. All rights reserved.</p>
          

        </footer>
      </div>
    );
  }
}

class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <h2 className='contitile'>Contact</h2>
        <form className="contact-form" action="mailto:chaudharisarthak10@gmail.com" method="post" enctype="text/plain">
          <div className="form-group">
            <label >Your Name:</label>
            <input type="text" name="My Name" />
          </div>
          <div className="form-group">
            <label>Your Email:</label>
            <input type="email" name="My Email" />
          </div>
          <div className="form-group">
            <label>Your Message:</label>
            <textarea name="My Message" cols="30" rows="5"></textarea>
          </div>
          <div className="form-group">
            <input type="reset" className="btn1" value="Clear" />
            <input type="submit" className="btn" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
