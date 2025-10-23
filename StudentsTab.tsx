import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Search, UserPlus, Edit, Trash2 } from 'lucide-react';

const mockStudents = [
  { id: 1, name: 'Ana García', email: 'ana.garcia@ejemplo.com', progress: 85, gamesCompleted: 12, status: 'Activo' },
  { id: 2, name: 'Carlos Ruiz', email: 'carlos.ruiz@ejemplo.com', progress: 72, gamesCompleted: 9, status: 'Activo' },
  { id: 3, name: 'María López', email: 'maria.lopez@ejemplo.com', progress: 94, gamesCompleted: 15, status: 'Activo' },
  { id: 4, name: 'Juan Pérez', email: 'juan.perez@ejemplo.com', progress: 45, gamesCompleted: 5, status: 'Inactivo' },
  { id: 5, name: 'Laura Martínez', email: 'laura.martinez@ejemplo.com', progress: 88, gamesCompleted: 11, status: 'Activo' },
  { id: 6, name: 'Diego Sánchez', email: 'diego.sanchez@ejemplo.com', progress: 67, gamesCompleted: 8, status: 'Activo' },
];

export default function StudentsTab() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = mockStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2>Gestión de Alumnos</h2>
            <p className="text-gray-600">Total de alumnos: {mockStudents.length}</p>
          </div>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Agregar Alumno
          </Button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Buscar por nombre o email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Progreso</TableHead>
                <TableHead>Juegos Completados</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-600"
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span className="text-sm">{student.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.gamesCompleted}</TableCell>
                  <TableCell>
                    <Badge variant={student.status === 'Activo' ? 'default' : 'secondary'}>
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
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
