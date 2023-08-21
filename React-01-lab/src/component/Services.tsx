interface Services {
  typesofServices: string;

  expectedPrices: number;
}

export default function Services(props: Services) {
  return (
    <div>
      <h2>Services{props.typesofServices}</h2>
      <h2>workNum:{props.expectedPrices}$</h2>
    </div>
  );
}
