import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { sequenceTraductions } from '../../local/sequence';
import { host } from '../../utils/fetch';
import { getLang } from '../../utils/lang';
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
    return <div className="card login-card">
    <div className="card-head">
      <h1>{sequenceTraductions[getLang()].addSeq}</h1>
    </div>
    <form onSubmit={(e) => {handleUpdate(e)}}>
      <div className="card-content">
        <div className="field">
            <div className="label">{sequenceTraductions[getLang()].seqName}</div>
            <input type="text" value={sequence.name} onChange={(e) => {setSequence(val => {return {...val, name: e.target.value}})}} placeholder={sequenceTraductions[getLang()].seqName} />
        </div>
        {
          error !== '' ? <div className="error">{error}</div> : ''
        } 
      </div>
      <div className="card-footer">
        <button className="btn btn-blue" type="submit">{loading ? sequenceTraductions[getLang()].saving : sequenceTraductions[getLang()].save}</button>
        <button onClick={() => {handleCancel()}} type="submit"> {sequenceTraductions[getLang()].close}</button>
      </div>
      
    </form>
</div>
}

export default EditSequence;