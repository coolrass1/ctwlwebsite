import Aboutcont from "../components/Aboutcont";
import Animater from "../components/Animater";
import HeroAbout from "../components/HeroAbout";



const page = () => {
  
  return (
    <Animater>
    <section className="mx-7">
    <HeroAbout title="About us" />
    <Aboutcont/>
    </section>
    </Animater>
  );
};

export default page;
