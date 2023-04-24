import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 data-cy="homePageTitle" className="title">
              Hello, my Name is David Ihl.
            </h1>
            <p className="description">
              This portfolio contains everything I worked on during my
              Upleveled.io Bootcamp.
            </p>

            <Link href="/contact" className="cta">
              Contact
            </Link>
          </div>

          <div className="image-wrapper">{/*Placeholder*/}</div>
        </div>
      </section>
    </>
  );
}

export default Home;
