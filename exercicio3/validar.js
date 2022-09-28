function validar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('CPF').value;
    var cnpj = document.getElementById('CNPJ').value;
    var cep = document.getElementById('CEP').value;

    if (!nome) {
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo nome!'
        return false;
    }
    if(!email){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo email!'
        document.getElementById('email').focus()
        return false;
    }
    if(!telefone){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo telefone!'
        return false;
    }
    if(!cpf){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo CPF!'
        return false;
    }
    if(!cnpj){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo CNPJ!'
        return false;
    }
    if(!cep){
        document.getElementById('erro').style.display = 'block';
        document.getElementById('erro').innerHTML = 'Preencha o campo CEP!'
        return false;
    }
}