import React from 'react'
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { host } from '../../utils/fetch';

const AddStudent = ({setIsAddStudent, error, setError}) => {
  const params = useParams();
  const {id} = params;
  const [data, setData] = useState({
    name: '',
    subname: '',
    birthday: '',
    sex: '',
    email: '',
    phone_number: '',
    status: 'old'
  })
  const [classs, setClass] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
      (
          async () => {
              setLoading(true)
              const resp = await fetch(host+'/class/'+id, {headers: {
                  'Authorization': sessionStorage.user
                }})
              const data = await resp.json();
              setClass(data);
              setLoading(false);
          }
      )()
  }, [id])

  const handleAdd = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(host+'/students/add/'+id, {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
      .then((res) => res.json())
      .then(res => {
        if (res.success) {

        }else{
          setError(res.message)
        }
      })
      setLoading(false)
  }
  
  const handleCancel = () => {
    setIsAddStudent(false)
    setError('')
  }
  return <div className="card login-card">
        <div className="card-head">
          <h1>Ajouter un eleve en {classs.name}</h1>
        </div>
        <form onSubmit={(e) => {handleAdd(e)}}>
          <div className="card-content">
            <div className="field">
                <div className="label">Nom de l'eleve</div>
                <input type="text" value={data.name} onChange={(e) => {setData(val => {return {...val, name: e.target.value}})}} placeholder="Entrer un nom d'eleve valide" />
            </div>
            <div className="field">
                <div className="label">prenom de l'eleve</div>
                <input type="text" value={data.subname} onChange={(e) => {setData(val => {return {...val, subname: e.target.value}})}} placeholder="Entrer un prenom d'eleve valide" />
            </div>
            <div className="field">
                <div className="label">Numero de telephone du parent</div>
                <input type="tel" value={data.phone_number} onChange={(e) => {setData(val => {return {...val, phone_number: e.target.value}})}} placeholder="Entrer le numero du parent" />
            </div>
            <div className="field">
                <div className="label">Email du parent</div>
                <input type="email" value={data.email} onChange={(e) => {setData(val => {return {...val, email: e.target.value}})}} placeholder="Entrer l'email du parent" />
            </div>
            <div className="field">
                <div className="label">Date de naissance de l'eleve</div>
                <input type="date" value={data.birthday} onChange={(e) => {setData(val => {return {...val, birthday: e.target.value}})}} placeholder="Entrer la date naissance de l'enfant" />
            </div>
            <div className="field">
                <div className="label">Sex de l'eleve</div>
                <select value={data.sex} onChange={(e) => {setData(val => {return {...val, sex: e.target.value}})}} className="form-control form-control-lg">
                        <option value={''}>--- Selectionner le sexe de l'eleve ----</option>
                        <option value="m">Masculin</option>
                        <option value="f">Feminin</option>
                    </select>
            </div>
            <div className="field check " style={{display:'flex'}}>
                <label className={`label ${data.status === 'new' ? 'checked' : ''}`} htmlFor='check'>Nouveau eleve ?</label>
                <input type="checkbox" checked={data.status === 'new' ? true : false} onChange={(e) => {setData(val => {return{...val, status: data.status === 'new' ? 'old' : 'new'}})}} id="check" />
            </div> 
            {
              error !== '' ? <div className="error">{error}</div> : ''
            } 
          </div>
          <div className="card-footer">
            <button className="btn btn-blue" type="submit">{loading ? 'Enregistrement' : 'Enregistrer'}</button>
            <button onClick={() => {handleCancel()}} type="submit"> Fermer (Annuler)</button>
          </div>
          
        </form>
    </div>
}

export default AddStudent;