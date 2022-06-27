import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { host } from '../../utils/fetch';
import AddSequence from "./AddSequence";

const EditSequence = () => {
    const {id} = useParams();
    const [sequence, setSequence] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/sequence/'+id, {headers: {
                    'Authorization': sessionStorage.user
                }})
                const data = await resp.json();
                setSequence(data);
                setLoading(false);
            }
        )()
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(host+'/sequence/'+id, {method: 'PUT', body: JSON.stringify(AddSequence), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
        .then((res) => res.json())
        .then(res => {
          console.log(res);
            if (res.success) {
              navigate('/class');
            }else{
              setError(res.message)
            }
        })
        setLoading(false)
    }
    return <section style={{marginTop: '40px'}}>
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={(e) => {handleUpdate(e)}}>
            <h1>Editer la {sequence.name} </h1>
            <div className="form-outline mb-4">
              <input type="text" value={sequence.name} onChange={(e) => {setSequence(val => {return {...val, name: e.target.value}})}}  id="form3Example3" className="form-control form-control-lg"
                placeholder="Nom de la sequence" />
              <label className="form-label" htmlFor="form3Example3">Nom de la sequence</label>
            </div>
            {
              error === '' ? <></> : <div style={{marginTop: '30px'}} className="alert alert-danger">{error}</div>
            }
            {
              success === '' ? <></> : <div style={{marginTop: '30px'}} className="alert alert-success">{success}</div>
            }
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>{loading ? 'Ajout...' : 'Modifier la sequence'}</button>
              <p className="small fw-bold mt-2 pt-1 mb-0"> <Link to="/class"
                  className="link-danger">Annuler ?</Link></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
  </section>
}

export default EditSequence;