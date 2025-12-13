window.addEventListener("DOMContentLoaded", () => {

    const sendButton = document.querySelector('input[type="button"][value="Send it"]');
    const form = document.getElementById("cbform");

        sendButton.addEventListener("click", (e) => {
            e.preventDefault();
        const discordName = form.querySelector('input[type="text"]').value;
        const steamUrl = document.getElementById("steamurl").value;
        const sendDate = document.getElementById("senddate").value;
        const opinion = document.getElementById("opinion").value;
        
        const payload = {
            username: "Classic Breach Form",
            embeds: [
                {
                    title: "New Form Submission",
                    color: 0x9b59b6,
                    fields: [
                        { name: "Discord Name", value: discordName || "—" },
                        { name: "Steam URL", value: steamUrl || "—" },
                        { name: "Date", value: sendDate || "—" },
                        { name: "Message", value: opinion || "—" }
                    ],
                    timestamp: new Date().toISOString()
                }
            ]
        };

            fetch("http://localhost:3000/send-webhook", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })
            .then(res => console.log("Webhook wysłany!"))
            .catch(err => console.error(err));
        });
});
