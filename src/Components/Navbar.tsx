const Navbar = () => {
  const links = [
    { title: "Guide", href: "#" },
    { title: "pricing", href: "#" },
    { title: "Log IN", href: "#" },
  ];
  return (
    <div className="navbar-root">
      <div className="logo">WebDev</div>

      <ul className="links">
        {links?.map((cur) => (
          <li key={cur.title}>
            <a href={cur.href} className="link-items">
              {cur.title}
            </a>
          </li>
        ))}

        <button className="btn">Start Free trial</button>
      </ul>
    </div>
  );
};

export default Navbar;
