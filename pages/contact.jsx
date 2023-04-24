import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              If you have any questions or would like to contact me, you can do
              so via:
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: david.ihl@gmx.at</li>
              <li className="contact-item">
                Twitter: https://www.twitter.com/david_ihl
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
