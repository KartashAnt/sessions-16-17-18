import React, {useState} from 'react';

const RegisterForm = () => {

    const initialCredsentials={
        user:'',
        name:'',
        email:'',
        pass:''
    }

    const [credentials, setCredentials] = useState(initialCredsentials);

    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
