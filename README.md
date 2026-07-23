# Smart Password Generator

#### Video Demo: 
https://youtu.be/lF1mJzUC9nI?si=B9j3FwHKAqTcNO9-

#### Live Demo: https://saudqxx.github.io/Smart-Password-Generator/

## Description

Smart Password Generator is my final project for CS50's Introduction to Computer Science.

The goal of this project is to help users create strong passwords that are also easier to remember. Many password generators create completely random passwords that are very secure but difficult to memorize. This project takes a different approach by allowing the user to enter an optional memory hint (such as a word or name). The application transforms that reminder into a stronger password by applying different security techniques while still keeping part of the original word recognizable.

If the user does not want to use a memory hint, the application can also generate a completely random password using a cryptographically secure random number generator provided by the browser.

The project is built entirely with HTML, CSS, and vanilla JavaScript without using any external frameworks. One of my goals was to build everything from scratch so I could better understand how web applications work internally.

## Project Features

The application includes several features:

- Generate completely random passwords.
- Generate memorable passwords using an optional memory hint.
- Select password length between 8 and 64 characters.
- Enable or disable uppercase letters.
- Enable or disable lowercase letters.
- Enable or disable numbers.
- Enable or disable symbols.
- Password strength analyzer.
- Entropy calculation.
- Estimated password cracking time.
- Password improvement suggestions.
- Copy password with one click.
- History of the last five generated passwords.
- Dark mode and light mode.
- English and Arabic language support.
- Responsive design for desktop and mobile devices.

## How Password Generation Works

When generating a password, the application first determines which character categories are enabled by the user.

For completely random passwords, the application uses the browser's `crypto.getRandomValues()` API instead of `Math.random()`. This produces cryptographically secure random values and makes the generated passwords significantly more secure.

When a memory hint is entered, the application performs several transformations:

- Removes unnecessary spaces.
- Randomly converts some letters to uppercase.
- Replaces certain letters with stronger alternatives such as:
  - a → @
  - e → 3
  - i → 1
  - o → 0
  - s → $
  - t → 7
- Adds random characters before and after the transformed word.
- Ensures that every selected character category is represented in the final password.

This approach creates passwords that remain easier to remember than completely random strings while still improving their security.

## Password Analyzer

The project also includes a password analyzer.

Instead of only checking password length, the analyzer evaluates several different aspects:

- Password length.
- Character pool size.
- Estimated entropy.
- Estimated cracking time.
- Repeated characters.
- Sequential patterns such as "abc" or "123".
- Common passwords or commonly used words.

Based on these checks, the application classifies the password into one of five strength levels:

- Very Weak
- Weak
- Medium
- Strong
- Very Strong

The analyzer also provides suggestions that help users improve weak passwords.

## Project Files

### index.html

This file contains the structure of the entire application.

It defines the layout for:

- Password generator
- Password analyzer
- Password history
- Language switch
- Theme switch
- User controls

### style.css

This file contains all styling for the application.

It includes:

- Responsive layout
- Dark theme
- Light theme
- Mobile optimization
- Animations
- Typography
- Color system
- Password highlighting

The application uses CSS custom properties (variables) to simplify theme switching.

### script.js

This file contains all application logic.

Major responsibilities include:

- Secure password generation
- Memory hint transformation
- Password analysis
- Entropy calculation
- Crack time estimation
- Password history
- Clipboard support
- Theme switching
- Language switching
- UI updates

Almost all functionality of the project is implemented inside this file.

## Design Decisions

One important design decision was choosing to use vanilla JavaScript instead of a framework such as React.

Since this project was created for CS50, I wanted to strengthen my understanding of the core technologies before relying on external libraries.

Another design decision was implementing password generation with the browser's cryptographic API instead of using `Math.random()`, because security is one of the primary goals of the project.

I also decided to support both English and Arabic. Instead of creating two separate versions of the application, I implemented a translation system that updates the interface dynamically.

Finally, I wanted the interface to remain clean and simple while still providing advanced functionality. The password generator, analyzer, and history are separated into different sections to improve usability.

## Development Challenge

As a personal challenge, I challenged myself to complete the initial working version of this project in approximately one hour.

I started working on it around 3:00 AM and focused on finishing a complete functional version before going to sleep. Although additional improvements were made afterward, this challenge helped me practice rapid planning, implementation, and problem solving under a strict self-imposed time limit.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Web Crypto API

## Future Improvements

Possible future improvements include:

- Password breach checking using public APIs.
- Export password history.
- Password generation presets.
- Advanced password policies.
- Password strength visualization improvements.
- Offline Progressive Web App (PWA) support.

## Author

Saud Qattan

## License

This project was created as the CS50 Final Project for educational purposes.