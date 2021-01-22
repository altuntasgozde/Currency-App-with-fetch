const btn = document.getElementById("changeButton");
const tl = document.getElementById("try");
const dolar = document.getElementById("dolar");

class Request {
  get(url){
    return new Promise((resolve,reject) => {
      fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  } 
  
}

const request = new Request();
request.get("https://api.exchangeratesapi.io/latest?base=USD")
.then(data => {
  btn.addEventListener("click",function(){
    const rate = data.rates.TRY;
    const amount = Number(dolar.value);
    tl.value = amount*rate;
  })
 
})
.catch(err => console.log(err));