window.onload = function () {
    let darkmode = localStorage.getItem('darkmode');
    let toggle = document.getElementById('checkbox');
    if (darkmode == 'enabled') {
        document.body.classList.add('darkmode');
        toggle.checked = true;
    }
    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            document.body.classList.add('darkmode');
            localStorage.setItem('darkmode', 'enabled');
        } else {
            document.body.classList.remove('darkmode');
            localStorage.setItem('darkmode', 'disabled');
        }
    });

}