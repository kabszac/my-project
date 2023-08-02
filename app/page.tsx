export default function Home() {
  return (
    <main className="">
      <div className="bg-red-400 border-4 border-green-500 p-3 m-2">
        <h1 className="text-wanja text-4xl"> Hello World</h1>
      </div>
      <div className="flex flex-row-reverse hover:flex-col md:flex-row ">
        <div className="basis-1/4 bg-rose-500 text-white text-center px-8 py-4 border-2 rounded">
          01
        </div>
        <div className="basis-1/4 hover:basis-1/2  bg-rose-500 text-white text-center px-8 py-4 border-2 rounded">
          02
        </div>
        <div className="basis-1/2  bg-rose-500 text-white text-center px-8 py-4 border-2 rounded">
          03
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className=" bg-rose-500 text-white text-center px-8 py-4 border-2 rounded">
          01
        </div>
        <div className=" bg-rose-500 text-white text-center px-8 py-4 border-2 rounded">
          02
        </div>
        <div className=" bg-rose-500 text-white text-center px-8 py-4 border-2 rounded">
          03
        </div>
        <div className="col-span-2 row-span-2  bg-rose-500 text-white text-center px-8 py-4 border-2 rounded">
          04
        </div>
        <div className=" bg-rose-500 text-white text-center px-8 py-4 border-2 rounded">
          05
        </div>
        <div className="col-start-1 col-end-5  bg-rose-500 text-white text-center px-8 py-4 border-2 rounded">
          06
        </div>
        <div className="col-span-2  bg-rose-500 text-white text-center px-8 py-4 border-2 rounded">
          07
        </div>
      </div>
    </main>
  );
}
