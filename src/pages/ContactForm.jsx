import {Form, Button} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

function ContactForm() {
   const form = useRef();
   const [showAlert, setShowAlert] = useState(false);

   const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_qm9vf2t", "template_qnw324v",form.current,"wwdv37MA4_ZDt6CVz")
    .then((result) => {
        console.log(result.text);
        // reset the from
        e.target.reset();
        // show the alert
        setShowAlert(true);
      

    }, (error) => {
        console.log(error.text);
    });
   }

    return (
        <>
        {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible >Form submitted successfully!</Alert>
        )}
        <Form ref={form} onSubmit={sendEmail} className="p-5 border-0 rounded-3" style={{backgroundColor:"#01497C", color:"#89C2D9",boxShadow:"0 8px 32px #012A4A"}}>
        <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter your name"
            name="from_name" 
            className="mb-4"
            />
        </Form.Group>

        <Form.Group controlled="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            type="email"
            placeholder="Enter your email"
            name="from_email"
            className="mb-4"
            />
        </Form.Group>

        <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            name="message"
            className="mb-4"
            />
        </Form.Group>

        <Button className="d-block btn btn-outline-info w-100"  type="submit" value="Send">Submit</Button>
        </Form>
        </>
        
    )
}

export default ContactForm;