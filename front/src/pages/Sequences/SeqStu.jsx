import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { host } from '../../utils/fetch';

function SeqStu() {

    const [exams, setExams] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/seq/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setExams(data);
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
                        loading ? <tr ><td colSpan={5} style={{justifyItems: 'center', paddingLeft: '50%'}}><ReactLoading color="#fff" type="cylon"/></td></tr> : exams.length > 0 ? exams.map((exam, index) => {
                            return <tr key={index}>
                                <td>{exam.name}</td>
                                <td><a style={{textDecoration: 'none', color: '#fff'}} onMouseOver={(e) => {e.style.textDecoration= 'underline'}} href={`http://localhost:3000/exams/${exam.id}/${sessionStorage.classId}`}>Entrer les donnees</a></td>
                            </tr> }) : <tr> <td colSpan={5} style={{textAlign: 'center'}}>Aucune sequence effectuee pour l'instant. Attendez que l'admin en cree.</td> </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SeqStu