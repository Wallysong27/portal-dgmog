import React, { useState } from 'react';
import DropdownMenuItem from './DropdownMenuItem';

interface DropdownMenuProps {
  menuItems: { id: number; nome: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-gray-700 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        Dropdown
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          <div className="py-1">
            {menuItems.map((item) => (
              <DropdownMenuItem key={item.id} navbar={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
