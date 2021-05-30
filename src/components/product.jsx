const Product = (props) => {
  const { product } = props;
  return (
    <article>
      <h3
        class="product-category"
        style={{ backgroundColor: `${product.backgroundColor}` }}
      >
        {product.category}
      </h3>
      <figure>
        <img src={`${process.env.PUBLIC_URL}${product.imgURL}`} alt="hacksaw" />
        <figcaption>
          <h3 class="product-name">{product.name}</h3>
          <p class="product-description">
            {product.description}
            <span class="product-price">
              Starting at ${product.price.toFixed(2)} / ${product.UOM}.
            </span>
          </p>
        </figcaption>
      </figure>
    </article>
  );
};

export default Product;
