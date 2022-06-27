import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { host } from '../../utils/fetch';

const EditCom = ({error, setError, setIsEditComp, compToEditId}) => {
    const [comp, setComp] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/com/'+compToEditId, {headers: {
                    'Authorization': sessionStorage.user
                }})
                const data = await resp.json();
                setComp(data);
                setLoading(false);
            }
        )()
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(host+'/com/'+compToEditId, {method: 'PUT', body: JSON.stringify(comp), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
        .then((res) => res.json())
        .then(res => {
          console.log(res);
            if (res.success) {
              window.location.reload()
            }else{
              setError(res.message)
            }
        })
        setLoading(false)
    }
    const handleCancel = () => {
      setIsEditComp(v => !v)
      setError('')
    } 
    return <div className="card login-card">
      <div className="card-head">
        <h1>Editer une competence</h1>
      </div>
      <form onSubmit={(e) => {handleUpdate(e)}}>
        <div className="card-content">
          <div className="field">
              <div className="label">Nom de la competence</div>
              <input type="text" value={comp.name} onChange={(e) => {setComp(val => {return {...val, name: e.target.value}})}} placeholder="Entrer un nom de competence valide" />
          </div> 
          <div className="field">
              <div className="label">Section</div>
              <select value={comp.section} onChange={(e) => {setComp(val => {return {...val, section: e.target.value}})}} className="form-control form-control-lg"
              placeholder="Enter password">
                  <option value={''}>--- Selectionner la section ----</option>
                  <option value="fr">Francophone</option>
                  <option value="en">Anglophone</option>
                  <option value="ma">Maternelle</option>
              </select>
          </div> 
  
          {
            error !== '' ? <div className="error">{error}</div> : ''
          } 
        </div>
        <div className="card-footer">
          <button className="btn btn-blue" type="submit">Enregistrer</button>
          <button onClick={() => {handleCancel()}} type="submit"> Fermer (Annuler)</button>
        </div>
        
      </form>
    </div>
}

export default EditCom;