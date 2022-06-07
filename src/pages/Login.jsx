import React, {useState} from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('')
    const [emailPassword, setPasswordError] = useState('')

    const handleEmailChange = (event)=>{
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();

        if(!email){
            setEmailError('Pleae provide Email');
            return
        }else{
            setEmailError('')
        }
        if(!password){
            setPasswordError('Please provide password');
            return
        }else{
            setPasswordError('')
        }
        console.log(email, password)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
        <div className="row mb-3">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="email" onChange={handleEmailChange} className="form-control" id="email"/>
                <p style={{color:'red'}}>{emailError}</p>
            </div>
        </div>
        <div className="row mb-3">
            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password" onChange={handlePasswordChange} className="form-control" id="password"/>
                <p style={{color:'red'}}>{emailPassword}</p>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
    <div></div>
    </>
  )
}

export default Login