let obrazki = ['Grafika/brain.png', 'Grafika/tea.jpg', 'Grafika/kod.jpg', 'Grafika/kawa.jpg', 'Grafika/books.jpg', 'Grafika/films.jpg', 'Grafika/music.jpg']
let aktualny = 0;

$(document).ready(function() {
    $("#slider").css("background-image", "url(" + obrazki[aktualny] + ")");
    $("#lewy").click(function() {
        if (aktualny > 0) aktualny -= 1;
        $("#slider").css("background-image", "url(" + obrazki[aktualny] + ")");
    })
    $("#prawy").click(function() {
        if (aktualny < obrazki.length - 1) aktualny += 1;
        $("#slider").css("background-image", "url(" + obrazki[aktualny] + ")");
    })

})

