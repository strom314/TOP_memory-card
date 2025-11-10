export function Card({ img, name }) {
  return (
    <div className="card">
      <img src={img} alt={`img of ${name}`} />
      <p>{name}</p>
    </div>
  );
}
