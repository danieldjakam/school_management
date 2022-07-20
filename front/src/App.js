import React from 'react'
import {useState} from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Class from './pages/Class/Class';
import Student from './pages/Students/Student';
import Teachers from './pages/Teachers/Teachers';
import Comp from './pages/Competences/Comp';
import Matiere from './pages/Matieres/Matiere';
import Trims from './pages/Trimestres/Trims';
import Bulletin from './pages/Sequences/Bulletin';
import BulletinTrim from './pages/Trimestres/BulletinTrim';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import SearchView from './pages/Search';
import Params from './pages/Profile/Params';
import Error404 from './pages/Error404';
import TrimStu from './pages/Trimestres/TrimStu';
import SeqStu from './pages/Sequences/SeqStu';
import Settings from './pages/Settings';
import Home from './pages/Home';
import ClassBySection from './pages/Class/ClassBySection';
import SubComp from './pages/Competences/SubComp';
import Domains from './pages/Domains/Domains';
import Activities from './pages/Domains/Activities';
import MatEn from './pages/Notes/Exams/MatEn';
import MatFr from './pages/Notes/Exams/MatFr';
import PrimEn from './pages/Notes/Exams/PrimEn';
import PrimFr from './pages/Notes/Exams/PrimFr';
import Cm2 from './pages/Notes/Exams/Cm2';
import MatEnBE from './pages/Bulletin/Exams/MatEn';
import MatFrBE from './pages/Bulletin/Exams/MatFr';
import PrimFrBE from './pages/Bulletin/Exams/PrimFr';
import PrimEnBE from './pages/Bulletin/Exams/PrimEn';
import Cm2BE from './pages/Bulletin/Exams/Cm2';
import MatEnT from './pages/Notes/Trimestres/MatEn';
import MatFrT from './pages/Notes/Trimestres/MatFr';
import PrimFrT from './pages/Notes/Trimestres/PrimFr';
import PrimEnT from './pages/Notes/Trimestres/PrimEn';
import Cm2T from './pages/Notes/Trimestres/Cm2';
import MatEnBT from './pages/Bulletin/Trimestres/MatEn';
import MatFrBT from './pages/Bulletin/Trimestres/MatFr';
import PrimFrBT from './pages/Bulletin/Trimestres/PrimFr';
import PrimEnBT from './pages/Bulletin/Trimestres/PrimEn';
import Cm2BT from './pages/Bulletin/Trimestres/Cm2';

function App() {
  let val = null;
  if (sessionStorage.user) {
    val = true;
  }
  const [user, setUser] = useState(val);

  return <div className="App">
      <Router>
        <Sidebar/>
        <Routes>
          {
            user ? <>
                    <Route path='/' element={<Home/>} />
                    <Route path='/class' element={<Class/>} /> 
                    <Route path='/classBySection/:name' element={<ClassBySection />} /> 
                    <Route path='/students/:id' element={<Student/>} />
                    <Route path='/teachers' element={<Teachers/>} />
                    <Route path='/competences' element={<Comp/>} />
                    <Route path='/competences/:id' element={<SubComp/>}/>
                    <Route path='/matieres' element={<Matiere/>} /> 
                    <Route path='/domains' element={<Domains/>} /> 
                    <Route path='/domains/:id' element={<Activities/>} /> 
                    <Route path='/search' element={<SearchView/>}/>
                    <Route path='/params' element={<Params/>}/>
                    <Route path='/seqs' element={<SeqStu/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/trims' element={<TrimStu/>}/>



                    <Route path='/exams1/:exam_id/:class_id' element={<MatEn type={1}/>} /> 
                    <Route path='/exams2/:exam_id/:class_id' element={<MatFr type={2}/>} /> 
                    <Route path='/exams3/:exam_id/:class_id' element={<PrimFr type={3}/>} /> 
                    <Route path='/exams4/:exam_id/:class_id' element={<PrimEn type={4}/>} /> 
                    <Route path='/exams5/:exam_id/:class_id' element={<Cm2 type={5}/>} />

                    <Route path='/trims1/:exam_id/:class_id' element={<MatEnT type={1}/>} /> 
                    <Route path='/trims2/:exam_id/:class_id' element={<MatFrT type={2}/>} /> 
                    <Route path='/trims3/:exam_id/:class_id' element={<PrimFrT type={3}/>} /> 
                    <Route path='/trims4/:exam_id/:class_id' element={<PrimEnT type={4}/>} /> 
                    <Route path='/trims5/:exam_id/:class_id' element={<Cm2T type={5}/>} />


                    <Route path='/exams1/:exam_id/:class_id/:student_id' element={<MatEnBE type={1}/>} /> 
                    <Route path='/exams2/:exam_id/:class_id/:student_id' element={<MatFrBE type={2}/>} /> 
                    <Route path='/exams3/:exam_id/:class_id/:student_id' element={<PrimFrBE type={3}/>} /> 
                    <Route path='/exams4/:exam_id/:class_id/:student_id' element={<PrimEnBE type={4}/>} /> 
                    <Route path='/exams5/:exam_id/:class_id/:student_id' element={<Cm2BE type={5}/>} />

                    <Route path='/trims1/:exam_id/:class_id/:student_id' element={<MatEnBT type={1}/>} /> 
                    <Route path='/trims2/:exam_id/:class_id/:student_id' element={<MatFrBT type={2}/>} /> 
                    <Route path='/trims3/:exam_id/:class_id/:student_id' element={<PrimFrBT type={3}/>} /> 
                    <Route path='/trims4/:exam_id/:class_id/:student_id' element={<PrimEnBT type={4}/>} /> 
                    <Route path='/trims5/:exam_id/:class_id/:student_id' element={<Cm2BT type={5}/>} />


                    <Route path='/trims/:exam_id/:class_id' element={<Trims/>} /> 

                    <Route path='/exams/:exam_id/:class_id/:student_id' element={<Bulletin/>} /> 
                    <Route path='/trims/:exam_id/:class_id/:student_id' element={<BulletinTrim/>} /> 


                    <Route path='*' element={<Error404/>} />
                  </>
                 : <> 
                    <Route path='/login' element={<Login setUser={setUser}/>} />
                    <Route path='*' element={<Login setUser={setUser} />} />
                 </> 
          }
        </Routes>
      </Router>
    </div>
}

export default App;
