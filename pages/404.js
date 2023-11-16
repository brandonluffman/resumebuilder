import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Custom404 = () => {
  return (
    <div>
        <Navbar />
        <div className="four-container">
            <div className="four-div">
        <h1 className="four-header">404</h1>
        <h2 className="four-subheader">We can&apos;t seem to find the page you&apos;re looking for.</h2>
        <Link href='/'><button type='button' className="four-btn">Back Home?</button></Link>
        </div>
        </div>
        <Footer />
        </div>
  );
};

export default Custom404;