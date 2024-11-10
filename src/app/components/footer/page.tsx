import Link from "next/link";

import './footer.css'

export default function Footer(){
    return(

<footer>
  <div className="link">
  <div>
    <h1 className="rivo">RIVO.</h1>
    <ul>
      <li><Link href="/">Facebook</Link></li>
      <li><Link href="/">Instagram</Link></li>
      <li><Link href="/">Twitter</Link></li>
    </ul>
  </div>
  <div>
     <h1>SHOP</h1>
     <ul>
      <li><Link href="/">Products</Link></li>
      <li><Link href="/">Pricing</Link></li>
      <li><Link href="/">Overview</Link></li>
      <li><Link href="/">References</Link></li>
    </ul>
  </div>
  <div>
     <h1>COMPANY</h1>
     <ul>
      <li><Link href="/">About Us</Link></li>
      <li><Link href="/">Contacts</Link></li>
      <li><Link href="/">Reviews</Link></li>
      <li><Link href="/">Support</Link></li>
    </ul>
  </div>
  <div>
      <h1>STAY UP TO DATE</h1>
      <div className="search">
      <input type="text" placeholder="Enter your e-mail" />
      <button>SUBMIT</button>
     </div>
  </div>
  </div>
</footer>
    )
}