import React from 'react'
import { useState } from "react";
import { comTraductions } from '../../local/com';
import { host } from '../../utils/fetch';
import { getLang } from '../../utils/lang';

const AddCom = ({ error, setError, setIsAddComp}) => {

  const [data, setData] = useState({
    name: '',
    section: 'fr'
  })
  const [loading, setLoading] = useState(false);
  const handleAdd = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(host+'/com/add', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
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
  const handleCancel = () => {
    setIsAddComp(v => !v)
    setError('')
  } 
  return <div className="card login-card">
    <div className="card-head">
      <h1>
        {comTraductions[getLang()].editCom}
      </h1>
    </div>
    <form onSubmit={(e) => {handleAdd(e)}}>
      <div className="card-content">
        <div className="field">
            <div className="label">{comTraductions[getLang()].addCom}</div>
            <input type="text" value={data.name} onChange={(e) => {setData(val => {return {...val, name: e.target.value}})}} placeholder="Entrer un nom de competence valide" />
        </div> 
        <div className="field">
            <div className="label">{ comTraductions[getLang()].section }</div>
            <select value={data.section} onChange={(e) => {setData(val => {return {...val, section: e.target.value}})}} className="form-control form-control-lg"
            placeholder="Enter password">
                <option value={''}>{ comTraductions[getLang()].selectSection }</option>
                <option value="fr">{ comTraductions[getLang()].fr }</option>
                <option value="en">{ comTraductions[getLang()].en }</option>
                <option value="ma">{ comTraductions[getLang()].mat }</option>
            </select>
        </div> 

        {
          error !== '' ? <div className="error">{error}</div> : ''
        } 
      </div>
      <div className="card-footer">
        <button className="btn btn-blue" type="submit">{loading ? comTraductions[getLang()].saving : comTraductions[getLang()].save}</button>
        <button onClick={() => {handleCancel()}} type="submit"> {comTraductions[getLang()].close} </button>
      </div>
      
    </form>
  </div>
}

export default AddCom;