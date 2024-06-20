const items = [
    ['Item 01', 1],
    ['Item 02', 1],
    ['Item 03', 1],
    ['Item 04', 1],
    ['Item 05', 1],
    ['Item 06', 1],
    ['Item 07', 1],
    ['Item 08', 1],
]

$('.div-roulette').on('click', function() {rodaARoda()});

$(document).keypress(function(event) {
    if(event.charCode == 13 || event.charCode == 32){
        rodaARoda();
    }
});

function rodaARoda(){
    if(!$('#roulette').hasClass('girando')){
        let weight = new Array();
        items.forEach((item, key) => {
            for (let i = 0; i < item[1]; i++) {
                weight.push(key + 1);
            }
        });
        let choosed = weight[Math.floor(Math.random() * weight.length)];
        $('#roulette').removeAttr('class');
        setTimeout(() => {
            document.getElementById("roleta-audio").play();
            return $('#roulette').addClass(`number-${choosed}`).addClass('girando');
        }, 50);

        setTimeout(() => {
            $('#roulette').removeClass('girando');
            setTimeout(() => {
                window.location.href = "https://unicopag.com/?page_id=1877";
            }, 10000);
        }, 23000);
    }
}