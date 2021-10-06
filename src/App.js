
import Incial from "./Capa/Incial";
import Links from "./Capa/Links"
import Link from "./Capa/Link.css"
import Musica from "./Musicas/Musica";
import Musicas from "./Musicas/Musicas.css"
import ImageSlider from "./Efect/ImageSlider"
import { SliderData } from "./Efect/SliderData";
import Slider from "./Efect/Slider.css"


function App() {
  return (
    <div>
<Incial />
<Links></Links>
<Musica></Musica>
<ImageSlider slides={SliderData} />



    </div>
  );
}

export default App;
