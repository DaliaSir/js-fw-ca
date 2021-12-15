import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required").min(3, "Name must be at least 3 characters"),
  lastName: yup.string().required("Last name is required").min(4, "Name must be at least 4 characters"),
  email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
  message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
  subject: yup.string().required("Please select the subject"),
});

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => console.log(data);

  return (
    <div className="contact-container__form">
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Form.Group className="mb-3 contact-container__form--form-group" >
          <Form.Label>First Name</Form.Label>
          <input {...register("firstName")} className="form-control" placeholder="Your first name" />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 contact-container__form--form-group" >
          <Form.Label>Last Name</Form.Label>
          <input {...register("lastName")} className="form-control" placeholder="Your last name" />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 contact-container__form--form-group" >
          <Form.Label>Email</Form.Label>
          <input {...register("email")} className="form-control" placeholder="Your email address" />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 contact-container__form--form-group" >
          <Form.Label>Subject</Form.Label>
          <Form.Select {...register("subject")}>
            <option value="">Choose a subject..</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            {errors.subject && <span>{errors.subject.message}</span>}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 contact-container__form--form-group" >
          <Form.Label>Message</Form.Label>
          <textarea rows={6} {...register("message")} className="form-control" placeholder="Your message" />
          {errors.message && <span>{errors.message.message}</span>}
        </Form.Group>
        <button className="btn btn-primary">Send</button>
      </Form>
    </div>
  );
}

export default ContactForm;