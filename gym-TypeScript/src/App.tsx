import NavBar from "@/Scenes/NavBar/NavBar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/Shared/type";
import Home from '@/Scenes/home';
import Benefits from '@/Scenes/Benefits';
import OurClasses from "@/Scenes/ourClasses";

function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true)


  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    } else {
      setIsTopOfPage(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  
  return (
    <div className="app bg-gray-50 ">
      <NavBar 
      selectedPage = {selectedPage} 
      setSelectedPage = {setSelectedPage}
      isTopOfPage = {isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
