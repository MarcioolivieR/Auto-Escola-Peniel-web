document.addEventListener("DOMContentLoaded", function() {
    // Coloque seu número de WhatsApp aqui (apenas números com DDD)
    const whatsappNumber = "5594991563681"; 

    const buttons = document.querySelectorAll(".btn-buy");

    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            
            const pacoteNome = this.getAttribute("data-pacote");
            const mensagem = `Olá! Gostaria de saber mais sobre o pacote ${pacoteNome} que vi no site.`;
            
            // Criar o link do WhatsApp
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
            
            // Abrir em uma nova aba
            window.open(url, "_blank");
        });
    });
});