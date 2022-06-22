import React from 'react'
import { useEffect, useState } from "react";

const EditStudent = ({error, setError, studentToEditId, setIsEditStudent}) => {

  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      (
          async () => {
              setLoading(true)
              const resp = await fetch('http://localhost:4000/students/one/'+studentToEditId, {headers: {
                  'Authorization': sessionStorage.user
              }})
              const data = await resp.json();
              console.log(data);
              setStudent(data);
              setLoading(false);
          }
      )()
  }, [studentToEditId])

  const handleUpdate = (e) => {
      e.preventDefault();
      setLoading(true);
      student.date = `${new Date(student.birthday).getUTCFullYear()}-${new Date(student.birthday).getMonth() < 10 ? '0' + new Date(student.birthday).getMonth() : ''}-0${new Date(student.birthday).getDay()}`;
      fetch('http://localhost:4000/students/'+studentToEditId, {method: 'PUT', body: JSON.stringify(student), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
          .then((res) => res.json())
          .then(res => {
              if (res.success) {
                window.location.reload()
              }else{
                  setError(res.message)
              }
          })
      setLoading(false)
  }
  // const date = `${new Date(student.birthday).getUTCFullYear()}-${new Date(student.birthday).getMonth() < 10 ? '0' + new Date(student.birthday).getMonth() : ''}-0${new Date(student.birthday).getDay()}`;
  const handleCancel = () => {
    setIsEditStudent(false)
    setError('')
  }
  return <div className="card login-card">
          <div className="card-head">
            <h1>Editer un eleve</h1>
          </div>
          <form onSubmit={(e) => {handleUpdate(e)}}>
            <div className="card-content">
              <div className="field">
                  <div className="label">Nom de l'eleve</div>
                  <input type="text" value={student.name} onChange={(e) => {setStudent(val => {return {...val, name: e.target.value}})}} placeholder="Entrer un nom d'eleve valide" />
              </div>
              <div className="field">
                  <div className="label">prenom de l'eleve</div>
                  <input type="text" value={student.subname} onChange={(e) => {setStudent(val => {return {...val, subname: e.target.value}})}} placeholder="Entrer un prenom d'eleve valide" />
              </div>
              <div className="field">
                  <div className="label">Numero de telephone du parent</div>
                  <input type="tel" value={student.phone_number} onChange={(e) => {setStudent(val => {return {...val, phone_number: e.target.value}})}} placeholder="Entrer le numero du parent" />
              </div>
              <div className="field">
                  <div className="label">Email du parent</div>
                  <input type="email" value={student.email} onChange={(e) => {setStudent(val => {return {...val, email: e.target.value}})}} placeholder="Entrer l'email du parent" />
              </div>
              <div className="field">
                  <div className="label">Date de naissance de l'eleve</div>
                  <input type="date" value={student.birthday} onChange={(e) => {setStudent(val => {return {...val, birthday: e.target.value}})}} placeholder="Entrer la date naissance de l'enfant" />
              </div>
              <div className="field">
                  <div className="label">Sex de l'eleve</div>
                  <select value={student.sex} onChange={(e) => {setStudent(val => {return {...val, sex: e.target.value}})}} className="form-control form-control-lg">
                          <option value={''}>--- Selectionner le sexe de l'eleve ----</option>
                          <option value="m">Masculin</option>
                          <option value="f">Feminin</option>
                      </select>
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

export default EditStudent;