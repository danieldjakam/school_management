import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className='conError'>
        <h1 class="text-center ">404</h1>
        <div class="content_box_404">
            <h3 class="h2">
                La page que vous recherchez n'est pas disponible
            </h3>
        
            <Link to={'/class'} class="link_404"> Aller dans les classes</Link>
        </div>
    </div>
  )
}

export default Error404