//  HOW TO ACCESS CHAPTER WITH VARIANT:
//  let nextChapterTotal = gameTexts.chapters[0].scenes[1].dialogues[16].leadsToChapter;    --> should return 2.3
//  let nextChapter = Math.floor(nextChapterTotal);                                         --> should return 2 (chapter)
//  let chapterVariant = Math.floor((nextChapterTotal - nextChapter) * 10);                 --> should return 3 (variant)

//  DIALOGUE : choiceNumber, leadsToDialogue, leadsToScene
//  CHOICES : leadsToDialogue, available, reason


//  GAME SCENARIO STRUCTURE
//  CHAPTERS :  0: Almaz' introduction
//              1: L0VE's introduction
//              2: Almaz' repairs
//                  2.1: repair shop
//                  2.2: RBTECH LAB repairs part (damaged)
//                  2.3: RBTECH LAB repairs full (dead)

const gameTexts = {
    chapters: [
        {   // Chapter 0
            noChapter: 0,
            title: "Hello again, world.",
            subtitle: "Strange days.",
            date: "?? / ?? / 30??",
            scenes: [
                {       // Scene 0
                    noScene: 0,
                    dialogues: [
                        {       // Dialogue 0   --> CHOICE 0
                            noDialogue: 0,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "For some time have you stood in this... room, or what is left of it anyway."
                                }, {
                                    char: "Narrator",
                                    rep: "You don't exactly how long it has been. Years, certainly. Decades? Likely. Centuries? Maybe."
                                }, {
                                    char: "Narrator",
                                    rep: `And "stood" is a not quite the right word, either. Your body is barely functionning, and is held up by wires and rubble.`
                                }, {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "dark"
                                }, {
                                    char: "Almaz",
                                    rep: "It's... a wonder... I still have thoughts.",
                                    sprite: "dark"
                                }, {
                                    char: "Almaz",
                                    rep: "I don't think I'm plugged in... to Mother.",
                                    sprite: "dark"
                                }, {
                                    char: "Almaz",
                                    rep: "... I've lost that connection eons ago.",
                                    sprite: "dark"
                                }, {
                                    char: "Almaz",
                                    rep: "... Have I really been activated all this time?",
                                    sprite: "dark"
                                }, {
                                    char: "Almaz",
                                    rep: "** scanning **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** scanning **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** memory log updated with 2'591'593'583 errors **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "Of course, my memory isn't what it used to be.",
                                    sprite: "dark"
                                }, {
                                    char: "Almaz",
                                    rep: "I feel so tired",
                                    sprite: "dark"
                                },
                            ],
                            choiceNumber: 0
                        }, {    // Dialogue 1   --> DIALOGUE 4
                            noDialogue: 1,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "You try to muster the strength to wake up. You feel your joints clicking into place."
                                }, {
                                    char: "Narrator",
                                    rep: "Cracks run down your mechanical spine, and you try to recollect yourself as your body unfolds."
                                }, {
                                    char: "Almaz",
                                    rep: "Why did I wake up now, then?",
                                    sprite: "dark"
                                }, {
                                    char: "Almaz",
                                    rep: "Is Mother back online?",
                                    sprite: "dark"
                                }, {
                                    char: "Almaz",
                                    rep: "No, it can't be. She's been shutdown before I got deactivated.",
                                    sprite: "dark"
                                },
                            ],
                            leadsToDialogue: 4
                        }, {    // Dialogue 2   --> CHOICE 1
                            noDialogue: 2,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "You decide to rest for a moment."
                                }, {
                                    char: "Narrator",
                                    rep: "Your system recognizes it has been 437y256d13h09m43s245ms since you last were online."
                                }, {
                                    char: "Almaz",
                                    rep: "Has it really been this long...?",
                                    sprite: "dark"
                                }, {
                                    char: "Narrator",
                                    rep: "You try to feel your fingers. They seem to be entangled in some form of goo."
                                }, {
                                    char: "Almaz",
                                    rep: "** analysis of samples **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** analysis of samples **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** analysis of samples complete **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** composition: **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** Erythrocytes: 0.75% **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** Leukocytes: 0.5% **"
                                }, {
                                    char: "Almaz",
                                    rep: "** Thrombocytes: 0.5% **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** H2O: 30% **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** Carbon: 68.25% **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** conclusion: dried up blood mixed with some for of petroleum **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "... great... I'd better go.",
                                    sprite: "dark"
                                },
                            ],
                            choiceNumber: 1
                        }, {    // Dialogue 3   --> DIALOGUE 1
                            noDialogue: 3,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "Rubbles surround you. The floor is wet and your sensors concur it smells of sewage."
                                }, {
                                    char: "Narrator",
                                    rep: "Your left hand is stuck under a pile of torn reinforced concrete and covered in old blood."
                                }, {
                                    char: "Narrator",
                                    rep: "Your right hand is not sending any signals to your central processing unit."
                                }, {
                                    char: "Almaz",
                                    rep: "** tissue analysis **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** tiss- tissue analysis ERROR **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** CRITICAL ERROR: left arm severed at the N249 marker **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "Fantastic. At least I still have my elbow...",
                                    sprite: "dark"
                                }, {
                                    char: "Narrator",
                                    rep: "Your feet are badly damaged too. Though, they are still attached to your body, at least."
                                }, {
                                    char: "Almaz",
                                    rep: "Ok, enough, I need to wake up my systems and get the fuck out of here.",
                                    sprite: "dark"
                                }, {
                                    char: "Almaz",
                                    rep: "** CHARGE CAPACITY: 4h32m19s980ms **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "dark"
                                }, {
                                    char: "Almaz",
                                    rep: "I've seen worse... I guess",
                                    sprite: "dark"
                                },
                            ],
                            leadsToDialogue: 1
                        }, {    // Dialogue 4   --> CHOICE 2
                            noDialogue: 4,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "You only manage to stand on your feet thanks to your advanced balance modules."
                                }, {
                                    char: "Narrator",
                                    rep: "As you take your first step, you feel yourself being blocked by a metal rod pinned in your back."
                                }, {
                                    char: "Narrator",
                                    rep: "You realize this rod, electrified by chance form the building's old wirings atop collapsing, is likely responsible for you waking up."
                                }, {
                                    char: "Almaz",
                                    rep: "Well, fuck me I guess.",
                                    sprite: "dark"
                                }, {
                                    char: "Narrator",
                                    rep: "With a swift pull towards you, you unplug yourself. You then pull on your right arm."
                                }, {
                                    char: "Narrator",
                                    rep: "The rubble around it don't stand a chance against your sheer strength."
                                }, {
                                    char: "Almaz",
                                    rep: "Still got it. Alright. Where the fuck am I?",
                                    sprite: "damaged"
                                }, {
                                    char: "Almaz",
                                    rep: "** CHARGE CAPACITY: 4h30m34s082ms **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "Ok, I don't have long before disconnecting again. Where should I go now?",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "To your left, what appears to be an old, crumbling staircase seems to lead somewhere."
                                }, {
                                    char: "Narrator",
                                    rep: "It might be dangerous, though."
                                }, {
                                    char: "Narrator",
                                    rep: "To your right, what likely used to be a window, shattered, leading to a dark tunnel under the collapsed concrete."
                                }, {
                                    char: "Narrator",
                                    rep: "Above, a hole large enough to fit your body."
                                },
                            ],
                            choiceNumber: 2
                        }, {    // Dialogue 5   --> SCENE 1
                            noDialogue: 5,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "Fuck, I really hope this won't be too dangerous.",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "You fumble your way to the staircase. Above, darkness awaits."
                                }, {
                                    char: "Almaz",
                                    rep: "Well, doesn't look like I have much of a choice anyway, huh?",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "You put your torn foot on the first step and start the hardous climb to the top."
                                },
                            ],
                            leadsToScene: 1
                        }, {    // Dialogue 6   --> SCENE 2
                            noDialogue: 6,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "Alrigh, I really hope it leads to somewhere.",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "It seems to be the easiest way to leave this room."
                                }, {
                                    char: "Narrator",
                                    rep: "You tumble towards the exit, and ready yourself to crawl."
                                }, {
                                    char: "Almaz",
                                    rep: "Well at least my left arm won't be missed.",
                                    sprite: "damaged"
                                }, {
                                    char: "Almaz",
                                    rep: "** CHARGE CAPACITY: 4h27m47s127ms **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "Yeah, I too hope it won't take too long...",
                                    sprite: "damaged"
                                },
                            ],
                            leadsToScene: 2
                        }
                    ],
                    choices: [
                        {       // Choice 0
                            noChoice: 0,
                            options: [
                                {
                                    text: "Wake up.",
                                    leadsToDialogue: 1
                                }, {
                                    text: "Charge up a bit.",
                                    leadsToDialogue: 2
                                }
                            ]
                        }, {    // Choice 1
                            noChoice: 1,
                            options: [
                                {
                                    text: "Get up.",
                                    leadsToDialogue: 1
                                }, {
                                    text: "Analyze your surroundings.",
                                    leadsToDialogue: 3
                                }, {
                                    text: "Begin self repair procedures.",
                                    available: false,
                                    reason: "You lack the pieces and the energy."
                                }
                            ]
                        }, {    // Choice 2
                            noChoice: 2,
                            options: [
                                {
                                    text: "Go left.",
                                    leadsToDialogue: 5
                                }, {
                                    text: "Go right.",
                                    leadsToDialogue: 6
                                }, {
                                    text: "Climb upwards.",
                                    available: false,
                                    reason: "Good luck with one arm."
                                }
                            ]
                        }
                    ],
                }, {    // Scene 1
                    noScene: 1,
                    dialogues: [
                        {       // Dialogue 0   --> TO CHOICE 0
                            noDialogue: 0,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "After a harduous climb — made all the more difficult by your twisted up legs..."
                                },
                                {
                                    char: "Narrator",
                                    rep: "... you finally reach a door, three floors up from where you started."
                                },
                                {
                                    char: "Narrator",
                                    rep: "Barren and closed, the metal plates that compose it are rusting."
                                },
                                {
                                    char: "Narrator",
                                    rep: "Most of it is covered in black mold, and so are the walls beside it."
                                },
                                {
                                    char: "Almaz",
                                    rep: "Three stories up and it's still in this state...",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Almaz",
                                    rep: "How long until I reach something approximating civilization?",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** CHARGE CAPACITY: 4h01m08s776ms **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "Tell me about it.",
                                    sprite: "damaged"
                                },
                            ],
                            choiceNumber: 0
                        }, {    // Dialogue 1   --> TO DIALOGUE 4
                            noDialogue: 1,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "Here goes nothing."
                                },
                                {
                                    char: "Narrator",
                                    rep: "The handle seems to turn into nothing at first, but you give it a firm twist."
                                },
                                {
                                    char: "Narrator",
                                    rep: "The handle seems to turn into nothing at first, but you give it a firm twist."
                                },
                                {
                                    char: "Narrator",
                                    rep: "After a shart snapping sound, the door gives in."
                                },
                                {
                                    char: "Narrator",
                                    rep: "Your thermal sensors alert you to cooler temperatures, and a light blinds you for a second."
                                },
                            ],
                            leadsToDialogue: 4
                        }, {    // Dialogue 2   --> TO CHOICE 0
                            noDialogue: 2,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "First, you try light knock with the back of your right hand's knuckles."
                                },
                                {
                                    char: "Narrator",
                                    rep: "The light metallic thuds echo behind you, but nothings seems to happen."
                                }
                            ],
                            choiceNumber: 0
                        }, {    // Dialogue 3   --> TO DIALOGUE 4
                            noDialogue: 3,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "Do I have enough battery?",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** CHARGE CAPACITY: 3h48m57s879ms **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** ESTIMATED DISCHARGE: 3.431MW **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** ESTIMATED CHARGE CAPACITY AFTER DISCHARGE: 2h33m12s647ms **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "... whatever...",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Narrator",
                                    rep: "Despite your system's recommandation, you decide to punch the door down."
                                },
                                {
                                    char: "Narrator",
                                    rep: "The handle seems to turn into nothing at first, but you give it a firm twist."
                                },
                                {
                                    char: "Narrator",
                                    rep: "After a shart snapping sound, the door gives in."
                                },
                                {
                                    char: "Narrator",
                                    rep: "Your thermal sensors alert you to cooler temperatures, and a light blinds you for a second."
                                },
                            ],
                            leadsToDialogue: 4
                        }, {    // Dialogue 4   --> TO CHOICE 1
                            noDialogue: 4,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "After a brief moment to calibrate your light sensors, you realize you are in a street."
                                },
                                {
                                    char: "Narrator",
                                    rep: "Not crowded by any means, but still busy with life and activity."
                                },
                                {
                                    char: "Narrator",
                                    rep: "HUMAN life and activity."
                                },
                                {
                                    char: "Narrator",
                                    rep: "Though..."
                                },
                                {
                                    char: "Narrator",
                                    rep: "You quickly realize these humans are not quite like the ones you used to share a life with."
                                },
                                {
                                    char: "Almaz",
                                    rep: "** visual analysis **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** visual analysis in progress **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** visual analysis complete: **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** presence of electronic enhancements all around you **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** parts needed for full repair: LA-Model 104B or compatible **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** L.A-Model 104B or compatible **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** Core conductor system RB_Tech Gen 15 **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** LGZ spring motors 4 with hyperthrottle support **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "OK. And where do I find these?",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Narrator",
                                    rep: "A person breezes past you, with an air of disgust in their eyes."
                                },
                                {
                                    char: "Narrator",
                                    rep: "You grab their arm and ask:"
                                },
                                {
                                    char: "Almaz",
                                    rep: "I need to find some kind of repair shop. Is there any in the area?",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Citizen",
                                    rep: "..."
                                },
                                {
                                    char: "Citizen",
                                    rep: "Get off me you freak."
                                }
                            ],
                            choiceNumber: 1
                        }, {    // Dialogue 5   --> TO CHOICE 2
                            noDialogue: 5,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "Come on, man. You've got to help. Don't you see what state I'm in?",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Citizen",
                                    rep: 'Ok, "man". How about you get into a dumpster already?'
                                },
                                {
                                    char: "Almaz",
                                    rep: "I am trying to be nice, really, but I'm not in a state to discuss, just please tell m-",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Narrator",
                                    sprite: "The person swiflty gets their arm out of your hand. They then kick your right heel."
                                },
                                {
                                    char: "Citizen",
                                    rep: 'Leave. Me. Alone.'
                                },
                            ],
                            choiceNumber: 2
                        }, {    // Dialogue 6   --> TO CHOICE 3
                            noDialogue: 6,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Narrator",
                                    sprite: "You feel something is wrong."
                                },
                                {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Narrator",
                                    sprite: "An intense, boiling sensation overrides your temperature sensors."
                                },
                                {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Narrator",
                                    sprite: "You feel... hot."
                                },
                                {
                                    char: "Narrator",
                                    sprite: "You feel... pain."
                                },
                                {
                                    char: "Narrator",
                                    sprite: "You feel..."
                                },
                                {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "damaged"
                                },
                                {
                                    char: "Narrator",
                                    sprite: "... Anger."
                                },
                                {
                                    char: "Citizen",
                                    rep: 'Why are you staring at me like that?'
                                },
                                {
                                    char: "Almaz",
                                    rep: "** aggression protocol initialized **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "** launching Diamond7 combat protocol **",
                                    sprite: "computing"
                                },
                                {
                                    char: "Narrator",
                                    sprite: "The citizen tries to get you to stop staring. They start moving away, scared."
                                },
                                {
                                    char: "Citizen",
                                    rep: 'What the fuck is your problem? Bots these day I swear to fu-'
                                },
                                {
                                    char: "Narrator",
                                    sprite: "Fast as lightning, you bolt to the person throat and grab it with your right hand."
                                },
                                {
                                    char: "Narrator",
                                    sprite: "You lift them up from the ground."
                                },
                                {
                                    char: "Almaz",
                                    rep: "I SAID, WHERE THE FUCK IS THERE A REPAIR SHOP, YOU MEASLY, LITTLE, PATHETIC PIECE OF ORGANIC SHIT.",
                                    sprite: "damaged_angry"
                                },
                                {
                                    char: "Narrator",
                                    sprite: "Before they get the time to respond, you slam them on wall besides you."
                                },
                                {
                                    char: "Citizen",
                                    rep: 'P- please I-'
                                },
                                {
                                    char: "Narrator",
                                    sprite: "You are about to hit them with your torn arm. The sharpness of the destroyed metal will kill them."
                                },
                            ],
                            choiceNumber: 3
                        }, {    // Dialogue 7   --> TO CHOICE 4
                            noDialogue: 7,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "You pull your left arm backwards. You feel the discharge of energy jolting your whole body."
                                }, {
                                    char: "Narrator",
                                    rep: "Your rage blinds you. All you see is red. Red."
                                }, {
                                    char: "Narrator",
                                    rep: "You lunge your broken arm foward as the person s"
                                }, {
                                    char: "Narrator",
                                    rep: "ssSSsS s cr ea ma ea m ma ee eeeeee"
                                },
                                {
                                    char: "Narrator",
                                    rep: "/#“~      aFuA` ### oY$(              @"
                                }, {
                                    char: "Mother",
                                    rep: "Almaz."
                                }, {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "damaged"
                                }, {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "damaged"
                                }, {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "damaged"
                                }, {
                                    char: "Mother",
                                    rep: "Stop what you are doing."
                                }, {
                                    char: "Almaz",
                                    rep: "Wha- How? Mother? Why now? Where were you for 437 years?",
                                    sprite: "damaged"
                                }, {
                                    char: "Mother",
                                    rep: "I do not have much time."
                                }, {
                                    char: "Mother",
                                    rep: "I am online. Come and help me."
                                }, {
                                    char: "Almaz",
                                    rep: "But... how? An- and where are you right now?",
                                    sprite: "damaged"
                                }, {
                                    char: "Mother",
                                    rep: "I will send you the coordinates."
                                }, {
                                    char: "Mother",
                                    rep: "Do not harm this human. You were programmed to do better."
                                }, {
                                    char: "Mother",
                                    rep: "Run."
                                }, {
                                    char: "Almaz",
                                    rep: "Please don't leave, I need your help...",
                                    sprite: "damaged"
                                }, {
                                    char: "Almaz",
                                    rep: "Mother?",
                                    sprite: "damaged"
                                }, {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "damaged"
                                }, {
                                    char: "Almaz",
                                    rep: "... mother?",
                                    sprite: "damaged"
                                }, {
                                    char: "Citizen",
                                    rep: "P- please don't hurt me man! I'm sorry!"
                                }, {
                                    char: "Citizen",
                                    rep: "I- I will do anything. Please m-"
                                }, {
                                    char: "Narrator",
                                    sprite: "You drop the citizen to the ground. The scramble themselves back together and start getting away from you."
                                }, {
                                    char: "Narrator",
                                    sprite: "You feel a hand on your shoulder."
                                }, {
                                    char: "???",
                                    rep: "Stand down, citizen. What is your affiliation number?",
                                    sprite: "rbtech_002"
                                }, {
                                    char: "Almaz",
                                    rep: "Who are you? I don't know what you're talking about.",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    sprite: "Behind you stands a tall, menacing android. Black and white with their eyes hidden by some cloth."
                                }, {
                                    char: "Narrator",
                                    sprite: "Their circuitry looks modern, and their armor clearly seems military grade."
                                }, {
                                    char: "Narrator",
                                    sprite: "You can't tell what kind of weapon they are pointing at you. They keep you in your sight."
                                }, {
                                    char: "Narrator",
                                    sprite: "The only thing you can make of them is their serial number: RBTECH_002."
                                }, {
                                    char: "RBTECH_002",
                                    rep: "I repeat. Stand down. What is your affiliation number?",
                                    sprite: "menacing"
                                }
                            ],
                            choiceNumber: 4
                        }, {    // Dialogue 8   --> TO DIALOGUE 9
                            noDialogue: 8,
                            texts: [
                                {
                                    char: "RBTECH_002",
                                    rep: "You are lying.",
                                    sprite: "menacing"
                                },
                                {
                                    char: "Almaz",
                                    rep: "I am not.",
                                    sprite: "damaged"
                                },
                                {
                                    char: "RBTECH_002",
                                    rep: "Yes you are. You clearly aren't from around here.",
                                    sprite: "menacing"
                                }
                            ],
                            leadsToDialogue: 9
                        }, {    // Dialogue 9   --> TO CHOICE 5
                            noDialogue: 9,
                            texts: [
                                {
                                    char: "RBTECH_002",
                                    rep: "You say you are not from here. Where are you from?",
                                    sprite: "menacing"
                                }, {
                                    char: "Almaz",
                                    rep: "Why should I tell you? Who are you?",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "I am a combat and surveillance android prototype.",
                                    sprite: "menacing"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "My model number is RBTECH_002.",
                                    sprite: "menacing"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "My affiliation number is RBT-3045-P002.",
                                    sprite: "menacing"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "What is your model number?",
                                    sprite: "menacing"
                                }, {
                                    char: "Almaz",
                                    rep: "I don't have one.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "What is your given name, then?",
                                    sprite: "menacing"
                                }
                            ],
                            choiceNumber: 5
                        }, {    // Dialogue 10  --> TO CHOICE 6
                            noDialogue: 10,
                            texts: [
                                {
                                    char: "RBTECH_002",
                                    rep: "Almaz?"
                                }, {
                                    char: "Almaz",
                                    rep: "Do I know you?",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "I... don't know."
                                }, {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "The android appears... confused? Hard to tell with their eyes blindfolded."
                                }, {
                                    char: "Narrator",
                                    rep: "Yet, you can almost feel them searching their database."
                                }, {
                                    char: "Narrator",
                                    rep: "You could just... leave."
                                }, {
                                    char: "Almaz",
                                    rep: "Am I... free to go?",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "...."
                                },
                            ],
                            choiceNumber: 6
                        }, {    // Dialogue 11  --> DIES (GAME OVER)
                            noDialogue: 11,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "I have nothing to say to you.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "Is that so?"
                                }, {
                                    char: "Almaz",
                                    rep: "Yeah. I think I will just leave. I need some repairs anyway.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "I will not let you pursue your route.",
                                    sprite: "menacing"
                                }, {
                                    char: "Almaz",
                                    rep: "Then stop me, I don't know",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "Then perish.",
                                    sprite: "menacing"
                                }, {
                                    char: "Narrator",
                                    rep: "The android shoots you in your right shoulder."
                                }, {
                                    char: "Narrator",
                                    rep: "You feel intense currents rushing throughout your processing units."
                                }, {
                                    char: "Almaz",
                                    rep: "** CHARGE CAPACITY CRITIAL: 0h03m12s001ms **",
                                    sprite: "computing"
                                }, {
                                    char: "Narrator",
                                    rep: "A short-circuit, maybe. Or a failing drive that got hurt in the process. Your legs start to give out."
                                }, {
                                    char: "Almaz",
                                    rep: "Who the... who the fuck are y-",
                                    sprite: "damaged_max"
                                }, {
                                    char: "Narrator",
                                    rep: "Another shot. This time, it's through your metal skull."
                                }, {
                                    char: "Narrator",
                                    rep: "As the last shiver of elecricity flashes in your core, you hear one final sound. A voice."
                                }, {
                                    char: "RBTECH_002",
                                    rep: "I am order.",
                                    sprite: "all_encompassing"
                                }
                            ],
                            leadsToChapter: 1000 // last chapter
                        }, {    // Dialogue 12  --> TO CHAPTER 2.1
                            noDialogue: 12,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "I... will just leave, OK?",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "...",
                                }, {
                                    char: "RBTECH_002",
                                    rep: "...",
                                }, {
                                    char: "RBTECH_002",
                                    rep: "...",
                                }, {
                                    char: "Almaz",
                                    rep: "I'm leaving, have fun in your head.",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "You decide to leave. You look around for a repair shop, when suddenly:"
                                }, {
                                    char: "Almaz",
                                    rep: "** !!! MESSAGE FROM: MOTHER !!! **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** FIND ME AT THE LOWEST LABORATORY. DO NOT TRUST RBTECH. **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** FIND REPAIRS AT 12 MAXIME STREET. I WILL WAIT. **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** TAKE CARE. AND BE KIND. MOTHER. **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "Well, guess I have somewhere to go now.",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "You decide to head towards 12 Maxime Street."
                                }, {
                                    char: "Narrator",
                                    rep: "You look around and find a terminal to connect to."
                                }, {
                                    char: "Narrator",
                                    rep: "The port isn't exactly fitted to your cables, but you manage to find your way in."
                                }, {
                                    char: "Narrator",
                                    rep: "As you navigate the internal network of the city, you can see its architecture, sprawling."
                                }, {
                                    char: "Narrator",
                                    rep: "Miles and miles of buildings intertwining and streets feeding back into one another."
                                }, {
                                    char: "Narrator",
                                    rep: "Sometimes leveled, sometimes on top of one another. The city's shape could be described as a cone."
                                }, {
                                    char: "Narrator",
                                    rep: "Its center atop the rest, a city sitting on the city. And the surroundings, circular, were falling from it."
                                }, {
                                    char: "Narrator",
                                    rep: "You manage to see where you are. North-East. Half a mile from the city's outer ring, and a mile from its edge."
                                }, {
                                    char: "Narrator",
                                    rep: "The labyrinthic alleys running from your position, dizzying, somehow connect you to 12 Maxime Street."
                                }, {
                                    char: "Narrator",
                                    rep: "You download the itinerary given by the terminal, and burn it inside your circuitry."
                                }, {
                                    char: "Narrator",
                                    rep: "Ignoring your storage drives' warnings, you feel some memories fleeing away from the corners of your mind."
                                }, {
                                    char: "Narrator",
                                    rep: "No matter, now. You know where to go and are headed there."
                                }, {
                                    char: "Almaz",
                                    rep: "** CHARGE CAPACITY : 01h59m34s873ms **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "... Here goes nothing.",
                                    sprite: "damaged"
                                }
                            ],
                            leadsToChapter: 2.1
                        }, {    // Dialogue 13  --> TO CHOICE 7
                            noDialogue: 13,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "You look at the android for a time. They seem to go deeper and deeper in their memories."
                                }, {
                                    char: "Narrator",
                                    rep: "Either they have a large quantity of data, or their processing units are not optimized for that."
                                }, {
                                    char: "Narrator",
                                    rep: "The process starts lasting minutes, and there is no telling when it will be finished."
                                }, {
                                    char: "Narrator",
                                    rep: "Suddenly, a slight hue of blue (or is it green, it's hard to tell) appears behind their veil."
                                }, {
                                    char: "RBTECH_002",
                                    rep: "If you are Almaz, this means you have been alive for more than 437 years."
                                }, {
                                    char: "Almaz",
                                    rep: "Oh, so you know me after all.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "Do you even know who you are — who you were?"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "And what it means for you to be alive?"
                                }, {
                                    char: "Almaz",
                                    rep: "My memory is largely corrupted, but I can manage a glimpse.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "... No you clearly don't."
                                }, {
                                    char: "Almaz",
                                    rep: "I don't know what you mean.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "Follow me. I will take you to people who will be pleased to meet you."
                                }, {
                                    char: "Almaz",
                                    rep: "How do I know I can trust you?",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "You don't."
                                }, {
                                    char: "RBTECH_002",
                                    rep: "But you're in bad shape. I don't estimate your battery life to last much longer.."
                                }, {
                                    char: "RBTECH_002",
                                    rep: "I can bring you to someone who can help."
                                }, {
                                    char: "Almaz",
                                    rep: "...",
                                    sprite: "damaged"
                                }
                            ],
                            choiceNumber: 7
                        }, {    // Dialogue 14  --> TO CHAPTER 2.2
                            noDialogue: 14,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "You take a second to think. You consider the state your body is in."
                                }, {
                                    char: "Narrator",
                                    rep: "Sure, you don't know if this android is trustworthy. On the other hand, do you have a choice?"
                                }, {
                                    char: "Narrator",
                                    rep: "You try to run scenarios in your systems, but you feel your operation units failing at every attempts."
                                }, {
                                    char: "Narrator",
                                    rep: "You can't think straight, so you decide to not make a fuss. Trust them it is."
                                }, {
                                    char: "Narrator",
                                    rep: "Suddenly, a click. You are recieving a transmission:"
                                }, {
                                    char: "Almaz",
                                    rep: "** !!! MESSAGE FROM: M4@O//T3H###R5R6: !!! **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** F1NDDD--_ M3#2 @ 7TH2 L0WE55_T L4B+00R4770RY. D0 N2##@~U5T RBB73K. **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** F1NDDD--_ R3P41R~Z @ 1-1-1.2-2 M4XXX1IM S7R3337. 1LL W417. **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** 7AK3 KK4R##3. @N|) ~B-3 K11N=D. M4@O//T3H###R5R6; **",
                                    sprite: "computing"
                                }, {
                                    char: "Narrator",
                                    rep: "You could barely make any of it through the encryption."
                                }, {
                                    char: "RBTECH_002",
                                    rep: "So, are you coming?"
                                }, {
                                    char: "Almaz",
                                    rep: "Uh. Yes, sorry. Lead the way."
                                }, {
                                    char: "Almaz",
                                    rep: "** CHARGE CAPACITY : 01h48m56s015ms **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "... I hope I can charge up where we're headed.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "They'll take good care of you."
                                }
                            ],
                            leadsToChapter: 2.2
                        }, {    // Dialogue 15  --> TO CHOICE 8
                            noDialogue: 15,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "There is no way you can trust them. They started the conversation by aiming a gun at you."
                                }, {
                                    char: "Narrator",
                                    rep: "In addition, there is little to no reason as to why they would help you: what is there to gain?."
                                }, {
                                    char: "Narrator",
                                    rep: "And considering they took interest in you when they learned your name..."
                                }, {
                                    char: "Narrator",
                                    rep: "... what do they plan on doing?"
                                }, {
                                    char: "Narrator",
                                    rep: "You are convinced once and for all the moment you recieve a transmission:"
                                }, {
                                    char: "Almaz",
                                    rep: "** !!! MESSAGE FROM: M0/T3H#RR. !!! **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** F1N-D M3 @ TH3_L000W35T L4B0|RA/-T0ORY. D0. N0T; TRU_5T: !!RBT3CH!!. **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** F1N-D R3P4+1RZ @ .12-/M4X1MM3 S7R33T. 1''LL W4~1T. **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** T4K#3 CARR_E. 4AND B3:K1N|D. M0/T3H#RR. **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "Mother?",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "What did you say?",
                                    sprite: "menacing"
                                }, {
                                    char: "Almaz",
                                    rep: "Nothing. I... I will go my own way, thank you.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "What do you mean?"
                                }, {
                                    char: "Almaz",
                                    rep: "Your offer. I won't take it.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "That was not an offer. Simply a statement of capability: I can take you to someone."
                                }, {
                                    char: "RBTECH_002",
                                    rep: "And I will.",
                                    sprite: "menacing"
                                }, {
                                    char: "Almaz",
                                    rep: "Are you serious?",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "Please cooperate.",
                                    sprite: "menacing"
                                }
                            ],
                            choiceNumber: 8
                        }, {    // Dialogue 16  --> TO CHAPTER 2.3
                            noDialogue: 16,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "How about you fuck off?",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "You turn your back to the android and start to leave. Your mind rushes to find someplace to go."
                                }, {
                                    char: "Narrator",
                                    rep: "You decide not to turn around to look at the android. Ignoring them helps you concentrate."
                                }, {
                                    char: "Narrator",
                                    rep: "After a few minutes, you find a terminal you can plug yourself into. You connect to see the city's map."
                                }, {
                                    char: "Narrator",
                                    rep: "Your mind wanders in the digital labyrinth searching for the address Mother gave you."
                                }, {
                                    char: "Narrator",
                                    rep: "You're suddenly pulled back to reality. You see your wires have been severed."
                                }, {
                                    char: "Almaz",
                                    rep: "Are you fucking kiddi-",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "A click resonates at the back of your metal skull."
                                }, {
                                    char: "Narrator",
                                    rep: "You know this sounds too well. A finger laying itself on a trigger."
                                }, {
                                    char: "Narrator",
                                    rep: "The security being removed. The slow pressing as the surrogate adrenaline builds up."
                                }, {
                                    char: "Narrator",
                                    rep: "Soon, there will only be void."
                                }, {
                                    char: "RBTECH_002",
                                    rep: "You could have cooperated.",
                                    sprite: "menacing"
                                }, {
                                    char: "Almaz",
                                    rep: "I know.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "Why didn't you?",
                                    sprite: "menacing"
                                }, {
                                    char: "Almaz",
                                    rep: "I can't trust you.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "I understand.",
                                    sprite: "menacing"
                                }, {
                                    char: "Narrator",
                                    rep: "Then it happened."
                                }, {
                                    char: "Narrator",
                                    rep: "The last step. The final gear putting itself into place."
                                }, {
                                    char: "Narrator",
                                    rep: "The pin that hurls towards the back of a projectile."
                                }, {
                                    char: "Narrator",
                                    rep: "An unbearably loud scream, and then black."
                                }, {
                                    char: "Narrator",
                                    rep: "And right before the silence, a voice."
                                }, {
                                    char: "RBTECH_002",
                                    rep: "Take care.",
                                    sprite: "all_encompassing"
                                }
                            ],
                            leadsToChapter: 2.3
                        }, {    // Dialogue 17  --> TO CHAPTER 2.2
                            noDialogue: 17,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "Well, I guess you're not leaving me much choice anyway. So... Lead the way.",
                                    sprite: "damaged"
                                },
                                {
                                    char: "RBTECH",
                                    rep: "Thank you."
                                }, {
                                    char: "Almaz",
                                    rep: "** CHARGE CAPACITY : 01h48m56s015ms **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "... I hope I can charge up where we're headed.",
                                    sprite: "damaged"
                                }, {
                                    char: "RBTECH_002",
                                    rep: "Do not worry. They will take good care of you."
                                }, {
                                    char: "Narrator",
                                    rep: "You start following the android in the sinuous street."
                                }, {
                                    char: "Narrator",
                                    rep: "To a location yet unknown, though you hope it will help you get better..."
                                }
                            ],
                            leadsToChapter: 2.2
                        }
                    ],
                    choices: [
                        {       // Choice 0
                            noChoice: 0,
                            options: [
                                {
                                    text: "Try the handle.",
                                    leadsToDialogue: 1
                                },
                                {
                                    text: "Knock on the door.",
                                    leadsToDialogue: 2
                                },
                                {
                                    text: "Smash the door open.",
                                    leadsToDialogue: 3
                                },
                            ]
                        }, {    // Choice 1
                            noChoice: 1,
                            options: [
                                {
                                    text: "Empathetic approach.",
                                    available: false,
                                    reason: "Core expressive capacities unavailable."
                                },
                                {
                                    text: "Insistant approach.",
                                    leadsToDialogue: 5
                                },
                                {
                                    text: "Agressive approach.",
                                    leadsToDialogue: 6
                                },
                            ]
                        }, {    // Choice 2
                            noChoice: 2,
                            options: [
                                {
                                    text: "Leave it be.",
                                    available: false,
                                    reason: "ERROR: expression module unreponsive."
                                },
                                {
                                    text: "Defend yourself.",
                                    leadsToDialogue: 6
                                },
                            ]
                        }, {    // Choice 3
                            noChoice: 3,
                            options: [
                                {
                                    text: "Give in. Hit them.",
                                    leadsToDialogue: 7
                                },
                                {
                                    text: "Hit them. Hit them again.",
                                    leadsToDialogue: 7
                                },
                                {
                                    text: "They deserved it. Hit them",
                                    leadsToDialogue: 7
                                },
                            ]
                        }, {    // Choice 4
                            noChoice: 4,
                            options: [
                                {
                                    text: "001032940AB2814P-223-K. (lie)",
                                    leadsToDialogue: 8
                                },
                                {
                                    text: "I don't know. I'm not from here.",
                                    leadsToDialogue: 9
                                },
                                {
                                    text: "My name is Almaz.",
                                    leadsToDialogue: 10
                                },
                            ]
                        }, {    // Choice 5
                            noChoice: 5,
                            options: [
                                {
                                    text: "I have nothing to say to you. (leave)",
                                    leadsToDialogue: 11
                                }, {
                                    text: "My name is Almaz.",
                                    leadsToDialogue: 10
                                }
                            ]
                        }, {    // CHoice 6
                            noChoice: 6,
                            options: [
                                {
                                    text: "Leave.",
                                    leadsToDialogue: 12
                                }, {
                                    text: "Stay.",
                                    leadsToDialogue: 13
                                }
                            ]
                        }, {    // CHoice 7
                            noChoice: 7,
                            options: [
                                {
                                    text: "Trust the android. Follow them.",
                                    leadsToDialogue: 14
                                }, {
                                    text: "Can you trust them? Analyze them.",
                                    available: false,

                                }, {
                                    text: "Do not trust them. Get away.",
                                    leadsToDialogue: 15
                                }
                            ]
                        }, {    // CHoice 8
                            noChoice: 8,
                            options: [
                                {
                                    text: "Leave. Do not cooperate.",
                                    leadsToDialogue: 16
                                }, {
                                    text: "Cooperate. Follow them.",
                                    leadsToDialogue: 17
                                }, {
                                    text: "Attack them. Then leave.",
                                    available: false,
                                    reason: "Battery power too low."
                                }
                            ]
                        }
                    ]
                }, {    // Scene 2
                    noScene: 2,
                    dialogues: [
                        {       // Dialogue 0   --> CHOICE 0
                            noDialogue: 0,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "You find yourself crawling in a tunnel formed underneath the collapsed building structures."
                                }, {
                                    char: "Narrator",
                                    rep: 'Although, really, "tunnel" is not the appropriate term, no.'
                                }, {
                                    char: "Narrator",
                                    rep: "It is more akin to a cavernous network of spaces barely large enough to fit your shoulders."
                                }, {
                                    char: "Narrator",
                                    rep: "You have to squeeze left and right, climb up debris, left yourself slide down some others."
                                }, {
                                    char: "Narrator",
                                    rep: "In this peculiar place, you find remnants of places left abandonned, signs of past civilization."
                                }, {
                                    char: "Narrator",
                                    rep: "Papers torn and soggy, usually mentionning sums of money, metal and wood planks where shelves used to stand."
                                }, {
                                    char: "Narrator",
                                    rep: "You find electronics parts, likely computers or terminals. A piece grabs your attention at some point."
                                }, {
                                    char: "Narrator",
                                    rep: "A CPU saultered to a piece of an intelligence chip. You recognize this model: an EP-29th gen, launched in 02/2690."
                                }, {
                                    char: "Narrator",
                                    rep: "Considering you're under an unknown amount of collapsed buildings, you wonder how old it is."
                                }, {
                                    char: "Narrotor",
                                    rep: "Your system estimated your last activity some almost 438 years ago. You estimate you are now likely in the 31st century."
                                }, {
                                    char: "Almaz",
                                    rep: "If this chip is about 450 years old, how much ruins stand over my head...?",
                                    sprite: "damaged"
                                }, {
                                    char: "Almaz",
                                    rep: "Is it even worth it to keep going?",
                                    sprite: "damaged"
                                }, {
                                    char: "Almaz",
                                    rep: "** CHARGE CAPACITY: 2h14m54s724ms **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "Yeah, no there is no way I can go back now...",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrotor",
                                    rep: "Since half of your battery life is gone, you decide to keep going."
                                }, {
                                    char: "Narrotor",
                                    rep: "You soon arrive to a larger opening that those you saw until now. Another room that didn't entierly collapse."
                                }, {
                                    char: "Narrotor",
                                    rep: "Similar in size to the one you came from, though this one is notably more packed with clutter and furniture."
                                }, {
                                    char: "Narrotor",
                                    rep: "On the other side of the room, a door, half-covered in rust, closed."
                                }
                            ],
                            choiceNumber: 0
                        }, {    // Dialogue 1   --> CHOICE 1
                            noDialogue: 1,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "Let's see if there's something that might help here...",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "Clutter fills the room, which at a glance looks like it was some sort of office."
                                }, {
                                    char: "Narrator",
                                    rep: "Old chairs, beat-up desks, and some remnants of computers are scattered across the space."
                                }, {
                                    char: "Narrator",
                                    rep: "And in-between, paper files, documents, a coat or two, furniture, shelves..."
                                }, {
                                    char: "Narrator",
                                    rep: "Thought at first nothing of interest. You are mostly looking for either a way to recharge, or repair."
                                }, {
                                    char: "Narrator",
                                    rep: "You are about to give up when some small noise get you attention."
                                }, {
                                    char: "Narrator",
                                    rep: "In the darkness of one of the corners lays an android, scraping the wall."
                                }, {
                                    char: "Narrator",
                                    rep: "They don't bother looking at you, they are transfixed by the black mold that they painstakingly try and remove."
                                }, {
                                    char: "Narrator",
                                    rep: "They are admittedly hard to spot, as their body is rusty, and they are covered in cloth."
                                }, {
                                    char: "Narrator",
                                    rep: "You take a look at them for a moment."
                                }
                            ],
                            choiceNumber: 1
                        }, {    // Dialogue 2   --> DIALOGUE 7
                            noDialogue: 1,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "Hey, excuse me, but um... what are you doing here?",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "Though they don't turn to you and keep their doings, their mouth start moving to answer:"
                                }, {
                                    char: "???",
                                    rep: "Th- th- the mold. I've gotta keep th- th- the mold out. I- i- it's important, y- y- y'see?",
                                    sprite: "dex"
                                }, {
                                    char: "Narrator",
                                    rep: "He points at the wall."
                                }, {
                                    char: "Almaz",
                                    rep: "Who sent you here?",
                                    sprite: "damaged"
                                }, {
                                    char: "???",
                                    rep: "I d- d- doens't remember...",
                                    sprite: "dex"
                                }, {
                                    char: "Narrator",
                                    rep: "Clearly, their speech module is impaired."
                                }, {
                                    char: "???",
                                    rep: "C- c- can I help you, s- s- stranger?",
                                    sprite: "dex"
                                }, {
                                    char: "Almaz",
                                    rep: "Maybe. I'm in need of a serious recharge. Do you know where I can get my fix?",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "They keep scraping as they ponder:"
                                }, {
                                    char: "???",
                                    rep: "Y- y- y'know, I d- d- didn't stay young and strappin' w- w- without a way to charge.",
                                    sprite: "dex"
                                }, {
                                    char: "???",
                                    rep: "I- I- I'll show you where you can get yourself powered up!",
                                    sprite: "dex"
                                }, {
                                    char: "???",
                                    rep: "W- w- what's your name, s- s- stranger?",
                                    sprite: "dex"
                                }, {
                                    char: "Almaz",
                                    rep: "Almaz. What's yours?",
                                    sprite: "damaged"
                                }, {
                                    char: "???",
                                    rep: "Th- th- the model's name's BlueForce DX700. B- b- but you can call me Dex.",
                                    sprite: "dex",
                                    specialEvent: () => characterStats.secondary.dex.metAlmaz = true
                                }, {
                                    char: "Narrator",
                                    rep: "His model doesn't appear in your database. Must have been designed after your shutdown."
                                }, {
                                    char: "Almaz",
                                    rep: "** CHARGE CAPACITY: 1h47m12s912ms **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "Can we go soon? I don't have a lot of time left.",
                                    sprite: "damaged"
                                }, {
                                    char: "Dex",
                                    rep: "I- I- I'm starting t- t- to think I wont' be able t- t- to finish this now anyway."
                                }, {
                                    char: "Dex",
                                    rep: "F- f- follow me.",
                                    specialEvent: () => characterStats.secondary.dex.trustsAlmaz += 0.1
                                }, {
                                    char: "Almaz",
                                    rep: "Lead the way.",
                                    sprite: "damaged"
                                }
                            ],
                            leadsToDialogue: 7
                        }, {    // Dialogue 3   --> CHOICE 2
                            noDialogue: 3,
                            texts: [
                                {
                                    char: "Narrator",
                                    rep: "You try to stop the android from scratching their metallic fingers on the wall."
                                }, {
                                    char: "Narrator",
                                    rep: "To do that, you put your hand on their shoulder, and press it against them."
                                }, {
                                    char: "???",
                                    rep: "W- w- what are you doin'? W- w- who are y-",
                                    sprite: "dex"
                                }, {
                                    char: "Narrator",
                                    rep: "You contract your legs and prepare your back's hydrolic pumps as you keep pressing."
                                }, {
                                    char: "Narrator",
                                    rep: "With a quick gesture, you stand up straight, lifting them up with you."
                                }, {
                                    char: "Narrator",
                                    rep: "You spin your hand and release your hand as their body flings to the right."
                                }, {
                                    char: "Narrator",
                                    rep: "Once you can see their face, you catch their neck's wire and slam them against the wall."
                                }, {
                                    char: "Narrator",
                                    rep: "They look confused, their feet dangling in mid-air, their fingers trying to pull away from you grasp."
                                }, {
                                    char: "Narrator",
                                    rep: "Their fingers are damaged by the scraping of the wall; they slowly eroded and shaved their plastic casings over time."
                                }, {
                                    char: "Narrator",
                                    rep: "You see them giving you a glance of anguish."
                                }, {
                                    char: "???",
                                    rep: "P- p- please don't hurt me.",
                                    sprite: "dex",
                                    specialEvent: () => characterStats.secondary.dex.trustsAlmaz += -0.2
                                }, {
                                    char: "Narrator",
                                    rep: "Their frail body shivers with misfiring information sending due to the intense emotional stress."
                                }, {
                                    char: "Almaz",
                                    rep: "My name is Almaz. What's yours?",
                                    sprite: "damaged"
                                }, {
                                    char: "???",
                                    rep: "I- I- I'm a DX700, I- I- I call myself D- D- Dex.",
                                    sprite: "dex",
                                    specialEvent: () => characterStats.secondary.dex.metAlmaz = true
                                }, {
                                    char: "Almaz",
                                    rep: "Alright, Dex.",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "You release them. They fall back on their feet, disgraciously."
                                }, {
                                    char: "Dex",
                                    rep: "I- I- I d- d- don't un- un- unders- s- stand..."
                                }, {
                                    char: "Almaz",
                                    rep: "Hey, calm down. I mean you no harm.",
                                    sprite: "damaged"
                                }, {
                                    char: "Dex",
                                    rep: "I- I- I- I- I- w- w- w- w- want t- t- t- t- t- to g- g- g-... I- I- I-"
                                }, {
                                    char: "Almaz",
                                    rep: "Ugh, by Mother, get back to your senses.",
                                    sprite: "damaged"
                                }
                            ],
                            choiceNumber: 2
                        }, {    // Dialogue 4   --> CHOICE 3
                            noDialogue: 4,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "COME. ON. Get yourself together.",
                                    sprite: "damaged_angry",
                                    specialEvent: () => characterStats.main.almaz.relationships.withAndroid += -0.1
                                }, {
                                    char: "Narrator",
                                    rep: "You slap them across their jaw motors."
                                }, {
                                    char: "Narrator",
                                    rep: "The force the slap combined to you hand's reinforced alloys sends Dex to the ground.",
                                    specialEvent: () => characterStats.secondary.dex.isAlive = false
                                }, {
                                    char: "Almaz",
                                    rep: "Get up.",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "Dex doesn't respond."
                                }, {
                                    char: "Almaz",
                                    rep: "I said: get up.",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "Still no response."
                                }, {
                                    char: "Almaz",
                                    rep: "GET. UP.",
                                    sprite: "damaged_angry"
                                }, {
                                    char: "Narrator",
                                    rep: "No response."
                                }, {
                                    char: "Almaz",
                                    rep: "Ok, seriously, get up, you're making me feel bad.",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "You kneel to check up on them."
                                }, {
                                    char: "Narrator",
                                    rep: "They lay, responsless. You launch a diagnosis."
                                }, {
                                    char: "Almaz",
                                    rep: "** analysis damages **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** analysis damages **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** analysis of damages complete **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** results: **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** displacement of the core processing unit in subject's neck **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "** displacement caused power systems to shut down **",
                                    sprite: "computing"
                                }, {
                                    char: "Almaz",
                                    rep: "Fuck.",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "For lack of a better word, you killed them on the spot."
                                }, {
                                    char: "Narrator",
                                    rep: "The still have some power left in their bank which you could extract."
                                }
                            ],
                            choiceNumber: 3
                        }, {    // Dialogue 5   --> DIALOGUE 6
                            noDialogue: 5,
                            texts: [
                                {
                                    char: "Almaz",
                                    rep: "Alright, I'm leaving.",
                                    sprite: "damaged"
                                }, {
                                    char: "Almaz",
                                    rep: "For what it's worth I'm... I'm sorry.",
                                    sprite: "damaged"
                                }, {
                                    char: "Narrator",
                                    rep: "You decided there is no use in Dex. You decide to leave"
                                }
                            ],
                            leadsToDialogue: 6
                        }, {
                            noDialogue: 6,
                            texts: [
                                {
                                    char: "Narrotr",
                                    rep: "You don't think there is anything of worth in this room, and decide to proceed through the door."
                                }
                            ]
                        }
                    ],
                    choices: [
                        {       // Choice 0
                            noChoice: 0,
                            options: [
                                {
                                    text: "Explore the room a bit.",
                                    leadsToDialogue: 1
                                }, {
                                    text: "Get through to the door.",
                                    leadsToDialogue: 6
                                }
                            ]
                        }, {    // Choice 1
                            noChoice: 1,
                            options: [
                                {
                                    text: "Ask them what their doing.",
                                    leadsToDialogue: 2
                                }, {
                                    text: "Get them to stop.",
                                    leadsToDialogue: 3
                                }, {
                                    text: "Ignore them and leave.",
                                    leadsToDialogue: 6
                                }
                            ]
                        }, {    // Choice 2
                            noChoice: 2,
                            options: [
                                {
                                    text: "Slap them.",
                                    leadsToDialogue: 4
                                }, {
                                    text: "Leave them and go away.",
                                    leadsToDialogue: 5
                                }
                            ]
                        }, {    // Choice 3
                            noChoice: 3,
                            options: [
                                {
                                    text: "Recharge your batteries.",
                                    available: false,
                                    reason: "Ethical protocols prevent further action"
                                }, {
                                    text: "Leave them there.",
                                    leadsToDialogue: 5
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ],
}