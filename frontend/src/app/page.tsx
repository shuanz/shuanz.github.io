import { blackFridayFlag } from './flag';

export default async function Page() {
  const black_friday = await blackFridayFlag();

  return (
<<<<<<< HEAD
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1> Welcome to the ConchaYOro App deploy v2.0 </h1>
      </div>
    </main>
  )
}
=======
    <html>
      <body>
        <div>
          <h1> Welcome to the ConchaYOro App - deploy v3a</h1>
          { black_friday ? <button> Promo </button> : <button> Normal </button> } 
        </div>
      </body>
    </html>
  )
};
>>>>>>> 9a5e105 (Black Friday)
