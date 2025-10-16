export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content">
      <aside>
        <p className="text-sm">
          © {currentYear} Bangla.AI. All rights reserved.
        </p>
      </aside>
    </footer>
  );
}
