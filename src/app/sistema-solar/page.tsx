"use client";

import NavigationMenu from "@/components/NavigationMenu";
import SolarSystemModel from "@/components/SolarSystemModel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sistemaSolarEstadisticas } from "@/lib/solarSystemFacts";
import { Badge } from "@/components/ui/badge";

export default function SistemaSolarPage() {
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
                  Modelo Interactivo del Sistema Solar
                </CardTitle>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Explora nuestro sistema solar con este modelo interactivo que muestra 
                  las órbitas planetarias y sus posiciones relativas.
                </p>
              </CardHeader>
            </Card>

            {/* Interactive Solar System Model */}
            <SolarSystemModel />

            {/* Sistema Solar Statistics */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Estadísticas del Sistema Solar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-blue-400 text-sm font-medium mb-1">Edad del Sistema</div>
                    <div className="text-white text-2xl font-bold">{sistemaSolarEstadisticas.edad}</div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-purple-400 text-sm font-medium mb-1">Planetas</div>
                    <div className="text-white text-2xl font-bold">{sistemaSolarEstadisticas.planetas}</div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-green-400 text-sm font-medium mb-1">Planetas Enanos</div>
                    <div className="text-white text-2xl font-bold">{sistemaSolarEstadisticas.planetsEnanos}</div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-orange-400 text-sm font-medium mb-1">Lunas Conocidas</div>
                    <div className="text-white text-2xl font-bold">{sistemaSolarEstadisticas.lunas}</div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-red-400 text-sm font-medium mb-1">Asteroides Catalogados</div>
                    <div className="text-white text-2xl font-bold">{sistemaSolarEstadisticas.asteroides}</div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-indigo-400 text-sm font-medium mb-1">Masa del Sol</div>
                    <div className="text-white text-2xl font-bold">{sistemaSolarEstadisticas.porcentajeMasaSol}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formation and Structure */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Formación y Estructura</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed">
                    Nuestro sistema solar se formó hace aproximadamente 4.6 mil millones de años 
                    a partir del colapso gravitacional de una nebulosa molecular gigante. Esta 
                    región del espacio estaba compuesta principalmente de hidrógeno y helio, 
                    junto con elementos más pesados dispersos por explosiones de supernovas anteriores.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-slate-800/30 p-4 rounded-lg">
                      <h4 className="text-blue-300 font-semibold mb-2">Región Interior</h4>
                      <p className="text-slate-300 text-sm">
                        Los planetas rocosos (Mercurio, Venus, Tierra y Marte) se formaron 
                        cerca del Sol donde las temperaturas eran demasiado altas para que 
                        los compuestos volátiles se condensaran.
                      </p>
                    </div>
                    
                    <div className="bg-slate-800/30 p-4 rounded-lg">
                      <h4 className="text-purple-300 font-semibold mb-2">Región Exterior</h4>
                      <p className="text-slate-300 text-sm">
                        Los gigantes gaseosos (Júpiter, Saturno, Urano y Neptuno) se 
                        formaron más lejos donde el agua y otros compuestos podían 
                        congelarse, permitiendo la formación de núcleos masivos.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Zones of the Solar System */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Zonas del Sistema Solar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-orange-600">Zona Interior</Badge>
                      <span className="text-slate-300">Mercurio, Venus, Tierra, Marte</span>
                    </div>
                    <p className="text-slate-400 text-sm pl-20">
                      Planetas rocosos con superficies sólidas y densidades altas.
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-amber-600">Cinturón de Asteroides</Badge>
                      <span className="text-slate-300">Entre Marte y Júpiter</span>
                    </div>
                    <p className="text-slate-400 text-sm pl-32">
                      Región con miles de asteroides, restos de la formación planetaria.
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-blue-600">Zona Exterior</Badge>
                      <span className="text-slate-300">Júpiter, Saturno, Urano, Neptuno</span>
                    </div>
                    <p className="text-slate-400 text-sm pl-20">
                      Gigantes gaseosos con atmósferas densas y múltiples lunas.
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-indigo-600">Cinturón de Kuiper</Badge>
                      <span className="text-slate-300">Más allá de Neptuno</span>
                    </div>
                    <p className="text-slate-400 text-sm pl-28">
                      Región de objetos helados incluyendo planetas enanos como Plutón.
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-purple-600">Nube de Oort</Badge>
                      <span className="text-slate-300">Región más externa</span>
                    </div>
                    <p className="text-slate-400 text-sm pl-20">
                      Esfera de objetos helados, origen de los cometas de largo período.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-200 text-xl">Datos Fascinantes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <p className="text-amber-100 text-sm">
                        La Tierra es el único planeta conocido con vida, pero los científicos 
                        buscan indicios de vida en lunas como Europa y Encelado.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <p className="text-amber-100 text-sm">
                        La velocidad orbital de la Tierra alrededor del Sol es de 
                        aproximadamente 29.78 km/s, ¡más de 100,000 km/h!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🌌</div>
                    <div>
                      <p className="text-amber-100 text-sm">
                        El límite del sistema solar (heliosfera) se extiende aproximadamente 
                        120 unidades astronómicas del Sol.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">⭐</div>
                    <div>
                      <p className="text-amber-100 text-sm">
                        El Sol contiene el 99.86% de toda la masa del sistema solar, 
                        dominando gravitacionalmente todo el sistema.
                      </p>
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