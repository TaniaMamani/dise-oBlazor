import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Trophy, Clock, Target } from 'lucide-react';

const gameStats = [
  { student: 'Ana García', score: 950, time: '2:34', attempts: 1, accuracy: 95 },
  { student: 'María López', score: 920, time: '2:45', attempts: 1, accuracy: 92 },
  { student: 'Laura Martínez', score: 880, time: '3:12', attempts: 2, accuracy: 88 },
  { student: 'Carlos Ruiz', score: 750, time: '4:20', attempts: 2, accuracy: 75 },
  { student: 'Diego Sánchez', score: 680, time: '5:10', attempts: 3, accuracy: 68 },
  { student: 'Juan Pérez', score: 450, time: '6:30', attempts: 4, accuracy: 45 },
];

export default function Game1Tab() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="mb-6">
          <h2>Juego 1: Identificación de Elementos</h2>
          <p className="text-gray-600">Los estudiantes deben identificar elementos químicos por su símbolo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Puntuación Promedio</p>
                <p className="text-xl">772</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tiempo Promedio</p>
                <p className="text-xl">4:05</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Precisión Promedio</p>
                <p className="text-xl">77%</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Estudiante</TableHead>
                <TableHead>Puntuación</TableHead>
                <TableHead>Tiempo</TableHead>
                <TableHead>Intentos</TableHead>
                <TableHead>Precisión</TableHead>
                <TableHead>Resultado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gameStats.map((stat, index) => (
                <TableRow key={index}>
                  <TableCell>{stat.student}</TableCell>
                  <TableCell>
                    <span className="font-mono">{stat.score}</span>
                  </TableCell>
                  <TableCell>{stat.time}</TableCell>
                  <TableCell>{stat.attempts}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500"
                          style={{ width: `${stat.accuracy}%` }}
                        />
                      </div>
                      <span className="text-sm">{stat.accuracy}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={stat.accuracy >= 80 ? 'default' : stat.accuracy >= 60 ? 'secondary' : 'destructive'}>
                      {stat.accuracy >= 80 ? 'Excelente' : stat.accuracy >= 60 ? 'Bueno' : 'Necesita Mejorar'}
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
