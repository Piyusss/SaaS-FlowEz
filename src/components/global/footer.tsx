import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub  } from 'react-icons/fa';
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full py-6 mb-0 mt-20 border-t backdrop-blur-lg">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <aside className="flex items-center gap-[1px] justify-center sm:justify-start mb-4 sm:mb-0">
            <p className="text-3xl font-bold">Flow</p>
            <Image
            src="/fuzzieLogo.png"
            width={15}
            height={15}
            alt="fuzzie logo"
            className="shadow-sm"
            />
            <p className="text-3xl font-bold">-ez</p>
          </aside>
        </div>
        <div>
          <div className="flex justify-center sm:justify-start space-x-6 py-2">
            <Link href="https://facebook.com"
              className="hover:text-blue-700">
                <FaFacebookF size={22}/>
            </Link>
            <Link href="https://twitter.com"
              className="hover:text-blue-300">
                <FaTwitter size={22}/>
            </Link>
            <Link href="https://instagram.com"
              className="hover:text-pink-500">
                <FaInstagram size={22}/>
            </Link>
            <Link href="https://www.linkedin.com"
              className="hover:text-blue-500">
              <FaLinkedinIn size={22}/>
            </Link>
            <Link href="https://github.com"
              className="hover:text-gray-500">
              <FaGithub size={22}/>
            </Link>
          </div>
          <p className="text-center sm:text-left">💙 {new Date().getFullYear()} Flow-ez </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
