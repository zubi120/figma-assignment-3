import Navbar from "./component/navbar";
import { Hero } from "./component/hero";
import {Project} from "./component/project"
import {Use} from './component/use'
import { Customise } from "./component/customise";
import { Work } from "./component/work";
import {Sponsors} from './component/sponsors';
import { Footer } from "./component/footer";


export default function Home() {
  return (
    <div >

      <Navbar/>
      <Hero/>
      <Project/>
      <Use/>
      <Customise/>
      <Work/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}
