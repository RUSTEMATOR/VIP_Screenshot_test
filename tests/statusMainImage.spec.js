import {test, expect} from "playwright/test";
import { accounts } from "../src/data/accounts";
import { url } from "../src/data/constants";
import VipPage from "../src/pageObject/vipPage";
import exp from "constants";




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

  test(`Screenshot test of the VIP bottom active image of ${title}`, async ({page}) => {
      
      await vipPage.openLogin()
      await vipPage.fillEmail(email)
      await vipPage.fillPassword(password)
      await vipPage.submitLogin()
      
    
      await page.waitForTimeout(3)
      await expect(vipPage.statusMainImage).toHaveScreenshot();

  })
  }
})



// test('a', async ({page}) => {
//     await page.goto('/vip-club')

//     console.log(await page.textContent("xpath=//div[contains(@class, 'vip-grid__title')]/h2"))

//     expect(await page.textContent("xpath=//div[contains(@class, 'vip-grid__title')]/h2")).toMatchSnapshot()

// } )