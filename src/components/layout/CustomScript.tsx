import Script from "next/script";

export default function CustomScripts() {
  return (
    <>
      <Script src="/admin-assets/libs/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/admin-assets/js/app.js" strategy="afterInteractive" />
    </>
  );
}