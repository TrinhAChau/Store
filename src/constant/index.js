import { user } from "../assets"
import { news1, news2, news3, news4 } from "../assets"
import { man, woman } from "../assets"
import {
    product1, product2, product3, product4,
    hoodie1, hoodie2,ao1,ao2,
    watch1, watch2, watch3, watch4, watch5,
    trousers1,trousers2,trousers3,trousers4,trousers5
} from "../assets"

export const shoes = [
    {
        id: 101,
    image:product1,
        name: "Air Jordan 1",
        price: 109.00
    },
    {
        id: 102,
        image:product2,
        name: "JA1SE",
        price:115.00
    },
    {
        id: 103,
        image:product3,
        name: "Nike Courst",
        price:99.00
    },
    {
        id: 104,
        image:product4,
        name: "Nike Impact 4",
        price:109.00
    }
]

export const coat = [
    {
        id: 201,
        image: hoodie1,
        name: "ZHD Hoodie 14",
        price:99.00
    },
    {
        id: 202,
        image: hoodie2,
        name: "ZHD Hoodie 15",
        price:109.00
    },
    {
        id: 203,
        image: ao1,
        name: "T-shirt Simpson",
        price:59.00
    },
    {
        id: 204,
        image: ao2,
        name: "T-shirt Astronaut",
        price:59.00
    }
]

export const watch = [
    {
        id: 301,
        image: watch1,
        name: "Casio WR 50M",
        price:112.00
    },
    {
        id: 302,
        image: watch2,
        name: "Guess GW0208G1 Zeus",
        price:149.00
    },
    {
        id: 303,
        image: watch3,
        name: "Casio Standart Kol Saati MTP-1374D-1AVDF",
        price:121.00
    },
    {
        id: 304,
        image: watch4,
        name: "Ladies Watch BUR239GN",
        price:129.00
    },
    {
        id: 305,
        image: watch5,
        name: "Akribos XXIV Black Dial AK1126SSBK",
        price:99.00
    },
]
export const feature = [
    {
        id: 601,
        title: "Dành cho nam",
        type: "Trang phục",
        image:man
    },
    {
         id: 602,
        title: "Dành cho nữ",
        type: "Trang phục",
        image:woman
    }
]
export const event = [
    {
        id: 1001,
        image:news1,
        title: "Những Items Không Thể Thiếu Khi Đi Du Lịch",
        date:"1-3-2024"
    },
    {
        id: 1002,
        image:news2,
        title: "Chào đón tháng 2 với mẫu các outfits cực cháy",
        date:"22-3-2024"
    },
    {
        id: 1003,
        image:news3,
        title: "Cách phối đồ với Air Force 1 cho cả nam và nữ",
        date:"15-2-2024"
    },
    {
        id: 1004,
        image:news4,
        title: "Shirts of The Day - Bộ sưu tập áo sơ mi họa tiết",
        date:"10-3-2024"
    }
]



export const comment = [
    {
        id: 1100,
        name: "John",
        job: "Sinh viên",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti animi ab rerum quae, quod pariatur nostrum aspernatur laboriosam praesentium dignissimos. Sapiente placeat natus cupiditate? Corporis minima voluptatem odit consequatur a.",
        rate: 5,
        image: user,
    },
     {
        id: 1101,
        name: "Alex",
        job: "Kỹ sư",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti animi ab rerum quae, quod pariatur nostrum aspernatur laboriosam praesentium dignissimos. Sapiente placeat natus cupiditate? Corporis minima voluptatem odit consequatur a.",
        rate: 4,
        image: user,
    },
      {
        id: 1102,
        name: "Cindy",
        job: "Dân phòng",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti animi ab rerum quae, quod pariatur nostrum aspernatur laboriosam praesentium dignissimos. Sapiente placeat natus cupiditate? Corporis minima voluptatem odit consequatur a.",
        rate: 5,
        image: user,
    },

]

export const navData = [
    {
        id:0,
        link:"Home",
        content:"Trang chủ",
    },
    {
        id:1,
        link:"Product",
        content:"Sản phẩm",
    },
    {
        id:2,
        
        link:"Features",
        content:"Đặc sắc",
    },
    {
        id:3,
        link:"Event",
        content:"Tin tức",
    },
    {
        id:4,
        link:"About",
        content:"Đánh giá",
    }
]

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const trousers = [
    {
        id: 401,
        name: "Jordan Chicago",
        image: trousers1,
        price: 130.00,
    },
    {
        id: 402,
        name: "Nike Spotwear",
        image: trousers2,
        price: 89.00,
    },
    {
        id: 403,
        name: "Nike SpotWear Man",
        image: trousers3,
        price: 99.00,
    },
    {
        id: 404,
        name: "Nike Dri-FIT Bliss",
        image: trousers4,
        price: 89.00,
    },
    {
        id: 405,
        name: "Men's Khaki Pants",
        image: trousers5,
        price: 120.00,
    },
]