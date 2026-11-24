Fractional Knapsack – Greedy Algorithm (DAA Project)

**Problem:** Given `n` items with values and weights and a knapsack of capacity `W`, maximize total value. Items may be **split** (fractions allowed).

## Greedy Strategy
1. Compute value/weight ratio for every item.
2. Sort items by ratio, highest first.
3. Take whole items while they fit; take a fraction of the next item to fill the remaining space.

## Complexity
| | Fractional (Greedy) | 0/1 (DP) |
|---|---|---|
| Time | O(n log n) | O(n·W) pseudo-polynomial |
| Space | O(n) | O(W) optimized |
| Optimal? | Yes (greedy-choice property) | Greedy fails; DP needed |
| Items | Divisible | Indivisible |

Example (W=50): items (60,10), (100,20), (120,30) → Fractional = **240**, 0/1 = **220**.

## Why greedy works here / fails for 0/1
Swapping any lower-ratio weight for a higher-ratio one never reduces value (exchange argument), so greedy is optimal. In 0/1 you cannot fill leftover space with a fraction, so the greedy pick can waste capacity and be suboptimal.

## Real-time Scenarios
- Cargo/truck loading of divisible goods (grain, fuel, sand)
- Investment allocation across divisible assets
- CPU / bandwidth / network resource allocation
- Cutting raw material (cloth, wood, metal) for maximum profit
- Cloud resource and budget allocation, ad budget distribution
- Diet planning (maximize nutrition per calorie limit)

## Run
```bash
node fractional_knapsack.js
node test_knapsack.js
```
