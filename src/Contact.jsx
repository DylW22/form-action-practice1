import { Form, redirect, useActionData } from "react-router-dom";
/*
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
*/


const Contact = () => {
    const data = useActionData();
    return (
        <div className="flex justify-center items-center h-screen">
            <Form
             className="bg-blue-300 w-1/2 p-8 rounded-lg shadow-md"
             method="post" action="/help/contact">
                <label className="block mb-4">
                    <span className="text-white font-bold text:xl">Email:</span>
                    <input className="mt-2 p-2 w-full border rounded-md" type="text" name="email" required/>
                </label>
                <label className="block mb-4">
                    <span  className="text-white font-bold text:xl">Message</span>
                    <textarea className="mt-2 p-2 w-full border rounded-md" type="text" name="message" required/>
                </label>
                <button className="bg-gray-300 py-2 px-4 rounded-full">Submit</button>
                {data && data.error && <p className="text-red-500 mt-2">{data.error}</p>}
            </Form>
        </div>
    )
}


export default Contact;

/*
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
*/

export const formAction = async ({request}) => {
    console.log("This is my requested data: ", request);
    const data = await request.formData();
    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }
    
    if(submission.message.length < 5){
        return({error: 'Message should be greater than 10 chars'})
    }
    return redirect('/')
}

















