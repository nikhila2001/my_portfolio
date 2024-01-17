import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function ContactForm() {
  const form = useRef();
  const [isValidated, setIsValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log("validated", isValidated);

    if (form.checkValidity() && validateEmail(form.elements.from_email.value)){
        sendEmail(e);
        console.log("Form validity:", form.checkValidity());
        console.log("Email validity:", validateEmail(form.elements.from_email.value));
    }else {
        setIsValidated(true);
    }
  }

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qm9vf2t",
        "template_qnw324v",
        form.current,
        "wwdv37MA4_ZDt6CVz"
      )
      .then(
        (result) => {
          console.log(result.text);
          // reset the from
          e.target.reset();
          // show the alert
          setShowAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

 

  return (
    <>
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Form submitted successfully!
        </Alert>
      )}
      <Form
        ref={form}
        onSubmit={handleSubmit}
        noValidate
        validated={isValidated}
        className="form-container p-5 border-0 rounded-3"
        id="contact"
      >
        <Form.Group controlId="formName">
          <Form.Label className="mt-4">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="from_name"
            required
            className="input-field"
          />
          {isValidated && <Form.Control.Feedback type="invalid"  >Please enter your name.</Form.Control.Feedback>}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className="mt-4">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="from_email"
            required
            className="input-field"
          />
          {isValidated && <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>}
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label className="mt-4">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            name="message"
            required
            className="input-field"
          />
          {isValidated && <Form.Control.Feedback type="invalid" >Please enter your message</Form.Control.Feedback>}
        </Form.Group>

        <Button
          className="d-block  submit-btn w-100 mt-4"
          type="submit"
          value="Send"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
