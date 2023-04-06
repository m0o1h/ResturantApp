import { atom, selector } from "recoil";


export const ArrayOfOrderedData = atom({
    key:'ArrayOfOrderedData',
    default:[],
});

export const totalPrice = selector({
    key:'totalPrice',
    get:({get}) => {
        const priceArray = get(ArrayOfOrderedData);
        let total = 0;
        priceArray.forEach((item) => {
            total += parseInt(item[0].price);
        });
        return total;
    },
});

