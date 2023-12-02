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

const itIndustryFacts = [
  "The first website was created in 1989.",
  "There are over 1.9 billion websites in the world.",
  "The average person spends over 11 hours per week online.",
  "The IT industry is worth over $5 trillion.",
  "There are over 3 million software developers in the United States.",
  "The demand for IT workers is expected to grow by 13% in the next decade.",
  "The average salary for a software developer is over $100,000 per year.",
  "The IT industry is one of the most innovative industries in the world.",
  "IT has revolutionized the way we live and work.",
  "IT is essential for the modern economy.",
  "IT is a great career choice for people who are creative and analytical.",
  "There are many different specializations in IT.",
  "You can learn IT skills through online courses, bootcamps, and college degrees.",
  "IT is a rewarding career that can make a real impact on the world.",
  "IT is a constantly changing field, so you will always be learning new things.",
  "IT is a great way to use your skills to make a difference.",
  "IT is a field with endless possibilities.",
  "IT is the future of work.",
  "IT is essential for solving global challenges.",
  "IT is a powerful force for good in the world.",
];


  useEffect(fetchData, []);
  return (
    <div>
      <div className="py-3 shadow-md text-center mb-3">
        <h2
          className="text-2xl sm:text-2xl md:text-3xl  font-normal  tracking-tight text-black "
          style={{ fontFamily: "'Ubuntu', sans-serif" }}
        >
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
          <div className="text-xl  pb-2 font-semibold ">Please wait</div>
          <p className="pb-3 text-zinc-400 font-medium ">
            Fact : {
              itIndustryFacts[
                Math.floor(Math.random() * itIndustryFacts.length)
              ]
            }
          </p>
          <BeatLoader color="rgb(99 ,102 ,241 )" />
        </div>
      )}
    </div>
  );
}



