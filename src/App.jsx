import { useState } from "react";
import { LandingPage } from "../src/pages/LandingPage";
import { Particles } from "../src/components/Particles";
import { Typewriter } from "../src/pages/Typewriter";

// 1. Database of all student letters structured exactly like your demo
const studentStories = {
  "22-00164JUM": {
    studentId: "22-00164JUM",
    scenes: [
      { text: "Letter for student 1 starts here...", speed: 60, color: "#ffffff" },
      { text: "Next line of their letter...", speed: 50, color: "#ffd166" }
    ]
  },
  "2024-00456": {
    studentId: "2024-00456",
    scenes: [
      { text: "Letter for student 2 starts here...", speed: 60, color: "#ffffff" }
    ]
  },
  "25-01881SGP": {
  "studentId": "25-01881SGP",
  "scenes": [
    {
      "text": "I wanted to take a moment to thank you...",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "...for being someone I can always genuinely count on.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "And yes, in terms of financial support too—haha!",
      "speed": 40,
      "color": "#ffd166"
    },
    {
      "text": "Kidding aside, thank you for being so incredibly supportive throughout our entire journey together.",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "It is truly amazing to know that people like you exist in this world.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "Looking back to when we had our first class together,",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "I knew right away that you were something special.",
      "speed": 65,
      "color": "#ffd166"
    },
    {
      "text": "You were clearly smart, focused, and carried yourself with a demeanor that practically screamed \"responsible.\"",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "It turns out my judgment was spot on.",
      "speed": 50,
      "color": "#ffffff"
    },
    {
      "text": "What I admire most about you is how you keep striving,",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "...even through the hardest times.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "You’ve faced tough battles—including the devastating loss of a loved one—",
      "speed": 80,
      "color": "#ffffff"
    },
    {
      "text": "...and your persistence through it all has always deeply impressed me.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "Having once been in your position myself, I truly understand the weight of what you carried,",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "...which makes watching your growth even more incredible.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "Looking at where you started versus where you are now, you have improved in so many ways.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "Name any area of growth, and I’ll be the first to agree with you.",
      "speed": 50,
      "color": "#ffd166"
    },
    {
      "text": "Of course, I can't write this without mentioning one of my favorite things about you:",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "your unique talent for being hilariously double-sided when you speak.",
      "speed": 50,
      "color": "#ffffff"
    },
    {
      "text": "You always keep us trapped in that guessing game of, \"Wait, is this an insult or a praise?\"",
      "speed": 45,
      "color": "#ffd166"
    },
    {
      "text": "But honestly, that’s where your most genuine compliments hide.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "To be completely honest, there might not be a ton of things I'll miss...",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "...but whenever I eat out, I will definitely miss your treats!",
      "speed": 45,
      "color": "#ffd166"
    },
    {
      "text": "Coffee, food, milk tea—you name it, you were always generous.",
      "speed": 50,
      "color": "#ffffff"
    },
    {
      "text": "As you move forward, I pray that you find immense success in life, no matter what career path you choose.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "Through it all, always remember to stay humble and keep God at the center of your journey,",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "...knowing that He is watching over you and guiding you according to His will.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "So, farewell for now!",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "This obviously isn’t the last time we'll speak, and there is still so much left unsaid.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "But as you know, I’ve never been the best with words,",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "...and text alone can’t fully convey how much your presence has meant to me.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "Wishing you all the best,",
      "speed": 70,
      "color": "#ffffff"
    }
  ]
},
"25-01868ACM": {
  "studentId": "25-01868ACM",
  "scenes": [
    {
      "text": "You completely fooled me at first.",
      "speed": 50,
      "color": "#ffd166"
    },
    {
      "text": "I honestly thought you were going to be a crybaby all the way until graduation,",
      "speed": 45,
      "color": "#ffffff"
    },
    {
      "text": "...but you proved me entirely wrong.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "You improved, and you just kept on improving.",
      "speed": 60,
      "color": "#ffd166"
    },
    {
      "text": "Even if that doesn't sound real coming from me, I promise you it's true from my perspective.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "Of course, you are also hands-down the best person I know at gaslighting.",
      "speed": 45,
      "color": "#ffd166"
    },
    {
      "text": "You are at your absolute best when you're procrastinating—",
      "speed": 50,
      "color": "#ffffff"
    },
    {
      "text": "...somehow managing to follow up on tasks immediately, communicate seamlessly, and execute plans at the last minute.",
      "speed": 40,
      "color": "#ffffff"
    },
    {
      "text": "And your overthinking? It actually makes perfect sense...",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "...sometimes. :>",
      "speed": 75,
      "color": "#ffd166"
    },
    {
      "text": "Looking back at where we started, we’ve really come a long way.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "I still remember the days when I needed a lot of courage just to keep striving for what I have right now.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "Your unique way of making decisions—",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "...and the absolute confidence you have to trust your own judgment every single day...",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "...man, what a fella.",
      "speed": 80,
      "color": "#ffd166"
    },
    {
      "text": "Walking down memory lane reminds me of everything we’ve shared together:",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "the moments, the thoughts, the opinions.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "We’re on the exact same frequency sometimes.",
      "speed": 55,
      "color": "#ffd166"
    },
    {
      "text": "Though, turns out I’m actually more \"racist\" than you are,",
      "speed": 45,
      "color": "#ffffff"
    },
    {
      "text": "...which is weird because I totally thought it was the opposite!",
      "speed": 40,
      "color": "#ffd166"
    },
    {
      "text": "Jokes aside, you are one incredibly lucky person to be gifted with so much knowledge...",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "...and the genuine willingness to help anyone within your reach.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "Not many people can do that.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "To be completely honest, there isn't just one single moment I can point to as a \"core memory.\"",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "Instead, it's you as a whole.",
      "speed": 80,
      "color": "#ffd166"
    },
    {
      "text": "As a friend, you've imprinted your name on my mind.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "You are a friend I will always remember, through the bitter times and the happy times.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "Always.",
      "speed": 90,
      "color": "#ffd166"
    },
    {
      "text": "I truly wish us both success on this path and career we are taking.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "I know you are a righteous person who makes decisions based on facts and what genuinely makes you happy.",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "So, keep improving—",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "for the future, for yourself, and for the people you are bound to influence someday.",
      "speed": 75,
      "color": "#ffffff"
    }
  ]
},
"25-02068JBT": {
  "studentId": "25-02068JBT",
  "scenes": [
    {
      "text": "To the person who first gave me the nickname “Walang mata”—",
      "speed": 50,
      "color": "#ffd166"
    },
    {
      "text": "gosh, was I really that much of a night owl back then?",
      "speed": 45,
      "color": "#ffffff"
    },
    {
      "text": "First of all, if someone were to ask me to describe you in just one word,",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "I used to think of you as superior.",
      "speed": 70,
      "color": "#ffd166"
    },
    {
      "text": "You talk like one, and you act like one—",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "but it’s totally understandable because you’re someone who actually wants to make things happen.",
      "speed": 50,
      "color": "#ffffff"
    },
    {
      "text": "Behind that fierce, sometimes angry attitude, you are a deeply reasonable person.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "You are also someone who never forgets to repay the kindness that others have shown you.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "I truly believe you’ve been strengthened during these past four years of learning,",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "and I know you will only continue to grow stronger.",
      "speed": 75,
      "color": "#ffd166"
    },
    {
      "text": "They say you're a social butterfly, easily making friends wherever you go.",
      "speed": 50,
      "color": "#ffffff"
    },
    {
      "text": "Every single word you speak has a real thought behind it, and I’ve always looked up to that.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "I really appreciate how reasonable you are,",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "especially when you make sure that procedures and rules are properly followed.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "DAPAT LANG NAMAN DIBA??? Hahahaha!",
      "speed": 40,
      "color": "#ffd166"
    },
    {
      "text": "I only say that because, well... I tend to break the rules sometimes.",
      "speed": 50,
      "color": "#ffffff"
    },
    {
      "text": "Your journey has been a human testament to the fact that challenges really do strengthen people.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "As the saying goes, it’s all in the eye of whoever is at war.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "You proved that you didn't falter, even amidst the toughest challenges.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "I honestly even expected you guys to win Best Capstone because you’ve completely proven how resilient you are.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "To be honest, we might not have a ton of specific memories that stand out as significant,",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "but that doesn't mean you aren't important to me.",
      "speed": 75,
      "color": "#ffd166"
    },
    {
      "text": "Your views, your unique perspective, and the way you look at people will always be remembered and looked up to.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "Mag miming pa tayo !!",
      "speed": 45,
      "color": "#ffd166"
    }
  ]
},
"25-01872PCO": {
  "studentId": "25-01872PCO",
  "scenes": [
    {
      "text": "I wanted to take a cold, quiet moment right after the chaos of walking across that stage...",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "...to just say thank you for everything.",
      "speed": 70,
      "color": "#ffd166"
    },
    {
      "text": "Looking back, we’ve shared it all—all the laughs, all the cries, and everything in between.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "Even though you aren't always the most naturally expressive person,",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "you always found a way to show us that you cared, in your own distinct way.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "If I’m being completely honest, when I first met you, I had you totally misjudged.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "I thought you were... well, submissive.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "But it only took a few weeks for that illusion to shatter!",
      "speed": 40,
      "color": "#ffd166"
    },
    {
      "text": "It turned out you actually have a bit of a superiority complex.",
      "speed": 50,
      "color": "#ffffff"
    },
    {
      "text": "But the beautiful thing is that none of those surface-level traits stood out in the end.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "Who you truly are is someone who remains steadfast, bold, and fiercely unapologetic about showing what you really feel.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "Thank you for trusting us enough to share your story, your raw feelings, your impulsive late-night decisions, and pretty much everything else.",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "One thing I’ve always genuinely admired about you is your love for reading.",
      "speed": 65,
      "color": "#ffd166"
    },
    {
      "text": "To be honest, I am not a bookish person at all.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "But being around you made me realize that with the right person and the right habits,",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "I might actually want to dive into those countless stories I never even knew existed.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "You made it look like a world worth exploring.",
      "speed": 70,
      "color": "#ffd166"
    },
    {
      "text": "It’s wild to look at who we were on day one compared to who we are today standing in our caps and gowns.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "We used to be so loud, so noisy, and so desperately longing for people to depend on.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "Yet, here we are now—independent, grounded, and moving forward into a completely new chapter.",
      "speed": 70,
      "color": "#ffd166"
    },
    {
      "text": "Of course, I can't write this without bringing up one of the most unforgettable memories I have with you.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "Remember third year, when I completely wiped out and caught myself in an accident right on your stairs?",
      "speed": 45,
      "color": "#ffffff"
    },
    {
      "text": "Damn, that hurt!",
      "speed": 40,
      "color": "#ffd166"
    },
    {
      "text": "But honestly? I don’t regret it for a second.",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "Right before that happened, I was helping you carry your stuff while you were moving.",
      "speed": 50,
      "color": "#ffffff"
    },
    {
      "text": "It’s actually hilarious—and slightly embarrassing—",
      "speed": 45,
      "color": "#ffffff"
    },
    {
      "text": "...to realize that I literally know the layout of every single dorm you’ve moved into.",
      "speed": 45,
      "color": "#ffffff"
    },
    {
      "text": "I guess I was your permanent moving crew!",
      "speed": 40,
      "color": "#ffd166"
    },
    {
      "text": "Whatever the future holds next, my deepest wish is that we both find true success in life.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "I hope we always strive for whatever brings us genuine happiness,",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "...and that we never stop improving ourselves for the future we want to build.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "We made it through this chapter, and I know that in the will of God, the next one will be even greater.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "Congratulations to us.",
      "speed": 80,
      "color": "#ffd166"
    }
  ]
},
"25-01850TPO": {
  "studentId": "25-01850TPO",
  "scenes": [
    {
      "text": "If I haven’t said it enough lately,",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "...please know how much I truly appreciate the way you always disturb my silence.",
      "speed": 75,
      "color": "#ffd166"
    },
    {
      "text": "I don't mean that in a bad way at all.",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "The truth is, there have been so many times when I desperately needed someone to reach out to me—",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "...to pull me out of my own head—",
      "speed": 80,
      "color": "#ffffff"
    },
    {
      "text": "...even if it was just to talk about the most random, meaningless topic.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "Without fail, you always seemed to have the most perfect timing.",
      "speed": 70,
      "color": "#ffd166"
    },
    {
      "text": "It’s funny to think about our very first interaction.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "I was actually the one who pushed so hard to talk to you.",
      "speed": 50,
      "color": "#ffffff"
    },
    {
      "text": "Back then, something inside just told me that you and I were alike in ways the rest of the world might not see.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "And I was right.",
      "speed": 75,
      "color": "#ffd166"
    },
    {
      "text": "You might not even notice it yourself, but you have this incredible ability to understand things quickly,",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "...to be unapologetically honest, and most importantly, to prioritize yourself when you need to.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "If I’m being completely transparent, I’ve always been a little jealous of that part of you.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "For a long time, I was the type of person who prioritized everyone else above myself,",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "...and watching you protect your own peace was like watching a masterclass in self-love.",
      "speed": 70,
      "color": "#ffd166"
    },
    {
      "text": "Through all the chaotic ups and downs of these school years,",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "watching you grow into the person you are today has made me so incredibly proud.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "I know it hasn't been easy.",
      "speed": 80,
      "color": "#ffffff"
    },
    {
      "text": "You lost a loved one, and you’ve had to carry the heavy, silent burden that comes with being the eldest.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "Yet, despite the weight on your shoulders, new opportunities are constantly presenting themselves to you now.",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "You've fought hard to get here; all you have to do now is reach out and grasp them.",
      "speed": 65,
      "color": "#ffd166"
    },
    {
      "text": "I am going to miss our escapes to Daniel’s so much—",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "...even if we had to keep those trips a secret sometimes.",
      "speed": 45,
      "color": "#ffd166"
    },
    {
      "text": "On the days when I felt completely trapped inside the prison of my own thoughts,",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "...you were always the one to open the lid and pull me back out into the light.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "I’ll miss your random voice messages in the middle of our conversations, and that signature, high-pitched laugh of yours.",
      "speed": 50,
      "color": "#ffffff"
    },
    {
      "text": "Don't tell anyone I said this, but... it’s actually really cute.",
      "speed": 45,
      "color": "#ffd166"
    },
    {
      "text": "Of all the chaotic, hilarious, and unforgettable moments we’ve shared,",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "my absolute favorite will always be the way you randomly shout my name across the classroom.",
      "speed": 45,
      "color": "#ffffff"
    },
    {
      "text": "Just like the intro to our friendship, it completely disturbs my silence in the best way possible.",
      "speed": 60,
      "color": "#ffd166"
    },
    {
      "text": "Whatever comes next for us after we leave these halls, I sincerely pray for our success.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "I pray that we both find the strength to conquer whatever heavy thoughts and battles are lingering inside our heads.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "And remember, no matter how far we drift into our own separate lives or how busy the future gets, I am always going to be here.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "My door is never closed to you.",
      "speed": 85,
      "color": "#ffd166"
    },
    {
      "text": "Whenever the weight of the world gets a bit too heavy, or when you just need someone to talk to, never hesitate to reach out.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "You don't ever have to carry things alone.",
      "speed": 80,
      "color": "#ffffff"
    },
    {
      "text": "Thank you for being my perfectly-timed distraction, and for always knowing how to bring me back to reality.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "-Migol",
      "speed": 60,
      "color": "#ffd166"
    }
  ]
},
"25-01867JAM": {
  "studentId": "25-01867JAM",
  "scenes": [
    {
      "text": "First of all, Congratulations, Summa Cum Laude!",
      "speed": 65,
      "color": "#ffd166"
    },
    {
      "text": "Looking back at these past few years, I honestly don't know how I would have made it to graduation day without you by my side.",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "We’ve survived a lifetime’s worth of tears, endless laughter, and plenty of moments of sulking in the corner.",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "But through it all, we remained steadfast friends, supporting each other until this very moment.",
      "speed": 70,
      "color": "#ffd166"
    },
    {
      "text": "If I’m being completely honest, when I first met you, I thought you were just \"smart.\"",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "But I was totally wrong.",
      "speed": 65,
      "color": "#ffd166"
    },
    {
      "text": "You turned out to be one of the most genuinely intelligent people I have ever met in my life.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "I still remember the first impression you made during our first year—",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "...the soft girl with the round head and round glasses.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "I’ve always looked up to how you handle things.",
      "speed": 70,
      "color": "#ffd166"
    },
    {
      "text": "Even when you are in a terribly bad mood and the weight of the world is on your shoulders, you never crumble.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "You always look at yourself and say, \"I need to do this,\" and you just push forward.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "I have always genuinely admired that fierce determination in you.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "We’ve both changed so much since we first started this college journey, but seeing how much you’ve grown has been so fulfilling.",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "The difference between who you were in first year and who you are today, standing at the very top of our class, is absolutely incredible.",
      "speed": 70,
      "color": "#ffd166"
    },
    {
      "text": "Let’s take a quick trip down memory lane for a second,",
      "speed": 55,
      "color": "#ffffff"
    },
    {
      "text": "...because I was just thinking about that one unforgettable time we were together in the classroom—just the two of us.",
      "speed": 60,
      "color": "#ffffff"
    },
    {
      "text": "Out of nowhere, the security guard caught us sitting there and, with total seriousness, asked me if I was gay.",
      "speed": 45,
      "color": "#ffffff"
    },
    {
      "text": "And what did I say? “Medyo po.”",
      "speed": 40,
      "color": "#ffd166"
    },
    {
      "text": "Damn it! Let the record show: I AM NOT REALLY GAY!",
      "speed": 35,
      "color": "#ffffff"
    },
    {
      "text": "But in that high-stakes moment, we both knew that was the absolute only line that could save us from getting reported and staying out of trouble.",
      "speed": 45,
      "color": "#ffffff"
    },
    {
      "text": "It’s easily one of the funniest, most chaotic highlights of our college life.",
      "speed": 50,
      "color": "#ffd166"
    },
    {
      "text": "This letter may be short, and these aren't the only things I want to say to you—",
      "speed": 65,
      "color": "#ffffff"
    },
    {
      "text": "...it’s just that I’ve completely run out of words.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "But you know me better than anyone; I’ve always been a person who chooses to show my appreciation through actions rather than just saying it.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "Whatever the future may hold for us next, I have complete hope in God.",
      "speed": 70,
      "color": "#ffffff"
    },
    {
      "text": "Through sincere prayers, I know we will be able to overcome whatever challenges and obstacles we might encounter down the road.",
      "speed": 75,
      "color": "#ffffff"
    },
    {
      "text": "No matter how high you fly or where life takes you, I will still be right here as your friend, always ready to help whenever you need me.",
      "speed": 80,
      "color": "#ffd166"
    },
    {
      "text": "I’m definitely going to miss you... haha!",
      "speed": 45,
      "color": "#ffffff"
    },
    {
      "text": "With love and pride, \n - Migol",
      "speed": 70,
      "color": "#ffd166"
    }
  ]
}
  // We will add the other 4 students right here...
};

