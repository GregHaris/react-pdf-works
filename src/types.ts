export interface TaxClearanceCertificateData {
  tin: string;
  nin: string;
  taxOffice: string;
  issuanceDate: string;
  name: string;
  address: string;
  years: string[];
  taxDetails: {
    year: string;
    totalIncome: string;
    taxPaid: string;
    receiptNumber: string;
    receiptDate: string;
  }[];
  sourceOfIncome: string;
  expiryDate: string;
  officerName: string;
}
