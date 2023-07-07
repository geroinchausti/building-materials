"use client";
import React, { useState } from "react";
import { Select, SelectButton, SelectOption, SelectOptions } from "./Select";

const options = [
  { id: 1, name: "Guardar y Salir" },
  { id: 2, name: "Salir sin guardar" },
  { id: 3, name: "Guardar y Continuar" },
];

export function Header() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <header className='flex h-36 w-full bg-gray-700 fixed justify-center z-10'>
      <div className='flex justify-between items-center flex-1 p-4 md:max-w-7xl'>
        <picture className='w-32 h-32 flex justify-center items-center'>
          <img src='/vercel.svg' alt='Vercel Logo' className='w-full' />
        </picture>
        <Select value={selected} onChange={setSelected}>
          <SelectButton className='md:w-[250px]'>{selected.name}</SelectButton>
          <SelectOptions>
            {options.map((option) => (
              <SelectOption key={option.id} value={option}>
                {option.name}
              </SelectOption>
            ))}
          </SelectOptions>
        </Select>
      </div>
    </header>
  );
}
