
const medicos = [
    { nome: "Dr. João Silva", especialidade: "Cardiologia" },
    { nome: "Dra. Maria Souza", especialidade: "Dermatologia" },
    { nome: "Dr. Pedro Almeida", especialidade: "Neurologia" },
    { nome: "Dr. Manoel Albuquerque", especialidade: "Ortopedia" },
    { nome: "Dra. Beatriz Storm", especialidade: "Ginecologia" },
  
];
function adicionarMedicos() {
    const tabela = document.getElementById("medicosTable");

    medicos.forEach(medico => {
        const linha = tabela.insertRow();
        const colunaNome = linha.insertCell();
        const colunaEspecialidade = linha.insertCell();

        colunaNome.textContent = medico.nome;
        colunaEspecialidade.textContent = medico.especialidade;
    });
}

document.addEventListener("DOMContentLoaded", adicionarMedicos);

document.getElementById("medicosForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeBusca = document.getElementById("nome").value.toLowerCase();
    const medicoEncontrado = medicos.find(medico => medico.nome.toLowerCase() === nomeBusca);

    if (medicoEncontrado) {
        alert(`Médico encontrado: ${medicoEncontrado.nome} (${medicoEncontrado.especialidade})`);
    } else {
        alert("Nenhum médico encontrado com esse nome.");
    }
});

document.getElementById('expand-btn').addEventListener('click', function() {
    var form = document.getElementById('expandable-form');
    if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  });
  

