import Img1 from '../assets/images/auctions/img1.png'
import Img2 from '../assets/images/auctions/img2.png'
import Img3 from '../assets/images/auctions/img3.png'
import ava1 from '../assets/images/auctions/avatar.png'
import { TAuction } from '../shared/libs/types'

export const auctionsData: TAuction[] = [
    {
        id: 1,
        image: Img1,
        altImage: 'абстракция',
        avatar: ava1,
        avatarAlt: "портрет",
        name: 'Visual Art',
        likes: 32,
        timer: "03:12:09",
        bid: "32 ETH",
        isLiked: true,
    },
    {
        id: 2,
        image: Img2,
        altImage: 'абстракция',
        avatar: ava1,
        avatarAlt: "портрет",
        name: 'Visual Art',
        likes: 4,
        timer: "02:12:09",
        bid: "44 ETH",
        isLiked: false,
    },
    {
        id: 3,
        image: Img3,
        altImage: 'абстракция',
        avatar: ava1,
        avatarAlt: "портрет",
        name: 'Visual Art',
        likes: 32,
        timer: "04:12:09",
        bid: "62 ETH",
        isLiked: false,
    },
    {
        id: 4,
        image: "",
        altImage: 'абстракция',
        avatar: ava1,
        avatarAlt: "портрет",
        name: 'Visual Art',
        likes: 1,
        timer: "01:12:09",
        bid: "19 ETH",
        isLiked: false,
    }
]
