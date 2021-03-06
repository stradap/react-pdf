import Pages from './Pages';
import Text from './Text';
import View from './View';
import Page from './Page';
import Document from './Document';

function createElement(type, props, root) {
  let instance;

  switch (type) {
    case 'ROOT':
      instance = new Document();
      break;
    case 'DOCUMENT':
      instance = new Pages(props, root);
      break;
    case 'PAGE':
      instance = new Page(props, root);
      break;
    case 'TEXT':
      instance = new Text(props, root);
      break;
    case 'VIEW':
      instance = new View(props, root);
      break;
    default:
      instance = undefined;
  }

  return instance;
}

export { createElement };
