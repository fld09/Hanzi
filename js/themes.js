var THEMES = [
    { id: 'night', label: 'Ночь' },
    { id: 'dawn', label: 'Рассвет' },
    { id: 'ocean', label: 'Океан' },
    { id: 'forest', label: 'Лес' }
];

function getTheme() {
    try { return localStorage.getItem('hsk_theme') || 'night'; } catch(e) { return 'night'; }
}

function buildThemeSwitcher() {
    var current = getTheme();
    var div = document.createElement('div');
    div.className = 'theme-switcher';
    THEMES.forEach(function(t) {
        var dot = document.createElement('span');
        dot.className = 'theme-dot' + (t.id === current ? ' active' : '');
        dot.dataset.theme = t.id;
        dot.title = t.label;
        dot.addEventListener('click', function() {
            THEMES.forEach(function(x) { document.body.classList.remove('theme-' + x.id); });
            document.body.classList.add('theme-' + t.id);
            try { localStorage.setItem('hsk_theme', t.id); } catch(e) {}
            document.querySelectorAll('.theme-dot').forEach(function(d) { d.classList.remove('active'); });
            this.classList.add('active');
        });
        div.appendChild(dot);
    });
    document.body.appendChild(div);
}

if (document.body) buildThemeSwitcher();
else document.addEventListener('DOMContentLoaded', buildThemeSwitcher);
