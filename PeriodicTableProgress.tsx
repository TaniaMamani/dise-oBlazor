import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Atom, TrendingUp, Award, BookOpen } from 'lucide-react';

const studentProgress = [
  { 
    name: 'María López', 
    totalProgress: 94, 
    categories: { metales: 100, noMetales: 95, metaloides: 90, gases: 92 },
    elementsLearned: 113,
    achievements: 8
  },
  { 
    name: 'Ana García', 
    totalProgress: 85, 
    categories: { metales: 90, noMetales: 88, metaloides: 80, gases: 82 },
    elementsLearned: 102,
    achievements: 7
  },
  { 
    name: 'Laura Martínez', 
    totalProgress: 88, 
    categories: { metales: 92, noMetales: 90, metaloides: 85, gases: 84 },
    elementsLearned: 106,
    achievements: 7
  },
  { 
    name: 'Carlos Ruiz', 
    totalProgress: 72, 
    categories: { metales: 78, noMetales: 75, metaloides: 65, gases: 70 },
    elementsLearned: 87,
    achievements: 5
  },
  { 
    name: 'Diego Sánchez', 
    totalProgress: 67, 
    categories: { metales: 72, noMetales: 68, metaloides: 60, gases: 65 },
    elementsLearned: 81,
    achievements: 4
  },
  { 
    name: 'Juan Pérez', 
    totalProgress: 45, 
    categories: { metales: 50, noMetales: 48, metaloides: 38, gases: 42 },
    elementsLearned: 54,
    achievements: 2
  },
];

export default function PeriodicTableProgress() {
  const averageProgress = Math.round(
    studentProgress.reduce((sum, student) => sum + student.totalProgress, 0) / studentProgress.length
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <Atom className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Progreso Promedio</p>
              <p className="text-xl">{averageProgress}%</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Elementos Promedio</p>
              <p className="text-xl">90.5</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Logros Totales</p>
              <p className="text-xl">33</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Elementos</p>
              <p className="text-xl">118</p>
            </div>
          </div>
        </Card>
      </div>

      {studentProgress.map((student, index) => (
        <Card key={index} className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <div>
              <h3>{student.name}</h3>
              <p className="text-gray-600">
                {student.elementsLearned}/118 elementos aprendidos • {student.achievements} logros
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="text-lg px-4 py-1">
                {student.totalProgress}%
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span>Progreso Total</span>
                <span className="text-sm text-gray-600">{student.totalProgress}%</span>
              </div>
              <Progress value={student.totalProgress} className="h-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Metales</span>
                  <span className="text-sm text-gray-600">{student.categories.metales}%</span>
                </div>
                <Progress value={student.categories.metales} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">No Metales</span>
                  <span className="text-sm text-gray-600">{student.categories.noMetales}%</span>
                </div>
                <Progress value={student.categories.noMetales} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Metaloides</span>
                  <span className="text-sm text-gray-600">{student.categories.metaloides}%</span>
                </div>
                <Progress value={student.categories.metaloides} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Gases Nobles</span>
                  <span className="text-sm text-gray-600">{student.categories.gases}%</span>
                </div>
                <Progress value={student.categories.gases} className="h-2" />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
