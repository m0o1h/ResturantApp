import { atom, selector } from "recoil";

export const orderCount = atom({
    key:'orderCount',
    default:1,
})

export const ArrayOfOrderedData = atom({
    key:'ArrayOfOrderedData',
    default:[],
});

export const TotallDataArray = atom({
    key:'TotallDataArray',
    default:[
        [{findBy:'Burgers'},[
            { id:1, name:"Veggie burger", price:"50", uri:"https://b.zmtcdn.com/data/pictures/2/19945362/02d7e0c1cfc9c0ed7702fa9b4c068ff2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*", },
            { id:2, name:"Cheeseburger", price:"100", uri:"https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886", },
            { id:3, name:"Double Cheeseburger", price:"150", uri:"https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/4:3/w_1440,h_1080,c_limit/Burgers-Mumbai-Delivery.jpg", },
        ]],

        [{findBy:'Pizza'},[
            { id:1, name:"Cheese Pizza", price:"150", uri:"https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg", },
            { id:2, name:"Veggie Pizza", price:"200", uri:"https://poracaso.com/wp-content/uploads/2022/09/shutterstock-84904912-1024x683.jpg", },
            { id:3, name:"Pepperoni Pizza", price:"250", uri:"https://www.allrecipes.com/thmb/aefJMDXKqs42oAP71dQuYf_-Qdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg", },
        ]],

        [{findBy:'Chinese'},[
            { id:1, name:"Spring Rolls", price:"250", uri:"https://i.ndtvimg.com/i/2015-02/spring-roll_625x350_51424323845.jpg", },
            { id:2, name:"Dumplings", price:"420", uri:"https://images.chinahighlights.com/allpicture/2019/01/9b7159f6d89449d997eaa5ab_cut_750x400_39.webp", },
            { id:3, name:"Chow Mein", price:"220", uri:"https://images.chinahighlights.com/allpicture/2018/03/10725167158a4b8589bf3140_cut_750x400_39.webp", },
            { id:4, name:"Fried Rice", price:"100", uri:"https://images.chinahighlights.com/allpicture/2014/09/2b424254939d4d51adda30fe_cut_750x400_39.webp", },
            { id:5, name:"Ma Po Tofu", price:"150", uri:"https://images.chinahighlights.com/allpicture/2019/11/62745d5a726045e4a99a3885_cut_750x400_39.webp", },
        ]],

        [{findBy:'Indian'},[
            { id:1, name:"Mutter Paneer", price:"150", uri:"https://sandinmysuitcase.com/wp-content/uploads/2020/12/Indian-Food-Mutter-Paneer-1024x768.jpg.webp", },
            { id:2, name:"Roghan Josh", price:"120", uri:"https://sandinmysuitcase.com/wp-content/uploads/2021/01/Rogan-Josh.jpg.webp", },
            { id:3, name:"Saag Paneer", price:"170", uri:"https://sandinmysuitcase.com/wp-content/uploads/2021/04/Indian-Saag-Paneer.jpg.webp", },
            { id:4, name:"Tikka masala", price:"100", uri:"https://sandinmysuitcase.com/wp-content/uploads/2020/04/Tikka-Masala-1024x683.jpg.webp", },
            { id:5, name:"Paratha", price:"50", uri:"https://sandinmysuitcase.com/wp-content/uploads/2021/04/Paratha.jpg.webp", },
        ]]
    ]
})


export const DataHeadingFoodCatogery = selector({
    key:'DataHeadingFoodCatogery',
    get:({get})=>{
        const dataHeading = get(TotallDataArray)
        const dataHeadingArray = []
        dataHeading.forEach((item)=>{
            dataHeadingArray.push(item[0].findBy)
        });
        return dataHeadingArray;
    }
});

export const SearchInput = atom({
    key:'SearchInput',
    default:'',
});

export const FilterSearchItemsSelector = selector({
    key:'FilterSearchItemsSelector',
    get:({get})=>{
        const itemList = get(DataHeadingFoodCatogery);
        const filterString = get(SearchInput);
    
        // Filter the item list based on the filter string
        return itemList.filter(item => item.includes(filterString));
    
    }
});

// export const FilterFlatlistItemSelector = selector({
//     key:'FilterFlatlistItemSelector',
//     get:({get})=>{
//         const totalData = get(TotallDataArray);
//         const filterString = get(SearchInput);
//     },
// });

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

export const OrderSlipGenerationAtom = atom({
    key:'OrderSlipGenerationAtom',
    default:[],
});

