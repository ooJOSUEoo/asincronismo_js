import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (url_api) => {
    return fetch(url_api);
}

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(data => {
//         console.log('Products', data);
//     })
//     .then(() => {
//         console.log('Hola');
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log('Products', products);
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        console.log('Product', product.title);
        return fetchData(`${API}/categories/${product.category.id}`);
    })
    .then(response => response.json())
    .then(category => {
        console.log('Category', category.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('finally'));