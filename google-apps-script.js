function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Fix: Prepend single quote (') so Google Sheets treats "+91 ..." as text, not a formula
    var rawPhone = data.phone || "";
    var formattedPhone = rawPhone;
    if (rawPhone.startsWith("+")) {
      formattedPhone = "'" + rawPhone; 
    }
    
    // Extract metadata fields sent from either the Contact page or the Custom Quote page
    var meta = data.meta || {};
    
    // Destination(s) fallback
    var destination = data.destination || meta.destination || meta.selectedDestinations || "";
    
    // Travel Date / Month fallback
    var travelDate = data.month || meta.month || "";
    if (!travelDate && meta.dateFrom) {
      travelDate = meta.dateFrom;
      if (meta.dateTo) {
        travelDate += " to " + meta.dateTo;
      }
    }
    
    // Message fallback
    var message = data.message || meta.message || meta.specialRequests || "";
    
    // Map fields directly to columns
    var rowData = [
      new Date(),                         // Column A: Timestamp
      data.formType || "Inquiry",         // Column B: Form Type
      data.name || "",                    // Column C: Customer Name
      formattedPhone,                     // Column D: WhatsApp Number
      data.email || "",                   // Column E: Email Address
      destination,                        // Column F: Destination(s)
      meta.departureCity || "Mathura",    // Column G: Departure City
      travelDate,                         // Column H: Travel Date / Month
      meta.duration || "",                // Column I: Duration
      meta.adults || "",                  // Column J: Adults
      meta.children || "",                // Column K: Children
      meta.budgetTier || "",              // Column L: Budget Tier
      meta.travelType || "",              // Column M: Travel Type
      meta.callbackTime || "",            // Column N: Callback Time
      message                             // Column O: Message / Special Requests
    ];
    
    sheet.appendRow(rowData);

    // =======================================================
    // INSTANT EMAIL NOTIFICATION WITH GOOGLE SHEET LINK
    // =======================================================
    // Automatically uses the Google Sheet owner's email address
    var recipientEmail = Session.getEffectiveUser().getEmail(); 
    var sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
    var customerName = data.name || "N/A";
    var formType = data.formType || "Inquiry";

    var subject = "🚨 New Lead Received: " + customerName + " (" + formType + ")";

    var cleanPhoneForWhatsApp = rawPhone.replace(/\+/g, '').replace(/\s+/g, '');

    var htmlBody = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; border-bottom: 2px solid #D4A017; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #0f172a; margin: 0; font-size: 22px; font-weight: 700;">🌍 Earth Travels — New Lead Alert</h2>
          <span style="color: #D4A017; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">${formType}</span>
        </div>
        
        <p style="font-size: 14px; color: #334155; margin-bottom: 20px;">You have received a new lead submission from your website! Here are the full details:</p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px 14px; font-weight: bold; width: 35%; border: 1px solid #e2e8f0; color: #475569; font-size: 13px;">Customer Name</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #0f172a; font-weight: 600; font-size: 14px;">${customerName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0; color: #475569; font-size: 13px;">Phone / WhatsApp</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-size: 14px;">
              <a href="https://wa.me/${cleanPhoneForWhatsApp}" target="_blank" style="color: #16a34a; font-weight: 600; text-decoration: none;">💬 ${rawPhone}</a>
            </td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0; color: #475569; font-size: 13px;">Email Address</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-size: 14px;">
              <a href="mailto:${data.email || ''}" style="color: #2563eb; text-decoration: none;">${data.email || 'N/A'}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0; color: #475569; font-size: 13px;">Destination(s)</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: 600; color: #0f172a; font-size: 14px;">${destination || 'N/A'}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0; color: #475569; font-size: 13px;">Departure City</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${meta.departureCity || 'Mathura'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0; color: #475569; font-size: 13px;">Travel Date / Month</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${travelDate || 'N/A'}</td>
          </tr>
          ${meta.duration ? `
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0; color: #475569; font-size: 13px;">Duration</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${meta.duration}</td>
          </tr>` : ''}
          ${meta.budgetTier ? `
          <tr>
            <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0; color: #475569; font-size: 13px;">Budget Tier</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${meta.budgetTier}</td>
          </tr>` : ''}
          ${meta.travelType ? `
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0; color: #475569; font-size: 13px;">Travel Type</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${meta.travelType}</td>
          </tr>` : ''}
          ${meta.callbackTime ? `
          <tr>
            <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0; color: #475569; font-size: 13px;">Preferred Callback</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${meta.callbackTime}</td>
          </tr>` : ''}
          ${message ? `
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px 14px; font-weight: bold; border: 1px solid #e2e8f0; color: #475569; font-size: 13px;">Message / Special Notes</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #1e293b; font-style: italic; font-size: 14px;">"${message}"</td>
          </tr>` : ''}
        </table>

        <!-- Direct Button Link to Google Sheet -->
        <div style="text-align: center; margin-top: 28px; margin-bottom: 16px;">
          <a href="${sheetUrl}" target="_blank" style="background-color: #D4A017; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 15px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(212, 160, 23, 0.4);">
            📊 View All Leads in Google Sheet
          </a>
        </div>

        <p style="font-size: 12px; color: #94a3b8; margin-top: 24px; text-align: center; line-height: 1.5;">
          Direct Google Sheet URL:<br>
          <a href="${sheetUrl}" style="color: #2563eb; word-break: break-all;">${sheetUrl}</a>
        </p>
      </div>
    `;

    if (recipientEmail) {
      MailApp.sendEmail({
        to: recipientEmail,
        subject: subject,
        htmlBody: htmlBody
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS pre-flight requests safely
function doOptions(e) {
  return ContentService.createTextOutput("")
                       .setMimeType(ContentService.MimeType.TEXT);
}

// Helper function specifically to trigger Google Authorization Popup cleanly
function testEmailPermission() {
  var email = Session.getEffectiveUser().getEmail();
  MailApp.sendEmail(email, "Google Apps Script Authorization Test", "Permissions have been granted successfully!");
  Logger.log("Test email sent to " + email);
}
