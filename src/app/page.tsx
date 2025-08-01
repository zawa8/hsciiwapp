"use client";
// import Image from "next/image";
import { Textarea } from "@/components/ui/textarea"
import {hsciistr} from "htrlib";
import {  SetStateAction, useState } from 'react';
// import { Hsciifontpicker } from "libhsciifp";
import Hsciifontpicker from "@/components/hsciifp/Hsciifontpicker";

export default function Home() {
  const fontekst = `plexse selekt hscii font:
abcdefghijklmnopqrstuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ
0123 4567 89LY VWPF 4*4=10=wnti=8+8`;
  const iplaceholer = `input: replace/paste here.ԃis is transliterator for phonetical languages.
steps to use : 1. pls replace ԃis tekst to india/nepal/sinhl/bangla.
1.1 to copy unicode google search : wiki india in indian languages
2. pls press 8aiuehocg flxg btn.
3. result : tekst area down.
=======
x.com=xmerica=America=Aks.com
whitehome=wvitevouse car=cAb=cxb
ziro wn two three four fiwe siks sewen
0123 4567 89LY VWPF . 4finger_mxths . 8+8=10=wnti=4*4
eight nine ten twelw dblu purn fiwn wnti
=======
A=x≠a (xpple=Apple) a=>car cAt=cxt rxt=rAt=mouse=cuva fast
H=v≠h  wveel=wHeel kvani=kHani=story 
======
4 finger 1 hxnd mxjhs : 4f1h_mxjhs :  
0123 4567 89LY VWPF
ten=L=8+2 yilewen=Y=8+3 twelw=V=8+4
W=dblu=8+4+1  P=purn=8+4+2
F=fiwn=8+4+2+1 = 10 - 1 = wnti - 1
4*4=10=wnti=8+8=F+1=L+6=9+7
======
w =>  fiwe (5)  znwri frwri nowember grow crow wn(1) liwe wiolet_color
x => xray xpple cxt rxt(mouse)   6 = six = siks
z => zug zune zuly  j(jhrow=Jrow)  
k => king/kueen kuick kuestion  q=> qhis(this) qhxt(thxt=thAt)
======
a->ram i->sijaram u->vnuman e->gnesh o->gowinq
======`;	
  const hsciistrobz = new hsciistr(hsciistr.from_dikt.ascii_and_indik,hsciistr.tu_dikt.all);
  const [iteksta, set_iteksta] = useState("");
  const handle_ita_change = (event: { target: { value: SetStateAction<string>; }; }) => { set_iteksta(event.target.value); };
  function on_kh2uK() { set_iteksta(hsciistrobz.setistr(iteksta).kh2hindiK().istr); }
  function on_xvjqK2u() { set_iteksta(hsciistrobz.setistr(iteksta).xvjqK2hindi().istr); }
  function on_eu2l() {  //alert("on_eu2l");
    hsciistrobz.setistr(iteksta).duztr();
    let all_output  = "";
    //for (const key in hsciistrobz.ostrdict) {
    //  all_output += `modern_${key}: ` + hsciistrobz.ostrdict[key] + " \n" ;
    //}
    all_output = hsciistrobz.ostrdict["inglish"] + " \n" + hsciistrobz.ostrdict["hindi"] ;
    set_iteksta(all_output);
}  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="flex gap-2 items-center flex-col sm:flex-row">
          <Textarea id="fta"  rows={4} className="w-full border-black" placeholder={fontekst} readOnly/>
			<Hsciifontpicker/>
		</div>
        <div className="flex">
			<button onClick={on_eu2l} className="text-wrap bg-black text-white py-2 px-4 rounded-md mx-2">
				8aiueohcg 4xvqj
			</button>
			<button onClick={on_xvjqK2u} className="text-wrap bg-black text-white py-2 px-4 rounded-md mx-2">
				KCGZS TDJQB
			</button>
			<button onClick={on_kh2uK} className="text-wrap bg-black text-white py-2 px-4 rounded-md mx-2">
				hsoft
			</button>
			<button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mx-2">
				<a href="https://github.com/zawa8/font" target="_blank" rel="noopener noreferrer">
					hscii soft utf
				</a>
			</button>
        </div>
        <div className="flex min-w-full gap-2 items-center flex-col sm:flex-row">
          <Textarea id="ita"  rows={12} className="w-full border-black" value={iteksta}  onChange={handle_ita_change} placeholder={iplaceholer} />
        </div>
        <a
            className="border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://docs.google.com/spreadsheets/d/1NatLQlQGA0nqk_cqnY2rdfeQDwZk7ARax6DFz1QnQgA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            please xdd synonyms
          </a>        
      </main>
    </div>
  );
}
