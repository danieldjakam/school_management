import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EditMatiere = ({error, setError, setIsSeq, id}) => {
    
    const [matiere, setMatiere] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/matiere/'+id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                let matiere = await resp.json();
                let t = JSON.parse(matiere.tags);
                matiere = {...matiere, ...t}
                console.log(matiere)
                setMatiere(matiere);
                setLoading(false);
            }
        )()
    }, [])
    
    const handleEdit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch('http://localhost:4000/matiere/'+id, {method: 'PUT', body: JSON.stringify(matiere), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
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

    return <section style={{marginTop: '40px'}}>
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        
        <div className="col-md-12">
          <form onSubmit={(e) => {handleEdit(e)}}>
            <h1>Editer une matiere</h1>
            <div className="form-outline mb-4">
              <input type="text" value={matiere.name} onChange={(e) => {setMatiere(val => {return {...val, name: e.target.value}})}}  id="form3Example3" className="form-control form-control-lg"
                placeholder="Nom de la matiere" />
              <label className="form-label" htmlFor="form3Example3">Nom</label>
            </div>
            <div className="form-outline mb-4">
              <input type="text" value={matiere.slug} onChange={(e) => {setMatiere(val => {return {...val, slug: e.target.value}})}}  id="form3Example3" className="form-control form-control-lg"
                placeholder="Slug de la matiere" />
              <label className="form-label" htmlFor="form3Example3">Slug</label>
            </div>
            {matiere.type}
            <div className="form-outline mb-3">
                <select value={matiere.section} onChange={(e) => {setMatiere(val => {return {...val, section: e.target.value}})}} className="form-control form-control-lg"
                    placeholder="Enter password">
                    <option value={''}>--- Selectionner la section ----</option>
                    <option value="fr">Francophone</option>
                    <option value="en">Anglophone</option>
                    <option value="ma">Maternelle</option>
                </select>
              <label className="form-label" htmlFor="form3Example4">Selectionner la section</label>
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
                <tr className="form-outline mb-4">
                  <td>
                    <input type="checkbox" checked={matiere.orale} onChange={(e) => {setMatiere(val => {return {...val, orale: !matiere.orale}})}} />
                  </td>
                  <td>
                    <label className="check-label" htmlFor="form3Example3">Orale</label>
                  </td>
                  <td>
                    {
                      matiere.orale ? <input type="number" value={matiere.oraleOver} min={5} max={20} onChange={(e) => {setMatiere(val => {return {...val, oraleOver: e.target.value }})}} placeholder="Sur" />: <></>
                    }
                  </td>
                </tr>
                <tr className="form-outline mb-4">
                  <td>
                    <input type="checkbox" checked={matiere.ecrit} onChange={(e) => {setMatiere(val => {return {...val, ecrit: !matiere.ecrit}})}} />
                  </td>
                  <td>
                    <label className="check-label" htmlFor="form3Example3">Ecrit</label>
                  </td>
                  <td>
                    {
                      matiere.ecrit ? <input type="number" value={matiere.ecritOver} min={5} max={20} onChange={(e) => {setMatiere(val => {return {...val, ecritOver: e.target.value }})}} placeholder="Sur" />: <></>
                    }
                  </td>
                </tr>
                <tr className="form-outline mb-4">
                  <td>
                    <input type="checkbox" checked={matiere.savEtre} onChange={(e) => {setMatiere(val => {return {...val, savEtre: !matiere.savEtre}})}} />
                  </td>
                  <td>
                    <label className="check-label" htmlFor="form3Example3">Savoir Etre</label>
                  </td>
                  <td>
                    {
                      matiere.savEtre ? <input type="number" value={matiere.savOver} min={2} max={20} onChange={(e) => {setMatiere(val => {return {...val, savOver: e.target.value }})}} placeholder="Sur" />: <></>
                    }
                  </td>
                </tr>
                <tr className="form-outline mb-4">
                  <td>
                    <input type="checkbox" checked={matiere.pratique} onChange={(e) => {setMatiere(val => {return {...val, pratique: !matiere.pratique}})}} />
                  </td>
                  <td>
                    <label className="check-label" htmlFor="form3Example3">pratique</label>
                  </td>
                  <td>
                    {
                      matiere.pratique ? <input type="number" value={matiere.pratiqueOver} min={2} max={20} onChange={(e) => {setMatiere(val => {return {...val, pratiqueOver: e.target.value }})}} placeholder="Sur" />: <></>
                    }
                  </td>
                </tr>
              </tbody>
            </table>
            {
              error === '' ? <></> : <div style={{marginTop: '30px'}} className="alert alert-danger">{error}</div>
            }
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>{loading ? 'Ajout...' : 'Editer la \matiere'}</button>
              <p className="small fw-bold mt-2 pt-1 mb-0"> <button style={{border: 'none', background: 'none'}} onClick={(e) => {e.preventDefault(); setIsSeq(false)}} to="/class"
                  className="link-danger">Fermer ?</button></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
  </section>
}

export default EditMatiere;