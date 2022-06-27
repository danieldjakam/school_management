import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { host } from '../../utils/fetch';

const AddMatiere = ({error, setError, setIsSeq}) => {
  const [trims, setTrims] = useState({});
  useEffect(() => {
      (
          async () => {
              setLoading(true)
              const resp = await fetch(host+'/com/getAll', {headers: {
                  'Authorization': sessionStorage.user
                }})
              const data = await resp.json();
              setTrims(data);
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
    pratiqueOver: 15,
  })
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
      <h1>Ajouter une matiere</h1>
    </div>
    <form onSubmit={(e) => {handleAdd(e)}}>
      <div className="card-content">
        <div className="field">
          <div className="label">Nom de la matiere</div>
          <input type="text" value={data.name} onChange={(e) => {setData(val => {return {...val, name: e.target.value}})}} placeholder="Entrer un nom de matiere valide" />
        </div> 
        <div className="field">
          <div className="label">Slug de la matiere</div>
          <input type="text" value={data.slug} onChange={(e) => {setData(val => {return {...val, slug: e.target.value}})}} placeholder="Entrer un nom de matiere valide" />
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
        <div className="field">
          <div className="label">Competence </div>
          <select value={data.comId} onChange={(e) => {setData(val => {return {...val, comId: e.target.value}})}} className="form-control form-control-lg"
                placeholder="Enter password">
                  <option value={''}>--- Selectionner la competence ----</option>
                  {
                    trims.length > 0 ? trims.map(trim => {
                                          return <option value={trim.id}>{trim.name}</option>                    
                                        })
                                  : <option value={''}>Veuilez ajouter des competences pour continuer</option>
                  }
                </select>
        </div> 

        
        <table className="table table-bordered">
              <thead className="table-dark" style={{textAlign :'center'}}>
                <tr>
                  <th>Selectionne ?</th>
                  <th>Nom</th>
                  <th>Sur</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" checked={data.orale} onChange={(e) => {setData(val => {return {...val, orale: !data.orale}})}} />
                  </td>
                  <td>
                    <label className="check-label" htmlFor="form3Example3">Orale</label>
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
                    <label className="check-label" htmlFor="form3Example3">Ecrit</label>
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
                    <label className="check-label" htmlFor="form3Example3">Savoir Etre</label>
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
                    <label className="check-label" htmlFor="form3Example3">pratique</label>
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
            <button className="btn btn-blue" type="submit">{loading ? 'Enregistrement' : 'Enregistrer'}</button>
        <button onClick={() => {handleCancel()}} type="submit">Fermer (Annuler)</button>
      </div>
      
    </form>
  </div>
}

export default AddMatiere;