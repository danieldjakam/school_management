import { Matiere } from "../models/Matiere";
var Json2csvParser = require('json2csv').Parser
const admZip = require('adm-zip');
const pdf = require('pdf-creator-node');
const optionsPdf = require('../../helpers/optionsPdf')
const downloadFs = require('fs');

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
const path = require('path');

module.exports.downloadStudentsCsv = (req, res) => {
    req.connection.query("SELECT students.name, students.subname, students.birthday, students.sex, class.name as cName  FROM students LEFT JOIN class ON class.id = students.class_id WHERE class_id = ?", [req.params.id], function (err, users, fields) {
        if (err) throw err;
        const jsonUsers = JSON.parse(JSON.stringify(users));
        const csvFields = ['name', 'subname', 'birthday', 'sex'];
        const json2csvParser = new Json2csvParser({ csvFields });
        const csv = json2csvParser.parse(jsonUsers);
        const csvFile = `eleves de ${jsonUsers[0].cName}.csv`;
        downloadFs.writeFile(csvFile, csv, function (err, csv) {
            if (err) return console.log(err);
            else res.download(csvFile);
        });
    });
}

module.exports.downloadStudentsPdf = (req, res) => {
    const html = downloadFs.readFileSync('src/templates/studentsList.html', 'utf-8');
    req.connection.query("SELECT students.name, teachers.name as tName, teachers.subname as tSubname, students.subname,  students.email,  students.phone_number, students.birthday, students.sex, class.name as cName  FROM students LEFT JOIN class ON class.id = students.class_id LEFT JOIN teachers ON teachers.class_id = class.id WHERE students.class_id = ?", [req.params.id], function (err, students, fields) {
        if (err) console.log(err);
        const fileName = `Liste des eleves de ${students[0].cName}.pdf`;
        let info : {
            className : string,
            teacherName : string
            teacherSubname : string
        } = {
            className  : students[0].cName,
            teacherName  : students[0].tName,
            teacherSubname  : students[0].tSubname,
        }
        students.forEach(student => {
            const date = new Date(student.birthday).getDate() + ' '+ months[new Date(student.birthday).getMonth()] + " " + new Date(student.birthday).getUTCFullYear()
            student.sex = student.sex === 'm' ? 'Masculin' : 'Feminin';
            student.birthday = date;
        })
        const document = {
            html: html,
            data: {
                students: students,
                info
            },
            path: `docs/${fileName}`
        };
        pdf.create(document, optionsPdf)
            .then(resp => {
                console.log(resp);
                res.download(`docs/${fileName}`)
            })
            .catch(err => {
                console.log(err);
                res.status(201).json(err)
            })
    });
}

