import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';

export class JobComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-job div table .btn-danger'));
  title = element.all(by.css('jhi-job div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class JobUpdatePage {
  pageTitle = element(by.id('jhi-job-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  jobTitleInput = element(by.id('field_jobTitle'));
  minSalaryInput = element(by.id('field_minSalary'));
  maxSalaryInput = element(by.id('field_maxSalary'));
  employeeSelect = element(by.id('field_employee'));
  taskSelect = element(by.id('field_task'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setJobTitleInput(jobTitle) {
    await this.jobTitleInput.sendKeys(jobTitle);
  }

  async getJobTitleInput() {
    return await this.jobTitleInput.getAttribute('value');
  }

  async setMinSalaryInput(minSalary) {
    await this.minSalaryInput.sendKeys(minSalary);
  }

  async getMinSalaryInput() {
    return await this.minSalaryInput.getAttribute('value');
  }

  async setMaxSalaryInput(maxSalary) {
    await this.maxSalaryInput.sendKeys(maxSalary);
  }

  async getMaxSalaryInput() {
    return await this.maxSalaryInput.getAttribute('value');
  }

  async employeeSelectLastOption(timeout?: number) {
    await this.employeeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async employeeSelectOption(option) {
    await this.employeeSelect.sendKeys(option);
  }

  getEmployeeSelect(): ElementFinder {
    return this.employeeSelect;
  }

  async getEmployeeSelectedOption() {
    return await this.employeeSelect.element(by.css('option:checked')).getText();
  }

  async taskSelectLastOption(timeout?: number) {
    await this.taskSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async taskSelectOption(option) {
    await this.taskSelect.sendKeys(option);
  }

  getTaskSelect(): ElementFinder {
    return this.taskSelect;
  }

  async getTaskSelectedOption() {
    return await this.taskSelect.element(by.css('option:checked')).getText();
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class JobDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-job-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-job'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
