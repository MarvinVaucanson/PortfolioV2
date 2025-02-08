import type { HtmlHTMLAttributes } from "vue"

export interface InfoSDO {
        "id":number,
        "type":string,
        "nom":string,
        "title":string,
        "nomMemu":string[],
        "icon":string[],
        "profile":string, //doit etre le lien vers le dossier des images pour les pp des langages, format carré, sans espace dans le nom en minuscule
        "path":{
            "href":string[],
            "link":string[]
        },
        "galeryPath":string,
        "galery":string[],
        "text":{
            "main":string[],
            "bonus":{
                "titleB":string[]|string,
                "textB":string[]
            }
        }
        "other":HtmlHTMLAttributes
}

//exemple pour a dif image / nom 
// si le nom est "Réaliser / Coder" le fichier .png/.svg doit s'appeller "realisercoder"
// les . / , ; et les accents ainsi que les espaces disparaissent
// en suivant la norme : TODO