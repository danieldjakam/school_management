import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import ReactLoading from 'react-loading';
import { useNavigate, useParams } from "react-router-dom";
import AddSequence from '../Sequences/AddSequence'
import {
    Modal
} from "reactstrap"
import AddTrimestre from "../Trimestres/AddTrimestre";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import { host } from '../../utils/fetch';
import { handleChangeCsvFile } from '../../utils/functions';
import { studentTraductions } from '../../local/student';
import { getLang } from '../../utils/lang';
import * as Swal from 'sweetalert2'
  

const Student = () => {
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
    const [isAddAnnualExam, setIsAnnualExam] = useState(false);
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
    if (sessionStorage.getItem('section_id') === null) {
      const navigate = useNavigate();
      navigate('/')
    }

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

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/class/'+id, {headers: {
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
                const resp = await fetch(host+'/students/'+id, {headers: {
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
                const resp = await fetch(host+'/trim/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setTrims(data);
                setLoading(false);
            }
        )()
    }, [])

    const deleteStudent = (id) => {
        Swal.fire({
            title: 'Confirmez la suppression !',
            icon: 'question',
            text: 'Cette action est irreversible !!'
        }).then(res => {
            if (res.value) {
                setLoadingDel(true);
                fetch(host+'/students/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.success) {
                            window.location.reload();
                        }else{
                            setError(res.message)
                        }
                    })
                    .catch(e => setError(e))
                setLoadingDel(false)
            }
        })
    }
    const deleteTrim = (id) => {
        Swal.fire({
            title: 'Confirmez la suppression !',
            icon: 'question',
            text: 'Cette action est irreversible !!'
        }).then(res => {
            if (res.value) {
                setLoadingDel(true);
                fetch(host+'/trim/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
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
        })
        
    }
  
    

    if (sessionStorage.getItem('section_id') === null) {
        const navigate = useNavigate();
        navigate('/')
    }

    const deleteSeq = (id) => {
        Swal.fire({
            title: 'Confirmez la suppression !',
            icon: 'question',
            text: 'Cette action est irreversible !!'
        }).then(res => {
            if (res.value) {
                setLoadingDel(true);
                fetch(host+'/seq/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
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
        })
    }
    const getOrdonnedStudents = async () => {
        setLoading(true)
        const resp = await fetch(host+'/students/getOrdonnedStudents/'+id, {headers: {
            'Authorization': sessionStorage.user
        }})
        const data = await resp.json();
        setStudents(data);
        setLoading(false)
    }

    return <div style={{padding: '10px 10px'}} className='container'>
            {
                sessionStorage.stat === 'ad' ? <>
                    <div style={{marginBottom: '10px'}}>
                        <button onClick={() => {setIsSeq(v => !v)}} className="btn btn-blue">{studentTraductions[getLang()].addSeq}</button>
                    </div>
                    <table className="table table-dark table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>{studentTraductions[getLang()].name}</th>
                                <th>{studentTraductions[getLang()].specialSeq}</th>
                                <th>{studentTraductions[getLang()].action}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? <tr ><td colSpan={5} style={{justifyItems: 'center', paddingLeft: '50%'}}><ReactLoading color="#fff" type="cylon"/></td></tr> : exams.length > 0 ? exams.map((exam, index) => {
                                    return <tr key={index}>
                                        <td>{exam.name}</td>
                                        <td><a style={{textDecoration: 'none', color: '#fff'}} href={`/exams/${exam.id}/${id}`}>{studentTraductions[getLang()].enterData}</a></td>
                                        <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <button className="btn btn-danger" onClick={() => {deleteSeq(exam.id)}}> {loadingDel ? studentTraductions[getLang()].deleting : studentTraductions[getLang()].delete} </button>
                                        </td>
                                    </tr> }) : <tr> <td colSpan={5} style={{textAlign: 'center'}}>{studentTraductions[getLang()].noSeq} {studentTraductions[getLang()].doYou} <button onClick={() => {setIsSeq(v => !v)}} className="btn btn-blue">{studentTraductions[getLang()].add}</button> ?</td> </tr>
                            }
                        </tbody>
                    </table>

                    <hr />

                    <div style={{marginBottom: '10px'}}>
                        <button onClick={() => {setIsTrim(v => !v)}} className="btn btn-blue">{studentTraductions[getLang()].addTrim}</button>
                    </div>
                    <table className="table table-dark table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>{studentTraductions[getLang()].name}</th>
                                <th>{studentTraductions[getLang()].specialTrim}</th>
                                <th>{studentTraductions[getLang()].action}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? <tr ><td colSpan={5} style={{justifyItems: 'center', paddingLeft: '50%'}}><ReactLoading color="#fff" type="cylon"/></td></tr> : trims.length > 0 ? trims.map((trim, index) => {
                                    return <tr key={index}>
                                        <td>{trim.name}</td>
                                        <td><a style={{textDecoration: 'none', color: '#fff'}} onMouseOver={(e) => {e.target.style.color= '#dedede'}} href={`/trims/${trim.id}/${id}`}>{studentTraductions[getLang()].seeData}</a></td>
                                        <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <button className="btn btn-danger" onClick={() => {deleteTrim(trim.id)}}> {loadingDel ? studentTraductions[getLang()].deleting : studentTraductions[getLang()].delete} </button>
                                        </td>
                                    </tr> }) : <tr> <td colSpan={5} style={{textAlign: 'center'}}>{studentTraductions[getLang()].noTrim} {studentTraductions['fr'].doYou} <button onClick={() => {setIsTrim(v => !v)}} className="btn btn-blue">{studentTraductions['fr'].add}</button> ?</td> </tr>
                            }
                        </tbody>
                    </table>
                    
                    <hr />

                    <div style={{marginBottom: '10px'}}>
                        <button onClick={() => {setIsTrim(v => !v)}} className="btn btn-blue">{studentTraductions[getLang()].addAnnualExam}</button>
                    </div>
                    <table className="table table-dark table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>{studentTraductions[getLang()].name}</th>
                                <th>{studentTraductions[getLang()].specialAnnualExam}</th>
                                <th>{studentTraductions[getLang()].action}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? <tr ><td colSpan={5} style={{justifyItems: 'center', paddingLeft: '50%'}}><ReactLoading color="#fff" type="cylon"/></td></tr> : trims.length > 0 ? trims.map((trim, index) => {
                                    return <tr key={index}>
                                        <td>{trim.name}</td>
                                        <td><a style={{textDecoration: 'none', color: '#fff'}} onMouseOver={(e) => {e.target.style.color= '#dedede'}} href={`/trims/${trim.id}/${id}`}>{studentTraductions[getLang()].seeData}</a></td>
                                        <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <button className="btn btn-danger" onClick={() => {deleteTrim(trim.id)}}> {loadingDel ? studentTraductions[getLang()].deleting : studentTraductions[getLang()].delete} </button>
                                        </td>
                                    </tr> }) : <tr> <td colSpan={5} style={{textAlign: 'center'}}>{studentTraductions[getLang()].noAnnualExam} {studentTraductions['fr'].doYou} <button onClick={() => {setIsTrim(v => !v)}} className="btn btn-blue">{studentTraductions['fr'].add}</button> ?</td> </tr>
                            }
                        </tbody>
                    </table>                                                                

                    <hr />
                </> : <></>
            }

            <nav className="navbar navbar-expand-lg" style={{padding: '10px 10px', display:"flex", justifyContent:'space-between'}}>
                <h2 style={{marginLeft  : '40px'}}>{studentTraductions['fr'].studentList} {classs.name}</h2>
                <div style={{marginRight: '10px'}} className='nav item'>
                    <ul className="navbar-nav" style={{fontSize: '1.3rem'}}>
                        {
                            sessionStorage.stat === 'ad' ? <>
                                <button onClick={() => {setIsAddStudent(v => !v)}} className="btn btn-blue">{studentTraductions['fr'].addStudent}</button>
                                <label htmlFor='csvFile' style={{marginLeft: '10px'}} className="btn btn-success">{studentTraductions['fr'].importStudent}</label>
                                <input type="file" accept='.csv' id='csvFile' style={{display: 'none'}} onChange={(e) => {handleChangeCsvFile(e, '/upload/students/csv', setError)}} />
                            </> : <></>
                        }
                        <button onClick={() => {getOrdonnedStudents()}} style={{marginLeft: '10px'}} className="btn btn-blue">{studentTraductions['fr'].range}</button>
                    </ul>
                </div>

            </nav>
            <nav className=" " style={{padding: '10px 10px'}}>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{fontSize: '1.3rem'}}>
                    <a target={'_blank'} rel='noreferrer' href={host+'/download/csv/students/'+id} className="btn btn-secondary">{studentTraductions['fr'].downloadCsv}</a>
                    <a target={'_blank'} rel='noreferrer' style={{marginLeft: '30px'}} href={host+'/download/pdf/students/'+id} className="btn btn-secondary">{studentTraductions['fr'].downloadPdf}</a>
                </ul>
                </div>
            </nav>
        <table className="table table-dark table-bordered table-striped">
            <thead>
                <tr>
                    <td>{studentTraductions['fr'].n} </td>
                    <th>{studentTraductions['fr'].name}</th>
                    <th>{studentTraductions['fr'].subname}</th>
                    <th>{studentTraductions['fr'].s}</th>
                    <th>{studentTraductions['fr'].b}</th>
                    <th>{studentTraductions['fr'].class}</th>
                    {
                        sessionStorage.stat === 'ad' ? <th>{studentTraductions['fr'].action}</th> : <></>
                    }
                </tr>
            </thead>
            <tbody>
                {
                    loading ? <tr>
                                <td colSpan={5} style={{justifyItems: 'center', paddingLeft: '50%'}}>
                                    <ReactLoading color="#fff" type="cylon"/>
                                </td>
                            </tr> : students.length > 0 ? students.map((student, id) => {
                                    const date = new Date(student.birthday).getDate() + ' '+ months[new Date(student.birthday).getMonth()] + " " + new Date(student.birthday).getUTCFullYear()
                                    return <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{student.name}</td>
                                        <td>{student.subname}</td>
                                        <td>{student.sex === 'm' ? studentTraductions['fr'].m : studentTraductions['fr'].name}</td>
                                        <td>{date}</td>
                                        <td>{classs.name}</td>
                                        {
                                            sessionStorage.stat === 'ad' ? <>
                                                <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                                    <button onClick={() => {setStudentToEditId(student.id); setIsEditStudent(v => !v)}} to={`/students/edit/${student.id}`} className="btn btn-warning"> {studentTraductions['fr'].edit} </button>
                                                    <button className="btn btn-danger" onClick={() => {deleteStudent(student.id)}}> {loadingDel ? studentTraductions['fr'].deleting : studentTraductions[getLang()].delete} </button>
                                                </td>
                                            </> : <></>
                                        }
                                    </tr> }) : <tr> 
                                        <td colSpan={7} style={{textAlign: 'center'}}>
                                        {` ${studentTraductions[getLang()].noStudent} ${classs.name} ${studentTraductions[getLang()].now} ${studentTraductions[getLang()].doYou}`} <button onClick={() => {setIsAddStudent(v => !v)}} className="btn btn-blue">{studentTraductions[getLang()].add}</button> ? 
                                        </td>
                                    </tr>
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
            <EditStudent error={error} setError={setError} studentToEditId={studentToEditId} setIsEditStudent={setIsEditStudent}/>
        </Modal>
    </div>
}

export default Student;