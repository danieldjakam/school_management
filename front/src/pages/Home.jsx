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
            <div style={{marginBottom: '10px'}}>
                <button onClick={() => {setIsAddSection(v => !v)}} className="btn btn-blue">{sectionTraductions[getLang()].addSection}</button>
            </div>
            <table className="table table-dark table-bordered table-striped">
                <thead>
                    <tr>
                        <th>{sectionTraductions[getLang()].name}</th>
                        <th>{sectionTraductions[getLang()].type}</th>
                        <th>{sectionTraductions[getLang()].action}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? <tr ><td colSpan={5} style={{justifyItems: 'center', paddingLeft: '50%'}}><ReactLoading color="#fff" type="cylon"/></td></tr> : sections.length > 0 ? sections.map((section, index) => {
                            return <tr key={index}>
                                <td>{section.name}</td>
                                <td>{section.type}</td>
                                <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <button onClick={() => {chooseSection(section.id)}} className="btn btn-info">{sectionTraductions[getLang()].seeClass}</button>
                                    <button className='btn btn-warning'>
                                        {sectionTraductions['en'].edit}
                                    </button>
                                    <button onClick={() => {deleteSection(section.id)}} className="btn btn-danger">
                                        {
                                            loadingDel ? sectionTraductions['en'].deleting : sectionTraductions['en'].delete 
                                        }
                                    </button>
                                </td>
                            </tr> }) : <tr> <td colSpan={5} style={{textAlign: 'center'}}>{sectionTraductions['fr'].noSection}</td> </tr>
                    }
                </tbody>
            </table>  
            

            <Modal isOpen={idAddSection}>
                <AddSection error={error} setError={setError} setIsAddSection={setIsAddSection}/>
            </Modal>
            <Modal isOpen={idEditSection}>
                <EditSection error={error} setError={setError} setIsEditSection={setIsEditSection}/>
            </Modal>
        </div>
    )
}

export default Home