// Extract keys automatically to validate valid IDs
const validStudentIds = Object.keys(studentStories);

export default function App() {
  const [story, setStory] = useState(null);
  const [step, setStep] = useState(0);

  const validateStudentId = (id) => {
    return validStudentIds.includes(id);
  };

  const handleSuccess = (id) => {
    // 2. Dynamically pull the exact letter matching the inputted ID
    const matchedStory = studentStories[id];
    
    if (matchedStory) {
      setStory(matchedStory);
      setStep(0);
    } else {
      alert("ID not found"); // Fallback safety check
    }
  };

  const handleComplete = () => {
    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 1500);
  };

  // STORY MODE
  if (story) {
    const scenes = story.scenes;

    if (step >= scenes.length) {
      return (
        <div className="app-wrapper">
          <Particles />
          <div className="story-container">
            <h1 style={{ color: "white", margin: 0 }}>End.</h1>
          </div>
        </div>
      );
    }

    const current = scenes[step];

    return (
      <div className="app-wrapper">
        <Particles />
        <div className="story-container">
          <div className="story-text-wrapper">
            <Typewriter
              text={current.text}
              segments={current.segments}
              speed={current.speed}
              color={current.color}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </div>
    );
  }

  // LANDING MODE
  return (
    <div className="app-wrapper">
      <Particles />
      <div className="landing-wrapper">
        <LandingPage
          validateStudentId={validateStudentId}
          onSuccess={handleSuccess}
        />
      </div>
    </div>
  );
}