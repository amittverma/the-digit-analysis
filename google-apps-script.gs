const SHEET_NAME = 'Enquiries';

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Submitted At', 'Name', 'Email', 'Phone', 'Service', 'Message']);
  }

  const p = (e && e.parameter) ? e.parameter : {};
  sheet.appendRow([
    new Date(),
    p.name || '',
    p.email || '',
    p.phone || '',
    p.service || '',
    p.message || ''
  ]);

  return ContentService.createTextOutput('OK');
}
