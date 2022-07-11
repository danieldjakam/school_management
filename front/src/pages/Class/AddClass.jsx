import { useState } from "react";
import React from 'react'
import { host } from "../../utils/fetch";
import { classTraductions } from "../../local/class";
import { getLang } from "../../utils/lang";
import { useEffect } from "react";

const AddClass = ({ error, setError, setIsAddClass}) => {

  const [data, setData] = useState({
    name: '',
    section: parseInt(sessionStorage.getItem('section_id')),
    level: 1
  })
  const [sections, setSections] = useState([]);
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

  useEffect(() => {
    (
        async () => {
            setLoading(true)
            const resp = await fetch(host+'/sections/all', {headers: {
                'Authorization': sessionStorage.user
              }})
            const data = await resp.json();
            setSections(data);
            setLoading(false);
        }
    )()
  }, [])

  const handleCancel = () => {
    setIsAddClass(v => !v)
    setError('')
  }
  return <div className="card login-card">
    <div className="card-head">
      <h1>
        {classTraductions[getLang()].add_class}
      </h1>
    </div>
    <form onSubmit={(e) => {handleAdd(e)}}>
      <div className="card-content">
        <div className="field">
            <div className="label">{ classTraductions[getLang()].className }</div>
            <input type="text" value={data.name} onChange={(e) => {setData(val => {return {...val, name: e.target.value}})}} placeholder="Entrer un nom de classe valide" />
        </div> 
        <div className="field">
            <div className="label">{ classTraductions[getLang()].classLevel }</div>
            <input type="number" value={data.level} onChange={(e) => {setData(val => {return {...val, level: e.target.value}})}} placeholder="Entrer un nom de classe valide" />
        </div> 
        <div className="field">
            <div className="label">{ classTraductions[getLang()].section }</div>
            <select value={data.section} onChange={(e) => {setData(val => {return {...val, section: e.target.value}})}} className="form-control form-control-lg" placeholder="Enter password">
              
            <option value={''}>--- Selectionner la section ----</option>
              {
                sections.map(section => <option value={section.id} key={section.id}>{section.name}</option>)
              }
            </select>
        </div> 

        {
          error !== '' ? <div className="error">{error}</div> : ''
        } 
      </div>
      <div className="card-footer">
        <button className="btn btn-blue" type="submit">{loading ? classTraductions[getLang()].saving : classTraductions[getLang()].save}</button>
        <button onClick={() => {handleCancel()}} type="submit"> {classTraductions[getLang()].close} </button>
      </div>
      
    </form>
  </div>
}

export default AddClass;