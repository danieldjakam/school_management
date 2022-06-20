import { useEffect } from "react";
import { useState } from "react";

const AddTrimestre = ({error, setError, setIsTrim}) => {

    const [data, setData] = useState({
      name: '',
      seqIds: []
    })
    const [exams, setExams] = useState({})
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/seq/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setExams(data);
                setLoading(false);
            }
        )()
    }, [])
    const handleAdd = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch('http://localhost:4000/trim/add', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
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
    const hasClick = (id) => {
      if (!data.seqIds.includes(id)) {
        let arr = data.seqIds;
        setData(val => {
          return {
            ...val,
            seqIds: [...arr, id]
          }
        })
      }else{
        let arr = data.seqIds;
        arr = arr.filter(ar => ar !== id)
        setData(val => {
          return {
            ...val,
            seqIds: [...arr]
          }
        })
      }
    }
    const handleCancel = () => {
      setIsTrim(false)
      setError('')
    }
    return <div className="card login-card">
        <div className="card-head">
          <h1>Ajouter du trimestre</h1>
        </div>
        <form onSubmit={(e) => {handleAdd(e)}}>
          <div className="card-content">
            <div className="field">
                <div className="label">Nom du trimestre</div>
                <input type="text" value={data.name} onChange={(e) => {setData(val => {return {...val, name: e.target.value}})}} placeholder="Entrer un nom de trimestre valide" />
            </div>
            <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Ajouter des sequences</label>
                    {
                        exams.length > 0 ? exams.map((exam) => {
                            return <div class = "checkbox">
                                      <input type="checkbox" checked={data.seqIds.includes(exam.id)} onChange={() => {hasClick(exam.id)}} />{exam.name}
                                  </div>
                        }) : <>Veuillez ajouter des sequences</>
                    }
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

export default AddTrimestre;