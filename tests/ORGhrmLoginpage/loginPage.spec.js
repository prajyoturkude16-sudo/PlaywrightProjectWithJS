import {test,expect} from "@playwright/test";
import { ORGhrmLoginPage } from "../../Pages/ORGhrmLoginPage";
import testData from "../../TestData/OrgHrmSimple.json";

test("TC 01. login using POM with hard coaded values ", async({page})=>{

    let login = new ORGhrmLoginPage(page);
    await login.openUrl();
    await login.performLogin(user.username,"admin123");

})

test.only("TC 02. login using POM using parameterization", async({page})=>{

    let login = new ORGhrmLoginPage(page);
    await login.openUrl();
    await login.performLogin(testData.username,testData.password);

})