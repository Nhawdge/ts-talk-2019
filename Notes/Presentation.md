# Intro to Typescript

Hi, I'm John Pavek. If you're a member of the SF devs slack you might recognize me as the face next to the wonderful jokes. If not, you might recognize me from ... Hyvee maybe? Anyway. I'm a back end developer at Blend Interactive. We're an agency downtown and we work on some midrange to large sites. I've been working promoting Typescript as a way to help our team get more in sync and productive. 

I recently started reading a book called _The Imposters Handbook_, it's for people like me, who don't have a computer science degree, but would like to still understand jokes about polynomial time. One of the lines from the book that really hit home, was basically "The [function] signature is the theory, and the [function] body is the proof." It makes a lot of sense when you think about it, until now, had you connected those dots?

Time travel with me to about 2 weeks before I started writing this talk. My wife, my daughter, and I are at Perkins about to place our order. The waitress looks my way with her pen and notebook in hand. I point to my planned dinner, a wonderful biscuits and sausage gravey with hashbrowns and over easy eggs, and say to her, "I'll have the biscuits and gravey Please." Her hand starts jotting down the short hand and she looks back up at me. I look down at the menu more closely and see -- Oh, this comes with hashbrowns or breakfast potatoes. Well of course I'm going to have the hashbrowns. Then she writes some more. Her eyes come back to me yet again. Oh did I forget something? Of course I did. I'll take the over easy eggs please.

So basically what we ended up with was [in JS] 
```
function OrderFood(){
    selection = ...arguments;
}
```
Now my server has the function body, she knows what's going to happen here, but all I had was the signature of `OrderFood()`. 
Let's rewind this scenario and add make my server more strongly typed. 

> What would you like for your meal? 

> Biscuits and gravy
 
> Okay that comes with either breakfast potatoes or hasbrowns, and how ever you would like your eggs cooked.

> Hashbrowns and over easy eggs please.
 
Now in Typescript we could represent this like so:
```
function OrderFood(MealName: string, mealParameters: object) : Food
```
We have our function that gives a clear idea of what it complishes. The function requires the name. That I can get from the menu, and the item description, gives me the parameters for the hashbrowns and eggs.

Now this is a very forced example. You're probably thinking, we could use javascript without the types and get similar results, as in;
```
function OrderFood(MealName, MealParameters)
```
And we sure can. But what happens when I say
```
OrderFood("Cheese Burger", ["Over easy", "Hashbrowns"]);
```
I gave you an array of strings where you're actually looking for an object with key value pair. 

We're really pulling hairs to make this example work, so lets make this a little more real. 

You're working on a project and your front end dev just handed it off to you. There's a rating system on the page and the front end dev left a function that generates SVGs to show how many stars are clicked on. The function signature looks something like this
```
function GenerateRatingStars(rating)
```


