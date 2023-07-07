"use client";
import classNames from "classnames";
import React from "react";
import { MaterialsEnum } from "../enums/materials.enum";
import { Materials } from "./Materials";

interface EquipamientoProps {}

export function Equipamiento({}: EquipamientoProps) {
  return <Materials material={MaterialsEnum.Equipamiento} />;
}
