export function getAllProductos(){
    return fetch('http://localhost:3000/productos')
    .then(res=>res.json())
    .catch(error => console.error('Error fetching product:', error));
}
export function getProductById(id) {
    return fetch(`http://localhost:3000/productos/${id}`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching product:', error));
}
