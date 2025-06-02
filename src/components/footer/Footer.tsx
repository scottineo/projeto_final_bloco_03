import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Que sua vida seja cheia de aventura!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              De segunda a sexta, das 8h às 18h, sábados até as 12h.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/luiz-henrique-machado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <LinkedinLogoIcon size={32} weight="bold" />
                </a>
                <a
                  href="https://www.linkedin.com/in/luiz-henrique-machado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <InstagramLogoIcon size={32} weight="bold" />
                </a>
                <a
                  href="https://www.linkedin.com/in/luiz-henrique-machado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <FacebookLogoIcon size={32} weight="bold" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Links Úteis
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/sobre"
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      Sobre a loja
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://blogpessoal-react-rosy.vercel.app/home"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/scottineo"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Recursos parceiros
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.ultrafarma.com.br/"
                    >
                      Ultrafarma
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.drogariasaopaulo.com.br/"
                    >
                      Drogaria São Paulo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
      </div>
    </footer>
  );
}
export default Footer;
