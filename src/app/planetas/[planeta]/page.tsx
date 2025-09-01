"use client";

import { useParams } from "next/navigation";
import NavigationMenu from "@/components/NavigationMenu";
import PlanetDetails from "@/components/PlanetDetails";
import { planetsData } from "@/lib/planetsData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PlanetaDetallePage() {
  const params = useParams();
  const planetaId = params.planeta as string;
  
  const planet = planetsData.find(p => p.id === planetaId);

  if (!planet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center">
        <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Planeta no encontrado</h1>
            <p className="text-slate-300 mb-6">
              El planeta "{planetaId}" no existe en nuestra base de datos.
            </p>
            <Link href="/planetas">
              <Button className="bg-blue-600 hover:bg-blue-700">
                ← Volver a Planetas
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-20 left-60 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-white rounded-full opacity-90"></div>
        <div className="absolute top-40 left-40 w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-60 right-60 w-1 h-1 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-80 left-80 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-32 right-20 w-1 h-1 bg-white rounded-full opacity-90"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-white rounded-full opacity-70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <NavigationMenu />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Back Button */}
            <Link href="/planetas">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">
                ← Volver a Planetas
              </Button>
            </Link>

            {/* Planet Details */}
            <PlanetDetails planet={planet} />

            {/* Navigation to Other Planets */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white text-lg font-semibold mb-4">Explorar Otros Planetas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {planetsData.filter(p => p.id !== planetaId).map((otherPlanet) => (
                    <Link key={otherPlanet.id} href={`/planetas/${otherPlanet.id}`}>
                      <Button 
                        variant="outline"
                        className={`w-full h-auto p-3 border-slate-600 hover:bg-gradient-to-r hover:${otherPlanet.color} hover:border-transparent text-left`}
                      >
                        <div className="text-sm">
                          <div className="font-medium text-white">{otherPlanet.nombre}</div>
                          <div className="text-xs text-slate-400">{otherPlanet.diametro}</div>
                        </div>
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts Comparison */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white text-lg font-semibold mb-4">Comparación con la Tierra</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-blue-400 text-sm font-medium mb-1">Tamaño Relativo</div>
                    <div className="text-white text-lg">
                      {planet.id === 'tierra' ? '1x' : 
                       planet.id === 'jupiter' ? '11.2x' :
                       planet.id === 'saturno' ? '9.4x' :
                       planet.id === 'mercurio' ? '0.38x' :
                       planet.id === 'venus' ? '0.95x' :
                       planet.id === 'marte' ? '0.53x' :
                       planet.id === 'urano' ? '4x' :
                       planet.id === 'neptuno' ? '3.9x' : 'N/A'}
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-green-400 text-sm font-medium mb-1">Gravedad vs Tierra</div>
                    <div className="text-white text-lg">
                      {planet.id === 'tierra' ? '1x' : 
                       planet.id === 'jupiter' ? '2.53x' :
                       planet.id === 'saturno' ? '1.07x' :
                       planet.id === 'mercurio' ? '0.38x' :
                       planet.id === 'venus' ? '0.90x' :
                       planet.id === 'marte' ? '0.38x' :
                       planet.id === 'urano' ? '0.89x' :
                       planet.id === 'neptuno' ? '1.14x' : 'N/A'}
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-purple-400 text-sm font-medium mb-1">Año (vs Tierra)</div>
                    <div className="text-white text-lg">
                      {planet.id === 'tierra' ? '1 año' : 
                       planet.id === 'mercurio' ? '0.24 años' :
                       planet.id === 'venus' ? '0.62 años' :
                       planet.id === 'marte' ? '1.88 años' :
                       planet.id === 'jupiter' ? '11.9 años' :
                       planet.id === 'saturno' ? '29.5 años' :
                       planet.id === 'urano' ? '84 años' :
                       planet.id === 'neptuno' ? '165 años' : 'N/A'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}