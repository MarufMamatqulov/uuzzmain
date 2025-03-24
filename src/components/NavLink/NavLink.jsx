import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

const NavLink = (props) => {
  const { href, className, activeClassName, children, ...rest } = props;

  const { asPath } = useRouter();

  return (
    <Link
      href={href}
      prefetch={false}
      className={cn({
        [className]: Boolean(className),
        [activeClassName]: asPath.startsWith(href.replace(/\/\d+$/, "")),
      })}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
