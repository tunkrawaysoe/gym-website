import NavBar from "@/Scenes/NavBar/NavBar";
import { useState } from "react";
import { SelectedPage } from "@/Shared/type";



function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  

  return (
    <div className="app bg-gray-50">
      <NavBar selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
    </div>
  );
}

export default App;
