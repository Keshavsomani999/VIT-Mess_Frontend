import React,{useState} from 'react'
import "./Login.css"
import axios from 'axios'

const Login = () => {

const [loginData, setLoginData] = useState({
  username:"",
  password:"",
})

const loginChange = (e) => {
  setLoginData({ ...loginData, [e.target.name]: e.target.value });
};



const loginHandler = async(e) =>{
  e.preventDefault();
  if (loginData.username === "Admin" && loginData.password ==="admin") {
    console.log("001");
    await axios.get("https://vit-mess-backend.vercel.app/api/v1/admin", { responseType: 'blob'}).then((response) => {
      // Create a temporary anchor element to trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      console.log("002");
      a.href = url;
      a.download = 'Students.xlsx';
      document.body.appendChild(a);
      a.click();
      a.remove();
      console.log("003");
    })
    .catch((error) => {
      console.error(error);
      alert('Download failed. Please try again later.');
    });
  }



}

  return (
    <div className='adminLogin'>
        <form class="login-form" onSubmit={loginHandler}>
  {/* <h1>Login</h1> */}
  
  <div class="form-input-material">
    <input type="text" name="username" onChange={loginChange} value={setLoginData.username} id="username"  placeholder=" " autocomplete="off" class="form-control-material" required />
    <label for="username">Username</label>
  </div>
  <div class="form-input-material">
    <input type="password" name="password" onChange={loginChange} value={setLoginData.password} id="password" placeholder=" " autocomplete="off" class="form-control-material" required />
    <label for="password">Password</label>
  </div>
  <button type="submit" class="btn btn-primary btn-ghost">Download</button>
</form>
    </div>
  )
}

export default Login