import React ,{useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Signin() {
    let [username , setUsername] = useState(null);
    let [password , setPassword] = useState(null);
    let navigate = useNavigate()

    let submitHandler = (e)=>{
        e.preventDefault();
        if(username == password && username!= null){
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Logged in successfully')
            navigate('/orders')
         }
         else{
             alert('Enter username password must be same')
         }
    }
    useEffect(()=>{
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if (storedUsername && storedPassword) {
            setUsername(storedUsername);
            setPassword(storedPassword);
        }
    } ,[])

    return (
        <div className='sign-in-section' style={{width : '50%' , margin : '30px auto' , padding : '25px' , borderRadius : '14px', boxShadow : '3px 4px 5px black'}}>
            <h1 style={{fontFamily : 'monospace' , fontSize : '30px' ,textAlign : 'center'}}>Sign in</h1>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{fontFamily : 'monospace'}}>
                        username
                    </label>
                    <input style={{width : '70%'}}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={username}
                        placeholder='enter any characters'
                        onChange={(e)=>{
                          setUsername(e.target.value)
                        }} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{fontFamily : 'monospace'}}>
                        Password
                    </label>
                    <input style={{width : '70%'}}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password} 
                        placeholder='password must be same as username'
                        onChange={(e)=>{
                            setPassword(e.target.value)
                          }} 
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>

        </div>
    )
}

export default Signin