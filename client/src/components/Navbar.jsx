import { Menu, School } from "lucide-react";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "User log out.");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
          <School size={"30"} />
          <Link to="/">
            <h1 className="hidden md:block font-extrabold text-2xl">
              E-Learning
            </h1>
          </Link>
        </div>
        {/* User icons and dark mode icon  */}
        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                     src={user?.photoUrl || "https://github.com/shadcn.png"}
                  //  src={user?.photoUrl || "data:image/jpeg;base64,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"}

                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="my-learning">My learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {" "}
                    <Link to="profile">Edit Profile</Link>{" "}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {user?.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Link to="/admin/dashboard">Dashboard</Link></DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => navigate("/login")}>Signup</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* Mobile device  */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <h1 className="font-extrabold text-2xl">E-learning</h1>
        <MobileNavbar user={user}/>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = ({user}) => {
  const navigate = useNavigate();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full hover:bg-gray-200"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle> <Link to="/">E-Learning</Link></SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2" />
        <nav className="flex flex-col space-y-4">
          <Link to="/my-learning">My Learning</Link>
          <Link to="/profile">Edit Profile</Link>
          <p>Log out</p>
        </nav>
        {user?.role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" onClick={()=> navigate("/admin/dashboard")}>Dashboard</Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
