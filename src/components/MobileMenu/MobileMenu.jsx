import cn from "classnames";
import { useTranslation } from "@/hooks/useTranslation";
import Language from "@/components/Languages/Languages";
import Image from "next/image";

import NavLink from "@/components/NavLink";

const MobileMenu = ({ className, setIsOpen }) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        {
          ["flex lg:hidden flex-col p-4 max-w-[85%] w-full bg-gray-50 fixed top-0 left-0 min-h-screen transition-transform ease-in-out duration-300"]: true,
        },
        className
      )}
    >
      <div className="w-full">
        <NavLink onClick={() => setIsOpen(false)} href="/">
          <Image src="/logo.svg" alt="Site Logo" width={40} height={40} />
        </NavLink>
      </div>
      <div className="w-full grow">
        <ul className="flex flex-col">
          <NavLink
            onClick={() => setIsOpen(false)}
            href="/muzeys"
            className="navItem"
          >
            {t("navbar:muzeys")}
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            href="/genders"
            className="navItem"
          >
            {t("navbar:genders")}
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            href="/jadids"
            className="navItem"
          >
            {t("navbar:jadids")}
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            href="/about"
            className="navItem"
          >
            {t("navbar:about")}
          </NavLink>
        </ul>
      </div>

      <Language />
    </div>
  );
};

export default MobileMenu;
