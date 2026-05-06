# Lab 5 - Starter

**Name:** Steven Nguyen
**AID:** A18549206

Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Check Your Understanding

**1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not?**

No, you would not use a unit test for this. The "message" feature involves multiple components working together — writing a message, sending it over a network, storing it in a database, and delivering it to the recipient. This spans across multiple systems and modules, making it better suited for integration or end-to-end testing rather than unit testing, which is designed to test small, isolated pieces of code.

**2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?**

Yes, you would use a unit test for this. The "max message length" feature is a single, isolated validation check — it simply verifies whether a string exceeds 80 characters. This can be tested independently without needing other parts of the application, making it a perfect candidate for unit testing. You can pass in strings of various lengths and assert whether the function correctly accepts or rejects them.
