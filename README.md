# Lab 5 - Starter

**Name:** Steven Nguyen
**AID:** A18549206

## GitHub Pages Links

- [Expose - Party Horn](https://nguyensd0317.github.io/Lab5_Starter/expose.html)
- [Explore - Speech Synthesis](https://nguyensd0317.github.io/Lab5_Starter/explore.html)

## Check Your Understanding

**1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not?**

No. Sending a message requires a bunch of steps to work together, like typing it, sending it over the internet, and the other person receiving it. A unit test only tests one small piece of code by itself, so it wouldn't work well here.

**2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?**

Yes. All it does is check if the message is too long or not. That is one small piece of logic that you can easily test on its own by passing in short and long strings and checking the result.
