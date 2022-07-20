import React from 'react'
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { sequenceTraductions } from '../../../local/sequence';
import { host } from '../../../utils/fetch';
import { handleChangeCsvFile } from '../../../utils/functions';

const PrimEn = ({type}) => {
    const [students, setStudents ] = useState([]);
    const [subjects, setSubjects ] = useState([]);
    const [ActualClass, setActualClass ] = useState({});
    const [actualExam, setActualExam ] = useState({});
    const [totalPoints, setTotalPoints] = useState(0);
    const [loading, setLoading ] = useState(false);
    const {exam_id, class_id} = useParams();
    const [notes, setNotes] = useState({});
    const [error, setError] = useState("");
    const bulRef = useRef();
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const re = await fetch(host+'/students/'+class_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const dat = await re.json();
                const resp = await fetch(host+'/seq/'+exam_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                const resp2 = await fetch(host+'/class/'+class_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data2 = await resp2.json();
                const resp4 = await fetch(host+'/subjects/all2/'+type, {headers: {
                    'Authorization': sessionStorage.user
                }})
                const data4 = await resp4.json();
                const resp5 = await fetch(host+'/notes/all3/'+class_id+'/'+exam_id, {headers: {
                    'Authorization': sessionStorage.user
                }})
                const data5 = await resp5.json();
                
                let tot = 0;
                data4.forEach(sub => {
                    tot += sub.over
                })

                setTotalPoints(tot);
                setStudents(dat);
                setActualExam(data);
                setActualClass(data2);
                setSubjects(data4);
                setNotes(data5);
                setLoading(false);
            }
        )()
    }, []);

    const handleEdit = (value, student_id, subject_id) => {
        const data = {
            value,
            student_id,
            subject_id,
            exam_id,
            class_id
        }
        fetch(host+'/notes/addOrUpdate3', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
            .then((res) => res.json())
            .then(res => {
                if (!res.success) {
                    setError(res.message)
                }
            })
    }
    return <div className="container">
        <nav className="navbar navbar-expand-lg" style={{padding: '10px'}}>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{fontSize: '1.3rem', display:"flex", justifyContent:'space-between'}}>
                    <h2 style={{marginLeft  : '40px'}}>{actualExam.name} : {ActualClass.name}</h2>
                    <a href={host+"/download/pdf/bul/"+class_id+'/'+exam_id} target={'_blank'} className="btn btn-success">{sequenceTraductions['fr'].downloadBuls}</a>
                    {/* <button onClick={() => {}} style={{marginLeft: '10px'}} className="btn btn-primary">Calculer les moyennes</button> */}
                    <label htmlFor='csvFile' style={{marginLeft: '10px'}} className="btn btn-success">{sequenceTraductions['fr'].importNotes}</label>
                    <input type="file" accept='.csv' id='csvFile' style={{display: 'none'}} onChange={(e) => {handleChangeCsvFile(e, '/upload/notes/csv', setError)}} />
                </ul>
            </div>
        </nav>
        
        {
            error === '' ? <></> : <div style={{marginTop: '30px'}} className="alert alert-danger">{error}</div>
        }
        <table style={{textAlign: 'center'}} ref={bulRef} id="bulT" className="table table-bordered table-striped table-light text-align-center">
        <thead style={{color: '#000', fontSize :'1rem', fontWeight: '500'}}>
            <tr className="table-dark">
                <th rowSpan={3} width='20' >
                    N
                </th>
                <th rowSpan={3}>
                {sequenceTraductions['fr'].name}
                </th>
                <th colSpan={subjects.length}>
                  Matieres
                </th>
                <th colSpan={3} >
                    {sequenceTraductions['fr'].essential}
                </th>
                <th colSpan={1} rowSpan={2}>
                    {sequenceTraductions['fr'].action}
                </th>
            </tr>   
            <tr>
				{
					subjects.length > 0 ? subjects.map((subject, id) => {
						return <th key={id}>{subject.name} / {subject.over}</th>
					}) : <>{sequenceTraductions['fr'].noCom}</>
				}
				<th>{sequenceTraductions['fr'].totalOfPoints}</th>
				<th>{sequenceTraductions['fr'].average}</th>
				<th>{sequenceTraductions['fr'].rank}</th>
            </tr>
        </thead>
        <tbody>
            {
                students.length > 0 ? students.map((student, index) => {
                    const notesForStudent = loading ? {} : notes.filter(n => n.student_id == student.id);
                    let to = 0;
                    return <tr key={index}>
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            {student.name} {student.subname}
                        </td>     
                        {
                            subjects.map((subject, id) => {
                                const note = notesForStudent.filter(n => n.subject_id == subject.id).length > 0 ? parseFloat(notesForStudent.filter(n => n.subject_id == subject.id)[0].value) : 0
                                to += note;
                                return <td key={id}>
                                    <input style={{width: '50px'}} type="number" defaultValue={note} onChange={(e) => {handleEdit(e.target.value, student.id, subject.id)}} />
                                </td> 
                            })
                        }
                        <td>
                            {
                                ` ${to} / ${totalPoints}`
                            }
                        </td>
                        <td>
                            {
                                (
                                    loading ? '0' : `${Math.round(to / totalPoints * 20 * 100) / 100} / 20`
                                )
                            }
                        </td>
                        <td>
                            {
                                index + 1
                            }
                        </td>
                        <td>
                            <Link to={`${student.id}`} className="btn btn-primary">
                                {sequenceTraductions['fr'].seeBul}
                            </Link>
                        </td>
                    </tr>
                }) : <tr className={'table-light'}>
                    <td colSpan={144}>
                    {sequenceTraductions['fr'].noStudent}                
                    </td>
                </tr>
            }
        </tbody>
    </table>
    {
        loading ? 'studentsPoints' : ''
    }
    </div>
}

export default PrimEn;