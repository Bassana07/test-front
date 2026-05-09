export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center gap-2">
          <span>{new Date().getFullYear()} © Urbix.</span>
          <div className="text-sm-end d-none d-sm-block">Design & Develop by Pixeleyez</div>
        </div>
      </div>
    </footer>
  );
}