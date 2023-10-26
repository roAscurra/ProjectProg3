// En tu archivo app.js
import { getProductById } from './data.js';
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
      getProductById(productId)
        .then((product) => {
          mostrarProducto(product);
        })
        .catch((error) => {
          console.error('Error al obtener el producto:', error);
        });
    }
  });
  function mostrarProducto(product) {
    console.log('Mostrar producto:', product); // Agrega este log para verificar si la función se llama correctamente  

    const productDetailContainer = document.getElementById('product-detail');
  
    const cardHTML = `
      <div class="container" id=${product.id}>
        <div class="row">
          <div class="col-md-6">
            <div class="card" style="max-width: 80%; margin: 0 auto; display: flex; flex-direction: row; flex-wrap: wrap; border: 0;">
              <div class="card-img-left">
              <img src="${product.img}" alt="${product.nombre}" style="max-width: 100%; height: auto; max-height: 100%;">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-body" style="width: 50%; display: flex; justify-content: center; align-items: center;">
              <div class="card-text text-center" style="text-align: center;">
                <h1>${product.nombre}</h1>
                <p>${product.descripcion}</p>
                <h1>${product.precio}</h1>
                <div class="input-group input-group-sm">
                  <span class="input-group-btn">
                    <button id="menos" class="btn btn-primary" type="button">-</button>
                  </span>
                  <span class="input-group-btn">
                    <input type="number" id="contador" class="form-control" value="1" min="1" style="width: 50px;">
                  </span>
                  <span class="input-group-btn" style="margin-right:10%;">
                  <button id="mas" class="btn btn-primary" type="button">+</button>
                  </span>
                  <select class="form-select" aria-label="Default select example">
                  <option>Estado</option>
                    <option value="Por hacer">Por hacer</option>
                    <option value="En produccion">En produccion</option>
                    <option value="Por testear">Por testear</option>
                    <option value="Completada">Completada</option>
                  </select>
                </div>
                <br>
                <p><b>Responsable:</b> ${product.responsable}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
    `;
  
    productDetailContainer.innerHTML = cardHTML;
    const estadoSelect = document.getElementById('estado');
    estadoSelect.innerHTML = ''; // Limpiar las opciones existentes
  
    product.estados.forEach((estado) => {
      const option = document.createElement('option');
      option.value = estado.valor;
      option.textContent = estado.nombre;
  
      if (estado.valor === product.estado) {
        option.selected = true;
      }
  
      estadoSelect.appendChild(option);
    });
  }
  



