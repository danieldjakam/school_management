import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { subjectTraductions } from '../../local/subject';
import { host } from '../../utils/fetch';
import { getLang } from '../../utils/lang';

const AddMatiere = ({error, setError, setIsSeq}) => {
  const [coms, setComs] = useState({});
  const [sections, setSections] = useState([]);
  useEffect(() => {
      (
          async () => {
              setLoading(true)
              const resp = await fetch(host+'/com/getAll', {headers: {
                  'Authorization': sessionStorage.user
                }})
              const data = await resp.json();
              setComs(data);
              setLoading(false);
          }
      )()
  }, [])

  const [data, setData] = useState({
    name: '',
    slug: '',
    comId: '',
    orale: true,
    ecrit: true,
    savEtre: true,
    pratique: false,
    oraleOver: 5,
    ecritOver: 5,
    savOver: 5,
    section: parseInt(sessionStorage.getItem('section_id')),
    pratiqueOver: 15,
  })
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
  const [loading, setLoading] = useState(false);
  const handleAdd = (e) => {
      e.preventDefault();
      setLoading(true);
      fetch(host+'/matiere/add', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
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
      <h1>{ subjectTraductions[getLang()].addSubject }</h1>
    </div>
    <form onSubmit={(e) => {handleAdd(e)}}>
      <div className="card-content">
        <div className="field">
          <div className="label">{ subjectTraductions[getLang()].subjectName }</div>
          <input type="text" value={data.name} onChange={(e) => {setData(val => {return {...val, name: e.target.value}})}} placeholder={ subjectTraductions[getLang()].subjectName } />
        </div> 
        <div className="field">
          <div className="label">{ subjectTraductions[getLang()].slug }</div>
          <input type="text" value={data.slug} onChange={(e) => {setData(val => {return {...val, slug: e.target.value}})}} placeholder={ subjectTraductions[getLang()].slugName } />
        </div> 
        <div className="field">
            <div className="label">{ subjectTraductions[getLang()].section }</div>
            <select value={data.section}  className="form-control form-control-lg" onChange={(e) => {setData(val => {return {...val, section: e.target.value}})}}
            placeholder="Enter password">
              <option value={''}>--- Selectionner la section ----</option>
                {
                  sections.map(section => <option value={section.id} key={section.id}>{section.name}</option>)
                }
            </select>
        </div>
        <div className="field">
          <div className="label">{ subjectTraductions[getLang()].competence } </div>
          <select value={data.comId}  className="form-control form-control-lg" onChange={(e) => {setData(val => {return {...val, comId: e.target.value}})}}>
                  <option value={''}>{ subjectTraductions[getLang()].selectCompetence }</option>
                  {
                    coms.length > 0 ? coms.map(trim => {
                                          return <option value={trim.id}>{trim.name}</option>                    
                                        })
                                  : <option value={''}>{ subjectTraductions[getLang()].addCom }</option>
                  }
                </select>
        </div> 

        
        <table className="table table-bordered">
              <thead className="table-dark" style={{textAlign :'center'}}>
                <tr>
                  <th>{ subjectTraductions[getLang()].select } ?</th>
                  <th>{ subjectTraductions[getLang()].name }</th>
                  <th>{ subjectTraductions[getLang()].over }</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" checked={data.orale} onChange={(e) => {setData(val => {return {...val, orale: !data.orale}})}} />
                  </td>
                  <td>
                    <label className="check-label">{ subjectTraductions[getLang()].oral }</label>
                  </td>
                  <td>
                    {
                      data.orale ? <input type="number" value={data.oraleOver} min={5} max={20} onChange={(e) => {setData(val => {return {...val, oraleOver: e.target.value }})}} placeholder="Sur" />: <></>
                    }
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" checked={data.ecrit} onChange={(e) => {setData(val => {return {...val, ecrit: !data.ecrit}})}} />
                  </td>
                  <td>
                    <label className="check-label">{ subjectTraductions[getLang()].ecrit }</label>
                  </td>
                  <td>
                    {
                      data.ecrit ? <input type="number" value={data.ecritOver} min={5} max={20} onChange={(e) => {setData(val => {return {...val, ecritOver: e.target.value }})}} placeholder="Sur" />: <></>
                    }
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" checked={data.savEtre} onChange={(e) => {setData(val => {return {...val, savEtre: !data.savEtre}})}} />
                  </td>
                  <td>
                    <label className="check-label">{ subjectTraductions[getLang()].savoirEtre }</label>
                  </td>
                  <td>
                    {
                      data.savEtre ? <input type="number" value={data.savOver} min={2} max={20} onChange={(e) => {setData(val => {return {...val, savOver: e.target.value }})}} placeholder="Sur" />: <></>
                    }
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" checked={data.pratique} onChange={(e) => {setData(val => {return {...val, pratique: !data.pratique}})}} />
                  </td>
                  <td>
                    <label className="check-label">{ subjectTraductions[getLang()].pratic }</label>
                  </td>
                  <td>
                    {
                      data.pratique ? <input type="number" value={data.pratiqueOver} min={2} max={20} onChange={(e) => {setData(val => {return {...val, pratiqueOver: e.target.value }})}} placeholder="Sur" />: <></>
                    }
                  </td>
                </tr>
              </tbody>
        </table>

        {
          error !== '' ? <div className="error">{error}</div> : ''
        } 
      </div>
      <div className="card-footer">
        <button className="btn btn-blue" type="submit">{loading ? subjectTraductions[getLang()].saving : subjectTraductions[getLang()].save}</button>
        <button onClick={() => {handleCancel()}} type="submit"> {subjectTraductions[getLang()].close} </button>
      </div>
      
    </form>
  </div>
}

export default AddMatiere;