function toggleDetails(id) {
    const detailsRow = document.getElementById(`details${id}`);
    if (detailsRow.style.display === "none" || detailsRow.style.display === "") {
        detailsRow.style.display = "table-row";
    } else {
        detailsRow.style.display = "none";
    }
}

function showForm() {
    document.getElementById("purchaseForm").style.display = "block";
    generateCaptcha();
}

function validateForm() {
    var captchaInput = document.getElementById("captcha").value;
    // قم بتنفيذ الكود الخاص بالتحقق من صحة رمز Captcha هن

    // إظهار نافذة تأكيد
    var confirmation = confirm("تأكيد عملية الشراء؟");

    if (confirmation) {
        alert("تمت عملية الشراء بنجاح!");
        return true;
    } else {
        alert("تم إلغاء عملية الشراء.");
        return false;
    }
}

function generateCaptcha() {
    var captchaText = generateRandomString(6);
    document.getElementById("captcha").value = "";
    document.getElementById("captcha").placeholder = captchaText;
    document.getElementById("captchaImage").src = "https://dummyimage.com/150x50/000/fff&text=" + captchaText;
}

function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function changeCaptcha() {
    generateCaptcha();
}
function hideForm() {
    document.getElementById("purchaseForm").style.display = "none";
}
