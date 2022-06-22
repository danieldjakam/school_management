import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BulletinEntete from '../../components/BulletinEntete';

const Bulletin = () => {

    const [students, setStudents ] = useState([]);
    const [coms, setComs ] = useState([]);
    const [mat, setMat ] = useState([]);
    const [ActualClass, setActualClass ] = useState({});
    const [actualExam, setActualExam ] = useState({});
    const [loading, setLoading ] = useState(false);
    const {exam_id, class_id, student_id} = useParams();
    const [notes, setNotes] = useState({});
    const [studentsAll, setStudentsAll] = useState({});
    const [diviser, setDiviser] = useState(1);
    const [totaltPoints, setTotalPoints] = useState(0);
    const [totalPointsClass, setTotalPointsClass] = useState({});
    const [badCompetence, setBadCompetence] = useState([]);
    const [rang, setRang] = useState(0);
    const [firstAverage, setFirstAverage] = useState(0);
    const [lastAverage, setLastAverage] = useState(0);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/students/one/'+student_id, {headers: {
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
                setLoading(true)
                const resp = await fetch('http://localhost:4000/students/'+class_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setStudentsAll(data);
                setLoading(false);
            }
        )()
    }, []);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                let total = 0;
                const resp = await fetch('http://localhost:4000/notes/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                const d = data.filter(d => d.class_id === class_id);
                const f = d.filter(d => d.exam_id === exam_id);
                const r = f.filter(dl => dl.student_id === student_id);
                setNotes(r);
                data.filter(d => d.class_id === class_id).filter(d => d.exam_id === exam_id).filter(dl => dl.student_id === student_id).forEach(note => {
                    total += parseFloat(note.value);
                });
                setTotalPoints(total);
                setLoading(false);
                
                let arr = [];
                mat.map(m => {
                    const tags = JSON.parse(m.tags);
                    const notesForThisMatiere = notes.filter(h => h.matiere_id === m.id);
                    const t = JSON.parse(m.tags).length + 2;
                    let totalNote = 0;
                    let total = 0;
                    tags.map(tag => {
                        const notesForThisTag = notesForThisMatiere.filter(h => h.tag_name === tag.name)[0];
                        const note = notesForThisTag !== {} && notesForThisTag !== undefined ? parseFloat(notesForThisTag.value) : 0;
                        totalNote += note;
                        total += parseFloat(tag.over);
                    })
                    if (totalNote < (total / 2)) {
                        arr.push(m.name);
                    }
                })
                setBadCompetence(arr);
            }
        )()
    }, [mat]);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(`http://localhost:4000/notes/getTotalPoints?class_id=${class_id}&exam_id=${exam_id}`, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setTotalPointsClass(data.arr);
                data.arr.forEach((s, c) => {
                    if (s.student_id === student_id) {
                        setRang(c + 1)
                    }
                })
                setFirstAverage(data.first);
                setLastAverage(data.last)
                setLoading(false);
            }
        )()
    }, []);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/seq/'+exam_id, {headers: {
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
                const resp = await fetch('http://localhost:4000/class/special/'+class_id, {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setActualClass(data);
                setLoading(false);
            }
        )()
    }, []);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/matiere/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setMat(data);
                setLoading(false);
                let total = 0;
                data.forEach(m => {
                    const tags = JSON.parse(m.tags);
                    tags.forEach(tag => {
                                total += parseFloat(tag.over);
                            })
                })
                setDiviser(total);
            }
        )()
    }, []);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch('http://localhost:4000/matiere/getAll', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setMat(data);
                setLoading(false);
                let total = 0;
                data.forEach(m => {
                    const tags = JSON.parse(m.tags);
                    tags.forEach(tag => {
                                total += parseFloat(tag.over);
                            })
                })
                setDiviser(total);
            }
        )()
    }, []);
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                fetch('http://localhost:4000/com/getAll', {headers: { 'Authorization': sessionStorage.user}})
                    .then(competences => competences.json())
                    .then(competences => {
                        competences.forEach(com => {
                            fetch('http://localhost:4000/matiere/getAll', {headers: { 'Authorization': sessionStorage.user}})
                                .then(matieres => matieres.json())
                                .then(matieres => {
                                    com.sub = matieres.filter(mat => mat.comId === com.id)
                                })
                        })
                        setComs(competences)
                    })
            }
        )()
    }, []);

    const sendToParent = () => {
        fetch('http://localhost:4000/send/bulByEmail/'+student_id, {headers: {
                'Authorization': sessionStorage.user
            }})
            .then(r => r.json())
            .then(r => {
                if(r.success){
                    setSuccess('Envoi reussi !!')
                    setTimeout(() => {
                        setSuccess('')
                    }, 5000)
                }else{
                    setError(r.message)
                    setTimeout(() => {
                        setError('')
                    }, 5000)
                }
            })
            .catch(err => setError('Erreur survenue: '+err))
    }
    return <div className="container bulView" style={{ color: '#000', fontWeight: '600'}}>
        <nav className="navbar navbar-expand-lg " style={{padding: '10px 10px'}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <button onClick={(e) => {sendToParent(e)}} style={{marginLeft: '10px'}} className="btn btn-primary">Envoyer le bulletin au parent</button>
            </div>
            
            <a href={"http://localhost:4000/download/pdf/bul/"+class_id+'/'+student_id+'/'+exam_id} target={'_blank'} className="btn btn-success">Telecharger le bulletin</a>
        </nav>

        {
            error.length > 0 ? <div className="alert alert-danger">{error}</div> : <></>
        }
        {
            success.length > 0 ? <div className="alert alert-success">{success}</div> : <></>
        }

        <BulletinEntete student={students} currentClass={ActualClass} actualExam={actualExam} />

        <table className="table table-bordered table-stiped"  style={{margin: '5px 0', marginLeft: '5vw', width: '90vw', textAlign: 'center'}}>
            <thead className="table-dark" >
                <tr>
                    <th rowSpan={2}>Competences</th>
                    <th rowSpan={2}>Sous Competences</th>
                    <th>Unite d'apprentissage</th>
                    <th colSpan={2}>UA1</th>
                </tr>
                <tr>
                    <th>Evaluation</th>
                    <th>Notes</th>
                    <th>Sur</th>
                </tr>
            </thead>
            <tbody>
            {
                coms.length > 0 ? coms.map((com, ID) => {
                    let total = 0;
                    mat.filter(m => m.comId === com.id).forEach(m => {
                        const tags = JSON.parse(m.tags);
                        total += tags.length + 2;
                    })
                    return <> 
                                <tr key={ID}>
                                    <td rowSpan={total + 1} className="table-dark">
                                        {com.name}
                                    </td>
                                </tr>
                                {
                                    mat.length > 0 ? mat.filter(m => m.comId === com.id).map((m, idf )=> {
                                        const tags = JSON.parse(m.tags);
                                        const notesForThisMatiere = notes.length > 0 ? notes.filter(h => h.matiere_id === m.id) : {};
                                        const t = JSON.parse(m.tags).length + 2;
                                        let totalNote = 0;
                                        let total = 0;
                                        return <>
                                            <tr key={idf}>
                                                <td rowSpan={t}>{m.name}</td>
                                            </tr>
                                            {
                                                tags.map((tag, l) => {
                                                    const notesForThisTag = notesForThisMatiere.filter(h => h.tag_name === tag.name)[0];

                                                    const note = notesForThisTag !== {} && notesForThisTag !== undefined ? parseFloat(notesForThisTag.value) : 0;
                                                    totalNote += note;
                                                    total += parseFloat(tag.over);

                                                    return <tr key={l}>
                                                        <td>{tag.name}</td>
                                                        <td>{note}</td>
                                                        <td>{tag.over}</td>
                                                    </tr>
                                                })
                                            }
                                            <tr>
                                                <td>Total</td>
                                                <td colSpan={2}>{totalNote} / {total}</td>
                                            </tr>
                                        </>
                                    }) : <></>

                                }
                            </>
                }) : <>Aucune competence</>
            } 
            </tbody>
        </table>
        <h6 style={{textAlign: 'center'}}>
            COTES : NA = Non Acquis, ECA = En Cours d’Acquisition, A = Acquis, A+ = Expert
        </h6>


        <table className="table table-bordered table-light table-striped" style={{margin: '5px 0', marginLeft: '5vw', width: '90vw', textAlign: 'center', marginBottom: '50px'}}>
            <tbody>
                <tr>
                    <td>Total des points</td>
                    <td>{totaltPoints} / {diviser}</td>
                    <td>Cotes</td>
                    <td colSpan={2}>Conseil de classe</td>
                </tr>
                <tr>
                    <td>Moyenne</td>
                    <td>{Math.round((totaltPoints / diviser) * 20 * 100) / 100}</td>
                    <td rowSpan={4}>ECA</td>
                    <td>Avertissement Conduite</td>
                    <td style={{display: 'flex', justifyContent: 'space-around'}}>
                        <span><input type="checkbox" />Oui</span>
                        <span><input type="checkbox" />Non</span>
                    </td>
                </tr>
                <tr>
                    <td>Rang</td>
                    <td> {rang} / {studentsAll.length}</td>
                    <td>Avertissement Travail</td>
                    <td>{((totaltPoints / diviser) * 20) < 10 ? 'Oui' : 'Non'}</td>
                </tr>
                <tr>
                    <td>Moyenne du premier</td>
                    <td>{Math.round((firstAverage / diviser) * 20 * 100) / 100}</td>
                    <td>Encouragement</td>
                    <td>{((totaltPoints / diviser) * 20) > 15 ? 'Oui' : 'Non'}</td>
                </tr>
                <tr>
                    <td>Moyenne du dernier</td>
                    <td>{Math.round((lastAverage / diviser) * 20 * 100) / 100}</td>
                    <td>Tableau d'honneur</td>
                    <td>{((totaltPoints / diviser) * 20) > 18 ? 'Oui' : 'Non'}</td>
                </tr>
                <tr>
                    <td colSpan={2}>Observation de l'enseignant</td>
                    <td>Visa du Parent</td>
                    <td colSpan={2}>Visa du chef d'etablissement</td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        Des efforts s'imposent en: <br /><br />
                        <ul className="list" style={{listStyle: 'none'}}>
                            {
                                badCompetence.length > 0 ? badCompetence.map((bc, f) => <li key={f} className="list-item">{bc}</li> ) : <li>RAS</li>
                            }
                        </ul>
                    </td>
                    <td></td>
                    <td colSpan={2}></td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Bulletin;