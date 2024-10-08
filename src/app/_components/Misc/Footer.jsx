import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pb-3 pt-20 px-12 md:px-24">
      <div className="max-w-screen-xl mx-auto mb-10 md:grid md:grid-cols-2">
        <div className="pb-10 text-slate-300">
          <h2 className="font-bold lg:text-left text-2xl">
            Your business needs a Website?
          </h2>
          <p className="pt-2 pb-3">Feel free to contact me!</p>

          <Link
            href="mailto:dimasnyoman1@gmail.com"
            target="_blank"
            className="font-bold text-slate-300 hover:text-orange-500 border-b border-b-orange-500 pb-1 w-fit text-2xl"
          >
            dimasnyoman1@gmail.com
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-bold pb-5">Socials</h2>
          <div className="mb-20 flex items-center">
            <Link
              href="https://linktr.ee/dimasnyoman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/linktree.svg"}
                width={28}
                height={28}
                alt=""
                className="h-10 w-10 mr-7 mt-3"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nyomanlanang"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-gray-400 hover:text-orange-500 mr-7 mt-3"
            >
              <Image
                src={"/images/linkedin.svg"}
                width={28}
                height={28}
                alt=""
                className="h-10 w-10"
              />
            </Link>
            <Link
              href="https://www.github.com/dimnyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 mr-7 mt-3"
            >
              <Image
                src={"/images/github.svg"}
                width={28}
                height={28}
                alt=""
                className="h-10 w-10"
              />
            </Link>

            {/* <Link
              href="https://www.instagram.com/dimnyan_dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/Instagram.svg"}
                width={30}
                height={30}
                alt=""
                className="h-10 w-10 mr-7 mt-3"
              />
            </Link> */}
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
