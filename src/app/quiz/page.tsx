"use client";

import NavigationMenu from "@/components/NavigationMenu";
import QuizSection from "@/components/QuizSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { preguntasQuiz, datosCuriosos, exploracicionEspacial } from "@/lib/solarSystemFacts";

export default function QuizPage() {
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
                <CardTitle className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Quiz del Sistema Solar
                </CardTitle>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Pon a prueba tus conocimientos sobre planetas, estrellas y la exploración 
                  espacial con nuestro quiz interactivo.
                </p>
              </CardHeader>
            </Card>

            {/* Interactive Quiz */}
            <QuizSection questions={preguntasQuiz} />

            {/* Fun Facts Section */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Datos Curiosos del Sistema Solar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {datosCuriosos.slice(0, 8).map((dato, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-slate-800/30 p-4 rounded-lg">
                      <div className="text-2xl">
                        {index % 4 === 0 ? '🌟' : 
                         index % 4 === 1 ? '🪐' : 
                         index % 4 === 2 ? '🌙' : '☄️'}
                      </div>
                      <p className="text-slate-300 text-sm">{dato}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Space Exploration Timeline */}
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Hitos de la Exploración Espacial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exploracicionEspacial.map((mision, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-slate-800/30 p-4 rounded-lg">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        {mision.año}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold">{mision.mision}</div>
                        <div className="text-slate-400 text-sm">{mision.pais}</div>
                      </div>
                      <div className="text-slate-300 text-sm text-right">
                        {mision.logro}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Knowledge Tips */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border-purple-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-200 text-xl">Consejos para Recordar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-purple-900/30 p-4 rounded-lg">
                    <h4 className="text-purple-300 font-semibold mb-2">Orden de los Planetas</h4>
                    <p className="text-purple-100 text-sm mb-2">
                      <strong>Truco nemotécnico:</strong> "Mi Vecina Tiene Muchas Jaulas Sin Un Nuevo Pez"
                    </p>
                    <p className="text-purple-200 text-xs">
                      Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano, Neptuno
                    </p>
                  </div>
                  
                  <div className="bg-indigo-900/30 p-4 rounded-lg">
                    <h4 className="text-indigo-300 font-semibold mb-2">Clasificación por Tamaño</h4>
                    <p className="text-indigo-100 text-sm">
                      <strong>Gigantes:</strong> Júpiter, Saturno, Urano, Neptuno<br/>
                      <strong>Terrestres:</strong> Mercurio, Venus, Tierra, Marte
                    </p>
                  </div>
                  
                  <div className="bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="text-blue-300 font-semibold mb-2">Datos Clave</h4>
                    <p className="text-blue-100 text-sm">
                      • Venus es el más caliente (no Mercurio)<br/>
                      • Urano es el más frío<br/>
                      • Júpiter tiene más de 95 lunas<br/>
                      • Saturno flotaría en el agua
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Challenge Section */}
            <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-700/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-xl font-semibold text-green-200 mb-2">¡Desafío Completado!</h3>
                <p className="text-green-100 max-w-2xl mx-auto">
                  Ahora que has probado tus conocimientos, ¿qué tal si exploras más sobre 
                  cada planeta individualmente? Cada uno tiene secretos fascinantes 
                  esperando ser descubiertos.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/planetas" className="inline-block">
                    <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200">
                      Explorar Planetas
                    </button>
                  </a>
                  <a href="/sistema-solar" className="inline-block">
                    <button className="border border-green-600 text-green-300 hover:bg-green-600/20 px-6 py-2 rounded-lg transition-all duration-200">
                      Ver Modelo Interactivo
                    </button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}