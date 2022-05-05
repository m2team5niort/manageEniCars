import { Menu, Transition } from '@headlessui/react'
import { PencilAltIcon, TrashIcon, DocumentSearchIcon } from '@heroicons/react/outline'
import { DotsVerticalIcon } from '@heroicons/react/solid'

export default function MyDropdown({ deleteObject, modal, setModal, object, listObjects }) {

  return (

    <Menu>

      <Menu.Button>
        <DotsVerticalIcon className='w-6 h-6 hover:text-gray-900' />
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      />

      <Menu.Items className="z-50 absolute right-20 w-56  origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
        <Menu.Item className="hover:bg-gray-200 bg-gray-100 text-gray-900 flex w-full px-4 py-2 text-sm leading-5 text-left">
          <button onClick={() => setModal({ ...modal, isShow: true, type: 'details', object: object, listObjects: [listObjects[0], listObjects[1]] })} className={`cursor-pointer'}`}>
            <DocumentSearchIcon className="h-5 w-5 mr-4 text-gray-900" />
            Détails
          </button>
        </Menu.Item>
        <Menu.Item className="hover:bg-gray-200 bg-gray-100 text-gray-900 flex w-full px-4 py-2 text-sm leading-5 text-left">
          <button onClick={() => setModal({ ...modal, isShow: true, type: 'update', object: object, listObjects: [listObjects[0], listObjects[1]] })} className={`cursor-pointer'}`}>
            <PencilAltIcon className="h-5 w-5 mr-4 text-gray-900" />
            Modifier
          </button>
        </Menu.Item>
        <Menu.Item className="hover:bg-gray-200 bg-gray-100 text-gray-900 flex w-full px-4 py-2 text-sm leading-5 text-left">
          <button onClick={() => deleteObject(object)} className={`cursor-pointer'}`}>
            <TrashIcon className="h-5 w-5 mr-4 text-gray-900" />
            Supprimer
          </button>
        </Menu.Item>
      </Menu.Items>

    </Menu>

  )
}