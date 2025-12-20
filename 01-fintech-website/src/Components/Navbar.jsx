function Navbar() {
  const links = [
    {
      tile: "Guide",
      href: "#",
    },

    {
      tile: "Pricing",
      href: "#",
    },

    {
      tile: "Login",
      href: "#",
    },
  ];

  return (
    <div className="navbar-root">
      <div className="logo"> Fintech</div>
      <div className="links">
        {links.map((link, idx) => {
          return (
            <a className="link-items" href={link.href}>
              {" "}
              {link.tile}{" "}
            </a>
          );
        })}
        <button className="btn"> Start Free Trial</button>
      </div>
    </div>
  );
}

export default Navbar;
