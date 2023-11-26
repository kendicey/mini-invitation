$("#invitation").hide();

$("#see-invitation").on("click", () => {
    $("#invitation").slideToggle("slow");
})