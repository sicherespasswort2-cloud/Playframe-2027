const ticketForm = document.getElementById("ticket-form");
const formStatus = document.getElementById("form-status");
const ticketSubmit = document.getElementById("ticket-submit");

ticketSubmit.addEventListener("click", () => {
    if (!ticketForm.reportValidity()) return;

    formStatus.textContent = "Danke für deinen Check-in! Das war eine Demo – es wurde nichts versendet und kein Ticket gebucht.";
    ticketForm.reset();
});
