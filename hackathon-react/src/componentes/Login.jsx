import React from 'react';

class Login extends React.Component {
  state = {
    user: '',
    password: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  onSubmit = async () => {

    var data = JSON.stringify({
  	"user" : "user1",
  	"password" : "password1"
    });
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "/hackathon");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("token", localStorage.getItem("token"));
    xhr.send(data);

    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200) {
          var token = xhr.getResponseHeader("authorization");
          localStorage.setItem('token', token);
          console.log(token);
      }else if (xhr.status === 404){
        console.log(xhr.responseText);
        console.log(xhr.statusText);

      }else{
        console.log("la peticion  http no funciona");
        console.log(xhr.statusText)
      }

      }

    }






  render(){
    return(
      <div>
        <h1>LOGIN</h1>
        <input
          name='user'
          placeholder='user'
          onChange={e => this.onChange(e)}
          value={this.state.user} />
        <input
          name='password'
          placeholder='Password'
          onChange={e => this.onChange(e)}
          value={this.state.password} />
        <br/>
        <button onClick={() => this.onSubmit()} type="primary">Login</button>
      </div>
    )
  }





}
export default Login;
