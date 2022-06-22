import React from 'react'

const EditTeacher = ({error, setIsMdp, mdp}) => {

    return <div className="card login-card">
      <div className="card-head">
        <h1>Voir le mot de passe</h1>
      </div>
        <div className="card-content">
            {
                mdp
            }
        </div>
        <div className="card-footer">
          <button onClick={() => {setIsMdp(v => !v)}} type="submit">Fermer (Annuler)</button>
        </div>
    </div>
}

export default EditTeacher;