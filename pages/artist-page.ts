import { Page } from "@playwright/test";

export class artistPage {

  constructor(private page: Page) { }

  private DOBSpan = this.page.locator('//span[@class="bday"]').innerHTML();

  async getArtistDoB() {
    return (await this.DOBSpan);
  }
}    