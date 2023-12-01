import { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage"
import Table from "./components/Table";
import axios from "axios";
import { BeatLoader } from "react-spinners";

export const App = () => {
  
  const [students,setStudents] = useState([]);
  const baseURL = process.env.REACT_APP_API_BASE_URL;

  const [isLoaded ,setIsLoaded] = useState(false);
  const [error,setError] = useState(false);
  const fetchData = () => {
      axios
        .get(`${baseURL}/students`)
        .then((res) => {
          const { data } = res;
          setIsLoaded(true);
          setStudents(data);
          console.log(data);
        })
        .catch((err) => {
          setError(true);
        });
    };

  useEffect(fetchData, []);
  return (
    <div>
      <div className="py-3 shadow-md text-center mb-3">
        <h2 className="text-2xl sm:text-2xl md:text-3xl  font-normal  tracking-tight text-black " style={{fontFamily: "'Ubuntu', sans-serif"}}>
          Student Management App
        </h2>
      </div>
      {isLoaded ? (
        <>
          <LoginPage
            students={students}
            setStudents={setStudents}
            setIsLoaded={setIsLoaded}
            setError={setError}
          />
          <Table students={students} setStudents={setStudents} />
        </>
      ) : (
        <div className="w-full text-center h-[90vh] place-content-center flex flex-col items-center ">
          <div className="text-xl py-7  font-semibold">Please wait</div>
          <BeatLoader color="rgb(99 ,102 ,241 )" />
        </div>
      )}
    </div>
  );
}
