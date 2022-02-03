import { useActionData, useTransition, Form } from "remix";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9vu0v1l",
        "template_h1565se",
        form.current,
        "user_kvieQsDGY538Pkqyxt9JA"
      )
      .then(
        (result) => {
          alert("Your email has sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Your email has failed to send.");
          console.log(error.text);
        }
      );
  };
  const transition = useTransition();

  const actionData = useActionData();

  return (
    <>
      <div>
        <h1>Send me a message</h1>
        <Form className="form-control" ref={form} onSubmit={sendEmail}>
          <label>
            Your name: <input type="text" name="from_name" id="from_name" />
          </label>
          <label>
            Your email: <input type="email" name="reply_to" id="reply_to" />
          </label>
          <label>What would you like to say? </label>
          <textarea name="message" name="message" id="message"></textarea>

          <input
            type="submit"
            className="btn btn-block"
            id="button"
            value="Send Email"
          />
        </Form>
      </div>
    </>
  );
}
