const sendForm = () => {
  const btnOpenModal = document.querySelector('.card-details__button_delivery')
  const cardDetailsTitle = document.querySelector('.card-details__title')
  const modal = document.querySelector('.modal')
  const modalTitle = modal.querySelector('.modal__title')
  const modalClose = modal.querySelector('.modal__close')
  const modalForm = modal.querySelector('form')

  btnOpenModal.addEventListener('click',() => {
    modal.style.display = 'flex'
    modalTitle.textContent = cardDetailsTitle.textContent

  })
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  modalForm.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log('submit')
  })
}

sendForm()