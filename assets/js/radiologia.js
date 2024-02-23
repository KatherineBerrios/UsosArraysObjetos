//Pacientes Radiología
const radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },

  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },

  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },

  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },

  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

//Imprimir en la web
document.write("<h1>Estadísticas Centro Médico Ñuñoa</h1>");
document.write("<h3>Radiología</h3>");


//Imprime la primera y la última atención
document.write(`<p>Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}
</p>`
);

document.write("<hr>");

//Mostrar todas las atenciones de ayer - Radiologia
var texto_radiologia =
  "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (var i = 0; i < radiologia.length; i++) {
  texto_radiologia += `<tr>
                        <td>${radiologia[i].hora}</td>
                        <td>${radiologia[i].especialista}</td>
                        <td>${radiologia[i].paciente}</td>
                        <td>${radiologia[i].rut}</td>
                        <td>${radiologia[i].prevision}</td>
                      </tr>`;
}

document.getElementById("tablaRadiologia").innerHTML = texto_radiologia;