import React from 'react'
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BulletinEntete from '../../../components/BulletinEntete';
import { downloadTraductions } from '../../../local/bulletin';
import { sequenceTraductions } from '../../../local/sequence';
import { host } from '../../../utils/fetch';
import { handleChangeCsvFile } from '../../../utils/functions';
import { getLang } from '../../../utils/lang';

const MatEnBE = ({type}) => {
    const [student, setStudent ] = useState([]);
    const [domains, setDomains ] = useState([]);
    const [activities, setActivities ] = useState([]);
    const [ActualClass, setActualClass ] = useState({});
    const [totalActivities, setTotalActivities ] = useState(1);
    const [badActivities, setBadActivities] = useState([]);
    const [actualExam, setActualExam ] = useState({});
    const [loading, setLoading ] = useState(false);
    const {exam_id, class_id, student_id} = useParams();
    const [notes, setNotes] = useState({});

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const re = await fetch(host+'/students/one/'+student_id, {headers: {
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
                let ba = [];

                data5.forEach(ac => {
                    const note = data6.filter(n => n.activitieId == ac.id).length > 0 ? parseFloat(data6.filter(n => n.activitieId == ac.id)[0].value) : 0;
                    if (ac.appreciationsNber / 2 > note) {
                        ba.push(ac.name)
                    }
                })
                
                setBadActivities(ba);
                setTotalActivities(t);
                setStudent(dat);
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

    return <div className="container">
    <nav className="navbar navbar-expand-lg" style={{padding: '10px 10px'}}>
        <a target={'_blank'} href={`http://localhost:4000/download/pdf/bul1/${class_id}/${student_id}/${exam_id}`} className="btn btn-success">Télécharger le bulletin</a>
    </nav>
        
        <BulletinEntete actualExam={actualExam} currentClass={ActualClass} student={student} />


        <table className='table table-bordered table-light'>
            <thead>
                <tr>
                    <th rowSpan={2}>Domains</th>
                    <th rowSpan={2}>ACTIVITY AREAS</th>
                    <th colSpan={4}>GRADING OF COMPETENCE</th>
                </tr>
                <tr>
                    <th>Expert A+</th>
                    <th>Acquired A</th>
                    <th>Acquiring B</th>
                    <th>Not Acquired NA</th>
                </tr>
            </thead>
            <tbody>
                {
                    domains.map((domain, id) => {
                        const herActivities = activities.filter(act => act.domainId == domain.id);
                        const herNotes = notes.filter(n => n.domain_id == domain.id);
                        return <> 
                            <tr key={id}>
                                <td rowSpan={domain.total_activities + 1} >
                                    {domain.name}
                                </td>
                            </tr>
                            {
                                herActivities.map((act, id) => {
                                    const note = herNotes.filter(n => n.activitieId == act.id).length > 0 ? parseFloat(herNotes.filter(n => n.activitieId == act.id)[0].value) : 0;
                                    return <tr key={id}>
                                        <td>{act.name}</td>
                                        <td>
                                            { note === 1 ? <svg style={{ fontSize: '12rem', color: '#000' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                                            </svg> : '' 
                                            }
                                        </td>
                                        <td>
                                            { note === 2 ? <svg style={{ fontSize: '12rem', color: '#000' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                                            </svg> : '' 
                                            }
                                        </td>
                                        <td>
                                            { note === 3 ? <svg style={{ fontSize: '12rem', color: '#000' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                                            </svg> : '' 
                                            }
                                        </td>
                                        <td>
                                            { note === 4 ? <svg style={{ fontSize: '12rem', color: '#000' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                                            </svg> : '' 
                                            }
                                        </td>
                                    </tr>
                                })
                            }
                        </>
                    })
                }
            </tbody>
        </table>
        <h6>
            <b>TERMREMARKS: </b> Efforts should be done in the following: {badActivities.map(ba => <span>{ba}, </span> )}
        </h6>
        <table className='table table-bordered table-light'>
            <thead>
                <tr>
                    <th>Class Teacher Visa</th>
                    <th>Head Master Visa</th>
                    <th>Parent Visa</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ height: '70px' }}></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>

        {
            loading ? 'studentsPoints' : ''
        }
    </div>
}

export default MatEnBE;