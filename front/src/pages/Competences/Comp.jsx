import { useEffect } from "react";
import { useState } from "react";
import ReactLoading from 'react-loading';
import { Link, useNavigate } from "react-router-dom";
import * as Swal from 'sweetalert2';
import {
    Modal
} from "reactstrap"
import AddCom from "./AddCom";
import EditCom from "./EditCom";

const Comp = () => {
    const navigate = useNavigate()
    
    if (sessionStorage.stat !== 'ad') {
        navigate('/students/'+sessionStorage.classId)
    }
    const [trims, setTrims] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [loadingDel, setLoadingDel] = useState(false);
    const [compToEditId, setCompToEditId] = useState('')
    const [isAddComp, setIsAddComp] = useState(false);
    const [isEditComp, setIsEditComp] = useState(false);

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/com/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setTrims(data);
                setLoading(false);
            }
        )()
    }, [])

    const deleteClass = (id) => {
        Swal.fire({
            title: 'Confirmez la suppression !',
            icon: 'question',
            text: 'Cette action est irreversible !!'
        }).then(res => {
            if (res.value) {
                setLoadingDel(true);
                fetch('http://localhost:4000/com/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
                    .then((res) => res.json())
                    .then((res) => { 
                        console.log(res);
                        if (res.success) {
                            window.location.reload();
                        }else{
                            console.log(res.message);
                            setError(res.message)
                        }
                    })
                setLoadingDel(false)
            }
        })
    }
    return <div style={{padding: '10px 10px'}} className='container'>
        <div style={{marginBottom: '10px'}}>
            <button onClick={() => {setIsAddComp(v => !v)}} className="btn btn-blue">Ajouter une competence</button>
        </div>
        <table className="table table-dark table-bordered table-striped">
            <thead>
                <tr>
                    <th>Nom</th>
                    {/* <th>Nom du maitre</th> */}
                    <th>Section</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    loading ? <tr ><td colSpan={4} style={{justifyItems: 'center', paddingLeft: '50%'}}> <div className="error" style={{ position: 'absolute', top: '39%', left: '53%' }}><ReactLoading color="#fff" type="spin"/></div></td></tr> : trims.length > 0 ? trims.map((classs, id) => {
                        return <tr key={id}>
                            <td>{classs.name}</td>
                            <td>{classs.section === 'en' ? 'Anglophone' : classs.section === 'fr' ? 'Francophone' : 'Maternelle'}</td>
                            <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                <button onClick = { () => {setCompToEditId(classs.id); setIsEditComp(v => !v  )}} className="btn btn-warning"> Editer </button>
                                <button className="btn btn-danger" onClick={() => {deleteClass(classs.id)}}> {loadingDel ? 'Suppression..' : 'Supprimer'} </button>
                            </td>
                        </tr> }) : <tr> <td colSpan={3} style={{textAlign: 'center'}}>Aucune competence pour l'instant. Voulez-vous en <Link to={'/competences/add'}> ajouter</Link> ?</td> </tr>
                }
            </tbody>
        </table>

        
        
        <Modal isOpen={isAddComp}>
            <AddCom error={error} setError={setError} setIsAddComp={setIsAddComp}/>
        </Modal>

        <Modal isOpen={isEditComp}>
            <EditCom     error={error} setError={setError} setIsEditComp={setIsEditComp} compToEditId={compToEditId}/>
        </Modal>
    </div>
}
export default Comp;