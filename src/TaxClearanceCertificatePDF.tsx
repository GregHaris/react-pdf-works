import { Document, Page, View, Text, Image } from '@react-pdf/renderer';
import { styles } from './TCCStyles';
import type { TaxClearanceCertificateData } from './types';
import { dummyData } from './DummyData';

const TaxClearanceCertificate: React.FC<{
  data?: TaxClearanceCertificateData;
}> = ({ data = dummyData }) => (
  <Document>
    <Page size={{ width: 595, height: 842 }} style={styles.page}>
      {/* Logo Image */}
      <View style={styles.logoContainer}>
        <Image src="/assets/aks_logo.png" style={styles.logo} />
      </View>

      {/* Background Image */}
      <View style={styles.backgroundImageContainer}>
        <Image src="/assets/akirs_logo.png" style={styles.backgroundImage} />
      </View>

      {/* Header */}
      <Text style={styles.header}>AKWA IBOM STATE GOVERNMENT</Text>
      <Text style={styles.header}>INTERNAL REVENUE SERVICE</Text>
      <Text style={styles.serialNumber}>SN: {data.serialNumber}</Text>

      {/* Form Details */}
      <View style={styles.formRow}>
        <View>
          <Text style={styles.formLabel}>The Form I.T. 70</Text>
          <Text style={styles.formLabel}>Station: {data.station}</Text>
        </View>
        <View>
          <Text style={styles.formLabel}>File No. {data.fileNumber}</Text>
          <Text style={styles.formLabel}>Date: {data.date}</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.subHeader}>
        INCOME TAX CLEARANCE CERTIFICATE (I.T. 70)
      </Text>
      <Text style={{ textAlign: 'center', marginBottom: 10 }}>
        This is to certify that
      </Text>

      {/* Certification Statement */}
      <View style={styles.section}>
        <Text>
          <Text style={styles.italics}>Chief/Alhaji/Mr/Mrs/Miss</Text> {data.name} of {data.address} has settled
          his/her income tax assessments for the past three years, namely:
        </Text>
        <Text style={{ marginTop: 5 }}>
          ( {data.years[0] || '20__'} / {data.years[1] || '20__'} /{' '}
          {data.years[2] || '20__'})
        </Text>
      </View>

      {/* Tax Details Table */}
      <View style={styles.section}>
        <Text>2. Details of his/her assessments are as follows:</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text> </Text>
            </View>
            {data.taxDetails.map((detail, index) => (
              <View
                key={index}
                style={[
                  styles.tableCell,
                  index === data.taxDetails.length - 1
                    ? styles.tableCellLast
                    : {},
                ]}
              >
                <Text style={styles.bold}>{detail.year} </Text>
              </View>
            ))}
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.bold}>Total Income</Text>
            </View>
            {data.taxDetails.map((detail, index) => (
              <View
                key={index}
                style={[
                  styles.tableCell,
                  index === data.taxDetails.length - 1
                    ? styles.tableCellLast
                    : {},
                ]}
              >
                <Text>{detail.totalIncome}</Text>
              </View>
            ))}
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.bold}>Tax Paid</Text>
            </View>
            {data.taxDetails.map((detail, index) => (
              <View
                key={index}
                style={[
                  styles.tableCell,
                  index === data.taxDetails.length - 1
                    ? styles.tableCellLast
                    : {},
                ]}
              >
                <Text>{detail.taxPaid}</Text>
              </View>
            ))}
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.bold}>
                No. and date of tax receipts issued
              </Text>
            </View>
            {data.taxDetails.map((detail, index) => (
              <View
                key={index}
                style={[
                  styles.tableCell,
                  index === data.taxDetails.length - 1
                    ? styles.tableCellLast
                    : {},
                ]}
              >
                <Text>
                  {detail.receiptNumber} {detail.receiptDate}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Source of Income */}
      <View style={styles.section}>
        <Text>3. Source of Income {data.sourceOfIncome}</Text>
      </View>

      {/* Expiry and Signature */}
      <View style={styles.section}>
        <Text>4. This certificate expires on {data.expiryDate}</Text>
      </View>
      <View style={styles.signatureSection}>
        <View>
          <Text style={styles.bold}>Signature:</Text>
          <Text style={styles.small}>
            Executive Chairman/Authorised Officer
          </Text>
        </View>
        <View>
          <Text style={styles.bold}>Name: {data.officerName}</Text>
        </View>
      </View>
      <View style={styles.stamp}>
        <Text>Official Stamp</Text>
      </View>
    </Page>
  </Document>
);

export default TaxClearanceCertificate;
