import { test as baseTest } from '@playwright/test';
import { LoginPage } from 'pageFactory/LoginPage'; 
import { ElementsPage } from 'pageFactory/ElementsPage';
// import { AlertsFrameWindowsPage } from '@pages/AlertsFrameWindowsPage';

import { InteractionsPage } from 'pageFactory/InteractionsPage'; 
import { WebActions } from '@lib/WebActions';
// import { WidgetsPage } from 'WidgetsPage';



const test = baseTest.extend<{
    webActions: WebActions;
    loginPage: LoginPage;
    elementsPage: ElementsPage;
    // alertsFrameWindowsPage: AlertsFrameWindowsPage;
    // widgetsPage: WidgetsPage;
    interactionsPage: InteractionsPage;
}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },
    elementsPage: async ({ page, context }, use) => {
        await use(new ElementsPage(page, context));
    },
    // alertsFrameWindowsPage: async ({ page, context }, use) => {
    //     await use(new AlertsFrameWindowsPage(page, context));
    // },
    // widgetsPage: async ({ page, context }, use) => {
    //     await use(new WidgetsPage(page, context));
    // },
    interactionsPage: async ({ page, context }, use) => {
        await use(new InteractionsPage(page, context));
    }
})

export default test;