import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Calender from "./components/Calender";
import CompletedTasks from "./components/CompletedTasks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Todo from "./components/Todo";
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./components/NotFound";
import TaskEdit from "./components/TaskEdit";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/completedTasks" element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path="/todo" element={<Todo></Todo>}></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>
        <Route path="/tasks/:id" element={<TaskEdit></TaskEdit>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
