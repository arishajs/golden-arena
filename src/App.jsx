
import React, { useState } from "react";
import {
  Search, Gamepad2, Trophy, Menu, X, Play,
  Star, ArrowRight, Crown, Zap, ShieldCheck
} from "lucide-react";

const games = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    category: "Action",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900",
    description: "Explore a futuristic world filled with action, adventure and incredible technology."
  },
  {
    id: 2,
    name: "Battle Arena",
    category: "Action",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900",
    description: "Enter an exciting arena and experience competitive gaming."
  },
  {
    id: 3,
    name: "Speed Legends",
    category: "Racing",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
    description: "Experience high-speed racing with amazing cars and tracks."
  },
  {
    id: 4,
    name: "Fantasy World",
    category: "Adventure",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900",
    description: "Discover magical locations and explore a beautiful fantasy universe."
  },
  {
    id: 5,
    name: "Football Stars",
    category: "Sports",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900",
    description: "Enjoy football challenges and exciting sports moments."
  },
  {
    id: 6,
    name: "Shadow Warrior",
    category: "Adventure",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=900",
    description: "Step into a mysterious world and discover new adventures."
  }
];

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = ["All", "Action", "Adventure", "Racing", "Sports"];

  const filteredGames = games.filter((game) => {
    const matchesCategory =
      category === "All" || game.category === category;

    const matchesSearch =
      game.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <Crown size={27} />
          GOLDEN<span>ARENA</span>
        </a>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#games" onClick={() => setMenuOpen(false)}>Games</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </div>

        <a href="#games" className="nav-button">
          Explore Games <ArrowRight size={16} />
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="eyebrow">
            <Crown size={16} /> THE ULTIMATE GAMING EXPERIENCE
          </div>

          <h1>
            ENTER THE
            <span> GOLDEN </span>
            ARENA
          </h1>

          <p>
            Discover legendary games, explore new worlds,
            and experience gaming beyond imagination.
          </p>

          <div className="hero-buttons">
            <a href="#games" className="primary-btn">
              <Play size={17} fill="currentColor" />
              Explore Games
            </a>

            <a href="#features" className="secondary-btn">
              Discover More
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>50+</h3>
              <p>Games</p>
            </div>
            <div>
              <h3>10K+</h3>
              <p>Players</p>
            </div>
            <div>
              <h3>4.9</h3>
              <p>Rating</p>
            </div>
          </div>
        </div>

        <div className="hero-label">
          <span></span> LEVEL UP YOUR EXPERIENCE
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div>
          <p className="section-tag">WELCOME TO GOLDEN ARENA</p>
          <h2>YOUR WORLD. YOUR GAME.</h2>
        </div>
        <p className="intro-text">
          A destination for gamers who want more.
          Find your next adventure and discover your
          favourite gaming experience.
        </p>
      </section>

      {/* GAMES */}
      <section className="games-section" id="games">
        <div className="section-heading">
          <div>
            <p className="section-tag">DISCOVER YOUR NEXT ADVENTURE</p>
            <h2>FEATURED <span>GAMES</span></h2>
          </div>
          <div className="game-count">
            <Gamepad2 size={19} /> {filteredGames.length} GAMES
          </div>
        </div>

        <div className="game-controls">
          <div className="filters">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "filter active" : "filter"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="games-grid">
          {filteredGames.map((game) => (
            <div className="game-card" key={game.id}>
              <div className="game-image">
                <img src={game.image} alt={game.name} />
                <span className="game-category">{game.category}</span>
                <span className="rating">
                  <Star size={14} fill="currentColor" />
                  {game.rating}
                </span>
              </div>

              <div className="game-info">
                <h3>{game.name}</h3>
                <div className="game-bottom">
                  <span>Premium Experience</span>
                  <button
                    className="arrow-btn"
                    onClick={() => setSelectedGame(game)}
                    aria-label={`View ${game.name}`}
                  >
                    <ArrowRight size={19} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="no-games">
            <Gamepad2 size={35} />
            <h3>No games found</h3>
            <p>Try another search or category.</p>
          </div>
        )}
      </section>

      {/* FEATURES */}
      <section className="features-section" id="features">
        <div className="features-heading">
          <p className="section-tag">WHY GOLDEN ARENA?</p>
          <h2>BUILT FOR THE <span>CHAMPIONS</span></h2>
          <p>
            Everything you need for an unforgettable gaming journey.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Zap /></div>
            <h3>Fast Experience</h3>
            <p>Enjoy a smooth and responsive gaming discovery experience.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Trophy /></div>
            <h3>Premium Collection</h3>
            <p>Explore a curated collection of exciting gaming titles.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><ShieldCheck /></div>
            <h3>Easy Discovery</h3>
            <p>Find games quickly with simple search and category filters.</p>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="banner" id="about">
        <div className="banner-content">
          <p className="section-tag">THE ARENA IS WAITING</p>
          <h2>READY TO PLAY?</h2>
          <p>Your next adventure begins right here.</p>
          <a href="#games" className="primary-btn">
            Start Exploring <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <Crown size={35} />
        <h2>STAY IN THE GAME</h2>
        <p>Subscribe for gaming updates and new discoveries.</p>

        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>

        {subscribed && (
          <p className="success-message">Thanks for subscribing!</p>
        )}
      </section>

      {/* FOOTER */}
      <footer>
        <a href="#home" className="logo">
          <Crown size={24} />
          GOLDEN<span>ARENA</span>
        </a>

        <p>© 2026 GOLDEN ARENA. All rights reserved.</p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>

      {/* GAME MODAL */}
      {selectedGame && (
        <div className="modal-overlay" onClick={() => setSelectedGame(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedGame(null)}
              aria-label="Close modal"
            >
              <X />
            </button>

            <img src={selectedGame.image} alt={selectedGame.name} />

            <div className="modal-content">
              <p className="section-tag">{selectedGame.category}</p>
              <h2>{selectedGame.name}</h2>
              <p>{selectedGame.description}</p>
              <div className="modal-rating">
                <Star size={17} fill="currentColor" />
                {selectedGame.rating} / 5
              </div>
              <button
                className="primary-btn"
                onClick={() => setSelectedGame(null)}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
