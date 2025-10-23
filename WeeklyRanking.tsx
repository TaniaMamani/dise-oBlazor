import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Medal, Award, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const rankingData = [
  { 
    position: 1, 
    prevPosition: 2, 
    name: 'María López', 
    points: 2850, 
    weeklyGrowth: 15,
    gamesPlayed: 18,
    avatar: '👩‍🔬'
  },
  { 
    position: 2, 
    prevPosition: 1, 
    name: 'Ana García', 
    points: 2780, 
    weeklyGrowth: 8,
    gamesPlayed: 16,
    avatar: '👩‍🎓'
  },
  { 
    position: 3, 
    prevPosition: 4, 
    name: 'Laura Martínez', 
    points: 2650, 
    weeklyGrowth: 22,
    gamesPlayed: 17,
    avatar: '👩‍💼'
  },
  { 
    position: 4, 
    prevPosition: 3, 
    name: 'Carlos Ruiz', 
    points: 2420, 
    weeklyGrowth: -5,
    gamesPlayed: 14,
    avatar: '👨‍🔬'
  },
  { 
    position: 5, 
    prevPosition: 5, 
    name: 'Diego Sánchez', 
    points: 2180, 
    weeklyGrowth: 0,
    gamesPlayed: 13,
    avatar: '👨‍🎓'
  },
  { 
    position: 6, 
    prevPosition: 6, 
    name: 'Juan Pérez', 
    points: 1850, 
    weeklyGrowth: -8,
    gamesPlayed: 11,
    avatar: '👨‍💼'
  },
];

export default function WeeklyRanking() {
  const getPositionIcon = (position: number) => {
    if (position === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (position === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (position === 3) return <Award className="w-6 h-6 text-amber-600" />;
    return null;
  };

  const getTrendIcon = (current: number, previous: number) => {
    if (current < previous) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (current > previous) return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="mb-6">
          <h2>Ranking Semanal</h2>
          <p className="text-gray-600">Semana del 16 al 22 de Octubre, 2025</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <div className="text-center">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-4xl mb-2">{rankingData[0].avatar}</div>
              <h3 className="text-lg">{rankingData[0].name}</h3>
              <p className="text-2xl mt-2">{rankingData[0].points} pts</p>
              <Badge className="mt-2">1er Lugar</Badge>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
            <div className="text-center">
              <Medal className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <div className="text-4xl mb-2">{rankingData[1].avatar}</div>
              <h3 className="text-lg">{rankingData[1].name}</h3>
              <p className="text-2xl mt-2">{rankingData[1].points} pts</p>
              <Badge variant="secondary" className="mt-2">2do Lugar</Badge>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <div className="text-center">
              <Award className="w-12 h-12 text-amber-600 mx-auto mb-3" />
              <div className="text-4xl mb-2">{rankingData[2].avatar}</div>
              <h3 className="text-lg">{rankingData[2].name}</h3>
              <p className="text-2xl mt-2">{rankingData[2].points} pts</p>
              <Badge variant="outline" className="mt-2">3er Lugar</Badge>
            </div>
          </Card>
        </div>

        <div className="space-y-3">
          {rankingData.map((student) => (
            <Card key={student.position} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 min-w-[100px]">
                  <div className="w-8 text-center">
                    {getPositionIcon(student.position) || (
                      <span className="text-lg text-gray-600">{student.position}</span>
                    )}
                  </div>
                  <div className="text-2xl">{student.avatar}</div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg">{student.name}</h3>
                    {getTrendIcon(student.position, student.prevPosition)}
                  </div>
                  <p className="text-sm text-gray-600">{student.gamesPlayed} juegos esta semana</p>
                </div>

                <div className="text-right">
                  <p className="text-2xl">{student.points}</p>
                  <p className="text-sm text-gray-600">puntos</p>
                </div>

                <div className="min-w-[100px] text-right">
                  <Badge 
                    variant={student.weeklyGrowth > 0 ? 'default' : student.weeklyGrowth < 0 ? 'destructive' : 'secondary'}
                  >
                    {student.weeklyGrowth > 0 ? '+' : ''}{student.weeklyGrowth}%
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
