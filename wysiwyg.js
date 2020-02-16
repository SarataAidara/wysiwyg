window.onload = function ($) {
    $.fn.my_wysiwyg = function (options = null) {
        const settings = {
            buttons: [
                'color',
                'bold',
                'underline',
                'background',
                'fontsize',
                'textalign',
                'strikethrough',
                'fontweight'
            ]
        };

        function toolbar(action, element = null) {

            document.execCommand(action, false, element);
        }

        return this.each(function () {

            // Création première div

            $(this).wrap("<div id='wysiwyg'></div>");

            // Création d'une deuxième div editable

            $('#wysiwyg').append("<div class='editor' contenteditable='true'></div>");

            // Cache tous les textarea et les remplace par la div editable

            $(this).hide();

            // Création bouton Bold

            $('.editor').before("<button id='buttonbold' type='button'>Bold</button>");

            // Création bouton Font-style

            $('.editor').before("<button id='buttonitalic' type='button'>Italic</button>");

            // Création bouton Color

            $('.editor').before("<button id='buttoncolor' type='button'>Color</button>");

            // Création bouton Background-Color

            $('.editor').before("<button id='buttonbackcolor' type='button'>Background-Color</button>");

            // Création bouton Strikethrough

            $('.editor').before("<button id='buttonstrikethrough' type='button'>Strikethrough</button>");

            // Création bouton Underline

            $('.editor').before("<button id='buttonunderline' type='button'>Underline</button>");

            // Création bouton textAlignCenter

            $('.editor').before("<button id='buttontextaligncenter' type='button'> Text-Align Center</button>");

            // Création bouton textAlignleft

            $('.editor').before("<button id='buttontextalignleft' type='button'>Text-Align Left</button>");

            // Création bouton textAlignright

            $('.editor').before("<button id='buttontextalignright' type='button'>Text-Align Right</button>");

            // Création bouton textAlignjustified

            $('.editor').before("<button id='buttontextalignjustified' type='button'> Justified Text-Align</button>");

            // Création button Font-size

            $('.editor').before('<select id="size"><option value="7">1</option><option value="9">3</option><option value="12">5</option><option value="15">6</option><option value="18">8</option><option value="21">10</option><option value="24">12</option></select>');

            // Création bouton Underline

            $('.editor').before("<button id='buttonlink' type='button'>Insert Link</button>");




            // Attribut les valeurs

            $('#buttonbold').click(function () {

                toolbar('bold');
            });

            $('#buttonitalic').click(function () {

                toolbar('italic');
            });

            $('#buttonunderline').click(function () {

                toolbar('underline');
            });

            $('#buttonstrikethrough').click(function () {

                toolbar('strikethrough');
            });

            $('#size').click(function () {

                toolbar('fontSize', $('#size option:selected').text());
            });

            $('#buttonbackcolor').click(function () {

                alert('bientôt fonctionnel');
            });
            $('#buttoncolor').click(function () {

                alert('bientôt fonctionnel');
            });


            $('#buttontextaligncenter').click(function () {

                toolbar('justifyCenter');
            });

            $('#buttontextalignright').click(function () {

                toolbar('justifyright');
            });

            $('#buttontextalignleft').click(function () {

                toolbar('justifyleft');
            });

            $('#buttontextalignjustified').click(function () {

                toolbar('justify');
            });

            $('#buttonlink').click(function () {

                alert('bientôt fonctionnel');
            });
            

            // Partie css en jquery

            $('body').css('background-color' , 'rgb(150, 153, 155)');
            $('h1').css('text-align' , 'center');
            $('h1').css('border-bottom' , '3px solid black');
            $('h1').css('border-top' , '3px solid black');
            $('.editor').css('width' , '80%');
            $('.editor').css('margin-left' , '10%');
            $('.editor').css('height' , '100em');
            $('.editor').css('background-color' , 'white');
            $('select').css('background' ,'rgb(117, 117, 143)');
            $('select').css('-webkit-appearance' , 'inherit');
            $('select').css('margin-right' , '0.5%');
            $('textarea').css('width' , '80%');
            $('textarea').css('margin' , '2%');
            $('textarea').css('margin-left' , '5%');
            $('textarea').css('height' , '100em');
            $('hover').css('background' , 'purple');
            $('button').css('margin-top' ,  '20px');
            $('button').css('margin-right' ,  '0.5%');
            $('button').css('line-height' , '50px');
            $('button').css('font-weight' , 'bold');
            $('button').css('padding' , '0 30px');
            $('button').css('margin-bottom' , '2%');
            $('button').css('background' ,'rgb(117, 117, 143)');
            $('button').css('color' , 'white');
            $('button').css('border-radius' , '15%');


            // Autre maniere de faire mais sans retour en arriere et unique changement

            // if (settings.fontStyle) {
            //     $("#editor").css('font-style', settings.fontStyle);
            // }

            // if (settings.border) {
            //     $("#editor").css('border', settings.border);
            // }

            // if (settings.background) {
            //     $("#editor").css('background', settings.background);
            // }

            // if (settings.fontSize) {
            //     $("#editor").css('font-size', settings.fontSize);
            // }

            // if (settings.textAlign) {
            //     $("#editor").css('text-align', settings.textAlign);
            // }

            // if (settings.textDecoration) {
            //     $("#editor").css('text-decoration', settings.textDecoration);
            // }

            // if (settings.fontWeight) {
            //     $("#editor").css('font-weight', settings.fontWeight);
            // }



        });

    };

}(jQuery);
