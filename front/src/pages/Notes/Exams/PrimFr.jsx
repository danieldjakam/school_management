import React from 'react'
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { sequenceTraductions } from '../../../local/sequence';
import { host } from '../../../utils/fetch';
import { handleChangeCsvFile } from '../../../utils/functions';

const PrimFr = () => {
    const [students, setStudents ] = useState([]);
    const [coms, setComs ] = useState([]);
    const [mat, setMat ] = useState([]);
    const [ActualClass, setActualClass ] = useState({});
    const [actualExam, setActualExam ] = useState({});
    const [loading, setLoading ] = useState(false);
    const {exam_id, class_id} = useParams();
    const [notes, setNotes] = useState({});
    const [error, setError] = useState("");
    const [diviser, setDiviser] = useState(1);
    const [studentsPoints, setStudentsPoints] = useState([]);
    const bulRef = useRef();
    
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/students/'+class_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setStudents(data);
                setLoading(false);
            }
        )()
    }, []);
    useEffect(() => {
        (
            async () => {
                // setLoading(true)
                // const resp = await fetch(host+'/notes/getAll', {headers: {
                //     'Authorization': sessionStorage.user
                //   }})
                // const data = await resp.json();
                // const d = data.filter(d => d.class_id === class_id);
                // const f = d.filter(d => d.exam_id === exam_id);
                // setNotes(f);
                // setLoading(false);
            }
        )()
    }, []);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/seq/'+exam_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setActualExam(data);
                setLoading(false);
            }
        )()
    }, []);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/class/'+class_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                const resp4 = await fetch(host+'/notes/all/'+class_id+'/'+exam_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const no = await resp4.json();
                setNotes(no);
                setActualClass(data);
                setLoading(false);


                const resp2 = await fetch(host+'/sub_comp/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data2 = await resp2.json();
                setMat(data2);
                setLoading(false);
                let total = 0;
                data2.forEach(m => {
                    const tags = JSON.parse(m.tags);
                    tags.forEach(tag => {
                                total += parseFloat(tag.over);
                                return <td>{tag.name} / {tag.over}</td>
                            })
                })
                setDiviser(total);


                fetch(host+'/com/getAll', {headers: { 'Authorization': sessionStorage.user}})
                    .then(competences => competences.json())
                    .then(competences => {
                        competences.forEach(com => {
                            fetch(host+'/sub_comp/all/'+com.id, {headers: { 'Authorization': sessionStorage.user}})
                                .then(matieres => matieres.json())
                                .then(subject => {
                                    com.sub = subject.filter(mat => mat.comId === com.id)
                                })
                        })
                        setComs(competences)
                    })
            }
        )()
    }, []);
    useEffect(() => {
        let obj = [];
        students.forEach((student, index) => {
            const herNotes = notes.length > 0 ? notes.filter(n => n.student_id === student.id) : {}
            let totalNote = 0;
            mat.forEach((m, f) => {
                const notesForThisMatiere = herNotes.length > 0 ? herNotes.filter(h => h.sub_com_id === m.id) : {};
                // let total = 0;
                const tags = JSON.parse(m.tags)
                tags.forEach(t => {
                    const notesForThisTag = notesForThisMatiere.length > 0 ? notesForThisMatiere.filter(h => h.tag_name === t.name)[0] : {};
                    const note = notesForThisTag !== {} && notesForThisTag !== undefined ? parseFloat(notesForThisTag.value) : 0;
                    // total += note;
                    totalNote += note;
                })
            })
            const t = {
                [student.id] : totalNote
            }
            obj.push(t)
        })
        setStudentsPoints(obj);
    }, [students, mat]) 
    const handleEdit = (value, student_id, sub_com_id, tag_name) => {
        const data = {
            value,
            student_id,
            sub_com_id,
            tag_name,
            exam_id,
            class_id
        }
        fetch(host+'/notes/addOrUpdate', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
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
                {
                    coms.length > 0 ? coms.map((com, ID) => {
                        let total = 0;
                        mat.filter(m => m.comId === com.id).forEach(m => {
                            const tags = JSON.parse(m.tags);
                            total += tags.length + 1;
                        })
                        return <th key={ID} colSpan={total}>{com.name}</th>
                    }) : <>{sequenceTraductions['fr'].noCom}</>
                }
                <th colSpan={3} rowSpan={2}>
                    {sequenceTraductions['fr'].essential}
                </th>
                <th colSpan={1} rowSpan={3}>
                    {sequenceTraductions['fr'].action}
                </th>
            </tr>   
            <tr className="table-light">
                {     
                    coms.map(c => {
                        const subjects = mat.filter(m => m.comId === c.id)
                        return subjects.map((o, id) => {
                            const t = JSON.parse(o.tags).length + 1;
                            return <th key={id} colSpan={t}> {o.name}</th>
                        })
                    })                    
                }
            </tr>
            <tr className="table-light">
                {     
                    coms.map(c => {
                        const subjects = mat.filter(m => m.comId === c.id);
                        return subjects.map((mat, id) => {
                            const tags = JSON.parse(mat.tags)
                            let total = 0;
                            return <>
                                {
                                    tags.map(tag => {
                                                total += parseFloat(tag.over);
                                                return <td>{tag.name} / {tag.over}</td>
                                            })
                                }
                                <td>{sequenceTraductions['fr'].total} / {total}</td>
                            </>   
                        })  
                    })                    
                } 
                <td>{sequenceTraductions['fr'].totalOfPoints}</td>
                <td>{sequenceTraductions['fr'].average}</td>
                <td>{sequenceTraductions['fr'].rank}</td>
                
            </tr>
        </thead>
        <tbody>
            {
                students.length > 0 ? students.map((student, index) => {
                    const herNotes = notes.length > 0 ? notes.filter(n => n.student_id == student.id) : {}
                    let totalNote = 0;
                    return <tr key={index}>
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            {student.name} {student.subname}
                        </td>           
                        {
                            mat.map((m, f) => {
                                const notesForThisMatiere = herNotes !== {} && herNotes.length > 0  ? herNotes.filter(h => h.sub_com_id == m.id) : {};
                                let total = 0;
                                const tags = JSON.parse(m.tags)
                                return <> 
                                            {
                                                tags.map(t => {
                                                    const notesForThisTag = notesForThisMatiere.length > 0 ? notesForThisMatiere.filter(h => h.tag_name == t.name)[0] : {};
                                                    console.log(notesForThisTag);
                                                    const note = notesForThisTag !== {} && notesForThisTag !== undefined ? parseFloat(notesForThisTag.value) : 0;
                                                    total += note;
                                                    totalNote += note;
                                                    return <td>
                                                        <input style={{width: '50px'}} defaultValue={note} onChange={(e) => {handleEdit(e.target.value, student.id, m.id, t.name)}} min={0} type={'number'} max={20} />
                                                    </td>
                                                })
                                            }
                                            <td>{total}</td>
                                        </>

                            })
                        }
                        <td>
                            {
                                totalNote
                            }
                        </td>
                        <td>
                            {
                                (
                                    loading ? '0' : Math.round(totalNote / diviser * 20 * 100) / 100
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
        loading ? studentsPoints : ''
    }
    </div>
}

export default PrimFr;