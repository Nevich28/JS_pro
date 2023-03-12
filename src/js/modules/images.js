const images = () => {
    const imgPopup = document.createElement('div'),
          worSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    worSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    imgPopup.appendChild(bigImage);
    bigImage.style.height = '90vh';

    worSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            document.body.style.overflow = 'hidden';
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }
        if (target && target.matches('div.popup')) {
            document.body.style.overflow = '';
            imgPopup.style.display = 'none';
        }
    });
};

export default images;