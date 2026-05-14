// Data for application
export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
};

export const articles: Article[] = [
  {
    id: "1",
    title: "10 Science-Backed Ways to Improve Your Sleep Quality",
    slug: "10-ways-improve-sleep-quality",
    excerpt: "Struggling to get a good night's rest? Discover ten proven, science-backed strategies to fall asleep faster and wake up refreshed.",
    category: "Sleep",
    author: {
      name: "Dr. Sarah Jenkins",
      role: "Sleep Specialist",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150"
    },
    date: "May 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>The Importance of Quality Sleep</h2>
      <p>Sleep is not a luxury; it's a foundational pillar of human health. Chronic sleep deprivation is linked to heart disease, obesity, cognitive decline, and weakened immunity. Despite its importance, over 30% of adults worldwide report experiencing insomnia symptoms.</p>
      <p>Here are 10 actionable, science-backed methods to optimize your circadian rhythm and achieve deep, restorative sleep.</p>

      <h3>1. Stick to a Consistent Sleep Schedule</h3>
      <p>Your body's circadian rhythm functions on a set loop, aligning with sunrise and sunset. Going to bed and waking up at the same time every day—even on weekends—reinforces this biological clock. Irregular sleeping patterns alter your circadian rhythm and levels of melatonin, signaling your brain to stay awake.</p>

      <h3>2. Emphasize Light Exposure During the Day</h3>
      <p>Natural sunlight or bright light during the day keeps your circadian rhythm healthy. This improves daytime energy and nighttime sleep quality and duration. In people with severe sleep issues, daily light exposure improved sleep quality and duration while reducing the time it takes to fall asleep by 83%.</p>

      <h3>3. Reduce Blue Light Exposure in the Evening</h3>
      <p>Nighttime light exposure has the opposite effect of daylight. Blue light—emitted from smartphones, computers, and TVs—tricks your mind into thinking it's still daytime, suppressing hormones like melatonin.</p>
      
      <div class="bg-primary-50 dark:bg-primary-900/30 border-l-4 border-primary-700 p-6 my-8 rounded-r-lg">
        <h4 class="font-bold text-primary-800 dark:text-primary-500 mb-2 mt-0">Recommended Product: Blue Light Blocking Glasses</h4>
        <p class="mb-4">Protect your eyes and your sleep cycle by wearing specialized blue-light-blocking glasses for 2 hours before bed.</p>
        <a href="#" class="inline-block bg-primary-700 hover:bg-primary-800 text-white font-medium py-2 px-4 rounded transition-colors no-underline">Check Price on Amazon</a>
      </div>

      <h3>4. Don't Consume Caffeine Late in the Day</h3>
      <p>Caffeine is beneficial when consumed in the morning, enhancing focus and energy. However, when consumed late in the day, caffeine stimulates your nervous system and stops your body from naturally relaxing. Caffeine can stay elevated in your blood for 6–8 hours.</p>

      <h3>5. Reduce Irregular or Long Daytime Naps</h3>
      <p>While short power naps are beneficial, long or irregular napping during the day can negatively affect your sleep. Sleeping in the daytime can confuse your internal clock, meaning you may struggle to sleep at night.</p>

      <h3>6. Optimize Your Bedroom Environment</h3>
      <p>Many believe the bedroom environment and its setup are key factors in getting a good night's sleep. These factors include temperature, noise, external lights, and furniture arrangement. Minimize external noise, block out light with blackout curtains, and maintain a cool temperature (around 65°F or 18°C).</p>

      <h3>7. Don't Eat Late in the Evening</h3>
      <p>Eating a large meal late at night can negatively affect both sleep quality and the natural release of HGH and melatonin. The quality and type of your late-night snack may also play a role. A high-carb meal can significantly impair your natural sleep cycle.</p>

      <h3>8. Clear Your Mind Before Bed</h3>
      <p>Pre-sleep anxiety is a major cause of insomnia. Cultivating a relaxing pre-sleep routine can help. Try reading a physical book, practicing deep breathing, listening to relaxing music, or writing in a journal to offload racing thoughts.</p>

      <h3>9. Take a Relaxing Bath or Shower</h3>
      <p>A relaxing bath or shower is another popular way to sleep better. Studies indicate that they can help improve overall sleep quality and help people—especially older adults—fall asleep faster. The drop in body temperature after getting out of the bath signals to your brain that it's time for sleep.</p>

      <h3>10. Rule Out a Sleep Disorder</h3>
      <p>An underlying health condition may be the root cause of your sleep problems. One common issue is sleep apnea, which causes inconsistent and interrupted breathing. If you've tried everything and still struggle, consult a medical professional.</p>

      <h2>Conclusion</h2>
      <p>Improving sleep quality requires a multi-faceted approach. By implementing these ten science-backed strategies, you can reset your circadian rhythm, reduce sleep-onset latency, and wake up feeling truly energized. Start by adopting one or two habits today and gradually build a robust sleep hygiene routine.</p>
    `
  },
  {
    id: "2",
    title: "The Beginner's Guide to Intermittent Fasting: What Actually Works",
    slug: "beginners-guide-intermittent-fasting",
    excerpt: "Intermittent fasting is more than a trend. Learn the fundamentals, the main protocols (like 16:8), and how to start safely for fat loss and longevity.",
    category: "Nutrition",
    author: {
      name: "Marcus Chen",
      role: "Certified Nutritionist",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    date: "April 28, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Understanding Intermittent Fasting</h2>
      <p>Intermittent fasting (IF) is currently one of the world's most popular health and fitness trends. People are using it to lose weight, improve their health, and simplify their lifestyles. Unlike a diet that tells you <em>what</em> to eat, IF is an eating pattern that tells you <em>when</em> to eat.</p>
      
      <h3>How Does It Work?</h3>
      <p>Fasting has been a practice throughout human evolution. Our ancestors didn't have supermarkets, refrigerators, or food available year-round. Sometimes they couldn't find anything to eat. As a result, humans evolved to be able to function without food for extended periods of time.</p>
      <p>When you fast, several things happen in your body on the cellular and molecular level. For example, your body adjusts hormone levels to make stored body fat more accessible. Your cells also initiate important repair processes such as autophagy.</p>

      <h3>The Most Popular Fasting Protocols</h3>
      <ul>
        <li><strong>The 16/8 method:</strong> Also called the Leangains protocol, it involves skipping breakfast and restricting your daily eating period to 8 hours, such as 1–9 p.m. Then you fast for 16 hours in between.</li>
        <li><strong>Eat-Stop-Eat:</strong> This involves fasting for 24 hours, once or twice a week, for example by not eating from dinner one day until dinner the next day.</li>
        <li><strong>The 5:2 diet:</strong> With this methods, you consume only 500–600 calories on two non-consecutive days of the week, but eat normally the other 5 days.</li>
      </ul>

      <div class="bg-primary-50 dark:bg-primary-900/30 border-l-4 border-primary-700 p-6 my-8 rounded-r-lg">
        <h4 class="font-bold text-primary-800 dark:text-primary-500 mb-2 mt-0">Hydration is Key While Fasting</h4>
        <p class="mb-4">It's critical to drink plenty of water, black coffee, or plain herbal tea during your fasting window. Avoid artificial sweeteners that can trigger an insulin response.</p>
        <a href="#" class="inline-block bg-primary-700 hover:bg-primary-800 text-white font-medium py-2 px-4 rounded transition-colors no-underline">See Our Favorite Electrolyte Powder</a>
      </div>

      <h3>Primary Health Benefits</h3>
      <p>Many studies have been done on intermittent fasting. These studies show that it can have powerful benefits for your body and brain.</p>
      <ol>
        <li><strong>Weight Loss:</strong> As mentioned above, intermittent fasting can help you lose weight and belly fat, without having to consciously restrict calories (as long as you don't overcompensate during eating windows).</li>
        <li><strong>Insulin Resistance:</strong> IF can reduce insulin resistance, lowering blood sugar by 3–6% and fasting insulin levels by 20–31%, which should protect against type 2 diabetes.</li>
        <li><strong>Inflammation:</strong> Some studies show reductions in markers of inflammation, a key driver of many chronic diseases.</li>
        <li><strong>Heart Health:</strong> IF may reduce "bad" LDL cholesterol, blood triglycerides, inflammatory markers, blood sugar, and insulin resistance — all risk factors for heart disease.</li>
        <li><strong>Brain Health:</strong> IF increases the brain hormone BDNF and may aid the growth of new nerve cells.</li>
      </ol>

      <h3>Is Fasting Safe for Everyone?</h3>
      <p>Intermittent fasting is certainly not for everyone. If you're underweight or have a history of eating disorders, you should not fast without consulting a health professional first. In these cases, it can be downright harmful.</p>
      <p>Women may need to approach fasting differently than men. Some evidence suggests that prolonged fasting can disrupt menstrual cycles and hormonal balance in females. A gentler approach, like 14:10, is often recommended for women starting out.</p>

      <h2>How to Get Started</h2>
      <p>Chances are that you've already done many intermittent fasts in your life. If you've ever eaten dinner, slept late, and not eaten until lunch the next day, then you've probably already fasted for 16+ hours. The 16/8 method is the simplest and most sustainable way to get started. Just try skipping breakfast and see how you feel!</p>
    `
  },
  {
    id: "3",
    title: "5 Mental Health Habits That Take Under 5 Minutes a Day",
    slug: "5-mental-health-habits-under-5-minutes",
    excerpt: "You don't need a heavy time commitment to improve your emotional well-being. Try these quick daily habits to reduce stress and boost your mood.",
    category: "Mental Health",
    author: {
      name: "Emma Richards",
      role: "Therapist & Wellness Coach",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    },
    date: "March 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
    content: `
      <h2>Small Habits, Big Impact</h2>
      <p>When we think about taking care of our mental health, we often imagine long yoga sessions, hour-long therapy appointments, or massive lifestyle overhauls. While those are immensely valuable, building a resilient mind actually relies on small, consistent micro-habits.</p>
      <p>If you're strapped for time, here are five evidence-based mental health practices that take less than five minutes but yield significant psychological benefits.</p>

      <h3>1. The 4-7-8 Breathing Technique</h3>
      <p>When you're stressed, your sympathetic nervous system (fight-or-flight) goes into overdrive. Deep breathing acts as a biological override switch. The 4-7-8 method, pioneered by Dr. Andrew Weil, takes less than 2 minutes:</p>
      <ul>
        <li>Inhale quietly through your nose for <strong>4 seconds</strong>.</li>
        <li>Hold your breath for <strong>7 seconds</strong>.</li>
        <li>Exhale completely through your mouth, making a whoosh sound, for <strong>8 seconds</strong>.</li>
      </ul>
      <p>Repeat this cycle four times. This practice dramatically lowers cortisol levels and heart rate.</p>

      <h3>2. The "Three Good Things" Exercise</h3>
      <p>Our brains have a natural negativity bias. We aggressively scan for threats while ignoring the good. Counteract this by spending three minutes before bed writing down three positive things that happened that day.</p>
      <p>They don't have to be profound. "The coffee tasted great" or "I saw a nice dog" is sufficient. Studies by positive psychologist Martin Seligman show that doing this for just one week significantly increases long-term happiness and decreases depressive symptoms.</p>

      <div class="bg-primary-50 dark:bg-primary-900/30 border-l-4 border-primary-700 p-6 my-8 rounded-r-lg">
        <h4 class="font-bold text-primary-800 dark:text-primary-500 mb-2 mt-0">Recommended Product: The Five Minute Journal</h4>
        <p class="mb-4">Streamline your gratitude practice with a guided journal designed specifically to boost positivity and mindfulness in just minutes a day.</p>
        <a href="#" class="inline-block bg-primary-700 hover:bg-primary-800 text-white font-medium py-2 px-4 rounded transition-colors no-underline">Buy on Amazon</a>
      </div>

      <h3>3. Morning Sun Viewing</h3>
      <p>Mental health is deeply tied to physical biology. Within 30 minutes of waking up, step outside and let natural sunlight hit your eyes for 3 to 5 minutes (don't stare directly at the sun, and don't wear sunglasses).</p>
      <p>This early light exposure signals the suprachiasmatic nucleus in your brain to release a healthy pulse of cortisol (waking you up) and sets a timer for melatonin release 14-16 hours later, aligning your mood and sleep cycle.</p>

      <h3>4. The Brain Dump</h3>
      <p>Cognitive overload leads to anxiety. When your working memory is holding too many tasks, unread emails, and worries, you experience a sense of panic. Take five minutes to do a "Brain Dump."</p>
      <p>Grab a piece of paper and write down everything swirling in your mind. Do not organize it, just get it out of your head and onto the page. Externalizing your worries clears "RAM" in your brain, lowering anxiety and improving focus.</p>

      <h3>5. Mindful Transitioning</h3>
      <p>We often rush from one task to another—from a stressful meeting straight into playing with our kids. We drag the stress of the previous activity into the next one.</p>
      <p>Take one minute between major activities to simply pause. Close your eyes, take three deep breaths, and set an intention for the next thing you are going to do. "I am closing my laptop. I am now transitioning to being a present parent." This micro-pause prevents stress accumulation.</p>

      <h2>Consistency Beats Intensity</h2>
      <p>You don't need a perfectly optimized, two-hour morning routine to be mentally healthy. Pick just ONE of these five-minute habits and do it daily. Mental resilience isn't built in massive leaps; it's built in inches every single day.</p>
    `
  }
];
