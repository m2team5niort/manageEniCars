import { Fragment } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import UserService from "../../service/UserService"
import { useUser } from '../../firebase/useUser'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Fonctionnalités', href: '/features' },
  { name: 'Réservation', href: '/booking' }
]

export default function Navbar({ header }) {

  function signOut() {
    UserService.signOut()
  }

  const { user, logout } = useUser()

  return (
    header === true ?
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-6">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    ))}
                    {user ?
                      <>
                        <Menu as="div" className="relative inline-block text-left">
                          <div>
                            <Menu.Button>
                              <img className="inline object-cover w-8 h-8 rounded-full" src={user.profilePic != null ? user.profilePic : 'https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png'} alt="Profile image" />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  <div className='bg-white text-gray-900 block px-4 py-2 text-sm'>
                                    <p>Bienvenue</p>
                                    <span className="font-medium mt-12">{user.name != null ? user.name : user.email}</span>
                                  </div>
                                </Menu.Item>
                              </div>
                              <div className="py-1">
                                <Menu.Item>
                                  <a
                                    href="#"
                                    className='bg-white hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                                  >
                                    Mon profil
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="#"
                                    className='bg-white hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                                  >
                                    Aide
                                  </a>
                                </Menu.Item>
                              </div>
                              <div className="py-1">
                                <Menu.Item>
                                  <button
                                    onClick={() => signOut()}
                                    className='bg-white hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm w-full text-left'
                                  >
                                    Se déconnecter
                                  </button>
                                </Menu.Item>
                              </div>
                            </Menu.Items>

                          </Transition >
                        </Menu >
                      </>
                      :
                      <>
                        <span className="text-gray-400">|</span>
                        <Link href='/signin'>
                          <a className="text-gray-500  font-semibold py-2 rounded">
                            Se connecter
                          </a>
                        </Link>
                        <Link href='/signup'>
                          <a className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold hover:text-white py-2 px-4 rounded">
                            S'enregistrer
                          </a>
                        </Link>
                      </>
                    }
                  </div >
                </nav >
              </div >

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
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                    {user ?
                      <>
                        <img className="inline object-cover w-8 h-8 rounded-full" src="" alt="Profile image" />
                      </>
                      :
                      <>
                        <button onClick={() => console.log('coucou')}>Se connecter</button>
                      </>
                    }
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover >

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Réservez votre voiture</span>{' '}
                  <span className="block text-indigo-600 xl:inline">maintenant</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                  fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Commencer
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Réservation
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div >
        </div >
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://www.largus.fr/images/images/location-voiture.jpg"
            alt=""
          />
        </div>
      </div >
      :
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 lg:max-w-3xl lg:w-full mb-8">

            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-6">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    ))}
                    {user ?
                      <>
                        <Menu as="div" className="relative inline-block text-left">
                          <div>
                            <Menu.Button>
                              <img className="inline object-cover w-8 h-8 rounded-full" src={user.profilePic != null ? user.profilePic : 'http://jingculturecommerce.com/wp-content/uploads/2021/11/rtfkt-murakami-clone-x-4-1024x682.jpg'} alt="Profile image" />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  <div className='bg-white text-gray-900 block px-4 py-2 text-sm'>
                                    <p>Bienvenue</p>
                                    <span className="font-medium mt-12">{user.name != null ? user.name : user.email}</span>
                                  </div>
                                </Menu.Item>
                              </div>
                              <div className="py-1">
                                <Menu.Item>
                                  <a
                                    href="#"
                                    className='bg-white hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                                  >
                                    Mon profil
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="#"
                                    className='bg-white hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm'
                                  >
                                    Aide
                                  </a>
                                </Menu.Item>
                              </div>
                              <div className="py-1">
                                <Menu.Item>
                                  <button
                                    onClick={() => signOut()}
                                    className='bg-white hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm w-full text-left'
                                  >
                                    Se déconnecter
                                  </button>
                                </Menu.Item>
                              </div>
                            </Menu.Items>

                          </Transition>
                        </Menu>
                      </>
                      :
                      <>
                        <span className="text-gray-400">|</span>
                        <Link href='/signin'>
                          <a className="text-gray-500  font-semibold py-2 rounded">
                            Se connecter
                          </a>
                        </Link>
                        <Link href='/signup'>
                          <a className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold hover:text-white py-2 px-4 rounded">
                            S'enregistrer
                          </a>
                        </Link>
                      </>
                    }
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
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                    {user ?
                      <>
                        <img className="inline object-cover w-8 h-8 rounded-full" src="" alt="Profile image" />
                      </>
                      :
                      <>
                        <button onClick={() => console.log('coucou')}>Se connecter</button>
                      </>
                    }
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
      </div>

  )
}