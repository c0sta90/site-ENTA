$(document).ready(function(){
    //gravar seletores em variaveis
    var question = $("dl");
    var title = $("dt");
    var description = $("dd");

    //esconder respostas
    description.hide();

    question.on("click", function(){
        var $this = $(this);
        var isOpen = $this.hasClass("open");
        
        //fechar todas as respostas
        question.find("dd").slideUp();
        question.removeClass("open");

        if (!isOpen) {
            //abrir pergunta selecionada se não estiver aberta
            $this.find("dd").slideDown(function(){
                $this.addClass("open");
            });
        }
    });
});
