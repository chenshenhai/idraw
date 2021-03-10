import path from './data/path.js';
import { src } from '../draw/brush/basic.js';

const { IDraw } = window;

const canvas = document.querySelector('#canvas');
const iDraw = new IDraw(canvas);

async function main() {
  await iDraw.loadBrush({
    src: src,
    size: 20,
  });
  await iDraw.playPath({
    positions: path.positions
  });
}
main();