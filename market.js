const products=[
{name:'Rice',price:'₦5000'},
{name:'Phone',price:'₦120000'},
{name:'Cement',price:'₦4500'}
];
const div=document.getElementById('products');
products.forEach(p=>{
 div.innerHTML+=`<p>${p.name} - ${p.price}</p>`;
});