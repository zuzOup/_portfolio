import { useRef } from "react";
import { svg } from "../Aside/AsideLeft/AsideLeft_svg";

const links = [
  { id: "github", href: "https://github.com/zuzOup" },
  { id: "linkedin", href: "https://www.linkedin.com/in/zuzana-oupicka" },
  { id: "codepen", href: "https://codepen.io/zuzOup" },
];

import "./FooterLinks.css";

import useFadeInOnScroll_hook from "../hooks/fadeInOnScroll_hook";
import FadeInDiv from "../Components/FadeInDiv";

function FooterLinks() {
  const refFooterLinks = useRef();
  const isVisible = useFadeInOnScroll_hook(refFooterLinks);

  return (
    <FadeInDiv ref={refFooterLinks} isVisible={isVisible} className="footer_links">
      <ul id="footer_links">
        {links.map((link) => {
          return (
            <li key={link.id} className={link.id}>
              <div className="footer_links-icon-bck"></div>
              <a href={link.href} target="_blank">
                {svg(link.id)}
              </a>
            </li>
          );
        })}
      </ul>
    </FadeInDiv>
  );
}

export default FooterLinks;
