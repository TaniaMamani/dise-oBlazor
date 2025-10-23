import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Zap, Timer, Award } from 'lucide-react';

const gameStats = [
  { student: 'María López', matches: 18, time: '1:45', errors: 2, efficiency: 90 },
  { student: 'Ana García', matches: 17, time: '1:52', errors: 3, efficiency: 85 },
  { student: 'Laura Martínez', matches: 16, time: '2:10', errors: 4, efficiency: 80 },
  { student: 'Carlos Ruiz', matches: 14, time: '2:35', errors: 6, efficiency: 70 },
  { student: 'Diego Sánchez', matches: 12, time: '3:05', errors: 8, efficiency: 60 },
  { student: 'Juan Pérez', matches: 9, time: '3:40', errors: 11, efficiency: 45 },
];

export default function Game2Tab() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="mb-6">
          <h2>Juego 2: Memoria de Pares</h2>
          <p className="text-gray-600">Emparejar elementos químicos con sus propiedades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pares Promedio</p>
                <p className="text-xl">14.3</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Timer className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tiempo Promedio</p>
                <p className="text-xl">2:31</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Eficiencia Promedio</p>
                <p className="text-xl">72%</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Estudiante</TableHead>
                <TableHead>Pares Completados</TableHead>
                <TableHead>Tiempo</TableHead>
                <TableHead>Errores</TableHead>
                <TableHead>Eficiencia</TableHead>
                <TableHead>Nivel</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gameStats.map((stat, index) => (
                <TableRow key={index}>
                  <TableCell>{stat.student}</TableCell>
                  <TableCell>
                    <span className="font-mono">{stat.matches}/20</span>
                  </TableCell>
                  <TableCell>{stat.time}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{stat.errors}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-500"
                          style={{ width: `${stat.efficiency}%` }}
                        />
                      </div>
                      <span className="text-sm">{stat.efficiency}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={stat.efficiency >= 80 ? 'default' : stat.efficiency >= 60 ? 'secondary' : 'destructive'}>
                      {stat.efficiency >= 80 ? 'Avanzado' : stat.efficiency >= 60 ? 'Intermedio' : 'Principiante'}
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
