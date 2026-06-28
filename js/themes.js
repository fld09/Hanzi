(function() {
    var THEMES = [
        { id: 'night', label: 'Ночь' },
        { id: 'dawn', label: 'Рассвет' },
        { id: 'ocean', label: 'Океан' },
        { id: 'forest', label: 'Лес' }
    ];

    var saved;
    try { saved = localStorage.getItem('hsk_theme') || 'night'; } catch(e) { saved = 'night'; }
    document.documentElement.classList.add('theme-' + saved);

    function buildSwitcher() {
        var div = document.createElement('div');
        div.className = 'theme-switcher';
        THEMES.forEach(function(t) {
            var dot = document.createElement('span');
            dot.className = 'theme-dot' + (t.id === saved ? ' active' : '');
            dot.dataset.theme = t.id;
            dot.title = t.label;
            dot.addEventListener('click', function() {
                THEMES.forEach(function(x) { document.documentElement.classList.remove('theme-' + x.id); });
                document.documentElement.classList.add('theme-' + t.id);
                saved = t.id;
                try { localStorage.setItem('hsk_theme', t.id); } catch(e) {}
                document.querySelectorAll('.theme-dot').forEach(function(d) { d.classList.remove('active'); });
                this.classList.add('active');
            });
            div.appendChild(dot);
        });
        document.body.appendChild(div);
    }

    if (document.body) buildSwitcher();
    else window.addEventListener('load', buildSwitcher);
})();
