import {test, expect} from "playwright/test";
import { accounts } from "../src/data/accounts";
import { url } from "../src/data/constants";
import VipPage from "../src/pageObject/vipPage";




test.describe('Compare screenshots of the VIP pages to the sample screenshot', () => {
  let vipPage

  test.beforeEach(async ({page}) => {
      vipPage = new VipPage(page, url)
      await vipPage.navigate()
      await vipPage.acceptCookies()
  })

  for (const title of Object.keys(accounts)) {
      const email = accounts[title].email
      const password = accounts[title].password

  test(`Screenshot test of the VIP burger icons of ${title}`, async ({page}) => {
      
      await vipPage.openLogin()
      await vipPage.fillEmail(email)
      await vipPage.fillPassword(password)
      await vipPage.submitLogin()
      await vipPage.openBurgerMenu()
    
      await page.waitForTimeout(3)
      await expect(vipPage.statusBurgerIcon).toHaveScreenshot();


  

  })
  }
})