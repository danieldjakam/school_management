require('dotenv').config({path: '.env'})
const {env} = process;
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    database: env.DB_NAME,
    password: env.DB_PASSWORD,
});

module.exports.addOrUpdateNotes = async (req, res) => {
    const {value, exam_id, student_id, class_id, matiere_id, tag_name} = req.body;
    let val = 0;
    val = parseFloat(value) > 0 ? value : 0;  
    val = parseFloat(value) > 20 ? 20 : value;
    connection.query('SELECT is_editable FROM settings WHERE id = 1', (errrrrrrr, respppppp) => {
		const {is_editable} = respppppp[0];

		if (is_editable === 'yes') {
			if ( value && exam_id && exam_id !== '' && student_id && student_id !== '' && class_id && class_id !== '' && matiere_id && matiere_id !== '' && tag_name && tag_name !== ''  ) {
				connection.query('SELECT * FROM matiere WHERE id = ?', [matiere_id], (error, respon) => {
					if(error) console.log(error);
					const tags = JSON.parse(respon[0].tags);
					const speTag = tags.find(t => t.name === tag_name);
					const over = parseFloat(speTag.over);
					if (parseFloat(value) <= over) {
					 connection.query('SELECT * FROM notes WHERE exam_id = ? AND student_id = ? AND matiere_id = ? AND tag_name = ?', [exam_id, student_id, matiere_id, tag_name], (err, resp) => {
						 if (resp.length < 1) {
							connection.query('INSERT INTO notes(student_id, exam_id, class_id, matiere_id, tag_name, value) VALUES(?, ?, ?, ?, ?, ?)', [student_id, exam_id, class_id, matiere_id, tag_name, val], (err2, resp2) => {
							   if(!err2){
								   connection.query('SELECT * FROM notes WHERE exam_id = ? AND student_id = ? AND class_id = ?', [exam_id, student_id, class_id], (err3, notes) => {
									   let totalPoints = 0;
									   notes.forEach(note => {
										   totalPoints += parseFloat(note.value)
									   })
										 connection.query('SELECT * FROM stats WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student_id, exam_id, class_id], (err, stats) => {
											 if(stats.length < 1) {
												 connection.query('INSERT INTO stats(student_id, class_id, exam_id, totalPoints) VALUES(?, ?, ?, ?)', [student_id, class_id, exam_id, totalPoints], (err5, resp5) => {
													 if(err5) console.log(err5);
													 else res.status(201).json({success: true})
												 })
											 }else{
												 connection.query('UPDATE stats SET totalPoints = ? WHERE student_id = ? AND class_id = ? AND exam_id = ?', [totalPoints, student_id, class_id, exam_id], (err5, resp5) => {
													 if(err5) console.log(err5);
													 else res.status(201).json({success: true})
												 })
											 }
										 })
								   })
							   }
							   else console.log(err2);
							})
						 }else{
							connection.query('UPDATE notes SET student_id = ?, exam_id = ?, class_id = ?, matiere_id = ?, tag_name = ?, value = ? WHERE exam_id = ? AND student_id = ? AND matiere_id = ? AND tag_name = ?', [student_id, exam_id, class_id, matiere_id, tag_name, val, exam_id, student_id, matiere_id, tag_name], (err2, resp) => {
							   if(!err2){
								   connection.query('SELECT * FROM notes WHERE exam_id = ? AND student_id = ? AND class_id = ?', [exam_id, student_id, class_id], (err3, notes) => {
									   let totalPoints = 0;
									   notes.forEach(note => {
										   totalPoints += parseFloat(note.value)
									   })
									   connection.query('SELECT * FROM stats WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student_id, exam_id, class_id], (err, stats) => {
										   if(stats.length < 1) {
											   connection.query('INSERT INTO stats(student_id, class_id, exam_id, totalPoints) VALUES(?, ?, ?, ?)', [student_id, class_id, exam_id, totalPoints], (err5, resp5) => {
												   if(err5) console.log(err5);
												   else res.status(201).json({success: true})
											   })
										   }else{
											   connection.query('UPDATE stats SET totalPoints = ? WHERE student_id = ? AND class_id = ? AND exam_id = ?', [totalPoints, student_id, class_id, exam_id], (err5, resp5) => {
												   if(err5) console.log(err5);
												   else res.status(201).json({success: true})
											   })
										   }
									   })
								   })
							   }
							   else console.log(err);
							})
						 }
					  })
					} else {
						res.status(401).json({success: false, message: 'Note superirieur au max. Veuillez changer svp !'})
					}
				})
			 }else{
				res.status(401).json({success: false, message: "Au moins un champ manquant!!"})
			 }
		} else {
			res.status(401).json({success: false, message: "Ce n'est pas encore le moment d'editer les notes!!! Patientez svp!!"})
		}
	})
}

module.exports.getAllNotes = (req, res) => {
    connection.query('SELECT * FROM notes', (err, resp) => {
	   if(err) console.log(err);
	   else res.status(201).json(resp)
    })
}

module.exports.getOneNotes = (req, res) => {
    connection.query('SELECT * FROM notes WHERE id = ?', [req.params.id], (err, resp) => {
	   if(err) console.log(err);
	   else res.status(201).json(resp[0])
    })
}

