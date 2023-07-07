"use client";
import { Button } from "@/src/components/Button";
import { ArrowsPointingOutIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-end space-x-6'>
        <Button ariaLabel='fijar' onClick={() => console.log("click on fijar")}>
          Fijar
        </Button>
        <Button
          ariaLabel='borrar'
          onClick={() => console.log("click on borrar")}
        >
          Borrar
        </Button>
      </div>
      <div className='flex justify-end space-x-6'>
        <div className='flex flex-col bg-white w-10 rounded'>
          <Button
            className='!p-0 !px-1 w-full'
            ariaLabel='plus'
            onClick={() => console.log("click on plus")}
          >
            <span className='text-lg'>+</span>
          </Button>
          <div className='border border-gray-200'></div>
          <Button
            className='!p-0 w-full'
            ariaLabel='minus'
            onClick={() => console.log("click on minus")}
          >
            <span className='text-lg'>-</span>
          </Button>
        </div>
        <Button
          ariaLabel='expand'
          onClick={() => console.log("click on expand")}
          className='!py-0 !px-3'
        >
          <ArrowsPointingOutIcon className='w-8 h-8' />
        </Button>
      </div>
    </div>
  );
}
