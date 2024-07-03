document.addEventListener('DOMContentLoaded', function () {
    const problems = [
        {
            problem: 'Battery Drain',
            solution: 'Reduce screen brightness, close unused apps, use battery saver mode.'
        },
        {
            problem: 'Slow Performance',
            solution: 'Clear app caches, uninstall unnecessary apps, restart devices regularly.'
        },
        {
            problem: 'App Crashes',
            solution: 'Keep apps updated, clear app data, reinstall problematic apps.'
        },
        {
            problem: 'Connectivity Issues',
            solution: 'Restart devices and routers, reset network settings, update firmware.'
        },
        {
            problem: 'Overheating',
            solution: 'Avoid using phones while charging, reduce intensive app usage, keep devices cool.'
        },
        {
            problem: 'Storage Space',
            solution: 'Use cloud storage, delete unnecessary files, clear caches.'
        }
    ];

    const problemsList = document.getElementById('problems-list');

    problems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.problem;
        listItem.addEventListener('click', function () {
            showSolution(item.solution);
        });
        problemsList.appendChild(listItem);
    });
});

function showSolution(solution) {
    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function () {
        document.body.removeChild(modal);
    });

    const solutionText = document.createElement('p');
    solutionText.textContent = solution;

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(solutionText);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}
