export const validarEmail = (email) => {
    const emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return emailValido.test(email);
}

export const validarTel = (tel) => {
    return tel.length === 10 && /^[0-9]+$/.test(tel);

}