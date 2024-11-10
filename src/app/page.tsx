import Image from "next/image";
import Link from "next/link";




export default function Home(){

  const products = [
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
     
     <div className="hero">
  
  {/* HERO SECTION */}
  <div className="main">
  <div className="herosec">
                                  <h1> <b>Discover and  <br /> Find Your Own <br />Fashion!</b></h1>
                                  <p>Explore our curated collection of stylish <br /> clothing  and accessories tailored to <br /> your unique taste</p>
                                  <button><Link href={"/product"}>EXPLORE NOW</Link></button>
                             </div>
         <div className="img">
        <Image
        src="/hero.png"
        alt="main"
        height={850}
        width={800}
        />

          </div>
                             </div>
    </div>

{/* products */}
<div>
      <h2 className="text-center text-2xl font-bold my-4">Best Selling Products</h2>
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


{/* Exclusive */}
<div className="exc-main">
      <div className="exc-img">
      <Image
      src="/exclusive.png"
      alt="pic"
      height={500}
      width={800}
      />
</div>

<div className="exc-text">
    <h1>Exclusive Offer</h1>
    <p> Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals </p>
    <button>Buy Now</button>
</div>
    
            </div>
 {/* DESIGNER CLOTHES */}
 <div className="design">
 <h1>Designer Clothes For You</h1>
 <p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
 <div className="d-main">
  <div className="d-img" >
    <Image
    src ="/p8.png"
    alt="image"
    height={600}
    width={500}

    />
  <h1>Accessories</h1>
  <p>Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.</p>
  </div>
  <div className="d-img" >
    <Image
    src ="/dess.png"
    alt="image"
    height={600}
    width={500}

    />
  <h1>Dresses</h1>
  <p>Explore a stunning range of designer dresses, including evening gowns and chic day dresses.</p>
  </div>
  <div className="d-img" >
    <Image
    src ="/outerwear.png"
    alt="image"
    height={600}
    width={500}

    />
  <h1>Outerwear</h1>
  <p>Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.</p>
  </div>
 </div>
  </div>
  





           
            </div>
            
            


           

           
 
  )
}


