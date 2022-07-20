import React from 'react'
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { sequenceTraductions } from '../../../local/sequence';
import { host } from '../../../utils/fetch';
import { handleChangeCsvFile } from '../../../utils/functions';

const MatEn = ({type}) => {
    const [students, setStudents ] = useState([]);
    const [domains, setDomains ] = useState([]);
    const [activities, setActivities ] = useState([]);
    const [ActualClass, setActualClass ] = useState({});
    const [totalActivities, setTotalActivities ] = useState(1);
    const [actualExam, setActualExam ] = useState({});
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
                const resp4 = await fetch(host+'/domains/all2/'+type, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data4 = await resp4.json();
                const resp5 = await fetch(host+'/activities/all', {headers: {
                    'Authorization': sessionStorage.user
                }})
                const data5 = await resp5.json();

                const resp6 = await fetch(host+'/notes/all2/'+class_id+'/'+exam_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data6 = await resp6.json();

                setNotes(data6)
                let t = 0;
                data4.forEach(d => {
                  t += d.total_activities
                })
                setTotalActivities(t);
                console.log(totalActivities);

                setStudents(dat);
                setActualExam(data);
                setActualClass(data2);
                setDomains(data4);
                
                let act = [];
                let r = [];
                data4.forEach(dom => {
                  let d = data5.filter(t => t.domainId == dom.id);
                  d.forEach(p => {
                    act.push(p)
                  })
                })
                r = [...new Set([...act])];
                setActivities(r);
                setLoading(false);
            }
        )()
    }, []);

    const handleEdit = (value, student_id, domain_id, activitieId) => {
        const data = {
            value,
            student_id,
            domain_id,
            activitieId,
            exam_id,
            class_id
        }
        fetch(host+'/notes/addOrUpdate2', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json', 'Authorization': sessionStorage.user}})
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
                <th colSpan={totalActivities}>
                  Matieres
                </th>
                <th colSpan={1} rowSpan={3}>
                    {sequenceTraductions['fr'].action}
                </th>
            </tr>   
            <tr>
              {
                domains.length > 0 ? domains.map((domain, id) => {
                  return <th key={id} colSpan={domain.total_activities}>{domain.name}</th>
                }) : <>{sequenceTraductions['fr'].noCom}</>
              }
            </tr>
            <tr>

              {
                domains.length > 0 ? domains.map((domain, id) => {
                  const activities2 = activities.filter(ac => ac.domainId == domain.id)
                  return activities2.length > 0 ? activities2.map((activitie, id) => {
                      return <th key={id}>{activitie.name}</th>
                    }) : <>{sequenceTraductions['fr'].noCom}</>
                }) : <>{sequenceTraductions['fr'].noCom}</>
              }
            </tr>
        </thead>
        <tbody>
            {
                students.length > 0 ? students.map((student, index) => {
                    const notesForStudents = notes.filter(n => n.student_id == student.id) ;
                    return <tr key={index}>
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            {student.name} {student.subname}
                        </td> 
                            {
                                domains.length > 0 ? domains.map((domain, id) => {
                                const activities2 = activities.filter(ac => ac.domainId == domain.id)
                                    return activities2.length > 0 ? activities2.map((activitie, id) => {
                                        const note = notesForStudents.filter(n => n.activitieId == activitie.id).length > 0 ? parseFloat(notesForStudents.filter(n => n.activitieId == activitie.id)[0].value) : 0;
                                        return <td key={id}>
                                            <input style={{width: '50px'}} type="number" defaultValue={note} onChange={(e) => {handleEdit(e.target.value, student.id, domain.id, activitie.id)}} />
                                        </td>
                                    }) : <>{sequenceTraductions['fr'].noCom}</>
                                }) : <>{sequenceTraductions['fr'].noCom}</>
                            }
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

export default MatEn;