module.exports.getNotesByTrim = async (req, res) => {
    connection.query('SELECT seqIds FROM trims WHERE id = ?', [req.params.id], (err, resp) => {
	   if(err) console.log(err);
	   else{
			const {seqIds} = resp[0]
			const seqs = JSON.parse(seqIds);
			const fEvalId = seqs[0];
			const sEvalId = seqs[1];
			connection.query('SELECT * FROM notes WHERE exam_id = ?', [fEvalId], (e, fEvalNotes) => {
				if(e) console.log(e);
				connection.query("SELECT * FROM notes WHERE exam_id = ?", [sEvalId], (e2, sEvalNOtes) => {
					if(e2) console.log(e2);
					let ar = [];
					fEvalNotes.forEach(n1 => {
						sEvalNOtes.forEach(n2 => {
							if (n1.matiere_id === n2.matiere_id && n1.tag_name === n2.tag_name) {
								let v = Math.round((parseFloat(n1.value) + parseFloat(n2.value)) / 2);
								v = v.toString();
								let obj = {};
								obj.student_id = n1.student_id;
								obj.class_id = n1.class_id;
								obj.matiere_id = n1.matiere_id;
								obj.tag_name = n1.tag_name;
								obj.value = v;
								ar.push(obj)
							}
						})

					})
					res.status(201).json(ar)	
				})
			})
	   }
    })
}


module.exports.getNotesByTrimPeoPle = async (req, res) => {
    connection.query('SELECT seqIds FROM trims WHERE id = ?', [req.params.trim_id], (err, resp) => {
	   if(err) console.log(err);
	   else{
			const {seqIds} = resp[0]
			const seqs = JSON.parse(seqIds);
			const fEvalId = seqs[0];
			const sEvalId = seqs[1];
			connection.query('SELECT * FROM notes WHERE exam_id = ? AND student_id = ?', [fEvalId, req.params.student_id], (e, fEvalNotes) => {
				if(e) console.log(e);
				connection.query("SELECT * FROM notes WHERE exam_id = ? AND student_id = ?", [sEvalId, req.params.student_id], (e2, sEvalNOtes) => {
					if(e2) console.log(e2);
					let ar = [];
					fEvalNotes.forEach(n1 => {
						sEvalNOtes.forEach(n2 => {
							if (n1.matiere_id === n2.matiere_id && n1.tag_name === n2.tag_name) {
								let v = Math.round((parseFloat(n1.value) + parseFloat(n2.value)) / 2);
								v = v.toString();
								let obj = {};
								obj.student_id = n1.student_id;
								obj.class_id = n1.class_id;
								obj.matiere_id = n1.matiere_id;
								obj.tag_name = n1.tag_name;
								obj.value = v;
								ar.push(obj)
							}
						})

					})
					res.status(201).json(ar)	
				})
			})
	   }
    })
}

module.exports.getTotalPoints = (req, res) => {
	const {exam_id, class_id} = req.query;
	connection.query('SELECT * FROM stats WHERE class_id = ? AND exam_id = ?', [class_id, exam_id], (err, resp) => {
		if(err) console.log(err);
		else {
			const rangedArray = resp.sort((a, b) => b.totalPoints - a.totalPoints);
			const g = resp.sort((a, b) => b.totalPoints - a.totalPoints);
			let firstPoints = g[0].totalPoints;
			let lastPoints = {};
			g.forEach(ey => {
				lastPoints = ey.totalPoints;
			})
			res.status(201).json({first: firstPoints, last: lastPoints, arr: rangedArray});
		}
	})
}

module.exports.addOrUpdateStats = (req, res) => {
	const {student_id, exam_id, class_id} = req.body;
	connection.query('SELECT seqIds FROM trims WHERE id = ?', [exam_id], (err, resp) => {
		if(err) console.log(err);
		else{
			 const {seqIds} = resp[0]
			 const seqs = JSON.parse(seqIds);
			 const fEvalId = seqs[0];
			 const sEvalId = seqs[1];
			 connection.query('SELECT * FROM notes WHERE exam_id = ? AND student_id = ?', [fEvalId, student_id], (e, fEvalNotes) => {
				 if(e) console.log(e);
				 connection.query("SELECT * FROM notes WHERE exam_id = ? AND student_id = ?", [sEvalId, student_id], (e2, sEvalNOtes) => {
					if(e2) console.log(e2);
					let ar = [];
					fEvalNotes.forEach(n1 => {
						sEvalNOtes.forEach(n2 => {
							if (n1.matiere_id === n2.matiere_id && n1.tag_name === n2.tag_name) {
								let v = Math.round((parseFloat(n1.value) + parseFloat(n2.value)) / 2);
								v = v.toString();
								let obj = {};
								obj.student_id = n1.student_id;
								obj.class_id = n1.class_id;
								obj.matiere_id = n1.matiere_id;
								obj.tag_name = n1.tag_name;
								obj.value = v;
								ar.push(obj)
							}
						})

					})

					let totalPoints = 0;

					ar.forEach(note => {
						totalPoints += parseFloat(note.value);
					})
					connection.query('SELECT * FROM stats WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student_id, exam_id, class_id], (err, stats) => {
						if(stats.length < 1) {
							connection.query('INSERT INTO stats(student_id, class_id, exam_id, totalPoints) VALUES(?, ?, ?, ?)', [student_id, class_id, exam_id, totalPoints], (err5, resp5) => {
								if(err5) console.log(err5);
								else res.status(201).json({success: true})
							})
						}else{
							connection.query('UPDATE stats SET totalPoints = ? WHERE student_id = ? AND class_id = ? AND exam_id = ?', [totalPoints, student_id, class_id, exam_id], (err5, resp5) => {
								if(err5) console.log(err5);
								else res.status(201).json({success: true})
							})
						}
					})
					
				 })
			 })
		}
	})
}