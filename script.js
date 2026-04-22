document.addEventListener('DOMContentLoaded', () => {
    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            
            // Toggle active class on header
            header.classList.toggle('active');
            
            // Check if active
            if (header.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0px";
            }
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal Upsell Logic
    const btnOpenUpsell = document.getElementById('btnOpenUpsell');
    const upsellModal = document.getElementById('upsellModal');
    const closeModal = document.getElementById('closeModal');

    if (btnOpenUpsell && upsellModal && closeModal) {
        btnOpenUpsell.addEventListener('click', (e) => {
            e.preventDefault();
            upsellModal.classList.add('active');
        });

        closeModal.addEventListener('click', () => {
            upsellModal.classList.remove('active');
        });

        // Fechar ao clicar fora do modal
        upsellModal.addEventListener('click', (e) => {
            if (e.target === upsellModal) {
                upsellModal.classList.remove('active');
            }
        });
    }
});
