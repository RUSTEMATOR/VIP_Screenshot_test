export default class VipPage {

    constructor(page, url) {
        this._page = page;
        this._url = url;
        // Corrected XPath syntax with proper closing brackets and quotes
        this._signInBtn = page.locator("xpath=//a[contains(@class, 'header__button--sign-in')]");
        this._emailInput = page.locator("xpath=//input[contains(@class, 'input__native') and contains(@name, 'email')]");
        this._passwordInput = page.locator("xpath=//input[contains(@class, 'input__native') and contains(@name, 'password')]");
        this._SubmitLoginButton = page.locator("xpath=//button[contains(@class, 'login-form__submit-button')]");
        this._burgerMenu = page.locator("xpath=//div[contains(@class, 'burger__slide')]")
        this._statusIcon = page.locator("xpath=/html/body/div[2]/div/div[2]/div/div/header/div[1]/div[1]/div/div[1]/div[1]/div/img[1]")
    }
    async pause() {
        await this._page.pause();
    }

    async navigate() {
        await this._page.goto(this._url);
    }

    async openLogin() {
        await this._signInBtn.click();
    }

    async fillEmail(email) {
        await this._emailInput.fill(email);
    }

    async fillPassword(password) {
        await this._passwordInput.fill(password);
    }

    async submitLogin() {
        await this._SubmitLoginButton.click();
    }

    async openBurgerMenu(){
        await this._burgerMenu.click();
    }

    get statusIcon() {
        return this._statusIcon;
    }
}
