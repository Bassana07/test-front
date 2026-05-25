import Link from "next/link";

export default function Header() {
  return (
    <header className="app-header" id="appHeader">
      <div className="container-fluid w-100">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-inline-flex align-items-center gap-2">
            <Link href="/admin" className="d-flex align-items-end logo-main me-5">
              <img
                height="35"
                width="34"
                className="logo-dark"
                alt="Dark Logo"
                src="/admin-assets/images/logo-md.png"
              />
              <h3 className="text-body-emphasis fw-bolder mb-0 ms-1">Urbix</h3>
            </Link>
            <button type="button" className="vertical-toggle btn header-btn" id="toggleSidebar">
              <i className="bi bi-arrow-bar-left header-icon" />
            </button>
          </div>

          <div className="d-flex align-items-center gap-2">
            <img
              src="/admin-assets/images/avatar/avatar-3.jpg"
              alt="Avatar"
              className="img-fluid rounded-circle"
              width={36}
              height={36}
            />
            <div className="d-none d-md-block">
              <span className="d-block fs-12 fw-semibold">Jaydon Levin</span>
              <span className="d-block fs-10 text-muted">jaydon@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}