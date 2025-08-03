import useHoverCapability from "../hooks/useHoverCapability";
import useWindowSize from "../hooks/useWindowSize";
import "./Footer.css";
import FooterLinks from "./FooterLinks";

function Footer() {
  const windowSize = useWindowSize();
  const hasHover = useHoverCapability();

  const isMobile = windowSize <= 1024 || !hasHover;

  return (
    <>
      {isMobile && <FooterLinks />}
      <footer>
        <p className="footer_p_smaller">
          Inspired by&nbsp;
          <a href="https://brittanychiang.com/" target="_blank">
            Brittany Chiang
          </a>
          &apos;s&nbsp;
          <a href="https://v4.brittanychiang.com/" target="_blank">
            design
          </a>
        </p>
        <p>
          ⁺₊✧ &nbsp; Made with ♡ by{" "}
          <a className="footer-ghlink" href="https://github.com/zuzOup" target="_blank">
            Zuzana Oupická
          </a>{" "}
          &nbsp; ✧₊⁺
        </p>
      </footer>
    </>
  );
}

export default Footer;
