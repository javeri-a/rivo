

"use client"
import Link from 'next/link';
import { useState } from 'react';
import './nav.css';

export default function Navbar(){
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="header">
      <div className="logo">Rivo.com</div>
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/product">Shop</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="hamburger" onClick={toggleSidebar}>☰</div>

      <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`} id="sidebar">
        <button className="close-btn" onClick={toggleSidebar}>X</button>
        <Link href="/">Home</Link>
        <Link href="/product">Shop</Link>
        <Link href="/contact">Contact</Link>
      </aside>
    </div>
  );
}
