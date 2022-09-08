import notiflix from 'notiflix';
// import "notiflix/dist/notiflix-notify-aio-3.2.5.min.js";

const form = document.querySelector(".form")


form.addEventListener("submit", (event)=>{
  event.preventDefault();
  
  const delay = Number(event.target.querySelector('input[name="delay"]').value);
  const step = Number(event.target.querySelector('input[name="step"]').value);
  const amount = Number(event.target.querySelector('input[name="amount"]').value);

  for(let i =0; i< amount; i++)
  {
    setTimeout(()=>  
    {
      createPromise(1+i, delay+step*i)
      .then(({ position, delay }) => {
        notiflix.Notify.success(`✅ Fulfilled promises${position} in ${delay}ms`)
      })
      .catch(({position, delay}) => {
        notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      });
    }, delay+step*i)
  }
})


function createPromise(position, delay) {
  const promis = new Promise((resolve, reject) =>
  {
    const res = {position, delay};
    const shouldResolve = Math.random() < 0.3;
    if (shouldResolve){
      resolve(res);
    }
    else{
      reject(res);
    }
  })
  
  return promis;
}