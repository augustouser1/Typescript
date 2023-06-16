
import {useState} from "react";
import {List} from "./components/List"
function App(){
  const [projects, setProjects] = useState([]);
  function handleAddProject() {
  setProjects([...projects,`Novo projeto ${Date.now()}`]);
  }

return (
  <>
  <header>Conteúdo da Home</header>
  <main>
  <ul>
  {projects.map(item => <li key={item}>{item}</li>)}
  </ul>
  <button onClick={(handleAddProject)}>Adiciona</button>
  </main>
  </>
);


}

export default App