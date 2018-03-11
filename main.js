/**
 * The functionality of the game
 */
$(document).ready(function(){
 
    $(function () {
        $('#startGameBtn').on('click', function () {
            var numQuestions = $(this).prev().children();
            numQuestions.removeClass('input-error');
            if (!(numQuestions.val() === '')) {
                $(this).parent().fadeOut('slow');
                // TODO: Start the game and show the first question
                var q = new questions(numQuestions.val());
                q.startGame();
                
    
                
    
            } else {
                // Display error message
                numQuestions.addClass('input-error');
                numQuestions.val('');
            }
        });
    });
 });

