module.exports.addOrUpdateNotes = async (req, res) => {
    const {value, exam_id, student_id, class_id, sub_com_id, tag_name} = req.body;
    let val = 0;
    val = parseFloat(value) > 0 ? value : 0;  
    val = parseFloat(value) > 20 ? 20 : value;
    req.connection.query('SELECT is_editable FROM settings WHERE school_id = ?', [req.payload.school_id], (errrrrrrr, respppppp) => {
		const {is_editable} = respppppp[0];

		if (is_editable === 'yes') {
			if ( value && exam_id && exam_id !== '' && student_id && student_id !== '' && class_id && class_id !== '' && sub_com_id && sub_com_id !== '' && tag_name && tag_name !== ''  ) {
				req.connection.query('SELECT * FROM sub_com WHERE id = ?', [sub_com_id], (error, respon) => {
					if(error) console.log(error);
					const tags = JSON.parse(respon[0].tags);
					const speTag = tags.find(s => s.name === tag_name);
					const over = parseFloat(speTag.over);
					if (parseFloat(value) <= over) {
					 req.connection.query('SELECT * FROM notes WHERE exam_id = ? AND student_id = ? AND sub_com_id = ? AND tag_name = ?', [exam_id, student_id, sub_com_id, tag_name], (err, resp) => {
						if (err) {
							console.log(err);
							
						} else {
							if (resp.length < 1) {
								req.connection.query('INSERT INTO notes(student_id, exam_id, class_id, sub_com_id, tag_name, value) VALUES(?, ?, ?, ?, ?, ?)', [student_id, exam_id, class_id, sub_com_id, tag_name, val], (err2, resp2) => {
									if(!err2){
										req.connection.query('SELECT * FROM notes WHERE exam_id = ? AND student_id = ? AND class_id = ?', [exam_id, student_id, class_id], (err3, notes) => {
											let totalPoints = 0;
											notes.forEach(note => {
												totalPoints += parseFloat(note.value)
											})
												req.connection.query('SELECT * FROM stats WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student_id, exam_id, class_id], (err, stats) => {
													if(stats.length < 1) {
														req.connection.query('INSERT INTO stats(student_id, class_id, exam_id, totalPoints) VALUES(?, ?, ?, ?)', [student_id, class_id, exam_id, totalPoints], (err5, resp5) => {
															if(err5) console.log(err5);
															else res.status(201).json({success: true})
														})
													}else{
														req.connection.query('UPDATE stats SET totalPoints = ? WHERE student_id = ? AND class_id = ? AND exam_id = ?', [totalPoints, student_id, class_id, exam_id], (err5, resp5) => {
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
								req.connection.query('UPDATE notes SET student_id = ?, exam_id = ?, class_id = ?, sub_com_id = ?, tag_name = ?, value = ? WHERE exam_id = ? AND student_id = ? AND sub_com_id = ? AND tag_name = ?', [student_id, exam_id, class_id, sub_com_id, tag_name, val, exam_id, student_id, sub_com_id, tag_name], (err2, resp) => {
									if(!err2){
										req.connection.query('SELECT * FROM notes WHERE exam_id = ? AND student_id = ? AND class_id = ?', [exam_id, student_id, class_id], (err3, notes) => {
											let totalPoints = 0;
											notes.forEach(note => {
												totalPoints += parseFloat(note.value)
											})
											req.connection.query('SELECT * FROM stats WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student_id, exam_id, class_id], (err, stats) => {
												if(stats.length < 1) {
													req.connection.query('INSERT INTO stats(student_id, class_id, exam_id, totalPoints) VALUES(?, ?, ?, ?)', [student_id, class_id, exam_id, totalPoints], (err5, resp5) => {
														if(err5) console.log(err5);
														else res.status(201).json({success: true})
													})
												}else{
													req.connection.query('UPDATE stats SET totalPoints = ? WHERE student_id = ? AND class_id = ? AND exam_id = ?', [totalPoints, student_id, class_id, exam_id], (err5, resp5) => {
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

module.exports.addOrUpdateNotes3 = async (req, res) => {
    const {value, exam_id, student_id, class_id, subject_id} = req.body;
	
    req.connection.query('SELECT is_editable, year_school FROM settings WHERE school_id = ?', [req.payload.school_id], (err, settings) => {
		const {is_editable, year_school} = settings[0];
		if (err) {
			console.log(err);			
		} else {
			if (is_editable === 'yes') {
				if ( value && exam_id && student_id && class_id && subject_id) {
					req.connection.query('SELECT * FROM subjects WHERE id = ?', [subject_id], (err2, subjects) => {
						const {over} = subjects[0];
						if (value < over) {
							req.connection.query('SELECT * FROM notesBySubject WHERE student_id = ? AND class_id = ? AND subject_id = ? AND exam_id = ? AND school_year = ?', [student_id, class_id, subject_id, exam_id, year_school], (err3, notes) => {
								if (err3) {
									console.log(err3);								
								} else {
									if (notes.length < 1) {
										req.connection.query('INSERT INTO notesBySubject(student_id, exam_id, class_id, subject_id, school_year, value) VALUES(?, ?, ?, ?, ?, ?)', [student_id, exam_id, class_id, subject_id, year_school, value], (err2, resp2) => {
											if(!err2){

												req.connection.query('SELECT * FROM notesBySubject WHERE exam_id = ? AND student_id = ? AND class_id = ?', [exam_id, student_id, class_id], (err3, notes) => {
													let totalPoints = 0;
													notes.forEach(note => {
														totalPoints += parseFloat(note.value)
													})
													req.connection.query('SELECT * FROM stats WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student_id, exam_id, class_id], (err, stats) => {
														if(stats.length < 1) {
															req.connection.query('INSERT INTO stats(student_id, class_id, exam_id, totalPoints) VALUES(?, ?, ?, ?)', [student_id, class_id, exam_id, totalPoints], (err5, resp5) => {
																if(err5) console.log(err5);
																else res.status(201).json({success: true})
															})
														}else{
															req.connection.query('UPDATE stats SET totalPoints = ? WHERE student_id = ? AND class_id = ? AND exam_id = ?', [totalPoints, student_id, class_id, exam_id], (err5, resp5) => {
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
										req.connection.query('UPDATE notesBySubject SET value = ? WHERE exam_id = ? AND student_id = ? AND subject_id = ? AND school_year = ?', [value, exam_id, student_id, subject_id, year_school], (err2, resp) => {
											if(!err2){

												req.connection.query('SELECT * FROM notesBySubject WHERE exam_id = ? AND student_id = ? AND class_id = ?', [exam_id, student_id, class_id], (err3, notes) => {
													let totalPoints = 0;
													notes.forEach(note => {
														totalPoints += parseFloat(note.value)
													})
													req.connection.query('SELECT * FROM stats WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student_id, exam_id, class_id], (err, stats) => {
														if(stats.length < 1) {
															req.connection.query('INSERT INTO stats(student_id, class_id, exam_id, totalPoints) VALUES(?, ?, ?, ?)', [student_id, class_id, exam_id, totalPoints], (err5, resp5) => {
																if(err5) console.log(err5);
																else res.status(201).json({success: true})
															})
														}else{
															req.connection.query('UPDATE stats SET totalPoints = ? WHERE student_id = ? AND class_id = ? AND exam_id = ?', [totalPoints, student_id, class_id, exam_id], (err5, resp5) => {
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
								}
							})
						} else {
							res.status(401).json({success: false, message: `Valeur superieur au max (${over})`})
						}
					})
				}else{
					res.status(401).json({success: false, message: "Au moins un champ manquant!!"})
				}
			} else {
				res.status(401).json({success: false, message: "Ce n'est pas encore le moment d'editer les notes!!! Patientez svp!!"})
			}
		}
	})
}

module.exports.addOrUpdateNotes2 = async (req, res) => {
    const {value, exam_id, student_id, class_id, activitieId, domain_id} = req.body;
	console.log(req.body);
	
	
    req.connection.query('SELECT is_editable, year_school FROM settings WHERE school_id = ?', [req.payload.school_id], (err, settings) => {
		const {is_editable, year_school} = settings[0];
		if (err) {
			console.log(err);			
		} else {
			if (is_editable === 'yes') {
				if ( value && exam_id && student_id && class_id && domain_id) {
					req.connection.query('SELECT * FROM subjects WHERE id = ?', [domain_id], (err2, subjects) => {
						const {over} = subjects[0];
						if (value < over) {
							req.connection.query('SELECT * FROM notesByDomain WHERE student_id = ? AND class_id = ? AND domain_id = ? AND exam_id = ? AND activitieId = ? AND school_year = ?', [student_id, class_id, domain_id, exam_id, activitieId, year_school], (err3, notes) => {
								if (err3) {
									console.log(err3);								
								} else {
									if (notes.length < 1) {
										req.connection.query('INSERT INTO notesByDomain(student_id, exam_id, class_id, domain_id, school_year, value, activitieId) VALUES(?, ?, ?, ?, ?, ?, ?)', [student_id, exam_id, class_id, domain_id, year_school, value, activitieId], (err2, resp2) => {
											if(!err2){}
											else console.log(err2);
										})
										}else{
										req.connection.query('UPDATE notesByDomain SET value = ? WHERE exam_id = ? AND student_id = ? AND domain_id = ? AND activitieId = ? AND school_year = ?', [value, exam_id, student_id, domain_id, activitieId, year_school], (err2, resp) => {
											if(!err2){
											}
											else console.log(err);
										})
										}
								}
							})
						} else {
							res.status(401).json({success: false, message: `Valeur superieur au max (${over})`})
						}
					})
				}else{
					res.status(401).json({success: false, message: "Au moins un champ manquant!!"})
				}
			} else {
				res.status(401).json({success: false, message: "Ce n'est pas encore le moment d'editer les notes!!! Patientez svp!!"})
			}
		}
	})
}

module.exports.getNotes = async (req, res) => {

    req.connection.query('SELECT year_school FROM settings WHERE school_id = ?', [req.payload.school_id], (err, settings) => {
		const {year_school} = settings[0];
		req.connection.query('SELECT * FROM notes WHERE class_id = ? AND exam_id = ? AND school_year = ?', [req.params.class_id, req.params.exam_id, year_school], (err, resp) => {
			if(err) console.log(err);
			else res.status(201).json(resp)			
		})
	})
}

module.exports.getNotes2 = async (req, res) => {

    req.connection.query('SELECT year_school FROM settings WHERE school_id = ?', [req.payload.school_id], (err, settings) => {
		const {year_school} = settings[0];
		req.connection.query('SELECT * FROM notesByDomain WHERE class_id = ? AND exam_id = ? AND school_year = ?', [req.params.class_id, req.params.exam_id, year_school], (err, resp) => {
			if(err) console.log(err);
			else res.status(201).json(resp)			
		})
	})
}

module.exports.getNotes3 = async (req, res) => {

    req.connection.query('SELECT year_school FROM settings WHERE school_id = ?', [req.payload.school_id], (err, settings) => {
		const {year_school} = settings[0];
		req.connection.query('SELECT * FROM notesBySubject WHERE class_id = ? AND exam_id = ? AND school_year = ?', [req.params.class_id, req.params.exam_id, year_school], (err, resp) => {
			if(err) console.log(err);
			else res.status(201).json(resp)			
		})
	})
}

module.exports.getAllNotes = (req, res) => {
    req.connection.query('SELECT * FROM notes', (err, resp) => {
	   if(err) console.log(err);
	   else res.status(201).json(resp)
    })
}

module.exports.getOneNotes = (req, res) => {
    req.connection.query('SELECT * FROM notes WHERE id = ?', [req.params.id], (err, resp) => {
	   if(err) console.log(err);
	   else res.status(201).json(resp[0])
    })
}

module.exports.getNotesByTrim = async (req, res) => {
    req.connection.query('SELECT seqIds FROM trims WHERE id = ?', [req.params.id], (err, resp) => {
	   if(err) console.log(err);
		else{
			const {seqIds} = resp[0]
			const seqs = JSON.parse(seqIds);
			const fEvalId = seqs[0];
			const sEvalId = seqs[1];
			req.connection.query('SELECT * FROM notes WHERE exam_id = ?', [fEvalId], (e, fEvalNotes) => {
				if(e) console.log(e);
				req.connection.query("SELECT * FROM notes WHERE exam_id = ?", [sEvalId], (e2, sEvalNOtes) => {
					if(e2) console.log(e2);
					let ar = [];
					fEvalNotes.forEach(n1 => {
						sEvalNOtes.forEach(n2 => {
							
							if (n1.matiere_id === n2.matiere_id && n1.tag_name === n2.tag_name && n1.student_id === n2.student_id) {
								let v : string = Math.round((parseFloat(n1.value) + parseFloat(n2.value)) / 2).toString();
								let obj : {
									student_id: string,
									class_id: string,
									matiere_id: string,
									tag_name: string,
									value: string,
								} = {
									student_id: '',
									class_id: '',
									matiere_id: '',
									tag_name: '',
									value: '',
								};
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
    req.connection.query('SELECT seqIds FROM trims WHERE id = ?', [req.params.trim_id], (err, resp) => {
	   if(err) console.log(err);
	   else{
			const {seqIds} = resp[0]
			const seqs = JSON.parse(seqIds);
			const fEvalId = seqs[0];
			const sEvalId = seqs[1];
			req.connection.query('SELECT * FROM notes WHERE exam_id = ? AND student_id = ?', [fEvalId, req.params.student_id], (e, fEvalNotes) => {
				if(e) console.log(e);
				req.connection.query("SELECT * FROM notes WHERE exam_id = ? AND student_id = ?", [sEvalId, req.params.student_id], (e2, sEvalNOtes) => {
					if(e2) console.log(e2);
					let ar = [];
					fEvalNotes.forEach(n1 => {
						sEvalNOtes.forEach(n2 => {
							if (n1.matiere_id === n2.matiere_id && n1.tag_name === n2.tag_name) {
								let v : string = Math.round((parseFloat(n1.value) + parseFloat(n2.value)) / 2).toString();
								let obj : {
									student_id: string,
									class_id: string,
									matiere_id: string,
									tag_name: string,
									value: string,
								} = {
									student_id: '',
									class_id: '',
									matiere_id: '',
									tag_name: '',
									value: '',
								};
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
	const {exam_id, class_id} = req.params;
	
	req.connection.query('SELECT * FROM stats WHERE class_id = ? AND exam_id = ?', [class_id, exam_id], (err, resp) => {
		if(err) console.log(err);
		else {
			let rangedArray = [];
			let firstPoints = 0;
			let lastPoints = {};
			let g = [];
			if (resp.length > 1) {
				rangedArray = resp.sort((a, b) => b.totalPoints - a.totalPoints);
				g = resp.sort((a, b) => b.totalPoints - a.totalPoints);
				firstPoints = g[0].totalPoints;
				lastPoints = {};
				g.forEach(ey => {
					lastPoints = ey.totalPoints;
				})
			}
			console.log(firstPoints, lastPoints, rangedArray);
			
			res.status(201).json({first: firstPoints, last: lastPoints, arr: rangedArray});
		}
	})
}

module.exports.addOrUpdateStats = (req, res) => {
	const {student_id, exam_id, class_id} = req.body;
	req.connection.query('SELECT seqIds FROM trims WHERE id = ?', [exam_id], (err, resp) => {
		if(err) console.log(err);
		else{
			 const {seqIds} = resp[0]
			 const seqs = JSON.parse(seqIds);
			 const fEvalId = seqs[0];
			 const sEvalId = seqs[1];
			 req.connection.query('SELECT * FROM notes WHERE exam_id = ? AND student_id = ?', [fEvalId, student_id], (e, fEvalNotes) => {
				 if(e) console.log(e);
				 req.connection.query("SELECT * FROM notes WHERE exam_id = ? AND student_id = ?", [sEvalId, student_id], (e2, sEvalNOtes) => {
					if(e2) console.log(e2);
					let ar = [];
					fEvalNotes.forEach(n1 => {
						sEvalNOtes.forEach(n2 => {
							if (n1.matiere_id === n2.matiere_id && n1.tag_name === n2.tag_name && n1.student_id === n2.student_id) {
								let v = Math.round((parseFloat(n1.value) + parseFloat(n2.value)) / 2).toString();
								let obj : {
									student_id: string,
									class_id: string,
									matiere_id: string,
									tag_name: string,
									value: string,
								} = {
									student_id: '',
									class_id: '',
									matiere_id: '',
									tag_name: '',
									value: '',
								};
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
					req.connection.query('SELECT * FROM stats WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student_id, exam_id, class_id], (err, stats) => {
						if(stats.length < 1) {
							req.connection.query('INSERT INTO stats(student_id, class_id, exam_id, totalPoints) VALUES(?, ?, ?, ?)', [student_id, class_id, exam_id, totalPoints], (err5, resp5) => {
								if(err5) console.log(err5);
								else res.status(201).json({success: true})
							})
						}else{
							req.connection.query('UPDATE stats SET totalPoints = ? WHERE student_id = ? AND class_id = ? AND exam_id = ?', [totalPoints, student_id, class_id, exam_id], (err5, resp5) => {
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

module.exports.calTrimNotes2 = (req, res) => {
	const {exam_id, class_id} = req.body;
	req.connection.query('SELECT * FROM students WHERE class_id = ?', [class_id], (err, students) => {
		if (err) console.log(err);
		else{
			students.forEach(student => {
				req.connection.query('SELECT * FROM trims WHERE id = ?', [exam_id], (err2, trims) => {
					if (err2) console.log(err2);
					else{
						let {seqIds, trim_id} = trims[0];
						seqIds = JSON.parse(seqIds);
						req.connection.query('SELECT * FROM notesBySubject WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student.id, seqIds[0], class_id], (err3, fisrtSeqNotes) => {
							req.connection.query('SELECT * FROM notesBySubject WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student.id, seqIds[1], class_id], (err4, secondSeqNotes) => {
								fisrtSeqNotes.forEach(n1 => {
									secondSeqNotes.forEach(n2 => {
										if (n1.subject_id === n2.subject_id && n1.class_id === n2.class_id && n1.student_id === n2.student_id) {
											let v : string = Math.round((parseFloat(n1.value) + parseFloat(n2.value)) / 2).toString();
											
											req.connection.query('SELECT is_editable, year_school FROM settings WHERE school_id = ?', [req.payload.school_id], (err, settings) => {
												const {year_school} = settings[0];
												req.connection.query('SELECT * FROM notesBySubject WHERE student_id = ? AND class_id = ? AND subject_id = ? AND exam_id = ? AND school_year = ?', [student.id, class_id, n1.subject_id, exam_id, year_school], (err3, notes) => {
													if (err3) {
														console.log(err3);								
													} else {
														if (notes.length < 1) {
															req.connection.query('INSERT INTO notesBySubject(student_id, exam_id, class_id, subject_id, school_year, value) VALUES(?, ?, ?, ?, ?, ?)', [student.id, exam_id, class_id, n1.subject_id, year_school, v], (err2, resp2) => {
																if(!err2){
	
																	req.connection.query('SELECT * FROM notesBySubject WHERE exam_id = ? AND student_id = ? AND class_id = ?', [exam_id, student.id, class_id], (err3, notes) => {
																		let totalPoints = 0;
																		notes.forEach(note => {
																			totalPoints += parseFloat(note.value)
																		})
																		req.connection.query('SELECT * FROM stats WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student.id, exam_id, class_id], (err, stats) => {
																			if(stats.length < 1) {
																				req.connection.query('INSERT INTO stats(student_id, class_id, exam_id, totalPoints) VALUES(?, ?, ?, ?)', [student.id, class_id, exam_id, totalPoints], (err5, resp5) => {
																					if(err5) console.log(err5);
																				})
																			}else{
																				req.connection.query('UPDATE stats SET totalPoints = ? WHERE student_id = ? AND class_id = ? AND exam_id = ?', [totalPoints, student.id, class_id, exam_id], (err5, resp5) => {
																					if(err5) console.log(err5);
																				})
																			}
																		})
																	})
																}
																else console.log(err2);
															})
															}else{
															req.connection.query('UPDATE notesBySubject SET value = ? WHERE exam_id = ? AND student_id = ? AND subject_id = ? AND school_year = ?', [v, exam_id, student.id, n1.subject_id, year_school], (err2, resp) => {
																if(!err2){
	
																	req.connection.query('SELECT * FROM notesBySubject WHERE exam_id = ? AND student_id = ? AND class_id = ?', [exam_id, student.id, class_id], (err3, notes) => {
																		let totalPoints = 0;
																		notes.forEach(note => {
																			totalPoints += parseFloat(note.value)
																		})
																		req.connection.query('SELECT * FROM stats WHERE student_id = ? AND exam_id = ? AND class_id = ?', [student.id, exam_id, class_id], (err, stats) => {
																			if(stats.length < 1) {
																				req.connection.query('INSERT INTO stats(student_id, class_id, exam_id, totalPoints) VALUES(?, ?, ?, ?)', [student.id, class_id, exam_id, totalPoints], (err5, resp5) => {
																					if(err5) console.log(err5);
																				})
																			}else{
																				req.connection.query('UPDATE stats SET totalPoints = ? WHERE student_id = ? AND class_id = ? AND exam_id = ?', [totalPoints, student.id, class_id, exam_id], (err5, resp5) => {
																					if(err5) console.log(err5);
																				})
																			}
																		})
																	})
																}
																else console.log(err);
															})
														}
													}
												})
											})
										}
									})
								})
							})
						})
					}
				})
			})
		}
		res.status(201).json({success: true})
	})
}