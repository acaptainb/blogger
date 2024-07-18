export class Blogs {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.imgUrl = data.imgUrl
        this.body = data.body
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.creatorId = data.creatorId
        this.creator = data.creator
    }
}


// {
//     "_id": "66219f9a11e26365c7f70acf",
//     "title": "Chronicles of Chaos: Surviving Dark & Darker with Style!",
//     "body": "Welcome, fellow adventurers, to the zany realm of Dark & Darker, where chaos reigns and sanity takes a vacation! Today, we're diving into the hilarious mishaps that make this game the ultimate comedy of errors. From accidentally equipping a banana peel instead of armor to mistaking a villainous warlock for a friendly bard (awkward!), every moment is a laugh riot. Join me as we navigate dungeons filled with more traps than a clown convention and battle monsters with the battle cries of confused chickens. Remember, in Dark & Darker, the only thing darker than the dungeons is our sense of humor!",
//     "imgUrl": "https://static.kinguin.net/media/images/products/_Dark-and-Darker-z-dalszymi-problemami-tworcy-narazili-sie-fanom-gry.jpg",
//     "tags": [],
//     "published": true,
//     "creatorId": "660c5f4b55f94158e69b7959",
//     "createdAt": "2024-04-18T22:32:58.859Z",
//     "updatedAt": "2024-04-18T22:32:58.859Z",
//     "__v": 0,
//     "creator": {
//       "_id": "660c5f4b55f94158e69b7959",
//       "subs": [
//         "auth0|660c5f4a4451a899ec19d037"
//       ],
//       "email": "emmawood.coding@gmail.com",
//       "name": "ʕ✪㉨✪ʔ",
//       "picture": "https://wallpapers.com/images/hd/bratz-face-meme-pfp-84nsvbw56x2tpnfz.jpg",
//       "bio": "( º◞ل͟◟º) Hi",
//       "coverImg": "https://wallpaperaccess.com/full/9095164.png",
//       "github": "https://github.com/ewood-coder",
//       "linkedin": "https://www.linkedin.com/in/emma-wood-341ba1210/",
//       "resume": "",
//       "class": "Spring 2024",
//       "graduated": false,
//       "createdAt": "2024-04-02T19:41:05.557Z",
//       "updatedAt": "2024-04-22T15:49:55.057Z",
//       "__v": 0,
//       "id": "660c5f4b55f94158e69b7959"
//     },
//     "id": "66219f9a11e26365c7f70acf"
//   }