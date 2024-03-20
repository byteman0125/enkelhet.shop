import { initialData } from './seed';

async function main() {
  console.log(initialData);
  console.log('seed executed');
}

(() => {
  main();
})();
