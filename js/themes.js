var THEMES = [
    { id: 'night', label: 'Ночь' },
    { id: 'dawn', label: 'Рассвет' },
    { id: 'ocean', label: 'Океан' },
    { id: 'forest', label: 'Лес' }
];

function loadTheme() {
    var saved = localStorage.getItem('hsk_theme') || 'night';
    document.body.classList.add('theme-' + saved);
    return saved;
}

function buildThemeSwitcher() {
    var current = localStorage.getItem('hsk_theme') || 'night';
    var div = document.createElement('div');
    div.className = 'theme-switcher';
    THEMES.forEach(function(t) {
        var dot = document.createElement('span');
        dot.className = 'theme-dot' + (t.id === current ? ' active' : '');
        dot.dataset.theme = t.id;
        dot.title = t.label;
        dot.addEventListener('click', function() {
            THEMES.forEach(function(x) {
                document.body.classList.remove('theme-' + x.id);
            });
            document.body.classList.add('theme-' + t.id);
            localStorage.setItem('hsk_theme', t.id);
            document.querySelectorAll('.theme-dot').forEach(function(d) { d.classList.remove('active'); });
            this.classList.add('active');
        });
        div.appendChild(dot);
    });
    document.body.appendChild(div);
}

loadTheme();
document.addEventListener('DOMContentLoaded', buildThemeSwitcher);
