import './App.css';
import avatar from './avatar-3.jpg'
import upgrade from './upgrade-img.png'
import Sidenav from './sidenav';
import { HiOutlineFolderOpen } from "react-icons/hi";
import { GoBookmark } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
function App() {
  return (
    <div className="main-layout">
       <Sidenav />
      <main className="page-content">
        <header className="App-header">
          <button className="toggle-btn">
            ←│
          </button>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search" 
              className="search-input" 
            />
            <span className="search-icon">< CiSearch  className="rechercher" /></span>
            <span className="shortcut-badge">CTRL D</span>
          </div>
      
          {/* Conteneur aligné à droite du header */}
         <div className="header-right">
  
  {/* 1. Bouton Cloche avec notification rouge */}
  <button className="icon-btn">
    <span className="icon">🔔</span>
    <span className="notification-badge"></span>
  </button>

  {/* 2. Bouton Panier avec notification rouge */}
  <button className="icon-btn">
    <span className="icon">🛒</span>
    <span className="notification-badge"></span>
  </button>

  {/* 3. Bouton Paramètres (Roue crantée) */}
  <button className="icon-btn">
    <span className="icon">⚙️</span>
  </button>

  {/* 4. Switch Mode Jour / Nuit */}
  <div className="theme-switch">
    <button className="theme-btn active">☀️</button>
    <button className="theme-btn">🌙</button>
  </div>

  {/* 5. Bloc Profil Utilisateur */}
  <div className="profile-container">
    <div className="profile-text">
      <span className="profile-name">Jaydon Levin</span>
      <span className="profile-email">jaydon@gmail.com</span>
    </div>
    <img 
      src={avatar} 
      alt="User profile" 
      className="profile-avatar"
    />
  </div>

</div>
      </header>
      {/* Conteneur global des cartes de statistiques */}
<div className="stats-grid">

  {/* CARTE 1 : Today's Sales */}
  <div className="stat-card">
    <div className="stat-icon-wrapper blue-icon">
      < HiOutlineFolderOpen className="folder" />
    </div>
    <div className="stat-content">
      <div className="stat-number-row">
        <h2 className="stat-number">$2,647</h2>
        <  GoGraph className="graph" />
      </div>
      <p className="stat-title">Today's Sales</p>
      <p className="stat-sub">Sales Increment Rate</p>
    </div>
  </div>

  {/* CARTE 2 : Total Purchase */}
  <div className="stat-card">
    <div className="stat-icon-wrapper purple-icon">
      <  GoBookmark className="book" />
    </div>
    <div className="stat-content">
      <div className="stat-number-row">
        <h2 className="stat-number">$24,057</h2>
        <  GoGraph className="graph" />
      </div>
      <p className="stat-title">Total Purchase</p>
      <p className="stat-sub"><span className="green-text">+8%</span> Completion Rate</p>
    </div>
  </div>

  {/* CARTE 3 : Overall Performance */}
  <div className="stat-card">
    <div className="stat-icon-wrapper purple-icon">
      <  GoBookmark className="book" />
    </div>
    <div className="stat-content">
      <div className="stat-number-row">
        <h2 className="stat-number">47%</h2>
        <  GoGraph className="graph" />
      </div>
      <p className="stat-title">Overall Performance</p>
      <p className="stat-sub"><span className="green-text">+12%</span> Completion Rate</p>
    </div>
  </div>

</div>
<div class="upgrade-banner">
  <div class="banner-illustration">
    <img src={upgrade} alt="Upgrade" />
  </div>

  <div class="banner-content">
    <p class="banner-text">
      Lorem ipsum dolor<br />
      sit lorem ipsum<br />
      dolor sit
    </p>
    <button class="banner-btn">Upgrade</button>
  </div>
</div>
      </main>
      
      
      
    </div>
  );
}

export default App;

