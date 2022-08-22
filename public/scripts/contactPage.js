const form = document.getElementsByClassName('email-form')[0];
const errorMsg = document.getElementsByClassName('error-empty')[0];
const changeTitle = document.getElementsByClassName('email-please')[0];
form.addEventListener('submit', (e) => {
    const textArea = document.getElementById('comment');
    if (!textArea.value) {
        e.preventDefault();
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        form.style.display = 'none';
        changeTitle.innerText = "Thank you! Hope to Get in Touch Soon!"
        changeTitle.style.color = 'green';
    }

})