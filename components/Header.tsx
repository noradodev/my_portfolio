import Link from "next/link";

export default function Header() {
  const navLinks = [
    { href: "/about-me", label: "About Me" },
    { href: "/my-expertise", label: "My Expertise" },
    { href: "/project", label: "Project" }
  ];

  return (
    <div className="header-wrapper container mx-auto">
      <div className="flex justify-between text-[#ACCDC0] p-4">
        <div className="left-side">
          <h1 className="text-3xl">Rado No</h1>
        </div>
        <div className="right-side flex justify-center items-center">
          <div className="nav_item flex">
            {navLinks.map((link, index) => (
              <span key={link.href} className="flex justify-center items-center">
                <Link href={link.href} className="mx-3">{link.label}</Link>
                {index < navLinks.length - 1 && "/"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
