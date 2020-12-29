//заглушка не успел разобратся и доделать


let cart = {
    'sisls23' : 2,
    'sisls28' : 2,
};





document.onclick = (event) => {
    if (event.target.classList.contains('plus')) {
        //console.log(event.target.dataset.id);
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')) {
        //console.log(event.target.dataset.id);
        minusFunction(event.target.dataset.id);
    }
}
// увеличение количества товара
const plusFunction = (id) => {
    cart[id]++;
    renderCart();
}
// уменьшение количества товара
const minusFunction = (id) => {
    if (cart[id] - 1 == 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]--;
    renderCart();
}
// удаление товара
const deleteFunction = (id) => {
    delete cart[id];
    renderCart();
}
const renderCart = () => {
    console.log(cart);
}

renderCart();
