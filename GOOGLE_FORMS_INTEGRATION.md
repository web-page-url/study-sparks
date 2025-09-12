# Google Forms Integration Guide

This guide will help you set up Google Forms integration with your demo form using Google Apps Script.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Study Sparks Demo Requests"
4. In the first row, create these column headers:
   - Timestamp
   - Name
   - Email
   - Phone
   - Child Age
   - Subject

## Step 2: Create Google Apps Script

1. In the same Google Sheet, go to `Extensions` > `Apps Script`
2. Replace the default code with the following:

```javascript
const SHEET_NAME = "Sheet1"; // Change if your sheet has a different name

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Get the data from the request
    const data = e.parameter;
    
    // Add timestamp
    const timestamp = new Date();
    
    // Write data to sheet
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.childAge,
      data.subject
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({result: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({result: "error", error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("Study Sparks Demo Form API");
}
```

3. Click the "Deploy" button (cloud icon with down arrow)
4. Select "New deployment"
5. Click the gear icon and select "Web app"
6. Set these options:
   - Description: Study Sparks Demo Form
   - Execute as: Me
   - Who has access: Anyone (or Anyone with Google account, depending on your preference)
7. Click "Deploy"
8. Copy the "Web URL" - you'll need this for the next step

## Step 3: Update Your DemoForm Component

Now, modify your DemoForm.tsx to send data to the Google Apps Script instead of just logging to the console:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Send data to Google Apps Script
  fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
    method: 'POST',
    body: new FormData(e.target as HTMLFormElement)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    setIsSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', phone: '', childAge: '', subject: '' });
    // Close modal after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  })
  .catch((error) => {
    console.error('Error:', error);
    // Still show success to user even if there's an error
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  });
};
```

Note: Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with the URL you copied in Step 2.

## Step 4: Modify the Form Element

Update your form element to properly work with FormData:

```jsx
<form onSubmit={handleSubmit} className="space-y-6">
  <input type="hidden" name="name" value={formData.name} />
  <input type="hidden" name="email" value={formData.email} />
  <input type="hidden" name="phone" value={formData.phone} />
  <input type="hidden" name="childAge" value={formData.childAge} />
  <input type="hidden" name="subject" value={formData.subject} />
  {/* ... rest of your form fields ... */}
</form>
```

Actually, a better approach is to modify the submission to send a proper POST request:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Prepare form data as URL encoded string
  const formBody = new URLSearchParams({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    childAge: formData.childAge,
    subject: formData.subject
  }).toString();
  
  // Send data to Google Apps Script
  fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    setIsSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', phone: '', childAge: '', subject: '' });
    // Close modal after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  })
  .catch((error) => {
    console.error('Error:', error);
    // Still show success to user even if there's an error
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  });
};
```

## Important Notes

1. Make sure your Google Apps Script URL is correctly set
2. The first time you submit data, Google might ask for authorization
3. All form submissions will now be stored in your Google Sheet
4. You can enhance the script to send email notifications or perform other actions





https://script.google.com/macros/s/AKfycbwBDAATT7kPxFq9TvmbQ5KjZC9lTnZQEL_jm30bAd0RoGk_tfr8DewEBOLRewHvz3Vs5g/exec

https://script.google.com/macros/s/AKfycbyzM0XSBuAzY3y3_yug3EnLcrrP5A6cE_gbsYaAELTf/dev