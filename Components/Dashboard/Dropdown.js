import { Menu, Transition } from '@headlessui/react'

export default function MyDropdown() {

    return (

      <Menu>

        <Menu.Button>
        <img className="" src="../../assets/images/dots.png" />
        </Menu.Button>

        <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              />

        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
          <Menu.Item className="bg-gray-100 text-gray-900 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        >
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Details
              </a>
            )}
          </Menu.Item>
          <Menu.Item className="bg-gray-100 text-gray-900 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Modifier
              </a>
            )}
          </Menu.Item>
          <Menu.Item className="bg-gray-100 text-gray-900 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Supprimer
              </a>
            )}
          </Menu.Item>
        </Menu.Items>

      </Menu>

    )
  }