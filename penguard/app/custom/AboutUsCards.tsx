import React from "react";
import DynamicLucideIcon, { LucideIconName } from "./DynamicLucideIcon";

function AboutUsCards({
  icon,
  title,
  description,
}: {
  icon: LucideIconName;
  title: string;
  description: string;
}) {
  return (
    <div className="flex justify-between w-full items-center bg-neutral-950  rounded-md p-3">
      <div>
        <DynamicLucideIcon name={icon} className='text-pink-600' />
      </div>
      <div className="space-y-4 flex flex-col ">

        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutUsCards;
