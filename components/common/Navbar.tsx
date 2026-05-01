import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ShoppingCart } from "lucide-react";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-md mx-auto flex justify-between items-center h-16 fixed top-5 left-0 right-0 z-50 px-4 sm:px-10 shadow-md rounded-full bg-white">
      <Link href="/" className="font-semibold">
        Wave<span className="text-primary">Mart</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">
                <ShoppingCart />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
