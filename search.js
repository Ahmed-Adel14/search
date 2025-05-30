const products = [
    {
        id: 1,
        title: "Ground Nuts Oil Pack",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg",
        category: "snack-and-spices",
        sub_category: "snack",
        rate: 4,
        isDiscount: true,
        oldPridce: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 2,
        title: "Organic Litchi Juice Pack",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/2.jpg",
        category: "snack-and-spices",
        sub_category: "Juice",
        rate: 4,
        isDiscount: true,
        oldPridce: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 3,
        title: "Crunchy Banana Chips",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/3.jpg",
        category: "snack-and-spices",
        sub_category: "chips",
        rate: 4,
        isDiscount: true,
        oldPridce: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 4,
        title: "Organic dragon fruit",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/9.jpg",
        category: "fruits",
        sub_category: "fruit",
        rate: 3,
        isDiscount: false,
        oldPridce: 30,
        newPrice: null,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 5,
        title: "Fresh blue berry",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/10.jpg",
        category: "fruits",
        sub_category: "fruit",
        rate: 5,
        isDiscount: false,
        oldPridce: 30,
        newPrice: null,
        out_of_stock: true,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
];
const searchvalue = new URLSearchParams(window.location.search).get("value");
const searchh = products.filter((product) => product.title?.toLowerCase().includes(searchvalue?.toLowerCase()));
console.log(searchh)
document.body.innerHTML =
    searchh.length <= 0
        ? ` <div class="contain">
            <img src="./no_products.png" alt="" />
        </div>`
        : products.map((item) => `<h1>${item.title} </h1>`);