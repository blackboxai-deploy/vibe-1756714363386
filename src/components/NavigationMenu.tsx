"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface NavItem {
  href: string;
  label: string;
  description: string;
}

const navigationItems: NavItem[] = [
  {
    href: "/",
    label: "Inicio",
    description: "Bienvenida al sistema solar"
  },
  {
    href: "/sistema-solar",
    label: "Sistema Solar",
    description: "Vista general y modelo interactivo"
  },
  {
    href: "/planetas",
    label: "Los Planetas",
    description: "Explora cada planeta en detalle"
  },
  {
    href: "/el-sol",
    label: "El Sol",
    description: "Nuestra estrella central"
  },
  {
    href: "/quiz",
    label: "Quiz",
    description: "Pon a prueba tus conocimientos"
  }
];

export default function NavigationMenu() {
  const pathname = usePathname();

  return (
    <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-slate-700 backdrop-blur-sm">
      <CardContent className="p-6">
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href === "/planetas" && pathname.startsWith("/planetas"));
            
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start text-left h-auto p-4 ${
                    isActive 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className={`text-sm ${isActive ? "text-blue-100" : "text-slate-400"}`}>
                      {item.description}
                    </div>
                  </div>
                </Button>
              </Link>
            );
          })}
        </nav>
      </CardContent>
    </Card>
  );
}