module.exports.downloadBulletin = (req, res) => {
    const {exam_id, student_id, class_id} = req.params;
    const html = downloadFs.readFileSync('src/templates/Bulletin.html', 'utf-8');
    let badCompetence : string[] = [];
    let totalPoint : number = 0;
    let totalNote : number
    let diviser : number = 0;
    
    req.connection.query('SELECT * FROM students WHERE class_id = ?', [class_id], (errr, allStudents : []) => {
        req.connection.query("SELECT students.name, teachers.name as tName, teachers.subname as tSubname, students.subname, students.birthday, students.sex, class.name as cName  FROM students LEFT JOIN class ON class.id = students.class_id LEFT JOIN teachers ON teachers.class_id = class.id WHERE students.id = ?", [student_id], function (err, student, fields) {
            if (err) console.log(err);
            const stud : {
                name: string,
                subname: string,
                cName: string,
                tName: string,
                tSubname: string,
                sex: string,
                birthday: string,
            } = student[0];
            let info : {
                className : string,
                teacherName : string
                teacherSubname : string
            } = {
                className  : stud.cName,
                teacherName  : stud.tName,
                teacherSubname  : stud.tSubname,
            }
            stud.sex = stud.sex === 'm' ? 'Masculin' : 'Feminin';
            const date = new Date(stud.birthday).getDate() + ' '+ months[new Date(stud.birthday).getMonth()] + " " + new Date(stud.birthday).getUTCFullYear()
            stud.birthday = date;
            
            req.connection.query('SELECT * FROM notes WHERE exam_id = ? AND class_id = ? AND student_id = ?', [exam_id, class_id, student_id] , (err2, notes) => {
                if(err2) console.log(err2);
                notes.forEach(note => {
                    totalPoint += parseInt(note.value);
                });
                req.connection.query('SELECT * FROM matiere', (err3, mat : Matiere[]) => {
                    mat.forEach((m) => {
                        const tags = JSON.parse(m.tags);
                        const notesForThisMatiere = notes.filter(h => h.matiere_id === m.id);
                        const t = JSON.parse(m.tags).length + 2;
                        totalNote = 0;
                        let total = 0;
                        tags.map(tag => {
                            const notesForThisTag = notesForThisMatiere.filter((h : {
                                tag_name: string,
                            } )=> h.tag_name === tag.name)[0];
                            const note = notesForThisTag !== {} && notesForThisTag !== undefined ? parseInt(notesForThisTag.value) : 0;
                            totalNote += note;
                            total += parseInt(tag.over);
                        })
                        if (totalNote < (total / 2)) {
                            badCompetence.push(m.name);
                        }
                    })
    
                    mat.forEach(m => {
                        const tags = JSON.parse(m.tags);
                        tags.forEach(tag => {
                            diviser += parseInt(tag.over);
                        })
                    })
    
                    req.connection.query('SELECT * FROM com', (err5, competences) => {
                        mat.map(m => {
                            let t = 0;
                            const tags = JSON.parse(m.tags);
                            m.tags = tags;
                            const notesForThisMatiere = notes.filter(h => h.matiere_id === m.id);
                            tags.forEach(tag => {
                                const notesForThisTag = notesForThisMatiere.filter(h => h.tag_name === tag.name)[0];
                                const note = notesForThisTag !== {} && notesForThisTag !== undefined ? parseInt(notesForThisTag.value) : 0;
                                t += note;
                                tag.value = note
                            })
                            m.t = tags.length + 2;
                            let o = 0;
                            tags.forEach(t => {
                                o += parseInt(t.over)
                            })
                            m.totalNote = o;
                            m.total = t;
                        })
                        competences.forEach(com => {
                            let to = 0;
                            com.sub = mat.filter(m => m.comId === com.id)
                            mat.filter(m => m.comId === com.id).forEach(m => {
                                const tags = m.tags;
                                to += tags.length + 2;
                            })
                            com.total = to + 1;
                        })
                        req.connection.query('SELECT * FROM stats WHERE class_id = ? AND exam_id = ? ', [class_id, exam_id], (errrt, stats) => {
                            const rangedArray = stats.sort((a, b) => b.totalPoints - a.totalPoints);
                            const g = stats.sort((a, b) => b.totalPoints - a.totalPoints);
                            let firstPoints : number = g[0].totalPoints;
                            let lastPoints : number = 0;
                            g.forEach((ey : {
                                totalPoints: number
                            }) => {
                                lastPoints = ey.totalPoints;
                            })
                            let rang = 0;
                            rangedArray.forEach((s : {
                                student_id: string
                            }, c) => {
                                if (s.student_id === student_id) {
                                    rang = c + 1
                                }
                            })
                            const document = {
                                html: html,
                                data: {
                                    student: stud,
                                    info: info,
                                    diviser: diviser,
                                    totalPoint,
                                    firstAverage: Math.round(((firstPoints / diviser) * 20) * 100) / 100,
                                    lastAverage: Math.round(((lastPoints / diviser) * 20) * 100) / 100,
                                    rang: rang,
                                    av: ((totalPoint / diviser) * 20) < 10 ? 'Oui' : 'Non',
                                    en: ((totalPoint / diviser) * 20) > 15 ? 'Oui' : 'Non',
                                    ho: ((totalPoint / diviser) * 20) > 18 ? 'Oui' : 'Non',
                                    moyenne: Math.round(((totalPoint / diviser) * 20) * 100) / 100,
                                    totalNote: totalNote,
                                    badCompetence: badCompetence,
                                    mat: mat,
                                    competences: competences,
                                    totalStudent: allStudents.length,
                                    notes: notes
                                },
                                path: `docs/${stud.name}.pdf`
                            };
                            pdf.create(document, optionsPdf)
                                .then(resp => {
                                    res.download(resp.filename)
                                })
                                .catch(err => {
                                    console.log(err);
                                    res.status(201).json({err, f: document.data.competences})
                                })
                        })
                    })
                })
            })
        });
    })
}

