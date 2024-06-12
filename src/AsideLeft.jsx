const links = [
  { id: "github", href: "https://github.com/zuzOup" },
  { id: "linkedin", href: "" },
  { id: "codepen", href: "https://codepen.io/zuzOup" },
];

function AsideLeft() {
  return (
    <ul>
      {links.map((link) => {
        return (
          <li
            key={link.id}
            id={`aside_link_${link.id}`}
            className="aside_left_link"
            style={{ backgroundImage: `url(../aside_buttons/${link.id}.svg)` }}
          >
            <a href={link.href} target="_blank"></a>
          </li>
        );
      })}
    </ul>
  );
}

export default AsideLeft;
