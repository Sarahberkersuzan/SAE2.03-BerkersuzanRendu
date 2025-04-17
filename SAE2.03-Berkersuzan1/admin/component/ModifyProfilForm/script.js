let templateFile = await fetch('./component/ModifyProfilForm/template.html');
let template = await templateFile.text();

let ModifyProfilForm = {};

ModifyProfilForm.format = function(handler, profil) {
    let html = template;
    html = html.replace('{{handler}}', handler);
    html = html.replace('{{hProfil}}', profil);
    return html;
};

export { ModifyProfilForm };