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
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pb-3 pt-20">
      <div className="max-w-screen-xl mx-auto px-10 mb-10 md:flex text-center md:justify-center md:gap-20">
        <div className="pb-10 ">
          <h2 className="text-md  font-bold pb-5">Contacts</h2>
          <div className="mb-2 flex items-center">
            <Link
              href="mailto:dimas@dimnyan.tech"
              target="_blank"
              className="hover:text-blue-400 text-gray-300 m-auto mt-4"
            >
              dimas@dimnyan.tech
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-md font-bold pb-5">Socials</h2>
          <div className="mb-20 flex justify-center items-center m-auto">
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
