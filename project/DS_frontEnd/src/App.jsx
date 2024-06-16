import Student from './Student.jsx';

function App() 
{
  return (
    <>
     <Student name = "Fenet" age = {15} isStudent = {true}/>
     <p>------------</p>
     <Student name = "Mami" age = {24} isStudent = {true}/>
     <p>------------</p>
     <Student name = "mom" age = {50} isStudent = {false}/>
     <p>------------</p>
     <Student/>
    </>
  );
}

export default App
