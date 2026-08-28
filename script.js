document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    // ライトボックスが存在しないページでは処理しない
    if (!lightbox || !lightboxImg || !closeBtn) {
        return;
    }

    // Galleryの作品をすべて取得
    const galleryItems = document.querySelectorAll(".gallery-item");

    // 作品をクリック
    galleryItems.forEach((item) => {

        item.addEventListener("click", () => {

            const image = item.querySelector("img");

            if (!image) {
                return;
            }

            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;

            lightbox.style.display = "flex";

            document.body.style.overflow = "hidden";

        });

    });


    // ライトボックスを閉じる
    function closeLightbox() {

        lightbox.style.display = "none";

        lightboxImg.src = "";

        document.body.style.overflow = "";

    }


    // ×ボタン
    closeBtn.addEventListener("click", closeLightbox);


    // 黒い背景をクリック
    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });


    // ESCキー
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeLightbox();
        }

    });

});