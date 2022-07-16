import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {HospitalFill, HouseHeartFill, PeopleFill, GearFill, People, Search, BookFill, FileTextFill, ArrowLeftCircleFill} from 'react-bootstrap-icons'
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
            }}).catch(e => console.log(e))
            const data = await resp.json();
            setUserInfos(data);
            setLoading(false);
            }
        }
        )()
    }, [])

    const links = sessionStorage.stat === 'ad' ? [
        {
            name: 'Sections',
            href: '/',
            icon: <HospitalFill/>
        },
        {
            name: 'Classes',
            href: '/class',
            icon: <HouseHeartFill/>
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
            name: 'Domaines',
            href: '/domains',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                        <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg>
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
            <Link to='/' className="sidebar-brand">
                <img src={logo} alt="application logo" style={{width: '100px', height: '120px'}} className="sidebar-brand-logo" />
            </Link>
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