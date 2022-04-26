window.onload = function () {
    let ligthmode = localStorage.getItem('ligthmode');
    let toggle = document.getElementById('checkbox');
    if (ligthmode == 'enabled') {
        document.body.classList.add('ligthmode');
        toggle.checked = true;
    }
    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            document.body.classList.add('ligthmode');
            localStorage.setItem('ligthmode', 'enabled');
        } else {
            document.body.classList.remove('ligthmode');
            localStorage.setItem('ligthmode', 'disabled');
        }
    });

}