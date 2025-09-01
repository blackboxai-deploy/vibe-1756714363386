"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PlanetOrbit {
  id: string;
  name: string;
  distance: number;
  speed: number;
  color: string;
  size: number;
}

export default function SolarSystemModel() {
  const [isAnimated, setIsAnimated] = useState(true);
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);

  const orbits: PlanetOrbit[] = [
    { id: "mercurio", name: "Mercurio", distance: 80, speed: 4, color: "#8C7853", size: 4 },
    { id: "venus", name: "Venus", distance: 100, speed: 3, color: "#FFC649", size: 6 },
    { id: "tierra", name: "Tierra", distance: 120, speed: 2.5, color: "#4F94CD", size: 6 },
    { id: "marte", name: "Marte", distance: 140, speed: 2, color: "#CD5C5C", size: 5 },
    { id: "jupiter", name: "Júpiter", distance: 180, speed: 1.2, color: "#D2691E", size: 18 },
    { id: "saturno", name: "Saturno", distance: 220, speed: 1, color: "#FAD5A5", size: 16 },
    { id: "urano", name: "Urano", distance: 260, speed: 0.8, color: "#4FD0E7", size: 12 },
    { id: "neptuno", name: "Neptuno", distance: 300, speed: 0.6, color: "#4169E1", size: 12 }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Controls */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setIsAnimated(!isAnimated)}
                variant={isAnimated ? "default" : "outline"}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isAnimated ? "Pausar Animación" : "Iniciar Animación"}
              </Button>
            </div>

            {/* Solar System Model */}
            <div className="relative w-full h-96 bg-gradient-radial from-black/50 via-slate-900/30 to-transparent rounded-full overflow-hidden">
              {/* Sun */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-radial from-yellow-300 to-orange-500 rounded-full shadow-lg shadow-yellow-400/50 z-10">
                <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-orange-400 rounded-full animate-pulse"></div>
              </div>

              {/* Orbital paths */}
              {orbits.map((orbit) => (
                <div
                  key={`orbit-${orbit.id}`}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-slate-600/30 rounded-full"
                  style={{
                    width: `${orbit.distance * 2}px`,
                    height: `${orbit.distance * 2}px`,
                  }}
                />
              ))}

              {/* Planets */}
              {orbits.map((orbit) => (
                <div
                  key={orbit.id}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: `${orbit.distance * 2}px`,
                    height: `${orbit.distance * 2}px`,
                    animation: isAnimated ? `rotate ${20 / orbit.speed}s linear infinite` : 'none',
                  }}
                >
                  <Link href={`/planetas/${orbit.id}`}>
                    <div
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-300 hover:scale-150 group"
                      style={{
                        width: `${orbit.size}px`,
                        height: `${orbit.size}px`,
                        backgroundColor: orbit.color,
                        boxShadow: `0 0 10px ${orbit.color}50`,
                      }}
                      onMouseEnter={() => setHoveredPlanet(orbit.id)}
                      onMouseLeave={() => setHoveredPlanet(null)}
                    >
                      {/* Planet hover info */}
                      {hoveredPlanet === orbit.id && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20 border border-slate-600">
                          {orbit.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
              {orbits.slice(0, 8).map((orbit) => (
                <div key={`legend-${orbit.id}`} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: orbit.color }}
                  />
                  <span className="text-slate-300 text-sm">{orbit.name}</span>
                </div>
              ))}
            </div>

            {/* Information */}
            <div className="text-center text-slate-300 max-w-2xl">
              <p className="text-sm">
                Este modelo muestra las órbitas relativas de los planetas alrededor del Sol.
                Los tamaños y distancias no están a escala real para mejor visualización.
                Haz clic en cualquier planeta para obtener información detallada.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}