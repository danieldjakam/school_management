import { useState } from "react";
import React from 'react'
import { host } from "../../utils/fetch";

const AddClass = ({ error, setError, setIsAddClass}) => {

  const [data, setData] = useState({
    name: '',
    section: 'fr',
    level: 1
  })
  const [loading, setLoading] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(host+'/class/add', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
      .then((res) => res.json())
      .then(res => {
        if (res.success) {
          setIsAddClass(v => !v)
          window.location.reload()
        }else{
          setError(res.message)
        }
      })
      setLoading(false)
  }

  const handleCancel = () => {
    setIsAddClass(v => !v)
    setError('')
  }
  return <div className="card login-card">
    <div className="card-head">
      <h1>Ajouter une classe</h1>
    </div>
    <form onSubmit={(e) => {handleAdd(e)}}>
      <div className="card-content">
        <div className="field">
            <div className="label">Nom de la classe</div>
            <input type="text" value={data.name} onChange={(e) => {setData(val => {return {...val, name: e.target.value}})}} placeholder="Entrer un nom de classe valide" />
        </div> 
        <div className="field">
            <div className="label">Niveau de la classe</div>
            <input type="number" value={data.level} onChange={(e) => {setData(val => {return {...val, level: e.target.value}})}} placeholder="Entrer un nom de classe valide" />
        </div> 
        <div className="field">
            <div className="label">Section</div>
            <select value={data.section} onChange={(e) => {setData(val => {return {...val, section: e.target.value}})}} className="form-control form-control-lg"
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
        <button className="btn btn-blue" type="submit">{loading ? 'Enregistrement' : 'Enregistrer'}</button>
        <button onClick={() => {handleCancel()}} type="submit">Fermer (Annuler)</button>
      </div>
      
    </form>
  </div>
}

export default AddClass;