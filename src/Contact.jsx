import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
    const data = useActionData();

    return (
        <div>
            <Form method="post" action="/help/contact">
                <label>
                    <span>Your email:</span>
                    <input type="text" name="email" required/>
                </label>
                <label>
                    <span>Your message</span>
                    <textarea type="text" name="message" required/>
                </label>
                <button>Submit</button>
                {data && data.error && <p>{data.error}</p>}
            </Form>
        
        </div>
    )
}

export default Contact;


export const formAction = async ({request}) => {
    console.log("This is my data request: ", request);
    const data = await request.formData();
    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }
    if(submission.message.length < 10) {
        return({error: 'Message should be greater than 10 chars'})
    }
    return redirect('/')
}
