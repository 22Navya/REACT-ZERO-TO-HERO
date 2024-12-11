import Student from "./student"

function App() {
  return(
    <>
    <Student name="Navya Shree"  age={30} isStudent={true}/>
    <Student name="patrick"  age={40} isStudent={false}/>
    <Student name="squidward"  age={50} isStudent={false}/>
    <Student name="sandy"  age={32} isStudent={true}/>
    <Student/>
    </>
  )
  
}


export default App
