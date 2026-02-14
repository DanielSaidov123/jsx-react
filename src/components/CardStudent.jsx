import "./CardStudent.css";
export default function CardStudent({id,name,isOnline,age,subjects,grade,setDataStudents}) {

  function studentid( ) {
      setDataStudents(prev=>  prev.map(s=>s.id===id?{...s ,isOnline:!s.isOnline}:s))
  }


  return (
    <main className="divmain">
      <div className="div1 spase">
        <h3 className="h3">{name}</h3>
        <button onClick={()=>  studentid()} >
          {isOnline && <div className="online">online</div>}
          {!isOnline && <div className="no-online">offline</div>}
        </button>
      </div>
      <div className="div2 spase">
        <div className="divage">
          <strong>Age:</strong>
          <p>{age}</p>
        </div>
        <div className="divage">
          <strong>Grade:</strong>
          <p>{`${grade}%`}</p>
          <div>
            {isOnline && <div className="online">Pass</div>}
            {!isOnline && <div className="no-online">Fail</div>}
          </div>
        </div>
      </div>
      <h4 className="space">Subjects:</h4>
      <div className="spase">
        {subjects.map((subject, index) => (
          <span key={index} className="span1">
            {subject}
          </span>
        ))}
      </div>
    </main>
  );
}
