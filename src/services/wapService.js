import { storageService } from './asyncStorageService'
// import { httpService } from './httpService'
// import { userService } from './userService'
import { utilService } from './utilService'

export const wapService = {
  query,
  getById,
  remove,
  add,
  saveWap,
  addCmp,
  deleteCmp,
  moveCmp
}

const gWaps = [
  {
    "_id": "5e28393890dd7201a06d4e44",
    "name": "HairDresser Baluta Marketing Site",
    "imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
    "createdBy": {
      "_id": "5e26e0b718a0891d4c995527",
      "username": "Hekro Special"
    },
    "usersData": {
      "contacts": [
        {
          "email": "user@user.com",
          "msg": "Please send me stuff",
          "at": 123
        }
      ],
      "signups": [
        {
          "email": "user@user.com",
          "at": 123
        }
      ]
    },
    "cmps": [
      {
        "id": "wc02",
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
        "id": "wc04",
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
        "id": "wc03",
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
      // {
      //     "id": "wc01",
      //     "type": "wap-map",
      //     "info": {
      //         "name": "Paris",
      //         "lat": 12.909,
      //         "lng": 23.9,
      //         "zoom": 2
      //     },
      //     "theme": "theme-map-exciting",
      //     "style": {
      //         "backgroundColor": "#f53b76",
      //         "height": "300px"
      //     }
      // },
      // {
      //     "id": "wc03",
      //     "type": "wap-container",
      //     "info": {
      //         "dir": "column",
      //         "cmps": [
      //             {},
      //             {}
      //         ]
      //     },
      //     "theme": "theme-container-base",
      //     "style": {}
      // }
    ],
    "isPublic": true
  }
]

// More ways to send query params:
// return axios.get('api/toy/?id=1223&balance=13')
// return axios.get('api/toy/?', {params: {id: 1223, balanse:13}})

async function query(filterBy = null) {
  try {
    const wap = await storageService.query('WAP')
    if (!wap || !wap.length) {
      localStorage.setItem('WAP', JSON.stringify(gWaps))
      return Promise.resolve(gWaps)
    }
    return Promise.resolve(wap)
  } catch (err) {
    console.log(err);
  }
}

function getById(wapId) {
  // return httpService.get(`board/${boardId}`)
  return storageService.get('WAP', wapId)
}

function remove(wapId) {
  // return httpService.delete(`board/${boardId}`)
  return storageService.remove('WAP', wapId)
}

function add(wapName) {
  const newWap = _createWap(wapName)
  return storageService.post('WAP', newWap)
}

function saveWap(wap) {
  return storageService.put('WAP', wap)
}

function _createWap(name) {
  const wap = {
    _id: utilService.makeId(),
    name,
    cmps: [],
    isPublic: false
  }
  return wap
}

async function addCmp(wapId, newCmp) {
  const cmp = JSON.parse(JSON.stringify(newCmp))
  try {
    delete cmp._id
    cmp.id = 'wc' + utilService.makeId()
    const wap = await storageService.get('WAP', wapId)
    wap.cmps.push(cmp)
    return storageService.put('WAP', wap)
  } catch (err) {
    console.log(err);
  }
}

async function deleteCmp(wapId, cmpId) {
  try {
    const wap = await storageService.get('WAP', wapId)
    const idx = wap.cmps.findIndex(cmp => cmp.id === cmpId)
    wap.cmps.splice(idx, 1)
    return storageService.put('WAP', wap)
  } catch (err) {
    console.log(err);
  }
}

async function moveCmp(wapId, cmpId, diff) {
  try {
    const wap = await storageService.get('WAP', wapId)
    let idx = wap.cmps.findIndex(cmp => cmp.id === cmpId)
    if (idx + diff < 0 || idx + diff > wap.cmps.length - 1) return
    const cmp = wap.cmps.splice(idx, 1)[0]
    wap.cmps.splice(idx + diff, 0, cmp)
    return storageService.put('WAP', wap)
  } catch (err) {
    console.log(err);
  }
}



