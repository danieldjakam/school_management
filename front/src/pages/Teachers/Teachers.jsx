import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import ReactLoading from 'react-loading';
import { useNavigate } from "react-router-dom";

import * as Swal from 'sweetalert2';
import {
    Modal,
} from "reactstrap"
import AddTeacher from "./AddTeachers";
import EditTeacher from "./EditTeacher";
import ShowMdp from './ShowMdp';
import { host } from '../../utils/fetch';
import { handleChangeCsvFile } from '../../utils/functions';


const Teachers = () => {
    const navigate = useNavigate()
    
    if (sessionStorage.stat !== 'ad') {
        navigate('/students/'+sessionStorage.classId)
    }
    const [teachers, setTeachers] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [generating, setGenerating] = useState(false);
    const [loadingDel, setLoadingDel] = useState(false);    
    const [teacherToEditId, setTeacherToEditId] = useState('')
    const [isAddteacher, setIsAddTeacher] = useState(false);
    const [isEditteacher, setIsEditTeacher] = useState(false);
    const [isSeeMdp, setIsMdp] = useState(false);
    const [mdp, setMdp] = useState('')

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/teachers/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setTeachers(data);
                setLoading(false);
            }
        )()
    }, [])

    const deleteTeacher = (id) => {
        Swal.fire({
            title: 'Confirmez la suppression !',
            icon: 'question',
            text: 'Cette action est irreversible !!'
        }).then(res => {
            if (res.value) {
                setLoadingDel(true);
                fetch(host+'/teachers/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
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
    const regeneratePassword = () => {
        setGenerating(true)
        fetch(host+'/teachers/regeneratePassword', {headers: {'Authorization': sessionStorage.user}})
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
        setGenerating(false)
    }
    return <div style={{padding: '10px 10px'}} className='container'>
        
        <div style={{marginBottom: '10px'}}>
            <button onClick={() => {setIsAddTeacher(v => !v)}} className="btn btn-blue">Ajouter un enseignant</button>
            <label htmlFor='csvFile' style={{marginLeft: '10px'}} className="btn btn-success">Importer les enseignants</label>
            <input type="file" accept='.csv' id='csvFile' style={{display: 'none'}} onChange={(e) => {handleChangeCsvFile(e, '/upload/teachers/csv', setError)}} />
            <button onClick={() => {regeneratePassword()}} style={{marginLeft: '10px'}} className="btn btn-blue">{generating ? 'En ocurs...' : 'Generer les nouveaux mdp'}</button>
            <a href={host+"/teachers/downloadTeachersPassword"} target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px'}} className="btn btn-blue">Telecharger la liste des mdp</a>
        </div>
        <div className="allClas col-md-12">
            {
                    loading ?  <div className="error" style={{ position: 'absolute', top: '39%', left: '53%' }}><ReactLoading color="#fff" type="spin"/></div> : teachers.length > 0 ? teachers.map((teacher, id) => {
                        return <div className="clas" key={id}>
                            <div className="top">
                                <div className="classAbs">
                                    {teacher.name}
                                </div>
                                <div className="qq">
                                    <span className="q">
                                        Noms: 
                                    </span>
                                    <span className="r">
                                        {teacher.name}
                                    </span>
                                </div>
                                <div className="qq">
                                    <span className="q">
                                        Prenoms: 
                                    </span>
                                    <span className="r">
                                        {teacher.subname}
                                    </span>
                                </div>  
                                <div className="qq">
                                    <span className="q">
                                        Classe: 
                                    </span>
                                    <span className="r">
                                        {teacher.className}
                                    </span>
                                </div>
                                <div className="qq">
                                    <span className="q">
                                        Section:
                                    </span>
                                    <span className="r">
                                        {teacher.section === 'en' ? 'Anglophone' : teacher.section === 'fr' ? 'Francophone' : 'Maternelle'}
                                    </span>
                                </div>
                                <div className="qq">
                                    <span className="q">
                                        Matr.: 
                                    </span>
                                    <span className="r">
                                        {teacher.matricule}
                                    </span>
                                </div>  
                            </div>
                            <div className="bottom">
                                <button onClick={() => {setMdp(teacher.password); setIsMdp(v => !v);}} className="btn btn-warning"> Voir le mdp </button>
                                <button onClick={() => {setIsEditTeacher(v => !v); setTeacherToEditId(teacher.id)}} className="btn btn-success"> Editer</button>
                                <button className="btn btn-danger" onClick={() => {deleteTeacher(teacher.id)}}> {loadingDel ? 'Suppression..' : 'Supprimer'} </button>
                            </div>  
                        </div> }) : <div className="i">
                                        <div className="empty monINfos">
                                            Aucun enseignant pour l'instant <br />
                                            Voulez-vous en <button onClick={() => {setIsAddTeacher(v => !v)}} className="btn btn-blue">ajouter ?</button>
                                        </div>
                                    </div>
                }
        </div>

        
        
        <Modal isOpen={isAddteacher}>
            <AddTeacher error={error} setError={setError} setIsAddTeacher={setIsAddTeacher}/>
        </Modal>

        <Modal isOpen={isSeeMdp}>
            <ShowMdp setIsMdp={setIsMdp} mdp={mdp}/>
        </Modal>

        <Modal isOpen={isEditteacher}>
            <EditTeacher error={error} setError={setError} setIsEditClass={setIsEditTeacher} teacherToEditId={teacherToEditId}/>
        </Modal>
    </div>
}
export default Teachers;