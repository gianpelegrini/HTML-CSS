function openModal(mn){
    let modal = document.getElementById(mn);

    if(typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display='Block';
    document.body.overflow = 'hidden';
}

function closeModal(mn){
    let modal = document.getElementById(mn);

    if(typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display='None';
    document.body.overflow = 'auto';
}
