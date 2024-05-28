// import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { useContext, useState } from 'react'
import { AddressContext } from '../context/AddressContext'
import { GlobalContext } from '../context/GlobalState'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown({setClientSent}) {
  const { clients } = useContext(AddressContext);

  console.log(clients[1].address);

  const [companyName, setCompanyName] = useState("")

  // const clients = [
  //   {company: "Client 1", value: 1, address: "32 First st NSW 200"},
  //   {company: "Client 2", value: 2, address: "65 Second st NSW 200"},
  //   {company: "Client 3", value: 3, address: "19 Third st NSW 200"}
  // ]

  function handleSelect(event) {
    setCompanyName(event.target.value)
    setClientSent(event.target.value)
    // setClientSent(client)
  }

  return (
    <>
      {/* <p>{companyName}</p> */}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {companyName || "Select client"}
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
          <MenuItems value={companyName} onClick={(event)=>handleSelect(event)} className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {clients.map(client => (
                <MenuItem key={client.value} >
                  {({ focus }) => (<option className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>{client.company}</option>)}
                </MenuItem>
              ))}
              {/* <form method="POST" action="#"></form> */}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
      
    </> 
  )
  
}