import React from 'react';
import { SellActions } from './SellActions';
import { NavigationItem } from './NavigationItem';

export const Navigation: React.FC = () => {
  const navigationItems = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/19f6e28cb90e0f63921abf325595f72648e69ff6?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3",
      label: "Your Items"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3b8ab3c0d3b2f212efd4f280d64bdd5b74fef7c7?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3",
      label: "Favourites"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/0a4a4eb7f2797b3c7f74d888d95419c91fe1aefd?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3",
      label: "Chat"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/4f102bd1fb4eb72213b84c06aff985013f78b85e?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3",
      label: "Blogs",
      iconClassName: "object-contain aspect-square w-[26px]"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/284e8bf32fb24f17b9f25dc8e05165bb052bf177?placeholderIfAbsent=true&apiKey=3f7458e5d9a64c4696cf1cdfab9613a3",
      label: "Career"
    }
  ];

  return (
    <nav className="flex flex-wrap gap-18 justify-center items-center self-stretch text-xs font-medium text-center min-w-60 text-neutral-600 max-md:max-w-full">
      <SellActions />
      {navigationItems.map((item, index) => (
        <NavigationItem
          key={index}
          icon={item.icon}
          label={item.label}
          iconClassName={item.iconClassName}
        />
      ))}
    </nav>
  );
};
