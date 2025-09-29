import "./footer.css";
import fb from "/src/assets/fb.png";
import tw from "/src/assets/tw.png";
import ig from "/src/assets/ig.png";
import logo from "/src/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src={fb} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src={tw} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src={ig} alt="instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src={logo} alt="" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};
