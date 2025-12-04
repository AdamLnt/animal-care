import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(stored);
  }, []);

  const filtered = projects.filter((p) => {
    const matchName = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "" || p.category === category;
    return matchName && matchCategory;
  });

  return (
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">AnimalCare</div>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/create">Créer un projet</Link></li>
          <li><Link to="/login">Connexion</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Ensemble, protégeons les animaux 🐾</h1>
          <p>Aidez les refuges, les sauvetages et les soins vétérinaires grâce à vos dons.</p>
          <a href="#projects" className="cta-btn">Découvrir les projets</a>
        </div>
      </header>

      {/* ENGAGEMENTS */}
      <section className="engagements">
        <div className="eng-card">
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="" />
          <h3>Sauver</h3>
          <p>Offrez une seconde chance aux animaux en détresse.</p>
        </div>
        <div className="eng-card">
          <img src="https://cdn-icons-png.flaticon.com/512/194/194279.png" alt="" />
          <h3>Soigner</h3>
          <p>Contribuez aux soins vétérinaires essentiels.</p>
        </div>
        <div className="eng-card">
          <img src="https://cdn-icons-png.flaticon.com/512/616/616430.png" alt="" />
          <h3>Protéger</h3>
          <p>Soutenez les refuges et leurs missions quotidiennes.</p>
        </div>
      </section>

      {/* FILTRES */}
      <div className="filters" id="projects">
        <input
          type="text"
          placeholder="Rechercher un projet..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Toutes catégories</option>
          <option value="Refuge">Refuge</option>
          <option value="Soins">Soins vétérinaires</option>
          <option value="Sauvetage">Sauvetage</option>
        </select>
      </div>

      {/* LISTE DES PROJETS */}
      <div className="project-list">
        {filtered.length === 0 && <p>Aucun projet trouvé.</p>}
        {filtered.map((p) => {
          const progressPercent =
            p.amountRaised && p.goal
              ? Math.min((p.amountRaised / p.goal) * 100, 100)
              : 0;
          return (
            <div className="project-card" key={p.id}>
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p className="category">{p.category}</p>
              <p className="desc">{p.description.slice(0, 80)}...</p>

              <div className="progress-bar">
                <div className="progress" style={{ width: `${progressPercent}%` }}></div>
              </div>

              <div className="money-stats">
                <span>{p.amountRaised}€ collectés</span>
                <span>Objectif : {p.goal}€</span>
              </div>

              <button className="btn-view">Voir le projet</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
