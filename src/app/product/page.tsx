import Image from "next/image";




export default function product(){
    
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$29.99",
      image: "/p1.png", 
    },
    {
      id: 1,
      name: "Product 1",
      price: "$29.99",
      image: "/p5.png", 
    },
    {
      id: 1,
      name: "Product 1",
      price: "$29.99",
      image: "/outerwear.png", 
    },
    {
      id: 1,
      name: "Product 1",
      price: "$29.99",
      image: "/p1.png", 
    },
 
     
    {
      id: 2,
      name: "Product 2",
      price: "$39.99",
      image: "/p3.png", 
    },
    {
      id: 2,
      name: "Product 2",
      price: "$39.99",
      image: "/p4.png", 
    },
    {
      id: 2,
      name: "Product 2",
      price: "$39.99",
      image: "/p8.png", 
    },
    {
      id: 2,
      name: "Product 2",
      price: "$39.99",
      image: "/p6.png", 
    },
    
  ];
    return(
  <div>
      <h2 className="text-center text-2xl font-bold my-4">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
    

    </div>
    </div>
    )
}