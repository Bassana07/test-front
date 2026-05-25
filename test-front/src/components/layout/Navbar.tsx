import Link from "next/link";

const menu = [
  { href: "/admin", label: "Dashboard", icon: "ri-dashboard-line" },
  { href: "/admin/auth/signin", label: "Sign In", icon: "ri-login-box-line" },
  { href: "/admin/auth/signup", label: "Sign Up", icon: "ri-user-add-line" },
  { href: "/admin/auth/forgot-password", label: "Forgot Password", icon: "ri-lock-password-line" },
];

export default function Navbar() {
  return (
    <aside className="pe-app-sidebar" id="sidebar">
      <div className="pe-app-sidebar-logo px-6 d-flex align-items-center position-relative">
        <Link href="/admin" className="d-flex align-items-end logo-main">
          <img
            height="35"
            width="34"
            className="logo-dark"
            alt="Dark Logo"
            src="/admin-assets/images/logo-md.png"
          />
          <h3 className="text-body-emphasis fw-bolder mb-0 ms-1">Urbix</h3>
        </Link>
      </div>

      <nav className="pe-app-sidebar-menu nav nav-pills" id="sidebar-simplebar">
        <div className="d-flex align-items-start flex-column w-100">
          <ul className="pe-main-menu list-unstyled">
            <li className="pe-menu-title">Main</li>
            {menu.map((item) => (
              <li className="pe-slide" key={item.href}>
                <Link href={item.href} className="pe-nav-link">
                  <i className={`${item.icon} pe-nav-icon`} />
                  <span className="pe-nav-content">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}