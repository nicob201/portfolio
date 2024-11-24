import "./footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
            &copy; 2024 Nicolas Boscasso
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaGithub size={24} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaLinkedin size={24} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
