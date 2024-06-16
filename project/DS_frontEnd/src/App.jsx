import List from './List.jsx';

function App() 
{
  const fruits = [{id: 1 , name: "appple" , calories: 38}, 
                  {id: 2 , name: "banana" , calories: 282}, 
                  {id: 3 , name:"cherry" , calories: 383},
                  {id: 4 , name: "shir" , calories: 10},];

  const veggies = [{id: 6 , name: "onion" , calories: 28}, 
                  {id: 7 , name: "carrots" , calories: 22}, 
                  {id: 8 , name:"cabbage" , calories: 3},
                  {id: 9 , name: "corn" , calories: 130},];

  return (
    <>
      {/* Notice how the ternary operator can sometimes be replaces with the && operator */}
      {fruits.length && <List items = {fruits} catagory = "Fruits"/>}
      {veggies.length > 0 ? <List items = {veggies} catagory = "Veggies"/> : null}
    </>
  );
}

export default App
