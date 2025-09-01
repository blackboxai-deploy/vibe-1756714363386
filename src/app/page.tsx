"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "@/components/NavigationMenu";
import { sistemaSolarEstadisticas } from "@/lib/solarSystemFacts";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Stars background effect */}
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
              <CardContent className="p-12 text-center">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    El Sistema Solar
                  </h1>
                  <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Embárcate en un viaje extraordinario a través de nuestro sistema solar. 
                    Descubre los secretos de los planetas, lunas y otros cuerpos celestes 
                    que comparten nuestro hogar cósmico.
                  </p>
                  
                  {/* Hero Image */}
                  <div className="relative w-full max-w-3xl mx-auto h-64 rounded-xl overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900">
                    <img 
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/053aea2f-36fb-477e-ba42-ec4d257c7ea1.png" 
                      alt="Vista panorámica del sistema solar con todos los planetas en sus órbitas alrededor del Sol"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="flex items-center justify-center h-full text-white text-center">
                              <div>
                                <div class="text-4xl font-bold mb-2">🌌</div>
                                <div class="text-xl font-semibold">Sistema Solar</div>
                                <div class="text-sm opacity-75">Una maravilla cósmica</div>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/sistema-solar">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                        Explorar Sistema Solar
                      </Button>
                    </Link>
                    <Link href="/planetas">
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700/50 px-8 py-3 text-lg">
                        Ver Planetas
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-700 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-300 text-lg">Planetas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-2">{sistemaSolarEstadisticas.planetas}</div>
                  <p className="text-blue-200 text-sm">Mundos únicos por descubrir</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-700 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-300 text-lg">Lunas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-2">{sistemaSolarEstadisticas.lunas}</div>
                  <p className="text-purple-200 text-sm">Satélites naturales conocidos</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-900/50 to-indigo-800/50 border-indigo-700 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-indigo-300 text-lg">Edad</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-2">4.6</div>
                  <p className="text-indigo-200 text-sm">Miles de millones de años</p>
                </CardContent>
              </Card>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-slate-600 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white text-xl">🌍 Los Planetas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Desde Mercurio hasta Neptuno, cada planeta tiene características únicas 
                    y secretos fascinantes esperando ser descubiertos.
                  </p>
                  <Link href="/planetas">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                      Explorar Planetas
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-slate-600 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white text-xl">☀️ Nuestra Estrella</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    El Sol, el corazón de nuestro sistema solar, una estrella que hace 
                    posible la vida en la Tierra con su energía constante.
                  </p>
                  <Link href="/el-sol">
                    <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700">
                      Conocer el Sol
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-slate-600 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white text-xl">🔬 Modelo Interactivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Visualiza el sistema solar en movimiento con nuestro modelo 
                    interactivo que muestra las órbitas planetarias.
                  </p>
                  <Link href="/sistema-solar">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Ver Modelo
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-slate-600 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white text-xl">🧠 Pon a Prueba tus Conocimientos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Desafía tus conocimientos sobre el sistema solar con nuestro 
                    quiz interactivo y aprende datos fascinantes.
                  </p>
                  <Link href="/quiz">
                    <Button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700">
                      Tomar Quiz
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Fun Fact */}
            <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-700/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="text-xl font-semibold text-amber-200 mb-2">¿Sabías que...?</h3>
                <p className="text-amber-100">
                  Si el Sol fuera del tamaño de una pelota de fútbol, la Tierra sería 
                  del tamaño de una canica ubicada a 26 metros de distancia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}