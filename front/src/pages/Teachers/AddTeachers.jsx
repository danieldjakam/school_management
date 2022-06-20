import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddTeacher = ({ error, setError, setIsAddTeacher}) => {

  const [data, setData] = useState({
    name: '',
    subname: '',
    classId: '',
  })
  const [classs, setClasss] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      (
          async () => {
              setLoading(true)
              const resp = await fetch('http://localhost:4000/class/getOAll', {headers: {
                  'Authorization': sessionStorage.user
              }})
              const data = await resp.json();
              setClasss(data);
              setLoading(false);
          }
      )()
  }, [])

  const handleAdd = (e) => {
      e.preventDefault();
      setLoading(true);
      fetch('http://localhost:4000/teachers/add', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
      .then((res) => res.json())
      .then(res => {
          if (res.success) {
            setIsAddTeacher(v => !v)
            window.location.reload()
          }else{
            setError(res.message)
          }
      })
      setLoading(false)
  }

  const handleCancel = () => {
    setIsAddTeacher(v => !v)
    setError('')
  }
  
  return <div className="card login-card">
    <div className="card-head">
      <h1>Ajouter un enseignant</h1>
    </div>
    <form onSubmit={(e) => {handleAdd(e)}}>
      <div className="card-content">
        <div className="field">
            <div className="label">Nom de l'enseignant</div>
            <input type="text" value={data.name} onChange={(e) => {setData(val => {return {...val, name: e.target.value}})}} placeholder="Entrer un nom valide" />
        </div> 
        <div className="field">
            <div className="label">Prenom de l'enseignant</div>
            <input type="text" value={data.subname} onChange={(e) => {setData(val => {return {...val, subname: e.target.value}})}} placeholder="Entrer un prenom valide" />
        </div> 
        <div className="field">
            <div className="label">Selectionner la classe de l'enseignant</div>
            <select value={data.classId} onChange={(e) => {setData(val => {return {...val, classId: e.target.value}})}} className="form-control"
                placeholder="Enter password">
                    <option value={''}>--- Selectionner la classe ----</option>
                    {
                        classs.length > 0 ? classs.map((classG) => {
                            return <option value={classG.id}>{classG.name}</option>
                        }) : <option>Aucune classe veuillez en ajouter pour continuer</option>
                    }
                </select>
        </div> 

        {
          error !== '' ? <div className="error">{error}</div> : ''
        } 
      </div>
      <div className="card-footer">
        <button className="btn btn-blue" type="submit">Enregistrer</button>
        <button onClick={() => {handleCancel()}} type="submit">Fermer (Annuler)</button>
      </div>
      
    </form>
  </div>
}

export default AddTeacher;