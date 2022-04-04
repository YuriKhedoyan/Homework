import "./style/style.css"
import { useState } from "react";

const Form = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  function reset(e) {
    e.preventDefault();

    setError1("");
    setError2("");
    setError3("");
    setLogin("");
    setPassword("");
    setEmail("");
    setCheckbox1(false);
    setCheckbox2(false);
    
  }

  function save(e) {
    e.preventDefault();

    if(login.indexOf(' ') >= 0 || login === "") {
      setError1("Please write login");
    } else {
      setError1("");
    }

    if(password.indexOf(' ') >= 0 || password === "") {
      setError2("Please write Password");
    } else {
      setError2("");
    }

    if(email.indexOf(' ') >= 0 || email === "") {
      setError3("Please write email");
    } else {
      setError3("");
    }
    if( (login.indexOf(' ') <= 0) && (password.indexOf(' ') <= 0) && (email.indexOf(' ') <= 0) ) {
      alert("succses");
      
      setError1("");
      setError2("");
      setError3("");
      setCheckbox1(false);
      setCheckbox2(false);

      setLogin("");
      setPassword("");
      setEmail("");
    }
}
  

  return(
    <>
      <form align="center">
        <label htmlFor="login">Login</label>
        <input type="text" id="login" className="text" value= {login} onChange={event => setLogin(event.target.value)}/>
        <p className="error">{error1}</p>
        <br></br>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="text" value= {password} onChange={event => setPassword(event.target.value)}/>
        <p className="error">{error2}</p>
        <br></br>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="text" value= {email} onChange={event => setEmail(event.target.value)}/>
        <p className="error">{error3}</p>
        <br></br>
        <input type="checkbox" className="checkbox" checked={checkbox1} onClick={event => setCheckbox1(!checkbox1)}/>Send me notification
        <br></br>
        <input type="checkbox" className="checkbox" checked={checkbox2} onClick={event => setCheckbox2(!checkbox2)}/>Remeber me
        <br></br>
        <input type="reset" value="Reset" id="reset" onClick={reset} />
        <input type="submit" value="Save" id="save" onClick={save} />
      </form>
    </>
  )
};

export default Form;