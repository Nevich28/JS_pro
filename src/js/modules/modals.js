const modals = (state) => {
    function bindModal(trigerSelector, modalSelector, closeSelector, defaultValue, closeClickOverlay = true, requiredCheck = {}) {
        const trigger = document.querySelectorAll(trigerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              checkBoxes = document.querySelectorAll('.checkbox');
        

        function openModal(e){
            if (e.target) {
                e.preventDefault();
            }

            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "block";
            document.body.style.overflow = 'hidden';
            // document.body.classList.add('modal-open')
            checkBoxes.forEach((item, y) => {
                item.checked = false;
            })
            
        };

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {

                for (let key in defaultValue) {
                    state[key] = defaultValue[key];
                }
                console.log(state);
                let checked = true;
                if (Object.keys(requiredCheck).length === 0) {
                    openModal(e);
                } else {
                    for (let key in requiredCheck) {
                        if (requiredCheck[key] == state[key]) {
                            checked = false;
                            break;
                        }
                    }
                    if (checked) {
                        openModal(e);
                    } else {
                        let statusMessage = document.createElement('div');
                        statusMessage.classList.add('status');
                        item.parentNode.append(statusMessage);
                        statusMessage.textContent = 'Заполните правильно все данные';
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 3000);    
                    }
                }
            });
        })

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = "none";
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open')
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                item.style.display = 'none';
            });
                modal.style.display = "none";
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open')
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', {'form': 0, 'height': 0, 'width': 0});
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', {'type': 'tree', 'profile': ''}, false, {'width':0, 'height':0});
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', {}, false, {'profile':''});
    // showModalByTime('.popup', 60000);
};

export default modals;