"use client";

import { PlanetData } from "@/lib/planetsData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PlanetDetailsProps {
  planet: PlanetData;
}

export default function PlanetDetails({ planet }: PlanetDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{planet.nombre}</h1>
              <p className="text-xl text-slate-300 mb-4">{planet.nombreIngles}</p>
              <div className={`w-full h-64 rounded-xl bg-gradient-to-br ${planet.color} flex items-center justify-center`}>
                <img 
                  src={planet.imagen} 
                  alt={planet.nombre}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-white text-center"><div class="text-3xl font-bold">${planet.nombre}</div><div class="text-lg opacity-75">Planeta del Sistema Solar</div></div>`;
                    }
                  }}
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-slate-400 text-sm">Diámetro</div>
                  <div className="text-white text-lg font-bold">{planet.diametro}</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-slate-400 text-sm">Masa</div>
                  <div className="text-white text-lg font-bold">{planet.masa}</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-slate-400 text-sm">Gravedad</div>
                  <div className="text-white text-lg font-bold">{planet.gravedad}</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-slate-400 text-sm">Lunas</div>
                  <div className="text-white text-lg font-bold">{planet.lunas}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="caracteristicas" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
          <TabsTrigger value="caracteristicas" className="data-[state=active]:bg-blue-600">
            Características
          </TabsTrigger>
          <TabsTrigger value="atmosfera" className="data-[state=active]:bg-blue-600">
            Atmósfera
          </TabsTrigger>
          <TabsTrigger value="curiosidades" className="data-[state=active]:bg-blue-600">
            Datos Curiosos
          </TabsTrigger>
          <TabsTrigger value="exploracion" className="data-[state=active]:bg-blue-600">
            Exploración
          </TabsTrigger>
        </TabsList>

        <TabsContent value="caracteristicas">
          <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Características Físicas y Orbitales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Distancia del Sol:</span>
                    <span className="text-white font-medium">{planet.distanciaSol}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Período Orbital:</span>
                    <span className="text-white font-medium">{planet.periodoOrbital}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Período de Rotación:</span>
                    <span className="text-white font-medium">{planet.periodoRotacion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Temperatura:</span>
                    <span className="text-white font-medium">{planet.temperatura}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Densidad:</span>
                    <span className="text-white font-medium">{planet.densidad}</span>
                  </div>
                  {planet.lunasNotables && planet.lunasNotables.length > 0 && (
                    <div>
                      <div className="text-slate-400 mb-2">Lunas Notables:</div>
                      <div className="flex flex-wrap gap-2">
                        {planet.lunasNotables.map((luna) => (
                          <Badge key={luna} variant="secondary" className="bg-slate-700 text-slate-200">
                            {luna}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="atmosfera">
          <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Composición Atmosférica</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {planet.atmosfera.map((componente, index) => (
                    <Badge 
                      key={index} 
                      className={`bg-gradient-to-r ${planet.color} text-white border-0`}
                    >
                      {componente}
                    </Badge>
                  ))}
                </div>
                <Separator className="bg-slate-700" />
                <p className="text-slate-300 text-sm">
                  La composición atmosférica influye directamente en las condiciones climáticas 
                  y la temperatura superficial del planeta.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="curiosidades">
          <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Datos Curiosos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {planet.datosCuriosos.map((dato, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${planet.color} mt-2 flex-shrink-0`} />
                    <p className="text-slate-300">{dato}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exploracion">
          <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Historia de Exploración</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {planet.exploracion.map((mision, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${planet.color} mt-1 flex-shrink-0`} />
                    <div>
                      <p className="text-white font-medium">{mision}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}