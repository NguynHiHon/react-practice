import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';
import ListTodo from './Todo/ListTodo';
import Nav from './Nav/nav';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./example/home";
import {
  BrowserRouter as Router,
  Roters,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        < header className="App-header">

          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<MyComponent />} />
          </Routes>




        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </div>
    </Router>



  );
}

export default App;
