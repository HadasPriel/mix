import { storageService } from './asyncStorageService'


export const cmpService = {
    query,
}

const gCmps = [
    {
        "_id": "wc02",
        "type": "wap-header",
        "info": {
            "logo": "HairDresser Baluta",
            "navItems": [
                {
                    "id": '111',
                    "txt": "Home",
                    "url": "#wc03"
                },
                {
                    "id": '112',
                    "txt": "info",
                    "url": "#wc03"
                },
                {
                    "id": '113',
                    "txt": "lala",
                    "url": "#wc03"
                }
            ]
        },
        "theme": "theme-header-happy",
        "style": {
            "background": "url()",
            "font": "lobster",
            "color": "#ffffff",
        }
    },
    {
        "_id": "wc04",
        "type": "wap-hero",
        "info": {
            "title": "HairDresser Baluta",
            "imgUrl": "https://res.cloudinary.com/dtg8d5gnc/image/upload/v1627036945/mix/pexels-kyle-woods-4031160_stvasn.jpg",
        },
        "theme": "theme-header-happy",
        "style": {
            "fontFamily": "lobster",
            "color": "#ffffff",
            "align": "center",
            "fontSize": "60"
        }
    },
    {
        "_id": "wc03",
        "type": "wap-gallery",
        "info": {
            "imgs": [
                {
                    "id": '111',
                    "url": "https://res.cloudinary.com/dtg8d5gnc/image/upload/v1627036945/mix/pexels-kyle-woods-4031160_stvasn.jpg",
                    "ratio": "square"
                },
                {
                    "id": '112',
                    "url": "https://res.cloudinary.com/dtg8d5gnc/image/upload/v1627037077/mix/pexels-dmitriy-ganin-7538163_aj60tl.jpg",
                    "ratio": "portrait"
                },
                {
                    "id": '113',
                    "url": "https://res.cloudinary.com/dtg8d5gnc/image/upload/v1627036915/mix/pexels-armin-rimoldi-5269657_h8tg7p.jpg",
                    "ratio": "square"
                },
                {
                    "id": '114',
                    "url": "https://res.cloudinary.com/dtg8d5gnc/image/upload/v1627036901/mix/pexels-pixabay-413960_1_p9zs6a.jpg",
                    "ratio": "landscape"
                },
                {
                    "id": '115',
                    "url": "https://res.cloudinary.com/dtg8d5gnc/image/upload/v1627036877/mix/pexels-pok-rie-1726310_1_kwb0sg.jpg",
                    "ratio": "landscape"
                }
            ]
        },
        "theme": "theme-header-happy",
        "style": {
            "background": "url()",
            "font": "Fontush",
            "color": "red"
        }
    },
]

async function query(filterBy = null) {
    try {
        const cmps = await storageService.query('CMP')
        if (!cmps || !cmps.length) {
            localStorage.setItem('CMP', JSON.stringify(gCmps))
            return Promise.resolve(gCmps)
        }
        return Promise.resolve(cmps)
    } catch (err) {
        console.log(err);
    }
}