# 人生模拟器 (Life Simulator) — System Architecture

## Tech Stack
- **Runtime**: Vite 8 + TypeScript 6
- **UI**: React 19 with SWC transform (via `@vitejs/plugin-react`)
- **Styling**: CSS (no framework, matching the game's self-contained nature)
- **State**: `useReducer` — no external state library needed for this single-page game

---

## File Structure

```
vite-project/
├── src/
│   ├── data/                  # Game data (pure, read-only)
│   │   ├── origins.ts         # 12 origin types with stat modifiers
│   │   ├── events.ts          # 24 fixed life events (ages 0-75)
│   │   ├── randomEvents.ts    # 23 random event pool
│   │   ├── mbti.ts            # 16 MBTI personality types + deep readings
│   │   ├── sbti.ts            # 12 SBTI hidden personality types
│   │   └── achievements.ts    # 13 achievements with unlock conditions
│   │
│   ├── types/
│   │   └── game.ts            # All TypeScript interfaces & enums
│   │
│   ├── utils/                 # Pure logic functions (zero React dependency)
│   │   ├── mbtiCalculator.ts  # MBTI type determination from dimension scores + stat weighting
│   │   ├── sbtiChecker.ts     # SBTI hidden personality trigger check
│   │   ├── eventManager.ts    # Random event trigger logic (probability, age range, dedup)
│   │   └── rating.ts          # Life score calculation & letter grade (S/A/B/C/D/E)
│   │
│   ├── hooks/
│   │   └── useGameState.ts    # Central game state via useReducer
│   │
│   ├── components/
│   │   ├── screens/           # Full-stage screen components
│   │   │   ├── GenderSelect.tsx
│   │   │   ├── GamePlay.tsx
│   │   │   └── Ending.tsx
│   │   └── ui/               # Reusable UI components
│   │       ├── StatsPanel.tsx
│   │       ├── EventCard.tsx
│   │       ├── ChoiceButton.tsx
│   │       ├── ParticleBg.tsx
│   │       ├── StatBar.tsx
│   │       ├── PersonalityCard.tsx
│   │       ├── DimensionAnalysis.tsx
│   │       ├── Timeline.tsx
│   │       ├── AchievementGrid.tsx
│   │       └── LifeRating.tsx
│   │
│   ├── App.tsx                # Root: routes between gender/playing/ending phases
│   ├── App.css                # Application-level styles
│   ├── main.tsx               # Entry point
│   └── index.css              # Global reset, variables, responsive base
│
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Data Flow

```
GenderSelect ──> assignOrigin() ──> GamePlay ──> checkRandomEvent()
                                                    │
                              ┌─────────────────────┘
                              ▼
                    EventCard (display event + choices)
                              │
                              ▼
                    Player picks choice ──> updateStats()
                                           updateMBTI()
                                           logEvent()
                              │
                              ▼
                    nextEvent() / age progression
                              │
                              ▼ (after event #24, age 75)
                    calculateMBTI() ──> checkSBTI()
                                          │
                                    ┌─────┘
                                    ▼
                              getLifeRating()
                              checkAchievements()
                              │
                              ▼
                         Ending screen
```

### Phase State Machine

```
[gender] ──select──> [playing] ──complete──> [ending]
                         │                        │
                         └──restart──┘
```

---

## Component Tree

```
<App>
  ├── phase === 'gender'
  │   └── <GenderSelect />
  │
  ├── phase === 'playing'
  │   ├── <ParticleBg />
  │   ├── <StatsPanel>
  │   │   └── <StatBar /> × 6
  │   └── <EventCard>
  │       └── <ChoiceButton /> × N
  │
  └── phase === 'ending'
      ├── <ParticleBg />
      ├── <PersonalityCard />
      ├── <DimensionAnalysis />
      ├── <Timeline />
      ├── <AchievementGrid />
      └── <LifeRating />
```

---

## State Shape (useReducer)

```typescript
interface GameState {
  phase: 'gender' | 'playing' | 'ending';
  gender: 'male' | 'female' | null;
  currentEventIndex: number;     // 0-23 in the fixed events array
  origin: Origin | null;
  stats: Stats;                  // { intelligence, charm, health, wealth, happiness, creativity }
  mbtiScores: MBTIScores;       // { E, I, S, N, T, F, J, P }
  eventLog: EventLogEntry[];    // full history
  triggeredRandomEvents: Set<string>;  // dedup tracking
  pendingRandomEvent: RandomEvent | null; // random event queued before next fixed event
  unlockedAchievements: Set<string>;
  mbtiResult: string | null;    // e.g. "INTJ"
  sbtiResult: SBTIResult | null;
  lifeRating: LifeRating | null;
  lifeScore: number | null;
}
```

---

## Key Design Decisions

### 1. Pure Utils Layer
All game logic (MBTI calc, SBTI check, event triggers, rating) lives in `utils/` as pure functions taking state → returning new values. Zero React imports. This makes them:
- Unit-testable without rendering
- Callable from anywhere (hooks, console debug, future features)
- Easy to reason about

### 2. useReducer Over useState
The game has ~20 interdependent state fields. `useReducer` gives us:
- Atomic state transitions (one dispatch = one consistent state change)
- Easy logging/debugging (reducer is a pure function)
- No stale closure bugs from multiple `useState` setters

### 3. Random Event Queue
When a random event triggers between fixed events, it's queued as `pendingRandomEvent`. The GamePlay screen shows it before proceeding to the next fixed event. After completing the random event, the queue clears and the next fixed event appears.

### 4. CSS Variables for Theming
All colors, sizes, and animation durations use CSS custom properties. The SBTI hidden personality card uses dynamic theme colors injected via inline style overrides.

### 5. Canvas Particle Background
A separate `<canvas>` layer behind the game content. The particle system is self-contained with its own animation loop — no React re-renders needed.

---

## MBTI Calculation

1. Start with dimension scores (E/I, S/N, T/F, J/P) accumulated from player choices
2. Apply stat weighting modifiers:
   - High charm → E boost
   - High intelligence → T, I boost
   - High happiness → F boost
   - High creativity → N, I boost
   - High wealth → T, J boost
3. Compare each dimension pair → higher score determines the letter
4. Combine 4 letters → MBTI type

## SBTI Check (Priority Order)

After MBTI is computed, check SBTI conditions in order:
1. 创造力 ≥80 & 幸福 ≥75 → 造梦师 (SBTI-DW)
2. 智力 ≥85 & 幸福 ≤40 → 人间清醒 (SBTI-AK)
3. ... (rest in definition order)
4. Any attribute ≤20 & average ≥45 → 虚空行者 (SBTI-VW)

First match wins. If none match, display normal MBTI only.

---

## Responsive Strategy
- Desktop-first with mobile breakpoints at 1024px, 768px, 480px
- Stats panel: 3×2 grid → 2×3 → 1×6 on mobile
- Event card: full-width on all sizes, padding adjusts
- Ending summary: 3 columns → 2 columns → 1 column
- Choice buttons: horizontal row → vertical stack on small screens

---

## Keyboard Shortcuts
- `1` / `A` → Choice 1
- `2` / `B` → Choice 2
- `3` / `C` → Choice 3
- `4` / `D` → Choice 4
- `Enter` / `Space` → Continue / Next
- Handled at `GamePlay` component level via `useEffect` keydown listener

---

## Animation System
- **ParticleBg**: Vanilla Canvas 2D — ~50 particles, gentle float + fade, highlight color shifts
- **EventCard enter**: CSS `@keyframes fadeInUp` (translateY 30px → 0, opacity 0 → 1)
- **StatBar fill**: CSS transition on width change (0.6s ease)
- **MBTI card**: Conic-gradient border rotation via CSS animation
- **SBTI card**: Box-shadow pulse animation with theme color
- **ChoiceButton hover**: Border highlight + slight translateY

---

## Achievement Check (at ending)
All 13 achievements checked once during ending calculation:
- Threshold-based (stat ≥ 90/85/70)
- Event-count-based (≥4 random events triggered)
- Meta achievements (≥5 other achievements, has SBTI)

---

## Error Handling
- `verbatimModuleSyntax` in tsconfig ensures clean imports
- `noUnusedLocals` + `noUnusedParameters` catches dead code at compile time
- All game data is statically defined — no runtime data loading errors
- State reducer has exhaustiveness check in switch
