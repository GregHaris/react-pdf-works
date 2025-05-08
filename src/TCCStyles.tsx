import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
    position: 'relative',
  },
  backgroundImageContainer: {
    position: 'absolute',
    top: '250',
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.1,
  },
  backgroundImage: {
    width: 350,
    height: 350,
    objectFit: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logoContainer: {
    width: 55,
    height: 55,
    paddingBottom: 4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logo: {
    width: 54,
    height: 54,
    objectFit: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  headerContainer: {
    marginHorizontal: 'auto',
    width: 240,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  header: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  serialNumber: {
    position: 'absolute',
    top: 20,
    right: 40,
    fontSize: 10,
    color: '#606060',
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    color: '#606060',
  },
  formLabel: {
    fontSize: 12,
  },
  section: {
    marginBottom: 15,
    color: '#606060',
  },
  italics: {
    fontStyle: 'italic',
  },
  table: {
    display: 'flex',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 15,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableCell: {
    flex: 1,
    padding: 5,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  tableCellLast: {
    borderRightWidth: 0,
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  signatureSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  small: {
    fontSize: 10,
  },
  stamp: {
    textAlign: 'center',
  },
});
