import React from "react";
import Image from "next/image";

const Button = ({ type, title, icon, variant }) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-2 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-14 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;

