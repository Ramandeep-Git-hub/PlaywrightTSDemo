import { test, expect } from '@playwright/test';
import { homePage } from '../../pages/home-page';
import { artistPage } from '../../pages/artist-page'
import { testData } from "../../utils/uiConstants";


const NAMES_LIST = [
    'McCartney',
    'Lennon'
];


test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL!);
    await expect(page).toHaveTitle(testData.Wiki_PageTitle);
});

test("verify artist age", async ({ page }) => {

    const home = new homePage(page);
    home.clickNameLink(NAMES_LIST[0]);
    await expect(page).toHaveTitle(testData.McCartney_PageTitle);

    const artist1 = new artistPage(page);
    let artist1DoB = await artist1.getArtistDoB();
    let McCartneyDate = new Date(artist1DoB)

    await page.goBack();

    home.clickNameLink(NAMES_LIST[1]);
    await expect(page).toHaveTitle(testData.Lennon_PageTitle);

    const artist2 = new artistPage(page);
    let artist2DoB = await artist2.getArtistDoB();
    let LennonDate = new Date(artist2DoB)
    
    expect(LennonDate < McCartneyDate, 'John Lennon is born before Paul McCartney').toBeTruthy();
});


test.afterEach(async ({ page }) => {
    //screenshot option also set to 'on' in config file
    await page.screenshot({ path: './screenshots/screenshot.png' });
});