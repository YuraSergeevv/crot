$(document).ready(function () {
    let r = random(256);
    let g = random(256);
    let b = random(256);
    let id = 0;
    let info = 0;
    let status = false;
    $('.itog').css({ 'backgroundColor': "rgb(60, 60, 60)" })
    setInterval(() => {
        if (status == true) {
            id = Math.floor(Math.random() * 20) + 1;
            $('#' + id).css({ 'backgroundColor': 'rgb(' + r + ',' + g + ',' + b + ')' });
            setTimeout(() => {
                if ($('#' + id).css("background-color") != "rgb(255, 255, 255)" && status == true) {
                    $('#' + id).css({ 'backgroundColor': 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')' });
                    info--;
                    $('.itog').css({ 'backgroundColor': "rgb(165, 20, 20)" })
                    setTimeout(() => { $('.itog').css({ 'backgroundColor': "rgb(165, 165, 165)" }) }, 400);
                }
            }, Math.floor(Math.random() * 500) + 800);
            $('#info').text(info);
        }
    }, 1500);

    setInterval(() => {
        if (status == false) {
            id = Math.floor(Math.random() * 20) + 1;
            $('#' + id).css({ 'backgroundColor': 'rgb(' + random(256) + ',' + random(256) + ',' + random(256) + ')' });
        }
    }, 100);


    $('.flex_item').on('click', function () {
        if (status == true) {
            if ($(this).attr('id') == id && $(this).css("background-color") == 'rgb(' + r + ', ' + g + ', ' + b + ')') {
                info++;
                $('#' + id).css({ 'backgroundColor': 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')' });
                $('.itog').css({ 'backgroundColor': "rgb(20, 165, 20)" })
                setTimeout(() => { $('.itog').css({ 'backgroundColor': "rgb(165, 165, 165)" }) }, 400);
            }
            else {
                info--;
                $('.itog').css({ 'backgroundColor': "rgb(165, 20, 20)" })
                setTimeout(() => { $('.itog').css({ 'backgroundColor': "rgb(165, 165, 165)" }) }, 400);
            }
            $('#info').text(info);
        }

    });

    $('#btn').on('click', function () {
        $(this).toggleClass('active')
        if (status == true) {
            status = false;
            $('.itog').css({ 'backgroundColor': "rgb(200, 200, 0  )" });
            $('.flex_item').css({ 'backgroundColor': "rgb(255, 255, 255  )" })
        }
        else {
            status = true;
            $('.itog').css({ 'backgroundColor': "rgb(165, 165, 165)" })
            $('.flex_item').css({ 'backgroundColor': "rgb(255, 255, 255  )" })
        }
    });
    $('#reset').on('click', function () {
        status = false;
        info = 0;
        $('#info').text(info);
        $('#btn').removeClass('active');
        $('.itog').css({ 'backgroundColor': "rgb(60, 60, 60)" })
        $('.flex_item').css({ 'backgroundColor': "rgb(255, 255, 255  )" })
        r = random(256);
        g = random(256);
        b = random(256);
    });
});

function random(max) {
    return Math.floor(Math.random() * 256);
}