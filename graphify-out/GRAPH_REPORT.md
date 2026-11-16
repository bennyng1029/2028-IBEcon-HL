# Graph Report - 2028-IBEconAA-HL  (2026-11-16)

## Corpus Check
- 11 files · ~218,988 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 74 nodes · 144 edges · 8 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `377f71c1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]

## God Nodes (most connected - your core abstractions)
1. `t()` - 17 edges
2. `add()` - 16 edges
3. `map()` - 11 edges
4. `render()` - 10 edges
5. `lessonPage()` - 9 edges
6. `link()` - 8 edges
7. `shell()` - 7 edges
8. `home()` - 7 edges
9. `model()` - 7 edges
10. `lesson()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `add()` --calls--> `node()`  [EXTRACTED]
  assets/js/app.js → assets/js/app.js  _Bridges community 2 → community 3_
- `label()` --calls--> `t()`  [EXTRACTED]
  assets/js/app.js → assets/js/app.js  _Bridges community 5 → community 8_
- `shell()` --calls--> `t()`  [EXTRACTED]
  assets/js/app.js → assets/js/app.js  _Bridges community 5 → community 2_
- `progress()` --calls--> `t()`  [EXTRACTED]
  assets/js/app.js → assets/js/app.js  _Bridges community 5 → community 3_
- `lessonPage()` --calls--> `link()`  [EXTRACTED]
  assets/js/app.js → assets/js/app.js  _Bridges community 2 → community 8_

## Communities (16 total, 0 thin omitted)

### Community 1 - "Community 1"
Cohesion: 0.29
Nodes (5): area(), item(), main(), ordinate(), regionArea()

### Community 2 - "Community 2"
Cohesion: 0.33
Nodes (6): $(), guidedStudio(), lessonCard(), link(), node(), shell()

### Community 3 - "Community 3"
Cohesion: 0.52
Nodes (7): add(), coverage(), glossary(), home(), progress(), render(), search()

### Community 4 - "Community 4"
Cohesion: 0.62
Nodes (6): ev(), key(), nav(), send(), tabTo(), wait()

### Community 5 - "Community 5"
Cohesion: 0.6
Nodes (6): lesson(), map(), overlay(), svgGraph(), t(), unitName()

### Community 7 - "Community 7"
Cohesion: 0.4
Nodes (5): curve(), line(), market(), rect(), region()

### Community 8 - "Community 8"
Cohesion: 0.83
Nodes (4): button(), label(), lessonPage(), model()

### Community 9 - "Community 9"
Cohesion: 0.67
Nodes (3): guide(), point(), read()

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `Community 5` to `Community 8`, `Community 2`, `Community 3`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `add()` connect `Community 3` to `Community 8`, `Community 2`, `Community 5`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `map()` connect `Community 5` to `Community 8`, `Community 2`, `Community 3`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._