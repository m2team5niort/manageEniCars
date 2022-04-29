import { Menu, Transition } from '@headlessui/react'

export default function MyDropdown({car, deleteCar, modal, setModal}) {

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

        <Menu.Items className="z-30 absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
          <Menu.Item className="hover:bg-gray-300 bg-gray-100 text-gray-900 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">
            {/* {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Details
              </a>
            )} */}
            <button onClick={() => setModal(true)}   className={`cursor-pointer'}`}>
                Détails
            </button>
          </Menu.Item>
          <Menu.Item className="hover:bg-gray-300 bg-gray-100 text-gray-900 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">
            {/* {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Modifier
              </a>
            )} */}
            <button onClick={() => setModal({...modal, isShow: true, type: 'update', object: car})}  className={`cursor-pointer'}`}>
                Modifier
            </button>
          </Menu.Item>
          <Menu.Item className="hover:bg-gray-300 bg-gray-100 text-gray-900 text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">
              <button onClick={() => deleteCar(car)}  className={`cursor-pointer'}`}>
                Supprimer
              </button>
          </Menu.Item>
        </Menu.Items>

      </Menu>

    )
  }