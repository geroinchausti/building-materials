"use client";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { MaterialsEnum } from "../enums/materials.enum";
import materialsService from "../services/materials.service";
import { Materials } from "./Materials";

interface AberturasProps {}

export function Aberturas({}: AberturasProps) {
  return <Materials material={MaterialsEnum.Aberturas} />;
}
