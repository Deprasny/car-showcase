"use client";

import Image from "next/image";
import { customButtonProps } from "@/types";

const CustomButton = ({ title, containerStyles, handleclick, btnType }: customButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleclick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
