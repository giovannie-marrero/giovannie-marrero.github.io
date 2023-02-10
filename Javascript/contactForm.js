const scriptURL =
            'https://script.google.com/macros/s/AKfycbxa1vgI0NqInQwswAIG7sELXYr-EA4-wtyYMNd0yjsZ6cGIum4EbdROFlfp8aV6KvRutw/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(form)
                })
                .then(response => {
                    msg.innerHTML = "Message sent succesfully"
                    setTimeout(function () {
                        msg.innerHTML = ""
                    }, 5000)
                })
                .catch(error => console.error('Error!', error.message))
        })