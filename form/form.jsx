import "./style/style.css"
import { useState } from "react";

const App = () => {

  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  function save(e) {
    e.preventDefault();
    
    if((login !== "" && login !== " ") && (password !== "" && password !== " ") && (email !== "" && email !== " ")) {
      alert("succses");
      document.getElementsByClassName("error")[0].style.display = 'none';
      document.getElementsByClassName("error")[1].style.display = 'none';
      document.getElementsByClassName("error")[2].style.display = 'none';
      setLogin("");
      setPassword("");
      setEmail("");
    }
    if(login === "" || login === " ") {
      document.getElementsByClassName("error")[0].style.display = 'block';
    }
    if(password === "" || password === " ") {
      document.getElementsByClassName("error")[1].style.display = 'block';
    }
    if(email === "" || email === " ") {
      document.getElementsByClassName("error")[2].style.display = 'block';
    }
  }

  function reset(e) {
    e.preventDefault();
    setLogin("");
    setPassword("");
    setEmail("");
  }

  return(
    <form align="center">
      <label htmlFor="login">Login</label>
      <input type="text" id="login" className="text" value = {login} onChange={event => setLogin(event.target.value)}/>
      <p className="error">Please write Login</p>
      <br></br>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" className="text" value = {password} onChange={event => setPassword(event.target.value)}/>
      <p className="error">Please write Password</p>
      <br></br>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" className="text" value = {email} onChange={event => setEmail(event.target.value)}/>
      <p className="error">Please write email</p>
      <br></br>
      <input type="checkbox" defaultChecked="true" />Send me notification
      <br></br>
      <input type="checkbox" defaultChecked="true" />Dont log out
      <br></br>
      <input type="reset" value="Reset" id="reset" onClick={reset} />
      <input type="submit" value="Save" onClick={save} id="save"/>
    </form>
  )
};

export default App;
