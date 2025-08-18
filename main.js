   document.getElementById("call-btn").addEventListener("click", function (event) {
    // On desktop browsers, 'tel:' usually won't open a dialer.
    let isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        event.preventDefault(); // stop trying to open tel: on non-mobile
        let phoneNumber = "+256 700400033";

        // Copy to clipboard
        navigator.clipboard.writeText(phoneNumber).then(() => {
            alert("Phone number copied to clipboard: " + phoneNumber);
        }).catch(err => {
            console.error("Clipboard copy failed:", err);
            alert("Could not copy the number. Please copy manually.");
        });
    }
});