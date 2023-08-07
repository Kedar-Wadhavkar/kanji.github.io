const body = document.querySelector('body');

var checkBox = document.getElementById("chkBox");
var checkAuto = document.getElementById("checkAuto");


if (localStorage.getItem("theme") === "auto") {
        
}
else if (localStorage.getItem("theme") === "light") {
        body.classList.add('lightBackground');
        checkBox.checked = false;
}
else{
        body.classList.add('darkBackground');
        checkBox.checked = true;
}

function myFunction() {

        if (checkBox.checked == false){
                body.classList.remove('darkBackground');
                body.classList.add('lightBackground');
                localStorage.setItem("theme", "light");
        }
        else {
                body.classList.add('darkBackground');
                body.classList.remove('lightBackground');
                localStorage.setItem("theme", "dark");
        }
}

function myFunction2() {        
        
        localStorage.setItem("theme", "auto");

        if (checkBox.checked == true){
                body.classList.remove('darkBackground');
        }
        else{
                body.classList.remove('lightBackground');
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
                hideForms()
          })
})

function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
}


function hideForms() {
                        document.getElementById("form1").style.display = "none"
                        document.getElementById("form2").style.display = "none"
                        document.getElementById("form3").style.display = "none"
                        document.getElementById("form4").style.display = "none"
                        document.getElementById("form5").style.display = "none"
                        document.getElementById("form6").style.display = "none"
                        }


function clearForms() {
                        document.getElementById("form1").reset()
                        document.getElementById("form2").reset()
                        document.getElementById("form3").reset()
                        document.getElementById("form4").reset()
                        document.getElementById("form5").reset()
                        document.getElementById("form6").reset()
                        }


var formSheet = ""
var btnSheet = ""
flag = false;

function unhide1() {
                        hideForms
                        document.getElementById("formName").innerHTML = "Day Evaluation";
                        document.getElementById("form1").style.display = "block";
			formSheet = "form1";
			btnSheet = "submit1";
			flag = true;
                        }

function unhide2() {
                        hideForms
                        document.getElementById("formName").innerHTML = "Hobbies, Sleep";
                        document.getElementById("form2").style.display = "block";
			formSheet = "form2";
			btnSheet = "submit2";
			flag = true;
                        }

function unhide3() {
                        hideForms
                        document.getElementById("formName").innerHTML = "Gratitude, Memories";
                        document.getElementById("form3").style.display = "block";
			formSheet = "form3";
			btnSheet = "submit3";
			flag = true;
                        }

function unhide4() {
                        hideForms
                        document.getElementById("formName").innerHTML = "Meals";
                        document.getElementById("form4").style.display = "block";
			formSheet = "form4";
			btnSheet = "submit4";
			flag = true;
                        }

function unhide5() {
                        hideForms
                        document.getElementById("formName").innerHTML = "Expenses";
                        document.getElementById("form5").style.display = "block";
			formSheet = "form5"
			btnSheet = "submit5";
			flag = true;
                        }

function unhide6() {
                        hideForms
                        document.getElementById("formName").innerHTML = "Diary";
                        document.getElementById("form6").style.display = "block";
			formSheet = "form6";
			btnSheet = "submit6";
			flag = true;
                        }




var scriptURL = 'https://script.google.com/macros/s/AKfycbwbl7JgefPFK-0VQZKhny4Uyg93Lfvz1ddk9t08JOdyALQxGcLvFr3PhCpaLRkBxNIlYw/exec'
var form = document.getElementById(formSheet);
var btn = document.getElementById(btnSheet);

if (flag){
form.addEventListener('submit', e => {

        e.preventDefault()
        btn.disabled = true
        btn.innerHTML = "Saving..."

        console.log(form)

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })

        .then(response => { 
                btn.disabled = false
                btn.innerHTML = "Send"
        })
        .then(() => { 
                const modal = button.closest('.modal')
                closeModal(modal)
                hideForms()
		form.reset()
	})

        .catch(error => {
                btn.disabled = false
                btn.innerHTML = "Try again!"
                alert('Error!', error.message)
        })
})
}