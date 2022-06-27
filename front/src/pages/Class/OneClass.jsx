import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Swal from 'sweetalert2'
import { host } from '../../utils/fetch'

function OneClass({clas, key}) {
    const [loadingDel, setLoadingDel] = useState(false)
    const deleteClass = (id) => {
        Swal.fire({
            title: 'Confirmez la suppression !',
            icon: 'question',
            text: 'Cette action est irreversible !!'
        }).then(res => {
            if (res.value) {
                setLoadingDel(true);
                fetch(host+'/class/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
                    .then((res) => res.json())
                    .then((res) => { 
                        console.log(res);
                        if (res.success) {
                            window.location.reload();
                        }else{
                            console.log(res.message);
                            // setError(res.message)
                        }
                    })
                setLoadingDel(false)
            }
        })
    }
  return <div className="clas" key={key}>
            <div className="top">
                <div className="classAbs">
                    {clas.name}
                </div>
                <div className="qq">
                    <span className="q">
                        Classe:
                    </span>
                    <span className="r">
                        {clas.name}
                    </span>
                </div>
                <div className="qq">
                    <span className="q">
                        Section:
                    </span>
                    <span className="r">
                        {clas.section === 'en' ? 'Anglophone' : clas.section === 'fr' ? 'Francophone' : 'Maternelle'}
                    </span>
                </div>
            </div>
            <div className="bottom">
                <Link to={`/students/${clas.id}`} className="btn btn-primary"> Visiter </Link>
                <button className="btn btn-danger" onClick={() => {deleteClass(clas.id)}}> {loadingDel ? 'Suppression..' : 'Supprimer'} </button>
            </div>  
            </div>
}

export default OneClass