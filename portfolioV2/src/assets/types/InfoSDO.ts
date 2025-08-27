import type { HtmlHTMLAttributes } from "vue"

export interface InfoSDO {
        "id":number,
        "type":string,
        "nom":string, //doit etre le meme que le dossier image
        "title":string,
        "nomMenu":string[],
        "nomMenuF":string[],
        "badge":string[],
        "date":string[],
        "sousMenu":{
            "nom":string[]
            "pro":string[],
            "associatif":string[]
            "autre":string[]
        }
        "icon":string[],
        "color":string,
        "link":{
            "href":string[],
            "label":string[]
        },
        "images":number[]
        "text":{
            "main":string[],
            "bonus":{
                "titleB":string[]|string,
                "textB":string[]
            }
        },
        "textml":{
            "main":HtmlHTMLAttributes[],
            "bonus":{
                "titleB":string[]|string,
                "textB":string[]
            }
        },
        "tech":""
        "other":HtmlHTMLAttributes
}

//exemple pour a dif image / nom 
// si le nom est "Réaliser / Coder" le fichier .png/.svg doit s'appeller "realisercoder"
// les . / , ; et les accents ainsi que les espaces disparaissent
// en suivant la norme : TODO

// Arborescence pour les images 

//  /images
//      /categorie
//          > images_avatar.png
//            ...
//          /"nomMenu sans espace"
//              > images_galerie
//              ...
