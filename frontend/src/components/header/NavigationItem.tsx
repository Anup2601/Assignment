import React from 'react';

interface NavigationItemProps {
  icon: string;
  label: string;
  iconClassName?: string;
  showIcon?: boolean;
  onClick?: () => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  iconClassName = "object-contain w-6 aspect-square",
  showIcon = true,
  onClick
}) => {
  return (
    <button
      className="flex flex-col items-center self-stretch my-auto cursor-pointer hover:opacity-80 transition-opacity"
      onClick={onClick}
    >
      {showIcon && (
        <img
          src={icon}
          className={iconClassName}
          alt={label}
        />
      )}
      <span className="mt-1 text-xs font-medium text-center text-neutral-600">
        {label}
      </span>
    </button>
  );
};
