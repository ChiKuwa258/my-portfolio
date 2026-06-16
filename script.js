const modal = document.getElementById("modal");
            const buttons = document.querySelectorAll("[data-title]");

            const close = document.querySelector(".close");

            const modalTitle = document.getElementById("modal-title");

            const modalText = document.getElementById("modal-text");

            function closeModal() {

                if (modal) {

                    modal.style.display = "none";

                }

            }

            // モーダル表示
                    buttons.forEach(button => {

            button.addEventListener("click", () => {

                if (modal) {
                    modal.style.display = "flex";
                }

                if (modalTitle) {
                    modalTitle.textContent =
            button.dataset.title;
                }

                if (modalText) {
                    modalText.textContent =
            button.dataset.text;
                }

            });

        });

            // モーダル閉じる
                if (close) {

                    close.addEventListener("click", closeModal);

                }
            
            // スクロール演出
            const targets = document.querySelectorAll(".hidden");

            const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {

                if(entry.isIntersecting){
                
                    entry.target.classList.add("show");
                }
            });

                }, {

                threshold: 0.2

        });

                    targets.forEach(target => {

                    observer.observe(target);
        });

            const text = "Front-End Web Developer";

            const typing = document.getElementById("typing");

            let index = 0;

            function typeText(){

                if(index < text.length){

                if (typing) {

                    typing.textContent += text.charAt(index);

                }

                index++;

                setTimeout(typeText, 100);

                }

                }   

            typeText();
            const cards = document.querySelectorAll(".card");

                    cards.forEach(card => {

                card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;

            const centerY = rect.height / 2;

            const rotateX = -(y - centerY) / 15;

            const rotateY = (x - centerX) / 15;

                card.style.transform =
                `
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.03)
                `;
            });

                card.addEventListener("mouseleave", () => {

                card.style.transform =

                    "rotateX(0) rotateY(0) scale(1)";
            });

        });

            const header = document.querySelector("header");

                if (header) {

                    window.addEventListener("scroll", () => {

                if(window.scrollY > 50){

                    header.classList.add("scrolled");

                }else{

                    header.classList.remove("scrolled");

                }

            });

                }

            // ローディング解除
                window.addEventListener("load", () => {

            const loader =
                document.getElementById("loader");

            setTimeout(() => {

                 if(loader){

                    loader.classList.add("hide");

                }

                }, 1500);

        });

            // スクロール進行バー
            const scrollBar =
                    document.getElementById("scrollBar");
                    window.addEventListener("scroll", () => {

            const scrollTop =
                    document.documentElement.scrollTop;

            const scrollHeight =
                    document.documentElement.scrollHeight -
                    document.documentElement.clientHeight;

            const progress =
                    (scrollTop / scrollHeight) * 100;

                if (scrollBar) {

                    scrollBar.style.width = progress + "%";

                }

        });

            document.addEventListener("keydown", (e) => {

                if(e.key === "Escape"){

                closeModal();
                }

            });

const hero = document.querySelector(".hero");

if (window.innerWidth > 768) {

    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;

        if (hero) {
            hero.style.backgroundPositionY = `${scrollY * 0.4}px`;
        }

    });

}