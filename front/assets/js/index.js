import home from "./views/home.js";
import login from "./views/login.js";
import register from "./views/register.js";
import finance from "./views/finance.js";

const routes = {
    "/": { title: "Home", render: home },
    "/login": { title: "Login", render: login },
    "/register": { title: "Register", render: register },
    "/finance": { title: "Finance", render: finance },
};

function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/");
        router();
    }
};

// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);