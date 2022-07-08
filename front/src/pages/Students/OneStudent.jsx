import React, { useState } from 'react'
import * as Swal from 'sweetalert2'
import { studentTraductions } from '../../local/student'
import { host } from '../../utils/fetch'
import { getLang } from '../../utils/lang'


function Onestudent({student, key}) {
    const [loadingDel, setLoadingDel] = useState(false)
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

    const date = new Date(student.birthday).getDate() + ' '+ months[new Date(student.birthday).getMonth()] + " " + new Date(student.birthday).getUTCFullYear()
    const deletestudent = (id) => {
        Swal.fire({
            title: 'Confirmez la suppression !',
            icon: 'question',
            text: 'Cette action est irreversible !!'
        }).then(res => {
            if (res.value) {
                setLoadingDel(true);
                fetch(host+'/students/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
                    .then((res) => res.json())
                    .then((res) => { 
                        console.log(res);
                        if (res.success) {
                            window.location.reload();
                        }else{
                            console.log(res.message);
                        }
                    })
                setLoadingDel(false)
            }
        })
    }
    return <div className="clas" key={key}>
            <div className="top">
                <div className="classAbs">
                    {student.name}
                </div>
                <div className="qq">
                    <span className="q">
                        {studentTraductions[getLang()].name}: 
                    </span>
                    <span className="r">
                        {student.name}
                    </span>
                </div>
                <div className="qq">
                    <span className="q">
                    {studentTraductions[getLang()].subname}: 
                    </span>
                    <span className="r">
                        {student.subname}
                    </span>
                </div> 
                <div className="qq">
                    <span className="q">
                    {studentTraductions[getLang()].s}:
                    </span>
                    <span className="r">
                        {student.section === 'm' ? 'Masculin' : 'Feminin'}  
                    </span>
                </div>  
                <div className="qq">
                    <span className="q">
                    {studentTraductions[getLang()].b}: 
                    </span>
                    <span className="r">
                        {date}
                    </span>
                </div>
                <div className="qq">
                    <span className="q">
                    {studentTraductions[getLang()].class}: 
                    </span>
                    <span className="r">
                        {student.className}
                    </span>
                </div>
            </div>
            <div className="bottom">
                <button className="btn btn-danger" onClick={() => {deletestudent(student.id)}}> {loadingDel ? studentTraductions[getLang()].deleting : studentTraductions[getLang()].delete} </button>
            </div>  
            </div>
}

export default Onestudent