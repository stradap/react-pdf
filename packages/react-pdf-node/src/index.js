import fs from 'fs';
import path from 'path';
import { PDFRenderer, createElement, pdf } from '@react-pdf/core';

export default {
  render(element, filePath) {
    const container = createElement('ROOT');

    const node = PDFRenderer.createContainer(container);
    PDFRenderer.updateContainer(element, node, null);

    const output = pdf(container).toBuffer();

    fs.open(filePath, 'w', (e, fd) => {
      if (e) {
        throw new Error(`PDF-react 'Error opening file: ${e}'`);
      }

      fs.write(fd, output, 0, output.length, null, function(err) {
        if (err) throw new Error(`PDF-react 'Error writing file: ${err}'`);
        fs.close(fd, function() {
          console.log(
            `📝  PDF successfuly exported on ${path.resolve(filePath)}`,
          );
        });
      });
    });
  },
};
