import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { sectionTraductions } from '../local/section';
import { host } from '../utils/fetch';
import { getLang } from '../utils/lang';
import AddSection from './Sections.jsx/AddSection';
import { Modal } from 'reactstrap';
import EditSection from './Sections.jsx/EditSection';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Home() {
    
    const [sections, setSections] = useState({})
    const [error, setError] = useState('');
    const [idAddSection, setIsAddSection] = useState(false);
    const [id, setId] = useState('');
    const [idEditSection, setIsEditSection] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingDel, setLoadingDel] = useState(false);

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const resp = await fetch(host+'/sections/all', {headers: {
                    'Authorization': sessionStorage.user
                  }})
                const data = await resp.json();
                setSections(data);
                setLoading(false);
            }
        )()
    }, []);
    const deleteSection = (id) => {
        Swal.fire({
            title: 'Confirmez la suppression !',
            icon: 'question',
            text: 'Cette action est irreversible !!'
        }).then(res => {
            if (res.value) {
                setLoadingDel(true);
                fetch(host+'/sections/'+id, {method: 'DELETE', headers: {'Authorization': sessionStorage.user}})
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                        if (res.success) {
                            window.location.reload();
                        }else{
                            setError(res.message)
                        }
                    })
                setLoadingDel(false)
            }
        })
    }
    const navigate = useNavigate();
    const chooseSection = (section_id) => {
        sessionStorage.setItem('section_id', section_id)
        navigate('/class')
    }
    return (
        <div className='container' style={{paddingTop: '20px'}}>
            <h1 className='text-black'>
                Choisissez une section pour continuer.
            </h1>
            {
                error !== '' ? <div className="alert alert-danger">{error}</div> : <></>
            }
            <div style={{marginBottom: '10px'}}>
                <button onClick={() => {setIsAddSection(v => !v)}} className="btn btn-blue">{sectionTraductions[getLang()].addSection}</button>
            </div>

            <div className="allClas">
                {
                    loading ? <div className="error" style={{ position: 'absolute', top: '39%', left: '53%' }}><ReactLoading color="#fff" type="spin"/></div> : sections.length > 0? sections.map((section, id) => {
                        return <div className="clas" key={id}>
                            <div className="top">
                                <div className="classAbs">
                                    {section.name}
                                </div>
                                <div className="qq">
                                    <span className="q">
                                    {sectionTraductions[getLang()].name}
                                    </span>
                                    <span className="r">
                                        {section.name}
                                    </span>
                                </div>
                                <div className="qq">
                                    <span className="q">
                                    {sectionTraductions[getLang()].t}
                                    </span>
                                    <span className="r">
                                        {section.type}    
                                    </span>
                                </div>
                            </div>
                            <div className="bottom">
                                <button onClick={() => {chooseSection(section.id)}} className="btn btn-info">{sectionTraductions[getLang()].seeClass}</button>
                                    <button onClick={() => {setId(section.id); setIsEditSection(v => !v)}} className='btn btn-warning'>
                                        {sectionTraductions['en'].edit}
                                    </button>
                                    <button onClick={() => {deleteSection(section.id)}} className="btn btn-danger">
                                        {
                                            loadingDel ? sectionTraductions['en'].deleting : sectionTraductions['en'].delete 
                                        }
                                    </button>
                            </div>  
                        </div>
                    }) : <div className="i">
                            <div className="empty monINfos">
                                {sectionTraductions[getLang()].noSection} <br />
                            </div>
                        </div>
            }

            <div className="clas" key={id}>
                    <div className="top">
                        <div className="classAbs">
                            Enlever 
                        </div>
                        <div className="qq">
                            <span className="q">
                            Pas
                            </span>
                            <span className="r">
                                de filtre
                            </span>
                        </div>
                        <div className="qq">
                            <span className="q">
                                Pour tout 
                            </span>
                            <span className="r">
                                afficher
                            </span>
                        </div>
                    </div>
                    <div className="bottom">
                        <button onClick={() => {chooseSection('nothing')}} className="btn btn-info">{sectionTraductions[getLang()].seeClass}</button>
                    </div>  
                </div>
            </div>  
            

            <Modal isOpen={idAddSection}>
                <AddSection error={error} setError={setError} setIsAddSection={setIsAddSection}/>
            </Modal>
            <Modal isOpen={idEditSection}>
                <EditSection error={error} setError={setError} id={id} setIsEditSection={setIsEditSection}/>
            </Modal>
        </div>
    )
}

export default Home