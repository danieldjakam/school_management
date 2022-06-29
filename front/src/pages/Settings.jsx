import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { host } from '../utils/fetch'

function Settings() {
    const [settings, setSettings] = useState({})
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState('')
    const available_years = [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026,
        2027,
        2028,
        2029,
        2030,
        2031,
        2032,
        2033,
        2034,
        2035,
        2036,
        2037,
        2038,
        2039,
        2040,
        2041,
        2042,
        2043,
        2044,
        2045,
        2046,
        2047,
        2048,
        2049
    ]  
    useEffect(() => {
      (
          async () => {
            if (sessionStorage.stat === 'ad') {
              setLoading(true)
              const resp = await fetch(host+'/settings/getSettings', {headers: {
                'Authorization': sessionStorage.user
              }}).catch(err => setErrors(`Erreur: ${err}`))
              const data = await resp.json();
              setSettings(data);
              setLoading(false);
            }
          }
      )()
    }, [])
    const navigate = useNavigate();
    const handleChangeSettings = (e) => {
        setLoading(true);
        e.preventDefault();
        fetch(host+'/settings/setSettings', {method: 'POST', body: JSON.stringify(settings), headers: {'Content-Type': 'application/json', Authorization: sessionStorage.user}})
          .then((res) => res.json())
          .then(res => {
            if (res.success) {
                navigate(`/class`);
            }else{
              setErrors(res.message)
            }
          })
          .catch((e) => {
            setErrors('Une erreur est survenue lors de la connexion a la base de donnee.')
          })
          setLoading(false)
    }
    return <div className="view settings-view container">
    <div className="card login-card">
        <div className="card-head">
        <h1>Parametres de l'application</h1>
        </div>
        <form onSubmit={(e) => {handleChangeSettings(e)}}>
        <div className="card-content">
            <div className="field" style={{display: 'flex'}}>
                <label className="label">Annee scolaire</label>
                <select value={settings.year_school} onChange={(e) => {setSettings(val => {return{...val, year_school: e.target.value}})}}>
                    {
                        available_years.map(year => {
                            return <option key={year} value={year}>
                                {year}
                            </option>
                        })
                    }
                </select>
            </div> 
            <div className="field check " style={{display:'flex'}}>
                <label className={`label ${settings.is_editable === 'yes' ? 'checked' : ''}`} htmlFor='check'>Est il le temps d'editer les notes ?</label>
                <input type="checkbox" checked={settings.is_editable === 'yes' ? true : false} onChange={(e) => {setSettings(val => {return{...val, is_editable: settings.is_editable === 'yes' ? 'no' : 'yes'}})}} id="check" />
            </div> 

            {
                errors !== '' ? <div className="error">{errors}</div> : ''
            }
        </div>
        <div className="card-footer">
            <button type="submit">{loading ? 'Enregistrement' : 'Enregistrer'}</button>
        </div>
        </form>
    </div>
</div>
}

export default Settings