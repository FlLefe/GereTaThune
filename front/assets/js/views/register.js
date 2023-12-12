export default () => `
    <h1 class="text-2xl font-bold text-zinc-700">Register Page</h1>

    <section class="container-all">
        <form  method="POST" action="/register">
            <div class="flex flex-col gap-4 text-end py-8">
                <div>
                    <label for="firstname">Votre prénom : </label>
                    <input class="inp" type="text" name="firstname" required>
                </div>
                <div>
                    <label for="lastname">Votre nom : </label>
                    <input class="inp" type="text" name="lastname" required>
                </div>
                <div>
                    <label for="birthyear">Votre age : </label>
                    <input class="inp w-custom" type="date" name="birthyear" required>
                </div>
                <div>
                    <label for="email">Adresse mail : </label>
                    <input class="inp" type="email" name="email" required>
                </div>
                <div>
                    <label for="password">Mot de passe : </label>
                    <input class="inp" type="password" name="password" required>
                </div>
                <div>
                    <label for="password">Confirmer mot de passe : </label>
                    <input class="inp" type="password" name="passwordConfirm"required>
                </div>
                <div class="text-center">
                    <label for="cgu"><a href="/cgu" target="_blank">CGU</a></label>
                    <input class="inp" type="checkbox" name="cgu" id="cgu" required>
                </div>
            </div>
            <input type="submit" class="button-all" value="Register" />
        </form>
        <p>Already have an account ? <a class="hover:text-red-700" href="/login">Sign In</a></p>
    </section>`;