function accessInternet() {
    var urlParams = new URLSearchParams(window.location.search);
    var baseUrl = urlParams.get("base_grant_url");
    var userContinueUrl = urlParams.get("user_continue_url");

    console.log("Base Grant URL:", baseUrl);
    console.log("User Continue URL:", userContinueUrl);

    if (baseUrl) {
        window.location.href = baseUrl + "?continue_url=" + encodeURIComponent(userContinueUrl);
    } else {
        alert("Error: No se pudo obtener la URL de acceso.");
    }
}