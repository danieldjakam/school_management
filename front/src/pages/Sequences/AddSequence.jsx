import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddSequence = ({error, setError, setIsSeq}) => {

    const [data, setData] = useState({
        name: '',
    })
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleAdd = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch('http://localhost:4000/seq/add', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
        .then((res) => res.json())
        .then(res => {
            if (res.success) {
                window.location.reload();
            }else{
                setError(res.message)
            }
        })
        .catch(err => setError(`Erreur: ${err}`))
        setLoading(false)
    }
    
    const handleCancel = () => {
      setIsSeq(false)
      setError('')
    }

    return <div className="card login-card">
    <div className="card-head">
      <h1>Ajouter de la sequence</h1>
    </div>
    <form onSubmit={(e) => {handleAdd(e)}}>
      <div className="card-content">
        <div className="field">
            <div className="label">Nom de la sequence</div>
            <input type="text" value={data.name} onChange={(e) => {setData(val => {return {...val, name: e.target.value}})}} placeholder="Entrer un nom de sequence valide" />
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

export default AddSequence;