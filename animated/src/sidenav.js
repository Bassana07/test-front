import logo from './main-logo.png';
import React, { useState } from 'react';
import {SlArrowDown} from 'react-icons/sl';
import {TbLayoutDashboardFilled} from 'react-icons/tb';
function Sidenav (){ 
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);  
  return (   
    <aside className="sidenav">
      <img src={logo} alt="Logo" className='logo' />
      <div className="menu-section-title">MAIN</div>
      <ul className="menu-list">
        {/* 1. ÉLÉMENT PARENT : Dashboards */}
        <li className={`menu-item-wrapper ${isDashboardOpen ? 'open' : ''}`}>
          <div 
            className={`menu-item-header ${isDashboardOpen ? 'active-parent' : ''}`}
            onClick={() => setIsDashboardOpen(!isDashboardOpen)}
          >
            <div className="menu-item-left">
              <TbLayoutDashboardFilled className="dashboard" />
              <span className="menu-icon"></span>
              <span className="menu-text">Dashboards    <SlArrowDown className="flèche" /></span>
            </div>
            {/* Flèche qui tourne selon l'état ouvert/fermé */}
            <span className={`menu-arrow ${isDashboardOpen ? 'rotated' : ''}`}></span>
          </div>
          {isDashboardOpen && (
            <ul className="sub-menu-list">
              <li className="sub-menu-item active-child">
                <span className="sub-menu-dot"></span>
                <span className="sub-menu-text">E-Commerce</span>
              </li>
              <li className="sub-menu-item">
                <span className="sub-menu-dot"></span>
                <span className="sub-menu-text">School</span>
              </li>
              <li className="sub-menu-item">
                <span className="sub-menu-dot"></span>
                <span className="sub-menu-text">Sales Analytics</span>
              </li>
              <li className="sub-menu-item">
                <span className="sub-menu-dot"></span>
                <span className="sub-menu-text">Social Media</span>
              </li>
            </ul>
          )}
        </li>
        </ul>
    </aside>
  );
}
export default Sidenav