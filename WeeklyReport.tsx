import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Users, 
  TrendingUp, 
  Clock, 
  Target, 
  Award,
  Gamepad2,
  BookOpen,
  BarChart3
} from 'lucide-react';

export default function WeeklyReport() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="mb-6">
          <h2>Reporte Semanal</h2>
          <p className="text-gray-600">Resumen de actividades del 16 al 22 de Octubre, 2025</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Alumnos Activos</p>
                <p className="text-xl">6/6</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Juegos Completados</p>
                <p className="text-xl">89</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tiempo Total</p>
                <p className="text-xl">24.5h</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Logros Desbloqueados</p>
                <p className="text-xl">18</p>
              </div>
            </div>
          </Card>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-purple-500" />
            <h3>Rendimiento por Juego</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span>Juego 1: Identificación</span>
                <span className="text-sm text-gray-600">77%</span>
              </div>
              <Progress value={77} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span>Juego 2: Memoria de Pares</span>
                <span className="text-sm text-gray-600">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span>Juego 3: Quiz de Propiedades</span>
                <span className="text-sm text-gray-600">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span>Juego 4: Construcción</span>
                <span className="text-sm text-gray-600">76%</span>
              </div>
              <Progress value={76} className="h-2" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h3>Crecimiento Semanal</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p>Participación</p>
                  <p className="text-sm text-gray-600">vs. semana anterior</p>
                </div>
              </div>
              <Badge className="bg-green-500">+12%</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p>Precisión Promedio</p>
                  <p className="text-sm text-gray-600">vs. semana anterior</p>
                </div>
              </div>
              <Badge className="bg-blue-500">+8%</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p>Elementos Aprendidos</p>
                  <p className="text-sm text-gray-600">vs. semana anterior</p>
                </div>
              </div>
              <Badge className="bg-purple-500">+15%</Badge>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-yellow-500" />
          <h3>Logros Destacados de la Semana</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-sm">María López</p>
            <p className="text-xs text-gray-600">Completó los 4 juegos con más de 90%</p>
          </div>

          <div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-sm">Laura Martínez</p>
            <p className="text-xs text-gray-600">Mayor crecimiento semanal (+22%)</p>
          </div>

          <div className="p-4 border rounded-lg bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm">Ana García</p>
            <p className="text-xs text-gray-600">15 respuestas consecutivas correctas</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
        <h3 className="mb-3">Resumen General</h3>
        <div className="space-y-2 text-sm">
          <p>✅ Esta semana mostró un incremento del 12% en participación comparado con la semana anterior</p>
          <p>✅ El promedio general de precisión fue del 75%, un incremento del 8%</p>
          <p>✅ Se desbloquearon 18 logros nuevos, con María López liderando con 3 logros</p>
          <p>⚠️ Juan Pérez necesita apoyo adicional, con un progreso del 45% en la tabla periódica</p>
          <p>📊 El Juego 1 (Identificación) tuvo la mayor tasa de completación con 77% de precisión</p>
        </div>
      </Card>
    </div>
  );
}
