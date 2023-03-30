export default function ProductDetail(props) {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category
  } = props;

  return (
    <>
      <h2>{"Product Detail:"}</h2>
      <div>
        <li>{id}</li>
        <li>{title}</li>
        <li>{description}</li>
        <li>{price}</li>
        <li>{discountPercentage}</li>
        <li>{brand}</li>
        <li>{rating}</li>
        <li>{stock}</li>
        <li>{category}</li>
      </div>
      <button>{"Return to list"}</button>
    </>
  );
}
