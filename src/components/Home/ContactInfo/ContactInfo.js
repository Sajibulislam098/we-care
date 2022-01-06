import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ContactInfo = () => {
    return (
        <Container className='my-5'>
            <h2 className="pb-3">
                Our Address <hr />
            </h2>
            <Row>
                <Col className='pe-md-5' xs={12} md={6}>
                    <iframe title='direction-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.0554268985397!2d90.38140601534762!3d22.464551342588468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aacf2fe39e501f%3A0xec70c954a51b0386!2sPatuakhali%20Science%20%26%20Technology%20University%20(PSTU)!5e0!3m2!1sen!2sbd!4v1641180815406!5m2!1sen!2sbd" width="100%" height="350" style={{ border: '0', boxShadow: '0px 0px 11px 2px rgb(0 0 0 / 50%)' }} allowFullScreen="" loading="lazy"></iframe>
                </Col>
                <Col xs={12} md={6}>
                    <h2>Get In Touch</h2>
                    <address>
                        <h4 className='pt-3'>Location</h4>
                        <p>We Secure LTD., <br /> Badda,Dhaka,Bangladesh</p>
                        <h4 className='pt-3'>Contact</h4>
                        <p>Email: <a href="mailto:xyz@gmail.com">sajibul.islam098@gmail.com</a></p>
                        <p>Phone: <a href="tel: +8801926294263">+8801863367992</a></p>
                    </address>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactInfo;