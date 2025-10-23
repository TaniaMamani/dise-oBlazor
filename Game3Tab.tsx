import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Brain, CheckCircle, XCircle } from 'lucide-react';

const gameStats = [
  { student: 'Ana García', correct: 28, incorrect: 2, streak: 15, mastery: 93 },
  { student: 'María López', correct: 27, incorrect: 3, streak: 12, mastery: 90 },
  { student: 'Laura Martínez', correct: 25, incorrect: 5, streak: 10, mastery: 83 },
  { student: 'Carlos Ruiz', correct: 22, incorrect: 8, streak: 7, mastery: 73 },
  { student: 'Diego Sánchez', correct: 19, incorrect: 11, streak: 5, mastery: 63 },
  { student: 'Juan Pérez', correct: 15, incorrect: 15, streak: 3, mastery: 50 },
];

export default function Game3Tab() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="mb-6">
          <h2>Juego 3: Quiz de Propiedades</h2>
          <p className="text-gray-600">Preguntas sobre propiedades y características de elementos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Dominio Promedio</p>
                <p className="text-xl">75%</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Respuestas Correctas</p>
                <p className="text-xl">22.7</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <XCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Respuestas Incorrectas</p>
                <p className="text-xl">7.3</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Estudiante</TableHead>
                <TableHead>Correctas</TableHead>
                <TableHead>Incorrectas</TableHead>
                <TableHead>Racha Máxima</TableHead>
                <TableHead>Dominio</TableHead>
                <TableHead>Calificación</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gameStats.map((stat, index) => (
                <TableRow key={index}>
                  <TableCell>{stat.student}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-mono">{stat.correct}/30</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span className="font-mono">{stat.incorrect}/30</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">🔥 {stat.streak}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-teal-500"
                          style={{ width: `${stat.mastery}%` }}
                        />
                      </div>
                      <span className="text-sm">{stat.mastery}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={stat.mastery >= 80 ? 'default' : stat.mastery >= 60 ? 'secondary' : 'destructive'}>
                      {stat.mastery >= 80 ? 'Sobresaliente' : stat.mastery >= 60 ? 'Aprobado' : 'Reprobado'}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
