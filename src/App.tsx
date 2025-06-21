
import './App.css'
import MainLayout from './layout/MainLayout';

function App() {
  // const [test,setTest] = useState('');
  
  // useEffect(() => {
  //   fetch('/api') // → 실제로는 http://localhost:8080/api (프록시 덕분에)
  //     .then((res) => res.text()) // JSON이면 res.json()
  //     .then((data) => setTest(data))
  //     .catch((err) => console.error(err));
  // }, []);
  
  return (
    <>
    <MainLayout>
      <h1>out</h1>
    </MainLayout>
  </>
  )
}

export default App
