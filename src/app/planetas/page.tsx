"use client";

import NavigationMenu from "@/components/NavigationMenu";
import PlanetCard from "@/components/PlanetCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { planetsData } from "@/lib/planetsData";

export default function PlanetasPage() {
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
          <div className="lg:col-span-3 space-y-8">
            {/* Page Header */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Los Planetas del Sistema Solar
                </CardTitle>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Descubre los ocho mundos únicos que orbitan nuestro Sol, cada uno con 
                  características fascinantes y secretos por explorar.
                </p>
              </CardHeader>
            </Card>

            {/* Planets Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {planetsData.map((planet) => (
                <PlanetCard key={planet.id} planet={planet} size="medium" />
              ))}
            </div>

            {/* Planetary Classification */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Clasificación de los Planetas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Terrestrial Planets */}
                  <div className="bg-slate-800/30 p-6 rounded-lg">
                    <h3 className="text-orange-400 text-xl font-semibold mb-4">Planetas Terrestres</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                        <span className="text-slate-300">Mercurio</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                        <span className="text-slate-300">Venus</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                        <span className="text-slate-300">Tierra</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        <span className="text-slate-300">Marte</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mt-4">
                      Planetas rocosos con superficies sólidas, densidades altas y 
                      pocos o ningún satélite natural.
                    </p>
                  </div>

                  {/* Gas Giants */}
                  <div className="bg-slate-800/30 p-6 rounded-lg">
                    <h3 className="text-blue-400 text-xl font-semibold mb-4">Gigantes Gaseosos</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-orange-600"></div>
                        <span className="text-slate-300">Júpiter</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                        <span className="text-slate-300">Saturno</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
                        <span className="text-slate-300">Urano</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                        <span className="text-slate-300">Neptuno</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mt-4">
                      Planetas masivos compuestos principalmente de gases, con 
                      múltiples lunas y sistemas de anillos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Planet Size Comparison */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Comparación de Tamaños</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-300 text-center mb-6">
                    Comparación relativa del tamaño de los planetas (no a escala real)
                  </p>
                  
                  <div className="flex items-end justify-center space-x-2 flex-wrap">
                    {planetsData.map((planet) => {
                      // Simplified relative sizes for visual representation
                      const sizes = {
                        'mercurio': 'w-4 h-4',
                        'venus': 'w-5 h-5',
                        'tierra': 'w-5 h-5',
                        'marte': 'w-4 h-4',
                        'jupiter': 'w-16 h-16',
                        'saturno': 'w-14 h-14',
                        'urano': 'w-8 h-8',
                        'neptuno': 'w-8 h-8'
                      };
                      
                      return (
                        <div key={planet.id} className="flex flex-col items-center space-y-2">
                          <div 
                            className={`${sizes[planet.id as keyof typeof sizes]} rounded-full bg-gradient-to-br ${planet.color} shadow-lg`}
                          ></div>
                          <span className="text-xs text-slate-400 text-center">
                            {planet.nombre}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <p className="text-slate-400 text-sm text-center mt-4">
                    Júpiter es más de 11 veces más grande que la Tierra en diámetro, 
                    mientras que Mercurio es aproximadamente un tercio del tamaño terrestre.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Exploration Timeline */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Historia de Exploración</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-blue-400 font-semibold">Misiones Pioneras</h4>
                      <div className="space-y-2">
                        <div className="bg-slate-800/30 p-3 rounded">
                          <div className="text-white font-medium">Mariner 2 (1962)</div>
                          <div className="text-slate-400 text-sm">Primera sonda exitosa a Venus</div>
                        </div>
                        <div className="bg-slate-800/30 p-3 rounded">
                          <div className="text-white font-medium">Mariner 4 (1965)</div>
                          <div className="text-slate-400 text-sm">Primeras imágenes cercanas de Marte</div>
                        </div>
                        <div className="bg-slate-800/30 p-3 rounded">
                          <div className="text-white font-medium">Pioneer 10/11 (1973-74)</div>
                          <div className="text-slate-400 text-sm">Primeras misiones a Júpiter</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-purple-400 font-semibold">Misiones Modernas</h4>
                      <div className="space-y-2">
                        <div className="bg-slate-800/30 p-3 rounded">
                          <div className="text-white font-medium">Cassini-Huygens (2004)</div>
                          <div className="text-slate-400 text-sm">Exploración detallada de Saturno</div>
                        </div>
                        <div className="bg-slate-800/30 p-3 rounded">
                          <div className="text-white font-medium">Curiosity (2012)</div>
                          <div className="text-slate-400 text-sm">Rover avanzado en Marte</div>
                        </div>
                        <div className="bg-slate-800/30 p-3 rounded">
                          <div className="text-white font-medium">Perseverance (2021)</div>
                          <div className="text-slate-400 text-sm">Búsqueda de vida en Marte</div>
                        </div>
                      </div>
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