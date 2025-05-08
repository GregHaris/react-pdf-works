import type { TaxClearanceCertificateData } from "./types";

export const dummyData: TaxClearanceCertificateData = {
  nin: '01172454547',
  taxOffice: 'UYO HOTRS',
  tin: 'AKS/IRS/134',
  issuanceDate: '30-01-2025',
  name: 'MICHAEL ETEFIA',
  address: 'MYKE ETEFIA & CO PLOT 36 F LINE EWET HOUSING EST. UYO',
  years: ['2022', '2023', '2024'],
  taxDetails: [
    {
      year: '2022',
      totalIncome: '18,250,000.00',
      taxPaid: '3,250,000.00',
      receiptNumber: '339269',
      receiptDate: '30-01-25',
    },
    {
      year: '2023',
      totalIncome: '24,575,000.00',
      taxPaid: '4,413,500.00',
      receiptNumber: '339270',
      receiptDate: '30-01-25',
    },
    {
      year: '2024',
      totalIncome: '94,500,000.00',
      taxPaid: '4,437,200.00',
      receiptNumber: '339271',
      receiptDate: '30-01-25',
    },
  ],
  sourceOfIncome: 'BUSINESS REVENUE',
  expiryDate: '31-12-2025',
  officerName: 'OKON OKON',
};
