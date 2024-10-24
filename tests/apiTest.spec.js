const { test, expect } = require('@playwright/test');
// import generateRandomNumber from "../util/randomGenerator";

const baseURI = 'https://fakestoreapi.com/products/';

function generateRandomNumber(){

    const data = parseInt(Math.random()*10+1);
    // console.log(data);
    return data;
}

test("get test", async ({page}) => {
   const data = generateRandomNumber();
    const val = fetch(baseURI+data)
        .then(res=>res.json())
        .then(json=>console.log(json));

    expect(val).toHaveLength;
});  

test("POST test", async ({page}) => {
   
    const val =fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        ),
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
    expect(val).toHaveLength;
}); 

test("PUT test", async ({page}) => {
   
    const val = fetch('https://fakestoreapi.com/products/7',{
        method:"PUT",
        body:JSON.stringify(
            {
                title: 'test product',
                price: generateRandomNumber(),
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
    expect(val).toHaveLength
}); 

test("DELETE test", async ({page}) => {
   
    const val = fetch('https://fakestoreapi.com/products/6',{
        method:"DELETE"
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
    expect(val).toHaveLength;
}); 
