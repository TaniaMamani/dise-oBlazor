import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Puzzle, Star, Lightbulb } from 'lucide-react';

const gameStats = [
  { student: 'María López', compounds: 12, difficulty: 'Difícil', hints: 2, creativity: 95 },
  { student: 'Ana García', compounds: 11, difficulty: 'Difícil', hints: 3, creativity: 90 },
  { student: 'Laura Martínez', compounds: 10, difficulty: 'Medio', hints: 4, creativity: 85 },
  { student: 'Carlos Ruiz', compounds: 8, difficulty: 'Medio', hints: 6, creativity: 72 },
  { student: 'Diego Sánchez', compounds: 7, difficulty: 'Fácil', hints: 8, creativity: 65 },
  { student: 'Juan Pérez', compounds: 5, difficulty: 'Fácil', hints: 12, creativity: 48 },
];

export default function Game4Tab() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="mb-6">
          <h2>Juego 4: Construcción de Compuestos</h2>
          <p className="text-gray-600">Crear compuestos químicos válidos combinando elementos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                <Puzzle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Compuestos Promedio</p>
                <p className="text-xl">8.8</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Creatividad Promedio</p>
                <p className="text-xl">76%</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pistas Usadas</p>
                <p className="text-xl">5.8</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Estudiante</TableHead>
                <TableHead>Compuestos Creados</TableHead>
                <TableHead>Nivel de Dificultad</TableHead>
                <TableHead>Pistas Usadas</TableHead>
                <TableHead>Creatividad</TableHead>
                <TableHead>Desempeño</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gameStats.map((stat, index) => (
                <TableRow key={index}>
                  <TableCell>{stat.student}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Puzzle className="w-4 h-4 text-indigo-500" />
                      <span className="font-mono">{stat.compounds}/15</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        stat.difficulty === 'Difícil' ? 'default' : 
                        stat.difficulty === 'Medio' ? 'secondary' : 
                        'outline'
                      }
                    >
                      {stat.difficulty}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                      <span>{stat.hints}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-500"
                          style={{ width: `${stat.creativity}%` }}
                        />
                      </div>
                      <span className="text-sm">{stat.creativity}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={stat.creativity >= 80 ? 'default' : stat.creativity >= 60 ? 'secondary' : 'destructive'}>
                      {stat.creativity >= 80 ? 'Destacado' : stat.creativity >= 60 ? 'Competente' : 'En Desarrollo'}
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
