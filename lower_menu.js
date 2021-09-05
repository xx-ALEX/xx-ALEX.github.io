document.getElementById('btn1').click();
function news() {
    document.getElementById('btn1').classList.remove('inactive');
    document.getElementById('btn1').classList.add('active');
    document.getElementById('btn2').classList.remove('active');
    document.getElementById('btn2').classList.add('inactive');
    document.getElementById('btn3').classList.remove('active');
    document.getElementById('btn3').classList.add('inactive');
    document.getElementById('myDropdown1').classList.remove('banners_1row');
    document.getElementById('myDropdown1').classList.add('show1');
    document.getElementById('myDropdown2').classList.remove('show2');
    document.getElementById('myDropdown2').classList.add('banners_2row');
    document.getElementById('myDropdown3').classList.remove('show3');
    document.getElementById('myDropdown3').classList.add('banners_3row');
}
function pressRelease() {
    document.getElementById('btn2').classList.remove('inactive');
    document.getElementById('btn2').classList.add('active');
    document.getElementById('btn1').classList.remove('active');
    document.getElementById('btn1').classList.add('inactive');
    document.getElementById('btn3').classList.remove('active');
    document.getElementById('btn3').classList.add('inactive');
    document.getElementById('myDropdown2').classList.remove('banners_2row');
    document.getElementById('myDropdown2').classList.add('show2');
    document.getElementById('myDropdown1').classList.remove('show1');
    document.getElementById('myDropdown1').classList.add('banners_1row');
    document.getElementById('myDropdown3').classList.remove('show3');
    document.getElementById('myDropdown3').classList.add('banners_3row');
}
function reviews() {
    document.getElementById('btn3').classList.remove('inactive');
    document.getElementById('btn3').classList.add('active');
    document.getElementById('btn1').classList.remove('active');
    document.getElementById('btn1').classList.add('inactive');
    document.getElementById('btn2').classList.remove('active');
    document.getElementById('btn2').classList.add('inactive');
    document.getElementById('myDropdown3').classList.remove('banners_3row');
    document.getElementById('myDropdown3').classList.add('show3');
    document.getElementById('myDropdown1').classList.remove('show1');
    document.getElementById('myDropdown1').classList.add('banners_1row');
    document.getElementById('myDropdown2').classList.remove('show2');
    document.getElementById('myDropdown2').classList.add('banners_2row');
}

function showText() {
    document.getElementById('show_text').classList.remove('show_text');
    document.getElementById('show_text').classList.add('hide_text');
    document.getElementById('hidden').classList.remove('hidden');
    document.getElementById('hidden').classList.add('shown');
    document.getElementById('hide_text').classList.remove('hide_text');
    document.getElementById('hide_text').classList.add('show_text');
}
function hideText() {
    document.getElementById('show_text').classList.remove('hide_text');
    document.getElementById('show_text').classList.add('show_text');
    document.getElementById('hidden').classList.remove('shown');
    document.getElementById('hidden').classList.add('hidden');
    document.getElementById('hide_text').classList.remove('show_text');
    document.getElementById('hide_text').classList.add('hide_text');
}