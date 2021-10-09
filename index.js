var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {

  var chute = parseInt (prompt('Digite um número entre 0 e 10'))

  if (numeroSecreto == chute) {
    alert ("ACERTOU!")
    break
  } 
  else if (chute > numeroSecreto) {
   alert ("O número secreto é menor")
  }
  else if (chute < numeroSecreto){
    alert ("O número secreto é maior")
    tentativas = tentativas - 1
  }
  
  }
if (chute != numeroSecreto) {
  alert (" Suas tentavivas acabaram! O número secreto era " + numeroSecreto)
}
  