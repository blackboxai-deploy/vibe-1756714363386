"use client";

import { PlanetData } from "@/lib/planetsData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PlanetCardProps {
  planet: PlanetData;
  size?: "small" | "medium" | "large";
}

export default function PlanetCard({ planet, size = "medium" }: PlanetCardProps) {
  const sizeClasses = {
    small: "w-48 min-h-[280px]",
    medium: "w-72 min-h-[360px]",
    large: "w-80 min-h-[420px]"
  };

  const imageSizes = {
    small: "h-28",
    medium: "h-36",
    large: "h-44"
  };

  return (
    <Card className={`${sizeClasses[size]} bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm flex flex-col`}>
      <CardHeader className="pb-2">
        <div className={`${imageSizes[size]} mb-2 rounded-lg overflow-hidden bg-gradient-to-br ${planet.color} flex items-center justify-center relative`}>
          <img 
            src={planet.imagen} 
            alt={planet.nombre}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<div class="text-white text-center p-4"><div class="text-2xl font-bold">${planet.nombre}</div><div class="text-sm opacity-75">Planeta del Sistema Solar</div></div>`;
              }
            }}
          />
        </div>
        <CardTitle className="text-white text-xl font-bold text-center">
          {planet.nombre}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-2 space-y-3 flex-1 flex flex-col">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-slate-300">
            <span className="text-slate-400">Diámetro:</span>
            <div className="text-white font-medium text-xs">{planet.diametro}</div>
          </div>
          <div className="text-slate-300">
            <span className="text-slate-400">Lunas:</span>
            <div className="text-white font-medium text-xs">{planet.lunas}</div>
          </div>
        </div>
        
        <div className="text-sm">
          <span className="text-slate-400">Distancia del Sol:</span>
          <div className="text-white font-medium text-xs">{planet.distanciaSol}</div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-2">
          <Badge variant="secondary" className="text-xs bg-slate-700/50 text-slate-200 border-slate-600">
            {planet.periodoOrbital}
          </Badge>
        </div>
        
        <div className="mt-auto">
          <Link href={`/planetas/${planet.id}`} className="block w-full">
            <Button 
              className={`w-full bg-gradient-to-r ${planet.color} hover:opacity-90 transition-all duration-200 text-white font-medium`}
              size={size === "small" ? "sm" : "default"}
            >
              Explorar {planet.nombre}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}