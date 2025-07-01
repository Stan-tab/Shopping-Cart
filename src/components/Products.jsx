export default function Products({ data }) {
  return (
    <div>
      {data.map((element) => {
        return (
          <div key={element.id}>
            <img src={element.image} alt={element.title} />
            <p>{element.title}</p>
            <div>
              <p>{element.category}</p>
              <p>{element.price}</p>
            </div>
            <p>{element.description}</p>
          </div>
        );
      })}
    </div>
  );
}
