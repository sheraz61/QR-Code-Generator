
const imgBox = document.querySelector('.imgBox');
const qrImage = document.querySelector('#qrImage');
const qrText = document.querySelector('#qrText');
const baseURL = "https:api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    if (qrText.value.length > 0) {
        qrImage.src = `${baseURL}${qrText.value}`;
        imgBox.classList.add("show_img");
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000)
    }
});