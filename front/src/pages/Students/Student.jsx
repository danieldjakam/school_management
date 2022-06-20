import { useEffect } from "react";
import { useState } from "react";
import ReactLoading from 'react-loading';
import { Link, useParams, useNavigate } from "react-router-dom";
import AddSequence from '../Sequences/AddSequence'
import {
    Modal
} from "reactstrap"
import AddTrimestre from "../Trimestres/AddTrimestre";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
  

const Student = () => {
    const navigate = useNavigate()
    
    if (sessionStorage.stat !== 'ad') {
        navigate('/students/'+sessionStorage.classId)
    }
    const params = useParams();
    const {id} = params;
    const [classs, setClass] = useState({});
    const [exams, setExams] = useState({});
    const [trims, setTrims] = useState({});
    const [students, setStudents] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [loadingDel, setLoadingDel] = useState(false);
    const [isSeq, setIsSeq] = useState(false);
    const [isTrim, setIsTrim] = useState(false);
    const [isAddStudent, setIsAddStudent] = useState(false);
    const [isEditStudent, setIsEditStudent] = useState(false);
    const [studentToEditId, setStudentToEditId] = useState('')

    const months = [
        'Incorrect',
        'Janvier',
        'Fevrier',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Aout',
        'Septembre',
        'Octobre',
        'Novembre',
        'Decembre'
    ]

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

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/class/'+id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setClass(data);
                setLoading(false);
            }
        )()
    }, [id])

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/students/'+id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setStudents(data);
                setLoading(false);
            }
        )()
    }, [id])

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/trim/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setTrims(data);
                setLoading(false);
            }
        )()
    }, [])

    const deleteStudent = (id) => {
        setLoadingDel(true);
        fetch('http://localhost:4000/students/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    window.location.reload();
                }else{
                    setError(res.message)
                }
            })
        setLoadingDel(false)
    }
  

    const deleteSeq = (id) => {
        setLoadingDel(true);
        fetch('http://localhost:4000/seq/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    window.location.reload();
                }else{
                    setError(res.message)
                }
            })
        setLoadingDel(false)
    }
    return <div style={{padding: '10px 10px'}} className='container'>
            {
                sessionStorage.stat === 'ad' ? <>
                    <div style={{marginBottom: '10px'}}>
                        <button onClick={() => {setIsSeq(v => !v)}} className="btn btn-blue">Ajouter une sequence</button>
                    </div>
                    <table className="table table-dark table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Sequence type speciale</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? <tr ><td colSpan={5} style={{justifyItems: 'center', paddingLeft: '50%'}}><ReactLoading color="#fff" type="cylon"/></td></tr> : exams.length > 0 ? exams.map((exam, index) => {
                                    return <tr key={index}>
                                        <td>{exam.name}</td>
                                        <td><a style={{textDecoration: 'none', color: '#fff'}} onMouseOver={(e) => {e.style.textDecoration= 'underlin'}} href={`http://localhost:3000/exams/${exam.id}/${id}`}>Entrer les donnees</a></td>
                                        <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <button className="btn btn-danger" onClick={() => {deleteSeq(exam.id)}}> {loadingDel ? 'Suppression..' : 'Supprimer'} </button>
                                        </td>
                                    </tr> }) : <tr> <td colSpan={5} style={{textAlign: 'center'}}>Aucune sequence effectuee pour l'instant. Voulez-vous en <button onClick={() => {setIsSeq(v => !v)}} className="btn btn-blue">Ajouter une sequence</button> ?</td> </tr>
                            }
                        </tbody>
                    </table>

                    <hr />

                    <div style={{marginBottom: '10px'}}>
                        <button onClick={() => {setIsTrim(v => !v)}} className="btn btn-blue">Ajouter un trimestre</button>
                    </div>
                    <table className="table table-dark table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Trimestre type speciale</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? <tr ><td colSpan={5} style={{justifyItems: 'center', paddingLeft: '50%'}}><ReactLoading color="#fff" type="cylon"/></td></tr> : trims.length > 0 ? trims.map((trim, index) => {
                                    return <tr key={index}>
                                        <td>{trim.name}</td>
                                        <td><a style={{textDecoration: 'none', color: '#fff'}} onMouseOver={(e) => {e.target.style.color= '#dedede'}} href={`http://localhost:3000/trims/${trim.id}/${id}`}>Voir les donnees</a></td>
                                        <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <button className="btn btn-danger" onClick={() => {deleteStudent(trim.id)}}> {loadingDel ? 'Suppression..' : 'Supprimer'} </button>
                                        </td>
                                    </tr> }) : <tr> <td colSpan={5} style={{textAlign: 'center'}}>Aucun trimestre effectuee pour l'instant. Voulez-vous en <button onClick={() => {setIsTrim(v => !v)}} className="btn btn-blue">Ajouter un trimestre</button> ?</td> </tr>
                            }
                        </tbody>
                    </table>                                                                

                    <hr />
                </> : <></>
            }

            <nav className="navbar navbar-expand-lg" style={{padding: '10px 10px', display:"flex", justifyContent:'space-between'}}>
                <h2 style={{marginLeft  : '40px'}}>Liste des eleves en {classs.name}</h2>
                <div style={{marginRight: '10px'}} className='nav item'>
                    <ul className="navbar-nav" style={{fontSize: '1.3rem'}}>
                        <button onClick={() => {setIsAddStudent(v => !v)}} className="btn btn-blue">Ajouter un eleve</button>
                        <Link to={'/students/'+id+'/add'} style={{marginLeft: '30px'}} className="btn btn-success">Importer les eleves</Link>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{padding: '10px 10px'}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{fontSize: '1.3rem'}}>
                    <a target={'_blank'} rel='noreferrer' href={'http://localhost:4000/download/csv/students/'+id} className="btn btn-secondary">Telecharger la liste au format csv</a>
                    <a target={'_blank'} rel='noreferrer' style={{marginLeft: '30px'}} href={'http://localhost:4000/download/pdf/students/'+id} className="btn btn-secondary">Telecharger la liste au format pdf</a>
                </ul>
                </div>
            </nav>
        <table className="table table-dark table-bordered table-striped">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Sexe</th>
                    <th>Date de naissance</th>
                    <th>Classe</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    loading ? <tr ><td colSpan={5} style={{justifyItems: 'center', paddingLeft: '50%'}}><ReactLoading color="#fff" type="cylon"/></td></tr> : students.length > 0 ? students.map((student, id) => {
                        const date = new Date(student.birthday).getDate() + ' '+ months[new Date(student.birthday).getMonth()] + " " + new Date(student.birthday).getUTCFullYear()
                        return <tr key={id}>
                            <td>{student.name}</td>
                            <td>{student.subname}</td>
                            <td>{student.sex === 'm' ? 'Masculin' : 'Feminin'}</td>
                            <td>{date}</td>
                            <td>{classs.name}</td>
                            <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                <button onClick={() => {setStudentToEditId(student.id); setIsEditStudent(v => !v)}} to={`/students/edit/${student.id}`} className="btn btn-warning"> Editer </button>
                                <button className="btn btn-danger" onClick={() => {deleteStudent(student.id)}}> {loadingDel ? 'Suppression..' : 'Supprimer'} </button>
                            </td>
                        </tr> }) : <tr> <td colSpan={6} style={{textAlign: 'center'}}>Aucun eleve en {classs.name} pour l'instant. Voulez-vous en <button onClick={() => {setIsAddStudent(v => !v)}} className="btn btn-blue">ajouter</button> ? </td> </tr>
                }
            </tbody>
        </table>

        <Modal isOpen={isSeq}>
            <AddSequence error={error} setError={setError} setIsSeq={setIsSeq}/>
        </Modal>
        <Modal isOpen={isTrim}>
            <AddTrimestre error={error} setError={setError} setIsTrim={setIsTrim}/>
        </Modal>
        <Modal isOpen={isAddStudent}>
            <AddStudent error={error} setError={setError} setIsAddStudent={setIsAddStudent}/>
        </Modal>
        <Modal isOpen={isEditStudent}>
            <EditStudent error={error} setError={setError} studentToEditId={studentToEditId} setIsAddStudent={setIsEditStudent}/>
        </Modal>
    </div>
}

export default Student;