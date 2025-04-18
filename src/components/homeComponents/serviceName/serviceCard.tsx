import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
interface ServiceCardProps {
  title: string;
  imageSrc: string;
}

export default function ServiceCard({ title, imageSrc }: ServiceCardProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const handleNavigate = async (courseName: string) => {
    const encodedText = encodeURIComponent(courseName);
    router.push(`/service?service=${encodedText}`);
  };
  return (
    <div onClick={() =>
      handleNavigate(title.replace(/\s+/g, " ").trim().replace(/\s/g, ""))
    } className="flex transition-transform cursor-pointer transform hover:scale-105 flex-col items-center justify-center text-[#3E180E] rounded-xl shadow-2xl bg-[#EDEDED] p-6 text-center w-40 h-52">
      <div className="w-24 h-24 flex items-center justify-center overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={title} width={96} height={96} className="object-cover" />
      </div>
      <p className="mt-3 text-sm font-medium uppercase">{title}</p>
    </div>
  );
}