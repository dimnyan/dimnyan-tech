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
    <footer className="bg-gray-900 text-white pb-3 pt-20">
      <div className="max-w-screen-xl mx-auto px-10 mb-10 md:flex md:gap-20">
        <div className="pb-10">
          <h2 className="text-md text-gray-200 font-bold pb-5">Contacts</h2>
          <div className="mb-2 flex items-center">
            <Link
              href="mailto:dimas@dimnyan.tech"
              target="_blank"
              className="hover:text-blue-400"
            >
              dimas@dimnyan.tech
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-md text-gray-200 font-bold pb-5">Socials</h2>
          <div className="mb-20 flex items-center">
            <Link
              href="https://www.linkedin.com/in/nyomanlanang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 mr-4"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-7" />
            </Link>
            <Link
              href="https://www.github.com/dimnyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 mr-4"
            >
              <FontAwesomeIcon icon={faGithub} className="w-7" />
            </Link>
            <Link
              href="https://www.twitter.com/dimnyomm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 mr-4"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-7" />
            </Link>
            <Link
              href="https://www.instagram.com/dimnyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 mr-4"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-7" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-sm text-center text-gray-400">
        &copy; 2023 dimnyan. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
