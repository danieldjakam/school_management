import React, { useEffect, useState } from 'react';
import * as Swal from 'sweetalert2'
import { host } from '../utils/fetch';
function Params() {
  
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    agree: false
  })
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false);
  const [userInfos, setUserInfos] = useState([]);
  
  useEffect(() => {
    (
        async () => {
          if (sessionStorage.stat === 'ad') {
            setLoading(true)
            const resp = await fetch(host+'/users/all', {headers: {
              'Authorization': sessionStorage.user
            }})
            const data = await resp.json();
            setAdmins(data);
            setLoading(false);
          }
        }
    )()
  }, [])
   
  useEffect(() => {
    (
        async () => {
            setLoading(true)
            const resp = await fetch(host+'/users/getTeacherOrAdmin/', {headers: {
              'Authorization': sessionStorage.user
            }})
            const data = await resp.json();
            setUserInfos(data);
            setLoading(false);
        }
    )()
  }, [])

  const handleRegister = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch(host+'/users/register', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}})
      .then((res) => res.json())
      .then(res => {
        if (res.success) {
          setSuccess('Nouvel administrateur enregistre')
          setTimeout(() => {
            setSuccess('')
          }, 5000)
          window.location.reload()
        }else{
          console.log(res.message);
          setError(res.message)
        }
      })
      setLoading(false)
  }
  const deleteAdmin = (id) => {
    Swal.fire({
        title: 'Confirmez la suppression !',
        icon: 'question',
        text: 'Cette action est irreversible !!'
    }).then(res => {
        if (res.value) {
            fetch(host+'/users/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
                .then((res) => res.json())
                .then((res) => { 
                    console.log(res);
                    if (res.success) {
                        window.location.reload();
                    }else{
                        console.log(res.message);
                        setError(res.message)
                    }
                })
        }
    })
}
  return (
    <div className='container proCon'>
      {
        success !== '' ? <div className="alert alert-success">{success}</div> : <></>
      }
      {
        sessionStorage.stat === 'ad' ? <div className="profile">
        <div className="addAdmin">
          <div className="card ">
            <div className="card-head">
              <h1>Ajouter un administrateur</h1>
            </div>
            <form onSubmit={(e) => {handleRegister(e)}}>
              <div className="card-content">
                <div className="field">
                    <div className="label">Nom d'utilisateur</div>
                    <input type="text" value={data.username} onChange={(e) => {setData(val => {return {...val, username: e.target.value}})}} placeholder="Entrer un nom d'utilisateur valide" />
                </div> 
                <div className="field">
                    <div className="label">Email ou Pseudo</div>
                    <input type="email" value={data.email} onChange={(e) => {setData(val => {return {...val, email: e.target.value}})}} placeholder="Entrer une email valide" />
                </div> 
                <div className="field">
                    <div className="label">Mot de passe</div>
                    <input type="password" value={data.password} onChange={(e) => {setData(val => {return {...val, password: e.target.value}})}}
                    placeholder="Entrez votre mot de passe" />
                </div> 
                <div className="field">
                    <div className="label">Mot de passe</div>
                    <input type="password" value={data.confirm} onChange={(e) => {setData(val => {return {...val, confirm: e.target.value}})}}
                    placeholder="Confirmez votre mot de passe" />
                </div> 

                {
                  error !== '' ? <div className="error">{error}</div> : ''
                } 
              </div>
              <div className="card-footer">
                <button type="submit">{loading ? 'Ajout...' : 'Ajouter'}</button>
              </div>
            </form>
          </div>
        </div>
        <div className="profileBox">
          <div className="card">
            <div className="card-content pro">
              <div className="d">
                <div className="img">
                  <img src="assets/1.png" alt="Asset" />
                </div>
              </div>
              <h2>
                {userInfos.username}
              </h2>
              <h5>
                {userInfos.email}
              </h5> 
              <h5>
                {'Admin'}
              </h5>
            </div>
            <div className="foot">
              <button className="btn btn-blue" type="submit">{'Editer mon profil'}</button>
              <button onClick={() => {}} type="submit"> Se deconnecter</button>
            </div>
            
          </div>

          <div className="card d" style={{marginTop: '20px'}}>
            <div className="card-head">
              <h1>Tous les administrateurs</h1>
            </div>

            <div className="card-content">
              {
                admins.length > 0 ? admins.map((admin, id) => {
                  return <div className="adminCard" key={id}>
                          <div className="left">
                            <div className="img">
                              <img src="assets/1.png" alt="" />
                            </div>
                            <div className="about">
                              <h1>
                                {admin.username}
                              </h1>
                            </div>
                          </div>
          
                          <div className="rigth">
                            <button onClick={() => {deleteAdmin(admin.id)}} type="submit"> Supprimer</button>
                          </div>
                        </div>
                }) : <div className="adminCard">
                      <h3>Aucun admin pour l'instant</h3>
                    </div>
              }
            </div>
          </div>
        </div>
      </div>
      : <div className="pro" style={{width: '50%', marginLeft: '25%'}}>
        
        <div className="card">
            <div className="card-content pro">
              <div className="d">
                <div className="img">
                  <img src="assets/1.png" alt="Asset" />
                </div>
              </div>
              <h2>
                {userInfos.name + " " + userInfos.subname}
              </h2>
              <h5>
                {userInfos.matricule}
              </h5>
              <h5>
                {'Enseignant'}
              </h5> 
            </div>
            <div className="foot">
              <button className="btn btn-blue" type="submit">{'Editer mon profil'}</button>
              <button onClick={() => {}} type="submit"> Se deconnecter</button>
            </div>
            
          </div>
        </div>
      }
    </div>
  )
}

export default Params