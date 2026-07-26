import {
  Bell,
  GitBranch,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { UserProfile } from "@/types/profile";
import { getProfile } from "@/lib/profile-storage";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [profile, setProfile] = useState<UserProfile>(getProfile());

  useEffect(() => {
    const handleProfileUpdate = () => {
      setProfile(getProfile());
    };

    handleProfileUpdate();

    window.addEventListener("profile-updated", handleProfileUpdate);

    return () => {
      window.removeEventListener(
        "profile-updated",
        handleProfileUpdate
      );
    };
  }, []);

  const title =
    pathname === "/"
      ? "Dashboard"
      : pathname === "/prediction"
        ? "Prediction"
        : pathname === "/customers"
          ? "Customers"
          : pathname === "/analytics"
            ? "Analytics"
            : pathname === "/settings"
              ? "Settings"
              : "Customer Churn AI";

  const subtitle =
    pathname === "/"
      ? "Monitor your business performance and customer insights."
      : pathname === "/prediction"
        ? "Predict customer churn using AI-powered machine learning."
        : pathname === "/customers"
          ? "Manage customer information and churn history."
          : pathname === "/analytics"
            ? "Explore trends and business analytics."
            : pathname === "/settings"
              ? "Customize your application preferences."
              : "Customer Churn AI Platform";

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-4 z-40 mx-6 mt-4 flex h-20 items-center justify-between rounded-2xl border bg-background/80 px-8 shadow-sm backdrop-blur-xl">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>

        <p className="text-sm text-muted-foreground">
          {subtitle}
        </p>
      </div>



      <div className="flex items-center gap-3">

        <div className="hidden items-center gap-2 rounded-full border bg-muted/40 px-3 py-2 lg:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />

          <span className="text-xs font-medium">
            AI Model Ready
          </span>
        </div>

        <button className="relative flex h-10 w-10 items-center justify-center rounded-lg border transition-colors hover:bg-muted">
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type="button"
              className="rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <Avatar className="h-10 w-10 cursor-pointer border">
                <AvatarImage
                  src={profile.avatar || undefined}
                  alt={profile.name}
                />
                <AvatarFallback className="font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-64"
          >
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="font-semibold">
                  {profile.name}
                </span>

                <span className="text-xs text-muted-foreground">
                  {profile.role}
                </span>

                <span className="text-xs text-muted-foreground">
                  {profile.email}
                </span>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => navigate("/settings")}
            >
              <User className="mr-2 h-4 w-4" />
              My Profile
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => navigate("/settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() =>
                window.open(
                  "https://github.com/",
                  "_blank"
                )
              }
            >
              <GitBranch className="mr-2 h-4 w-4" />
              GitHub
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => {
                localStorage.removeItem("user-profile");
                window.location.reload();
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}