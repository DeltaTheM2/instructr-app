import * as pdfjsLib from 'pdfjs-dist';
import workerSrc from 'pdfjs-dist/build/pdf.worker.mjs';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

const PdfConvertor = async (files: FileList) => {
    const extractTextFromPDF = async (file: File) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = async function() {
            const pdfData = new Uint8Array(fileReader.result as ArrayBuffer);
            const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
            let text = '';

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const content = await page.getTextContent();
                const pageText = content.items
                    .map(item => (item as any).str) // Type assertion here
                    .join(' ');
                text += pageText + '\n'; // Add a newline between pages
            }

            console.log(`Text from ${file.name}:`, text);
        };
    };

    for (const file of Array.from(files)) {
        await extractTextFromPDF(file);
    }
};

export default PdfConvertor;
