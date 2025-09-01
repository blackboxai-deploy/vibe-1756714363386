"use client";

import { useState } from "react";
import { QuizQuestion } from "@/lib/solarSystemFacts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface QuizSectionProps {
  questions: QuizQuestion[];
}

export default function QuizSection({ questions }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    
    const newUserAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newUserAnswers);
    
    if (selectedAnswer === questions[currentQuestion].respuestaCorrecta) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "from-green-400 to-green-600";
    if (percentage >= 60) return "from-yellow-400 to-orange-500";
    return "from-red-400 to-red-600";
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "¡Excelente! Eres un experto en el sistema solar.";
    if (percentage >= 60) return "¡Bien hecho! Tienes buenos conocimientos.";
    if (percentage >= 40) return "No está mal, pero puedes mejorar.";
    return "Necesitas estudiar más sobre el sistema solar.";
  };

  if (quizCompleted) {
    return (
      <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">¡Quiz Completado!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="space-y-4">
            <div className={`text-6xl font-bold bg-gradient-to-r ${getScoreColor()} bg-clip-text text-transparent`}>
              {score}/{questions.length}
            </div>
            <div className="text-lg text-slate-300">
              {Math.round((score / questions.length) * 100)}% de respuestas correctas
            </div>
            <p className="text-slate-400">{getScoreMessage()}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Resumen de Respuestas</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.respuestaCorrecta;
                
                return (
                  <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-left">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium text-white">{question.pregunta}</h4>
                      <Badge 
                        variant={isCorrect ? "default" : "destructive"}
                        className={isCorrect ? "bg-green-600" : "bg-red-600"}
                      >
                        {isCorrect ? "Correcta" : "Incorrecta"}
                      </Badge>
                    </div>
                    <div className="text-sm text-slate-300">
                      <span className="text-slate-400">Tu respuesta:</span> {question.opciones[userAnswer]}
                    </div>
                    {!isCorrect && (
                      <div className="text-sm text-slate-300 mt-1">
                        <span className="text-slate-400">Respuesta correcta:</span> {question.opciones[question.respuestaCorrecta]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <Button 
            onClick={resetQuiz}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Intentar de Nuevo
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <CardTitle className="text-white">Quiz del Sistema Solar</CardTitle>
          <Badge variant="outline" className="border-slate-600 text-slate-300">
            {currentQuestion + 1} de {questions.length}
          </Badge>
        </div>
        <Progress value={progress} className="w-full h-2 bg-slate-700" />
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            {question.pregunta}
          </h3>
          
          <div className="space-y-3">
            {question.opciones.map((opcion, index) => {
              let buttonClass = "w-full justify-start text-left p-4 h-auto ";
              
              if (showExplanation) {
                if (index === question.respuestaCorrecta) {
                  buttonClass += "bg-green-600 hover:bg-green-700 text-white border-green-500";
                } else if (index === selectedAnswer && index !== question.respuestaCorrecta) {
                  buttonClass += "bg-red-600 hover:bg-red-700 text-white border-red-500";
                } else {
                  buttonClass += "bg-slate-700/50 text-slate-300 border-slate-600";
                }
              } else {
                if (index === selectedAnswer) {
                  buttonClass += "bg-blue-600 hover:bg-blue-700 text-white border-blue-500";
                } else {
                  buttonClass += "bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 border-slate-600 hover:border-slate-500";
                }
              }
              
              return (
                <Button
                  key={index}
                  variant="outline"
                  className={buttonClass}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                  {opcion}
                </Button>
              );
            })}
          </div>
        </div>

        {showExplanation && (
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600">
            <h4 className="font-semibold text-white mb-2">Explicación:</h4>
            <p className="text-slate-300 text-sm">{question.explicacion}</p>
          </div>
        )}

        <div className="flex justify-between">
          <div className="text-sm text-slate-400">
            Puntuación actual: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
          </div>
          
          {!showExplanation ? (
            <Button 
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Confirmar Respuesta
            </Button>
          ) : (
            <Button 
              onClick={handleNextQuestion}
              className="bg-green-600 hover:bg-green-700"
            >
              {currentQuestion < questions.length - 1 ? "Siguiente Pregunta" : "Ver Resultados"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}