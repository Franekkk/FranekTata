const form = document.querySelector('.formularz')


function handleSubmit(event) {
    event.preventDefault()

    const firstValue = this.firstForm.value
    const secondValue = this.secondForm.value
    const thirdValue = this.thirdForm.value
    console.log(firstValue, secondValue, thirdValue)

}

form.addEventListener('submit', handleSubmit)