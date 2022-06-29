import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { host } from '../../utils/fetch';

function TrimStu() {
    
    const [trims, setTrims] = useState({})
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/trim/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setTrims(data);
                setLoading(false);
            }
        )()
    }, [])
    return (
        <div className='container' style={{paddingTop: '20px'}}>
            
            <table className="table table-dark table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? <tr ><td colSpan={5} style={{justifyItems: 'center', paddingLeft: '50%'}}><ReactLoading color="#fff" type="cylon"/></td></tr> : trims.length > 0 ? trims.map((trim, index) => {
                            return <tr key={index}>
                                <td>{trim.name}</td>
                                <td><a style={{textDecoration: 'none', color: '#fff'}} href={`http://localhost:3000/trims/${trim.id}/${sessionStorage.classId}`}>Voir les donnees</a></td>
                            </tr> }) : <tr> <td colSpan={5} style={{textAlign: 'center'}}>Aucun trimestre effectuee pour l'instant. Attendez que l'admin en ajoute un.</td> </tr>
                    }
                </tbody>
            </table>  
        </div>
  )
}

export default TrimStu