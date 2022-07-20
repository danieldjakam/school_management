import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import ReactLoading from 'react-loading';
import { useNavigate, useParams } from "react-router-dom";
import AddSequence from '../Sequences/AddSequence'
import { DoorClosed, MenuAppFill} from 'react-bootstrap-icons';
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
import AddAnnualExam from '../AnnualExam/AddAnnualExam';
import EditAnnualExam from '../AnnualExam/EditAnnualExam';
import EditSequence from '../Sequences/EditSequence';
import EditTrimestre from '../Trimestres/EditTrimestre';
  

const Student = () => {
    const params = useParams();
    const {id} = params;
    const [classs, setClass] = useState({});
    const [isAll, setIsAll] = useState(false);
    const [exams, setExams] = useState({});
    const [trims, setTrims] = useState({});
    const [annuals_exams, setAnnualsExams] = useState({});
    const [students, setStudents] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [loadingDel, setLoadingDel] = useState(false);
    const [isSeq, setIsSeq] = useState(false);
    const [isEditSeq, setIsEditSeq] = useState(false);
    const [seqId, setSeqId] = useState('');
    const [isTrim, setIsTrim] = useState(false);
    const [isEditTrim, setIsEditTrim] = useState(false);
    const [trimId, setTrimId] = useState('');
    const [isAddStudent, setIsAddStudent] = useState(false);
    const [isAddAnnualExam, setIsAnnualExam] = useState(false);
    const [isEditAnnualExam, setIsEditAnnualExam] = useState(false);
    const [annualId, setAnnualId] = useState('');
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

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/annuals/all', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setAnnualsExams(data);
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
    const deleteAnnualsExam = (id) => {
        Swal.fire({
            title: 'Confirmez la suppression !',
            icon: 'question',
            text: 'Cette action est irreversible !!'
        }).then(res => {
            if (res.value) {
                setLoadingDel(true);
                fetch(host+'/annuals/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
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
                    {
                        isAll ? 
                            <button onClick={() => {setIsAll(v => !v)}}  className="btn btn-primary"  style={{ marginBottom: '10px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-menu-down" viewBox="0 0 16 16">
                                    <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </button>
                            
                        : 
                            <button onClick={() => {setIsAll(v => !v)}} className="btn btn-primary" style={{ marginBottom: '10px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-menu-up" viewBox="0 0 16 16">
                                    <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z"/>
                                </svg>
                            </button>
                    }
                    { isAll ? <>
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
                                            <td><a style={{textDecoration: 'none', color: '#fff'}} href={`/exams${classs.type}/${exam.id}/${id}`}>{studentTraductions[getLang()].enterData}</a></td>
                                            <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                                <button className="btn btn-warning" onClick={() => {setSeqId(exam.id); setIsEditSeq(v => !v)}}>Editer</button>
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
                                            <td><a style={{textDecoration: 'none', color: '#fff'}} href={`/trims${classs.type}/${trim.id}/${id}`}>{studentTraductions[getLang()].seeData}</a></td>
                                            <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                                <button className="btn btn-warning" onClick={() => {setTrimId(trim.id); setIsEditTrim(v => !v)}}>Editer</button>
                                                <button className="btn btn-danger" onClick={() => {deleteTrim(trim.id)}}> {loadingDel ? studentTraductions[getLang()].deleting : studentTraductions[getLang()].delete} </button>
                                            </td>
                                        </tr> }) : <tr> <td colSpan={5} style={{textAlign: 'center'}}>{studentTraductions[getLang()].noTrim} {studentTraductions[getLang()].doYou} <button onClick={() => {setIsTrim(v => !v)}} className="btn btn-blue">{studentTraductions[getLang()].add}</button> ?</td> </tr>
                                }
                            </tbody>
                        </table>
                        
                        <hr />

                        {/* <div style={{marginBottom: '10px'}}>
                            <button onClick={() => {setIsAnnualExam(v => !v)}} className="btn btn-blue">{studentTraductions[getLang()].addAnnualExam}</button>
                        </div> */}
                        {/* <table className="table table-dark table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>{studentTraductions[getLang()].name}</th>
                                    <th>{studentTraductions[getLang()].specialAnnualExam}</th>
                                    <th>{studentTraductions[getLang()].action}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loading ? <tr ><td colSpan={5} style={{justifyItems: 'center', paddingLeft: '50%'}}><ReactLoading color="#fff" type="cylon"/></td></tr> : annuals_exams.length > 0 ? annuals_exams.map((annual_exam, index) => {
                                        return <tr key={index}>
                                            <td>{annual_exam.name}</td>
                                            <td><a style={{textDecoration: 'none', color: '#fff'}} href={`/annuals/${annual_exam.id}/${id}`}>{studentTraductions[getLang()].seeData}</a></td>
                                            <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                                <button className="btn btn-warning" onClick={() => {setAnnualId(annual_exam.id); setIsEditAnnualExam(v => !v)}}>Editer</button>
                                                <button className="btn btn-danger" onClick={() => {deleteAnnualsExam(annual_exam.id)}}> {loadingDel ? studentTraductions[getLang()].deleting : studentTraductions[getLang()].delete} </button>
                                            </td>
                                        </tr> }) : <tr> <td colSpan={5} style={{textAlign: 'center'}}>{studentTraductions[getLang()].noAnnualExam} {studentTraductions[getLang()].doYou} <button onClick={() => {setIsAnnualExam(v => !v)}} className="btn btn-blue">{studentTraductions[getLang()].add}</button> ?</td> </tr>
                                }
                            </tbody>
                        </table>                                                                 */}

                        <hr />
                        </>
                    : <> </> }
                </> : <></>
            }

            <nav className="navbar navbar-expand-lg" style={{padding: '10px 10px', display:"flex", justifyContent:'space-between'}}>
                <h2 style={{marginLeft  : '40px'}}>{studentTraductions[getLang()].studentList} {classs.name}</h2>
                <div style={{marginRight: '10px'}} className='nav item'>
                    <ul className="navbar-nav" style={{fontSize: '1.3rem'}}>
                        {
                            sessionStorage.stat === 'ad' ? <>
                                <button onClick={() => {setIsAddStudent(v => !v)}} className="btn btn-blue">{studentTraductions[getLang()].addStudent}</button>
                                <label htmlFor='csvFile' style={{marginLeft: '10px'}} className="btn btn-success">{studentTraductions[getLang()].importStudent}</label>
                                <input type="file" accept='.csv' id='csvFile' style={{display: 'none'}} onChange={(e) => {handleChangeCsvFile(e, '/upload/students/csv', setError)}} />
                            </> : <></>
                        }
                        {
                            sessionStorage.stat === 'ad' ? <button onClick={() => {getOrdonnedStudents()}} style={{marginLeft: '10px'}} className="btn btn-blue">{studentTraductions[getLang()].range}</button> : <></>
                        }
                        
                    </ul>
                </div>

            </nav>
            <nav className=" " style={{padding: '10px 10px'}}>
                <div className="colla" id="navbarNav" style={{padding: '10px 10px', display:"flex", justifyContent:'space-between'}}>
                    <a target={'_blank'} rel='noreferrer' href={host+'/download/csv/students/'+id} className="btn btn-secondary">{studentTraductions[getLang()].downloadCsv}</a>
                    <a target={'_blank'} rel='noreferrer' style={{marginLeft: '30px'}} href={host+'/download/pdf/students/'+id} className="btn btn-secondary">{studentTraductions[getLang()].downloadPdf}</a>
                </div>
            </nav>
        <table className="table table-dark table-bordered table-striped">
            <thead>
                <tr>
                    <td>{studentTraductions[getLang()].n} </td>
                    <th>{studentTraductions[getLang()].name}</th>
                    <th>{studentTraductions[getLang()].subname}</th>
                    <th>{studentTraductions[getLang()].s}</th>
                    <th>{studentTraductions[getLang()].b}</th>
                    <th>{studentTraductions[getLang()].class}</th>
                    {
                        sessionStorage.stat === 'ad' ? <th>{studentTraductions[getLang()].action}</th> : <></>
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
                                    let date;
                                    if (student.birthday) {
                                        date = new Date(student.birthday).getDate() + ' '+ months[new Date(student.birthday).getMonth()] + " " + new Date(student.birthday).getUTCFullYear()
                                    }else{
                                        date = 'Aucune date de naissance';
                                    }
                                    return <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{student.name}</td>
                                        <td>{student.subname}</td>
                                        <td>{student.sex === 'm' ? studentTraductions[getLang()].m : studentTraductions[getLang()].f}</td>
                                        <td>{date}</td>
                                        <td>{classs.name}</td>
                                        {
                                            sessionStorage.stat === 'ad' ? <>
                                                <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                                    <button onClick={() => {setStudentToEditId(student.id); setIsEditStudent(v => !v)}} to={`/students/edit/${student.id}`} className="btn btn-warning"> {studentTraductions[getLang()].edit} </button>
                                                    <button className="btn btn-danger" onClick={() => {deleteStudent(student.id)}}> {loadingDel ? studentTraductions[getLang()].deleting : studentTraductions[getLang()].delete} </button>
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
        <Modal isOpen={isEditSeq}>
            <EditSequence error={error} setError={setError} setIsEditSeq={setIsEditSeq} id={seqId}/>
        </Modal>
        <Modal isOpen={isTrim}>
            <AddTrimestre error={error} setError={setError} setIsTrim={setIsTrim}/>
        </Modal>
        <Modal isOpen={isEditTrim}>
            <EditTrimestre error={error} setError={setError} setIsEditTrim={setIsEditTrim} id={trimId}/>
        </Modal>
        <Modal isOpen={isAddStudent}>
            <AddStudent error={error} setError={setError} setIsAddStudent={setIsAddStudent}/>
        </Modal>
        <Modal isOpen={isEditStudent}>
            <EditStudent error={error} setError={setError} studentToEditId={studentToEditId} setIsEditStudent={setIsEditStudent}/>
        </Modal>
        <Modal isOpen={isAddAnnualExam}>
            <AddAnnualExam error={error} setError={setError} setIsAnnualExam={setIsAnnualExam}/>
        </Modal>
        <Modal isOpen={isEditAnnualExam}>
            <EditAnnualExam error={error} setError={setError} setIsEditAnnualExam={setIsEditAnnualExam} id={annualId}/>
        </Modal>
    </div>
}

export default Student;