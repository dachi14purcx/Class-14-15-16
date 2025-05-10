import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaGlobe } from "react-icons/fa";

// Header Component
const Header = () => (
  <header className="bg-blue-600 text-white p-4 rounded">
    <h1 className="text-3xl font-bold">My Portfolio</h1>
  </header>
);

// Main Component (About Me)
const Main = () => (
  <main className="bg-white p-6 rounded shadow space-y-4">
    <h2 className="text-2xl font-bold text-blue-600">About Me</h2>
    <p><strong>Name:</strong> Giorgi Example</p>
    <p><strong>Location:</strong> Tbilisi, Georgia</p>
    <p><strong>Occupation:</strong> Frontend Developer</p>
    <p><strong>Interests:</strong> Coding, Traveling, Music, Hiking</p>
    <p><strong>Skills Learned Today:</strong> Using <a href="https://react-icons.github.io/react-icons/" className="text-blue-500 underline">React Icons</a></p>
  </main>
);

// Footer Component (Social Links)
const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 rounded flex flex-col space-y-3">
    <h2 className="text-xl font-bold">Contact Me</h2>
    <div className="flex space-x-6 text-2xl">
      <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
      <a href="mailto:example@gmail.com"><FaEnvelope /></a>
      <a href="https://mywebsite.com" target="_blank" rel="noreferrer"><FaGlobe /></a>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}