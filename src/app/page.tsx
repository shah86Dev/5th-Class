import Link from "next/link";


export default function Home() {
  return (
    <div>
    <header>
      <nav className=" flex w-full bg-black h-10 items-center">
        <div className="flex justify-center font-bold bg-purple-700 h-10 w-44">Logo</div>


        <div className="flex justify-end w-full items-center text-stone-950">
        <div 
        className="flex justify-around font-bold  bg-orange-500 h-10 w-44 ">Home</div>
        <div 
        className="flex justify-center font-bold bg-blue-700 h-10 w-44 ">Prouduct</div>
        <div 
        className="flex justify-center font-bold bg-green-700 h-10 w-44 ">About</div>
        <div 
        className="flex justify-center font-bold bg-rose-700 h-10 w-44">Contact Us</div>
        </div>



      </nav>
    </header>
<p className="flex justify-center h-96 w-full text-2xl">

A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.
</p>
<div className="flex justify-items-center bg-blend-hard-light h-96 gap-2">
  <div className="flex justify-center animate-pulse font-bold bg-green-500 max-h-96 w-full">Picture1</div>
  <div className="flex justify-center animate-pulse font-bold bg-indigo-600 h-42 w-full">Picture 2</div>
</div>
<p>
  <h1 className="flex justify-center font-extrabold h-40 w-full">
Gallery   
  </h1>
</p>
<div className="flex justify-center h-96 text-center font-bold gap-2 outline-black-bold">
  <div className="flex justify bg-red-700 max-h-96 w-full"><Link href="www.goole.com.pk">Picture 3</Link></div>
  <div className="bg-rose-400 max-h-96 w-full">Picture 4</div>
  <div className="bg-orange-600 max-h-96 w-full">Picture 5</div>
  <div className="bg-sky-500 max-h-96 w-full">Picture 6</div>
  </div>
    </div>
      );
}

