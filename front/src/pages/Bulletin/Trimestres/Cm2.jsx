import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BulletinEntete from '../../../components/BulletinEntete';
import { downloadTraductions } from '../../../local/bulletin';
import { host } from '../../../utils/fetch';
import { getLang } from '../../../utils/lang';

const Cm2BT = ({type}) => {
    const [student, setStudent ] = useState([]);
    const [subjects, setSubjects ] = useState([]);
    const [ActualClass, setActualClass ] = useState({});
    const [actualExam, setActualExam ] = useState({});
    const [diviser, setDiviser] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);
    const [rank, setRank] = useState(1);
    const [loading, setLoading ] = useState(false);
    const {exam_id, student_id, class_id} = useParams();
    const [notes, setNotes] = useState({});
    const [badSubjects, setBadSubjects] = useState([]);
    const [tp, setTP] = useState({});

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const re = await fetch(host+'/students/one/'+student_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const dat = await re.json();
                const resp = await fetch(host+'/trim/'+exam_id, {headers: {
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
                let data5 = await resp5.json();
                const resp6 = await fetch(host+'/notes/gt/'+exam_id+'/'+class_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data6 = await resp6.json();
                console.log(data6);

                data5 = data5.filter(d => d.student_id == student_id)
                let tot = 0;
                let g = 0;
                let bc = [];
                data4.forEach(sub => {
                    tot += sub.over
                    const note = data5.filter(n => n.subject_id == sub.id).length > 0 ? parseFloat(data5.filter(n => n.subject_id == sub.id)[0].value) : 0
                    if(sub.over / 2 > note){
                        bc.push(sub.name)
                    }
                })
                data5.forEach(u => {
                    let b = parseFloat(u.value);
                    g += b;
                })
                data6.arr.forEach((s, c) => {
                    if (s.student_id === student_id) {
                        setRank(c + 1)
                    }
                })

                setBadSubjects(bc);
                setTotalPoints(g)
                setDiviser(tot);
                setStudent(dat);
                setActualExam(data);
                setActualClass(data2);
                setSubjects(data4);
                setNotes(data5);
                setLoading(false);
                setTP(data6);
            }
        )()
    }, []);

    return <div className="container">
    <nav className="navbar navbar-expand-lg" style={{padding: '10px 10px'}}>
        <a target={'_blank'} href={`http://localhost:4000/download/pdf/bul5/${class_id}/${student_id}/${exam_id}`} className="btn btn-success">Télécharger le bulletin</a>
    </nav>
        <BulletinEntete currentClass={ActualClass} actualExam={actualExam} student={student} />
        
        <table className='table table-bordered table-light table-striped'>
            <thead>
                <tr>
                    <th align='center'>MATIERES</th>
                    <th align='center'>SUR</th>
                    <th align='center'>NOTES</th>
                    <th align='center'>COTATIONS</th>
                </tr>
            </thead>
            <tbody>
                {
                    subjects.map((subject, id) => {

                        const note = notes.filter(n => n.subject_id == subject.id).length > 0 ? parseFloat(notes.filter(n => n.subject_id == subject.id)[0].value) : 0
                        return <tr>
                            <td>{subject.name}</td>
                            <td align='center'>{subject.over}</td>
                            <td align='center'>{note}</td>
                            <td align='center'>ECA</td>
                        </tr>
                    })
                }
            </tbody>
        </table>


        <h6 style={{textAlign: 'center'}}>
            {downloadTraductions[getLang()].help}
        </h6>

        <table className="table table-bordered table-light table-striped">
            <tbody>
                <tr>
                    <td>{downloadTraductions[getLang()].totalPoints}</td>
                    <td>{totalPoints} / {diviser}</td>
                    <td>{downloadTraductions[getLang()].cote}</td>
                    <td colSpan={2}>{downloadTraductions[getLang()].classConseil}</td>
                </tr>
                <tr>
                    <td>{downloadTraductions[getLang()].average}</td>
                    <td>{Math.round((totalPoints / diviser) * 20 * 100) / 100}</td>
                    <td rowSpan={4} align='center'>ECA</td>
                    <td>{downloadTraductions[getLang()].avert}</td>
                    <td style={{display: 'flex', justifyContent: 'space-around'}}>
                        <span><input type="checkbox" />{downloadTraductions[getLang()].yes}</span>
                        <span><input type="checkbox" />{downloadTraductions[getLang()].no}</span>
                    </td>
                </tr>
                <tr>
                    <td>{downloadTraductions[getLang()].rank}</td>
                    <td> {rank} / {ActualClass.total_students}</td>
                    <td>{downloadTraductions[getLang()].worlAvertissement}l</td>
                    <td>{((totalPoints / diviser) * 20) < 10 ? 'Oui' : 'Non'}</td>
                </tr>
                <tr>
                    <td>{downloadTraductions[getLang()].firstAverage}</td>
                    <td>
                        {Math.round((tp.first / diviser) * 20 * 100) / 100}
                    </td>
                    <td>{downloadTraductions[getLang()].encou}</td>
                    <td>{((totalPoints / diviser) * 20) > 15 ? 'Oui' : 'Non'}</td>
                </tr>
                <tr>
                    <td>{downloadTraductions[getLang()].lastAverage}</td>
                    <td>
                        {Math.round((tp.last / diviser) * 20 * 100) / 100}
                    </td>
                    <td>{downloadTraductions[getLang()].honorRoll}</td>
                    <td>{((totalPoints / diviser) * 20) > 18 ? 'Oui' : 'Non'}</td>
                </tr>
                <tr>
                    <td colSpan={2}>{downloadTraductions[getLang()].observation}</td>
                    <td>{downloadTraductions[getLang()].visa}</td>
                    <td colSpan={2}>{downloadTraductions[getLang()].chefVisa}</td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    {downloadTraductions[getLang()].effort} <br /><br />
                        <ul className="list" style={{listStyle: 'none'}}>
                            {
                                badSubjects.length > 0 ? badSubjects.map((bc, f) => <li key={f} className="list-item">{bc}</li> ) : <li>RAS</li>
                            }
                        </ul>
                    </td>
                    <td></td>
                    <td colSpan={2}></td>
                </tr>
            </tbody>
        </table>
    {
        loading ? 'studentsPoints' : ''
    }
    </div>
}

export default Cm2BT;