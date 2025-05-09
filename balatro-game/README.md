# Balatro, my Inspired Game Concept

## What genre will your game be?

single player, web-based roguelike deck-builder.

## What are the objectives/scores/win/lose conditions?

| Aspect | Design Choice |
|--------|--------------|
| Primary Goal | clear a sequence of score challenges called **blinds** (small&rarr;big&rarr;boss) across several **Antes** |
| Scoring | give each valid poker hand a base *chip* value, and multiply that by *multipliers* earned from special cards to reach the Blind's target score |
| Win State | reach every Blind score in all Antes of a run |
| Lose State | fail to hit target score within the allowed number of hands *or* run out of "lives" (chips) |

## How will the player interact with the game?

The player will:
* click cards in hand to lock them in and play them for the hand, or drag and drop to discard pile to redraw card
* between Antes, spend chips to buy **Joker cards** (special modifiers) or upgrade existing cards

## What features will you include in your MVP?

| Feature | Requirement |
|--------|-------|
| 52-card deck & shuffle | possibly an external library to handle random logic || card & joker models | two respecive classes for card and joker, stored in a *Map* object. going to steal some online images of cards to use |
| poker hand evaluator | possibly an external library to keep it simple. |
| scoring | something like: a function that takes hand info, joker multiplier, and streak, and computes chips by multiplying baseChips, total jokerEffect value, and streakMultiplier. |
| blind system w/ escalating targets | use a class that contains *let* array for target number. once user hits it, update gameState with next level, and advance to next index in the target number array |
| discard mechanics | something like onDiscard(clickEvent) moves selected card to discardPile, and decrements discardsLeft by an event handler |
| shop phase UI | no idea yet |

there are a few backend components that I would need to add for this code to work which I'm not experienced enough to do as of yet. I'm still committed to this project, and am treating this as an opportunity to learn through a challenge.
