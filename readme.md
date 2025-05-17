# this repository is for npmjs hsciistr package.
by hscii(uname) email : heksadesiml@gmail.com
hsciistr is a multilngual string(npmzs library) to transliterate below indian/nepal/srilanka/bangladesh languages.
	1. assαmi
	1. bengαli/banglα (bangladeh)
	2. oriyα/odiα
	3. тelugu
	4. тamil
	5. malayαlam
	6. kannadα
	7. marαthi
	8. guzrαтi
	9. ɦinԃi
	10. punzαbi/gurmukhi
	11. sanskriт
	12. sinɦalα
to: 
	1. modern_inglish (europe/usa/canda/australia english + 4αԃɦт)
	2. modern_indian_languages (india hindi bangla bengali telugu tamil kannada malayalam oriya gurmukhi guzrati )
	3. modern_korean (korea)
	3. modern_bangla (bangladesh)
this module to be used in the webextension:
1. [hscii transliterator webapp](https://hscii,vercel.app)
1. [firefox addon ztr](https://addons.mozilla.org/en-US/firefox/addon/ztr/).

#### steps to install this in zawascript webapp prozect
1. "bun add hsciistr" or "npm add hsciistr"

### source code eksecution phlo

1. package.json -> hsciistr (in hsciistr.js hsciistr is zawascript class with below dAtAl/obzektAl/functional members)
	1. constructor: hsciistr(istr="", fromstr="ascii_and_indikutf", tostr="inglish")
	1. allowedfromstr = ['ascii_eng', 'indikutf', 'ascii_and_indikutf'];
	1. allowedtostr = [
		  "all", "inglish", "korean", "russian", "hindi", "bangla", "gurmukhi", "guzrati",
		  "oriya", "tamil", "kannada", "telugu", "malayalam", "sinhala"
		  ]
	1. setistr(istr) { this.istr = istr ; return this ; }
	1. setfromstr(fromstr) { this.fromstr = fromstr ; return this ; }
	1. settostr(tostr) { this.tostr = tostr ; return this ; }
	1. duztr() { /trαnsliteration code/ ;  return this ; }
	1. transliterate_dom_node(node_arg)
	1. untransliterate_dom_node()
	1. xvjqK2hindi() { /trαnsliteration code/ ;  return this ; }
	1. kh2hindiK() { /trαnsliteration code/ ;  return this ; }
### steps to clone , build , test & publish

1. git clone ... # this repozitri
2. change source(do not change version in package.json, npm version command in next step vill change version no) if needed
2. test : hsciistr/test $node script.js
3. if tests passed then only : git commit & publish
  > git add . ; git commit -am "some comments" ; git push
4. npm version patch
5. npm login
6. npm publish

### steps to use library

1. define **[ascii or hscii or code mapping][code_map_sheet]** as in example zabc.js in this repository.
1. it is to define a dictionary with keys as :

```js
1. import library as in your js file:

```js
import hsciistr from 'hsciistr';
/* hsciistr(istr="", fromstr="ascii_and_indikutf", tostr="inglish")
	allowedfromstr = ['ascii_eng', 'indikutf', 'ascii_and_indikutf'];
	// array for indikutf languages (india/nepal/srilanka/bangaldesh langauges)
	allowedtostr = [
	  "all", "inglish", "korean", "russian", "hindi", "bangla", "gurmukhi", "guzrati",
	  "oriya", "tamil", "kannada", "telugu", "malayalam", "sinhala"
	];
	hsciistr.ostrdict = {
		  inglish: "", korean: "", russian: "", hindi: "", bangla: "", gurmukhi: "", guzrati: "",
		  oriya: "", tamil: "", kannada: "", telugu: "", malayalam:"", sinhala:"",
		};
*/
let hsciistrobz = new hsciistr("","ascii_and_indikutf","all"); 
hsciistrobz.istr = 'हिन्दी विकिपीडिया this is apple' ;
hsciistrobz.duztr();
let ing4str = hsciistrobz.istr ;
let ostrdict = hsciistrobz.ostrdict; // ing4 : 4αԃɦт=ADHT

another way 1liner : 
let ing4str = hsciistrobz.duztr().istr ;
let koreanstr = hsciistrobz.duztr().ostrdict.korean ;
/* diksneri for phonetical indian/korean/srilankan/banladesh/russian languages
	hsciistr.ostrdict = {
		  inglish: "", korean: "", russian: "", hindi: "", bangla: "", gurmukhi: "", guzrati: "",
		  oriya: "", tamil: "", kannada: "", telugu: "", malayalam:"", sinhala:"",
		};
*/
more usecase/testcases of hsciistr are in ./test/script.js
to run tests :
~/somepathinyourpc/hsciistr/test $node script.js
[code_map_sheet]: https://docs.google.com/spreadsheets/d/e/2PACX-1vRYY_On0oQlYqCH8KrAuNy9nxnUKRx9dG6UvjoZjbP1ZVeXX6VcHl-sU2yg9jbAFszCcNZ5STK47_rz/pubhtml

ascii510 : american standard code for information interchange
decimal digits : 0 1 2 3 4 5 6 7 8 9
5+5=10

hscii810 : heksadesiml standard kode for informesn interchenz
heksadesiml dizits : 0 1 2 3 4 5 6 7 8 9 L Y V W P F
8+8=10=wnti=4*4=solɦ=ekti
[4 finger 1 тhumb 4ft1_maтhs](https://github.com/zawa8)
