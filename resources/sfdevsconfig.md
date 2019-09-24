**John 8:14 AM**
> Hi, I'm planning on talking at code camp on TS, (like my learning path and stuff) anyone here use it in production and have some features they think are worth mentioning?

**Erik 8:19 AM**
> Types are pretty great. :smile:

> :smile: x2

> And I like to use enums for different states of a UI. Then you can pass around the symbol (along with the type checking that comes with that) rather than messy, error-prone strings.

**John 8:24 AM**

> When you say symbol are you talking about the resulting enum, or Symbol()?

**Erik 8:24 AM**

>Also if you have, say, an object with a signature of {id?: number, ... } and you later go if (obj.id), TS is “smart” enough to know that you can safely access the id attribute within that block and still warn you it might not be there outside that block.

> Not Symbol(), no.

> The resulting enum

> Just a couple small things off the top of my head that make me smile.

**John 8:42 AM**

> Alright thank you! Definitely gonna include enums. I now have a spot in mind already

**bryanburgers 8:47 AM**

> As somebody who has learned (1) JS and (2) typed languages, but never (3) Type Script I would be mostly curious about how gradual typing works. Is it a goal to get to 100% typed? Are there pitfalls with that goal? One of the huge advantages of JS is the ecosystem. How do you deal with all of those libraries that aren’t actually written in TS? Are there any compiler-type optimizations that can be made once types are known?

> (Unfortunately, I won’t be able to attend code camp, but I’d love to come to this talk. :disappointed:) (edited) 

**John 8:49 AM**

> Non TS Libraries is something I'm actually planning on diving deeper into, cause it is an important one.

> :+1: x1

> I'm also planning on putting all my work on github when it's done

> :+1: x2

**sclarson:archer: 2:54 PM**

> It’d be interesting to show where typescript can do more with its type system than c#

**Erik 3:00 PM**

> In the browser!

> rancorous applause

> Yes, yes, yes. Blazor notwithstanding.
--- Next day ---

**Chris 8:21 PM**

> I could list a lot, one of the most mind blowing things to a C#/Java dev is something like Union types:

> https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types

> So crazy useful in actual day to day coding.

> That covers a case that blows C#'s type system out of the water.

> A lot of these typing tricks are necessary to handle the js libs that exist in the wild, and the crazy stuff people have done.

> https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types are also interesting, but haven't found as much of a use for them.

> One of the first reasons I implemented TS on a large project a few years ago is the "Full Stack" .net people had a lot of problems with "this" in js (as most people do)

> using arrow functions was a big win:

> https://basarat.gitbooks.io/typescript/docs/arrow-functions.html

> "this has traditionally been a pain point in JavaScript. As a wise man once said "I hate JavaScript as it tends to lose the meaning of this all too easily". Fat arrows fix it by capturing the meaning of this from the surrounding context."

> Barrels are a nice convenience:

> https://basarat.gitbooks.io/typescript/docs/tips/barrel.html

> (use a lot in Angular, but generally useful)

> I think TS is my current favorite production language. I like C#, but I still find new stuff in TS all the time that's interesting. Fun to play around and see what you can come up with.

> That's the nice thing about the type system, you can use it at "full strength" or you can back off a little and use the expressiveness of the underlying dynamic js language.

> I would also be sure to mention structural typing vs the nominal typing of C#. This has some times been referred to as duck typing.

> Golang also has something a bit similar in the way you can do composition with structs:

> https://odetocode.com/blogs/scott/archive/2019/01/03/composition-over-inheritance-in-go.aspx

**Chris 8:44 PM**

> And most popular (and unpopular) libs have typings now. A lot of vendors, etc are including them by default.

> DT is the main storage location:

> http://definitelytyped.org/

> Seach for a lib: https://microsoft.github.io/TypeSearch/

> You'll find types for react/vue/jquery/whatevs

> You can also build your own. I did this for Tableau, but I see there's a typing file in DT now for it. I always meant to upload mine at some point.

> definitelytyped.org

> Home | DefinitelyTyped

> The repository for high quality TypeScript type definitions

> :raised_hands: x1

> You can "type" as little of the api of a lib/package as you need. Gradual typing works very well.

**cthames 9:07 PM**

> https://httptoolkit.tech/blog/5-big-features-of-typescript-3.7/

> httptoolkit.techhttptoolkit.tech

> The 5 Big Features of TypeScript 3.7 and How to Use Them

> The TypeScript 3.7 release is coming soon, and it's going to be a big one.The target release date is November 5th, and there's some…

