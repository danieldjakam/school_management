import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    agree: false
  })
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch('http://localhost:4000/users/register', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}})
      .then((res) => res.json())
      .then(res => {
        if (res.success) {
          navigate('/login');
        }else{
          console.log(res.message);
          setError(res.message)
        }
      })
      setLoading(false)
  }
    return <section style={{marginTop: '40px'}}>
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample image" />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={(e) => {handleRegister(e)}}>
            <h1>Sign up</h1>
            <div className="form-outline mb-4">
              <input type="text" value={data.username} onChange={(e) => {setData(val => {return {...val, username: e.target.value}})}} id="form3Example3ds" className="form-control form-control-lg"
                placeholder="Enter your username" />
              <label className="form-label" htmlFor="form3Example3ds" >Username</label>
            </div>
            <div className="form-outline mb-4">
              <input type="text" value={data.email} onChange={(e) => {setData(val => {return {...val, email: e.target.value}})}} id="form3Example3dsa" className="form-control form-control-lg"
                placeholder="Enter a valid email address" />
              <label className="form-label" htmlFor="form3Example3dsa">Email address</label>
            </div>
            <div className="form-outline mb-3">
              <input type="password" value={data.password} onChange={(e) => {setData(val => {return {...val, password: e.target.value}})}} id="form3Example4d" className="form-control form-control-lg"
                placeholder="Enter password" />
              <label className="form-label" htmlFor="form3Example4d">Password</label>
            </div>
            <div className="form-outline mb-3">
              <input type="password" value={data.confirm} onChange={(e) => {setData(val => {return {...val, confirm: e.target.value}})}} id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" />
              <label className="form-label" htmlFor="form3Example4">Confirm password</label>
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-0">
                <input  className="form-check-input me-2" type="checkbox" checked={data.agree} onChange={(e) => {setData(val => {return {...val, agree: !val.agree}})}} id="form2Example3" />
                <label className="form-check-label" htmlFor="form2Example3">
                  I agree the terms
                </label>
              </div>
            </div>
            {
              error === '' ? <></> : <div style={{marginTop: '30px'}} className="alert alert-danger">{error}</div>
            }
            <div className="text-center text-lg-start mt-4 pt-2">
              {
                data.agree ? <button type="submit" className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>{loading ? 'Enregistrement...' : 'Enregistrer'}</button> : <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem', background: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(0, 0, 0, 0.5)', cursor: 'default'}}>{loading ? 'Enregistrement...' : 'Enregistrer'}</button>
              }
              <p className="small fw-bold mt-2 pt-1 mb-0">Have an account? <Link to="/login"
                  className="link-danger">Login</Link></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
  </section>
}

export default Register;