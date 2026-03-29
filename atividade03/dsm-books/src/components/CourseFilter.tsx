import { useBooks } from "../context/BooksContext";
import { MenuItem, Select, Typography, Box, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";

export default function CourseFilter() {
  const { books } = useBooks();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  const courses = [...new Set(books.map(book => book.course))];
  const semesters = [...new Set(books.map(book => book.semester))].sort((a, b) => a - b);

  const filteredBooks = books.filter(book => {
    const matchCourse = selectedCourse === "" || book.course === selectedCourse;
    const matchSemester = selectedSemester === "" || book.semester === Number(selectedSemester);
    return matchCourse && matchSemester;
  });

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Filtrar Referências</Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        {/* Filtro de Disciplina */}
        <FormControl fullWidth>
          <InputLabel>Disciplina</InputLabel>
          <Select 
            value={selectedCourse} 
            onChange={e => setSelectedCourse(e.target.value)}
            label="Disciplina"
          >
            <MenuItem value="">Todas</MenuItem>
            {courses.map(course => (
              <MenuItem key={course} value={course}>{course}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Filtro de Semestre */}
        <FormControl fullWidth>
          <InputLabel>Semestre</InputLabel>
          <Select 
            value={selectedSemester} 
            onChange={e => setSelectedSemester(e.target.value)}
            label="Semestre"
          >
            <MenuItem value="">Todos</MenuItem>
            {semesters.map(sem => (
              <MenuItem key={sem} value={sem}>{sem}º Semestre</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Resultados */}
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book, idx) => (
          <Box key={idx} sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{book.title}</Typography>
            <Typography variant="body2">
              {book.author} | {book.course} ({book.semester}º Sem)
            </Typography>
          </Box>
        ))
      ) : (
        <Typography color="textSecondary">Nenhum livro encontrado para este filtro.</Typography>
      )}
    </Box>
  );
}