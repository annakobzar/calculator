'use strict';

(function($){
	$(document).ready(function() {
                let result = $('textarea');

// беру из документа значения кнопок, помещаю в текстовое поле
	$('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#plus, #minus, #multiply, #divide, #dot').click(function(){
            let value = $(this).val(),
                total = $('textarea').val($('textarea').val() + value); 
        });
      
// функция на кнопку "="
      $('#equal').click(function(){
        result.val(eval(result.val()));

        $('.calc__input-field').keydown(function(e){
                if (e.which == 13) {
                        e.preventDefault();
                        result.val(eval(result.val()));
                        } 
                });
        
        if (!isFinite(result.val())) {
                alert('You hacked this world!');
                }
        });

// очистить поле ввода
      $('#clear').click(function(){
          result.val('');
        });

// очистить один символ из поля ввода      
      $('#backspace').click(function(){
          result.val($('textarea').val().substring(0, result.val().length - 1));
                });
        
});
        
})(jQuery);