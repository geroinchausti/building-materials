"use client";
import classNames from "classnames";
import React, { MouseEvent } from "react";
import { MaterialsEnum } from "../enums/materials.enum";
import { Materials } from "./Materials";

interface TerminacionesProps {}

export function Terminaciones({}: TerminacionesProps) {
  return <Materials material={MaterialsEnum.Terminaciones} />;
}
