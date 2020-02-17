const initialState = [
    {
        id: 1,
        name: 'Iphone 8 Plus',
        img: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        ratingStar: 5
    },
    {
        id: 2,
        name: 'Samsung Galaxy S9',
        img: 'https://www.viettablet.com/images/thumbnails/480/516/detailed/27/samsung-galaxy-s9-plus-cu-cong-ty-chinh-hang.png',
        description: 'Sản phẩm do SamSung sản xuất',
        price: 400,
        inventory: 15,
        ratingStar: 4
    },
    {
        id: 3,
        name: 'Oppo F9S',
        img: 'https://didongviet.vn/pub/media/catalog/product//o/p/oppo-f9-didongviet_1.jpg',
        description: 'Sản phẩm do China sản xuất',
        price: 450,
        inventory: 5,
        ratingStar: 3
    },
]

export default function productReducer(state = initialState, action) {
    switch (action.type) {

        default: return [...state]
    }
}