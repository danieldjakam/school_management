import { useEffect } from "react";
import { useState } from "react";
import ReactLoading from 'react-loading';
import { Link, useNavigate } from "react-router-dom";
import * as Swal from 'sweetalert2';
import {
    Modal
} from "reactstrap"
import AddMatiere from "./AddMatiere";
import EditMatiere from "./EditMatiere";

const Matiere = () => {
    const navigate = useNavigate()
    
    if (sessionStorage.stat !== 'ad') {
        navigate('/students/'+sessionStorage.classId)
    }
    const [Matieres, setMatiere] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [loadingDel, setLoadingDel] = useState(false);
    const [isAddMatier, setIsAddMatiere] = useState(false);
    const [id, setId] = useState('');
    const [isEditMatier, setIsEditMatiere] = useState(false);

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/matiere/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setMatiere(data);
                setLoading(false);
            }
        )()
    }, [])

    
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/com/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setLoading(false);
            }
        )()
    }, [])

    const deleteMatiere = (id) => {
        Swal.fire({
            title: 'Confirmez la suppression !',
            icon: 'question',
            text: 'Cette action est irreversible !!'
        }).then(res => {
            if (res.value) {
                setLoadingDel(true);
                fetch('http://localhost:4000/matiere/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
                    .then((res) => res.json())
                    .then((res) => { 
                        console.log(res);
                        if (res.success) {
                            window.location.reload();
                        }else{
                            setError(res.message)
                        }
                    })
                setLoadingDel(false)
            }
        })
    }
    return <div style={{padding: '10px 10px'}} className='container'>
        
        <div style={{marginBottom: '10px'}}>
            <button onClick={() => {setIsAddMatiere(v => !v)}} className="btn btn-blue">Ajouter une maitiere</button>
        </div>
        <table className="table table-dark table-bordered table-striped">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Slug</th>
                    <th>Types</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    loading ? <tr ><td colSpan={4} style={{justifyItems: 'center', paddingLeft: '50%'}}> <div className="error" style={{ position: 'absolute', top: '39%', left: '53%' }}><ReactLoading color="#fff" type="spin"/></div></td></tr> : Matieres.length > 0 ? Matieres.map((matiere, id) => {
                        return <tr key={id}>
                            <td>{matiere.name}</td>
                            <td>
                                {
                                    matiere.slug
                                }   
                            </td>
                            <td>
                                {
                                    matiere.section === 'en' ? 'Matiere anglophone' : matiere.section === 'fr' ? 'Matiere francophone' : 'Matiere maternelle'
                                }
                            </td>
                            <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                <button onClick={(e) => {setId(matiere.id); setIsEditMatiere(true)}} className="btn btn-warning"> Modifier </button>
                                <button className="btn btn-danger" onClick={() => {deleteMatiere(matiere.id)}}> {loadingDel ? 'Suppression..' : 'Supprimer'} </button>
                            </td>
                        </tr> }) : <tr> <td colSpan={4} style={{textAlign: 'center'}}>Aucune matiere pour l'instant. Voulez-vous en <Link to={'/matiere/add'}> ajouter</Link> ?</td> </tr>
                }
            </tbody>
        </table>
        <Modal isOpen={isAddMatier}>
            <AddMatiere  error={error} setError={setError} setIsSeq={setIsAddMatiere}/>
        </Modal>
        <Modal isOpen={isEditMatier}>
            <EditMatiere  error={error} setError={setError} setIsSeq={setIsEditMatiere} id={id}/>
        </Modal>
    </div>
}
export default Matiere;