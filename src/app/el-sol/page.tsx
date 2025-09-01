"use client";

import NavigationMenu from "@/components/NavigationMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { solData } from "@/lib/planetsData";

export default function ElSolPage() {
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
            {/* Hero Section */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
                      {solData.nombre}
                    </h1>
                    <p className="text-xl text-slate-300 mb-4">
                      Nuestra estrella central
                    </p>
                    <Badge className="bg-yellow-600 hover:bg-yellow-700 text-white mb-4">
                      {solData.tipo}
                    </Badge>
                    <p className="text-slate-300 leading-relaxed">
                      El Sol es el corazón de nuestro sistema solar, una estrella de tamaño medio 
                      que proporciona la energía necesaria para toda la vida en la Tierra.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <img 
                        src={solData.imagen} 
                        alt="El Sol - nuestra estrella central"
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="text-white text-center">
                                <div class="text-6xl mb-4">☀️</div>
                                <div class="text-2xl font-bold">El Sol</div>
                                <div class="text-lg opacity-75">Nuestra Estrella</div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Physical Characteristics */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Características Físicas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-yellow-400 text-sm font-medium mb-1">Diámetro</div>
                    <div className="text-white text-xl font-bold">{solData.diametro}</div>
                    <div className="text-slate-400 text-xs">109 veces la Tierra</div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-orange-400 text-sm font-medium mb-1">Masa</div>
                    <div className="text-white text-xl font-bold">{solData.masa}</div>
                    <div className="text-slate-400 text-xs">333,000 veces la Tierra</div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-red-400 text-sm font-medium mb-1">Edad</div>
                    <div className="text-white text-xl font-bold">{solData.edad}</div>
                    <div className="text-slate-400 text-xs">Mitad de su vida</div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-blue-400 text-sm font-medium mb-1">Tipo Espectral</div>
                    <div className="text-white text-xl font-bold">G2V</div>
                    <div className="text-slate-400 text-xs">Enana amarilla</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Temperature Layers */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Estructura y Temperatura</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-red-900/50 to-red-800/50 p-6 rounded-lg border border-red-700">
                    <h3 className="text-red-300 text-lg font-semibold mb-2">Núcleo</h3>
                    <div className="text-white text-2xl font-bold mb-1">{solData.temperatura.nucleo}</div>
                    <p className="text-red-200 text-sm">
                      Donde ocurre la fusión nuclear, convirtiendo hidrógeno en helio.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/50 p-6 rounded-lg border border-orange-700">
                    <h3 className="text-orange-300 text-lg font-semibold mb-2">Superficie</h3>
                    <div className="text-white text-2xl font-bold mb-1">{solData.temperatura.superficie}</div>
                    <p className="text-orange-200 text-sm">
                      La fotosfera, la capa visible del Sol que emite la mayor parte de la luz.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-lg border border-blue-700">
                    <h3 className="text-blue-300 text-lg font-semibold mb-2">Corona</h3>
                    <div className="text-white text-2xl font-bold mb-1">{solData.temperatura.corona}</div>
                    <p className="text-blue-200 text-sm">
                      La atmósfera exterior del Sol, visible durante los eclipses solares.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Composition */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Composición Química</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {solData.composicion.map((elemento, index) => (
                      <Badge 
                        key={index}
                        className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-sm py-2 px-4"
                      >
                        {elemento}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-800/30 p-4 rounded-lg">
                      <div className="w-full bg-slate-700 rounded-full h-4 mb-2">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full" style={{width: '73%'}}></div>
                      </div>
                      <div className="text-cyan-300 font-medium">Hidrógeno: 73%</div>
                      <div className="text-slate-400 text-sm">Combustible principal</div>
                    </div>
                    
                    <div className="bg-slate-800/30 p-4 rounded-lg">
                      <div className="w-full bg-slate-700 rounded-full h-4 mb-2">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-4 rounded-full" style={{width: '25%'}}></div>
                      </div>
                      <div className="text-orange-300 font-medium">Helio: 25%</div>
                      <div className="text-slate-400 text-sm">Producto de la fusión</div>
                    </div>
                    
                    <div className="bg-slate-800/30 p-4 rounded-lg">
                      <div className="w-full bg-slate-700 rounded-full h-4 mb-2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full" style={{width: '2%'}}></div>
                      </div>
                      <div className="text-purple-300 font-medium">Elementos pesados: 2%</div>
                      <div className="text-slate-400 text-sm">Carbono, oxígeno, hierro</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fascinating Facts */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Datos Fascinantes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {solData.datosCuriosos.map((dato, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-slate-800/30 p-4 rounded-lg">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mt-1 flex-shrink-0"></div>
                      <p className="text-slate-300">{dato}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Solar Activity */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Actividad Solar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-yellow-400 text-lg font-semibold">Manchas Solares</h3>
                    <p className="text-slate-300 text-sm">
                      Regiones temporalmente más frías en la superficie solar, causadas por 
                      concentraciones del campo magnético. Siguen un ciclo de aproximadamente 11 años.
                    </p>
                    
                    <h3 className="text-orange-400 text-lg font-semibold">Llamaradas Solares</h3>
                    <p className="text-slate-300 text-sm">
                      Explosiones de energía que liberan radiación electromagnética. Las más 
                      intensas pueden afectar las comunicaciones en la Tierra.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-red-400 text-lg font-semibold">Viento Solar</h3>
                    <p className="text-slate-300 text-sm">
                      Corriente continua de partículas cargadas que fluye desde el Sol. 
                      Interactúa con el campo magnético terrestre creando las auroras.
                    </p>
                    
                    <h3 className="text-purple-400 text-lg font-semibold">Eyecciones de Masa Coronal</h3>
                    <p className="text-slate-300 text-sm">
                      Enormes burbujas de plasma y campo magnético liberadas desde la corona solar. 
                      Pueden causar tormentas geomagnéticas en la Tierra.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Future of the Sun */}
            <Card className="bg-gradient-to-br from-amber-900/20 to-red-900/20 border-amber-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-amber-200 text-xl">El Futuro del Sol</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-amber-100 leading-relaxed">
                    El Sol está actualmente en su secuencia principal, convirtiendo hidrógeno en helio 
                    en su núcleo. Le quedan aproximadamente 5 mil millones de años en esta fase.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-amber-900/30 p-4 rounded-lg">
                      <h4 className="text-amber-300 font-semibold mb-2">En 1 mil millones de años</h4>
                      <p className="text-amber-100 text-sm">
                        El Sol será 10% más brillante, evaporando los océanos terrestres.
                      </p>
                    </div>
                    
                    <div className="bg-orange-900/30 p-4 rounded-lg">
                      <h4 className="text-orange-300 font-semibold mb-2">En 5 mil millones de años</h4>
                      <p className="text-orange-100 text-sm">
                        Comenzará a expandirse, convirtiéndose en una gigante roja.
                      </p>
                    </div>
                    
                    <div className="bg-red-900/30 p-4 rounded-lg">
                      <h4 className="text-red-300 font-semibold mb-2">Destino final</h4>
                      <p className="text-red-100 text-sm">
                        Se convertirá en una enana blanca del tamaño de la Tierra.
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