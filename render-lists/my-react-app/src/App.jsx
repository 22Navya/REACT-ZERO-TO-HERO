
import List from "./List.jsx"

function App() {
  const fruits= [{id:1,name:"apple",calories:95},
    {id:5,name:"orange",calories:30},
    {id:2,name:"banana",calories:45},
    {id:3,name:"coconut",calories:105},
    {id:4,name:"pineapple",calories:37}];


  const vegetables= [{id:6,name:"potato",calories:110},
      {id:7,name:"calery",calories:15},
      {id:8,name:"carrorts",calories:25},
      {id:9,name:"corn",calories:63},
      {id:10,name:"broccoli",calories:50}];

  return(
    <>
    {fruits.length>0 ? <List items={fruits} category="fruits"/> : null } 
    {vegetables.length>0 ? <List items={vegetables} category="vegetables"/> : null }
    </>
  );
  
}


export default App
