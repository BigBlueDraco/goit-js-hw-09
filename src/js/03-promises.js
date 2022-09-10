import notiflix from 'notiflix';

const form = document.querySelector(".form")


form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const {delay, step, amount} = event.target.elements;
  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for(let i =0; i< amountValue; i++)
  {
    setTimeout(()=>  
    {
      createPromise(1+i, delayValue+stepValue*i)
      .then(({ position, delay }) => {
        notiflix.Notify.success(`✅ Fulfilled promises${position} in ${delay}ms`)
      })
      .catch(({position, delay}) => {
        notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      });
    }, delayValue+stepValue*i)
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