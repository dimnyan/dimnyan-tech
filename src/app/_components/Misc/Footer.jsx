import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pb-3 pt-20 px-12 md:px-24">
      <div className="max-w-screen-xl mx-auto mb-10 md:grid md:grid-cols-2">
        <div className="pb-10 text-slate-300">
          <h2 className="font-bold lg:text-left">
            Your business needs a Website?
          </h2>
          <p className="pb-5">Feel free to contact me!</p>

          <Link
            href="mailto:dimas@dimnyan.tech"
            target="_blank"
            className="font-bold text-slate-300 hover:text-orange-500 border-b border-b-orange-500 pb-1 w-fit"
          >
            dimas@dimnyan.tech
          </Link>
        </div>
        {/* <div className="pb-10 ">
          <h2 className="md:text-xl font-bold pb-5">Contacts</h2>
          <div className="mb-2 flex items-center">
            <Link
              href="mailto:dimas@dimnyan.tech"
              target="_blank"
              className="font-bold text-slate-200 hover:text-orange-500 border-b border-b-orange-500 pb-1 w-fit"
            >
              dimas@dimnyan.tech
            </Link>
          </div>
        </div> */}
        <div>
          <h2 className="text-2xl font-bold pb-5">Socials</h2>
          <div className="mb-20 flex items-center">
            <Link
              href="https://www.linkedin.com/in/nyomanlanang"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-gray-400 hover:text-blue-400 mr-7 mt-3"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Link>
            <Link
              href="https://www.github.com/dimnyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 mr-7 mt-3"
            >
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </Link>
            <Link
              href="https://www.twitter.com/dimnyomm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 mr-7 mt-3"
            >
              <FontAwesomeIcon icon={faXTwitter} size="2xl" />
            </Link>
            <Link
              href="https://www.instagram.com/dimnyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 mt-3"
            >
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-xs text-center text-gray-400">
        &copy; 2023 dimnyan. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
