interface Student {
    firstName: string;  // Nombre del estudiante
    lastName: string;   // Apellido del estudiante
    age: number;        // Edad del estudiante
    location: string;   // Ubicación del estudiante
}

const student1: Student = {
    firstName: 'Hernan',
    lastName: 'Alegresa',
    age: 23,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'West',
    age: 20,
    location: 'London'
};

const studentsList: Student[] = [student1, student2];

const body = document.querySelector('body');  // Seleccionamos el cuerpo de la página
const table = document.createElement('table');  // Creamos una tabla
const tbody = document.createElement('tbody');  // Creamos el cuerpo de la tabla

studentsList.forEach((student) => {
    const row = document.createElement('tr');  // Nueva fila para la tabla
    const firstNameCell = document.createElement('td');  // Celda para el nombre
    const locationCell = document.createElement('td');   // Celda para la ubicación

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
body.appendChild(table);
