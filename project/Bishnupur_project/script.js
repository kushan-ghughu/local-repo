document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const moreInfo = document.getElementById('moreInfo');

    learnMoreBtn.addEventListener('click', () => {
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            learnMoreBtn.textContent = 'Show Less';
        } else {
            moreInfo.classList.add('hidden');
            learnMoreBtn.textContent = 'Learn More';
        }
    });
});
