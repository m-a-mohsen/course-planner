
function onOpen() {
  let ui = SpreadsheetApp.getUi();
   // Or DocumentApp or SlidesApp or FormApp.
      ui.createMenu('Update Functions')
      .addItem('Post Updates', 'showSidebar')
      .addItem('OnSave Post Settings WIP','togglePostOnSave')
      .addSeparator()
      .addSubMenu(ui.createMenu('CronJobs WIP')
        .addItem('Daily','dailyCronJob')
        .addItem('Weekly','weeklyCronJob'))
      .addToUi();
}

function showSidebar() {
  const html = HtmlService.createTemplateFromFile('Page')
                          .evaluate().setTitle('Post schedule updates');
      
  SpreadsheetApp.getUi().showSidebar(html);
}
// generate dynamic cohort dropdown menu
// ref: https://youtu.be/ETrv-lw6Rv4?si=U3ouRH5YdLmLnjoz

function getCohortNames(params) {
  return SpreadsheetApp.getActiveSpreadsheet()
          .getRangeByName('cohortNames')
          .getValues()
          .flat()
          .filter(e=>e!="")
}

function togglePostOnSave() {
  
}
function weeklyCronJob() {
  
}
function dailyCronJob() {
  
}