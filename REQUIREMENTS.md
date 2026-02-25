# Coffee Personality Quiz - Requirements

## Personality → Coffee Pairings (6 Types, 3 Drinks Each)

1. **Bold Pioneer** → Double Espresso - "Life's too short for timid coffee"
   - Also try: Red Eye
   - Seasonal: Spiced Cayenne Mocha
2. **Smooth Traditionalist** → Classic House Blend - "Some things never need fixing"
   - Also try: Café au Lait
   - Seasonal: Maple Cinnamon Drip
3. **Curious Explorer** → Seasonal Pour-Over - "There's always something new to discover"
   - Also try: Lavender Oat Latte
   - Seasonal: Single Origin Flight
4. **Cozy Campfire** → Caramel Vanilla Latte - "Every cup should feel like a warm hug"
   - Also try: Chai Tea Latte
   - Seasonal: Pumpkin Spice Mocha
5. **Mindful Purist** → Single Origin Black - "Let the coffee speak for itself"
   - Also try: Cortado
   - Seasonal: Matcha with Oat Milk
6. **Social Trailblazer** → Cold Brew Flight - "Coffee is better with company"
   - Also try: Iced Americano with Flavor Add-On
   - Seasonal: Sparkling Honey Citrus Cold Brew

## Result Display

**Show all percentages** - Primary result highlighted, but user sees full breakdown (e.g., "You're 50% Bold Pioneer, 25% Curious Explorer, 12% Cozy Campfire...") with all coffee recommendations.

**Three drink recommendations** for the primary personality: signature drink, "Also try" suggestion, and a seasonal pick.

**Share prompt** - Subtle text encouraging members to share their result with a friend.

## Visual Style

- **Base:** Warm & Cozy - earth tones, soft creams and browns, coffeehouse feel
- **Font:** Serif header (Lora), clean sans-serif body (Source Sans)
- **Header:** "Coffee Personality Quiz" in a large, prominent font size
- **No emojis** on answer options - keep text clean
- **No icons** - the background images provide the visual storytelling

## Interactive Background

- Default background: warm, neutral coffeehouse tones
- **On hover:** When a user hovers over an answer option, the entire page background changes to a full-bleed image that corresponds to that answer's energy
- Images fade in smoothly on hover, fade back to default when cursor leaves
- Each answer option has its own unique background image

## Quiz Questions (8 Questions, 4 Answers Each)

Each question has 4 answer choices, each mapping to one of 6 personality types. Across all 8 questions, every personality appears 5-6 times for balanced coverage.

### Q1: You find a mysterious door in your house you've never noticed. What do you do?
- Kick it open immediately → Bold Pioneer
- Grab a blanket and some snacks first, then investigate → Cozy Campfire
- Sit quietly and listen for what's on the other side → Mindful Purist
- Text your friends to come explore it with you → Social Trailblazer

### Q2: You're given a blank canvas and told to paint anything. What appears?
- An erupting volcano → Bold Pioneer
- A cozy cabin with smoke curling from the chimney → Smooth Traditionalist
- A map of all the places you haven't been yet → Curious Explorer
- A single perfect circle → Mindful Purist

### Q3: An alien lands and asks you to explain humanity in one sentence. You say:
- "We jumped out of planes for fun before we could cure the common cold" → Bold Pioneer
- "We keep doing the same morning ritual because it feels like home" → Smooth Traditionalist
- "We crossed oceans just to see what was on the other side" → Curious Explorer
- "We built coffee shops so we'd have somewhere to be together" → Social Trailblazer

### Q4: You wake up with a superpower. What is it?
- You can taste any dish from anywhere in the world just by thinking of it → Curious Explorer
- Every blanket you touch becomes the perfect temperature → Cozy Campfire
- You can stop time whenever you want → Mindful Purist
- You can speak every language fluently → Social Trailblazer

### Q5: Pick a hypothetical pet:
- A falcon that follows your commands → Bold Pioneer
- A golden retriever that greets you the same way every day → Smooth Traditionalist
- A chameleon that changes colors to match your mood → Curious Explorer
- A dog that introduces you to every person in the park → Social Trailblazer

### Q6: Your ideal Saturday morning looks like...
- The same coffee shop, the same table, the same order → Smooth Traditionalist
- A new neighborhood, a new bakery, a new adventure → Curious Explorer
- A blanket, a warm mug, and nowhere to be → Cozy Campfire
- A quiet walk, a single cup of something perfect → Mindful Purist

### Q7: You're planning a road trip. You're most excited about...
- Driving roads with no GPS and no plan → Bold Pioneer
- The snacks and playlists you've been curating for weeks → Cozy Campfire
- The one intentional stop you've researched deeply → Mindful Purist
- Convincing your whole friend group to come along → Social Trailblazer

### Q8: A friend asks you to pick the restaurant. You choose...
- The neighborhood spot you've been going to for years → Smooth Traditionalist
- That brand-new place with a menu you've never seen before → Curious Explorer
- The cozy place with the fireplace and the big portions → Cozy Campfire
- The quiet place with a small, perfect menu → Mindful Purist

## Personality Coverage (32 answers total)
- Bold Pioneer: 5 appearances (Q1, Q2, Q3, Q5, Q7)
- Smooth Traditionalist: 5 appearances (Q2, Q3, Q5, Q6, Q8)
- Curious Explorer: 6 appearances (Q2, Q3, Q4, Q5, Q6, Q8)
- Cozy Campfire: 5 appearances (Q1, Q4, Q6, Q7, Q8)
- Mindful Purist: 6 appearances (Q1, Q2, Q4, Q6, Q7, Q8)
- Social Trailblazer: 5 appearances (Q1, Q3, Q4, Q5, Q7)

## Tech Stack

- Next.js (JavaScript framework)
- Deployed to the web with a shareable URL
