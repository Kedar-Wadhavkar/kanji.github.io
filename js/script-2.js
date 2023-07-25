const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
}


closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
                const modal = button.closest('.modal')
                closeModal(modal)
                document.getElementById("form1").style.display = "none";
                document.getElementById("form2").style.display = "none";
                document.getElementById("form3").style.display = "none";
                document.getElementById("form4").style.display = "none";
                document.getElementById("form5").style.display = "none";
                document.getElementById("form6").style.display = "none";
          })
})

function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
}




var submitted = false

function clearForms() {
                        document.getElementById("form1").reset()
                        document.getElementById("form2").reset()
                        document.getElementById("form3").reset()
                        document.getElementById("form4").reset()
                        document.getElementById("form5").reset()
                        document.getElementById("form6").reset()
                        }


function unhide1() {
                        document.getElementById("form1").style.display = "block";
                        }

function unhide2() {
                        document.getElementById("form2").style.display = "block";
                        }

function unhide3() {
                        document.getElementById("form3").style.display = "block";
                        }

function unhide4() {
                        document.getElementById("form4").style.display = "block";
                        }

function unhide5() {
                        document.getElementById("form5").style.display = "block";
                        }

function unhide6() {
                        document.getElementById("form6").style.display = "block";
                        }