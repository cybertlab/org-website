import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Menu = () => {
  const { navigation, company, callToAction, about } = config;
  const { name: companyName, logo } = company;
  const { socialMedia } = about;

  return (
    <>
      <svg
        className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2`}
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">{companyName}</span>
                  <img alt="logo" className="h-16 w-auto sm:h-16" src={logo} />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="flex items-center justify-between   gap-x-8 mt-6 h-8">
                <a
                  aria-label="github"
                  href={socialMedia.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="fill-current text-gray-800 dark:text-white hover:text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  aria-label="discord"
                  href={socialMedia.discord}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="fill-current text-gray-800 dark:text-white hover:text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.404 0H3.442c-.342 0-.68.065-.995.19a2.614 2.614 0 0 0-.843.536 2.46 2.46 0 0 0-.562.801c-.13.3-.197.62-.196.944v16.225c0 .324.066.645.196.944.13.3.321.572.562.801.241.23.527.412.843.537.315.124.653.189.995.19h14.354l-.67-2.22 1.62 1.428 1.532 1.344L23 24V2.472c0-.324-.066-.644-.196-.944a2.46 2.46 0 0 0-.562-.8A2.614 2.614 0 0 0 21.4.19a2.726 2.726 0 0 0-.995-.19V0Zm-4.886 15.672s-.456-.516-.836-.972c1.659-.444 2.292-1.428 2.292-1.428a7.38 7.38 0 0 1-1.456.707 8.67 8.67 0 0 1-1.836.517 9.347 9.347 0 0 1-3.279-.012 11.074 11.074 0 0 1-1.86-.516 7.621 7.621 0 0 1-.924-.409c-.039-.023-.076-.035-.113-.06-.027-.011-.04-.023-.052-.035-.228-.12-.354-.204-.354-.204s.608.96 2.215 1.416c-.38.456-.848.996-.848.996-2.797-.084-3.86-1.824-3.86-1.824 0-3.864 1.822-6.996 1.822-6.996 1.823-1.296 3.557-1.26 3.557-1.26l.127.145c-2.278.623-3.33 1.57-3.33 1.57s.279-.143.747-.347c1.355-.564 2.43-.72 2.873-.756.077-.012.14-.024.216-.024a10.804 10.804 0 0 1 6.368 1.129s-1.001-.9-3.153-1.526l.178-.19s1.735-.037 3.557 1.259c0 0 1.823 3.133 1.823 6.996 0 0-1.076 1.74-3.874 1.824Z"></path>
                  </svg>
                </a>
                <a
                  aria-label="twitter"
                  href={socialMedia.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="fill-current text-gray-800 dark:text-white hover:text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  key={item.name}
                  to={item.href}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="#"
                className={`font-medium text-primary hover:text-secondary`}
              >
                About
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href={callToAction.href}
                className={`block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100`}
              >
                {callToAction.text}
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Menu;
