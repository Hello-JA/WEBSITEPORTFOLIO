const init = () => {
  const inputEmail = document.querySelector('input[type="email"]')
  const inputSenha = document.querySelector('input[type="senha"]')
  const submitButton = document.querySelector('.submit')

  console.log ('senha')


if(submitButton) {
  submitButton.addEventListener ('click', (event)  =>  {
          event.preventDefault();
          
  })

}


}
window.onload = init;
