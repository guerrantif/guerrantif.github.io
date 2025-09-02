// Case toggle functionality
function getSavedCase() {
    return localStorage.getItem('case') || 'lowercase';
}

function saveCase(caseType) {
    localStorage.setItem('case', caseType);
}

function setCaseMode(caseType) {
    const html = document.documentElement;
    
    if (caseType === 'lowercase') {
        html.classList.add('lowercase-mode');
        html.classList.remove('normal-mode');
    } else {
        html.classList.add('normal-mode');
        html.classList.remove('lowercase-mode');
    }
    
    saveCase(caseType);
    updateCaseToggleIcon();
}

function toggleCase() {
    const currentCase = getSavedCase();
    const newCase = currentCase === 'lowercase' ? 'normal' : 'lowercase';
    setCaseMode(newCase);
}

function updateCaseToggleIcon() {
    const currentCase = getSavedCase();
    const uppercaseIcon = document.getElementById('uppercase-icon');
    const lowercaseIcon = document.getElementById('lowercase-icon');
    
    if (uppercaseIcon && lowercaseIcon) {
        if (currentCase === 'lowercase') {
            uppercaseIcon.style.display = 'inline';
            lowercaseIcon.style.display = 'none';
        } else {
            uppercaseIcon.style.display = 'none';
            lowercaseIcon.style.display = 'inline';
        }
    }
}

// Initialize case mode on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedCase = getSavedCase();
    setCaseMode(savedCase);
});