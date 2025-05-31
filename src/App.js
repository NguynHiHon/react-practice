import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className='app-container'>
      <Header/>
      <div>
        testlink
        <button>
<Link to={"/user"}>
user
</Link>           
        </button>
        <button>
<Link to={"/admin"}>Admin</Link>
        </button>
      </div>
    </div>


  ); 
}

export default App;
