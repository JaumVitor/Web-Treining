function Aluno(nome, turma, nota) {
  this.nome = nome
  this.turma = turma
  this.nota = nota

  Aluno.prototype.toString = function () {
    return ` ${this.nome} - ${this.nota}`
  }
}

aluno1 = new Aluno('Geovana', 'Turma-A', 89)
aluno2 = new Aluno('Jonas', 'Turma-B', 70)
aluno3 = new Aluno('Hernando', 'Turma-A', 60)
aluno4 = new Aluno('Nando', 'Turma-A', 90)
aluno5 = new Aluno('Bamba', 'Turma-A', 59)

let alunos = new Array(aluno1, aluno2, aluno3, aluno4, aluno5)

// Alterando notas dos alunos para caracteres
function alterarNotas(alunos) {
  for (let aluno of alunos) {
    if (aluno.nota >= 90) {
      aluno.nota = 'A'
    } else if (aluno.nota >= 80) {
      aluno.nota = 'B'
    } else if (aluno.nota >= 70) {
      aluno.nota = 'C'
    } else if (aluno.nota >= 60) {
      aluno.nota = 'D'
    } else {
      aluno.nota = 'F'
    }
  }
}

// Chamando a função alterarNotas()
alterarNotas(alunos)

console.log(alunos.toString())

for (let aluno of alunos) {
  console.log(aluno.nome + '-' + aluno.nota)
}
