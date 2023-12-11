export default function ListGroup() {
  const items = ['New York', 'Los Angeles', 'Chicago'];

  return (
    <>
      {items.map((item: string, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
}
