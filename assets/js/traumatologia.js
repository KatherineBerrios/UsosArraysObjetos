//Pacientes Traumatología
const traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

//Imprimir en la web
document.write("<h3>Traumatología</h3>");


//Imprime la primera y la última atención
document.write(
`<p>Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length-1].paciente} - ${traumatologia[traumatologia.length-1].prevision}
</p>`
);

document.write("<hr>");

//Mostrar todas las atenciones de ayer - Traumatología
var texto_traumatologia =
  "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (var i = 0; i < traumatologia.length; i++) {
  texto_traumatologia += `<tr>
                            <td>${traumatologia[i].hora}</td>
                            <td>${traumatologia[i].especialista}</td>
                            <td>${traumatologia[i].paciente}</td>
                            <td>${traumatologia[i].rut}</td>
                            <td>${traumatologia[i].prevision}</td>
                          </tr>`;
}

document.getElementById("tablaTraumatologia").innerHTML = texto_traumatologia;