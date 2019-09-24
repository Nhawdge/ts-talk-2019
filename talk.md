# ~~Converting your project to~~ Typescript
A Introduction to Typescript

https://docs.google.com/presentation/d/13vI8DEe5Ka8XszwndR8__WDfgx178SsiM61u_eY1wg4/edit#slide=id.g63a70d00b1_0_58

## Table of contents 
* TypeScript.. Why
* Your First Typescript App
* Learning Typescript as you go
* Examples
* Review

## TypeScript.. Why
Better feature support without needing complex build tools

some github study, 15% errors solved at compile time

http://ttendency.cs.ucl.ac.uk/projects/type_study/documents/type_study.pdf

>Evaluating  static  type  systems  against  public  bugs,  which have  survived  testing  and  review,  is  conservative:  it  understates their effectiveness at detecting bugs during private development, not  to  mention  their  other  benefits  such  as  facilitating  code search/completion  and  serving  as  documentation.  Despite  this uneven  playing  field,  our  central  finding  is  that  both  static  type systems find an important percentage of public bugs: both Flow 0.30  and  TypeScript  2.0  successfully  detect 15%!


JS |IE|Edge|FireFox|Chrome|Safari 
---|---|---|---|---|---
ES5 | 99% | 100%| 100%| 100%|99%
ES6 |11%| 96% | 98% |98%|99%|
ES2016+|0%|46%|81%|97%|84%  


async/await

## Your First Typescript App

typescript --init

## Learning Typescript as you go.

allow JS
start adding `:any`/`as` to types

## Examples
Restaurant:
`function Restaurant()`
`public class Restaurant`

getMeal()
getMeal(name:string, modifications: object)

## Review
"Signature is the theory, body is the proof"

Incorportate TS with little effort.
Cleaner code
compiler assister



## References
https://kangax.github.io/compat-table/

Declaration files
tripleslash directives
X namespaces
X classes
X type inference
 compiler options
modules
decorators
generics
symbols
declaration mergin
X mixins
generators


Some examples, like Dart, portend that JavaScript has fundamental flaws and to support these scenarios requires a “clean break” from JavaScript in both syntax and runtime. We disagree with this point of view. We believe that with committee participant focus, the standards runtime can be expanded and the syntactic features necessary to support JavaScript at scale can be built upon the existing JavaScript standard.