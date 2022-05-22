var plus=document.querySelectorAll('.plus-btn')
var moins=document.querySelectorAll('.minus-btn')
var quantity=document.querySelectorAll('.Quant')
var like=document.querySelectorAll('.fa-heart')
var finalPrice=document.getElementById('finalPrice')
var supprimer=document.querySelectorAll('.delete')
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click',function()
    {
        quantity[i].value=Number(quantity[i].value)+1
        totalPrice ()
    })
    
}
for (let i = 0; i < moins.length; i++) {
    moins[i].addEventListener('click',function()
    {
        if (Number(quantity[i].value)>1)
        {
        quantity[i].value=Number(quantity[i].value)-1
        }
        totalPrice ()
    })
    
}
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click',function()
    {
        if (like[i].style.color==="rgb(226,192,209)")
        {
        like[i].style.color="red"
        }
        else
        {
            like[i].style.color==="rgb(226,192,209)" 
        }
    })
    
}
for (let i = 0; i < supprimer.length; i++) {
    supprimer[i].addEventListener('click',function()
    {
        supprimer[i].parentNode.remove()
        totalPrice ()
    })
    
}
function totalPrice ()
{
    let quantPrice=document.querySelectorAll('.Quant')
    let price=document.querySelectorAll('.price')
    let totalPrice=0
    for (let i = 0; i < price.length; i++) {
        totalPrice=Number(quantPrice[i].value)*Number(price[i].innerHTML)+totalPrice
        
    }
    finalPrice.value=totalPrice

}




