const Wrapper = document.querySelector(".slideWrapper")
const menuItems = document.querySelectorAll(".menuItem")
const products =[
    {
        id:1,
        title:"AIR FORCE",
        price:70,
        colors: [
            {
                code: "white",
                img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-force-1-07-mens-shoes-xDpsTk.png",
        },
        {
            code: "black",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0HpbHjd87yp-K4_NCFbi2YjJtMqf0MFsd3bsI4YfkA&s",
        },
    ],
        

},
{
    id:2,
    title:"PUMA",
    price:60,
    colors: [
        {
            code: "lemon",
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/376151/09/sv01/fnd/PNA/fmt/png/Fuse-2.0-Men's-Training-Shoes",
    },
    {
        code: "blue",
        img: "data:image/jpeg;base64,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",
    },
],
    

},
{
    id:3,
    title:"ADIDAS",
    price:50,
    colors: [
        {
            code: "lemon",
            img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/4bca08a8f1534e62bd34af1e00a2eae9_9366/HP6772_00_plp_standard.jpg",
    },
    {
        code: "white",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAegMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAAAwQFAQYHAv/EADgQAAEDAgMECAIJBQAAAAAAAAEAAgMEEQUSMQYTIUEUIjJRYXGBkUKxByNSU3KSwdHhFTNDgqH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAESEB/9oADAMBAAIRAxEAPwD2JERVBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARUosVoZcUqMMjna6rpmMfNGPgD75b+3y71dQERRVEhjaGs7bzZt+Xj6fsglRYuLRYzvKabA6qntBm6RTVLDlqL2t1x2SOPLjfktBlXlOSqa2F4aC7rXaP9rAILSLgEEAggg8wuUBERAREQEREBOHNFQx4uGCYhuyWvNNIA4aglpF0HhDNsZKD6RcSxtsBdDPM+GWLMQXxggA8eYygju0XrmCbcYNizGCCuj3p/wzfVyex19LrrGD7CbMy4S2nnoTNI4XdUvldvS7vuDw8tFnn6I43VYDMaf0AnrRvgBlt3B18vrl9FVepHFYRr81nsqMQrsQMkkTKakjzMiF80kgNruPJo4acT4jRTUtFBQUkFLRwsigiYGRsaOyApW3GquIsRjKMkZOU6sd1mrKotscJxTFpMMjlcJ4XuabRlzJQBxyu7geZ7ua6j9JG1Zwyl6FRyFtbUsNiDxhhPAu/E7iB4XPde3sXhVNsbs3Ni+NWiqpIg+YHtQx/DG0faJtfx4clKrvohy36O8hlrhw4tKCctIbKxw4dsaErzXYiuxvaPaWqxbps1JQsd9bFG4ZHE9mIA8L2IJda/jxXZJ9s6Gn2kGBNp5qiR8gj31OAbSm92lt+NhxJHj3Ko7YCCLggjwXKp5G9UQvcx7SC5rBb3aeSk6RkNnjiOYUgsIo2Ssfo7j3KRQEREBQV0bZaGojffK+JzTYXNiCvmshqJLGnqDGQNLcCs2b+qRNIcXvFtWAG6DDwQyCFl22BFx1gfkVvxPNtD7LrGEwx5LOY0OF7gjit2KBtha48iQtDSDszCLG+uizsfxCLDMGqa2aGScRs6sMbCXSOOgAHjz5aqYQgc3/nP7puyOy948nuQeYbBYJV49j8+0uPRuIimzRskZl3k3KwPwsFreNu4qHa3GqrbXaSDAcEkzUsMpAk+Fzx25Db4WjgO/wBQvU3723959u42N/cKrT0UFJK6alpaSGV4yufHTta5w7rhIVhbQ4xR7CbMU+GYS4CrewtgzEXA+OZ/je/r4aS/RVs50OD+u4g13S6ltqdsl80cZ4lxv8Tve3mVYrtmMJxPEOn4hh0c1TdvXdPIAQ3QEaW8NF2Jk8/GwYPJ38JCteeKOeOzg2/IkaFUHxBsZeJnEN1Y43t6nj/1fG9qHDjb3/hRvLwDvHNa063FvmiJLAHVXIJN5GHLMjmjkLY2P3h06ouFqQs3bMt7qdV9oiKAiIg+XsY/tsa7zF18iCEaRR/lCkRBHuYvu2eybiE6xM9lIiCE0sB1ib7LjolP90B5EhTogr9Cp/uz+d37rjoNP9mT0leP1VlEFU4fSnWNx/FI4/qjMOomG7aSC/eYwSrSIOGta0WaAB4Cy5REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z",
    },
],
    

},
{
    id:4,
    title:"NEW BALANCE",
    price:40,
    colors: [
        {
            code: "white",
            img: "https://nb.scene7.com/is/image/NB/wroavpg1_nb_02_i?$pdpflexf2$&wid=464&hei=464",
    },
    {
        code: "black",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi82Eda8HQfNUDSguZ5lvW_35j1-IN6Hs-3Ys8yAp3BQ&s",
    },
],
},
{
    id:5,
    title:"NIKE",
    price:30,
    colors: [
        {
            code: "white",
            img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_389,c_limit/31100905-2303-41d4-91be-bb17b6481c8a/nike-just-do-it.jpg",
    },
    {
        code: "black",
        img: "data:image/jpeg;base64,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",
    },
],
  

},
];

let choosenproduct = products[0];

const currentproductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productPrice");
const currentproductColors = document.querySelectorAll(".Color");
const currentproductSizes = document.querySelectorAll(".Size");

menuItems.forEach((item,index)=>{
     item.addEventListener("click", () => {
        //change the current slide
        Wrapper.style.transform='translateX(${-100 * index}vw)';

       //change the choosen product
       choosenproduct = products[index]

       //change text of currentProduct
       currentProductTitle.textcontent = choosenProduct.title;
       currentProductPrice.textcontent = "$" + choosenProduct.price;
       currentProductImg.src = choosenProduct.colors[0].img;

      //assign new colors
       currentproductColors.forEach((color,index) => {
        color.style.backgroundcolor = choosenProduct.colors[index].code;
       });
     });
});


currentProductColors = forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors [index].Img
    })
})

currentproductSizes.forEach((Size,index)=>{
Size.addEventListener("click",()=>{
    currentproductSizes.forEach(sizes=>{
        size.style.backgroundcolor= "white"
        size.style.color= "black" 
    })
    size.style.backgroundcolor= "black"
    size.style.color= "white"
})
})



const productButton = document.querySelector(".productButton");
const Payment = document.querySelector(".Payment");
const Close = document.querySelector(".Close");


productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

Close.addEventListener("click",()=>{
    payment.style.display="none"
})


