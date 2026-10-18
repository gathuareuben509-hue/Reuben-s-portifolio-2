document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".menu-button");
    const navigation = document.querySelector(".nav-links");

    if (!button || !navigation) return;

    function closeMenu() {
        navigation.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation");
    }

    button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") !== "true";

        navigation.classList.toggle("open", isOpen);
        button.setAttribute("aria-expanded", String(isOpen));
        button.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
});