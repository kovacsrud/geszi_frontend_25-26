import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Section from "./components/Section";
import TypiCode from "./components/TypiCode";
import RandomUsers from "./components/RandomUsers";

function App() {


  return (
    <div>
      <Header headerText="Typescript" id={4}/>
      <SubHeader>
        <p>Bekezdés 1.</p>
        <p>Bekezdés 2.</p>
      </SubHeader>
      <Section title="Általános iskola">
        <p>Kiss Géza</p>
      </Section>
      <Section>
        <p>Nagy Judit</p>
        <p>László Elek</p>
      </Section>
      <TypiCode />
      <RandomUsers />

    </div>
  )
}

export default App
