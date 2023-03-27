
function fillCheckoutUiJsonField(token) {
    document.getElementById("conftoken").value = token;
}

function getToken() {
    const sum = document.getElementById("sum").value;
    capt = false;
    recurring = false;
    if(document.getElementById("capture").checked) { capture = true; }
    if(document.getElementById("repay").checked) { recurring = true; }

    const paramsFromUrl = new URLSearchParams(window.location.search);
    const tokenFromParameters = paramsFromUrl.get('token');

    if (tokenFromParameters) {
        fillCheckoutUiJsonField(tokenFromParameters);
    } else {
        let authElement = document.getElementById("auth");
        const auth = btoa(authElement.value);
        const url = [
            "https://testcms.yooteam.ru/devshop/payment.php?",
            "sum=" + sum,
            "repay=" + recurring,
            "capture=" + capt,
            "auth=" + auth,
            "cross=1"
        ].join('&');


        axios.get(url)
            .then(function (response) {
                const token = response.data.confirmation.confirmation_token;
                fillCheckoutUiJsonField(token);

            })
            .catch(console.error)
        document.getElementById("spoiler").removeAttribute("open");
    }
}


