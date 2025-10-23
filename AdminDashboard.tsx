import { LogOut, Atom } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import StudentsTab from './StudentsTab';
import Game1Tab from './Game1Tab';
import Game2Tab from './Game2Tab';
import Game3Tab from './Game3Tab';
import Game4Tab from './Game4Tab';
import PeriodicTableProgress from './PeriodicTableProgress';
import WeeklyRanking from './WeeklyRanking';
import WeeklyReport from './WeeklyReport';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Atom className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg">Panel de Administración</h1>
              <p className="text-sm text-gray-600">Tabla Periódica Educativa</p>
            </div>
          </div>
          <Button onClick={onLogout} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar Sesión
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Tabs defaultValue="alumnos" className="space-y-6">
          <TabsList className="flex flex-wrap h-auto gap-2 bg-white p-2 rounded-lg shadow-sm">
            <TabsTrigger value="alumnos">Alumnos</TabsTrigger>
            <TabsTrigger value="juego1">Juego 1</TabsTrigger>
            <TabsTrigger value="juego2">Juego 2</TabsTrigger>
            <TabsTrigger value="juego3">Juego 3</TabsTrigger>
            <TabsTrigger value="juego4">Juego 4</TabsTrigger>
            <TabsTrigger value="proceso">Proceso Tabla Periódica</TabsTrigger>
            <TabsTrigger value="ranking">Ranking Semanal</TabsTrigger>
            <TabsTrigger value="reporte">Reporte Semanal</TabsTrigger>
          </TabsList>

          <TabsContent value="alumnos">
            <StudentsTab />
          </TabsContent>

          <TabsContent value="juego1">
            <Game1Tab />
          </TabsContent>

          <TabsContent value="juego2">
            <Game2Tab />
          </TabsContent>

          <TabsContent value="juego3">
            <Game3Tab />
          </TabsContent>

          <TabsContent value="juego4">
            <Game4Tab />
          </TabsContent>

          <TabsContent value="proceso">
            <PeriodicTableProgress />
          </TabsContent>

          <TabsContent value="ranking">
            <WeeklyRanking />
          </TabsContent>

          <TabsContent value="reporte">
            <WeeklyReport />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
