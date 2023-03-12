const checkNumInputs = (selector) => {
    const NumInputs = document.querySelectorAll(selector);

    NumInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;