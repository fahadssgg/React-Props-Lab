import Services from "./Services";

interface Companies {
  compName: string;
  workNum: number;
  yearFounded: number;
  typesofServices: string;
  expectedPrices: number;
}

export default function Companies(props: Companies) {
  return (
    <div>
      <h1>compName:{props.compName}</h1>
      <h2>workNum:{props.workNum}</h2>
      <h2>yearFounded:{props.yearFounded}</h2>
      <Services
        typesofServices={props.typesofServices}
        expectedPrices={props.expectedPrices}
      ></Services>
    </div>
  );
}
