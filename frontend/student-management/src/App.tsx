import { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage"
import Table from "./components/Table";
import axios from "axios";

export const App = () => {
  
  const [students,setStudents] = useState([]);
  const baseURL = process.env.REACT_APP_API_BASE_URL;

  

  return (
    <div>
      <LoginPage students={students} setStudents={setStudents} />
      <Table students={students} setStudents={setStudents} />
    </div>
  );
}
