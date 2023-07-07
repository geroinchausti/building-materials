"use client";
import React, { useEffect, useMemo, useState, MouseEvent } from "react";
import Skeleton from "react-loading-skeleton";
import { MaterialsEnum } from "../enums/materials.enum";
import { Data, Item } from "../interfaces/data.interface";
import materialsService from "../services/materials.service";
import { Button } from "./Button";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface MaterialsProps {
  material: MaterialsEnum;
}

function CategorySkeleton({ className }: { className?: string }) {
  return (
    <Skeleton
      highlightColor='#525252'
      baseColor='#a3a3a3'
      height={48}
      className={className}
    />
  );
}

interface ImageGalleryProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  breadcrumbText: string;
  title: string;
  images: Item[];
}

function ImageGallery({
  onClick,
  breadcrumbText,
  title,
  images,
}: ImageGalleryProps) {
  return (
    <div className='flex flex-col space-y-4'>
      <button
        className='font-semibold text-sm flex items-center capitalize justify-start'
        onClick={onClick}
      >
        <ChevronLeftIcon className='h-4 w-4' /> {breadcrumbText}
      </button>
      <h3 className='font-semibold'>{title}</h3>
      <div className='flex flex-wrap justify-center'>
        {images.map((item: Item) => {
          return (
            <div
              key={item.name}
              className='flex flex-col justify-center items-center m-4'
            >
              <div
                className={
                  "bg-zinc-300 w-40 h-40 flex justify-center items-center overflow-hidden"
                }
              >
                <picture>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='w-full'
                  />
                </picture>
              </div>
              <span className='mt-4'>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface CategoryButtonsProps {
  onClick?: (index: number) => void;
  title: string;
  data: Data[];
}

function CategoryButtons({ onClick, title, data }: CategoryButtonsProps) {
  return (
    <div className='space-y-4 mt-4'>
      <h3 className='font-semibold capitalize'>{title}</h3>
      {data.length ? (
        data.map((m: Data, index: number) => {
          return (
            <Button
              ariaLabel={m.name}
              className='w-full text-left flex justify-between items-center'
              key={m.name}
              onClick={() => onClick && onClick(index)}
            >
              <span>{m.name}</span>
              <ChevronRightIcon className='h-4 w-4' />
            </Button>
          );
        })
      ) : (
        <div className='mt-4'>
          <CategorySkeleton />
          <CategorySkeleton className='mt-4' />
        </div>
      )}
    </div>
  );
}

export function Materials({ material }: MaterialsProps) {
  const [data, setData] = useState<Data[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const services = useMemo(
    () => ({
      [MaterialsEnum.Aberturas]: materialsService.getAberturas,
      [MaterialsEnum.Equipamiento]: materialsService.getEquipamiento,
      [MaterialsEnum.Terminaciones]: materialsService.getTerminaciones,
    }),
    []
  );

  useEffect(() => {
    const apiCall = async () => {
      const response = await services[material]();
      if (response) {
        setData(response);
      }
    };
    apiCall();
  }, [services, material]);

  return currentIndex >= 0 ? (
    <ImageGallery
      onClick={() => setCurrentIndex(-1)}
      breadcrumbText={material}
      title={data[currentIndex].name}
      images={data[currentIndex].items}
    />
  ) : (
    <CategoryButtons
      onClick={(index) => setCurrentIndex(index)}
      title={material}
      data={data}
    />
  );
}
