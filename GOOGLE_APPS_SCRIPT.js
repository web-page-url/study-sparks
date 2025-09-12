// Google Apps Script to handle form submissions and store in Google Sheets
const SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    console.log("Received POST request with data:", e);
    
    // Check if we received any data
    if (!e || !e.parameter) {
      console.error("No data received in POST request");
      return ContentService
        .createTextOutput(JSON.stringify({
          result: "error", 
          message: "No data received"
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Check if sheet exists
    if (!sheet) {
      console.error("Sheet not found: " + SHEET_NAME);
      return ContentService
        .createTextOutput(JSON.stringify({
          result: "error", 
          message: "Sheet not found: " + SHEET_NAME
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the data from the request
    const data = e.parameter;
    console.log("Processing data:", data);
    
    // Add timestamp
    const timestamp = new Date();
    
    // Write data to sheet
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.childAge || '',
      data.subject || ''
    ]);
    
    console.log("Data successfully written to sheet");
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success",
        message: "Data successfully saved"
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error processing request:", error);
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        result: "error", 
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  console.log("Received GET request");
  return ContentService.createTextOutput("Study Sparks Demo Form API - Ready to receive data");
}