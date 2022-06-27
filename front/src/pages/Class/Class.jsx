import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";
import * as Swal from 'sweetalert2';
import AddClass from "./AddClass";
import EditClass from "./EditClass";
import {
    Modal
} from "reactstrap"
import { useNavigate } from "react-router-dom";
import { host } from '../../utils/fetch';

const Class = () => {
    const navigate = useNavigate()
    
    if (sessionStorage.stat !== 'ad') {
        navigate('/students/'+sessionStorage.classId)
    }
    const [Classes, setClass] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [classToEditId, setClassToEditId] = useState('')
    const [loadingDel, setLoadingDel] = useState(false);
    const [isAddClass, setIsAddClass] = useState(false);
    const [isEditClass, setIsEditClass] = useState(false);

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/class/getOAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setClass(data);
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
                fetch(host+'/class/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
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
            <button onClick={() => {setIsAddClass(v => !v)}} className="btn btn-blue">Ajouter une classe</button>
        </div>
        <div className="allClas">
            {
                loading ? <div className="error" style={{ position: 'absolute', top: '39%', left: '53%' }}><ReactLoading color="#fff" type="spin"/></div> : Classes.length > 0? Classes.map((classs, id) => {
                    return <div className="clas" key={id}>
                        <div className="top">
                            <div className="classAbs">
                                {classs.name}
                            </div>
                            <div className="qq">
                                <span className="q">
                                    Classe:
                                </span>
                                <span className="r">
                                    {classs.name}
                                </span>
                            </div>
                            <div className="qq">
                                <span className="q">
                                    Section:
                                </span>
                                <span className="r">
                                    {classs.section === 'en' ? 'Anglo' : classs.section === 'fr' ? 'Franco' : 'Maternelle'}
                                </span>
                            </div>
                            <div className="qq">
                                <span className="q">
                                    Niveau:
                                </span>
                                <span className="r">
                                    {classs.level}
                                </span>
                            </div>
                        </div>
                        <div className="bottom">
                            <Link to={`/students/${classs.id}`} className="btn btn-primary"> Visiter </Link>
                            <button onClick={() => { setClassToEditId(classs.id); setIsEditClass(v => !v)}} className="btn btn-warning"> Editer </button>
                            <button className="btn btn-danger" onClick={() => {deleteClass(classs.id)}}> {loadingDel ? 'Suppression..' : 'Supprimer'} </button>
                        </div>  
                    </div>
                }) : <div className="i">
                        <div className="empty monINfos">
                            Aucune classe pour l'instant <br />
                            Voulez-vous en <button onClick={() => {setIsAddClass(v => !v)}} className="btn btn-blue">ajouter ?</button>
                        </div>
                    </div>
        }
        </div>
        
        <Modal isOpen={isAddClass}>
            <AddClass error={error} setError={setError} setIsAddClass={setIsAddClass}/>
        </Modal>

        <Modal isOpen={isEditClass}>
            <EditClass error={error} setError={setError} setIsEditClass={setIsEditClass} classToEditId={classToEditId}/>        </Modal>
    </div>
}
export default Class;