module.exports.downloadBulletinByClass = async (req, res) => {
    const zip = new admZip();
    const {class_id} = req.params;
    req.connection.query('SELECT students.id, students.name, teachers.name as tName, teachers.subname as tSubname, students.subname, students.birthday, students.sex, class.name as cName  FROM students LEFT JOIN class ON class.id = students.class_id LEFT JOIN teachers ON teachers.class_id = class.id WHERE students.class_id = ?', [class_id], async (err, students) => {
        const dirPath = `docs/${students[0].cName}`;
        if(!downloadFs.existsSync(dirPath)) downloadFs.mkdirSync(dirPath);
        await new Promise((resolve, reject) => {
            students.forEach(tt => {
                const {exam_id, class_id} = req.params;
                const html = downloadFs.readFileSync('src/templates/Bulletin.html', 'utf-8');
                let badCompetence : string[] = [];
                let totalPoint = 0;
                let totalNote : number
                let diviser : number = 0;
                const stud = tt;
                let info : {
                    className : string,
                    teacherName : string
                    teacherSubname : string
                } = {
                    className  : stud.cName,
                    teacherName  : stud.tName,
                    teacherSubname  : stud.tSubname,
                }
                stud.sex = stud.sex === 'm' ? 'Masculin' : 'Feminin';
                const date = new Date(stud.birthday).getDate() + ' '+ months[new Date(stud.birthday).getMonth()] + " " + new Date(stud.birthday).getUTCFullYear()
                stud.birthday = date;
                
                req.connection.query('SELECT * FROM notes WHERE exam_id = ? AND class_id = ? AND student_id = ?', [exam_id, class_id, stud.id] , (err2, notes) => {
                    if(err2) console.log(err2);
                    notes.forEach((note : {
                        value: string
                    }) => {
                        totalPoint += parseInt(note.value);
                    });
                    req.connection.query('SELECT * FROM matiere', (err3, mat:Matiere[]) => {
                        mat.forEach(m => {
                            const tags = JSON.parse(m.tags);
                            const notesForThisMatiere = notes.filter(h => h.matiere_id === m.id);
                            const t : number = JSON.parse(m.tags).length + 2;
                            totalNote = 0;
                            let total = 0;
                            tags.map(tag => {
                                const notesForThisTag = notesForThisMatiere.filter(h => h.tag_name === tag.name)[0];
                                const note = notesForThisTag !== {} && notesForThisTag !== undefined ? parseInt(notesForThisTag.value) : 0;
                                totalNote += note;
                                total += parseInt(tag.over);
                            })
                            if (totalNote < (total / 2)) {
                                badCompetence.push(m.name);
                            }
                        })
    
                        mat.forEach(m => {
                            const tags = JSON.parse(m.tags);
                            tags.forEach(tag => {
                                diviser += parseInt(tag.over);
                            })
                        })
    
                        req.connection.query('SELECT * FROM com', (err5, competences) => {
                            mat.map((m ) => {
                                let t = 0;
                                const tags = JSON.parse(m.tags);
                                m.tags = tags;
                                const notesForThisMatiere = notes.filter(h => h.matiere_id === m.id);
                                tags.forEach(tag => {
                                    const notesForThisTag = notesForThisMatiere.filter(h => h.tag_name === tag.name)[0];
                                    const note = notesForThisTag !== {} && notesForThisTag !== undefined ? parseInt(notesForThisTag.value) : 0;
                                    t += note;
                                    tag.value = note
                                })
                                m.t = tags.length + 2;
                                let o = 0;
                                tags.forEach(t => {
                                    o += parseInt(t.over)
                                })
                                m.totalNote = o;
                                m.total = t;
                            })
                            competences.forEach(com => {
                                let to = 0;
                                com.sub = mat.filter(m => m.comId === com.id)
                                mat.filter(m => m.comId === com.id).forEach(m => {
                                    const tags = m.tags;
                                    to += tags.length + 2;
                                })
                                com.total = to + 1;
                            })
                            req.connection.query('SELECT * FROM stats WHERE class_id = ? AND exam_id = ? ', [class_id, exam_id], (errrt, stats) => {
                                const rangedArray = stats.sort((a, b) => b.totalPoints - a.totalPoints);
                                const g = stats.sort((a, b) => b.totalPoints - a.totalPoints);
                                let firstPoints : number = g[0].totalPoints;
                                let lastPoints : number = 0 ;
                                g.forEach(ey => {
                                    lastPoints = ey.totalPoints;
                                })
                                let rang = 0;
                                rangedArray.forEach((s : {
                                    student_id: string
                                }, c) => {
                                    if (s.student_id === stud.id) {
                                        rang = c + 1
                                    }
                                })
                                const document = {
                                    html: html,
                                    data: {
                                        student: stud,
                                        info: info,
                                        diviser: diviser,
                                        totalPoint,
                                        firstAverage: Math.round(((firstPoints / diviser) * 20) * 100) / 100,
                                        lastAverage: Math.round(((lastPoints / diviser) * 20) * 100) / 100,
                                        rang: rang,
                                        av: ((totalPoint / diviser) * 20) < 10 ? 'Oui' : 'Non',
                                        en: ((totalPoint / diviser) * 20) > 15 ? 'Oui' : 'Non',
                                        ho: ((totalPoint / diviser) * 20) > 18 ? 'Oui' : 'Non',
                                        moyenne: Math.round(((totalPoint / diviser) * 20) * 100) / 100,
                                        totalNote: totalNote,
                                        badCompetence: badCompetence,
                                        mat: mat,
                                        competences: competences,
                                        totalStudent: students.length,
                                        notes: notes
                                    },
                                    path: `${dirPath}/${(stud.name+' '+stud.subname).replaceAll(' ', '_')}.pdf`
                                };
                                pdf.create(document, optionsPdf)
                                    .then(resp => {
                                        
                                    })
                                    .catch(err => {
                                        console.log(err);
                                        res.status(201).json({err, f: document.data.competences})
                                    })
                            })
                        })
                    })
                })
            });

            resolve({})
        })

        setTimeout(() => {
            students.forEach(student => {
                zip.addLocalFile(`${dirPath}/${(student.name+' '+student.subname).replaceAll(' ', '_')}.pdf`); 
                const zipPath = `${dirPath}/Bulletins en ${students[0].cName}.zip`;
                downloadFs.writeFileSync(zipPath, zip.toBuffer());
                res.download(zipPath);           
            })
        }, 3000)
    })
}