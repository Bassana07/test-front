import './App.css';
import avatar from './avatar-3.jpg'
import avatar1 from './avatar-1.jpg'
import avatar2 from './avatar-2.jpg'
import avatar4 from './avatar-4.jpg'
import avatar5 from './avatar-5.jpg'
import upgrade from './upgrade-img.png'
import avatar3 from './avatar-3.jpg'
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
            < CiSearch className="rechercher" />
           
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
<div class="orders-container">
  <div class="orders-header">
    <h2 class="orders-title">Latest Order</h2>
    <div class="orders-actions">
      <div class="search-box">
        <input type="text" placeholder="Search Here ..." />
        < CiSearch className="rechercher" />
      </div>
      <div class="dropdown-box">
        <select>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
    </div>
  </div>

  <div class="table-responsive">
    <table class="orders-table">
      <thead>
        <tr>
          <th style={{ width: '40px' }}> ... </th>
          <th>Customer ID</th>
          <th>Email</th>
          <th>Product</th>
          <th>Status</th>
          <th>Tracking</th>
          <th style={{ width: '40px' }}> ... </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" /></td>
          <td>
            <div class="customer-cell">
              <img src={avatar1} alt="Avatar" class="avatar" />
              <span>#0051134</span>
            </div>
          </td>
          <td>ela@septi.gmail.com</td>
          <td>MacBook Air</td>
          <td><span class="badge on-way">On Way</span></td>
          <td class="tracking-code">PQ1132G</td>
          <td class="actions-cell">•••</td>
        </tr>

        <tr class="row-selected">
          <td><input type="checkbox" checked /></td>
          <td>
            <div class="customer-cell">
              <img src={avatar2} alt="Avatar" class="avatar" />
              <span>#0021598</span>
            </div>
          </td>
          <td>te@shroff.gmail.com</td>
          <td>Magical Pen</td>
          <td><span class="badge waiting">Waiting</span></td>
          <td class="tracking-code">CF0568B</td>
          <td class="actions-cell">•••</td>
        </tr>

        <tr>
          <td><input type="checkbox" /></td>
          <td>
            <div class="customer-cell">
              <img src={avatar3} alt="Avatar" class="avatar" />
              <span>#0045976</span>
            </div>
          </td>
          <td>te@shroff.gmail.com</td>
          <td>Secret Diary</td>
          <td><span class="badge pending">Pending</span></td>
          <td class="tracking-code">RY4578K</td>
          <td class="actions-cell">•••</td>
        </tr>

        <tr>
          <td><input type="checkbox" /></td>
          <td>
            <div class="customer-cell">
              <img src={avatar4} alt="Avatar" class="avatar" />
              <span>#0074564</span>
            </div>
          </td>
          <td>te@shroff.gmail.com</td>
          <td>IdeaPad Azure</td>
          <td><span class="badge delivered">Delivered</span></td>
          <td class="tracking-code">ST9856H</td>
          <td class="actions-cell">•••</td>
        </tr>

        <tr>
          <td><input type="checkbox" /></td>
          <td>
            <div class="customer-cell">
              <img src={avatar5} alt="Avatar" class="avatar" />
              <span>#0098546</span>
            </div>
          </td>
          <td>te@shroff.gmail.com</td>
          <td>Laxmi Electric Stove</td>
          <td><span class="badge delivered">Delivered</span></td>
          <td class="tracking-code">KI1256G</td>
          <td class="actions-cell">•••</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      </main>
      
      
      
    </div>
  );
}

export default App;

