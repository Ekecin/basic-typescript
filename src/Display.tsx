interface DisplayProps {
  count: number;
}

function Display({ count }: DisplayProps) {
  return <h1 className="Display">Count: {count}</h1>;
}

export default Display;