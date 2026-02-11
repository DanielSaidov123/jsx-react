import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/section";
import CardStudent from "./components/CardStudent";
import students from "./data";
function App() {
  const [dataStudents ,setDataStudents]=useState(students)
  // const[count ,setcount]=
  function sum() {
    const total = dataStudents.reduce((i, student) => i + student.grade, 0);
    return total / dataStudents.length;
  }
  function isonline() {
    const coun = dataStudents.filter((student) => student.isOnline);
    return coun.length
  }


  function a( ) {
     const coun = dataStudents.filter((student) => student.grade >90);
    return coun.length
  }
  return (
    <>
      <Header />
      <div className="gridSection">
        <Section number={dataStudents.length} p="Total Students" />
        <Section number={isonline()} p="Online Now" />
        <Section number={a()} p="Honor Roll" />
        <Section number={`${sum()}%`} p="Avg Grade" />
      </div>
      <div className="divstudent">
        {dataStudents.map((student) => (
          <CardStudent key={student.id} setDataStudents={setDataStudents} {...student} />
        ))}
      </div>
    </>
  );
}

export default App;
