import fetch from 'node-fetch'

export function getProducts (id) {
  return fetch(`http://localhost:3030/products/${id || ''}`)
    .then(res => res.json())
}

export function addToCart (product) {
  const cart = getCart() || []
  const productIndex = cart.findIndex(p => p.id === product.id)

  if (productIndex > -1) {
    cart[productIndex].totalPrice += product.price
    cart[productIndex].quantity += 1
  } else {
    cart.push({
      ...product,
      quantity: 1,
      totalPrice: product.price
    })
  }

  localStorage.setItem('cart', JSON.stringify(cart))

  window.postMessage({
    type: 'add-cart',
    product
  }, '*')
}

export function getCart () {
  const cart = localStorage.getItem('cart')

  return JSON.parse(cart)
}
