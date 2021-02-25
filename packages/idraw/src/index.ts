export default async function ( n: number ) {
  while ( --n ) {
    await delay( 10, n );
  }
}

function delay ( interval: number, num: number ): Promise<void> {
  return new Promise( resolve => setTimeout( () => {
    console.log(num)
    resolve();
  }, interval ) );
}