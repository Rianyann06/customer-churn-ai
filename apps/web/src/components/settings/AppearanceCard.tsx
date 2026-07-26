import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Card, CardContent } from "@/components/ui/card";

const themes = [
  {
    id: "light",
    title: "Light",
    icon: Sun,
    description: "Bright interface",
  },
  {
    id: "dark",
    title: "Dark",
    icon: Moon,
    description: "Low-light appearance",
  },
  {
    id: "system",
    title: "System",
    icon: Laptop,
    description: "Follow your device",
  },
];

export default function AppearanceCard() {
  const { theme, setTheme } = useTheme();

  return (
    <Card className="border-border/60 shadow-sm">
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Appearance
          </h3>

          <p className="text-sm text-muted-foreground">
            Choose how the application looks.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {themes.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() =>
                  setTheme(item.id as "light" | "dark" | "system")
                }
                className={`rounded-2xl border p-5 transition-all duration-300 ${
                  theme === item.id
                    ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                    : "hover:border-primary hover:bg-primary/5"
                }`}
              >
                <div className="mb-4 flex justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                <h4 className="font-semibold">
                  {item.title}
                </h4>

                <p className="mt-1 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}