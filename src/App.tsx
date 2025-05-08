import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import TaxClearanceCertificatePDF from './TaxClearanceCertificatePDF';

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-100 p-4">
      <div className="flex justify-center items-center">
        <PDFViewer className="w-full max-w-5xl h-[950px] border border-gray-300 rounded shadow-lg">
          <TaxClearanceCertificatePDF />
        </PDFViewer>
      </div>
    </div>
  );
}

export default App;
