import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I am located in Austria, currently living in Vienna where I am
              attending the UpLeveled.io Bootcamp starting vrom 24th of April
              until 18th of July.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
