# Earth Travels India — Client Data Needed (Placeholders & Requirements)

> [!WARNING]
> **Localhost Honesty Rule**: Never fabricate reviews, ratings, prices, licence numbers, GSTIN, or author bios in generated schema or copy. Every item below is a placeholder that requires official client verification before live production deployment.

## 1. Business Registration & Legal Identification
- [ ] **GSTIN Number**: Required for footer, invoice transparency, and `OrganizationSchema.taxID`
- [ ] **Official Registered Business Name**: Entity legal name if different from "Earth Travels"
- [ ] **Travel Operator Registration/Licence Numbers**: State tourism registration number, UP Govt MSME registration ID
- [ ] **Founding Year**: Exact year established (e.g. 2011) for `foundingDate` schema

## 2. Founder & Executive E-E-A-T Data
- [ ] **Founder Bio**: Named founder / Managing Director biography (150-200 words detailing travel industry background, awards, and Mathura connection)
- [ ] **Founder Headshot**: Professional photograph for `AboutPage` and `PersonSchema`
- [ ] **Team Author Bios**: Short 2-sentence bios for senior travel planners (Mohini Khandelwal, Salisha Bansal, Deepti Agrawal) to sign off on seasonal travel advice

## 3. Verified Customer Review Data
- [ ] **Google Business Profile URL**: Live GBP listing link for review verification
- [ ] **TripAdvisor Listing URL**: Official TripAdvisor page URL
- [ ] **Aggregate Review Count & Score Verification**: Verified total count of reviews across GBP and TripAdvisor to replace static placeholder (127 reviews / 4.7★) before emitting `AggregateRating` schema

## 4. Policy & Compliance Documents
- [ ] **Cancellation & Refund Policy**: Explicit terms regarding booking deposits, cancellation windows, flight refund policies, and force majeure
- [ ] **Privacy Policy Contact Detail**: Data protection officer / privacy contact email

## 5. Partner & Certification Verification
- [ ] **IATA Accreditation Code Verification**: Confirm active status of IATA Agency Code `14352726`
- [ ] **Active Hotel & Airline Partner Verification**: Confirm current active agreements for listed brand logos (Taj, Marriott, Emirates, Singapore Airlines, SOTC, Centara, TBO)
