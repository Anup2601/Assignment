import React from 'react';
import { toast } from "react-hot-toast";
import {  Heart, BookOpen, Briefcase, MessageSquareMore, ShoppingBag } from "lucide-react";
import { SellActions } from './SellActions';

interface NavItem {
  icon: React.ReactNode;
  label: string;
}

export const Navigation: React.FC = () => {
  const navigationItems: NavItem[] = [
    { icon: <ShoppingBag size={22} />, label: "Your Items" },
    { icon: <Heart size={22} />, label: "Favourites" },
    { icon: <MessageSquareMore size={22} />, label: "Chat" },
    { icon: <BookOpen size={22} />, label: "Blogs" },
    { icon: <Briefcase size={22} />, label: "Career" }
  ];

  const handleClick = (label: string) => {
    toast.success(`${label} → Coming Soon 🚀`);
  };

  return (
    <nav className="flex flex-wrap gap-12 justify-center items-center self-stretch text-xs font-medium text-center min-w-60 text-neutral-600 max-md:max-w-full">
      <SellActions />
      {navigationItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(item.label)}
          className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl hover:scale-105 transition"
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};
