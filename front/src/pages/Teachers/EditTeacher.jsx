import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditTeacher = ({error, setError, setIsEditClass, teacherToEditId}) => {
    const [oldC, setOldC] = useState('')
    const [classs, setClasss] = useState({});
    const [teacher, setTeacher] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/teachers/'+teacherToEditId, {headers: {
                  'Authorization': sessionStorage.user
                }})
                const data = await resp.json();
                setOldC(data.class_id)
                setTeacher(data);
                setLoading(false);
            }
        )()
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        setLoading(true);
        teacher.OldclassId = oldC;
        fetch('http://localhost:4000/teachers/'+teacherToEditId, {method: 'PUT', body: JSON.stringify(teacher), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
        .then((res) => res.json())
        .then(res => {
          console.log(res);
          if (res.success) {
          }else{
              setError('message')
            }
        })
        setLoading(false)
        window.location.reload()
    }
    const handleCancel = () => {
      setIsEditClass(v => !v)
      setError('')
    }
    
    return <div className="card login-card">
      <div className="card-head">
        <h1>Editer un enseignant</h1>
      </div>
      <form onSubmit={(e) => {handleUpdate(e)}}>
        <div className="card-content">
          <div className="field">
              <div className="label">Nom de l'enseignant</div>
              <input type="text" value={teacher.name} onChange={(e) => {setTeacher(val => {return {...val, name: e.target.value}})}} placeholder="Entrer un nom valide" />
          </div> 
          <div className="field">
              <div className="label">Prenom de l'enseignant</div>
              <input type="text" value={teacher.subname} onChange={(e) => {setTeacher(val => {return {...val, subname: e.target.value}})}} placeholder="Entrer un prenom valide" />
          </div> 
          <div className="field">
              <div className="label">Selectionner la classe de l'enseignant</div>
              <select value={teacher.classId} onChange={(e) => {setTeacher(val => {return {...val, classId: e.target.value}})}} className="form-control"
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

export default EditTeacher;