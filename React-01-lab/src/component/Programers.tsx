interface Programers {
  name: string;
  programLang: string;
  yearsWork: number;
  compName: string;
}

export default function Programers(props: Programers) {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h2>programLang:{props.programLang}</h2>
      <h2>yearsWork:{props.yearsWork}</h2>
      <h2>compName:{props.compName}</h2>
    </div>
  );
}
