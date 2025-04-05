import { Page } from "@playwright/test";

export class homePage {
    [clickNameLink: string]: any;

    constructor(private page: Page) { }

    private McCartneyLink = this.page.getByRole('link', { name: 'Paul McCartney' }).first();
    private LennonLink = this.page.getByRole('link', { name: 'John Lennon' }).first();

    async clickNameLink(name: string) {
        await this[name + "Link"].click();
    }
}