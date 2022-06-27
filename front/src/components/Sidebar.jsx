import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {HospitalFill, PeopleFill, GearFill, People, Search, BookFill, FileTextFill, ArrowLeftCircleFill} from 'react-bootstrap-icons'
// import Home from '../pages/Home';
import logo from '../images/sem.png'
import avatar from '../images/1.png'

function Sidebar() {
    const [page, setPage] = useState(window.location.href.split('/')[3])
    const navigate = useNavigate();
    const [userInfos, setUserInfos] = useState({});
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        (
        async () => {
            if (sessionStorage.user !== undefined) {
                setLoading(true);
            const resp = await fetch('http://localhost:4000/users/getTeacherOrAdmin/', {headers: {
              'Authorization': sessionStorage.user
            }})
            const data = await resp.json();
            setUserInfos(data);
            setLoading(false);
            }
        }
        )()
    }, [])

    const links = sessionStorage.stat === 'ad' ? [
        {
            name: 'Classes',
            href: '/class',
            icon: <HospitalFill/>
        },
        {
            name: 'Enseignants',
            href: '/teachers',
            icon: <PeopleFill/>
        },
        {
            name: 'Competences',
            href: '/competences',
            icon: <BookFill/>
        },
        {
            name: 'Matieres',
            href: '/matieres',
            icon: <FileTextFill/>
        },
        {
            name: 'Rechercher',
            href: '/search',
            icon: <Search/>
        },
        {
            name: 'Profil',
            href: '/params',
            icon: <People/>
        },
        {
            name: 'Parametres',
            href: '/settings',
            icon: <GearFill/>
        }
    ] : [
        {
            name: 'Eleves',
            href: '/students/'+sessionStorage.classId,
            icon: <PeopleFill/>
        },
        {
            name: 'Sequences',
            href: '/seqs',
            icon: <FileTextFill/>
        },
        {
            name: 'Trimestres',
            href: '/trims',
            icon: <BookFill/>
        },
        {
            name: 'Rechercher',
            href: '/search',
            icon: <Search/>
        },
        {
            name: 'Profil',
            href: '/params',
            icon: <People/>
        }
    ]

    const logout = () => {
        sessionStorage.removeItem('stat')
        sessionStorage.removeItem('user')
        navigate('/login')
        window.location.reload()
    }
    if(sessionStorage.user !== undefined){
        return <div className="sidebar">
            <div className="toggler"></div>
            <div className="sidebar-brand">
                <img src={logo} alt="application logo" style={{width: '100px', height: '120px'}} className="sidebar-brand-logo" />
            </div>
            <div className="sidebar-links">
                {
                    links.map((link, k) => {
                        return <Link key={k} to={link.href} className={`sidebar-link ${page === link.href ? 'active' : ''}`} onClick={() => {setPage(link.href)}}>
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    })
                }
            </div>
            <div className="sidebar-user">
                <div className="user-avatar" onClick={() => {logout()}}>
                    <img src={avatar} alt={" avatar"} />
                    <div className="logoutBtn">
                        <ArrowLeftCircleFill/>
                    </div>
                </div>
                <div className="user-infos">
                    <h5>{`@${ userInfos !== {} ? sessionStorage.stat === 'ad' ? userInfos.username : userInfos.name + " " + userInfos.subname: ''}`}</h5>
                    <h5>{ !loading ? sessionStorage.stat === 'ad' ? 'Admin' : 'Enseignant' : ''}</h5>
                </div>
            </div>
        </div>
    }else{
        return <></>
    }
}

export default Sidebar