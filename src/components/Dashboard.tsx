import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
  FaCalendarCheck,
  FaBullseye,
  FaBriefcase,
  FaUserCircle,
  FaCog,
  FaQuestionCircle,
  FaBars,
} from "react-icons/fa";
import "../styles/Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        {/* Logo */}
        <div className="dashboard-logo">
          <img src="/images/logo-landscape.png" alt="Company Logo" className="dashboard-logo"/>
        </div>
        {/* Burger Menu Icon */}
        <div className="burger-menu">
          <FaBars />
        </div>
        {/* Menu Items */}
        <ul className="menu-items li">
          <li>
            <Link to="/dashboard">
              <FaHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/timesheet">
              <FaCalendarAlt /> Timesheet
            </Link>
          </li>
          <li>
            <Link to="/time-tracker">
              <FaClock /> Time Tracker
            </Link>
          </li>
          <li>
            <Link to="/payslip">
              <FaDollarSign /> Payslip
            </Link>
          </li>
          <li>
            <Link to="/leave">
              <FaCalendarCheck /> Leave
            </Link>
          </li>
          <li>
            <Link to="/goals">
              <FaBullseye /> Goals
            </Link>
          </li>
          <li>
            <Link to="/manage-shift">
              <FaBriefcase /> Manage Shift
            </Link>
          </li>
          <li>
            <Link to="/account">
              <FaUserCircle /> Account
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaCog /> Settings
            </Link>
          </li>
          <li>
            <Link to="/help">
              <FaQuestionCircle /> Help
            </Link>
          </li>
        </ul>
      </div>
      {/* Right Content Area */}
      <div className="content">
        {/* Graphs, Charts, etc. */}
        <div className="graphs">{/* Add your graphs and charts here */}</div>
        {/* User Dropdown */}
        <div className="user-dropdown">
          <FaUserCircle />
          <div className="dropdown-content">
            <p>User Name</p>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
