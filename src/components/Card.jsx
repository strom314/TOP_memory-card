export function Card({ img, name, id, handleClick }) {
  return (
    <div  className="card" onClick={() => handleClick(id)}>
      <img src={img} alt={`img of ${name}`} />
      <p>{name}</p>
    </div>
  );
}
