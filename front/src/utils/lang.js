import { langTraductions } from "../local/lang";

const acceptablesLangues = ['fr', 'en'];
export const getLang = () => {
    let lang = 'fr';
    if (localStorage.lang !== undefined || acceptablesLangues.includes(localStorage.getItem('lang'))) {
        lang = localStorage.getItem('lang');
    }else{
        localStorage.setItem('lang', lang);
    }
    return lang;
}

export const setLang = (lang) => {
    let resp = {};
    if (acceptablesLangues.includes(localStorage.getItem('lang'))) {
        localStorage.setItem('lang', lang);
        resp = {
            success: true
        }
        return resp;
    }else{
        resp = {
            success: false,
            message: langTraductions['fr'].error
        }
        return
    }
}