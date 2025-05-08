export interface TaxClearanceCertificateData {
  serialNumber: string;
  station: string;
  fileNumber: string;
  date: string;
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
