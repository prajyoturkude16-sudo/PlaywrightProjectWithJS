import { test, expect } from '@playwright/test';


test("TC01 Select dropdown click on single element", async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice');
    const actualOption = await page.locator('#dropdown-class-example').selectOption('Option1');
    //await page.waitForTimeout(3000);
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

    //await page.waitForTimeout(3000);

})


test("TC_03 Static Dropdown", async ({ page }) => {

    await page.goto('https://www.sreenidhirajakrishnan.com/practice#section-4');
    const dropdown = await page.locator('#standard-select');
    await dropdown.selectOption("green");
   // await page.waitForTimeout(3000);

    // expect(await dropdown).toContainText('green');  //Failed
    // expect(await dropdown).toContainText('green');  //Failed

    expect(await dropdown).toHaveValue('green');

})