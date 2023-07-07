"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import classNames from "classnames";
import { Button } from "./Button";
import { ChevronLeft } from "lucide-react";
import { Aberturas } from "./Aberturas";
import { Equipamiento } from "./Equipamiento";
import { Terminaciones } from "./Terminaciones";
import { MaterialsEnum } from "../enums/materials.enum";

const items = [
  {
    id: 1,
    label: MaterialsEnum.Aberturas,
    src: "/Aberturas.png",
  },
  {
    id: 2,
    label: MaterialsEnum.Equipamiento,
    src: "/Equipamiento.png",
  },
  {
    id: 3,
    label: MaterialsEnum.Terminaciones,
    src: "/Terminaciones.png",
  },
];

interface SidebarItemProps {
  label?: string;
  src?: string;
  onClick?: () => void;
  selected: boolean;
}

export function SidebarItem({
  label,
  src,
  onClick,
  selected,
}: SidebarItemProps) {
  return (
    <button
      className={classNames(
        "flex flex-col justify-center items-center p-4 hover:bg-gray-300",
        {
          "bg-gray-200": selected,
        }
      )}
      onClick={onClick}
    >
      <picture>
        <img src={src} alt={label} className='w-full' />
      </picture>
      <span className='mt-2 text-gray-800 capitalize'>{label}</span>
    </button>
  );
}

export function Sidebar() {
  const [selected, setSelected] = useState<string | null>();
  const sidebarContent = {
    [MaterialsEnum.Aberturas]: <Aberturas />,
    [MaterialsEnum.Equipamiento]: <Equipamiento />,
    [MaterialsEnum.Terminaciones]: <Terminaciones />,
  };

  return (
    <div className='flex h-full'>
      <nav className='flex flex-col bg-white w-32 justify-center h-full'>
        {items.map(({ id, ...props }) => (
          <SidebarItem
            key={id}
            {...props}
            onClick={() => setSelected(props.label)}
            selected={selected === props.label}
          />
        ))}
      </nav>
      <Transition
        as={Fragment}
        enter='duration-100'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        show={!!selected}
      >
        <div className='lg:w-3/6 bg-gray-200 h-full absolute left-32 w-[calc(100%-128px)] pt-36'>
          <div className='h-full overflow-y-auto'>
            <div className='p-2 '>
              {selected && sidebarContent[selected as MaterialsEnum]}
            </div>
            <Button
              ariaLabel='close'
              className='absolute right-0 top-1/2 !px-0  md:right-[-8px]'
              onClick={() => setSelected(null)}
            >
              <ChevronLeft className='w-4 h-4'></ChevronLeft>
            </Button>
          </div>
        </div>
      </Transition>
    </div>
  );
}
