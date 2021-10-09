const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        search();
    }
})
function search() {
    const input = searchInput.value;
    window.location.href = `https://www.google.com/search?q=${input}&bih=1329&biw=1107&rlz=1C5CHFA_enTR940TR940&hl=tr&sxsrf=AOaemvJj1DyDf6x3QKdBooazBuPIHhQtyw%3A1633811434305&source=hp&ei=6vthYfbsBZGF4t4P1dK3kAE&iflsig=ALs-wAMAAAAAYWIJ-tCpgQTEMeEQMciBVqfcfvg4We5P&ved=0ahUKEwj2iaPxlb7zAhWRgtgFHVXpDRIQ4dUDCAc&uact=5&oq=${input}&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDEJMCMhEILhCABBCxAxCDARDHARCvATIICAAQgAQQsQMyCAguEIAEELEDMggIABCABBCxAzIFCAAQgAQyCAgAELEDEIMBMggILhCABBCxAzIFCC4QgAQyCwguEIAEEMcBEK8BOgcIIxDqAhAnOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQowI6BAgjECc6BggjECcQEzoLCC4QgAQQxwEQ0QNQw6ueAlissJ4CYMixngJoAXAAeACAAaUBiAGcBZIBAzAuNZgBAKABAbABCg&sclient=gws-wiz`
}
