export default () => `
    <h1 class="text-2xl font-bold text-zinc-700">Login</h1>

    <section class="container-all">

            <form id="loginForm" class="flex flex-col items-center gap-4 text-end py-8" method="POST"  >
            <div>
                <label for="email">Adresse mail : </label>
                <input class="inp" type="email" name="email" value="admin@gmail.com" required>
            </div>
            <div>
                <label for="password">Mot de passe : </label>
                <input class="inp" type="password" name="password" value="adminadmin" required>
            </div>
            <input id="submitButton" type="submit" class="button-all" value="Login">
        </form>
        <p>Don't have an account ? <a class="hover:text-red-700" href="/register">Sign Up</a></p>
    </section>`;