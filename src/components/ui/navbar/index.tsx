import LogoNav from "../../../assets/img/LogoNav.png";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowPathRoundedSquareIcon,
  ChartPieIcon,
  ClipboardDocumentListIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const navListMenuServicos = [
  {
    title: "CISPE",
    description: "Centro de Inteligência na Saúde de Pernambuco",
    icon: InformationCircleIcon,
  },
  {
    title: "Paineis de Monitoramento",
    description: "Meet and learn about our dedication",
    icon: ChartPieIcon,
  },
  {
    title: "Fluxos Processuais",
    description: "Find the perfect solution for your needs.",
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    title: "Requisição de chamados",
    description: "Reach out to us for assistance or inquiries",
    icon: ClipboardDocumentListIcon,
  },
];

function NavMenuServicos() {
  const [isMenuOpenServicos, setIsMenuOpenServicos] = React.useState(false);
  const [isMobileMenuOpenServicos, setIsMobileMenuOpenServicos] =
    React.useState(false);
  const renderItemsServicos = navListMenuServicos.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpenServicos}
        handler={setIsMenuOpenServicos}
        offset={{ mainAxis: 20 }}
        placement="bottom"
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent text-white hover:text-white focus:text-white active:text-white"
              selected={isMenuOpenServicos || isMobileMenuOpenServicos}
              onClick={() => setIsMobileMenuOpenServicos((cur) => !cur)}
            >
              Nossos Serviços
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpenServicos ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpenServicos ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItemsServicos}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpenServicos}>
          {renderItemsServicos}
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent text-white hover:text-white focus:text-white active:text-white">
          Home
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent text-white hover:text-white focus:text-white active:text-white">
          Quem Somos
        </ListItem>
      </Typography>
      {/* <NavMenuQuemSomos /> */}
      <NavMenuServicos />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent text-white hover:text-white focus:text-white active:text-white">
          Contato
        </ListItem>
      </Typography>
    </List>
  );
}

export default function MegaMenuDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="fixed z-[10000] max-w-none w-full px-4 py-2 border-none shadow-none bg-black bg-opacity-10 backdrop-filter backdrop-blur-3xl">
      <div className="flex items-center justify-around">
        <img src={LogoNav} alt="" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
