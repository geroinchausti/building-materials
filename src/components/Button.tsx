"use client";
import classNames from 'classnames';
import React, { MouseEvent } from "react";

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  ariaLabel: string;
  className?: string;
}

export function Button({ onClick, children, ariaLabel, className }: ButtonProps) {
  return <button  className={classNames("bg-white px-5 py-3 rounded hover:bg-gray-700 hover:text-white active:bg-gray-900 active:text-white", className)} onClick={onClick} aria-label={ariaLabel}>{children}</button>;
}
