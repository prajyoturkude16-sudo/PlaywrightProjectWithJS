import { test, expect } from '@playwright/test';


test("TC01 Select dropdown click on single element", async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice');
    const actualOption = await page.locator('#dropdown-class-example').selectOption('Option1');
    await page.waitForTimeout(3000);
    await expect(actualOption.toString()).toBe('option1');

})

test("TC02 Select dropdown getAllElement List", async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice');

    const dropdownField = await page.locator('#dropdown-class-example');
    const options = await dropdownField.allInnerTexts();
    console.log(options);

    for (const option of options) {

        if (option.trim() === 'Option3') {
            await dropdownField.selectOption({ label: option.trim() });
            break;
        }
    }

    await page.waitForTimeout(3000);

})


test("TC_03 Static Dropdown", async ({ page }) => {

    await page.goto('https://www.sreenidhirajakrishnan.com/practice#section-4');
    const dropdown = await page.locator('#standard-select');
    await dropdown.selectOption("green");
    await page.waitForTimeout(3000);

    // expect(await dropdown).toContainText('green');  //Failed
    // expect(await dropdown).toContainText('green');  //Failed

    expect(await dropdown).toHaveValue('green');

})

test("TC_04 AutoSuggestion dropdown", async ({ page }) => {

    await page.goto('https://www.amazon.in');

    const continueShoppingPage = await page.locator("//button[text()='Continue shopping']");

    // Handle "Continue shopping" page if it appears
    const continueShopping = page.getByRole('button', { name: 'Continue shopping'});

    if (await continueShopping.count() > 0) {
        continueShopping.click();
    }

    const searchBox = await page.getByPlaceholder('Search Amazon.in');
    await searchBox.fill("Helmet");

    const expetedProduct = "helmets for men bike";

    await page.waitForTimeout(3000);
    const dropdownLocator = await page.locator("div[role='row']");
    const count = await dropdownLocator.count();
    console.log("Total matching result is :", count);
    const dropdownValues = await page.locator("div[role='row']").allTextContents();
    // for (const value of dropdownValues) {
    //     console.log(value);

    //     if (value.includes(expetedProduct)) {

    //         break;
    //     }
    // }

    for (let i = 0; i < count; i++) {
        if (dropdownValues.at(i).trim().toLowerCase()== expetedProduct.toLowerCase()){
            console.log("I clicked on expeted dropdown value");
            await dropdownLocator.nth(i).click();
            break;
        }
        else {
            console.log(await dropdownLocator.nth(i).textContent());
        }
    }

    await page.waitForTimeout(3000);

    expect(await searchBox.inputValue()).toBe(expetedProduct);
})