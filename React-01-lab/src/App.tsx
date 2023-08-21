import Programers from "./component/Programers";
import Companies from "./component/Companies";
import "./App.css";

function App() {
  return (
    <>
      <div className="contaner">
        <div>
          <Programers
            name="fahad"
            programLang="Js + Ts"
            yearsWork={7}
            compName="tweq"
          />
        </div>
        <div>
          <Programers
            name="mohamad"
            programLang="Js + Ts + database"
            yearsWork={10}
            compName="aramco"
          />
        </div>
        <div>
          <Programers
            name="sarah"
            programLang="Js "
            yearsWork={1}
            compName="sabek"
          />
        </div>
      </div>
      <div className="contaner">
        <div>
          <Companies
            compName="aramco"
            workNum={200}
            yearFounded={2002}
            typesofServices="Database"
            expectedPrices={43500}
          />
        </div>
        <div>
          <Companies
            compName="twaq"
            workNum={1500}
            yearFounded={2018}
            typesofServices="Programers"
            expectedPrices={1200}
          />
        </div>
        <div>
          <Companies
            compName="sabec"
            workNum={2600}
            yearFounded={1999}
            typesofServices="Sport"
            expectedPrices={6500}
          />
        </div>
      </div>
    </>
  );
}

export default App;
