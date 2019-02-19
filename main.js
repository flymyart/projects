$(document).ready(function(){

    /* 
        На этот уровне через $(this) искать не нужно, только в функции обработчики на клик

        Тут $(this) и есть DOM:)

        Просто ищите нужный элемент
    
    */


    /* Эту переменную лучше создавать в функции обработчике на клик.
        Там $(this) будет располагаться в нужном нам вопросе-ответе
        Далее от него ищем ближаййший парентс, в котором есть нужные нам .question-hide
    
    */
    //var answer = $(this).find(".question-hide").css('display');
    
    $(".question-part3").click(function(){

        var answer = $(this).parents('.question-part').find(".question-hide").css('display');
        
        console.log( $(this) );
        console.log(answer);

        if(answer == 'none'){
        
            $(this).parents(".question-part").find(".question-hide").slideDown(500);
            $(this).find(".question-part3-text blockquote").html('СКРЫТЬ ОТВЕТ');
            $(this).find(".question-part3-text-arrow").css('transform','rotate(45deg)');
            $(this).find(".question-part3-text-arrow").css('top','4px');
            //answer = 'block'; теперь это не нужно

        }else{
            
            $(this).parents(".question-part").find(".question-hide").slideUp(500);
            $(this).find(".question-part3-text blockquote").html('ПОКАЗАТЬ ОТВЕТ');
            $(this).find(".question-part3-text-arrow").css('transform','rotate(-135deg)');
            $(this).find(".question-part3-text-arrow").css('top','1px');
            //answer = 'none'; теперь это не нужно

        }
        
    });

});


