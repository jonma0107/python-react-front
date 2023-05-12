import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TasksFormPage } from "./pages/TasksFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container mx-auto">
        <Navigation/>
        <Routes>
          <Route path="/" element={<Navigate to = '/tasks'/>} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/task-create" element={<TasksFormPage />} />
          <Route path="/tasks/:id" element={<TasksFormPage />} />
        </Routes>
        <Toaster/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
