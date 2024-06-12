import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useUpdateFromDropdown, useSelectedDataItem, useUpdateSelectedDataItem } from "../context/AddressContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
  const clients = useUpdateFromDropdown();
  const selectedDataItem = useSelectedDataItem();
  const setSelectedDataItem = useUpdateSelectedDataItem();

  const selectedClient = clients.find(client => client.address === selectedDataItem);

  return (
    <>
      <Menu as="div" className="grow relative w-full inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {selectedClient ? selectedClient.company : "Select a client"}
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400 justify-right" aria-hidden="true" />
          </MenuButton>
        </div>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute w-full left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {clients.map((client, index) => (
                <MenuItem key={index} onClick={() => setSelectedDataItem(client.address)}>
                  {({ active }) => (
                    <button
                      type="button"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-center px-4 py-2 text-sm'
                      )}
                    >
                      {client.company}
                    </button>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
}
