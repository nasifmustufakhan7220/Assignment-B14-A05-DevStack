import { Suspense, useState } from "react";
import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"
import type { ITechnologyType } from "./Type/Type";
import ExploreTechnologies from "./Components/ExploreTechnologies/ExploreTechnologies";
import TechnologyHeader from "./Components/TechnologyHeader/TechnologyHeader";
import Loading from "./Components/Loading/Loading";
import { Footer } from "./Components/Footer/Footer";

const exploreTechnologyFetch = async(): Promise<ITechnologyType[]>=>{
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  const [exploreTechnologyPromise] = useState(()=>exploreTechnologyFetch())

  return (
    <>
      <Navbar/>
      <Banner/>
      <TechnologyHeader/>
      <Suspense fallback={<Loading/>}>
        <ExploreTechnologies exploreTechnologyPromise={exploreTechnologyPromise} />
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
