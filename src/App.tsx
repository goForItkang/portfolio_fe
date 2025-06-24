
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MainLayout from './layout/MainLayout';
import Landing from './components/\bLanding';
import Login from './components/Login';
import PortpolioPage from './pages/PortpolioPage';
import TeamPage from './pages/TeamPage';
import TeamCategory from './components/team/TeamCategory';
import TeamWrite from './components/team/TeamWrite';

function App() {
  // const [test,setTest] = useState('');
  
  // useEffect(() => {
  //   fetch('/api') // → 실제로는 http://localhost:8080/api (프록시 덕분에)
  //     .then((res) => res.text()) // JSON이면 res.json()
  //     .then((data) => setTest(data))
  //     .catch((err) => console.error(err));
  // }, []);
  
  return (
    
      <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          {/* 다른 페이지들 예시 */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/portfolio' element={<PortpolioPage/>}/>
          <Route path='/team' element={<TeamPage/>}>
            <Route path="categori" element={<TeamCategory />} />
            <Route path='write' element={<TeamWrite/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
