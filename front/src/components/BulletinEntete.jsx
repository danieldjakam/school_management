import React from 'react'
const BulletinEntete = ({student, currentClass, actualExam}) => {
        
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
    return <div>
            <table className='table2'style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly'}} >
                <thead style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                    <tr style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                        <th>
                            REPUBLIQUE DU CAMEROUN <br />
                            Paix - Travail - Patrie <br />
                            GROUPE SCOLAIRE BILINGUE PRIVE  <br />
                            LAIC LA SEMENCE  <br />
                            BP: 1661 DOUALA BANGUE <br />
                            TEL: (237) 33 08 95 82/699717529 <br />
                        </th>
                        <th className=' '>
                            <img src='../../../assets/sem.png' height={200} />
                        </th>
                        <th className=''>
                            REPUBLIC OF CAMEROON  <br />
                            Peace - Work - Father/land  <br />
                            GROUPE SCOLAIRE BILINGUE PRIVE <br /> LAIC LA SEMENCE  <br />
                            P.O Box : 1661 DOUALA-BANGUE  <br />
                            Tel : (237) 33089582 <br />
                        </th>
                    </tr>
                </thead>
            </table>

            <h2 style={{textAlign: 'center'}}>
                BULLETIN D'EVALUATION {actualExam.name} 2021/2022
            </h2>

            
            <div>
            <table className='table table-light table-bordered table-striped' style={{marginLeft: '5vw', width: '90vw'}}>
            <thead style={{textAlign: 'center'}}>
                <tr>
                    <th>NOMS ET PRENOMS</th>
                    <th colSpan={3}>
                        {student.name} {student.subname}
                    </th>
                </tr>
                <tr>
                    <th>DATE DE NAISSANCE</th>
                    <th >
                        {
                            date
                        }
                    </th>
                    <th>SEXE</th>
                    <th>
                        {
                            student.sex === 'm' ? 'Masculin' : 'Feminin'
                        }
                    </th>
                </tr>
                <tr>
                    <th>CLASSE</th>
                    <th>
                        {
                            currentClass.name
                        }
                    </th>
                    <th>ENSEIGNANT</th>
                    <th>{currentClass.tName} {currentClass.subname}</th>
                </tr>
            </thead>
            </table>
            </div>
            
        </div>
}

export default BulletinEntete;