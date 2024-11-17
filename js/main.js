$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            cfp: 'Por favor, insira o seu CPF',
            cep: 'Por favor, insira o seu CEP'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (form, validator) {
            let canmposIncorretos = validator.numberOfInvalids();
            console.log(canmposIncorretos)
        }
    })
})
