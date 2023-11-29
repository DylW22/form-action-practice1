import { Form, useActionData } from "react-router-dom"
import { redirect } from "react-router-dom";
const SignUp = () => {
    const data = useActionData();

    console.log(data)

    return (

        <div>
            <p>Sign up form</p>
            <Form method="post" action="/signup">
                <label><span>Username</span>
                    <input type="text" name="username" />
                </label>
                <label><span>Email</span>
                    <input type="text" name="email" />
                </label>
                <label><span>Password</span>
                    <input type="text" name="password"/>
                </label>
                <button>Submit</button>
                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>

    )
}

export default SignUp


export const AccessFormData = async ({request}) => {
    const data = await request.formData();
    const newUser = {
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password')
    }
    
    if(newUser.username.length < 5){
        return({error: 'Username should be greater than 10 chars'})
    }

    return redirect('/')
}

/*
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


*/