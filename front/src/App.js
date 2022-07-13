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
import Exams from './pages/Sequences/Exams';
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
                    <Route path='/classBySection' element={<ClassBySection />} /> 
                    <Route path='/students/:id' element={<Student/>} />
                    <Route path='/teachers' element={<Teachers/>} />
                    <Route path='/competences' element={<Comp/>} />
                    <Route path='/matieres' element={<Matiere/>} /> 
                    <Route path='/exams/:exam_id/:class_id' element={<Exams/>} /> 
                    <Route path='/trims/:exam_id/:class_id' element={<Trims/>} /> 
                    <Route path='/exams/:exam_id/:class_id/:student_id' element={<Bulletin/>} /> 
                    <Route path='/trims/:exam_id/:class_id/:student_id' element={<BulletinTrim/>} /> 
                    <Route path='/search' element={<SearchView/>}/>
                    <Route path='/params' element={<Params/>}/>
                    <Route path='/trims' element={<TrimStu/>}/>
                    <Route path='/seqs' element={<SeqStu/>}/>
                    <Route path='/settings' element={<Settings/>}/>
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
