const body = document.querySelector('body');

var checkBox = document.getElementById("chkBox");


if (localStorage.getItem("theme") === "dark") {
        body.classList.add('darkBackground');
        checkBox.checked = true;
}

function myFunction() {

        if (checkBox.checked == false){
                body.classList.remove('darkBackground');
                localStorage.setItem("theme", "light");
        }
        else {
                body.classList.add('darkBackground');
                localStorage.setItem("theme", "dark");
        }
}

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
                        document.getElementById("formName").innerHTML = "Day Evaluation"
                        document.getElementById("form1").style.display = "block";
                        }

function unhide2() {
                        document.getElementById("formName").innerHTML = "Hobbies, Sleep"
                        document.getElementById("form2").style.display = "block";
                        }

function unhide3() {
                        document.getElementById("formName").innerHTML = "Gratitude, Memories"
                        document.getElementById("form3").style.display = "block";
                        }

function unhide4() {
                        document.getElementById("formName").innerHTML = "Meals"
                        document.getElementById("form4").style.display = "block";
                        }

function unhide5() {
                        document.getElementById("formName").innerHTML = "Expenses"
                        document.getElementById("form5").style.display = "block";
                        }

function unhide6() {
                        document.getElementById("formName").innerHTML = "Diary"
                        document.getElementById("form6").style.display = "block";
                        }