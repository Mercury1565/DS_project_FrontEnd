import UserGreeting from './UserGreeting.jsx';

function App() 
{
  return (
    <>
      <UserGreeting isLoggedIn={true} username = "Mercury" />
      <UserGreeting isLoggedIn={true}/>
    </>
  );
}

export default App
