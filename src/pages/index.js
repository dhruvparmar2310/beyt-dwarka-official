import { Courgette } from "next/font/google";
import Hero from "./shared/components/Hero";
import {motion} from 'framer-motion'
import { Col, Row, Table } from "react-bootstrap";
import aboutUs from '../../public/assets/images/gallery/images/about-us.jpeg'
import aboutUs2 from '../../public/assets/images/1000303360.jpg'
import Image from "next/image";
import dynamic from "next/dynamic";

const Courgette_Font = Courgette({ subsets: ['latin'], weight: ['400'] })

  // Load component without SSR
const LordKrishnaCanvas = dynamic(() => import("./shared/components/LordKrishnaCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Hero />

      <section className='about-section'>
        <div className='container'>
          <div className='inner-content'>
            <h1 className={`sectionTitle wow animate__animated animate__fadeIn animate-slow ${Courgette_Font?.className}`}>Temple Timing</h1>

              <Row className="about-content">
                <Col xxl={6} xl={6} lg={6} md={12}>
                  <div className="image-content wow animate__animated animate__fadeIn animate-slow">
                    <Image src={aboutUs} alt="about-us image" quality={100} className="img-fluid" />
                  </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12}>
                  <div className='timing'>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Temple Open</th>
                          <th className='text-end'>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Morning Darshan</td>
                          <td>6:30 AM  - 12:30 PM</td>
                        </tr>
                        <tr>
                          <td>Evening Darshan</td>
                          <td>5:00 PM  - 9:30 PM</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Aarti Darshan</th>
                          <th>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mangala Aarti Darshan</td>
                          <td>6:30 AM</td>
                        </tr>
                        <tr>
                          <td>Shringar Aarti Darshan</td>
                          <td>10:30 AM</td>
                        </tr>
                        <tr>
                          <td>Raj Bhog Offering (Temporary Closes)</td>
                          <td>12:00 PM</td>
                        </tr>
                        <tr>
                          <td>Sandhya Aarti Darshan</td>
                          <td>7:30 PM</td>
                        </tr>
                        <tr>
                          <td>Shayan Aarti Darshan</td>
                          <td>8:30 PM</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </Row>
              <Row className="about-content">
                <Col xxl={6} xl={6} lg={6} md={12}>
                  <div className='timing'>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Temple Open</th>
                          <th className='text-end'>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Morning Darshan</td>
                          <td>9:00 AM  - 1:00 PM</td>
                        </tr>
                        <tr>
                          <td>Evening Darshan</td>
                          <td>3:00 PM  - 6:00 PM</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12}>
                  <div className="image-content wow animate__animated animate__fadeIn animate-slow">
                    <Image src={aboutUs2} alt="about-us image" quality={100} className="img-fluid" />
                  </div>
                </Col>
              </Row>
              {/* <div>
                <LordKrishnaCanvas />
              </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
