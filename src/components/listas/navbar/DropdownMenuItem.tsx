import Navbar from "../../model/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";

interface DropdownMenuItemProps {
  navbar: Navbar;
  subItems?: Navbar[];
}

export default function DropdownMenuItem(props: DropdownMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const { navbar, subItems } = props;

  return (
    <div>
      <span className="cursor-pointer text-white" onClick={subItems ? handleClick : undefined}>{navbar.nome}</span>
      {subItems && (
        <div onClick={handleClick}>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOpen ? "auto" : "max-h-0" }}
              transition={{ duration: 0.5 }}
              style={{ overflow: "hidden" }}
            >
              {subItems.map((item) => (
                <DropdownMenuItem key={item.id} navbar={item} />
              ))}
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
