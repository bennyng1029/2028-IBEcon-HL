// Original guided introductory lessons. Diagram omissions and compressed treatments are explicit.
globalThis.ECON_LESSONS = [
  {
    "id": "1.1",
    "unit": 1,
    "title": "What is economics?",
    "summary": "How can a society choose when resources are scarce?",
    "question": "How can a society choose when resources are scarce?",
    "scope": "common",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "scarcity",
        "definition": "Resources are limited relative to the uses people want to make of them."
      },
      {
        "term": "opportunity cost",
        "definition": "The next best alternative forgone when a choice is made."
      },
      {
        "term": "production possibilities curve",
        "definition": "The frontier of attainable combinations of two outputs with given resources and technology."
      }
    ],
    "sections": [
      {
        "id": "choice",
        "heading": "Scarcity and choice",
        "body": [
          "Economics studies how people and societies make choices when resources are limited. Microeconomics studies individual markets and decisions; macroeconomics studies economy-wide outcomes. Needs and wants can exceed available resources, so sustainability asks whether choices can continue without exhausting resources.",
          "Economics is a social science because it investigates human decisions and institutions using evidence. Microeconomics asks how a bus fare affects passengers; macroeconomics asks how unemployment changes across the economy. People respond differently, so an economic prediction is conditional rather than a physical law.",
          "Use nine lenses when explaining a choice: scarcity (limited resources), choice (selecting an alternative), efficiency (avoiding waste), equity (fairness), economic well-being (material living conditions and security), sustainability (maintaining possibilities for future people), change (adjustment over time), interdependence (decisions affecting others), and intervention (deliberate policy action). A water restriction can conserve a scarce resource while raising questions about fairness between households."
        ],
        "scope": "common",
        "limitation": "The model simplifies diverse human motives."
      },
      {
        "id": "production",
        "heading": "Resources and opportunity cost",
        "body": [
          "Land, labour, capital and entrepreneurship are factors of production. Choosing one use means giving up the next best alternative: its opportunity cost. A free good has no opportunity cost only where it is sufficiently abundant.",
          "Land means natural resources such as soil and sunlight; labour is human effort and skill; capital is produced equipment such as ovens, rather than money itself; entrepreneurship organizes resources and bears business risk. A bakery needs all four. A budget buys access to resources but does not remove their scarcity.",
          "Opportunity cost is only the next best alternative forgone, not the sum of everything rejected. If your preferred alternative to two hours of revision is paid work earning $24, that work is the opportunity cost. Air can be a free good in an uncrowded setting, but clean air becomes scarce when pollution requires resources to prevent harm."
        ],
        "scope": "common",
        "limitation": "A resource can cease to be free when circumstances change."
      },
      {
        "id": "ppc",
        "heading": "Production possibilities",
        "body": [
          "A production possibilities curve (PPC) shows the maximum attainable combinations of two goods with given resources and technology. A point inside can indicate unemployment or inefficiency; a point outside is currently unattainable. Moving toward the frontier can raise actual output; an outward shift represents greater productive capacity. A bowed frontier can show increasing opportunity cost as resources become less suited to the expanding activity; a straight line shows constant opportunity cost.",
          "To construct a PPC, put tables per week on the horizontal axis and baskets per week on the vertical axis. With a straight frontier joining (0,10) and (5,0), (2,6) is efficient, (2,3) is attainable but below capacity, and (4,6) is unattainable with present resources. One extra table costs two baskets along this line.",
          "Moving from (2,3) to (2,6) uses idle capacity: actual output grows without moving the frontier. Training workers or acquiring better equipment can move the frontier outward. On a bowed-out curve, later tables cost progressively more baskets because workers best suited to tables are used first."
        ],
        "scope": "common",
        "limitation": "Two goods cannot capture every real-world choice."
      },
      {
        "id": "systems",
        "heading": "Economic systems",
        "body": [
          "All economies decide what and how much to produce, how to produce, and for whom. Markets use prices and private decisions; planned systems rely more on central direction. Mixed economies combine both, including government intervention.",
          "A price rise can encourage firms to supply a scarce product and discourage some purchases; a planning authority can instead allocate production targets and entitlements. Neither guarantees equity or good information. A mixed economy might use markets for bread, public provision for basic schooling, and pollution rules for factories.",
          "Circular-flow reasoning starts with households supplying factors to firms and receiving wages, rent, interest and profit; households spend on firms’ output in the opposite direction. Saving, taxes and imports withdraw spending from the domestic flow; investment, government spending and exports inject it. Banks connect saving to investment, government taxes and spends, and the foreign sector trades."
        ],
        "scope": "common",
        "limitation": "Actual economies fall along a spectrum."
      }
    ],
    "model": "ppc",
    "modelPrompt": "Predict how reallocating fixed resources changes the two outputs. Distinguish moving toward capacity from changing capacity.",
    "modelAssumption": "Two goods, a fixed time period, and given resources and technology; frontier points use resources efficiently.",
    "modelLimitation": "A two-good frontier omits distribution, quality and environmental consequences; interior points alone do not reveal their cause.",
    "worked": {
      "prompt": "A town has a straight PPC from 10 baskets and no tables to 5 tables and no baskets per week. It moves from 1 table to 3 tables on the frontier.",
      "steps": [
        "The slope implies 10/5=2 baskets forgone per extra table.",
        "Initially it makes 8 baskets; at 3 tables it can make 4 baskets.",
        "The extra 2 tables cost 8−4=4 baskets. Resources and technology have not changed."
      ],
      "conclusion": "The town changes its output mix; it does not increase productive capacity."
    },
    "quiz": {
      "question": "A town moves from an interior point to its existing PPC. What is the best interpretation?",
      "options": [
        "Actual output can increase through better use of existing resources.",
        "Technology must have improved and shifted the PPC outward.",
        "The point is unattainable because it is on the frontier.",
        "The opportunity cost of all production has disappeared."
      ],
      "answer": 0,
      "feedback": [
        "Correct: idle resources or inefficiency can be reduced without changing capacity.",
        "A technology change can shift capacity, but this movement is to the same frontier.",
        "Points on the frontier are attainable and productively efficient under the assumptions.",
        "Full resource use still involves a trade-off between the two goods."
      ],
      "scope": "common"
    },
    "challenge": {
      "prompt": "Explain why choosing a flood barrier can have an opportunity cost even when the government has enough money to pay for it.",
      "hint": "Name the scarce real resources and their next best use.",
      "modelAnswer": "The barrier uses scarce construction labour, land and materials. Even when funds are available, those resources could have built the next best alternative, such as a school extension. That forgone extension is the opportunity cost; money does not create unlimited resources.",
      "rubric": [
        "Define opportunity cost as the next best alternative forgone.",
        "Identify scarce real resources used by the barrier.",
        "Apply a plausible alternative use to those same resources.",
        "Explain why financial affordability does not remove scarcity."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "common"
    },
    "coverage": [
      {
        "id": "1.1.social_science",
        "point": "Economics as social science and microeconomics versus macroeconomics",
        "status": "taught",
        "evidence": "section:choice"
      },
      {
        "id": "1.1.central_concepts",
        "point": "Nine central concepts",
        "status": "taught",
        "evidence": "section:choice"
      },
      {
        "id": "1.1.factors",
        "point": "Factors of production",
        "status": "taught",
        "evidence": "section:production"
      },
      {
        "id": "1.1.scarcity",
        "point": "Scarcity, needs, wants and sustainability",
        "status": "taught",
        "evidence": "section:choice"
      },
      {
        "id": "1.1.opportunity_cost",
        "point": "Opportunity cost and free goods",
        "status": "taught",
        "evidence": "section:production"
      },
      {
        "id": "1.1.economic_questions",
        "point": "Basic economic questions",
        "status": "taught",
        "evidence": "section:systems"
      },
      {
        "id": "1.1.systems",
        "point": "Market, planned and mixed systems and intervention",
        "status": "taught",
        "evidence": "section:systems"
      },
      {
        "id": "1.1.ppc_assumptions",
        "point": "PPC assumptions and features",
        "status": "taught",
        "evidence": "section:ppc"
      },
      {
        "id": "1.1.ppc_choice_diagram",
        "point": "PPC diagram: scarcity, choice, opportunity cost, unemployment and efficiency",
        "status": "taught",
        "evidence": "diagram:1.1.ppc_choice_diagram"
      },
      {
        "id": "1.1.ppc_growth_diagram",
        "point": "PPC diagram: actual growth and growth in productive possibilities",
        "status": "taught",
        "evidence": "diagram:1.1.ppc_growth_diagram"
      },
      {
        "id": "1.1.ppc_cost_diagram",
        "point": "PPC diagram: increasing versus constant opportunity cost",
        "status": "taught",
        "evidence": "diagram:1.1.ppc_cost_diagram"
      },
      {
        "id": "1.1.circular_flow_diagram",
        "point": "Circular flow diagram: sectors, interdependence, leakages and injections",
        "status": "taught",
        "evidence": "diagram:1.1.circular_flow_diagram"
      }
    ],
    "diagrams": [
      {
        "id": "1.1.ppc_choice_diagram",
        "scope": "common",
        "title": "PPC diagram: scarcity, choice, opportunity cost, unemployment and efficiency",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "choice",
            "title": "Feasible, efficient or beyond capacity?",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "The frontier represents productive possibilities, not the socially preferred combination. Interior output may reflect unemployment or inefficiency.",
            "baseDescription": "Diagram panel: Horizontal axis: Output of X per period, 0–12. Vertical axis: Output of Y per period, 0–12. Coordinates below are (horizontal, vertical). Production possibilities frontier (PPC) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "outputX": "Output of X per period",
              "outputY": "Output of Y per period",
              "frontier": "Production possibilities frontier (PPC)",
              "A": "A: feasible interior",
              "B": "B: efficient frontier",
              "C": "C: efficient frontier",
              "D": "D: unattainable at present",
              "choice": "Choice B→C",
              "opportunityCost": "Opportunity-cost guide: Y forgone"
            },
            "prediction": {
              "question": "On X + Y = 10, can an economy currently produce D = (7,6)?",
              "options": [
                "No: D lies outside present capacity.",
                "Yes: any combination of two goods is feasible."
              ],
              "answer": 0,
              "feedback": [
                "D requires 13 combined units, above the frontier total of 10.",
                "Scarcity limits feasible combinations; two positive quantities do not make a point attainable."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: A: feasible interior at (2, 4). B: efficient frontier at (2, 8).",
                "instruction": "For “Feasible, efficient or beyond capacity?”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add A: feasible interior; B: efficient frontier.",
                    "feedback": "A at (2,4) lies inside the frontier, whereas B at (2,8) lies on it: the same X output can accompany fuller use of capacity."
                  },
                  {
                    "key": "misconception0",
                    "label": "Shift the frontier whenever the output point moves.",
                    "feedback": "A point movement can change resource use or production choice without changing productive capacity. Use only the frontier changes specified for this scenario."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: C: efficient frontier at (5, 5). D: unattainable at present at (7, 6).",
                "instruction": "For “Feasible, efficient or beyond capacity?”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Label D as efficient and A as unattainable.",
                    "feedback": "D = (7,6) lies outside X + Y = 10, while A = (2,4) lies inside. Efficiency requires a feasible frontier point, such as B or C."
                  },
                  {
                    "key": "read",
                    "label": "Add C: efficient frontier; D: unattainable at present.",
                    "feedback": "C at (5,5) lies on X + Y = 10, but D at (7,6) requires 13 combined units and is beyond current capacity."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Choice B→C: directed arrow (2, 8) → (5, 5). Opportunity-cost guide: Y forgone: dashed path (2, 8) → (5, 8) → (5, 5).",
                "instruction": "For “Feasible, efficient or beyond capacity?”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Choice B→C, with dashed axis-reading guides.",
                    "feedback": "The B→C arrow gains 3 X while the dashed path measures the fall from 8 to 5 Y; that sacrifice is the opportunity cost."
                  },
                  {
                    "key": "misconception2",
                    "label": "Show the Y opportunity cost as the total output at C.",
                    "feedback": "Opportunity cost is the next-best output forgone: moving B→C reduces Y from 8 to 5, a sacrifice of 3 Y. It is not the total output remaining at C."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "A (2,4) is inside; B (2,8) and C (5,5) are efficient; D (7,6) is outside. Moving B→C gains 3 X and sacrifices 3 Y.",
            "explanation": {
              "question": "Why does B→C have an opportunity cost?",
              "options": [
                "Because an interior point always uses all resources.",
                "At full productive capacity, more X requires giving up Y."
              ],
              "answer": 1,
              "feedback": [
                "A is inside the frontier, so unused or inefficiently used resources can permit more output without the same trade-off.",
                "The guide path records Y falling from 8 to 5 while X rises from 2 to 5."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "1.1.ppc_growth_diagram",
        "scope": "common",
        "title": "PPC diagram: actual growth and growth in productive possibilities",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "actual",
            "title": "Actual growth: using idle resources",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "A frontier shift illustrates potential output; it does not guarantee that actual output reaches the new frontier.",
            "baseDescription": "Diagram panel: Horizontal axis: Output of X per period, 0–12. Vertical axis: Output of Y per period, 0–12. Coordinates below are (horizontal, vertical). Production possibilities frontier (PPC) connects (0, 10) → (10, 0). Initial point at (2, 4).",
            "labels": {
              "main": "Diagram panel",
              "outputX": "Output of X per period",
              "outputY": "Output of Y per period",
              "frontier": "Production possibilities frontier (PPC)",
              "initial": "Initial point",
              "capacity": "Point on existing capacity",
              "final": "Final point",
              "growth": "Actual-output growth arrow",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "If output moves from (2,4) to (2,8) on the existing frontier, what changes?",
              "options": [
                "The production frontier must shift outward.",
                "Actual output rises while the frontier stays fixed."
              ],
              "answer": 1,
              "feedback": [
                "More complete use of existing resources need not change maximum productive capacity.",
                "At X = 2, Y rises from 4 to 8 using existing potential."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Point on existing capacity at (2, 8).",
                "instruction": "Which drawing establishes the stated production-capacity reference before reading the output comparison?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Shift the frontier whenever the output point moves.",
                    "feedback": "A point movement can change resource use or production choice without changing productive capacity. Use only the frontier changes specified for this scenario."
                  },
                  {
                    "key": "construct",
                    "label": "Add Point on existing capacity.",
                    "feedback": "The point (2,8) is on the existing frontier: reaching it would use current capacity more fully without shifting the frontier."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (2, 8). Final point — dashed quantity guide: dashed path (2, 0) → (2, 8). Final point — dashed vertical-axis guide: dashed path (0, 8) → (2, 8).",
                "instruction": "For “Actual growth: using idle resources”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The guides read X = 2 and Y = 8 at the final frontier point, distinguishing fuller resource use from increased productive capacity."
                  },
                  {
                    "key": "misconception1",
                    "label": "Shift the frontier whenever the output point moves.",
                    "feedback": "A point movement can change resource use or production choice without changing productive capacity. Use only the frontier changes specified for this scenario."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Actual-output growth arrow: directed arrow (2, 4) → (2, 8).",
                "instruction": "For “Actual growth: using idle resources”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Shift the frontier whenever the output point moves.",
                    "feedback": "A point movement can change resource use or production choice without changing productive capacity. Use only the frontier changes specified for this scenario."
                  },
                  {
                    "key": "compare",
                    "label": "Add Actual-output growth arrow.",
                    "feedback": "The upward arrow from (2,4) to (2,8) shows actual output growth through reduced idle capacity, with X unchanged."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The arrow joins interior (2,4) to frontier (2,8); the boundary X + Y = 10 remains unchanged.",
            "explanation": {
              "question": "Which observation distinguishes actual from potential growth?",
              "options": [
                "Moving toward an existing frontier shows improved resource utilization.",
                "An outward frontier is necessary for every rise in actual output."
              ],
              "answer": 0,
              "feedback": [
                "The economy can increase actual production by reducing idle resources.",
                "The initial interior point already leaves room to produce more."
              ]
            },
            "extension": null
          },
          {
            "key": "capacity",
            "title": "Capacity growth: an outward frontier",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "A frontier shift illustrates potential output; it does not guarantee that actual output reaches the new frontier.",
            "baseDescription": "Diagram panel: Horizontal axis: Output of X per period, 0–12. Vertical axis: Output of Y per period, 0–12. Coordinates below are (horizontal, vertical). Production possibilities frontier (PPC) connects (0, 10) → (10, 0). Initial point at (2, 4).",
            "labels": {
              "main": "Diagram panel",
              "outputX": "Output of X per period",
              "outputY": "Output of Y per period",
              "frontier": "Production possibilities frontier (PPC)",
              "newFrontier": "New production possibilities frontier",
              "initial": "Initial point",
              "final": "Final point",
              "growth": "Output increase using expanded capacity",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "If capacity expands from X + Y = 10 to X + Y = 12, what changes?",
              "options": [
                "The frontier moves outward; more combinations become feasible.",
                "Only a point moves inside an unchanged frontier."
              ],
              "answer": 0,
              "feedback": [
                "Both intercepts rise from 10 to 12; at X = 2, potential Y rises to 10.",
                "A capacity change changes the boundary, rather than merely resource utilization."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: New production possibilities frontier connects (0, 12) → (12, 0).",
                "instruction": "Which drawing establishes the stated production-capacity reference before reading the output comparison?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add New production possibilities frontier.",
                    "feedback": "The new frontier reaches 12 on each axis rather than 10, showing expanded productive possibilities rather than a change in resource use alone."
                  },
                  {
                    "key": "misconception0",
                    "label": "Shift the frontier whenever the output point moves.",
                    "feedback": "A point movement can change resource use or production choice without changing productive capacity. Use only the frontier changes specified for this scenario."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (2, 10). Final point — dashed quantity guide: dashed path (2, 0) → (2, 10). Final point — dashed vertical-axis guide: dashed path (0, 10) → (2, 10).",
                "instruction": "For “Capacity growth: an outward frontier”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Shift the frontier whenever the output point moves.",
                    "feedback": "A point movement can change resource use or production choice without changing productive capacity. Use only the frontier changes specified for this scenario."
                  },
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The guides locate the final combination at X = 2, Y = 10 on the expanded frontier; the old frontier could supply only 8 Y at this X."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Output increase using expanded capacity: directed arrow (2, 4) → (2, 10).",
                "instruction": "For “Capacity growth: an outward frontier”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Output increase using expanded capacity.",
                    "feedback": "The arrow from (2,4) to (2,10) shows the illustrated output gain; its endpoint requires the expanded capacity already drawn."
                  },
                  {
                    "key": "misconception2",
                    "label": "Shift the frontier whenever the output point moves.",
                    "feedback": "A point movement can change resource use or production choice without changing productive capacity. Use only the frontier changes specified for this scenario."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The old frontier has intercepts 10; the new frontier has intercepts 12. The illustrated final point (2,10) lies on the new boundary.",
            "explanation": {
              "question": "Which observation distinguishes actual from potential growth?",
              "options": [
                "Any increase in current output proves capacity has risen.",
                "A new frontier shows increased productive capacity."
              ],
              "answer": 1,
              "feedback": [
                "Actual output can rise inside a fixed frontier.",
                "The final point uses newly available capacity; it was beyond the old boundary."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "1.1.ppc_cost_diagram",
        "scope": "common",
        "title": "PPC diagram: increasing versus constant opportunity cost",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "constant",
            "title": "Constant opportunity cost",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "These shapes illustrate alternative assumptions about resource suitability; the frontier does not measure money cost.",
            "baseDescription": "Diagram panel: Horizontal axis: Output of X per period, 0–6. Vertical axis: Output of Y per period, 0–12. Coordinates below are (horizontal, vertical). Production possibilities frontier (PPC) connects (0, 10) → (5, 0).",
            "labels": {
              "main": "Diagram panel",
              "outputX": "Output of X per period",
              "outputY": "Output of Y per period",
              "frontier": "Production possibilities frontier (PPC)",
              "allocation0": "First production combination",
              "allocation1": "Second production combination",
              "allocation2": "Third production combination",
              "firstSacrifice": "First X increment and Y sacrifice",
              "secondSacrifice": "Second X increment and Y sacrifice",
              "allocation0Q": "First production combination — dashed quantity guide",
              "allocation0P": "First production combination — dashed vertical-axis guide",
              "allocation1Q": "Second production combination — dashed quantity guide",
              "allocation1P": "Second production combination — dashed vertical-axis guide",
              "allocation2Q": "Third production combination — dashed quantity guide",
              "allocation2P": "Third production combination — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Compare two successive increases of 1 unit of X. What happens to the Y sacrificed?",
              "options": [
                "The second sacrifice must exceed the first.",
                "The sacrifice remains 2 Y each time."
              ],
              "answer": 1,
              "feedback": [
                "On this straight frontier the trade-off is constant.",
                "The straight frontier passes through (0,10), (1,8), (2,6)."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: First production combination at (0, 10). First production combination — dashed quantity guide: dashed path (0, 0) → (0, 10). First production combination — dashed vertical-axis guide: dashed path (0, 10) → (0, 10).",
                "instruction": "Which drawing establishes the stated production-capacity reference before reading the output comparison?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Shift the frontier whenever the output point moves.",
                    "feedback": "A point movement can change resource use or production choice without changing productive capacity. Use only the frontier changes specified for this scenario."
                  },
                  {
                    "key": "construct",
                    "label": "Add First production combination, with dashed axis-reading guides.",
                    "feedback": "The first point and guides locate (0,10), the starting combination from which Y sacrifices will be measured."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Second production combination at (1, 8). Third production combination at (2, 6). Second production combination — dashed quantity guide: dashed path (1, 0) → (1, 8). Second production combination — dashed vertical-axis guide: dashed path (0, 8) → (1, 8). Third production combination — dashed quantity guide: dashed path (2, 0) → (2, 6). Third production combination — dashed vertical-axis guide: dashed path (0, 6) → (2, 6).",
                "instruction": "For “Constant opportunity cost”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Second production combination; Third production combination, with dashed axis-reading guides.",
                    "feedback": "The new points (1,8) and (2,6) each add one X while reducing Y by two, so the straight frontier implies constant opportunity cost."
                  },
                  {
                    "key": "misconception1",
                    "label": "Mark a larger Y sacrifice for the second equal X increment.",
                    "feedback": "The marked combinations give Y losses 10 − 8 = 2 and 8 − 6 = 2. A straight frontier has constant opportunity cost in this example."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: First X increment and Y sacrifice: directed arrow (0, 10) → (1, 8). Second X increment and Y sacrifice: directed arrow (1, 8) → (2, 6).",
                "instruction": "For “Constant opportunity cost”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Mark a larger Y sacrifice for the second equal X increment.",
                    "feedback": "The marked combinations give Y losses 10 − 8 = 2 and 8 − 6 = 2. A straight frontier has constant opportunity cost in this example."
                  },
                  {
                    "key": "compare",
                    "label": "Add First X increment and Y sacrifice; Second X increment and Y sacrifice.",
                    "feedback": "The two arrows each move right by one and down by two, making the equal Y sacrifices for equal X increments visible."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Equal X increments give Y losses of 2 and 2 on the same straight frontier.",
            "explanation": {
              "question": "What economic interpretation fits this frontier?",
              "options": [
                "The illustrated trade-off between X and Y is constant.",
                "All real resources must be equally adaptable."
              ],
              "answer": 0,
              "feedback": [
                "A constant slope gives the same Y sacrifice per extra X in this model.",
                "A straight illustrative frontier does not prove universal resource adaptability."
              ]
            },
            "extension": null
          },
          {
            "key": "increasing",
            "title": "Increasing opportunity cost",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "These shapes illustrate alternative assumptions about resource suitability; the frontier does not measure money cost.",
            "baseDescription": "Diagram panel: Horizontal axis: Output of X per period, 0–4. Vertical axis: Output of Y per period, 0–12. Coordinates below are (horizontal, vertical). Production possibilities frontier (PPC) is a sampled smooth curve, shown from (0, 10) to (3.162, 0). The bowed frontier follows Y = 10 − X² over nonnegative feasible outputs; the Y sacrifice increases for equal X increments.",
            "labels": {
              "main": "Diagram panel",
              "outputX": "Output of X per period",
              "outputY": "Output of Y per period",
              "frontier": "Production possibilities frontier (PPC)",
              "allocation0": "First production combination",
              "allocation1": "Second production combination",
              "allocation2": "Third production combination",
              "firstSacrifice": "First X increment and Y sacrifice",
              "secondSacrifice": "Second X increment and Y sacrifice",
              "allocation0Q": "First production combination — dashed quantity guide",
              "allocation0P": "First production combination — dashed vertical-axis guide",
              "allocation1Q": "Second production combination — dashed quantity guide",
              "allocation1P": "Second production combination — dashed vertical-axis guide",
              "allocation2Q": "Third production combination — dashed quantity guide",
              "allocation2P": "Third production combination — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Compare two successive increases of 1 unit of X. What happens to the Y sacrificed?",
              "options": [
                "Y sacrificed rises from 1 to 3.",
                "Y sacrificed remains constant at 1."
              ],
              "answer": 0,
              "feedback": [
                "The bowed frontier passes through (0,10), (1,9), (2,6).",
                "Equal horizontal changes need not have equal vertical sacrifices."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: First production combination at (0, 10). First production combination — dashed quantity guide: dashed path (0, 0) → (0, 10). First production combination — dashed vertical-axis guide: dashed path (0, 10) → (0, 10).",
                "instruction": "Which drawing establishes the stated production-capacity reference before reading the output comparison?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add First production combination, with dashed axis-reading guides.",
                    "feedback": "The point (0,10) establishes the starting combination on the bowed frontier before measuring successive Y sacrifices."
                  },
                  {
                    "key": "misconception0",
                    "label": "Shift the frontier whenever the output point moves.",
                    "feedback": "A point movement can change resource use or production choice without changing productive capacity. Use only the frontier changes specified for this scenario."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Second production combination at (1, 9). Third production combination at (2, 6). Second production combination — dashed quantity guide: dashed path (1, 0) → (1, 9). Second production combination — dashed vertical-axis guide: dashed path (0, 9) → (1, 9). Third production combination — dashed quantity guide: dashed path (2, 0) → (2, 6). Third production combination — dashed vertical-axis guide: dashed path (0, 6) → (2, 6).",
                "instruction": "For “Increasing opportunity cost”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Mark identical Y sacrifices for the two equal X increments.",
                    "feedback": "The marked combinations give Y losses 10 − 9 = 1 and 9 − 6 = 3. Equal X increments therefore have increasing opportunity cost on this bowed frontier."
                  },
                  {
                    "key": "read",
                    "label": "Add Second production combination; Third production combination, with dashed axis-reading guides.",
                    "feedback": "The points (1,9) and (2,6) show a sacrifice of one Y followed by three Y for equal one-unit increases in X."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: First X increment and Y sacrifice: directed arrow (0, 10) → (1, 9). Second X increment and Y sacrifice: directed arrow (1, 9) → (2, 6).",
                "instruction": "For “Increasing opportunity cost”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add First X increment and Y sacrifice; Second X increment and Y sacrifice.",
                    "feedback": "The two arrows have equal horizontal increments but progressively larger vertical falls, showing increasing opportunity cost."
                  },
                  {
                    "key": "misconception2",
                    "label": "Mark identical Y sacrifices for the two equal X increments.",
                    "feedback": "The marked combinations give Y losses 10 − 9 = 1 and 9 − 6 = 3. Equal X increments therefore have increasing opportunity cost on this bowed frontier."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Equal X increments give Y losses of 1 and then 3, illustrated by two directed movements along a smooth bowed frontier.",
            "explanation": {
              "question": "What economic interpretation fits this frontier?",
              "options": [
                "Every economy necessarily has this exact curvature.",
                "Resources become less suited to X as production of X expands."
              ],
              "answer": 1,
              "feedback": [
                "The shape is an assumption about resource trade-offs, not a universal empirical law.",
                "Increasing marginal opportunity cost can arise from differences in resource suitability."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "1.1.circular_flow_diagram",
        "scope": "common",
        "title": "Circular flow diagram: sectors, interdependence, leakages and injections",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "fiveSector",
            "title": "From two sectors to five sectors",
            "assumption": "The diagram is a simplified flow map. Layout coordinates are positions, not prices or quantities; real and money flows are distinguished by their labels and direction.",
            "limitation": "Imports/exports are money leakages/injections here. Gross sectoral flows need not be equal individually; finance is simplified.",
            "baseDescription": "Diagram panel: Layout only; no economic axis scale. Households sector box. Firms sector box. Real factors: households → firms; directed path from Households to Firms. Factor income: firms → households; directed path from Firms to Households.",
            "labels": {
              "main": "Diagram panel",
              "flowX": "Flow layout: horizontal position",
              "flowY": "Flow layout: vertical position",
              "households": "Households",
              "firms": "Firms",
              "finance": "Financial sector",
              "government": "Government",
              "foreign": "Foreign sector",
              "factors": "Real factors: households → firms",
              "income": "Factor income: firms → households",
              "goods": "Real goods and services: firms → households",
              "expenditure": "Consumption expenditure: households → firms",
              "saving": "Saving (S): households → finance",
              "investment": "Investment spending (I): finance → firms",
              "tax": "Taxes (T): households → government",
              "governmentSpending": "Government spending (G): government → firms",
              "imports": "Import spending leakage (M): domestic firms → foreign sector",
              "exports": "Export receipts injection (X): foreign sector → domestic firms"
            },
            "prediction": {
              "question": "When households supply factors to firms, which flow goes in the opposite direction?",
              "options": [
                "Factor income goes from households to firms.",
                "Factor income goes from firms to households."
              ],
              "answer": 1,
              "feedback": [
                "Paying income follows firms’ use of factors, so its direction opposes the real factor flow.",
                "Wages, rent, interest and profit are payments for factors supplied by households."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Financial sector sector box. Government sector box. Foreign sector sector box.",
                "instruction": "Which sector boxes must be added to distinguish the participants beyond the starting household–firm core?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Merge finance, government and the foreign sector into the firms box.",
                    "feedback": "Separate sector boxes allow saving and investment, taxes and spending, and import/export payments to be traced in distinct directions. Merging the sectors hides the leakage/injection mechanisms."
                  },
                  {
                    "key": "construct",
                    "label": "Add Financial sector; Government; Foreign sector.",
                    "feedback": "The separate finance, government and foreign boxes identify distinct sectors beyond the household–firm core; no new payment arrows are added in this step."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Real goods and services: firms → households; directed path from Firms to Households. Consumption expenditure: households → firms; directed path from Households to Firms.",
                "instruction": "For “From two sectors to five sectors”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Real goods and services: firms → households; Consumption expenditure: households → firms.",
                    "feedback": "The goods arrow runs from firms to households, while consumption spending runs back to firms: real output and its payment move in opposite directions."
                  },
                  {
                    "key": "misconception1",
                    "label": "Send goods and consumption spending from firms to households in the same direction.",
                    "feedback": "Goods and services go from firms to households; household spending returns to firms. These real and money flows are counterparts moving in opposite directions."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Saving (S): households → finance; directed path from Households to Financial sector. Investment spending (I): finance → firms; directed path from Financial sector to Firms. Taxes (T): households → government; directed path from Households to Government. Government spending (G): government → firms; directed path from Government to Firms. Import spending leakage (M): domestic firms → foreign sector; directed path from Firms to Foreign sector. Export receipts injection (X): foreign sector → domestic firms; directed path from Foreign sector to Firms.",
                "instruction": "For “From two sectors to five sectors”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Draw saving, tax and import payments as injections into domestic spending.",
                    "feedback": "S, T and M are leakages from the domestic spending stream in this example. I, G and X are injections in the opposite direction; the flow labels distinguish them."
                  },
                  {
                    "key": "compare",
                    "label": "Add Saving (S): households → finance; Investment spending (I): finance → firms; Taxes (T): households → government; Government spending (G): government → firms; Import spending leakage (M): domestic firms → foreign sector; Export receipts injection (X): foreign sector → domestic firms.",
                    "feedback": "The added S, T and M arrows leave domestic spending, while I, G and X return spending to firms through the three additional sectors."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Households supply factors and buy goods; firms pay factor income and supply goods. Saving, taxes and imports leave the domestic spending stream; investment, government spending and exports inject spending.",
            "explanation": {
              "question": "Why do saving and investment have different flow directions?",
              "options": [
                "Saving directs funds toward finance; investment directs spending toward firms.",
                "Every leakage must equal its corresponding injection separately."
              ],
              "answer": 0,
              "feedback": [
                "The separate arrows distinguish financing flows and spending flows; individual S, T and M need not equal I, G and X one by one.",
                "An accounting balance for the whole economy does not require pairwise equality of each illustrated arrow."
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  {
    "id": "1.2",
    "unit": 1,
    "title": "How economists approach the world",
    "summary": "How can evidence and values shape an economic argument?",
    "question": "How can evidence and values shape an economic argument?",
    "scope": "common",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "positive statement",
        "definition": "A claim about what is, was or will be that can in principle be tested using evidence."
      },
      {
        "term": "normative statement",
        "definition": "A claim about what ought to happen, relying on a value judgment."
      },
      {
        "term": "ceteris paribus",
        "definition": "Holding other relevant influences constant when examining one relationship."
      }
    ],
    "sections": [
      {
        "id": "methods",
        "heading": "Claims and evidence",
        "body": [
          "A positive claim can in principle be tested against evidence; a normative claim expresses a value judgment about what ought to happen. Economists build models, state assumptions such as ceteris paribus (other relevant factors held constant), derive hypotheses and compare predictions with evidence. A prediction contradicted by reliable evidence can lead to revision.",
          "A hypothesis is a specific prediction from a model, such as “a lower bus fare raises passenger journeys, other things equal.” A model deliberately selects relationships; a theory offers a broader explanation supported by reasoning and evidence. Test a prediction using data and consider alternative causes before treating correlation as causation. Evidence against a prediction can challenge either the mechanism or an assumption.",
          "“Bus fares fell by 10%” is positive even if it turns out to be false: evidence can test it. “Bus travel ought to be affordable” is normative because it uses a value judgment. Equality means an equal distribution; equity concerns what is fair. Equal fares may be judged inequitable when incomes and mobility needs differ. A policy argument often combines testable predictions with a stated fairness criterion."
        ],
        "scope": "common",
        "limitation": "Observational evidence alone may not establish causation."
      },
      {
        "id": "ideas",
        "heading": "Changing approaches",
        "body": [
          "Smith argued that decentralized markets can coordinate activity. Later thinkers studied utility and marginal choices; Say associated production with purchasing power, while Marx criticised capitalism and its distribution of power. Keynes emphasized insufficient aggregate demand, while monetarist and new classical thinkers challenged persistent intervention. Behavioural economics draws on psychology; a circular economy seeks to reduce waste through reuse and redesign.",
          "Smith’s eighteenth-century case for decentralized exchange explains how specialization and self-interest can coordinate activity through markets; laissez-faire favors limited interference. It does not imply every market outcome is desirable. Nineteenth-century marginal analysis asks about the extra benefit and cost of the next unit, rather than totals alone. Utility is satisfaction; diminishing marginal utility can reduce willingness to pay for additional units.",
          "Say’s law links production to the purchasing power it creates; a key dispute is whether economy-wide demand can remain insufficient. Marx emphasized ownership, class conflict and the distribution of the output workers help produce. Keynes argued that weak aggregate demand could sustain unemployment and justify stabilization policy. Monetarists emphasized money and limits to discretionary policy; new classical approaches stressed expectations and market adjustment. These are introductory comparisons rather than full theories.",
          "Behavioural economics uses psychology to study systematic departures from simple rational-choice models. Environmental economics connects production to ecosystems and physical limits. A circular economy designs products for repair, reuse and material recovery; it may reduce extraction and waste, but recycling still consumes energy and rarely recovers everything."
        ],
        "scope": "common",
        "limitation": "These brief descriptions leave substantial disagreements within each tradition."
      }
    ],
    "model": "none",
    "modelPrompt": "Use the worked situation to identify the mechanism, then explain one condition that could change the conclusion.",
    "modelAssumption": "The example isolates one mechanism; other relevant conditions are held fixed unless stated.",
    "modelLimitation": "These illustrative examples isolate a mechanism and cannot establish a universal prediction or a causal empirical finding.",
    "worked": {
      "prompt": "Bus journeys rise from 10,000 to 12,000 after a fare cut. In a comparable city without a cut they rise from 10,000 to 11,000.",
      "steps": [
        "Journeys rise by 2,000 in the first city and 1,000 in the comparison city.",
        "A simple comparison attributes an extra 1,000 journeys to the fare cut, rather than all 2,000.",
        "Check whether routes, population, fuel prices and initial trends are comparable before drawing a causal conclusion."
      ],
      "conclusion": "The comparison provides evidence relevant to a positive hypothesis; whether the subsidy is fair also requires a value judgment."
    },
    "quiz": {
      "question": "Which statement is normative?",
      "options": [
        "Average bus fares fell by 10% last year.",
        "Lower fares increased journeys in this city.",
        "The city ought to prioritize bus users over car drivers.",
        "Bus spending was $2 million this year."
      ],
      "answer": 2,
      "feedback": [
        "This is a testable statement about an observed price change.",
        "This is a positive causal claim; difficulty testing it does not make it normative.",
        "Correct: “ought” ranks policy priorities using a value judgment.",
        "This is a measurable budget claim, even if the number were inaccurate."
      ],
      "scope": "common"
    },
    "challenge": {
      "prompt": "Explain why rising ice-cream sales and rising heat-related illness do not prove that ice cream causes illness.",
      "hint": "Look for a factor that can affect both variables.",
      "modelAnswer": "Hotter weather can increase both ice-cream purchases and heat-related illness. Their correlation may therefore reflect a common cause, rather than purchases causing illness. A causal study must compare conditions while addressing temperature and other relevant differences.",
      "rubric": [
        "Identify correlation as joint variation.",
        "Identify temperature as a plausible common cause.",
        "Link temperature separately to both outcomes.",
        "Explain the need to address confounding before causal inference."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "common"
    },
    "coverage": [
      {
        "id": "1.2.positive",
        "point": "Positive economics: logic, hypotheses, models, theories, ceteris paribus, evidence and refutation",
        "status": "taught",
        "evidence": "section:methods"
      },
      {
        "id": "1.2.normative",
        "point": "Normative economics, value judgments, equity and equality",
        "status": "taught",
        "evidence": "section:methods"
      },
      {
        "id": "1.2.smith",
        "point": "18th-century Smith and laissez-faire",
        "status": "summary",
        "evidence": "section:ideas"
      },
      {
        "id": "1.2.nineteenth",
        "point": "19th-century utility, margin, Say's law and Marxist critique",
        "status": "summary",
        "evidence": "section:ideas"
      },
      {
        "id": "1.2.twentieth",
        "point": "Keynesian policy and monetarist/new classical counter-revolution",
        "status": "summary",
        "evidence": "section:ideas"
      },
      {
        "id": "1.2.twentyfirst",
        "point": "Behavioural economics, interdisciplinary links and circular economy",
        "status": "summary",
        "evidence": "section:ideas"
      }
    ],
    "diagrams": []
  },
  {
    "id": "2.1",
    "unit": 2,
    "title": "Demand",
    "summary": "Why might a change in price alter purchases?",
    "question": "Why might a change in price alter purchases?",
    "scope": "common",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "demand",
        "definition": "The quantities consumers are willing and able to buy at different prices in a stated period."
      },
      {
        "term": "quantity demanded",
        "definition": "The quantity buyers choose at one particular own price."
      },
      {
        "term": "substitute",
        "definition": "An alternative good that can satisfy a similar want."
      }
    ],
    "sections": [
      {
        "id": "demand",
        "heading": "Demand and its curve",
        "body": [
          "Demand is the willingness and ability to buy at different prices in a period. Other things equal, a lower price generally increases quantity demanded: this is movement along a downward-sloping curve. Market demand sums individuals’ quantities at each price.",
          "A wish without purchasing power is not effective demand. Specify a period and unit: at $4 per bun per day, buyer A demands 3 and buyer B 2, so market quantity demanded is 5. At $2 they demand 5 and 4, giving 9. Add quantities at a common price, rather than adding the prices.",
          "Draw price per bun vertically and buns per day horizontally. Plot (Q=5,P=4) and (Q=9,P=2) on one demand curve D. A price fall moves down and right along D: quantity demanded rises, while demand itself has not shifted."
        ],
        "scope": "common",
        "limitation": "The law describes a relationship holding other determinants fixed."
      },
      {
        "id": "shifts",
        "heading": "Shifts in demand",
        "body": [
          "Income, tastes, expectations, prices of substitutes and complements, and the number of consumers can change demand. A rise in demand shifts the entire curve right; a change in the good’s own price moves along it.",
          "If tea and coffee are substitutes, dearer tea can raise coffee demand at every coffee price. If printers and ink are complements, dearer printers can lower ink demand. Higher income raises demand for a normal good but reduces demand for an inferior good, defined by this response rather than by quality.",
          "A popular review, more buyers or expectations of a future price rise can increase present demand; opposite changes can reduce it. To explain a shift, name the changed non-price determinant and state that at the same own price buyers now want a different quantity. Keep the time period and other determinants fixed."
        ],
        "scope": "common",
        "limitation": "The effect of income depends on whether the good is normal or inferior."
      },
      {
        "id": "hl",
        "heading": "Why demand slopes down",
        "body": [
          "As a price falls, a consumer may substitute toward the good and experience a change in real purchasing power. Diminishing marginal utility can also help explain willingness to pay for extra units.",
          "The substitution effect of a lower bun price is that buns become cheaper relative to alternatives. The income effect is that the same money buys more: for a normal good this adds to bun purchases; for an inferior good it works against them. Diminishing marginal utility means each extra bun adds less satisfaction, so a lower price may be needed to induce another purchase. These are model explanations, not claims that every person always behaves identically."
        ],
        "scope": "hl",
        "limitation": "Income effects depend on the type of good."
      }
    ],
    "model": "market",
    "modelPrompt": "Predict the direction of equilibrium price and quantity after changing one non-price determinant. Identify which curve shifts and which curve shows a movement along it.",
    "modelAssumption": "A competitive market with stable demand and supply, flexible prices and other determinants held fixed.",
    "modelLimitation": "Real markets may have delayed adjustment, price rigidity, information problems or market power.",
    "worked": {
      "prompt": "At $4 per bun, A demands 3 and B demands 2 daily; at $2, A demands 5 and B demands 4.",
      "steps": [
        "At $4 market quantity demanded is 3+2=5 buns per day.",
        "At $2 it is 5+4=9 buns per day.",
        "With other determinants fixed, the price cut moves from (5,4) to (9,2) along market demand."
      ],
      "conclusion": "Add quantities at each price; the own-price change changes quantity demanded, rather than demand."
    },
    "quiz": {
      "question": "Coffee’s own price stays fixed while the price of substitute tea rises. What is the predicted change?",
      "options": [
        "Coffee demand shifts right.",
        "Coffee quantity demanded moves down the original curve.",
        "Coffee supply shifts right.",
        "Coffee demand shifts left because tea costs more."
      ],
      "answer": 0,
      "feedback": [
        "Correct: buyers switch toward coffee at the same coffee price.",
        "Movement along coffee demand requires a change in coffee’s own price.",
        "The stated change affects buyers, not coffee producers’ costs or capacity.",
        "That would fit a complement more naturally; substitutes become relatively attractive when the alternative becomes dearer."
      ],
      "scope": "common"
    },
    "challenge": {
      "prompt": "Explain how an increase in the price of tea may affect demand for coffee, assuming the goods are substitutes.",
      "hint": "Keep coffee’s own price fixed when explaining the demand shift.",
      "modelAnswer": "Tea becoming dearer makes coffee relatively attractive as an alternative. Some buyers switch toward coffee, so at each unchanged coffee price they are willing and able to buy more. Coffee demand shifts right. This differs from movement along coffee demand, which would require a change in coffee’s own price.",
      "rubric": [
        "Identify tea and coffee as substitutes in consumption.",
        "Explain why dearer tea makes coffee relatively attractive.",
        "Link switching to higher coffee quantity demanded at each coffee price.",
        "Identify the rightward shift and distinguish an own-price movement."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "common"
    },
    "coverage": [
      {
        "id": "2.1.law",
        "point": "Law of demand",
        "status": "taught",
        "evidence": "section:demand"
      },
      {
        "id": "2.1.assumptions_hl",
        "point": "Income and substitution effects and diminishing marginal utility",
        "status": "taught",
        "evidence": "section:hl"
      },
      {
        "id": "2.1.curve_diagram",
        "point": "Downward-sloping demand diagram",
        "status": "taught",
        "evidence": "diagram:2.1.curve_diagram"
      },
      {
        "id": "2.1.individual_market",
        "point": "Individual and market demand",
        "status": "taught",
        "evidence": "section:demand"
      },
      {
        "id": "2.1.determinants",
        "point": "Income, tastes, expectations, related goods and number of consumers",
        "status": "taught",
        "evidence": "section:shifts"
      },
      {
        "id": "2.1.shifts_diagram",
        "point": "Movement along versus shift of demand diagram",
        "status": "taught",
        "evidence": "diagram:2.1.shifts_diagram"
      }
    ],
    "diagrams": [
      {
        "id": "2.1.curve_diagram",
        "scope": "common",
        "title": "Downward-sloping demand diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "demand",
            "title": "Read a demand schedule",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Flexible competitive prices are assumed. The drawing alone does not establish real-world adjustment speed or distribution of gains.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "initial": "Initial point",
              "final": "Final point",
              "movement": "Own-price movement along the curve",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Own price falls from 8 to 4. How does quantity demanded change on this curve?",
              "options": [
                "Quantity rises from 2 to 6.",
                "The entire curve shifts to the right."
              ],
              "answer": 0,
              "feedback": [
                "On D, P = 10 − Q; the two points are (2,8) and (6,4).",
                "A change in the good’s own price is a movement along the unchanged curve."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (2, 8). Initial point — dashed quantity guide: dashed path (2, 0) → (2, 8). Initial point — dashed vertical-axis guide: dashed path (0, 8) → (2, 8).",
                "instruction": "For “Read a demand schedule”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The point and guides read Q = 2 at P = 8 on the existing demand schedule; they establish the initial own-price observation."
                  },
                  {
                    "key": "misconception0",
                    "label": "Shift the whole curve to represent the change in own price.",
                    "feedback": "Own-price changes move the observation along the unchanged schedule when other determinants are constant."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (6, 4). Final point — dashed quantity guide: dashed path (6, 0) → (6, 4). Final point — dashed vertical-axis guide: dashed path (0, 4) → (6, 4).",
                "instruction": "For “Read a demand schedule”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read the horizontal coordinate as price and vertical coordinate as quantity.",
                    "feedback": "These market axes put quantity per period horizontally and unit price vertically. Swapping them reverses the schedule reading and the meaning of the movement."
                  },
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The second point reads Q = 6 at P = 4 on the same demand curve: a lower own price accompanies greater quantity demanded."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Own-price movement along the curve: directed arrow (2, 8) → (6, 4).",
                "instruction": "For “Read a demand schedule”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Own-price movement along the curve.",
                    "feedback": "The down-right arrow joins the two points along unchanged demand, separating an own-price movement from a demand shift."
                  },
                  {
                    "key": "misconception2",
                    "label": "Shift the whole curve to represent the change in own price.",
                    "feedback": "Own-price changes move the observation along the unchanged schedule when other determinants are constant."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The downward arrow connects (2,8) to (6,4). Dashed guides read quantity horizontally and price vertically.",
            "explanation": {
              "question": "Why call this a change in quantity demanded?",
              "options": [
                "A non-price determinant must have changed.",
                "Only the good’s own price changes; other determinants are held constant."
              ],
              "answer": 1,
              "feedback": [
                "A non-price determinant would call for a different curve, which this scenario does not add.",
                "The two observations lie on one unchanged schedule."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.1.shifts_diagram",
        "scope": "common",
        "title": "Movement along versus shift of demand diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "movement",
            "title": "Changing only own price",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Flexible competitive prices are assumed. The drawing alone does not establish real-world adjustment speed or distribution of gains.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "initial": "Initial point",
              "final": "Final point",
              "movement": "Own-price movement along the curve",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Only own price falls from 6 to 4. Which drawing is appropriate?",
              "options": [
                "Shift the whole curve because quantity changed.",
                "A movement along the existing curve takes quantity from 4 to 6."
              ],
              "answer": 1,
              "feedback": [
                "Quantity changing does not by itself identify a shift.",
                "The unchanged schedule already describes the response to own price."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (4, 6). Initial point — dashed quantity guide: dashed path (4, 0) → (4, 6). Initial point — dashed vertical-axis guide: dashed path (0, 6) → (4, 6).",
                "instruction": "For “Changing only own price”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Shift the whole curve to represent the change in own price.",
                    "feedback": "Own-price changes move the observation along the unchanged schedule when other determinants are constant."
                  },
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The guides locate the initial demand observation at Q = 4, P = 6; the demand schedule itself is unchanged."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (6, 4). Final point — dashed quantity guide: dashed path (6, 0) → (6, 4). Final point — dashed vertical-axis guide: dashed path (0, 4) → (6, 4).",
                "instruction": "For “Changing only own price”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The new guides read Q = 6, P = 4 on the existing curve, so quantity demanded rises as own price falls."
                  },
                  {
                    "key": "misconception1",
                    "label": "Read the horizontal coordinate as price and vertical coordinate as quantity.",
                    "feedback": "These market axes put quantity per period horizontally and unit price vertically. Swapping them reverses the schedule reading and the meaning of the movement."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Own-price movement along the curve: directed arrow (4, 6) → (6, 4).",
                "instruction": "For “Changing only own price”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Shift the whole curve to represent the change in own price.",
                    "feedback": "Own-price changes move the observation along the unchanged schedule when other determinants are constant."
                  },
                  {
                    "key": "compare",
                    "label": "Add Own-price movement along the curve.",
                    "feedback": "The arrow from (4,6) to (6,4) follows the same demand curve, showing a movement caused by own price."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "On D0, (4,6)→(6,4); the curve stays fixed.",
            "explanation": {
              "question": "What identifies the cause of this change?",
              "options": [
                "The good’s own price changes while other determinants stay constant.",
                "A change in preferences or technology is required for this movement."
              ],
              "answer": 0,
              "feedback": [
                "Both observations remain on the original curve.",
                "A non-price change would alter the schedule rather than explain movement along it."
              ]
            },
            "extension": null
          },
          {
            "key": "increase",
            "title": "Higher income for a normal good",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "The income effect applies to a normal good; inferior goods may respond differently.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "shiftedDemand": "Increased demand (D1)",
              "initial": "Initial point",
              "final": "Final point",
              "increase": "Increase at the same price",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Income rises for this normal good. At price 6, what happens to demand?",
              "options": [
                "A rightward shift increases quantity from 4 to 6 at the same price.",
                "Move along the unchanged curve because price changed."
              ],
              "answer": 0,
              "feedback": [
                "The stated non-price determinant changes willingness or ability at every price.",
                "Own price is fixed in this comparison; the cause is income or cost."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (4, 6). Initial point — dashed quantity guide: dashed path (4, 0) → (4, 6). Initial point — dashed vertical-axis guide: dashed path (0, 6) → (4, 6).",
                "instruction": "For “Higher income for a normal good”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The initial point (4,6) records quantity demanded at the reference price before the non-price change."
                  },
                  {
                    "key": "misconception0",
                    "label": "Keep the original schedule and treat the non-price change as an own-price movement.",
                    "feedback": "The stated income or cost change alters the quantity chosen at a fixed price, so the new schedule must be distinguished from movement along the old one."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Increased demand (D1) connects (0, 12) → (10, 2). Final point at (6, 6). Final point — dashed quantity guide: dashed path (6, 0) → (6, 6). Final point — dashed vertical-axis guide: dashed path (0, 6) → (6, 6).",
                "instruction": "For “Higher income for a normal good”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read the horizontal coordinate as price and vertical coordinate as quantity.",
                    "feedback": "These market axes put quantity per period horizontally and unit price vertically. Swapping them reverses the schedule reading and the meaning of the movement."
                  },
                  {
                    "key": "read",
                    "label": "Add Increased demand (D1); Final point, with dashed axis-reading guides.",
                    "feedback": "D1 lies to the right of D0, and its point (6,6) shows more quantity demanded at the same price of 6."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Increase at the same price: directed arrow (4, 6) → (6, 6).",
                "instruction": "For “Higher income for a normal good”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Increase at the same price.",
                    "feedback": "The horizontal arrow from Q = 4 to Q = 6 holds price at 6, isolating the demand increase from an own-price movement."
                  },
                  {
                    "key": "misconception2",
                    "label": "Keep the original schedule and treat the non-price change as an own-price movement.",
                    "feedback": "The stated income or cost change alters the quantity chosen at a fixed price, so the new schedule must be distinguished from movement along the old one."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "D0: P = 10 − Q becomes D1: P = 12 − Q. At P = 6, Q rises from 4 to 6.",
            "explanation": {
              "question": "What identifies the cause of this change?",
              "options": [
                "A change in own price alone causes this shift.",
                "Higher income raises demand for a normal good."
              ],
              "answer": 1,
              "feedback": [
                "Own price changes quantity along a curve; it does not move the schedule.",
                "The same-price comparison isolates the non-price change."
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  {
    "id": "2.2",
    "unit": 2,
    "title": "Supply",
    "summary": "Why do producers offer different quantities at different prices?",
    "question": "Why do producers offer different quantities at different prices?",
    "scope": "common",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "supply",
        "definition": "The quantities producers are willing and able to offer at different prices in a stated period."
      },
      {
        "term": "quantity supplied",
        "definition": "The quantity offered at one particular own price."
      },
      {
        "term": "marginal cost",
        "definition": "The additional total cost of producing another unit of output."
      }
    ],
    "sections": [
      {
        "id": "supply",
        "heading": "Supply and its curve",
        "body": [
          "Supply is the willingness and ability to sell at different prices in a period. Other things equal, a higher price generally increases quantity supplied, shown as a movement along an upward-sloping curve. Market supply adds firms’ quantities at each price.",
          "Supply is a whole price–quantity relationship; quantity supplied is one point on it. At $3, bakers A and B offer 4 and 6 loaves daily, so market supply is 10. At $4 they offer 6 and 9, so market supply is 15. Horizontal summation adds quantities at the same price.",
          "With price per loaf vertically and loaves per day horizontally, a higher own price normally moves up and right along the same supply curve: it makes additional production worthwhile. It does not shift supply. This assumes producers can change output within the stated time period."
        ],
        "scope": "common",
        "limitation": "Some supply curves need not slope upward over every range."
      },
      {
        "id": "shifts",
        "heading": "Shifts in supply",
        "body": [
          "Input costs, technology, taxes, subsidies, expectations, prices of related products and the number of firms can shift supply. A productivity improvement can shift supply right; a change in the good’s own price moves along the existing curve.",
          "Cheaper flour or better ovens lowers the cost of producing each quantity and can shift bread supply right. A per-unit tax raises cost and shifts it left; a subsidy can do the reverse. More firms increase market supply. A producer expecting a higher future price may withhold storable stocks today.",
          "Related goods matter on the production side: if land can grow wheat or barley, a higher barley price can divert land from wheat and reduce wheat supply. Joint products can move together instead. Always explain the resource connection rather than borrowing the consumer substitute/complement rule."
        ],
        "scope": "common",
        "limitation": "The size and timing of a shift depend on producers’ circumstances."
      },
      {
        "id": "hl",
        "heading": "Costs at the margin",
        "body": [
          "With a fixed input, diminishing marginal returns can eventually raise marginal cost as more variable input is added. Producers may require a higher price to supply additional output.",
          "Suppose a fixed oven employs 1, 2 and 3 workers and produces 10, 24 and 32 loaves. The second worker adds 14; the third adds only 8. Diminishing marginal returns begins when the extra output from another variable input falls, holding the fixed input and technology constant. If each extra worker costs $40, incremental labour cost per extra loaf rises from $40/14 to $40/8. This helps explain rising marginal cost and an upward-sloping supply relation."
        ],
        "scope": "hl",
        "limitation": "This is a short-run explanation, not a universal supply curve."
      }
    ],
    "model": "market",
    "modelPrompt": "Predict the direction of equilibrium price and quantity after changing one non-price determinant. Identify which curve shifts and which curve shows a movement along it.",
    "modelAssumption": "A competitive market with stable demand and supply, flexible prices and other determinants held fixed.",
    "modelLimitation": "Real markets may have delayed adjustment, price rigidity, information problems or market power.",
    "worked": {
      "prompt": "At $3, bakers A and B offer 4 and 6 loaves daily; at $4 they offer 6 and 9.",
      "steps": [
        "Market quantity supplied at $3 is 4+6=10 loaves daily.",
        "At $4 it is 6+9=15 loaves daily.",
        "Holding costs and technology fixed, the higher own price causes an upward movement along supply."
      ],
      "conclusion": "Market supply adds quantities at a common price; higher quantity supplied does not itself mean a rightward shift."
    },
    "quiz": {
      "question": "Flour becomes cheaper while bread’s own price stays fixed. What is the likely supply effect?",
      "options": [
        "A movement down the existing bread supply curve.",
        "A rightward shift in bread supply.",
        "A rightward shift in bread demand.",
        "A leftward supply shift because costs fall."
      ],
      "answer": 1,
      "feedback": [
        "A movement along supply is caused by bread’s own price changing.",
        "Correct: lower input costs make more bread profitable at each bread price.",
        "The change directly affects producers’ costs, not consumers’ willingness to buy.",
        "Lower costs normally expand supply; a cost rise would shift it left."
      ],
      "scope": "common"
    },
    "challenge": {
      "prompt": "Explain how cheaper flour can increase bread supply, distinguishing this from an increase in quantity supplied caused by a higher bread price.",
      "hint": "Separate the input-price change from the good’s own-price change.",
      "modelAnswer": "Cheaper flour lowers bread production costs. At each bread price, more output can be profitably offered, so supply shifts right. A higher bread price with flour costs fixed instead causes a movement up the existing supply curve and an increase in quantity supplied.",
      "rubric": [
        "Identify flour as a production input.",
        "Link lower input cost to increased willingness to supply at each price.",
        "Identify a rightward shift of supply.",
        "Contrast this with movement along supply after an own-price rise."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "common"
    },
    "coverage": [
      {
        "id": "2.2.law",
        "point": "Law of supply",
        "status": "taught",
        "evidence": "section:supply"
      },
      {
        "id": "2.2.assumptions_hl",
        "point": "Diminishing marginal returns and increasing marginal costs",
        "status": "taught",
        "evidence": "section:hl"
      },
      {
        "id": "2.2.curve_diagram",
        "point": "Upward-sloping supply diagram",
        "status": "taught",
        "evidence": "diagram:2.2.curve_diagram"
      },
      {
        "id": "2.2.individual_market",
        "point": "Individual and market supply",
        "status": "taught",
        "evidence": "section:supply"
      },
      {
        "id": "2.2.determinants",
        "point": "Input costs, related goods, taxes, subsidies, expectations, technology and firms",
        "status": "taught",
        "evidence": "section:shifts"
      },
      {
        "id": "2.2.shifts_diagram",
        "point": "Movement along versus shift of supply diagram",
        "status": "taught",
        "evidence": "diagram:2.2.shifts_diagram"
      }
    ],
    "diagrams": [
      {
        "id": "2.2.curve_diagram",
        "scope": "common",
        "title": "Upward-sloping supply diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "supply",
            "title": "Read a supply schedule",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Flexible competitive prices are assumed. The drawing alone does not establish real-world adjustment speed or distribution of gains.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "supply": "Supply (S)",
              "initial": "Initial point",
              "final": "Final point",
              "movement": "Own-price movement along the curve",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Own price rises from 2 to 6. How does quantity supplied change on this curve?",
              "options": [
                "The entire curve shifts to the right.",
                "Quantity rises from 2 to 6."
              ],
              "answer": 1,
              "feedback": [
                "A change in the good’s own price is a movement along the unchanged curve.",
                "On S, P = Q; the two points are (2,2) and (6,6)."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (2, 2). Initial point — dashed quantity guide: dashed path (2, 0) → (2, 2). Initial point — dashed vertical-axis guide: dashed path (0, 2) → (2, 2).",
                "instruction": "For “Read a supply schedule”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Shift the whole curve to represent the change in own price.",
                    "feedback": "Own-price changes move the observation along the unchanged schedule when other determinants are constant."
                  },
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The initial supply point and guides read Q = 2, P = 2, establishing one price–quantity combination on the schedule."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (6, 6). Final point — dashed quantity guide: dashed path (6, 0) → (6, 6). Final point — dashed vertical-axis guide: dashed path (0, 6) → (6, 6).",
                "instruction": "For “Read a supply schedule”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The final point reads Q = 6, P = 6 on unchanged supply: a higher own price makes a larger quantity worth supplying."
                  },
                  {
                    "key": "misconception1",
                    "label": "Read the horizontal coordinate as price and vertical coordinate as quantity.",
                    "feedback": "These market axes put quantity per period horizontally and unit price vertically. Swapping them reverses the schedule reading and the meaning of the movement."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Own-price movement along the curve: directed arrow (2, 2) → (6, 6).",
                "instruction": "For “Read a supply schedule”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Shift the whole curve to represent the change in own price.",
                    "feedback": "Own-price changes move the observation along the unchanged schedule when other determinants are constant."
                  },
                  {
                    "key": "compare",
                    "label": "Add Own-price movement along the curve.",
                    "feedback": "The up-right arrow follows the supply curve from (2,2) to (6,6), showing an own-price movement rather than increased supply."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The upward arrow connects (2,2) to (6,6). Dashed guides read quantity horizontally and price vertically.",
            "explanation": {
              "question": "Why call this a change in quantity supplied?",
              "options": [
                "Only the good’s own price changes; other determinants are held constant.",
                "A non-price determinant must have changed."
              ],
              "answer": 0,
              "feedback": [
                "The two observations lie on one unchanged schedule.",
                "A non-price determinant would call for a different curve, which this scenario does not add."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.2.shifts_diagram",
        "scope": "common",
        "title": "Movement along versus shift of supply diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "movement",
            "title": "Changing only own price",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Flexible competitive prices are assumed. The drawing alone does not establish real-world adjustment speed or distribution of gains.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "supply": "Supply (S)",
              "initial": "Initial point",
              "final": "Final point",
              "movement": "Own-price movement along the curve",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Only own price rises from 4 to 6. Which drawing is appropriate?",
              "options": [
                "A movement along the existing curve takes quantity from 4 to 6.",
                "Shift the whole curve because quantity changed."
              ],
              "answer": 0,
              "feedback": [
                "The unchanged schedule already describes the response to own price.",
                "Quantity changing does not by itself identify a shift."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (4, 4). Initial point — dashed quantity guide: dashed path (4, 0) → (4, 4). Initial point — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “Changing only own price”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The initial guides locate Q = 4 at P = 4 on the existing supply curve."
                  },
                  {
                    "key": "misconception0",
                    "label": "Shift the whole curve to represent the change in own price.",
                    "feedback": "Own-price changes move the observation along the unchanged schedule when other determinants are constant."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (6, 6). Final point — dashed quantity guide: dashed path (6, 0) → (6, 6). Final point — dashed vertical-axis guide: dashed path (0, 6) → (6, 6).",
                "instruction": "For “Changing only own price”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read the horizontal coordinate as price and vertical coordinate as quantity.",
                    "feedback": "These market axes put quantity per period horizontally and unit price vertically. Swapping them reverses the schedule reading and the meaning of the movement."
                  },
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The final guides locate Q = 6 at P = 6 on the same supply curve, showing increased quantity supplied as own price rises."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Own-price movement along the curve: directed arrow (4, 4) → (6, 6).",
                "instruction": "For “Changing only own price”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Own-price movement along the curve.",
                    "feedback": "The arrow from (4,4) to (6,6) traces an own-price movement along unchanged supply."
                  },
                  {
                    "key": "misconception2",
                    "label": "Shift the whole curve to represent the change in own price.",
                    "feedback": "Own-price changes move the observation along the unchanged schedule when other determinants are constant."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "On S0, (4,4)→(6,6); the curve stays fixed.",
            "explanation": {
              "question": "What identifies the cause of this change?",
              "options": [
                "A change in preferences or technology is required for this movement.",
                "The good’s own price changes while other determinants stay constant."
              ],
              "answer": 1,
              "feedback": [
                "A non-price change would alter the schedule rather than explain movement along it.",
                "Both observations remain on the original curve."
              ]
            },
            "extension": null
          },
          {
            "key": "increase",
            "title": "Lower production cost",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Flexible competitive prices are assumed. The drawing alone does not establish real-world adjustment speed or distribution of gains.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "supply": "Supply (S)",
              "shiftedSupply": "Increased supply (S1)",
              "initial": "Initial point",
              "final": "Final point",
              "increase": "Increase at the same price",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Production costs fall. At price 4, what happens to supply?",
              "options": [
                "Move along the unchanged curve because price changed.",
                "A rightward shift increases quantity from 4 to 6 at the same price."
              ],
              "answer": 1,
              "feedback": [
                "Own price is fixed in this comparison; the cause is income or cost.",
                "Lower production costs increase sellers’ willingness or ability to supply at every price."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (4, 4). Initial point — dashed quantity guide: dashed path (4, 0) → (4, 4). Initial point — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “Lower production cost”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Keep the original schedule and treat the non-price change as an own-price movement.",
                    "feedback": "The stated income or cost change alters the quantity chosen at a fixed price, so the new schedule must be distinguished from movement along the old one."
                  },
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The initial supply point (4,4) records quantity supplied at the reference price before the cost change."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Increased supply (S1) connects (2, 0) → (10, 8). Final point at (6, 4). Final point — dashed quantity guide: dashed path (6, 0) → (6, 4). Final point — dashed vertical-axis guide: dashed path (0, 4) → (6, 4).",
                "instruction": "For “Lower production cost”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Increased supply (S1); Final point, with dashed axis-reading guides.",
                    "feedback": "S1 lies to the right of S0, with the final point (6,4) showing greater supply at the unchanged price of 4."
                  },
                  {
                    "key": "misconception1",
                    "label": "Read the horizontal coordinate as price and vertical coordinate as quantity.",
                    "feedback": "These market axes put quantity per period horizontally and unit price vertically. Swapping them reverses the schedule reading and the meaning of the movement."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Increase at the same price: directed arrow (4, 4) → (6, 4).",
                "instruction": "For “Lower production cost”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Keep the original schedule and treat the non-price change as an own-price movement.",
                    "feedback": "The stated income or cost change alters the quantity chosen at a fixed price, so the new schedule must be distinguished from movement along the old one."
                  },
                  {
                    "key": "compare",
                    "label": "Add Increase at the same price.",
                    "feedback": "The horizontal arrow moves from Q = 4 to Q = 6 at P = 4, isolating the supply increase from movement along S0."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "S0: P = Q becomes S1: P = Q − 2. At P = 4, Q rises from 4 to 6.",
            "explanation": {
              "question": "What identifies the cause of this change?",
              "options": [
                "Lower costs increase supply at a given selling price.",
                "A change in own price alone causes this shift."
              ],
              "answer": 0,
              "feedback": [
                "The same-price comparison isolates the non-price change.",
                "Own price changes quantity along a curve; it does not move the schedule."
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  {
    "id": "2.3",
    "unit": 2,
    "title": "Competitive market equilibrium",
    "summary": "How can prices coordinate buyers and sellers?",
    "question": "How can prices coordinate buyers and sellers?",
    "scope": "common",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "equilibrium",
        "definition": "A price and quantity at which planned quantity demanded equals planned quantity supplied."
      },
      {
        "term": "consumer surplus",
        "definition": "Willingness to pay minus the price paid, summed over units purchased."
      },
      {
        "term": "allocative efficiency",
        "definition": "Output at which marginal social benefit equals marginal social cost."
      }
    ],
    "sections": [
      {
        "id": "equilibrium",
        "heading": "Equilibrium and adjustment",
        "body": [
          "Equilibrium occurs where quantity demanded equals quantity supplied. Above equilibrium, a surplus puts downward pressure on price; below it, a shortage puts upward pressure on price. Prices signal scarcity, provide incentives and ration goods among buyers.",
          "Suppose Qd=100−10P and Qs=20+10P, in loaves daily. At $3 buyers want 70 but sellers offer 50: a shortage of 20 encourages bidding or price rises. At $5 sellers offer 70 but buyers want 50: a surplus of 20 encourages price cuts. At $4 both plan 60, so there is no such pressure.",
          "Price signals relative scarcity and potential profit; it gives an incentive to expand output or economize on use; it rations available goods to willing and able buyers. It allocates resources toward activities receiving spending. This rationing reflects purchasing power, so it does not establish that the allocation is fair. A demand increase with supply fixed normally raises both equilibrium price and quantity; a supply increase normally lowers price and raises quantity."
        ],
        "scope": "common",
        "limitation": "Adjustment may be slow or prevented by market power or regulation."
      },
      {
        "id": "surplus",
        "heading": "Surplus and efficiency",
        "body": [
          "Consumer surplus is the difference between willingness to pay and price, summed over units bought. Producer surplus is price less minimum acceptable supply price, summed over units sold. In a competitive market without externalities, the intersection of marginal benefit and marginal cost maximizes their sum.",
          "If you would pay $9 for a book and pay $6, your consumer surplus is $3. If a seller would accept $4 and receives $6, producer surplus is $2 on that unit. Add these differences across units to obtain total surplus; producer surplus is not the same as profit because fixed costs are not deducted.",
          "Allocative efficiency requires marginal social benefit to equal marginal social cost: the last unit’s benefit matches the resources it uses. Below that output another unit adds more benefit than cost; above it a unit costs more than its benefit. Competitive equilibrium delivers this result only under assumptions including no externalities and relevant information. It does not imply equal incomes."
        ],
        "scope": "common",
        "limitation": "Private surplus need not equal social welfare when external effects exist."
      },
      {
        "id": "hl",
        "heading": "Calculating surplus",
        "body": [
          "For a triangular surplus area, multiply its base by its height and divide by two. For example, a base of 4 units and height of $6 gives $12.",
          "For linear demand with a $10 price intercept, linear supply with a $2 price intercept, equilibrium price $6 and output 40, consumer surplus is ½×40×($10−$6)=$80; producer surplus is ½×40×($6−$2)=$80. Axes must specify the time period: with units per day, the dollar areas are per day."
        ],
        "scope": "hl",
        "limitation": "A triangle formula is valid only when the relevant boundaries are straight."
      }
    ],
    "model": "market",
    "modelPrompt": "Predict the direction of equilibrium price and quantity after changing one non-price determinant. Identify which curve shifts and which curve shows a movement along it.",
    "modelAssumption": "A competitive market with stable demand and supply, flexible prices and other determinants held fixed.",
    "modelLimitation": "Real markets may have delayed adjustment, price rigidity, information problems or market power.",
    "worked": {
      "prompt": "Daily demand is Qd=100−10P and supply is Qs=20+10P, with price in dollars.",
      "steps": [
        "Equate planned purchases and sales: 100−10P=20+10P.",
        "Rearrange: 80=20P, so P=$4.",
        "Substitute into either equation: Q=100−40=60 units daily. At $3 a shortage of 70−50=20 puts upward pressure on price."
      ],
      "conclusion": "Equilibrium is $4 and 60 units; adjustment depends on prices being able to change."
    },
    "quiz": {
      "question": "At $5, Qd=50 and Qs=70. With flexible prices, what adjustment is predicted?",
      "options": [
        "A shortage puts upward pressure on price.",
        "A surplus puts downward pressure on price.",
        "Supply must shift right because output is high.",
        "The market is in equilibrium because some trade occurs."
      ],
      "answer": 1,
      "feedback": [
        "Quantity supplied exceeds quantity demanded, so this is a surplus, not a shortage.",
        "Correct: unsold intended output encourages sellers to lower price.",
        "Price adjustment moves along existing curves; no non-price supply determinant has changed.",
        "Equilibrium requires planned quantities to be equal, not merely positive."
      ],
      "scope": "common"
    },
    "challenge": {
      "prompt": "Explain how a shortage can change the market price.",
      "hint": "Link competing buyers to seller incentives.",
      "modelAnswer": "A shortage means quantity demanded exceeds quantity supplied at the current price. Buyers competing for limited stock and sellers facing strong sales create upward pressure on a flexible price. The higher price reduces quantity demanded and raises quantity supplied along the existing curves, narrowing the shortage until plans match. A binding legal ceiling can prevent this price adjustment.",
      "rubric": [
        "Define a shortage as quantity demanded above quantity supplied.",
        "Explain why competition for stock creates upward price pressure.",
        "Explain the opposite quantity responses along demand and supply.",
        "Link adjustment toward equilibrium to the condition of flexible prices."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "common"
    },
    "coverage": [
      {
        "id": "2.3.equilibrium_diagram",
        "point": "Demand and supply market equilibrium diagram",
        "status": "taught",
        "evidence": "diagram:2.3.equilibrium_diagram"
      },
      {
        "id": "2.3.changes_diagram",
        "point": "Changes in equilibrium, shortages, surpluses and price mechanism diagram",
        "status": "taught",
        "evidence": "diagram:2.3.changes_diagram"
      },
      {
        "id": "2.3.price_mechanism",
        "point": "Signalling, incentives, resource allocation and rationing",
        "status": "taught",
        "evidence": "section:equilibrium"
      },
      {
        "id": "2.3.surplus_diagram",
        "point": "Consumer, producer and social surplus diagram",
        "status": "taught",
        "evidence": "diagram:2.3.surplus_diagram"
      },
      {
        "id": "2.3.efficiency",
        "point": "Allocative efficiency, maximum social surplus and MB equals MC",
        "status": "taught",
        "evidence": "section:surplus"
      },
      {
        "id": "2.3.surplus_calculation_hl",
        "point": "Calculate consumer and producer surplus from a diagram",
        "status": "summary",
        "evidence": "section:hl"
      }
    ],
    "diagrams": [
      {
        "id": "2.3.equilibrium_diagram",
        "scope": "common",
        "title": "Demand and supply market equilibrium diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "crossing",
            "title": "Where planned buying equals selling",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Flexible competitive prices are assumed. The drawing alone does not establish real-world adjustment speed or distribution of gains.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "supply": "Supply (S)",
              "equilibrium": "Equilibrium (E)",
              "adjustment": "Illustrative movement toward equilibrium",
              "equilibriumQ": "Equilibrium (E) — dashed quantity guide",
              "equilibriumP": "Equilibrium (E) — dashed vertical-axis guide",
              "crossing": "Supply guide through the crossing"
            },
            "prediction": {
              "question": "With D: P = 10 − Q and S: P = Q, which price clears the market?",
              "options": [
                "P = 5, where Qd = Qs = 5.",
                "P = 4, because a lower price always clears a market."
              ],
              "answer": 0,
              "feedback": [
                "The crossing equates both equations at (Q,P) = (5,5).",
                "At P = 4, demand is 6 and supply is 4: planned buying exceeds selling."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Equilibrium (E) at (5, 5). Equilibrium (E) — dashed quantity guide: dashed path (5, 0) → (5, 5). Equilibrium (E) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5).",
                "instruction": "For “Where planned buying equals selling”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Equilibrium (E), with dashed axis-reading guides.",
                    "feedback": "E and its guides mark Q = 5, P = 5 where demand and supply cross, so planned buying equals planned selling."
                  },
                  {
                    "key": "misconception0",
                    "label": "Call the quantity demanded at any chosen price the quantity actually sold.",
                    "feedback": "Planned demand alone does not establish transactions: compare supply and demand, or locate the new crossing after the specified shift."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Supply guide through the crossing: dashed path (4, 4) → (6, 6).",
                "instruction": "For “Where planned buying equals selling”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Call the quantity demanded at any chosen price the quantity actually sold.",
                    "feedback": "Planned demand alone does not establish transactions: compare supply and demand, or locate the new crossing after the specified shift."
                  },
                  {
                    "key": "read",
                    "label": "Add a dashed supply guide through equilibrium from (4,4) to (6,6).",
                    "feedback": "The dashed segment follows supply through E from (4,4) to (6,6), confirming that the crossing lies on the sellers' schedule as well as demand."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Illustrative movement toward equilibrium: directed arrow (4, 6) → (5, 5).",
                "instruction": "For “Where planned buying equals selling”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Illustrative movement toward equilibrium.",
                    "feedback": "The arrow runs down toward E from a high-price position, illustrating downward price adjustment toward the market-clearing crossing."
                  },
                  {
                    "key": "misconception2",
                    "label": "Call the quantity demanded at any chosen price the quantity actually sold.",
                    "feedback": "Planned demand alone does not establish transactions: compare supply and demand, or locate the new crossing after the specified shift."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "E = (5,5) sits at the D/S crossing. The dashed crossing guide follows supply near E; the illustrative adjustment arrow points toward E, rather than tracing a new curve.",
            "explanation": {
              "question": "Why is this crossing an equilibrium?",
              "options": [
                "All consumers and producers get everything they want without scarcity.",
                "There is no excess planned demand or supply at that price."
              ],
              "answer": 1,
              "feedback": [
                "Equilibrium allocates scarce output through price; willingness and ability to pay still matter.",
                "Equal planned quantities remove the shortage/surplus pressure in this simple competitive market."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.3.changes_diagram",
        "scope": "common",
        "title": "Changes in equilibrium, shortages, surpluses and price mechanism diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "shortage",
            "title": "Price below equilibrium",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Flexible competitive prices are assumed. The drawing alone does not establish real-world adjustment speed or distribution of gains.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "supply": "Supply (S)",
              "chosenPrice": "Chosen non-equilibrium price",
              "demandQuantity": "Quantity demanded (Qd)",
              "supplyQuantity": "Quantity supplied (Qs)",
              "priceAdjustment": "Price-adjustment direction",
              "demandQuantityQ": "Quantity demanded (Qd) — dashed quantity guide",
              "demandQuantityP": "Quantity demanded (Qd) — dashed vertical-axis guide",
              "supplyQuantityQ": "Quantity supplied (Qs) — dashed quantity guide",
              "supplyQuantityP": "Quantity supplied (Qs) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At P = 4, do buyers or sellers plan the larger quantity?",
              "options": [
                "Sellers: Qs exceeds Qd.",
                "Buyers: Qd = 6 exceeds Qs = 4."
              ],
              "answer": 1,
              "feedback": [
                "At this price the two schedules give the opposite ranking of quantities.",
                "Read each curve at the chosen horizontal price line."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Chosen non-equilibrium price connects (0, 4) → (10, 4).",
                "instruction": "For “Price below equilibrium”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Call the quantity demanded at any chosen price the quantity actually sold.",
                    "feedback": "Planned demand alone does not establish transactions: compare supply and demand, or locate the new crossing after the specified shift."
                  },
                  {
                    "key": "construct",
                    "label": "Add Chosen non-equilibrium price.",
                    "feedback": "The horizontal line fixes P = 4 below the demand–supply crossing, establishing the price at which buying and selling plans must be read."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Quantity demanded (Qd) at (6, 4). Quantity supplied (Qs) at (4, 4). Quantity demanded (Qd) — dashed quantity guide: dashed path (6, 0) → (6, 4). Quantity demanded (Qd) — dashed vertical-axis guide: dashed path (0, 4) → (6, 4). Quantity supplied (Qs) — dashed quantity guide: dashed path (4, 0) → (4, 4). Quantity supplied (Qs) — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “Price below equilibrium”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Quantity demanded (Qd); Quantity supplied (Qs), with dashed axis-reading guides.",
                    "feedback": "At P = 4, demand gives Qd = 6 while supply gives Qs = 4; the separate points and guides expose excess demand of 2."
                  },
                  {
                    "key": "misconception1",
                    "label": "Read both demand and supply quantities from the same curve at the chosen price.",
                    "feedback": "Planned buying is read from demand and planned selling from supply. A shortage or surplus exists precisely because these quantities differ at that price."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Price-adjustment direction: directed arrow (8, 4) → (8, 5).",
                "instruction": "For “Price below equilibrium”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Call the quantity demanded at any chosen price the quantity actually sold.",
                    "feedback": "Planned demand alone does not establish transactions: compare supply and demand, or locate the new crossing after the specified shift."
                  },
                  {
                    "key": "compare",
                    "label": "Add Price-adjustment direction.",
                    "feedback": "The upward arrow from P = 4 toward 5 shows the price pressure created by the shortage when price is free to adjust."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "At P = 4, the shortage is 2 units; the adjustment arrow points upward toward P = 5.",
            "explanation": {
              "question": "How does the price mechanism help coordinate this market?",
              "options": [
                "Upward price pressure discourages some purchases and encourages supply.",
                "Price adjustment must instantly give every participant their preferred outcome."
              ],
              "answer": 0,
              "feedback": [
                "Movement toward P = 5 narrows the difference between planned buying and selling.",
                "Adjustment depends on institutions and flexibility; equilibrium does not satisfy every desire."
              ]
            },
            "extension": null
          },
          {
            "key": "surplus",
            "title": "Price above equilibrium",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Flexible competitive prices are assumed. The drawing alone does not establish real-world adjustment speed or distribution of gains.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "supply": "Supply (S)",
              "chosenPrice": "Chosen non-equilibrium price",
              "demandQuantity": "Quantity demanded (Qd)",
              "supplyQuantity": "Quantity supplied (Qs)",
              "priceAdjustment": "Price-adjustment direction",
              "demandQuantityQ": "Quantity demanded (Qd) — dashed quantity guide",
              "demandQuantityP": "Quantity demanded (Qd) — dashed vertical-axis guide",
              "supplyQuantityQ": "Quantity supplied (Qs) — dashed quantity guide",
              "supplyQuantityP": "Quantity supplied (Qs) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At P = 6, do buyers or sellers plan the larger quantity?",
              "options": [
                "Sellers: Qs = 6 exceeds Qd = 4.",
                "Buyers: Qd exceeds Qs."
              ],
              "answer": 0,
              "feedback": [
                "Read each curve at the chosen horizontal price line.",
                "At this price the two schedules give the opposite ranking of quantities."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Chosen non-equilibrium price connects (0, 6) → (10, 6).",
                "instruction": "For “Price above equilibrium”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Chosen non-equilibrium price.",
                    "feedback": "The horizontal line fixes P = 6 above the demand–supply crossing, establishing the price at which buying and selling plans must be read."
                  },
                  {
                    "key": "misconception0",
                    "label": "Call the quantity demanded at any chosen price the quantity actually sold.",
                    "feedback": "Planned demand alone does not establish transactions: compare supply and demand, or locate the new crossing after the specified shift."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Quantity demanded (Qd) at (4, 6). Quantity supplied (Qs) at (6, 6). Quantity demanded (Qd) — dashed quantity guide: dashed path (4, 0) → (4, 6). Quantity demanded (Qd) — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Quantity supplied (Qs) — dashed quantity guide: dashed path (6, 0) → (6, 6). Quantity supplied (Qs) — dashed vertical-axis guide: dashed path (0, 6) → (6, 6).",
                "instruction": "For “Price above equilibrium”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read both demand and supply quantities from the same curve at the chosen price.",
                    "feedback": "Planned buying is read from demand and planned selling from supply. A shortage or surplus exists precisely because these quantities differ at that price."
                  },
                  {
                    "key": "read",
                    "label": "Add Quantity demanded (Qd); Quantity supplied (Qs), with dashed axis-reading guides.",
                    "feedback": "At P = 6, demand gives Qd = 4 while supply gives Qs = 6; the separate points and guides expose excess supply of 2."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Price-adjustment direction: directed arrow (8, 6) → (8, 5).",
                "instruction": "For “Price above equilibrium”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Price-adjustment direction.",
                    "feedback": "The downward arrow from P = 6 toward 5 shows the price pressure created by the surplus when price is free to adjust."
                  },
                  {
                    "key": "misconception2",
                    "label": "Call the quantity demanded at any chosen price the quantity actually sold.",
                    "feedback": "Planned demand alone does not establish transactions: compare supply and demand, or locate the new crossing after the specified shift."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "At P = 6, the surplus is 2 units; the adjustment arrow points downward toward P = 5.",
            "explanation": {
              "question": "How does the price mechanism help coordinate this market?",
              "options": [
                "Price adjustment must instantly give every participant their preferred outcome.",
                "Downward price pressure encourages purchases and discourages supply."
              ],
              "answer": 1,
              "feedback": [
                "Adjustment depends on institutions and flexibility; equilibrium does not satisfy every desire.",
                "Movement toward P = 5 narrows the difference between planned buying and selling."
              ]
            },
            "extension": null
          },
          {
            "key": "demandIncrease",
            "title": "A demand increase",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Flexible competitive prices are assumed. The drawing alone does not establish real-world adjustment speed or distribution of gains.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "supply": "Supply (S)",
              "shift": "Increased demand (D1)",
              "initial": "Initial point",
              "final": "Final point",
              "equilibriumChange": "Equilibrium-change arrow",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Demand shifts to P = 12 − Q. What happens to equilibrium?",
              "options": [
                "Price falls while quantity rises.",
                "Both equilibrium price and quantity rise to 6."
              ],
              "answer": 1,
              "feedback": [
                "That direction belongs to a different curve shift.",
                "Solve the shifted curve with the unchanged curve; the new crossing determines both values."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Increased demand (D1) connects (0, 12) → (10, 2).",
                "instruction": "For “A demand increase”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Call the quantity demanded at any chosen price the quantity actually sold.",
                    "feedback": "Planned demand alone does not establish transactions: compare supply and demand, or locate the new crossing after the specified shift."
                  },
                  {
                    "key": "construct",
                    "label": "Add Increased demand (D1).",
                    "feedback": "D1 shifts outward to P = 12 − Q while supply stays fixed, representing greater desired buying at each price."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Initial point at (5, 5). Final point at (6, 6). Initial point — dashed quantity guide: dashed path (5, 0) → (5, 5). Initial point — dashed vertical-axis guide: dashed path (0, 5) → (5, 5). Final point — dashed quantity guide: dashed path (6, 0) → (6, 6). Final point — dashed vertical-axis guide: dashed path (0, 6) → (6, 6).",
                "instruction": "For “A demand increase”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Initial point; Final point, with dashed axis-reading guides.",
                    "feedback": "The initial and final crossings move from (5,5) to (6,6); the guides show both equilibrium quantity and price rising."
                  },
                  {
                    "key": "misconception1",
                    "label": "Read both demand and supply quantities from the same curve at the chosen price.",
                    "feedback": "Planned buying is read from demand and planned selling from supply. A shortage or surplus exists precisely because these quantities differ at that price."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Equilibrium-change arrow: directed arrow (5, 5) → (6, 6).",
                "instruction": "For “A demand increase”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Call the quantity demanded at any chosen price the quantity actually sold.",
                    "feedback": "Planned demand alone does not establish transactions: compare supply and demand, or locate the new crossing after the specified shift."
                  },
                  {
                    "key": "compare",
                    "label": "Add Equilibrium-change arrow.",
                    "feedback": "The up-right arrow links the old and new equilibria: increased demand raises both price and quantity along unchanged supply."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The new demand crossing is (6,6), compared with initial E = (5,5).",
            "explanation": {
              "question": "How does the price mechanism help coordinate this market?",
              "options": [
                "A higher price signals stronger demand and encourages expansion along supply.",
                "Price adjustment must instantly give every participant their preferred outcome."
              ],
              "answer": 0,
              "feedback": [
                "Price communicates the changed scarcity and changes incentives on the unchanged curve.",
                "Adjustment depends on institutions and flexibility; equilibrium does not satisfy every desire."
              ]
            },
            "extension": null
          },
          {
            "key": "supplyIncrease",
            "title": "A supply increase",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Flexible competitive prices are assumed. The drawing alone does not establish real-world adjustment speed or distribution of gains.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "supply": "Supply (S)",
              "shift": "Increased supply (S1)",
              "initial": "Initial point",
              "final": "Final point",
              "equilibriumChange": "Equilibrium-change arrow",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Supply shifts to P = Q − 2. What happens to equilibrium?",
              "options": [
                "Quantity rises to 6 and price falls to 4.",
                "Both price and quantity rise."
              ],
              "answer": 0,
              "feedback": [
                "Solve the shifted curve with the unchanged curve; the new crossing determines both values.",
                "That direction belongs to a different curve shift."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Increased supply (S1) connects (2, 0) → (10, 8).",
                "instruction": "For “A supply increase”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Increased supply (S1).",
                    "feedback": "S1 shifts outward to P = Q − 2 while demand stays fixed, representing greater desired selling at each price."
                  },
                  {
                    "key": "misconception0",
                    "label": "Call the quantity demanded at any chosen price the quantity actually sold.",
                    "feedback": "Planned demand alone does not establish transactions: compare supply and demand, or locate the new crossing after the specified shift."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Initial point at (5, 5). Final point at (6, 4). Initial point — dashed quantity guide: dashed path (5, 0) → (5, 5). Initial point — dashed vertical-axis guide: dashed path (0, 5) → (5, 5). Final point — dashed quantity guide: dashed path (6, 0) → (6, 4). Final point — dashed vertical-axis guide: dashed path (0, 4) → (6, 4).",
                "instruction": "For “A supply increase”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read both demand and supply quantities from the same curve at the chosen price.",
                    "feedback": "Planned buying is read from demand and planned selling from supply. A shortage or surplus exists precisely because these quantities differ at that price."
                  },
                  {
                    "key": "read",
                    "label": "Add Initial point; Final point, with dashed axis-reading guides.",
                    "feedback": "The crossings move from (5,5) to (6,4); the guides show equilibrium quantity rising while price falls."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Equilibrium-change arrow: directed arrow (5, 5) → (6, 4).",
                "instruction": "For “A supply increase”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Equilibrium-change arrow.",
                    "feedback": "The down-right arrow links the two equilibria: increased supply lowers price and expands quantity along unchanged demand."
                  },
                  {
                    "key": "misconception2",
                    "label": "Call the quantity demanded at any chosen price the quantity actually sold.",
                    "feedback": "Planned demand alone does not establish transactions: compare supply and demand, or locate the new crossing after the specified shift."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The new supply crossing is (6,4), compared with initial E = (5,5).",
            "explanation": {
              "question": "How does the price mechanism help coordinate this market?",
              "options": [
                "Price adjustment must instantly give every participant their preferred outcome.",
                "Lower costs expand supply; a lower market price encourages purchases."
              ],
              "answer": 1,
              "feedback": [
                "Adjustment depends on institutions and flexibility; equilibrium does not satisfy every desire.",
                "Price communicates the changed scarcity and changes incentives on the unchanged curve."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.3.surplus_diagram",
        "scope": "common",
        "title": "Consumer, producer and social surplus diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "surplus",
            "title": "Two distinct gains from voluntary trade",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "Areas are illustrative welfare measures under these assumptions; distribution, information and financing costs can change policy judgments.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "supply": "Supply (S)",
              "equilibrium": "Equilibrium (E)",
              "consumerSurplus": "Consumer surplus (CS)",
              "producerSurplus": "Producer surplus (PS)",
              "equilibriumQ": "Equilibrium (E) — dashed quantity guide",
              "equilibriumP": "Equilibrium (E) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At the competitive crossing, where are gains to consumers shown?",
              "options": [
                "In the whole rectangle below the market price.",
                "Below demand and above the market price, up to Q = 5."
              ],
              "answer": 1,
              "feedback": [
                "The price-times-quantity rectangle is expenditure/revenue, not consumer surplus.",
                "Willingness to pay exceeds the price on each of the first five units."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Equilibrium (E) at (5, 5). Equilibrium (E) — dashed quantity guide: dashed path (5, 0) → (5, 5). Equilibrium (E) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5).",
                "instruction": "For “Two distinct gains from voluntary trade”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Shade the full spending rectangle as consumer surplus.",
                    "feedback": "Consumer surplus lies above the price and below willingness to pay; the full P × Q rectangle records payment rather than net consumer gain."
                  },
                  {
                    "key": "construct",
                    "label": "Add Equilibrium (E), with dashed axis-reading guides.",
                    "feedback": "The crossing and guides identify P = 5 and Q = 5, establishing the price and traded quantity that bound the surplus areas."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Consumer surplus (CS) shaded polygon with vertices (0, 5) → (0, 10) → (5, 5).",
                "instruction": "For “Two distinct gains from voluntary trade”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Consumer surplus (CS).",
                    "feedback": "The shaded triangle lies below demand and above P = 5 up to Q = 5, measuring buyers' willingness to pay beyond their expenditure."
                  },
                  {
                    "key": "misconception1",
                    "label": "Shade the whole price-times-quantity rectangle as net welfare.",
                    "feedback": "Net welfare uses the gap between marginal benefit and marginal cost, or willingness to pay and price; expenditure itself is not net surplus."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Producer surplus (PS) shaded polygon with vertices (0, 0) → (0, 5) → (5, 5).",
                "instruction": "For “Two distinct gains from voluntary trade”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Shade the whole price-times-quantity rectangle as net welfare.",
                    "feedback": "Net welfare uses the gap between marginal benefit and marginal cost, or willingness to pay and price; expenditure itself is not net surplus."
                  },
                  {
                    "key": "compare",
                    "label": "Add Producer surplus (PS).",
                    "feedback": "The added triangle lies above supply and below P = 5 up to Q = 5, measuring sellers' receipts beyond marginal supply costs."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "CS is the upper triangle above P = 5 and below D. PS is the lower triangle below P = 5 and above S. These are separate areas, not two revenue rectangles.",
            "explanation": {
              "question": "Why can CS and PS be added here?",
              "options": [
                "They represent distinct private gains from the same trades, with no external effects assumed.",
                "The revenue rectangle must also be added as a third welfare gain."
              ],
              "answer": 0,
              "feedback": [
                "CS and PS measure benefits net of payments and supply costs; payments themselves transfer income.",
                "Adding revenue again double-counts a payment already accounted for in the surplus boundaries."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "Using the two triangles, what is total surplus?",
              "options": [
                "50 monetary units per period.",
                "25 monetary units per period."
              ],
              "answer": 1,
              "feedback": [
                "25 is the revenue rectangle, but each surplus triangle is half of that; adding two whole rectangles overstates surplus.",
                "Each triangle is ½ × 5 × 5 = 12.5, so the sum is 25."
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "2.4",
    "unit": 2,
    "title": "Behavioural economics",
    "summary": "Do people always make fully informed choices?",
    "question": "Do people always make fully informed choices?",
    "scope": "hl",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "bounded rationality",
        "definition": "Limits on information processing and time that constrain fully optimizing choices."
      },
      {
        "term": "nudge",
        "definition": "A change in choice architecture that influences decisions while retaining options and without a significant change in economic incentives."
      },
      {
        "term": "satisficing",
        "definition": "Choosing an acceptable outcome rather than searching for the absolute maximum."
      }
    ],
    "sections": [
      {
        "id": "behaviour",
        "heading": "Choices and limitations",
        "body": [
          "The rational model assumes consistent preferences, adequate information and utility maximization. People may instead use rules of thumb: an initial number anchors a judgment, framing changes how options appear, and available examples receive disproportionate weight. Bounded rationality, limited self-control, concern for others and imperfect information challenge the simplest model.",
          "Utility maximization means choosing the most preferred affordable bundle, not buying the largest number of goods. The simple rational model assumes consistent preferences and enough information to compare alternatives. Bounded rationality means time and cognitive limits prevent exhaustive comparison; bounded self-control explains a gap between intended and actual saving; bounded selfishness allows concern for others.",
          "A rule of thumb such as “choose the middle price” saves effort but can mislead. Anchoring occurs when an arbitrary initial price influences later judgment. Framing occurs when “90% survive” and “10% die” produce different reactions to the same probability. Availability bias occurs when a vivid recent accident outweighs less memorable statistical evidence. These mechanisms differ: identify what features of the decision changed."
        ],
        "scope": "hl",
        "limitation": "Biases do not mean every person makes the same mistake."
      },
      {
        "id": "nudges",
        "heading": "Choice architecture and firms",
        "body": [
          "Defaults alter the option received without action; restricted choice removes options and mandated choice requires an active selection. A nudge changes the choice environment while retaining options. Firms may pursue market share, growth, social responsibility or satisfactory rather than maximum profit.",
          "Automatic pension enrolment with an easy opt-out changes the default while leaving choice available: it is a nudge. Banning a harmful product restricts choice, and requiring applicants to tick yes or no mandates a decision; neither is simply a default. A nudge can be cheap but may manipulate choices or fail when inertia is weak.",
          "A firm might accept lower current profit to build market share, invest for growth, protect a social mission, or reach a satisfactory target. Satisficing means settling for an acceptable result under constraints. Do not assume these objectives imply no interest in profit: survival still requires financing costs."
        ],
        "scope": "hl",
        "limitation": "Changing a default can benefit or disadvantage different people."
      }
    ],
    "model": "none",
    "modelPrompt": "Use the worked situation to identify the mechanism, then explain one condition that could change the conclusion.",
    "modelAssumption": "The example isolates one mechanism; other relevant conditions are held fixed unless stated.",
    "modelLimitation": "These illustrative examples isolate a mechanism and cannot establish a universal prediction or a causal empirical finding.",
    "worked": {
      "prompt": "Among 200 eligible workers, 80 join an opt-in pension scheme. After automatic enrolment with an opt-out, 150 remain enrolled.",
      "steps": [
        "Initial participation is 80/200×100=40%.",
        "After the default changes, participation is 150/200×100=75%, a rise of 35 percentage points.",
        "Inertia and limited attention offer a mechanism, but a before/after comparison alone cannot rule out other changes."
      ],
      "conclusion": "The default can influence behavior while preserving choice; participation is not proof of improved welfare for every worker."
    },
    "quiz": {
      "question": "Which is a nudge based on a default?",
      "options": [
        "Removing all sugary drinks from sale.",
        "Charging a compulsory sugar tax.",
        "Requiring every buyer to choose a drink explicitly.",
        "Automatically serving water while allowing a free switch to another drink."
      ],
      "answer": 3,
      "feedback": [
        "Removing options restricts choice rather than simply changing a default.",
        "A tax changes material incentives through price.",
        "Mandated choice requires action instead of assigning a default.",
        "Correct: inaction leads to water, while alternatives remain available."
      ],
      "scope": "hl"
    },
    "challenge": {
      "prompt": "Explain one limitation of a default savings enrolment.",
      "hint": "Consider households with urgent financial needs.",
      "modelAnswer": "Automatic enrolment can raise pension participation through inertia or limited attention while allowing opting out. However, a worker with urgent rent payments or expensive debt may need current disposable income more than additional pension saving. A poorly communicated or difficult opt-out can therefore worsen that worker’s situation. More participation alone is not enough to establish improved well-being.",
      "rubric": [
        "Identify automatic enrolment as a default with an opt-out.",
        "Explain how inertia or limited attention can increase participation.",
        "Apply a specific financial constraint to a worker.",
        "Link that constraint and opt-out design to a limitation of the policy."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "hl"
    },
    "coverage": [
      {
        "id": "2.4.rational",
        "point": "Rational choice, utility maximization and perfect information",
        "status": "taught",
        "evidence": "section:behaviour"
      },
      {
        "id": "2.4.biases",
        "point": "Rules of thumb, anchoring, framing and availability biases",
        "status": "taught",
        "evidence": "section:behaviour"
      },
      {
        "id": "2.4.bounds",
        "point": "Bounded rationality, self-control and selfishness; imperfect information",
        "status": "taught",
        "evidence": "section:behaviour"
      },
      {
        "id": "2.4.choice_architecture",
        "point": "Default, restricted and mandated choices; nudges",
        "status": "taught",
        "evidence": "section:nudges"
      },
      {
        "id": "2.4.objectives",
        "point": "Profit, social responsibility, market share, satisficing and growth objectives",
        "status": "taught",
        "evidence": "section:nudges"
      }
    ],
    "diagrams": []
  },
  {
    "id": "2.5",
    "unit": 2,
    "title": "Elasticity of demand",
    "summary": "How responsive are purchases to price and income?",
    "question": "How responsive are purchases to price and income?",
    "scope": "common",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "price elasticity of demand",
        "definition": "Percentage change in quantity demanded divided by percentage change in own price."
      },
      {
        "term": "income elasticity of demand",
        "definition": "Percentage change in quantity demanded divided by percentage change in income."
      },
      {
        "term": "total revenue",
        "definition": "Price multiplied by quantity sold."
      }
    ],
    "sections": [
      {
        "id": "ped",
        "heading": "Price elasticity",
        "body": [
          "Price elasticity of demand (PED) is percentage change in quantity demanded divided by percentage change in price. Its usual negative sign reflects the inverse relationship; compare the absolute value with one. Demand is relatively elastic above one, inelastic below one and unit elastic at one. Substitutes, time, necessity and the share of income spent influence responsiveness.",
          "Use the stated base consistently: percentage change = (new−old)/old ×100 for the initial-value method used here. A price rise from $10 to $11 is 10%; quantity falling from 100 to 80 is −20%, giving PED=−2. A 1% price rise is associated with about a 2% quantity fall over this range; it is not a fall of two units.",
          "PED=0 means quantity does not respond; a vertical demand curve illustrates this. Perfectly elastic demand is horizontal: buyers accept the market price but none above it in the idealized model. Unit elasticity means equal proportional changes in opposite directions, not a 45-degree straight line. More close substitutes, more adjustment time and a larger budget share usually increase responsiveness; necessities often have fewer practical alternatives."
        ],
        "scope": "common",
        "limitation": "Percentage calculations depend on the chosen base or midpoint method."
      },
      {
        "id": "revenue",
        "heading": "Revenue and price",
        "body": [
          "Total revenue equals price times quantity. For point elasticity and a sufficiently small price change, elastic demand means a price rise reduces revenue; inelastic demand means it raises revenue, other things equal. At unit point elasticity the first-order revenue change is zero. These local rules do not determine revenue for a large finite change measured using initial-value PED.",
          "For finite changes, compare P0×Q0 with P1×Q1 directly. For example, Q0=10, Q1=1, P0=1, P1=2 gives initial-value PED=−0.9, yet revenue falls from 1×10=10 to 2×1=2. In the earlier example revenue falls from $10×100=$1,000 to $11×80=$880. Revenue is sales income, not profit; costs can also change.",
          "A firm should estimate PED before changing prices; a government taxing a less responsive good may collect revenue with a smaller quantity reduction, but that may conflict with a goal of reducing harmful consumption. Estimates depend on the market definition, alternatives and time horizon."
        ],
        "scope": "common",
        "limitation": "Elasticity can vary over a curve and across consumers."
      },
      {
        "id": "yed",
        "heading": "Income elasticity",
        "body": [
          "Income elasticity of demand (YED) is percentage change in quantity demanded divided by percentage change in income. Positive values describe normal goods; negative values describe inferior goods. A positive value below one suggests a necessity, while above one suggests a luxury.",
          "If income rises from $2,000 to $2,200 (10%) and monthly cafe visits rise from 10 to 12 (20%), YED=20/10=2: a normal, income-elastic good in this sample. If bus journeys fall from 20 to 19 (−5%), YED=−0.5, indicating an inferior good over this income range. “Inferior” is a demand response, not a moral or quality judgment.",
          "To recover missing values, multiply elasticity by the given percentage change: YED=0.6 and income growth of 5% imply quantity growth of 3%. From 200 units this predicts 206, assuming the estimate applies over that range."
        ],
        "scope": "common",
        "limitation": "These categories depend on the context and income range."
      },
      {
        "id": "hl",
        "heading": "Elasticity along a line",
        "body": [
          "On a straight downward-sloping demand curve, PED varies: it is elastic above the midpoint, unit elastic at the midpoint and inelastic below it. Primary goods often have fewer short-run substitutes than manufactured goods, but this is not universal.",
          "A constant slope is a constant absolute change, whereas elasticity compares proportional changes. Near the high-price, low-quantity end of a linear curve, the same unit quantity change is a large percentage of quantity, making PED larger in magnitude.",
          "Primary foods often have low PED because they meet basic needs, while a particular manufactured brand may have close alternatives. These are tendencies, not classifications that guarantee an elasticity. As income rises, high-YED sectors may expand faster than necessities, influencing firms’ capacity plans and the economy’s sectoral employment."
        ],
        "scope": "hl",
        "limitation": "The midpoint result assumes a straight line with positive intercepts."
      }
    ],
    "model": "ped",
    "modelPrompt": "Compare proportional price and quantity changes. Predict the revenue effect before calculating it.",
    "modelAssumption": "Initial-value percentage changes over the stated range; a stable demand relation and other determinants held fixed. This finite estimate is not point elasticity; compare P0×Q0 and P1×Q1 for revenue.",
    "modelLimitation": "An estimated elasticity depends on the range, percentage-change convention, time horizon and available substitutes.",
    "worked": {
      "prompt": "Price rises from $10 to $11 and weekly quantity demanded falls from 100 to 80. Use initial-value percentage changes.",
      "steps": [
        "Price change is (11−10)/10×100=10%.",
        "Quantity change is (80−100)/100×100=−20%.",
        "PED=−20/10=−2, so absolute PED is 2 and demand is elastic over this range.",
        "Revenue falls from $10×100=$1,000 to $11×80=$880."
      ],
      "conclusion": "The quantity response outweighs the price rise; revenue falls $120. This does not by itself reveal profit."
    },
    "quiz": {
      "question": "Income rises 10% and demand for a good falls 5%, other things equal. Which interpretation is correct?",
      "options": [
        "YED=2, so it is a luxury.",
        "PED=−0.5, so price demand is inelastic.",
        "YED=−0.5, so it is inferior over this range.",
        "YED=0.5, so it is a normal necessity."
      ],
      "answer": 2,
      "feedback": [
        "Divide quantity change by income change, not the reverse; retain the negative sign.",
        "The changing variable is income, so this is YED rather than PED.",
        "Correct: −5%/10%=−0.5; demand falls as income rises.",
        "The sign is negative, so normal-good classification does not apply."
      ],
      "scope": "common"
    },
    "challenge": {
      "prompt": "Explain why a cafe with elastic demand may lose revenue after raising its price. Use an original numerical example.",
      "hint": "Compare percentage changes and then calculate price times quantity.",
      "modelAnswer": "If price rises from $10 to $11 while weekly sales fall from 100 to 80, initial-value PED is −20%/10%=−2. Quantity falls proportionately more than price rises, so revenue falls from $1,000 to $880. The conclusion concerns revenue; profit also depends on costs.",
      "rubric": [
        "State PED as proportional quantity response to price.",
        "Show an elastic numerical response with consistent percentage bases.",
        "Calculate both revenue totals correctly.",
        "Link the larger proportional quantity fall to lower revenue."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "common"
    },
    "coverage": [
      {
        "id": "2.5.elasticity",
        "point": "Meaning and degrees of elasticity",
        "status": "taught",
        "evidence": "section:ped"
      },
      {
        "id": "2.5.ped_formula",
        "point": "PED formula and interpretation",
        "status": "taught",
        "evidence": "section:ped"
      },
      {
        "id": "2.5.ped_diagrams",
        "point": "Relatively elastic and inelastic demand; perfectly elastic, inelastic and unitary PED diagrams",
        "status": "taught",
        "evidence": "diagram:2.5.ped_diagrams"
      },
      {
        "id": "2.5.ped_line_hl",
        "point": "Changing PED along a straight-line demand curve diagram",
        "status": "taught",
        "evidence": "diagram:2.5.ped_line_hl"
      },
      {
        "id": "2.5.ped_determinants",
        "point": "PED determinants",
        "status": "taught",
        "evidence": "section:ped"
      },
      {
        "id": "2.5.ped_revenue_diagram",
        "point": "PED and total revenue with price-change diagrams",
        "status": "taught",
        "evidence": "diagram:2.5.ped_revenue_diagram"
      },
      {
        "id": "2.5.ped_decisions",
        "point": "PED in firm and government decisions",
        "status": "taught",
        "evidence": "section:revenue"
      },
      {
        "id": "2.5.ped_commodities_hl",
        "point": "Primary versus manufactured goods PED",
        "status": "summary",
        "evidence": "section:hl"
      },
      {
        "id": "2.5.ped_calculation",
        "point": "Calculate PED, price, quantity or total revenue from data",
        "status": "taught",
        "evidence": "worked"
      },
      {
        "id": "2.5.yed_formula",
        "point": "YED formula, signs, normal and inferior goods, necessities and luxuries",
        "status": "taught",
        "evidence": "section:yed"
      },
      {
        "id": "2.5.yed_engel_diagram",
        "point": "Engel curves for income elastic, inelastic and inferior goods",
        "status": "taught",
        "evidence": "diagram:2.5.yed_engel_diagram"
      },
      {
        "id": "2.5.yed_calculation",
        "point": "Calculate YED, income or quantity from data",
        "status": "taught",
        "evidence": "section:yed"
      },
      {
        "id": "2.5.yed_importance_hl",
        "point": "YED for firms and sectoral change",
        "status": "summary",
        "evidence": "section:hl"
      }
    ],
    "diagrams": [
      {
        "id": "2.5.ped_diagrams",
        "scope": "common",
        "title": "Relatively elastic and inelastic demand; perfectly elastic, inelastic and unitary PED diagrams",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "relative",
            "title": "Compare responsiveness at one reference point",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "These are local or limiting demand models with other determinants fixed. State whether point, midpoint or initial-value percentage elasticity is being used.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–12. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Relatively elastic curve connects (0, 8) → (12, 2).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "elastic": "Relatively elastic curve",
              "inelastic": "Relatively inelastic curve",
              "reference": "Shared reference point",
              "quantityResponse": "Quantity-response comparison cue",
              "referenceQ": "Shared reference point — dashed quantity guide",
              "referenceP": "Shared reference point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At the same reference point and on the same axes, which curve is more responsive?",
              "options": [
                "The relatively elastic curve has the larger proportional quantity response at the shared point.",
                "A curve’s slope alone ranks elasticity at every possible price and quantity."
              ],
              "answer": 0,
              "feedback": [
                "Both curves pass through (4,6); the flatter curve has the larger local percentage quantity response for a given percentage price change.",
                "Elasticity includes the P/Q ratio; unrelated points or axis scales invalidate a slope-only comparison."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Relatively inelastic curve connects (0, 14) → (7, 0).",
                "instruction": "For “Compare responsiveness at one reference point”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Relatively inelastic curve.",
                    "feedback": "The added steeper demand curve passes through (4,6), allowing its smaller quantity response to be compared with the flatter curve on the same axes."
                  },
                  {
                    "key": "misconception0",
                    "label": "Rank responsiveness using slopes at unrelated reference prices and quantities.",
                    "feedback": "A valid local comparison needs the same P/Q reference and axis scale; perfect and unit cases must retain their specific horizontal, vertical or proportional geometry."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Shared reference point at (4, 6). Shared reference point — dashed quantity guide: dashed path (4, 0) → (4, 6). Shared reference point — dashed vertical-axis guide: dashed path (0, 6) → (4, 6).",
                "instruction": "For “Compare responsiveness at one reference point”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Rank responsiveness using slopes at unrelated reference prices and quantities.",
                    "feedback": "A valid local comparison needs the same P/Q reference and axis scale; perfect and unit cases must retain their specific horizontal, vertical or proportional geometry."
                  },
                  {
                    "key": "read",
                    "label": "Add Shared reference point, with dashed axis-reading guides.",
                    "feedback": "The shared point and guides fix Q = 4 and P = 6 for both curves, holding P/Q constant so their local responsiveness can be compared."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Quantity-response comparison cue: directed arrow (3, 6) → (5, 6).",
                "instruction": "For “Compare responsiveness at one reference point”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Quantity-response comparison cue.",
                    "feedback": "The horizontal arrow is a quantity-response cue at the reference price, not a movement along either demand curve or a new equilibrium."
                  },
                  {
                    "key": "misconception2",
                    "label": "Treat the comparison arrow as an observed equilibrium change caused by an unidentified shock.",
                    "feedback": "The horizontal arrow is a responsiveness cue at the shared reference price; it does not add a supply/demand shift or identify a new market equilibrium."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The arrow marks the horizontal direction of quantity response at the shared reference price. It is a comparison cue, not an additional measured response curve.",
            "explanation": {
              "question": "Why must this elasticity comparison use the same reference point?",
              "options": [
                "Slope determines elasticity independently of units and reference values.",
                "At the shared P and Q, differences in local quantity responsiveness determine the elasticity ranking."
              ],
              "answer": 1,
              "feedback": [
                "Changing units or the evaluation point can change a visual slope comparison without the asserted universal elasticity ranking.",
                "Point elasticity uses the local quantity slope multiplied by P/Q, which is held fixed for the comparison."
              ]
            },
            "extension": null
          },
          {
            "key": "perfectElastic",
            "title": "Perfectly elastic limiting case",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "These are local or limiting demand models with other determinants fixed. State whether point, midpoint or initial-value percentage elasticity is being used.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–12. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Perfectly elastic curve connects (0, 4) → (12, 4).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "perfectElastic": "Perfectly elastic curve",
              "initial": "Initial point",
              "final": "Final point",
              "response": "Illustrated response",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Predict the response represented by this |PED| case.",
              "options": [
                "Quantity is fixed while price varies.",
                "Quantity can vary at the fixed illustrated price."
              ],
              "answer": 1,
              "feedback": [
                "That describes a vertical, perfectly inelastic curve.",
                "The horizontal curve fixes price at 4; the two points have quantities 4 and 8."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (4, 4). Initial point — dashed quantity guide: dashed path (4, 0) → (4, 4). Initial point — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “Perfectly elastic limiting case”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  },
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The first point reads Q = 4 at P = 4 on the horizontal demand curve, establishing its fixed-price level."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (8, 4). Final point — dashed quantity guide: dashed path (8, 0) → (8, 4). Final point — dashed vertical-axis guide: dashed path (0, 4) → (8, 4).",
                "instruction": "For “Perfectly elastic limiting case”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The second point reads Q = 8 at the same P = 4; quantity can vary while the perfectly elastic demand price stays fixed."
                  },
                  {
                    "key": "misconception1",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Illustrated response: directed arrow (4, 4) → (8, 4).",
                "instruction": "For “Perfectly elastic limiting case”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Make the response arrow vertical at fixed quantity.",
                    "feedback": "The horizontal curve holds price fixed while quantity varies. A vertical response at fixed quantity would illustrate the perfectly inelastic limiting case."
                  },
                  {
                    "key": "compare",
                    "label": "Add Illustrated response.",
                    "feedback": "The horizontal arrow joins (4,4) to (8,4), illustrating the fixed-price geometry of perfectly elastic demand."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The points move horizontally from (4,4) to (8,4), with price unchanged.",
            "explanation": {
              "question": "How should this limiting case be interpreted?",
              "options": [
                "It isolates an extreme response under the scenario’s stated conditions.",
                "Every real market must behave this way over all prices."
              ],
              "answer": 0,
              "feedback": [
                "A limiting model highlights responsiveness; real supply or demand can be less extreme.",
                "Finite real-world responses depend on market conditions and time."
              ]
            },
            "extension": null
          },
          {
            "key": "perfectInelastic",
            "title": "Perfectly inelastic limiting case",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "These are local or limiting demand models with other determinants fixed. State whether point, midpoint or initial-value percentage elasticity is being used.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–12. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Perfectly inelastic curve connects (4, 0) → (4, 16).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "perfectInelastic": "Perfectly inelastic curve",
              "initial": "Initial point",
              "final": "Final point",
              "response": "Illustrated response",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Predict the response represented by this |PED| case.",
              "options": [
                "Quantity stays fixed at 4 while price varies.",
                "Price is fixed while quantity varies."
              ],
              "answer": 0,
              "feedback": [
                "The vertical curve fixes quantity at 4; the two prices are 4 and 8.",
                "That describes a horizontal, perfectly elastic curve."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (4, 4). Initial point — dashed quantity guide: dashed path (4, 0) → (4, 4). Initial point — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “Perfectly inelastic limiting case”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The first point reads Q = 4 at P = 4 on the vertical demand curve, establishing its fixed quantity."
                  },
                  {
                    "key": "misconception0",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (4, 8). Final point — dashed quantity guide: dashed path (4, 0) → (4, 8). Final point — dashed vertical-axis guide: dashed path (0, 8) → (4, 8).",
                "instruction": "For “Perfectly inelastic limiting case”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  },
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The second point reads P = 8 at the same Q = 4: the price change leaves quantity demanded unchanged."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Illustrated response: directed arrow (4, 4) → (4, 8).",
                "instruction": "For “Perfectly inelastic limiting case”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Illustrated response.",
                    "feedback": "The vertical arrow joins (4,4) to (4,8), showing zero quantity response and hence perfectly inelastic demand."
                  },
                  {
                    "key": "misconception2",
                    "label": "Make the response arrow horizontal at fixed price.",
                    "feedback": "The vertical curve holds quantity fixed while price varies. A horizontal response at fixed price would illustrate the perfectly elastic limiting case."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The points move vertically from (4,4) to (4,8), with quantity unchanged.",
            "explanation": {
              "question": "How should this limiting case be interpreted?",
              "options": [
                "Every real market must behave this way over all prices.",
                "It isolates an extreme response under the scenario’s stated conditions."
              ],
              "answer": 1,
              "feedback": [
                "Finite real-world responses depend on market conditions and time.",
                "A limiting model highlights responsiveness; real supply or demand can be less extreme."
              ]
            },
            "extension": null
          },
          {
            "key": "unit",
            "title": "Unit elasticity: a rectangular hyperbola",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "These are local or limiting demand models with other determinants fixed. State whether point, midpoint or initial-value percentage elasticity is being used.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–12. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Unit-elastic curve is a sampled smooth curve, shown from (1, 12) to (12, 1). The demand curve is the rectangular hyperbola P = 12/Q for positive Q; it slopes downward and has constant point |PED| = 1.",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "unit": "Unit-elastic curve",
              "initial": "Initial point",
              "final": "Final point",
              "response": "Illustrated response",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Predict the response represented by this |PED| case.",
              "options": [
                "Any straight downward demand curve is unit elastic everywhere.",
                "At each point, proportional quantity responsiveness has |PED| = 1."
              ],
              "answer": 1,
              "feedback": [
                "A straight demand line has changing point elasticity; the hyperbola has constant unit elasticity.",
                "On P = 12/Q, quantity 2→4 and price 6→3 keep PQ = 12. Point elasticity has magnitude 1 throughout."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (2, 6). Initial point — dashed quantity guide: dashed path (2, 0) → (2, 6). Initial point — dashed vertical-axis guide: dashed path (0, 6) → (2, 6).",
                "instruction": "For “Unit elasticity: a rectangular hyperbola”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  },
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The first guides read Q = 2 and P = 6 on the rectangular hyperbola, where the product P × Q equals 12."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (4, 3). Final point — dashed quantity guide: dashed path (4, 0) → (4, 3). Final point — dashed vertical-axis guide: dashed path (0, 3) → (4, 3).",
                "instruction": "For “Unit elasticity: a rectangular hyperbola”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The second guides read Q = 4 and P = 3: doubling quantity halves price, maintaining P × Q = 12."
                  },
                  {
                    "key": "misconception1",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Illustrated response: directed arrow (2, 6) → (4, 3).",
                "instruction": "For “Unit elasticity: a rectangular hyperbola”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Keep price fixed while doubling quantity along the hyperbola.",
                    "feedback": "On P = 12/Q, doubling quantity from 2 to 4 halves price from 6 to 3; keeping price fixed would leave the curve."
                  },
                  {
                    "key": "compare",
                    "label": "Add Illustrated response.",
                    "feedback": "The down-right arrow links equal-product observations on the hyperbola, illustrating unit elasticity along this curve."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The sampled curve is P = 12/Q over positive Q; (2,6) and (4,3) both give total revenue 12.",
            "explanation": {
              "question": "Which interpretation of unit elasticity is correct?",
              "options": [
                "Point |PED| is 1; along the hyperbola, finite revenue is constant.",
                "The base-period percentage formula gives exactly 1 for every finite change on this hyperbola."
              ],
              "answer": 0,
              "feedback": [
                "Point elasticity has magnitude 1 and PQ is constant. Finite base-period percentage elasticity need not equal the point value.",
                "For Q 2→4 and P 6→3, base-period changes are +100% and −50%, giving magnitude 2, despite point elasticity 1."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.5.ped_line_hl",
        "scope": "hl",
        "title": "Changing PED along a straight-line demand curve diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "segments",
            "title": "Elasticity changes along a straight demand line",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Use point elasticity, not a finite initial-value calculation across distant points. This is HL material.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "upper": "Upper elastic point",
              "midpoint": "Unit-elastic midpoint",
              "lower": "Lower inelastic point",
              "upperQ": "Upper elastic point — dashed quantity guide",
              "upperP": "Upper elastic point — dashed vertical-axis guide",
              "midpointQ": "Unit-elastic midpoint — dashed quantity guide",
              "midpointP": "Unit-elastic midpoint — dashed vertical-axis guide",
              "lowerQ": "Lower inelastic point — dashed quantity guide",
              "lowerP": "Lower inelastic point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "On P = 10 − Q, where is point |PED| largest: Q = 2, 5 or 8?",
              "options": [
                "At Q = 2, in the upper segment.",
                "It is identical everywhere because slope is constant."
              ],
              "answer": 0,
              "feedback": [
                "Point |PED| = P/Q is 8/2 = 4 at Q = 2.",
                "The constant slope does not keep the P/Q ratio constant."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Upper elastic point at (2, 8). Upper elastic point — dashed quantity guide: dashed path (2, 0) → (2, 8). Upper elastic point — dashed vertical-axis guide: dashed path (0, 8) → (2, 8).",
                "instruction": "For “Elasticity changes along a straight demand line”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Upper elastic point, with dashed axis-reading guides.",
                    "feedback": "The upper point reads Q = 2, P = 8; with slope −1, point elasticity has magnitude P/Q = 4, so this part is elastic."
                  },
                  {
                    "key": "misconception0",
                    "label": "Mark every point with the same elasticity because the line is straight.",
                    "feedback": "Point elasticity includes P/Q; it changes along a straight demand curve despite the constant slope."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Unit-elastic midpoint at (5, 5). Unit-elastic midpoint — dashed quantity guide: dashed path (5, 0) → (5, 5). Unit-elastic midpoint — dashed vertical-axis guide: dashed path (0, 5) → (5, 5).",
                "instruction": "For “Elasticity changes along a straight demand line”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Label the midpoint as highly elastic because its price is positive.",
                    "feedback": "At (5,5), point |PED| = P/Q = 1. A positive price alone does not determine the elasticity category."
                  },
                  {
                    "key": "read",
                    "label": "Add Unit-elastic midpoint, with dashed axis-reading guides.",
                    "feedback": "The midpoint reads Q = 5, P = 5, making point elasticity P/Q = 1 even though the line's slope is unchanged."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Lower inelastic point at (8, 2). Lower inelastic point — dashed quantity guide: dashed path (8, 0) → (8, 2). Lower inelastic point — dashed vertical-axis guide: dashed path (0, 2) → (8, 2).",
                "instruction": "For “Elasticity changes along a straight demand line”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Lower inelastic point, with dashed axis-reading guides.",
                    "feedback": "The lower point reads Q = 8, P = 2, making point elasticity 0.25: the falling P/Q ratio makes this segment inelastic."
                  },
                  {
                    "key": "misconception2",
                    "label": "Label the lower point as more elastic than the upper point.",
                    "feedback": "At (8,2), point |PED| = 2/8 = 0.25, below the upper point’s value 4. The P/Q ratio falls along this line."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The marked points are upper (2,8), midpoint (5,5) and lower (8,2); their point |PED| values are 4, 1 and 0.25.",
            "explanation": {
              "question": "Why does elasticity fall as Q rises along this line?",
              "options": [
                "The demand curve becomes a different curve at each point.",
                "P/Q falls, even though the absolute slope remains constant."
              ],
              "answer": 1,
              "feedback": [
                "Moving along one curve changes the evaluation point without changing the schedule.",
                "The same schedule has a lower price and higher quantity at later points, changing proportional responsiveness."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.5.ped_revenue_diagram",
        "scope": "common",
        "title": "PED and total revenue with price-change diagrams",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "elastic",
            "title": "Price cut on the elastic segment",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Revenue is not profit. The examples use a straight demand line; the unit midpoint rule is local, not a general finite-change identity.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "initial": "Initial point",
              "final": "Final point",
              "initialRevenue": "Initial total-revenue rectangle",
              "finalRevenue": "Final total-revenue rectangle",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "When price falls on this illustrated segment, which way does the revenue rectangle change?",
              "options": [
                "Revenue falls whenever price falls.",
                "Revenue rises: quantity gains outweigh the lower price."
              ],
              "answer": 1,
              "feedback": [
                "The larger quantity can more than compensate for the lower unit price.",
                "The initial rectangle is 2 × 8; the final rectangle is 3 × 7."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (2, 8). Initial point — dashed quantity guide: dashed path (2, 0) → (2, 8). Initial point — dashed vertical-axis guide: dashed path (0, 8) → (2, 8).",
                "instruction": "For “Price cut on the elastic segment”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Swap the point’s price and quantity coordinates.",
                    "feedback": "Quantity is horizontal and price is vertical. Locate the initial observation on these axes before measuring revenue as price times quantity."
                  },
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The initial guides read Q = 2 and P = 8, establishing the two dimensions needed to measure initial revenue."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (3, 7). Initial total-revenue rectangle shaded polygon with vertices (0, 0) → (2, 0) → (2, 8) → (0, 8). Final point — dashed quantity guide: dashed path (3, 0) → (3, 7). Final point — dashed vertical-axis guide: dashed path (0, 7) → (3, 7).",
                "instruction": "For “Price cut on the elastic segment”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Final point; Initial total-revenue rectangle, with dashed axis-reading guides.",
                    "feedback": "The initial rectangle has width 2 and height 8; the new point (3,7) sets a lower price and greater quantity for comparison."
                  },
                  {
                    "key": "misconception1",
                    "label": "Use a one-dimensional quantity line as the revenue measure.",
                    "feedback": "Total revenue depends on both price and quantity; its rectangle has height P and width Q, not only a quantity length."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Final total-revenue rectangle shaded polygon with vertices (0, 0) → (3, 0) → (3, 7) → (0, 7).",
                "instruction": "For “Price cut on the elastic segment”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Use a one-dimensional quantity line as the revenue measure.",
                    "feedback": "Total revenue depends on both price and quantity; its rectangle has height P and width Q, not only a quantity length."
                  },
                  {
                    "key": "compare",
                    "label": "Add Final total-revenue rectangle.",
                    "feedback": "The final rectangle has width 3 and height 7, so revenue is 21 versus the initial 16: quantity gains outweigh the price fall."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Initial TR = 16 at (2,8), final TR = 21 at (3,7); the two rectangles overlap but are separate measurements.",
            "explanation": {
              "question": "Which elasticity rule fits this comparison?",
              "options": [
                "On this elastic segment, a price cut raises total revenue.",
                "Revenue depends only on quantity, so its price component can be ignored."
              ],
              "answer": 0,
              "feedback": [
                "Revenue is P × Q; elasticity relates the proportional quantity response to the proportional price change.",
                "Ignoring price misses the trade-off being compared by the rectangles."
              ]
            },
            "extension": null
          },
          {
            "key": "inelastic",
            "title": "Price cut on the inelastic segment",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Revenue is not profit. The examples use a straight demand line; the unit midpoint rule is local, not a general finite-change identity.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "initial": "Initial point",
              "final": "Final point",
              "initialRevenue": "Initial total-revenue rectangle",
              "finalRevenue": "Final total-revenue rectangle",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "When price falls on this illustrated segment, which way does the revenue rectangle change?",
              "options": [
                "Revenue falls: the quantity gain does not offset the lower price.",
                "Revenue rises whenever quantity rises."
              ],
              "answer": 0,
              "feedback": [
                "The initial rectangle is 7 × 3; the final rectangle is 8 × 2.",
                "More sales need not mean more revenue if unit price falls sufficiently."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (7, 3). Initial point — dashed quantity guide: dashed path (7, 0) → (7, 3). Initial point — dashed vertical-axis guide: dashed path (0, 3) → (7, 3).",
                "instruction": "For “Price cut on the inelastic segment”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The initial guides read Q = 7 and P = 3, establishing the price and quantity used to measure initial revenue."
                  },
                  {
                    "key": "misconception0",
                    "label": "Swap the point’s price and quantity coordinates.",
                    "feedback": "Quantity is horizontal and price is vertical. Locate the initial observation on these axes before measuring revenue as price times quantity."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (8, 2). Initial total-revenue rectangle shaded polygon with vertices (0, 0) → (7, 0) → (7, 3) → (0, 3). Final point — dashed quantity guide: dashed path (8, 0) → (8, 2). Final point — dashed vertical-axis guide: dashed path (0, 2) → (8, 2).",
                "instruction": "For “Price cut on the inelastic segment”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Use a one-dimensional quantity line as the revenue measure.",
                    "feedback": "Total revenue depends on both price and quantity; its rectangle has height P and width Q, not only a quantity length."
                  },
                  {
                    "key": "read",
                    "label": "Add Final point; Initial total-revenue rectangle, with dashed axis-reading guides.",
                    "feedback": "The initial rectangle has width 7 and height 3; the new point (8,2) locates the lower-price comparison."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Final total-revenue rectangle shaded polygon with vertices (0, 0) → (8, 0) → (8, 2) → (0, 2).",
                "instruction": "For “Price cut on the inelastic segment”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Final total-revenue rectangle.",
                    "feedback": "The final rectangle has width 8 and height 2, so revenue falls to 16 from 21: the quantity gain does not offset the price fall."
                  },
                  {
                    "key": "misconception2",
                    "label": "Use a one-dimensional quantity line as the revenue measure.",
                    "feedback": "Total revenue depends on both price and quantity; its rectangle has height P and width Q, not only a quantity length."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Initial TR = 21 at (7,3), final TR = 16 at (8,2); compare whole rectangles, not only their shared part.",
            "explanation": {
              "question": "Which elasticity rule fits this comparison?",
              "options": [
                "Revenue depends only on quantity, so its price component can be ignored.",
                "On this inelastic segment, a price cut lowers total revenue."
              ],
              "answer": 1,
              "feedback": [
                "Ignoring price misses the trade-off being compared by the rectangles.",
                "Revenue is P × Q; elasticity relates the proportional quantity response to the proportional price change."
              ]
            },
            "extension": null
          },
          {
            "key": "unit",
            "title": "The local unit-elastic revenue maximum",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Revenue is not profit. The examples use a straight demand line; the unit midpoint rule is local, not a general finite-change identity.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "initial": "Initial point",
              "initialRevenue": "Initial total-revenue rectangle",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At the midpoint (5,5), what does a very small price change imply for revenue to first order?",
              "options": [
                "Every finite price cut leaves revenue exactly unchanged.",
                "Revenue is locally stationary at its maximum."
              ],
              "answer": 1,
              "feedback": [
                "The unit condition is local on this straight line; a finite move away reduces revenue.",
                "At Q = 5, point |PED| = 1 and TR = Q(10 − Q) is at its peak."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (5, 5). Initial point — dashed quantity guide: dashed path (5, 0) → (5, 5). Initial point — dashed vertical-axis guide: dashed path (0, 5) → (5, 5).",
                "instruction": "For “The local unit-elastic revenue maximum”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Swap the point’s price and quantity coordinates.",
                    "feedback": "Quantity is horizontal and price is vertical. Locate the initial observation on these axes before measuring revenue as price times quantity."
                  },
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The midpoint guides read Q = 5 and P = 5, where local point elasticity is one on this straight demand line."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Initial total-revenue rectangle shaded polygon with vertices (0, 0) → (5, 0) → (5, 5) → (0, 5).",
                "instruction": "For “The local unit-elastic revenue maximum”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Initial total-revenue rectangle.",
                    "feedback": "The rectangle has width 5 and height 5, giving revenue 25 at the midpoint; this is a single-state area, not a claim that finite price changes preserve revenue."
                  },
                  {
                    "key": "misconception1",
                    "label": "Use a one-dimensional quantity line as the revenue measure.",
                    "feedback": "Total revenue depends on both price and quantity; its rectangle has height P and width Q, not only a quantity length."
                  }
                ],
                "answer": "read"
              }
            ],
            "comparison": "Only the midpoint and its single TR rectangle are drawn: Q = 5, P = 5, TR = 25. There is no fictitious second state.",
            "explanation": {
              "question": "Which elasticity rule fits this comparison?",
              "options": [
                "A unit-elastic point gives no first-order revenue change; arbitrary finite changes are different.",
                "Every finite pair of points on a straight line has constant revenue."
              ],
              "answer": 0,
              "feedback": [
                "TR = 25 is maximal here; for example Q = 6, P = 4 gives 24.",
                "Constant revenue over a range would require a different curve such as P = 12/Q."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.5.yed_engel_diagram",
        "scope": "common",
        "title": "Engel curves for income elastic, inelastic and inferior goods",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "incomeElastic",
            "title": "An income-elastic normal good",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "The segment applies only to the positive-income range shown. Income categories may change at other incomes; income is not the good’s own price.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–16. Vertical axis: Income per period (Y), 0–140. Coordinates below are (horizontal, vertical). Engel curve over the illustrated income range connects (10, 100) → (14, 120).",
            "labels": {
              "main": "Diagram panel",
              "quantity": "Quantity per period (Q)",
              "income": "Income per period (Y)",
              "engel": "Engel curve over the illustrated income range",
              "initial": "Initial point",
              "final": "Final point",
              "incomeChange": "Income-change direction",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Income rises from 100 to 120. In this illustrated range, what happens to quantity?",
              "options": [
                "Quantity rises from 10 to 14, proportionally more than income.",
                "Quantity rises proportionally less than income."
              ],
              "answer": 0,
              "feedback": [
                "Using initial values, income rises 20% while quantity changes 40%.",
                "A positive quantity response makes this a normal good; its relative size determines the elasticity category."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (10, 100). Initial point — dashed quantity guide: dashed path (10, 0) → (10, 100). Initial point — dashed vertical-axis guide: dashed path (0, 100) → (10, 100).",
                "instruction": "For “An income-elastic normal good”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The initial guides read quantity 10 and income 100; the vertical coordinate is income, establishing the baseline for YED."
                  },
                  {
                    "key": "misconception0",
                    "label": "Put own price on the vertical axis and label the change PED.",
                    "feedback": "This is an Engel curve: the vertical variable is income, and YED compares percentage quantity and income changes."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (14, 120). Final point — dashed quantity guide: dashed path (14, 0) → (14, 120). Final point — dashed vertical-axis guide: dashed path (0, 120) → (14, 120).",
                "instruction": "For “An income-elastic normal good”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Treat the vertical income change as a price change.",
                    "feedback": "The vertical variable here is income, so the marked response teaches YED. PED would require own-price observations, which this scenario does not supply."
                  },
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The final point reads quantity 14 and income 120, so quantity rises 40% while income rises 20% from the initial values."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Income-change direction: directed arrow (10, 100) → (14, 120).",
                "instruction": "For “An income-elastic normal good”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Income-change direction.",
                    "feedback": "The up-right arrow connects (10,100) to (14,120): quantity increases more than proportionately with income in the illustrated range."
                  },
                  {
                    "key": "misconception2",
                    "label": "Put own price on the vertical axis and label the change PED.",
                    "feedback": "This is an Engel curve: the vertical variable is income, and YED compares percentage quantity and income changes."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Income is vertical and quantity horizontal: the Engel segment joins (Q,Y) = (10,100) to (14,120). The arrow shows increasing income.",
            "explanation": {
              "question": "Using base-period percentage changes, which YED interpretation is correct?",
              "options": [
                "YED can be read from visual slope alone without any reference values.",
                "YED = 2: income-elastic and normal."
              ],
              "answer": 1,
              "feedback": [
                "Slope depends on the chosen axes and units; the percentage ratio uses both initial values.",
                "YED = (%ΔQ)/(%Δincome) = 2 using initial Q = 10 and initial income = 100."
              ]
            },
            "extension": null
          },
          {
            "key": "incomeInelastic",
            "title": "An income-inelastic normal good",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "The segment applies only to the positive-income range shown. Income categories may change at other incomes; income is not the good’s own price.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–16. Vertical axis: Income per period (Y), 0–140. Coordinates below are (horizontal, vertical). Engel curve over the illustrated income range connects (10, 100) → (11, 120).",
            "labels": {
              "main": "Diagram panel",
              "quantity": "Quantity per period (Q)",
              "income": "Income per period (Y)",
              "engel": "Engel curve over the illustrated income range",
              "initial": "Initial point",
              "final": "Final point",
              "incomeChange": "Income-change direction",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Income rises from 100 to 120. In this illustrated range, what happens to quantity?",
              "options": [
                "Quantity falls, so the good is inferior.",
                "Quantity rises from 10 to 11, proportionally less than income."
              ],
              "answer": 1,
              "feedback": [
                "A positive quantity response makes this a normal good; its relative size determines the elasticity category.",
                "Using initial values, income rises 20% while quantity changes 10%."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (10, 100). Initial point — dashed quantity guide: dashed path (10, 0) → (10, 100). Initial point — dashed vertical-axis guide: dashed path (0, 100) → (10, 100).",
                "instruction": "For “An income-inelastic normal good”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Put own price on the vertical axis and label the change PED.",
                    "feedback": "This is an Engel curve: the vertical variable is income, and YED compares percentage quantity and income changes."
                  },
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The initial point reads quantity 10 at income 100, establishing the baseline with income on the vertical axis."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (11, 120). Final point — dashed quantity guide: dashed path (11, 0) → (11, 120). Final point — dashed vertical-axis guide: dashed path (0, 120) → (11, 120).",
                "instruction": "For “An income-inelastic normal good”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The final point reads quantity 11 at income 120; quantity rises 10% for a 20% income increase from the baseline."
                  },
                  {
                    "key": "misconception1",
                    "label": "Treat the vertical income change as a price change.",
                    "feedback": "The vertical variable here is income, so the marked response teaches YED. PED would require own-price observations, which this scenario does not supply."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Income-change direction: directed arrow (10, 100) → (11, 120).",
                "instruction": "For “An income-inelastic normal good”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Put own price on the vertical axis and label the change PED.",
                    "feedback": "This is an Engel curve: the vertical variable is income, and YED compares percentage quantity and income changes."
                  },
                  {
                    "key": "compare",
                    "label": "Add Income-change direction.",
                    "feedback": "The up-right arrow shows a positive but less-than-proportionate quantity response to rising income, the income-inelastic case."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Income is vertical and quantity horizontal: the Engel segment joins (Q,Y) = (10,100) to (11,120). The arrow shows increasing income.",
            "explanation": {
              "question": "Using base-period percentage changes, which YED interpretation is correct?",
              "options": [
                "YED = 0.5: income-inelastic and normal.",
                "YED can be read from visual slope alone without any reference values."
              ],
              "answer": 0,
              "feedback": [
                "YED = (%ΔQ)/(%Δincome) = 0.5 using initial Q = 10 and initial income = 100.",
                "Slope depends on the chosen axes and units; the percentage ratio uses both initial values."
              ]
            },
            "extension": null
          },
          {
            "key": "inferior",
            "title": "An inferior-good income range",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "The segment applies only to the positive-income range shown. Income categories may change at other incomes; income is not the good’s own price.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–16. Vertical axis: Income per period (Y), 0–140. Coordinates below are (horizontal, vertical). Engel curve over the illustrated income range connects (10, 100) → (9, 120).",
            "labels": {
              "main": "Diagram panel",
              "quantity": "Quantity per period (Q)",
              "income": "Income per period (Y)",
              "engel": "Engel curve over the illustrated income range",
              "initial": "Initial point",
              "final": "Final point",
              "incomeChange": "Income-change direction",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Income rises from 100 to 120. In this illustrated range, what happens to quantity?",
              "options": [
                "Quantity falls from 10 to 9.",
                "Quantity must rise because all goods are normal."
              ],
              "answer": 0,
              "feedback": [
                "Using initial values, income rises 20% while quantity changes −10%.",
                "Inferior goods have a negative income response in the specified range."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (10, 100). Initial point — dashed quantity guide: dashed path (10, 0) → (10, 100). Initial point — dashed vertical-axis guide: dashed path (0, 100) → (10, 100).",
                "instruction": "For “An inferior-good income range”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The initial point and guides read quantity 10 at income 100, setting the baseline for the income response."
                  },
                  {
                    "key": "misconception0",
                    "label": "Put own price on the vertical axis and label the change PED.",
                    "feedback": "This is an Engel curve: the vertical variable is income, and YED compares percentage quantity and income changes."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (9, 120). Final point — dashed quantity guide: dashed path (9, 0) → (9, 120). Final point — dashed vertical-axis guide: dashed path (0, 120) → (9, 120).",
                "instruction": "For “An inferior-good income range”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Treat the vertical income change as a price change.",
                    "feedback": "The vertical variable here is income, so the marked response teaches YED. PED would require own-price observations, which this scenario does not supply."
                  },
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The final point reads quantity 9 at income 120, showing quantity falling as income rises in this illustrated range."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Income-change direction: directed arrow (10, 100) → (9, 120).",
                "instruction": "For “An inferior-good income range”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Income-change direction.",
                    "feedback": "The up-left arrow links higher income to lower quantity demanded, indicating a negative YED for this inferior-good example."
                  },
                  {
                    "key": "misconception2",
                    "label": "Put own price on the vertical axis and label the change PED.",
                    "feedback": "This is an Engel curve: the vertical variable is income, and YED compares percentage quantity and income changes."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Income is vertical and quantity horizontal: the Engel segment joins (Q,Y) = (10,100) to (9,120). The arrow shows increasing income.",
            "explanation": {
              "question": "Using base-period percentage changes, which YED interpretation is correct?",
              "options": [
                "YED can be read from visual slope alone without any reference values.",
                "YED = −0.5: inferior in this range."
              ],
              "answer": 1,
              "feedback": [
                "Slope depends on the chosen axes and units; the percentage ratio uses both initial values.",
                "YED = (%ΔQ)/(%Δincome) = −0.5 using initial Q = 10 and initial income = 100."
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  {
    "id": "2.6",
    "unit": 2,
    "title": "Elasticity of supply",
    "summary": "How quickly can producers expand output?",
    "question": "How quickly can producers expand output?",
    "scope": "common",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "price elasticity of supply",
        "definition": "Percentage change in quantity supplied divided by percentage change in price."
      },
      {
        "term": "spare capacity",
        "definition": "Existing productive equipment or inputs that can support more output without major new investment."
      }
    ],
    "sections": [
      {
        "id": "pes",
        "heading": "Price elasticity of supply",
        "body": [
          "PES is percentage change in quantity supplied divided by percentage change in price. A value above one indicates relatively elastic supply; below one indicates relatively inelastic supply. Spare capacity, time, factor mobility, inventories and rising costs affect responsiveness.",
          "Using initial values, price rising from $20 to $22 is a 10% rise. Supply rising from 100 to 105 units is a 5% rise, so PES=0.5: a 1% price rise is associated with about 0.5% more output over this range. PES above one is elastic; equal to one is unit elastic; zero is perfectly inelastic.",
          "A vertical supply curve represents fixed available quantity in the period. A horizontal curve represents the idealized case of unlimited supply at one price. Neither curve is a claim about every time period. With PES=1.5 and a 4% price rise, expected supply growth is 6%; from 500 units, the new quantity is 530.",
          "Spare machinery and readily available workers allow expansion without sharp extra costs. Storage lets sellers release inventories quickly; perishable goods cannot be held so easily. Time permits new investment and training, while factor mobility allows resources to move into the industry. Near capacity, rapidly rising marginal costs can limit responsiveness."
        ],
        "scope": "common",
        "limitation": "A numerical elasticity depends on the period and calculation convention."
      },
      {
        "id": "hl",
        "heading": "Differences between goods",
        "body": [
          "Agricultural output may be less responsive in the short run because crops need time to grow; some manufactured output can respond faster when spare capacity exists.",
          "A harvest cannot be regrown immediately after a price rise, and land and weather constrain output; manufactured goods can sometimes expand using spare shifts and stocks. In the long run farmers can plant more or improve technology, while a factory at full capacity can also be unresponsive. Compare actual constraints and horizons rather than treating “primary” or “manufactured” as proof."
        ],
        "scope": "hl",
        "limitation": "Storage, capacity and production methods can reverse this comparison."
      }
    ],
    "model": "market",
    "modelPrompt": "Predict the direction of equilibrium price and quantity after changing one non-price determinant. Identify which curve shifts and which curve shows a movement along it.",
    "modelAssumption": "A competitive market with stable demand and supply, flexible prices and other determinants held fixed.",
    "modelLimitation": "Real markets may have delayed adjustment, price rigidity, information problems or market power.",
    "worked": {
      "prompt": "A producer’s price rises from $20 to $22 and weekly output rises from 100 to 105 units.",
      "steps": [
        "Price rises (22−20)/20×100=10%.",
        "Quantity supplied rises (105−100)/100×100=5%.",
        "PES=5/10=0.5, indicating relatively inelastic supply over this range."
      ],
      "conclusion": "Output rises proportionately less than price; capacity or adjustment constraints may explain the response, but the numbers alone do not identify the cause."
    },
    "quiz": {
      "question": "Why might fresh fruit supply be less elastic immediately after a price rise than after several years?",
      "options": [
        "Fruit demand must be perfectly elastic.",
        "The current harvest is largely fixed, while later planting and investment can change capacity.",
        "PES must be negative whenever supply is constrained.",
        "Long-run supply always becomes unlimited."
      ],
      "answer": 1,
      "feedback": [
        "Demand responsiveness does not explain the production time needed for fruit.",
        "Correct: time permits adjustment of inputs that are fixed in the immediate period.",
        "Constrained expansion implies a small positive or zero PES, not necessarily a negative value.",
        "More adjustment is possible, but land and costs can still constrain long-run output."
      ],
      "scope": "common"
    },
    "challenge": {
      "prompt": "Explain why a furniture producer with spare capacity may have more elastic short-run supply than a producer already at full capacity.",
      "hint": "Compare the extra cost and delay involved in expanding output.",
      "modelAnswer": "A producer with idle machines and available workers can raise output quickly when price rises, without building a new factory. A producer at full capacity faces bottlenecks and may need expensive overtime or investment. Its percentage output response can therefore be smaller for the same percentage price rise, giving lower PES. The comparison depends on access to labour and materials as well as machinery.",
      "rubric": [
        "Define PES as proportional quantity response to price.",
        "Explain how spare capacity permits rapid expansion.",
        "Explain a full-capacity bottleneck or extra cost.",
        "Link the contrast to different percentage output responses."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "common"
    },
    "coverage": [
      {
        "id": "2.6.pes_formula",
        "point": "PES formula and degrees",
        "status": "taught",
        "evidence": "section:pes"
      },
      {
        "id": "2.6.pes_diagrams",
        "point": "Relative and perfect elasticity, inelasticity and unitary PES diagrams",
        "status": "taught",
        "evidence": "diagram:2.6.pes_diagrams"
      },
      {
        "id": "2.6.pes_determinants",
        "point": "Time, factor mobility, spare capacity, storage and cost determinants",
        "status": "taught",
        "evidence": "section:pes"
      },
      {
        "id": "2.6.pes_commodities_hl",
        "point": "Primary versus manufactured goods PES",
        "status": "summary",
        "evidence": "section:hl"
      },
      {
        "id": "2.6.pes_calculation",
        "point": "Calculate PES, price or quantity from data",
        "status": "taught",
        "evidence": "worked"
      }
    ],
    "diagrams": [
      {
        "id": "2.6.pes_diagrams",
        "scope": "common",
        "title": "Relative and perfect elasticity, inelasticity and unitary PES diagrams",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "relative",
            "title": "Compare responsiveness at one reference point",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Supply responsiveness depends on spare capacity, storage, factor mobility and the time available; no universal ranking follows from these examples.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–12. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Relatively elastic curve connects (0, 2) → (12, 8).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "elastic": "Relatively elastic curve",
              "inelastic": "Relatively inelastic curve",
              "reference": "Shared reference point",
              "quantityResponse": "Quantity-response comparison cue",
              "referenceQ": "Shared reference point — dashed quantity guide",
              "referenceP": "Shared reference point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At the same reference point and on the same axes, which curve is more responsive?",
              "options": [
                "A curve’s slope alone ranks elasticity at every possible price and quantity.",
                "The relatively elastic curve has the larger proportional quantity response at the shared point."
              ],
              "answer": 1,
              "feedback": [
                "Elasticity includes the P/Q ratio; unrelated points or axis scales invalidate a slope-only comparison.",
                "Both curves pass through (4,4); the flatter curve has the larger local percentage quantity response for a given percentage price change."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Relatively inelastic curve connects (2, 0) → (10, 16).",
                "instruction": "For “Compare responsiveness at one reference point”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Rank responsiveness using slopes at unrelated reference prices and quantities.",
                    "feedback": "A valid local comparison needs the same P/Q reference and axis scale; perfect and unit cases must retain their specific horizontal, vertical or proportional geometry."
                  },
                  {
                    "key": "construct",
                    "label": "Add Relatively inelastic curve.",
                    "feedback": "The added steeper supply curve passes through (4,4), permitting comparison of its smaller quantity response with the flatter supply curve on common axes."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Shared reference point at (4, 4). Shared reference point — dashed quantity guide: dashed path (4, 0) → (4, 4). Shared reference point — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “Compare responsiveness at one reference point”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Shared reference point, with dashed axis-reading guides.",
                    "feedback": "The shared point fixes Q = 4, P = 4 on both curves; this common P/Q reference makes their local elasticity comparison meaningful."
                  },
                  {
                    "key": "misconception1",
                    "label": "Rank responsiveness using slopes at unrelated reference prices and quantities.",
                    "feedback": "A valid local comparison needs the same P/Q reference and axis scale; perfect and unit cases must retain their specific horizontal, vertical or proportional geometry."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Quantity-response comparison cue: directed arrow (3, 4) → (5, 4).",
                "instruction": "For “Compare responsiveness at one reference point”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Treat the comparison arrow as an observed equilibrium change caused by an unidentified shock.",
                    "feedback": "The horizontal arrow is a responsiveness cue at the shared reference price; it does not add a supply/demand shift or identify a new market equilibrium."
                  },
                  {
                    "key": "compare",
                    "label": "Add Quantity-response comparison cue.",
                    "feedback": "The horizontal arrow cues a quantity-response comparison at the reference price; it does not establish a shock or a new market equilibrium."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The arrow marks the horizontal direction of quantity response at the shared reference price. It is a comparison cue, not an additional measured response curve.",
            "explanation": {
              "question": "Why must this elasticity comparison use the same reference point?",
              "options": [
                "At the shared P and Q, differences in local quantity responsiveness determine the elasticity ranking.",
                "Slope determines elasticity independently of units and reference values."
              ],
              "answer": 0,
              "feedback": [
                "Point elasticity uses the local quantity slope multiplied by P/Q, which is held fixed for the comparison.",
                "Changing units or the evaluation point can change a visual slope comparison without the asserted universal elasticity ranking."
              ]
            },
            "extension": null
          },
          {
            "key": "perfectElastic",
            "title": "Perfectly elastic limiting case",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Supply responsiveness depends on spare capacity, storage, factor mobility and the time available; no universal ranking follows from these examples.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–12. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Perfectly elastic curve connects (0, 4) → (12, 4).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "perfectElastic": "Perfectly elastic curve",
              "initial": "Initial point",
              "final": "Final point",
              "response": "Illustrated response",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Predict the response represented by this PES case.",
              "options": [
                "Quantity can vary at the fixed illustrated price.",
                "Quantity is fixed while price varies."
              ],
              "answer": 0,
              "feedback": [
                "The horizontal curve fixes price at 4; the two points have quantities 4 and 8.",
                "That describes a vertical, perfectly inelastic curve."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (4, 4). Initial point — dashed quantity guide: dashed path (4, 0) → (4, 4). Initial point — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “Perfectly elastic limiting case”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The first guides read Q = 4 at P = 4 on the horizontal supply curve, identifying its fixed price."
                  },
                  {
                    "key": "misconception0",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (8, 4). Final point — dashed quantity guide: dashed path (8, 0) → (8, 4). Final point — dashed vertical-axis guide: dashed path (0, 4) → (8, 4).",
                "instruction": "For “Perfectly elastic limiting case”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  },
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The second point reads Q = 8 at the same P = 4; the perfectly elastic supply curve allows differing quantities at that price."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Illustrated response: directed arrow (4, 4) → (8, 4).",
                "instruction": "For “Perfectly elastic limiting case”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Illustrated response.",
                    "feedback": "The horizontal arrow connects (4,4) to (8,4), illustrating quantity variation at the fixed supply price."
                  },
                  {
                    "key": "misconception2",
                    "label": "Make the response arrow vertical at fixed quantity.",
                    "feedback": "The horizontal curve holds price fixed while quantity varies. A vertical response at fixed quantity would illustrate the perfectly inelastic limiting case."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The points move horizontally from (4,4) to (8,4), with price unchanged.",
            "explanation": {
              "question": "How should this limiting case be interpreted?",
              "options": [
                "Every real market must behave this way over all prices.",
                "It isolates an extreme response under the scenario’s stated conditions."
              ],
              "answer": 1,
              "feedback": [
                "Finite real-world responses depend on market conditions and time.",
                "A limiting model highlights responsiveness; real supply or demand can be less extreme."
              ]
            },
            "extension": null
          },
          {
            "key": "perfectInelastic",
            "title": "Perfectly inelastic limiting case",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Supply responsiveness depends on spare capacity, storage, factor mobility and the time available; no universal ranking follows from these examples.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–12. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Perfectly inelastic curve connects (4, 0) → (4, 16).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "perfectInelastic": "Perfectly inelastic curve",
              "initial": "Initial point",
              "final": "Final point",
              "response": "Illustrated response",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Predict the response represented by this PES case.",
              "options": [
                "Price is fixed while quantity varies.",
                "Quantity stays fixed at 4 while price varies."
              ],
              "answer": 1,
              "feedback": [
                "That describes a horizontal, perfectly elastic curve.",
                "The vertical curve fixes quantity at 4; the two prices are 4 and 8."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (4, 4). Initial point — dashed quantity guide: dashed path (4, 0) → (4, 4). Initial point — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “Perfectly inelastic limiting case”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  },
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The first point reads Q = 4, P = 4 on the vertical supply curve, identifying the fixed quantity available."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (4, 8). Final point — dashed quantity guide: dashed path (4, 0) → (4, 8). Final point — dashed vertical-axis guide: dashed path (0, 8) → (4, 8).",
                "instruction": "For “Perfectly inelastic limiting case”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The second point reads P = 8 with Q still 4: higher price produces no quantity response in this limiting case."
                  },
                  {
                    "key": "misconception1",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Illustrated response: directed arrow (4, 4) → (4, 8).",
                "instruction": "For “Perfectly inelastic limiting case”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Make the response arrow horizontal at fixed price.",
                    "feedback": "The vertical curve holds quantity fixed while price varies. A horizontal response at fixed price would illustrate the perfectly elastic limiting case."
                  },
                  {
                    "key": "compare",
                    "label": "Add Illustrated response.",
                    "feedback": "The vertical arrow shows price rising from 4 to 8 without a change in quantity supplied, the perfectly inelastic case."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The points move vertically from (4,4) to (4,8), with quantity unchanged.",
            "explanation": {
              "question": "How should this limiting case be interpreted?",
              "options": [
                "It isolates an extreme response under the scenario’s stated conditions.",
                "Every real market must behave this way over all prices."
              ],
              "answer": 0,
              "feedback": [
                "A limiting model highlights responsiveness; real supply or demand can be less extreme.",
                "Finite real-world responses depend on market conditions and time."
              ]
            },
            "extension": null
          },
          {
            "key": "unit",
            "title": "Unit elasticity: a ray through the origin",
            "assumption": "Illustrative units per period; hold preferences, technology, input prices and other named determinants constant unless explicitly changed.",
            "limitation": "Supply responsiveness depends on spare capacity, storage, factor mobility and the time available; no universal ranking follows from these examples.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–12. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Unit-elastic curve connects (0, 0) → (12, 12).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "unit": "Unit-elastic curve",
              "initial": "Initial point",
              "final": "Final point",
              "response": "Illustrated response",
              "initialQ": "Initial point — dashed quantity guide",
              "initialP": "Initial point — dashed vertical-axis guide",
              "finalQ": "Final point — dashed quantity guide",
              "finalP": "Final point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Predict the response represented by this PES case.",
              "options": [
                "Quantity and price changes have equal proportional magnitudes.",
                "A unit-elastic supply curve must be horizontal."
              ],
              "answer": 0,
              "feedback": [
                "The ray P = Q passes through the origin; (2,2)→(4,4) doubles both variables.",
                "A horizontal curve is perfectly elastic; the origin ray has finite unit elasticity."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Initial point at (2, 2). Initial point — dashed quantity guide: dashed path (2, 0) → (2, 2). Initial point — dashed vertical-axis guide: dashed path (0, 2) → (2, 2).",
                "instruction": "For “Unit elasticity: a ray through the origin”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Initial point, with dashed axis-reading guides.",
                    "feedback": "The initial point (2,2) lies on the supply ray from the origin, establishing equal numerical price and quantity here."
                  },
                  {
                    "key": "misconception0",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Final point at (4, 4). Final point — dashed quantity guide: dashed path (4, 0) → (4, 4). Final point — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “Unit elasticity: a ray through the origin”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Swap the marked price and quantity when drawing the axis guides.",
                    "feedback": "Quantity is the horizontal coordinate and price is the vertical coordinate. Project the selected point to those axes without rotating the curve."
                  },
                  {
                    "key": "read",
                    "label": "Add Final point, with dashed axis-reading guides.",
                    "feedback": "The final point (4,4) doubles both price and quantity, preserving their proportional relationship on the ray."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Illustrated response: directed arrow (2, 2) → (4, 4).",
                "instruction": "For “Unit elasticity: a ray through the origin”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Illustrated response.",
                    "feedback": "The up-right arrow doubles both coordinates; proportional quantity and price changes illustrate unit-elastic supply."
                  },
                  {
                    "key": "misconception2",
                    "label": "Make the response change price without changing quantity.",
                    "feedback": "The ray P = Q requires proportional movement in both variables; (2,2)→(4,4) doubles both."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The origin ray joins (2,2) and (4,4); price and quantity rise in equal proportions.",
            "explanation": {
              "question": "Which interpretation of unit elasticity is correct?",
              "options": [
                "The ray’s intercept can be changed without affecting unit elasticity everywhere.",
                "On this ray, both base-period and midpoint proportional changes give PES = 1."
              ],
              "answer": 1,
              "feedback": [
                "An origin ray has the required proportionality; a nonzero intercept generally changes point PES.",
                "For 2→4 in both P and Q, their percentage changes are equal under either convention."
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  {
    "id": "2.7",
    "unit": 2,
    "title": "Government intervention",
    "summary": "How do policies change market outcomes?",
    "question": "How do policies change market outcomes?",
    "scope": "common",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "price ceiling",
        "definition": "A legal maximum price; binding when set below the unregulated equilibrium."
      },
      {
        "term": "price floor",
        "definition": "A legal minimum price; binding when set above the unregulated equilibrium."
      },
      {
        "term": "indirect tax",
        "definition": "A tax on spending on a good or service that creates a wedge between buyer payment and seller net receipts."
      },
      {
        "term": "subsidy",
        "definition": "Government financial support that lowers a recipient’s cost or raises receipts relative to the amount paid by buyers."
      }
    ],
    "sections": [
      {
        "id": "controls",
        "heading": "Price controls",
        "body": [
          "A binding price ceiling below equilibrium creates a shortage because quantity demanded exceeds quantity supplied. A binding floor above equilibrium creates a surplus. Consumers, producers and taxpayers experience different consequences, depending on access and policy design."
        ],
        "scope": "common",
        "limitation": "Actual allocation also depends on enforcement and non-price rationing."
      },
      {
        "id": "tax",
        "heading": "Taxes and subsidies",
        "body": [
          "An indirect tax raises suppliers’ costs and shifts supply upward; the buyer price generally rises, the seller’s net price falls and traded quantity falls. A per-unit subsidy shifts supply downward; buyer price generally falls, seller receipts rise and quantity increases. Tax revenue or subsidy spending equals the per-unit amount times the quantity traded.",
          "For a per-unit tax t, distinguish buyer price Pb and seller net price Ps: Pb−Ps=t. It is the wedge, rather than who sends money to the authority, that matters for incidence. The relatively less elastic side usually bears more of the economic burden because it changes behavior less readily.",
          "A subsidy creates a wedge in the other direction: seller receipts exceed buyer payment. It can support consumption or production but has an opportunity cost for taxpayers and may encourage excess output when no external benefit justifies it. Tax revenue and subsidy spending use post-policy traded quantity, not the original quantity."
        ],
        "scope": "common",
        "limitation": "The distribution of the burden depends on elasticities."
      },
      {
        "id": "evaluation",
        "heading": "Choosing policies",
        "body": [
          "Governments may raise revenue, support households or firms, correct market failure, change consumption or improve equity. Regulation, legislation and direct provision offer other routes. Compare effectiveness, administrative cost, unintended effects and stakeholder outcomes.",
          "Direct provision supplies a service such as primary health care; regulation sets requirements such as safety standards; legislation creates enforceable rules. Policies can raise revenue, protect low-income households, support firms, change output or consumption, and address external costs and information problems. Different aims can conflict.",
          "Evaluate a policy against its stated objective and alternatives. Ask who pays, who gains access, what happens in the short and long run, whether evasion is likely, and whether government has the information and administrative capacity needed. A lower controlled price alone does not prove better access for all households."
        ],
        "scope": "common",
        "limitation": "No policy is automatically best in every market."
      },
      {
        "id": "hl",
        "heading": "Nudges and calculations",
        "body": [
          "A nudge can change consumer decisions through presentation or defaults. To calculate a policy’s fiscal cost, multiply the per-unit subsidy by the post-policy quantity; a price-control shortage equals quantity demanded less quantity supplied at the controlled price.",
          "With Qd=100−10P and Qs=20+10P, equilibrium is $4 and 60 units. A $3 ceiling gives Qd=70 and Qs=50, so the shortage is 20. Without public stocks or imports, at most 50 units can be sold. Some buyers get a lower price; others face queues, reduced quality or informal payments. A ceiling above $4 is non-binding in this example.",
          "A $5 floor instead gives Qs=70 and Qd=50: a surplus of 20. If government buys it, taxpayers fund the purchases; without purchases, some output remains unsold and some producers may receive no sale. A floor below equilibrium is non-binding. Enforcement and access determine who benefits.",
          "With Qd=100−10Pb and Qs=20+10Ps and a $2 tax, substitute Pb=Ps+2. Then 100−10(Ps+2)=20+10Ps, so Ps=$3, Pb=$5 and Q=50. Each side bears $1 relative to $4; revenue is $2×50=$100.",
          "For a $2 subsidy, Ps=Pb+2, so 100−10Pb=20+10(Pb+2). Pb=$3, Ps=$5 and Q=70; spending is $140. These equal burden/benefit splits result from these particular slopes. Changing relative elasticities changes the split. A healthier cafeteria default is a consumer nudge; it preserves choice rather than setting a compulsory quantity."
        ],
        "scope": "hl",
        "limitation": "Quantitative results depend on the assumed demand and supply schedules."
      }
    ],
    "model": "policy",
    "modelPrompt": "Compare a binding ceiling and a per-unit tax. Identify traded quantity, any shortage, and who pays or receives each price.",
    "modelAssumption": "Enforced policy, linear competitive demand and supply, and no evasion or extra public stocks unless stated.",
    "modelLimitation": "Actual access, incidence and welfare depend on enforcement, relative elasticities and wider effects.",
    "worked": {
      "prompt": "HL extension: Without policy, Qd=100−10P and Qs=20+10P. The government imposes a $3 price ceiling.",
      "steps": [
        "Find equilibrium: 100−10P=20+10P gives P=$4 and Q=60.",
        "At the ceiling, Qd=100−30=70 and Qs=20+30=50.",
        "The shortage is 70−50=20 units; absent other supply, trade cannot exceed 50.",
        "Some successful buyers save $1, while excluded buyers may queue or buy elsewhere."
      ],
      "conclusion": "The ceiling is binding and lowers the legal price, but it does not guarantee all buyers obtain the good."
    },
    "quiz": {
      "question": "A binding ceiling creates Qd=70 and Qs=50. Without extra stocks, which claim is supported?",
      "options": [
        "All 70 willing buyers can purchase at the ceiling.",
        "There is a surplus of 20 units.",
        "At most 50 units trade, with a shortage of 20.",
        "The legal price must immediately return to equilibrium."
      ],
      "answer": 2,
      "feedback": [
        "Willingness to buy is not enough when only 50 units are supplied.",
        "Demand exceeds supply, so this is a shortage.",
        "Correct: available supply limits trade, and 70−50=20 measures excess demand.",
        "A binding enforced ceiling prevents legal price adjustment above the cap."
      ],
      "scope": "hl"
    },
    "challenge": {
      "prompt": "Explain why a legal maximum rent below equilibrium may help some tenants while harming others.",
      "hint": "Distinguish tenants who secure housing from those unable to find it.",
      "modelAnswer": "A binding rent ceiling lowers the legal rent, raising quantity demanded and reducing quantity supplied relative to equilibrium. Tenants who secure homes may pay less, while others face a shortage, queues or informal payments. Over time reduced incentives to maintain or supply homes can worsen access; outcomes depend on enforcement and complementary housing supply.",
      "rubric": [
        "Identify a ceiling below equilibrium as binding.",
        "Explain the opposite quantity-demanded and quantity-supplied responses.",
        "Distinguish successful tenants from excluded prospective tenants.",
        "Link a longer-run incentive or enforcement condition to the outcome."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "common"
    },
    "coverage": [
      {
        "id": "2.7.reasons",
        "point": "Revenue, firm and household support, production, consumption, market failure and equity motives",
        "status": "taught",
        "evidence": "section:evaluation"
      },
      {
        "id": "2.7.ceiling_diagram",
        "point": "Price ceiling diagram and stakeholder effects",
        "status": "taught",
        "evidence": "diagram:2.7.ceiling_diagram"
      },
      {
        "id": "2.7.floor_diagram",
        "point": "Price floor diagram and stakeholder effects",
        "status": "taught",
        "evidence": "diagram:2.7.floor_diagram"
      },
      {
        "id": "2.7.tax_diagram",
        "point": "Indirect tax diagram and stakeholder effects",
        "status": "taught",
        "evidence": "diagram:2.7.tax_diagram"
      },
      {
        "id": "2.7.subsidy_diagram",
        "point": "Subsidy diagram and stakeholder effects",
        "status": "taught",
        "evidence": "diagram:2.7.subsidy_diagram"
      },
      {
        "id": "2.7.other_interventions",
        "point": "Direct provision, regulation and legislation",
        "status": "taught",
        "evidence": "section:evaluation"
      },
      {
        "id": "2.7.nudges_hl",
        "point": "Consumer nudges",
        "status": "summary",
        "evidence": "section:hl"
      },
      {
        "id": "2.7.controls_calculation_hl",
        "point": "Calculate price ceiling and floor market and stakeholder effects",
        "status": "summary",
        "evidence": "section:hl"
      },
      {
        "id": "2.7.tax_subsidy_calculation_hl",
        "point": "Calculate tax and subsidy market and stakeholder effects",
        "status": "summary",
        "evidence": "section:hl"
      },
      {
        "id": "2.7.evaluation",
        "point": "Evaluate intervention consequences for markets and stakeholders",
        "status": "taught",
        "evidence": "section:evaluation"
      }
    ],
    "diagrams": [
      {
        "id": "2.7.ceiling_diagram",
        "scope": "common",
        "title": "Price ceiling diagram and stakeholder effects",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "binding",
            "title": "A binding price ceiling",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "The allocation of scarce goods is unspecified; a ceiling alone does not ensure efficient rationing.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "supply": "Supply (S)",
              "control": "Legal price control",
              "transactions": "Actual private transactions",
              "demandQuantity": "Quantity demanded (Qd)",
              "supplyQuantity": "Quantity supplied (Qs)",
              "gap": "Excess demand or supply: quantity gap",
              "demandQuantityQ": "Quantity demanded (Qd) — dashed quantity guide",
              "demandQuantityP": "Quantity demanded (Qd) — dashed vertical-axis guide",
              "supplyQuantityQ": "Quantity supplied (Qs) — dashed quantity guide",
              "supplyQuantityP": "Quantity supplied (Qs) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "A legal maximum price is 4, below equilibrium 5. What imbalance appears?",
              "options": [
                "A surplus: suppliers sell all 6 desired units.",
                "A shortage: Qd = 6, Qs = 4."
              ],
              "answer": 1,
              "feedback": [
                "Supply limits possible transactions; demand is not a guarantee of delivery.",
                "The lower price encourages purchases but discourages supply."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Legal price control connects (0, 4) → (10, 4).",
                "instruction": "For “A binding price ceiling”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Draw the legal ceiling above the market-clearing price.",
                    "feedback": "The binding ceiling is P = 4, below the crossing at P = 5. A ceiling above equilibrium would not constrain this market."
                  },
                  {
                    "key": "construct",
                    "label": "Add Legal price control.",
                    "feedback": "The legal price line is horizontal at P = 4 below equilibrium, showing a binding ceiling rather than a change in either schedule."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Quantity demanded (Qd) at (6, 4). Quantity supplied (Qs) at (4, 4). Quantity demanded (Qd) — dashed quantity guide: dashed path (6, 0) → (6, 4). Quantity demanded (Qd) — dashed vertical-axis guide: dashed path (0, 4) → (6, 4). Quantity supplied (Qs) — dashed quantity guide: dashed path (4, 0) → (4, 4). Quantity supplied (Qs) — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “A binding price ceiling”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Quantity demanded (Qd); Quantity supplied (Qs), with dashed axis-reading guides.",
                    "feedback": "The points and guides read Qd = 6 and Qs = 4 at the ceiling: desired purchases exceed available supply by 2."
                  },
                  {
                    "key": "misconception1",
                    "label": "Read both demand and supply quantities from the same curve at the chosen price.",
                    "feedback": "Planned buying is read from demand and planned selling from supply. A shortage or surplus exists precisely because these quantities differ at that price."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Actual private transactions connects (4, 0) → (4, 4). Excess demand or supply: quantity gap: directed arrow (4, 4.4) → (6, 4.4).",
                "instruction": "For “A binding price ceiling”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Draw actual transactions at the larger of Qd and Qs.",
                    "feedback": "Without another buyer or seller, the short side constrains private transactions. A quantity people wish to trade is not automatically a completed sale."
                  },
                  {
                    "key": "compare",
                    "label": "Add Actual private transactions; Excess demand or supply: quantity gap.",
                    "feedback": "The transaction line stops at Q = 4 because supply is the short side; the horizontal gap arrow measures the two unfilled units of demand."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The ceiling at P = 4 gives shortage 2; actual transactions cannot exceed supply 4 in this example.",
            "explanation": {
              "question": "Which stakeholder conclusion is justified?",
              "options": [
                "Some buyers who obtain goods pay less, but other willing buyers may be rationed out.",
                "Every consumer necessarily gains from the ceiling."
              ],
              "answer": 0,
              "feedback": [
                "A lower legal price does not specify who receives the limited quantity.",
                "Access, queues, quality and allocation matter as well as the posted price."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.7.floor_diagram",
        "scope": "common",
        "title": "Price floor diagram and stakeholder effects",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "privateSales",
            "title": "A price floor without public purchase",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "Public purchase, storage and disposal are not part of this scenario. Illegal discounting and enforcement are excluded.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "supply": "Supply (S)",
              "control": "Legal price control",
              "transactions": "Actual private transactions",
              "demandQuantity": "Quantity demanded (Qd)",
              "supplyQuantity": "Quantity supplied (Qs)",
              "gap": "Excess demand or supply: quantity gap",
              "demandQuantityQ": "Quantity demanded (Qd) — dashed quantity guide",
              "demandQuantityP": "Quantity demanded (Qd) — dashed vertical-axis guide",
              "supplyQuantityQ": "Quantity supplied (Qs) — dashed quantity guide",
              "supplyQuantityP": "Quantity supplied (Qs) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "A legal minimum price is 6, above equilibrium 5. What imbalance appears?",
              "options": [
                "A surplus: Qs = 6, Qd = 4.",
                "Private buyers automatically buy all 6 supplied units."
              ],
              "answer": 0,
              "feedback": [
                "At the higher price, private buyers demand only 4 units.",
                "Quantity supplied is a plan to sell, not proof of sales. No public purchase is assumed."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Legal price control connects (0, 6) → (10, 6).",
                "instruction": "For “A price floor without public purchase”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Legal price control.",
                    "feedback": "The legal price line lies at P = 6 above equilibrium, showing a binding floor while demand and supply stay fixed."
                  },
                  {
                    "key": "misconception0",
                    "label": "Draw the legal floor below the market-clearing price.",
                    "feedback": "The binding floor is P = 6, above the crossing at P = 5. A floor below equilibrium would not constrain this market."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Quantity demanded (Qd) at (4, 6). Quantity supplied (Qs) at (6, 6). Quantity demanded (Qd) — dashed quantity guide: dashed path (4, 0) → (4, 6). Quantity demanded (Qd) — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Quantity supplied (Qs) — dashed quantity guide: dashed path (6, 0) → (6, 6). Quantity supplied (Qs) — dashed vertical-axis guide: dashed path (0, 6) → (6, 6).",
                "instruction": "For “A price floor without public purchase”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read both demand and supply quantities from the same curve at the chosen price.",
                    "feedback": "Planned buying is read from demand and planned selling from supply. A shortage or surplus exists precisely because these quantities differ at that price."
                  },
                  {
                    "key": "read",
                    "label": "Add Quantity demanded (Qd); Quantity supplied (Qs), with dashed axis-reading guides.",
                    "feedback": "The marked quantities are Qd = 4 and Qs = 6 at the floor, exposing two units of excess supply."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Actual private transactions connects (4, 0) → (4, 6). Excess demand or supply: quantity gap: directed arrow (4, 6.4) → (6, 6.4).",
                "instruction": "For “A price floor without public purchase”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Actual private transactions; Excess demand or supply: quantity gap.",
                    "feedback": "The private-sales line marks Q = 4, constrained by demand; the arrow from 4 to 6 measures unsold supply without assuming government purchases."
                  },
                  {
                    "key": "misconception2",
                    "label": "Draw actual transactions at the larger of Qd and Qs.",
                    "feedback": "Without another buyer or seller, the short side constrains private transactions. A quantity people wish to trade is not automatically a completed sale."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The floor at P = 6 gives surplus 2; actual private sales are 4 without government buying the excess.",
            "explanation": {
              "question": "Which stakeholder conclusion is justified?",
              "options": [
                "Government must purchase the surplus whenever a floor exists.",
                "Sellers receive a higher unit price on private sales, but unsold output and lower sales affect their outcome."
              ],
              "answer": 1,
              "feedback": [
                "A legal minimum price alone contains no government purchase commitment.",
                "The scenario shows private sales only; a purchase programme would be a separate policy."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.7.tax_diagram",
        "scope": "common",
        "title": "Indirect tax diagram and stakeholder effects",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "tax2",
            "title": "A specific tax of 2",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "Areas are illustrative welfare measures under these assumptions; distribution, information and financing costs can change policy judgments.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "supply": "Supply (S)",
              "effectiveSupply": "Effective supply after policy",
              "wedge": "Per-unit policy wedge",
              "buyer": "Buyer price",
              "seller": "Seller net receipt after tax",
              "taxRevenue": "Tax-revenue rectangle",
              "deadweightLoss": "Deadweight-loss triangle",
              "buyerQ": "Buyer price — dashed quantity guide",
              "buyerP": "Buyer price — dashed vertical-axis guide",
              "sellerQ": "Seller net receipt after tax — dashed quantity guide",
              "sellerP": "Seller net receipt after tax — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "A tax of 2 per unit raises effective supply cost. What happens to traded output?",
              "options": [
                "Output rises because the government collects money.",
                "Output falls from 5 to 4."
              ],
              "answer": 1,
              "feedback": [
                "The tax raises the price buyers face and reduces sellers’ net price.",
                "Effective supply is P = Q + 2, crossing demand at buyer price 6."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Effective supply after policy connects (0, 2) → (10, 12).",
                "instruction": "For “A specific tax of 2”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Treat buyer payment and seller receipt as the same price after policy.",
                    "feedback": "The specific tax or subsidy creates a per-unit wedge. Reading the same price for both sides erases the mechanism and mislabels the public rectangle."
                  },
                  {
                    "key": "construct",
                    "label": "Add Effective supply after policy.",
                    "feedback": "The effective supply curve shifts up by 2 to P = Q + 2, because sellers need the tax in addition to their net receipt."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Per-unit policy wedge connects (4, 6) → (4, 4). Buyer price at (4, 6). Seller net receipt after tax at (4, 4). Buyer price — dashed quantity guide: dashed path (4, 0) → (4, 6). Buyer price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Seller net receipt after tax — dashed quantity guide: dashed path (4, 0) → (4, 4). Seller net receipt after tax — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “A specific tax of 2”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Per-unit policy wedge; Buyer price; Seller net receipt after tax, with dashed axis-reading guides.",
                    "feedback": "At Q = 4 the vertical wedge separates buyer price 6 from seller net receipt 4, making the per-unit tax of 2 visible."
                  },
                  {
                    "key": "misconception1",
                    "label": "Put the buyer payment and seller receipt at the same vertical coordinate.",
                    "feedback": "At the traded quantity 4, the buyer pays 6 and the seller keeps 4. Their vertical separation is the tax of 2, not a shortage between two quantities."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Tax-revenue rectangle shaded polygon with vertices (0, 4) → (4, 4) → (4, 6) → (0, 6). Deadweight-loss triangle shaded polygon with vertices (4, 4) → (4, 6) → (5, 5).",
                "instruction": "For “A specific tax of 2”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Call the public payment rectangle the deadweight-loss triangle.",
                    "feedback": "Public revenue or expenditure is a rectangular payment measured by wedge × traded quantity. Deadweight loss is the separate triangular net-surplus change over the distorted output interval."
                  },
                  {
                    "key": "compare",
                    "label": "Add Tax-revenue rectangle; Deadweight-loss triangle.",
                    "feedback": "The rectangle measures tax revenue over the four traded units, while the separate triangle covers lost mutually beneficial trades between Q = 4 and 5."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Buyers pay 6, sellers net 4, Q = 4; the vertical wedge is 2. The rectangle is tax revenue and the triangle marks lost mutually beneficial trades.",
            "explanation": {
              "question": "Which interpretation of the wedge is correct?",
              "options": [
                "The tax separates buyer payment from sellers’ net receipt.",
                "The tax changes only demand because consumers pay it."
              ],
              "answer": 0,
              "feedback": [
                "Both sides bear incidence here: price rises for buyers and net receipt falls for sellers.",
                "Statutory collection does not by itself determine economic incidence."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "What are tax revenue and deadweight loss?",
              "options": [
                "Revenue 12 and loss 2.",
                "Revenue 8 and loss 1."
              ],
              "answer": 1,
              "feedback": [
                "Use taxed quantity 4 for revenue, and a triangle rather than a full rectangle for lost surplus.",
                "Revenue = 4 × 2 = 8; lost surplus = ½ × (5 − 4) × 2 = 1."
              ]
            }
          }
        ]
      },
      {
        "id": "2.7.subsidy_diagram",
        "scope": "common",
        "title": "Subsidy diagram and stakeholder effects",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "subsidy2",
            "title": "A producer subsidy of 2",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "Areas are illustrative welfare measures under these assumptions; distribution, information and financing costs can change policy judgments.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Demand (D) connects (0, 10) → (10, 0). Supply (S) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "demand": "Demand (D)",
              "supply": "Supply (S)",
              "effectiveSupply": "Effective supply after policy",
              "wedge": "Per-unit policy wedge",
              "buyer": "Buyer price",
              "seller": "Seller total receipt including subsidy",
              "subsidyExpenditure": "Public subsidy-expenditure rectangle",
              "deadweightLoss": "Deadweight-loss triangle",
              "buyerQ": "Buyer price — dashed quantity guide",
              "buyerP": "Buyer price — dashed vertical-axis guide",
              "sellerQ": "Seller total receipt including subsidy — dashed quantity guide",
              "sellerP": "Seller total receipt including subsidy — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "A subsidy of 2 per unit lowers effective supply cost to buyers. What happens to traded output?",
              "options": [
                "Output rises from 5 to 6.",
                "Output falls because sellers receive less per unit."
              ],
              "answer": 0,
              "feedback": [
                "Effective supply is P = Q − 2, crossing demand at buyer price 4.",
                "Sellers receive the buyer price plus subsidy, so their receipt is 6."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Effective supply after policy connects (2, 0) → (10, 8).",
                "instruction": "For “A producer subsidy of 2”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Effective supply after policy.",
                    "feedback": "The effective supply curve shifts down by 2 to P = Q − 2 because the subsidy supplements the buyer's payment to sellers."
                  },
                  {
                    "key": "misconception0",
                    "label": "Treat buyer payment and seller receipt as the same price after policy.",
                    "feedback": "The specific tax or subsidy creates a per-unit wedge. Reading the same price for both sides erases the mechanism and mislabels the public rectangle."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Per-unit policy wedge connects (6, 4) → (6, 6). Buyer price at (6, 4). Seller total receipt including subsidy at (6, 6). Buyer price — dashed quantity guide: dashed path (6, 0) → (6, 4). Buyer price — dashed vertical-axis guide: dashed path (0, 4) → (6, 4). Seller total receipt including subsidy — dashed quantity guide: dashed path (6, 0) → (6, 6). Seller total receipt including subsidy — dashed vertical-axis guide: dashed path (0, 6) → (6, 6).",
                "instruction": "For “A producer subsidy of 2”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Put the buyer payment and seller receipt at the same vertical coordinate.",
                    "feedback": "At the traded quantity 6, the buyer pays 4 and the seller receives 6 including subsidy. The vertical gap of 2 is a payment wedge, not an excess-supply quantity gap."
                  },
                  {
                    "key": "read",
                    "label": "Add Per-unit policy wedge; Buyer price; Seller total receipt including subsidy, with dashed axis-reading guides.",
                    "feedback": "At Q = 6 the vertical wedge separates buyer price 4 from seller total receipt 6, showing the subsidy paid on each unit."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Public subsidy-expenditure rectangle shaded polygon with vertices (0, 4) → (6, 4) → (6, 6) → (0, 6). Deadweight-loss triangle shaded polygon with vertices (5, 5) → (6, 4) → (6, 6).",
                "instruction": "For “A producer subsidy of 2”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Public subsidy-expenditure rectangle; Deadweight-loss triangle.",
                    "feedback": "The rectangle measures subsidy expenditure over six units; the separate triangle covers excess units from Q = 5 to 6 whose costs exceed benefits."
                  },
                  {
                    "key": "misconception2",
                    "label": "Call the public payment rectangle the deadweight-loss triangle.",
                    "feedback": "Public revenue or expenditure is a rectangular payment measured by wedge × traded quantity. Deadweight loss is the separate triangular net-surplus change over the distorted output interval."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Buyers pay 4, sellers receive 6, Q = 6; the wedge is 2. The rectangle is public expenditure and the triangle marks extra units whose cost exceeds benefit.",
            "explanation": {
              "question": "Which interpretation of the wedge is correct?",
              "options": [
                "Public expenditure is automatically a net welfare gain.",
                "The subsidy separates buyer payment from sellers’ total receipt."
              ],
              "answer": 1,
              "feedback": [
                "Counting a public payment as a benefit without its financing and distortion costs misstates welfare.",
                "The subsidy finances a transfer and changes production; net welfare also depends on costs and benefits."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "What are subsidy expenditure and deadweight loss?",
              "options": [
                "Expenditure 12 and loss 1.",
                "Expenditure 8 and loss 2."
              ],
              "answer": 0,
              "feedback": [
                "Expenditure = 6 × 2 = 12; loss = ½ × (6 − 5) × 2 = 1.",
                "Use subsidized quantity 6 for spending; the distortion is a triangle over the extra unit."
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "2.8",
    "unit": 2,
    "title": "Externalities and common resources",
    "summary": "When do private decisions impose costs or benefits on others?",
    "question": "When do private decisions impose costs or benefits on others?",
    "scope": "common",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "externality",
        "definition": "A cost or benefit of production or consumption borne by a third party outside the transaction."
      },
      {
        "term": "marginal social cost",
        "definition": "The additional cost to society, including private cost and external effects, of one more unit."
      },
      {
        "term": "marginal social benefit",
        "definition": "The additional benefit to society, including private benefit and external effects, of one more unit."
      },
      {
        "term": "common resource",
        "definition": "A rival resource from which excluding users is difficult."
      }
    ],
    "sections": [
      {
        "id": "externalities",
        "heading": "Four externality cases",
        "body": [
          "An externality is a cost or benefit affecting a third party outside a transaction. Pollution from a factory is a negative production externality: marginal social cost exceeds marginal private cost. Noise from consumption is a negative consumption externality: marginal social benefit is below marginal private benefit. Research spillovers can create a positive production externality: marginal social cost is below marginal private cost. Vaccination can create a positive consumption externality: marginal social benefit exceeds marginal private benefit.",
          "Distinguish whose activity creates the spillover. Factory smoke harms nearby residents during production (MSC>MPC). Loud night-time music harms neighbors during consumption (MSB<MPB). Beekeeping can pollinate another grower’s crop during production (MSC<MPC in the cost-side convention used here). Vaccination can reduce infection risks for others during consumption (MSB>MPB). A price paid by a buyer is not by itself an external cost: it is part of the transaction.",
          "For a cost-side diagram put costs/benefits per unit vertically and output per period horizontally. A negative production externality places MSC above MPC; with MSB=MPB, the private intersection is to the right of the social intersection. For a negative consumption externality put MSB below MPB with MSC=MPC. Positive production places MSC below MPC; positive consumption puts MSB above MPB. Those positive cases have private output below the social optimum."
        ],
        "scope": "common",
        "limitation": "The examples are illustrative; real activities can have several effects."
      },
      {
        "id": "optimum",
        "heading": "Socially efficient output",
        "body": [
          "The social optimum occurs where marginal social benefit equals marginal social cost. In the simple model negative externalities cause overproduction or overconsumption and positive externalities cause too little activity. The welfare loss is the area between social marginal benefit and cost over the units separating market output from the social optimum.",
          "Market participants compare private benefits and costs, while society must include third-party effects. If a polluting activity yields private benefit $12, private cost $8 and external damage $6 on an extra unit, private gain is $4 but social net benefit is $12−$14=−$2. Producing that unit lowers total welfare.",
          "On an externality diagram, mark private output Qm and optimal output Q*. Shade between MSB and MSC only over the quantity gap, rather than the entire external-cost rectangle. That area measures lost potential net benefit in this model. Welfare estimates require money values for effects such as health or biodiversity, which are uncertain."
        ],
        "scope": "common",
        "limitation": "Social costs and benefits are difficult to measure."
      },
      {
        "id": "responses",
        "heading": "Policy and resources",
        "body": [
          "Taxes can internalize external costs and subsidies can encourage activities with external benefits; regulation, information and direct provision can also change outcomes. A merit good may be underconsumed and a demerit good overconsumed, including because of imperfect information. Common resources are rival but hard to exclude users from, creating a risk of overuse; collective rules, monitoring and international cooperation can help, but enforcement is difficult.",
          "A Pigouvian tax aims to make decision makers face marginal external damage at the efficient output. A carbon tax prices emissions and rewards cleaner technology, but measuring emissions, leakage across borders and burdens on low-income users matter. A subsidy can encourage vaccination or cleaner research when extra social benefits are not privately rewarded.",
          "Regulation can cap emissions or require equipment; it may work when monitoring is feasible but may ignore differences in firms’ abatement costs. Education can correct misunderstood risks and shift demand for demerit goods left or merit goods right; information alone may fail when addiction, affordability or other constraints dominate. Public provision can widen access but still needs funding and capacity.",
          "A fish stock is rival because one catch leaves fewer fish for others, and difficult exclusion can permit overuse. Each fisher gains from another catch while the stock loss is shared: individually attractive actions can be collectively unsustainable. Local users may agree quotas, monitor catches and sanction breaches. Shared rules require legitimate participation and workable enforcement.",
          "Tradable permits set an overall emissions allowance and allow firms to trade: firms with low reduction costs can sell permits to those with high costs. The cap gives quantity control, but permit prices and enforcement can be uncertain. International agreements can address cross-border spillovers; free riding, unequal capacities, disputed targets and costly monitoring can weaken cooperation. Compare taxes, caps and collective rules using effectiveness, information needs, distribution and administrative feasibility.",
          "Merit goods are judged underconsumed relative to a socially desirable level; demerit goods are judged overconsumed. Imperfect information about personal benefits or harm can contribute, so these judgments are not identical to the existence of a third-party externality."
        ],
        "scope": "common",
        "limitation": "Policies can misfire if authorities lack information or enforcement capacity."
      },
      {
        "id": "hl",
        "heading": "Welfare loss calculation",
        "body": [
          "If the welfare-loss area is triangular, calculate one half times the quantity gap times the vertical difference between marginal social cost and benefit at the market output.",
          "If Qm−Q*=20 units and the gap between MSC and MSB at Qm is $6, with linear curves meeting at Q*, welfare loss is ½×20×$6=$60 per period. This triangle formula requires the stated geometry; a non-linear gap requires a different area calculation."
        ],
        "scope": "hl",
        "limitation": "The formula assumes straight boundaries and a triangular area."
      }
    ],
    "model": "externality",
    "modelPrompt": "Predict whether private output is above or below the social optimum when a third-party cost is added.",
    "modelAssumption": "Private and social marginal effects can be represented in money; all other market failures are excluded.",
    "modelLimitation": "Damage and spillover benefits are difficult to measure; illustrative curves do not establish actual policy rates.",
    "worked": {
      "prompt": "A factory’s extra unit creates private benefit $12, private cost $8 and third-party damage $6.",
      "steps": [
        "Private net benefit is $12−$8=$4, so the transaction is privately attractive.",
        "Marginal social cost is private cost plus external damage: $8+$6=$14.",
        "Net social benefit is $12−$14=−$2, so that extra unit reduces welfare.",
        "A correctly calibrated external-cost tax would change the private incentive, but setting it requires information about damage."
      ],
      "conclusion": "A negative production externality can make privately attractive output socially excessive."
    },
    "quiz": {
      "question": "Vaccination reduces infection risk for other people. Which representation fits this spillover?",
      "options": [
        "Negative production externality with MSC above MPC.",
        "Positive consumption externality with MSB above MPB.",
        "Positive production externality with MSC below MPC.",
        "No externality because the vaccinated person also benefits."
      ],
      "answer": 1,
      "feedback": [
        "The stated spillover is a benefit from consumption, not damage created in production.",
        "Correct: third-party health protection adds to the recipient’s private benefit.",
        "This is the cost-side convention for production spillovers; the example concerns consuming a vaccine.",
        "Private and external benefits can coexist; a third party still gains outside the transaction."
      ],
      "scope": "common"
    },
    "challenge": {
      "prompt": "Explain why an unregulated fishery may be overused and identify one condition needed for a catch quota to work.",
      "hint": "Connect individual incentives to a shared, rival resource.",
      "modelAnswer": "Fish are rival because one catch reduces the stock available to others. If exclusion is difficult, each fisher gains privately from another catch while sharing the future stock loss with everyone. This can encourage excessive total harvest. A quota can constrain catches, but it needs credible monitoring and enforcement, including cooperation where stocks cross borders.",
      "rubric": [
        "Identify rivalry and difficulty of exclusion.",
        "Explain the individual gain from an additional catch.",
        "Link shared stock costs to excessive aggregate use.",
        "Explain why monitoring or enforcement is needed for an effective quota."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "common"
    },
    "coverage": [
      {
        "id": "2.8.social_optimum_diagram",
        "point": "MSB equals MSC, allocative efficiency and maximum social surplus diagram",
        "status": "taught",
        "evidence": "diagram:2.8.social_optimum_diagram"
      },
      {
        "id": "2.8.negative_production_diagram",
        "point": "Negative production externality and welfare loss diagram",
        "status": "taught",
        "evidence": "diagram:2.8.negative_production_diagram"
      },
      {
        "id": "2.8.negative_consumption_diagram",
        "point": "Negative consumption externality and welfare loss diagram",
        "status": "taught",
        "evidence": "diagram:2.8.negative_consumption_diagram"
      },
      {
        "id": "2.8.positive_production_diagram",
        "point": "Positive production externality and welfare loss diagram",
        "status": "taught",
        "evidence": "diagram:2.8.positive_production_diagram"
      },
      {
        "id": "2.8.positive_consumption_diagram",
        "point": "Positive consumption externality and welfare loss diagram",
        "status": "taught",
        "evidence": "diagram:2.8.positive_consumption_diagram"
      },
      {
        "id": "2.8.merit_demerit",
        "point": "Merit and demerit goods",
        "status": "taught",
        "evidence": "section:responses"
      },
      {
        "id": "2.8.common_resources",
        "point": "Rivalry, non-excludability, commons tragedy and unsustainable production",
        "status": "taught",
        "evidence": "section:responses"
      },
      {
        "id": "2.8.welfare_calculation_hl",
        "point": "Calculate welfare loss from a diagram",
        "status": "summary",
        "evidence": "section:hl"
      },
      {
        "id": "2.8.pigouvian_diagram",
        "point": "Pigouvian tax response diagram",
        "status": "taught",
        "evidence": "diagram:2.8.pigouvian_diagram"
      },
      {
        "id": "2.8.carbon_diagram",
        "point": "Carbon tax effects on a polluting industry diagram",
        "status": "taught",
        "evidence": "diagram:2.8.carbon_diagram"
      },
      {
        "id": "2.8.subsidy_diagram",
        "point": "Subsidy response diagram",
        "status": "taught",
        "evidence": "diagram:2.8.subsidy_diagram"
      },
      {
        "id": "2.8.regulation_diagram",
        "point": "Legislation and regulation response diagram",
        "status": "taught",
        "evidence": "diagram:2.8.regulation_diagram"
      },
      {
        "id": "2.8.education_diagram",
        "point": "Education response diagram",
        "status": "taught",
        "evidence": "diagram:2.8.education_diagram"
      },
      {
        "id": "2.8.other_responses",
        "point": "Tradable permits, international agreements, collective self-governance and government provision",
        "status": "taught",
        "evidence": "section:responses"
      },
      {
        "id": "2.8.policy_evaluation",
        "point": "Measurement, effectiveness and stakeholder consequences of interventions and resource management",
        "status": "taught",
        "evidence": "section:responses"
      },
      {
        "id": "2.8.cooperation",
        "point": "International cooperation, global sustainability, monitoring and enforcement challenges",
        "status": "taught",
        "evidence": "section:responses"
      }
    ],
    "diagrams": [
      {
        "id": "2.8.social_optimum_diagram",
        "scope": "common",
        "title": "MSB equals MSC, allocative efficiency and maximum social surplus diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "optimum",
            "title": "Social marginal benefit meets social marginal cost",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "Areas are illustrative welfare measures under these assumptions; distribution, information and financing costs can change policy judgments.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal social benefit (MSB) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "optimum": "Social optimum (Q*)",
              "belowOptimum": "MSB at Q = 4",
              "aboveOptimum": "MSB at Q = 6",
              "netBenefit": "Total net-social-benefit area",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At Q = 4, MSB = 6 and MSC = 4. Would one more small unit add net social benefit?",
              "options": [
                "No: any production below Q = 5 already has excessive social cost.",
                "Yes: marginal benefit exceeds marginal cost."
              ],
              "answer": 1,
              "feedback": [
                "Below the crossing, MSB is above MSC; producing more can increase net benefit.",
                "At Q = 4 the marginal net benefit is positive, 6 − 4 = 2."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social cost (MSC) connects (0, 0) → (10, 10).",
                "instruction": "For “Social marginal benefit meets social marginal cost”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Set the social optimum where total benefit is zero.",
                    "feedback": "The optimum equates marginal social benefit and marginal social cost; positive total net benefit can remain."
                  },
                  {
                    "key": "construct",
                    "label": "Add Marginal social cost (MSC).",
                    "feedback": "MSC rises along P = Q against the existing falling MSB curve, supplying the social marginal-cost comparison needed to judge each extra unit."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Social optimum (Q*) at (5, 5). MSB at Q = 4 at (4, 6). MSB at Q = 6 at (6, 4). Social optimum (Q*) — dashed quantity guide: dashed path (5, 0) → (5, 5). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5).",
                "instruction": "For “Social marginal benefit meets social marginal cost”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Social optimum (Q*); MSB at Q = 4; MSB at Q = 6, with dashed axis-reading guides.",
                    "feedback": "The crossing marks Q* = 5; the MSB points at Q = 4 and 6 allow comparison with MSC, showing positive then negative marginal net benefit."
                  },
                  {
                    "key": "misconception1",
                    "label": "Choose the largest MSB value as the socially optimal quantity.",
                    "feedback": "High marginal benefit alone is insufficient: the optimum balances MSB against MSC. At their crossing, the marginal net benefit switches from positive to negative."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Total net-social-benefit area shaded polygon with vertices (0, 0) → (0, 10) → (5, 5).",
                "instruction": "For “Social marginal benefit meets social marginal cost”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Shade the whole price-times-quantity rectangle as net welfare.",
                    "feedback": "Total net social benefit is the area between MSB and MSC up to the efficient quantity. A price-times-quantity rectangle measures expenditure, not benefits less social costs."
                  },
                  {
                    "key": "compare",
                    "label": "Add Total net-social-benefit area.",
                    "feedback": "The triangle between MSB and MSC up to Q = 5 sums positive marginal net benefits, representing maximum total net social benefit."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "At Q = 4, MSB − MSC = 2; at Q = 6 it is −2. The triangle between MSB and MSC up to Q* = 5 represents maximum total net benefit.",
            "explanation": {
              "question": "Why stop expanding output at Q* = 5?",
              "options": [
                "Beyond Q*, the next unit costs society more than its benefit.",
                "Because total social benefit becomes zero at Q*."
              ],
              "answer": 0,
              "feedback": [
                "Equality of marginal benefit and cost marks the switch from positive to negative marginal net benefit.",
                "Total benefits remain positive; the optimum concerns the marginal comparison, not zero total benefit."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "What total net social benefit is shaded through Q = 5?",
              "options": [
                "50 monetary units per period.",
                "25 monetary units per period."
              ],
              "answer": 1,
              "feedback": [
                "Using the full 5 × 10 rectangle ignores the narrowing gap between MSB and MSC.",
                "The triangle has base 5 and height 10: ½ × 5 × 10 = 25."
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.negative_production_diagram",
        "scope": "common",
        "title": "Negative production externality and welfare loss diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "negativeProduction",
            "title": "Negative production externality",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "The marginal external effect is assumed constant at 2. The loss is a net welfare area, not the total external cost or benefit.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal private benefit (MPB) connects (0, 10) → (10, 0). Marginal private cost (MPC) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "mpb": "Marginal private benefit (MPB)",
              "mpc": "Marginal private cost (MPC)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "externalWedge": "Marginal external-effect wedge",
              "market": "Private market outcome (Qm)",
              "optimum": "Social optimum (Q*)",
              "initialLoss": "Before-policy welfare-loss triangle",
              "marketQ": "Private market outcome (Qm) — dashed quantity guide",
              "marketP": "Private market outcome (Qm) — dashed vertical-axis guide",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "If private decision-makers ignore this external cost, how does market quantity compare with the social optimum?",
              "options": [
                "The market produces or consumes too much: Qm = 5 > Q* = 4.",
                "The market produces too little because private decisions count every social cost."
              ],
              "answer": 0,
              "feedback": [
                "MSC = MPC + 2; the private crossing differs from the social crossing.",
                "Private decisions omit the external damage and therefore expand beyond the social optimum."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social benefit (MSB) connects (0, 10) → (10, 0). Marginal social cost (MSC) connects (0, 2) → (10, 12).",
                "instruction": "For “Negative production externality”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal social benefit (MSB); Marginal social cost (MSC).",
                    "feedback": "MSC lies 2 above MPC while MSB coincides with MPB, locating the production external cost on the cost side."
                  },
                  {
                    "key": "misconception0",
                    "label": "Represent the production externality solely by shifting the benefit curve.",
                    "feedback": "This production-side external effect separates MPC and MSC; the benefit curves coincide. Keep the cost wedge and private/social crossings distinct."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Marginal external-effect wedge connects (4, 4) → (4, 6). Private market outcome (Qm) at (5, 5). Social optimum (Q*) at (4, 6). Private market outcome (Qm) — dashed quantity guide: dashed path (5, 0) → (5, 5). Private market outcome (Qm) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5). Social optimum (Q*) — dashed quantity guide: dashed path (4, 0) → (4, 6). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 6) → (4, 6).",
                "instruction": "For “Negative production externality”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Use only the private crossing as the social optimum.",
                    "feedback": "The private outcome compares MPB with MPC; the social optimum compares MSB with MSC. An unpriced external effect separates those comparisons."
                  },
                  {
                    "key": "read",
                    "label": "Add Marginal external-effect wedge; Private market outcome (Qm); Social optimum (Q*), with dashed axis-reading guides.",
                    "feedback": "The wedge at Q = 4 measures external cost 2; guides distinguish private output 5 from socially efficient output 4."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Before-policy welfare-loss triangle shaded polygon with vertices (4, 6) → (5, 5) → (5, 7).",
                "instruction": "For “Negative production externality”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Before-policy welfare-loss triangle.",
                    "feedback": "The triangle between MSC and MSB over Q = 4 to 5 represents costs exceeding benefits on excessive units, not all external costs."
                  },
                  {
                    "key": "misconception2",
                    "label": "Label the entire marginal external-effect rectangle as deadweight loss.",
                    "feedback": "The external-effect wedge applies to units produced, but deadweight loss measures the net surplus forgone over the inefficient quantity interval; its boundary is the social marginal curves."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Private Qm = 5 and social Q* = 4. The loss triangle spans excessive units from 4 to 5. ",
            "explanation": {
              "question": "Which curve relationship identifies this particular externality?",
              "options": [
                "The external effect shifts the benefit curve instead of cost.",
                "MSC = MPC + 2."
              ],
              "answer": 1,
              "feedback": [
                "Consumption externalities use a benefit wedge; this is the production-cost case.",
                "The external effect originates in production, so distinguish private and social marginal costs; benefit curves coincide."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "What is the welfare loss between market and socially optimal quantities?",
              "options": [
                "1 monetary unit per period.",
                "2 monetary units per period."
              ],
              "answer": 0,
              "feedback": [
                "The triangle is ½ × quantity gap 1 × marginal gap 2 = 1.",
                "The marginal gap narrows to zero at the optimum, so use a triangle, not a rectangle."
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.negative_consumption_diagram",
        "scope": "common",
        "title": "Negative consumption externality and welfare loss diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "negativeConsumption",
            "title": "Negative consumption externality",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "The marginal external effect is assumed constant at 2. The loss is a net welfare area, not the total external cost or benefit.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal private benefit (MPB) connects (0, 10) → (10, 0). Marginal private cost (MPC) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "mpb": "Marginal private benefit (MPB)",
              "mpc": "Marginal private cost (MPC)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "externalWedge": "Marginal external-effect wedge",
              "market": "Private market outcome (Qm)",
              "optimum": "Social optimum (Q*)",
              "initialLoss": "Before-policy welfare-loss triangle",
              "marketQ": "Private market outcome (Qm) — dashed quantity guide",
              "marketP": "Private market outcome (Qm) — dashed vertical-axis guide",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "If private decision-makers ignore this external cost, how does market quantity compare with the social optimum?",
              "options": [
                "The market produces too little because private decisions count every social cost.",
                "The market produces or consumes too much: Qm = 5 > Q* = 4."
              ],
              "answer": 1,
              "feedback": [
                "Private decisions omit the external damage and therefore expand beyond the social optimum.",
                "MSB = MPB − 2; the private crossing differs from the social crossing."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social benefit (MSB) connects (0, 8) → (8, 0). Marginal social cost (MSC) connects (0, 0) → (10, 10).",
                "instruction": "For “Negative consumption externality”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Represent the consumption externality solely by shifting the cost curve.",
                    "feedback": "This consumption-side external effect separates MPB and MSB; MPC and MSC coincide. Keep the benefit wedge and private/social crossings distinct."
                  },
                  {
                    "key": "construct",
                    "label": "Add Marginal social benefit (MSB); Marginal social cost (MSC).",
                    "feedback": "MSB lies 2 below MPB while MSC coincides with MPC, locating the consumption external cost on the benefit side."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Marginal external-effect wedge connects (4, 6) → (4, 4). Private market outcome (Qm) at (5, 5). Social optimum (Q*) at (4, 4). Private market outcome (Qm) — dashed quantity guide: dashed path (5, 0) → (5, 5). Private market outcome (Qm) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5). Social optimum (Q*) — dashed quantity guide: dashed path (4, 0) → (4, 4). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 4) → (4, 4).",
                "instruction": "For “Negative consumption externality”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Marginal external-effect wedge; Private market outcome (Qm); Social optimum (Q*), with dashed axis-reading guides.",
                    "feedback": "The downward wedge at Q = 4 shows social benefit 2 below private benefit; the marked crossings distinguish Qm = 5 from Q* = 4."
                  },
                  {
                    "key": "misconception1",
                    "label": "Use only the private crossing as the social optimum.",
                    "feedback": "The private outcome compares MPB with MPC; the social optimum compares MSB with MSC. An unpriced external effect separates those comparisons."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Before-policy welfare-loss triangle shaded polygon with vertices (4, 4) → (5, 3) → (5, 5).",
                "instruction": "For “Negative consumption externality”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Label the entire marginal external-effect rectangle as deadweight loss.",
                    "feedback": "The external-effect wedge applies to units produced, but deadweight loss measures the net surplus forgone over the inefficient quantity interval; its boundary is the social marginal curves."
                  },
                  {
                    "key": "compare",
                    "label": "Add Before-policy welfare-loss triangle.",
                    "feedback": "The triangle between MSC and MSB over Q = 4 to 5 measures net welfare lost from overconsumption."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Private Qm = 5 and social Q* = 4. The loss triangle spans excessive units from 4 to 5. ",
            "explanation": {
              "question": "Which curve relationship identifies this particular externality?",
              "options": [
                "MSB = MPB − 2.",
                "The external effect shifts the cost curve instead of benefit."
              ],
              "answer": 0,
              "feedback": [
                "The external effect originates in consumption, so distinguish private and social marginal benefits; cost curves coincide.",
                "Production externalities use a cost wedge; this is the consumption-benefit case."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "What is the welfare loss between market and socially optimal quantities?",
              "options": [
                "2 monetary units per period.",
                "1 monetary unit per period."
              ],
              "answer": 1,
              "feedback": [
                "The marginal gap narrows to zero at the optimum, so use a triangle, not a rectangle.",
                "The triangle is ½ × quantity gap 1 × marginal gap 2 = 1."
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.positive_production_diagram",
        "scope": "common",
        "title": "Positive production externality and welfare loss diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "positiveProduction",
            "title": "Positive production externality",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "The marginal external effect is assumed constant at 2. The loss is a net welfare area, not the total external cost or benefit.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal private benefit (MPB) connects (0, 10) → (10, 0). Marginal private cost (MPC) connects (0, 2) → (10, 12).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "mpb": "Marginal private benefit (MPB)",
              "mpc": "Marginal private cost (MPC)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "externalWedge": "Marginal external-effect wedge",
              "market": "Private market outcome (Qm)",
              "optimum": "Social optimum (Q*)",
              "initialLoss": "Before-policy welfare-loss triangle",
              "marketQ": "Private market outcome (Qm) — dashed quantity guide",
              "marketP": "Private market outcome (Qm) — dashed vertical-axis guide",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "If private decision-makers ignore this external benefit, how does market quantity compare with the social optimum?",
              "options": [
                "The market produces or consumes too little: Qm = 4 < Q* = 5.",
                "The market produces too much because social benefit is smaller."
              ],
              "answer": 0,
              "feedback": [
                "MSC = MPC − 2; the private crossing differs from the social crossing.",
                "The unpriced benefit makes the social case for additional output stronger than the private case."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social benefit (MSB) connects (0, 10) → (10, 0). Marginal social cost (MSC) connects (0, 0) → (10, 10).",
                "instruction": "For “Positive production externality”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal social benefit (MSB); Marginal social cost (MSC).",
                    "feedback": "MSC lies 2 below MPC and MSB coincides with MPB: the production external benefit lowers social cost relative to private cost."
                  },
                  {
                    "key": "misconception0",
                    "label": "Represent the production externality solely by shifting the benefit curve.",
                    "feedback": "This production-side external effect separates MPC and MSC; the benefit curves coincide. Keep the cost wedge and private/social crossings distinct."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Marginal external-effect wedge connects (5, 7) → (5, 5). Private market outcome (Qm) at (4, 6). Social optimum (Q*) at (5, 5). Private market outcome (Qm) — dashed quantity guide: dashed path (4, 0) → (4, 6). Private market outcome (Qm) — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Social optimum (Q*) — dashed quantity guide: dashed path (5, 0) → (5, 5). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5).",
                "instruction": "For “Positive production externality”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Use only the private crossing as the social optimum.",
                    "feedback": "The private outcome compares MPB with MPC; the social optimum compares MSB with MSC. An unpriced external effect separates those comparisons."
                  },
                  {
                    "key": "read",
                    "label": "Add Marginal external-effect wedge; Private market outcome (Qm); Social optimum (Q*), with dashed axis-reading guides.",
                    "feedback": "The wedge at Q = 5 runs from MPC = 7 to MSC = 5, while the guides separate private output 4 from social output 5."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Before-policy welfare-loss triangle shaded polygon with vertices (4, 4) → (4, 6) → (5, 5).",
                "instruction": "For “Positive production externality”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Before-policy welfare-loss triangle.",
                    "feedback": "The triangle between MSB and MSC over the missing units from Q = 4 to 5 represents beneficial production forgone."
                  },
                  {
                    "key": "misconception2",
                    "label": "Label the entire marginal external-effect rectangle as deadweight loss.",
                    "feedback": "The external-effect wedge applies to units produced, but deadweight loss measures the net surplus forgone over the inefficient quantity interval; its boundary is the social marginal curves."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Private Qm = 4 and social Q* = 5. The loss triangle spans the missing beneficial units from 4 to 5. ",
            "explanation": {
              "question": "Which curve relationship identifies this particular externality?",
              "options": [
                "The external effect shifts the benefit curve instead of cost.",
                "MSC = MPC − 2."
              ],
              "answer": 1,
              "feedback": [
                "Consumption externalities use a benefit wedge; this is the production-cost case.",
                "The external effect originates in production, so distinguish private and social marginal costs; benefit curves coincide."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "What is the welfare loss between market and socially optimal quantities?",
              "options": [
                "1 monetary unit per period.",
                "2 monetary units per period."
              ],
              "answer": 0,
              "feedback": [
                "The triangle is ½ × quantity gap 1 × marginal gap 2 = 1.",
                "The marginal gap narrows to zero at the optimum, so use a triangle, not a rectangle."
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.positive_consumption_diagram",
        "scope": "common",
        "title": "Positive consumption externality and welfare loss diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "positiveConsumption",
            "title": "Positive consumption externality",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "The marginal external effect is assumed constant at 2. The loss is a net welfare area, not the total external cost or benefit.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal private benefit (MPB) connects (0, 8) → (8, 0). Marginal private cost (MPC) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "mpb": "Marginal private benefit (MPB)",
              "mpc": "Marginal private cost (MPC)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "externalWedge": "Marginal external-effect wedge",
              "market": "Private market outcome (Qm)",
              "optimum": "Social optimum (Q*)",
              "initialLoss": "Before-policy welfare-loss triangle",
              "marketQ": "Private market outcome (Qm) — dashed quantity guide",
              "marketP": "Private market outcome (Qm) — dashed vertical-axis guide",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "If private decision-makers ignore this external benefit, how does market quantity compare with the social optimum?",
              "options": [
                "The market produces too much because social benefit is smaller.",
                "The market produces or consumes too little: Qm = 4 < Q* = 5."
              ],
              "answer": 1,
              "feedback": [
                "The unpriced benefit makes the social case for additional output stronger than the private case.",
                "MSB = MPB + 2; the private crossing differs from the social crossing."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social benefit (MSB) connects (0, 10) → (10, 0). Marginal social cost (MSC) connects (0, 0) → (10, 10).",
                "instruction": "For “Positive consumption externality”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Represent the consumption externality solely by shifting the cost curve.",
                    "feedback": "This consumption-side external effect separates MPB and MSB; MPC and MSC coincide. Keep the benefit wedge and private/social crossings distinct."
                  },
                  {
                    "key": "construct",
                    "label": "Add Marginal social benefit (MSB); Marginal social cost (MSC).",
                    "feedback": "MSB lies 2 above MPB while MSC coincides with MPC, placing the consumption external benefit on the benefit side."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Marginal external-effect wedge connects (5, 3) → (5, 5). Private market outcome (Qm) at (4, 4). Social optimum (Q*) at (5, 5). Private market outcome (Qm) — dashed quantity guide: dashed path (4, 0) → (4, 4). Private market outcome (Qm) — dashed vertical-axis guide: dashed path (0, 4) → (4, 4). Social optimum (Q*) — dashed quantity guide: dashed path (5, 0) → (5, 5). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5).",
                "instruction": "For “Positive consumption externality”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Marginal external-effect wedge; Private market outcome (Qm); Social optimum (Q*), with dashed axis-reading guides.",
                    "feedback": "The upward wedge at Q = 5 shows MSB exceeding MPB by 2; the marked crossings show private quantity 4 below social quantity 5."
                  },
                  {
                    "key": "misconception1",
                    "label": "Use only the private crossing as the social optimum.",
                    "feedback": "The private outcome compares MPB with MPC; the social optimum compares MSB with MSC. An unpriced external effect separates those comparisons."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Before-policy welfare-loss triangle shaded polygon with vertices (4, 4) → (4, 6) → (5, 5).",
                "instruction": "For “Positive consumption externality”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Label the entire marginal external-effect rectangle as deadweight loss.",
                    "feedback": "The external-effect wedge applies to units produced, but deadweight loss measures the net surplus forgone over the inefficient quantity interval; its boundary is the social marginal curves."
                  },
                  {
                    "key": "compare",
                    "label": "Add Before-policy welfare-loss triangle.",
                    "feedback": "The triangle over Q = 4 to 5 measures the social net benefits forgone because private consumption is too low."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Private Qm = 4 and social Q* = 5. The loss triangle spans the missing beneficial units from 4 to 5. ",
            "explanation": {
              "question": "Which curve relationship identifies this particular externality?",
              "options": [
                "MSB = MPB + 2.",
                "The external effect shifts the cost curve instead of benefit."
              ],
              "answer": 0,
              "feedback": [
                "The external effect originates in consumption, so distinguish private and social marginal benefits; cost curves coincide.",
                "Production externalities use a cost wedge; this is the consumption-benefit case."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "What is the welfare loss between market and socially optimal quantities?",
              "options": [
                "2 monetary units per period.",
                "1 monetary unit per period."
              ],
              "answer": 1,
              "feedback": [
                "The marginal gap narrows to zero at the optimum, so use a triangle, not a rectangle.",
                "The triangle is ½ × quantity gap 1 × marginal gap 2 = 1."
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.pigouvian_diagram",
        "scope": "common",
        "title": "Pigouvian tax response diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "optimalTax",
            "title": "Align private incentives with social costs",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "Accurate marginal-damage information and enforcement are assumed. Revenue use and administrative costs may affect overall welfare.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal private benefit (MPB) connects (0, 10) → (10, 0). Marginal private cost (MPC) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "mpb": "Marginal private benefit (MPB)",
              "mpc": "Marginal private cost (MPC)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "externalWedge": "Marginal external-effect wedge",
              "effectiveSupply": "Effective supply after policy",
              "policyWedge": "Per-unit corrective-policy wedge",
              "market": "Private market outcome (Qm)",
              "optimum": "Social optimum (Q*)",
              "initialLoss": "Before-policy welfare-loss triangle",
              "taxRevenue": "Tax-revenue rectangle",
              "marketQ": "Private market outcome (Qm) — dashed quantity guide",
              "marketP": "Private market outcome (Qm) — dashed vertical-axis guide",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "The external marginal cost is 2. What happens if a fully enforced tax of 2 is added to MPC?",
              "options": [
                "Output falls from Qm = 5 to Q* = 4.",
                "Output remains 5 because a tax cannot affect firms’ marginal incentives."
              ],
              "answer": 0,
              "feedback": [
                "The effective supply MPC + 2 coincides with MSC; its crossing with demand is Q = 4.",
                "A per-unit tax changes the cost of each additional unit and therefore the private profit incentive."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social benefit (MSB) connects (0, 10) → (10, 0). Marginal social cost (MSC) connects (0, 2) → (10, 12).",
                "instruction": "Which social marginal curves establish the before-policy comparison?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal social benefit (MSB); Marginal social cost (MSC).",
                    "feedback": "MSC is drawn 2 above MPC while MSB equals MPB, exposing the production external cost before any corrective supply curve is added."
                  },
                  {
                    "key": "misconception0",
                    "label": "Represent the production externality solely by shifting the benefit curve.",
                    "feedback": "This production-side external effect separates MPC and MSC; the benefit curves coincide. Keep the cost wedge and private/social crossings distinct."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Marginal external-effect wedge connects (4, 4) → (4, 6). Private market outcome (Qm) at (5, 5). Social optimum (Q*) at (4, 6). Private market outcome (Qm) — dashed quantity guide: dashed path (5, 0) → (5, 5). Private market outcome (Qm) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5). Social optimum (Q*) — dashed quantity guide: dashed path (4, 0) → (4, 6). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 6) → (4, 6).",
                "instruction": "For “Align private incentives with social costs”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Use only the private crossing as the social optimum.",
                    "feedback": "The private outcome compares MPB with MPC; the social optimum compares MSB with MSC. An unpriced external effect separates those comparisons."
                  },
                  {
                    "key": "read",
                    "label": "Add Marginal external-effect wedge; Private market outcome (Qm); Social optimum (Q*), with dashed axis-reading guides.",
                    "feedback": "The wedge measures external cost 2 at Q* = 4, and the two crossings show uncorrected private output 5 exceeding efficient output 4."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Effective supply after policy connects (0, 2) → (10, 12). Per-unit corrective-policy wedge connects (4, 4) → (4, 6). Before-policy welfare-loss triangle shaded polygon with vertices (4, 6) → (5, 5) → (5, 7). Tax-revenue rectangle shaded polygon with vertices (0, 4) → (4, 4) → (4, 6) → (0, 6).",
                "instruction": "For “Align private incentives with social costs”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Effective supply after policy; Per-unit corrective-policy wedge; Before-policy welfare-loss triangle; Tax-revenue rectangle.",
                    "feedback": "The tax shifts effective supply onto MSC and makes the buyer–seller wedge 2 at Q = 4; its revenue rectangle is distinct from the before-policy loss triangle, whose remaining loss is eliminated."
                  },
                  {
                    "key": "misconception2",
                    "label": "Label the entire marginal external-effect rectangle as deadweight loss.",
                    "feedback": "The external-effect wedge applies to units produced, but deadweight loss measures the net surplus forgone over the inefficient quantity interval; its boundary is the social marginal curves."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Initial private output is 5. The corrective supply coincides with MSC and yields buyer price 6, seller net price 4 and Q = 4. The initial loss triangle is a before-policy comparison; under the stated correction its remaining loss is zero.",
            "explanation": {
              "question": "What makes this example corrective?",
              "options": [
                "Any positive tax is automatically optimal.",
                "The tax equals the marginal external cost at the social optimum."
              ],
              "answer": 1,
              "feedback": [
                "A tax that is too small or too large need not produce Q*. The damage estimate and compliance matter.",
                "Matching the external wedge aligns the private marginal decision with the social marginal comparison."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "With Q = 4 and a per-unit tax of 2, what revenue is collected?",
              "options": [
                "8 monetary units per period.",
                "10 monetary units per period."
              ],
              "answer": 0,
              "feedback": [
                "Revenue = taxed output 4 × tax 2 = 8; the initial welfare loss of 1 is removed under the assumptions.",
                "Using old output 5 ignores the contraction caused by the tax."
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.carbon_diagram",
        "scope": "common",
        "title": "Carbon tax effects on a polluting industry diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "industryTax",
            "title": "A tax in one polluting industry",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "This is an industry-output graph, not an economy-wide emissions model. Actual emissions depend on intensity, technology and substitution; a real tax may not match damage.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal private benefit (MPB) connects (0, 10) → (10, 0). Marginal private cost (MPC) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "mpb": "Marginal private benefit (MPB)",
              "mpc": "Marginal private cost (MPC)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "externalWedge": "Marginal external-effect wedge",
              "effectiveSupply": "Effective supply after policy",
              "policyWedge": "Per-unit corrective-policy wedge",
              "market": "Private market outcome (Qm)",
              "optimum": "Social optimum (Q*)",
              "initialLoss": "Before-policy welfare-loss triangle",
              "taxRevenue": "Tax-revenue rectangle",
              "marketQ": "Private market outcome (Qm) — dashed quantity guide",
              "marketP": "Private market outcome (Qm) — dashed vertical-axis guide",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "A tax of 2 per unit is introduced in the illustrated polluting industry. What happens to its output?",
              "options": [
                "Output remains 5 because a tax cannot affect firms’ marginal incentives.",
                "Output falls from Qm = 5 to Q* = 4."
              ],
              "answer": 1,
              "feedback": [
                "A per-unit tax changes the cost of each additional unit and therefore the private profit incentive.",
                "The effective supply MPC + 2 coincides with MSC; its crossing with demand is Q = 4."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social benefit (MSB) connects (0, 10) → (10, 0). Marginal social cost (MSC) connects (0, 2) → (10, 12).",
                "instruction": "Which social marginal curves establish the before-policy comparison?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Represent the production externality solely by shifting the benefit curve.",
                    "feedback": "This production-side external effect separates MPC and MSC; the benefit curves coincide. Keep the cost wedge and private/social crossings distinct."
                  },
                  {
                    "key": "construct",
                    "label": "Add Marginal social benefit (MSB); Marginal social cost (MSC).",
                    "feedback": "The social curves place MSC 2 above private production cost while MSB equals private benefit, identifying the industry's unpriced external cost."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Marginal external-effect wedge connects (4, 4) → (4, 6). Private market outcome (Qm) at (5, 5). Social optimum (Q*) at (4, 6). Private market outcome (Qm) — dashed quantity guide: dashed path (5, 0) → (5, 5). Private market outcome (Qm) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5). Social optimum (Q*) — dashed quantity guide: dashed path (4, 0) → (4, 6). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 6) → (4, 6).",
                "instruction": "For “A tax in one polluting industry”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Marginal external-effect wedge; Private market outcome (Qm); Social optimum (Q*), with dashed axis-reading guides.",
                    "feedback": "The wedge and guides show the uncorrected industry output 5 and efficient output 4, separated by external marginal cost 2."
                  },
                  {
                    "key": "misconception1",
                    "label": "Use only the private crossing as the social optimum.",
                    "feedback": "The private outcome compares MPB with MPC; the social optimum compares MSB with MSC. An unpriced external effect separates those comparisons."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Effective supply after policy connects (0, 2) → (10, 12). Per-unit corrective-policy wedge connects (4, 4) → (4, 6). Before-policy welfare-loss triangle shaded polygon with vertices (4, 6) → (5, 5) → (5, 7). Tax-revenue rectangle shaded polygon with vertices (0, 4) → (4, 4) → (4, 6) → (0, 6).",
                "instruction": "For “A tax in one polluting industry”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Label the entire marginal external-effect rectangle as deadweight loss.",
                    "feedback": "The external-effect wedge applies to units produced, but deadweight loss measures the net surplus forgone over the inefficient quantity interval; its boundary is the social marginal curves."
                  },
                  {
                    "key": "compare",
                    "label": "Add Effective supply after policy; Per-unit corrective-policy wedge; Before-policy welfare-loss triangle; Tax-revenue rectangle.",
                    "feedback": "The tax aligns effective supply with MSC at Q = 4 and creates the revenue rectangle; the shaded loss triangle is the removed before-tax loss, while lower output alone does not quantify emissions."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Initial private output is 5. The corrective supply coincides with MSC and yields buyer price 6, seller net price 4 and Q = 4. The initial loss triangle is a before-policy comparison; under the stated correction its remaining loss is zero.",
            "explanation": {
              "question": "What makes this example corrective?",
              "options": [
                "The assumed tax matches marginal external damage per unit of industry output.",
                "Any positive tax is automatically optimal."
              ],
              "answer": 0,
              "feedback": [
                "Matching the external wedge aligns the private marginal decision with the social marginal comparison.",
                "A tax that is too small or too large need not produce Q*. The damage estimate and compliance matter."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "With Q = 4 and a per-unit tax of 2, what revenue is collected?",
              "options": [
                "10 monetary units per period.",
                "8 monetary units per period."
              ],
              "answer": 1,
              "feedback": [
                "Using old output 5 ignores the contraction caused by the tax.",
                "Revenue = taxed output 4 × tax 2 = 8; the initial welfare loss of 1 is removed under the assumptions."
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.subsidy_diagram",
        "scope": "common",
        "title": "Subsidy response diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "producerSubsidy",
            "title": "Correct a positive production externality",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "This is explicitly a producer subsidy for positive production. Financing costs and accurate calibration matter; a consumer subsidy for positive consumption needs a benefit-side wedge.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal private benefit (MPB) connects (0, 10) → (10, 0). Marginal private cost (MPC) connects (0, 2) → (10, 12).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "mpb": "Marginal private benefit (MPB)",
              "mpc": "Marginal private cost (MPC)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "externalWedge": "Marginal external-effect wedge",
              "effectiveSupply": "Effective supply after policy",
              "policyWedge": "Per-unit corrective-policy wedge",
              "market": "Private market outcome (Qm)",
              "optimum": "Social optimum (Q*)",
              "initialLoss": "Before-policy welfare-loss triangle",
              "subsidyExpenditure": "Public subsidy-expenditure rectangle",
              "marketQ": "Private market outcome (Qm) — dashed quantity guide",
              "marketP": "Private market outcome (Qm) — dashed vertical-axis guide",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "MPC = Q + 2 while MSC = Q. What does a producer subsidy of 2 do to effective supply?",
              "options": [
                "It lowers effective supply to MSC and expands Q from 4 to 5.",
                "It shifts the benefit curve down and contracts Q."
              ],
              "answer": 0,
              "feedback": [
                "MPC − subsidy = Q, matching the social marginal cost.",
                "This is a producer-side incentive; the demand curve is unchanged."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social benefit (MSB) connects (0, 10) → (10, 0). Marginal social cost (MSC) connects (0, 0) → (10, 10).",
                "instruction": "Which social marginal curves establish the before-policy comparison?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal social benefit (MSB); Marginal social cost (MSC).",
                    "feedback": "MSC lies 2 below MPC while MSB equals MPB, revealing the production external benefit before the subsidy is introduced."
                  },
                  {
                    "key": "misconception0",
                    "label": "Represent the production externality solely by shifting the benefit curve.",
                    "feedback": "This production-side external effect separates MPC and MSC; the benefit curves coincide. Keep the cost wedge and private/social crossings distinct."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Marginal external-effect wedge connects (5, 7) → (5, 5). Private market outcome (Qm) at (4, 6). Social optimum (Q*) at (5, 5). Private market outcome (Qm) — dashed quantity guide: dashed path (4, 0) → (4, 6). Private market outcome (Qm) — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Social optimum (Q*) — dashed quantity guide: dashed path (5, 0) → (5, 5). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5).",
                "instruction": "For “Correct a positive production externality”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Use only the private crossing as the social optimum.",
                    "feedback": "The private outcome compares MPB with MPC; the social optimum compares MSB with MSC. An unpriced external effect separates those comparisons."
                  },
                  {
                    "key": "read",
                    "label": "Add Marginal external-effect wedge; Private market outcome (Qm); Social optimum (Q*), with dashed axis-reading guides.",
                    "feedback": "The downward cost wedge of 2 accompanies private quantity 4 below social quantity 5, making the underproduction visible."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Effective supply after policy connects (0, 0) → (10, 10). Per-unit corrective-policy wedge connects (5, 5) → (5, 7). Before-policy welfare-loss triangle shaded polygon with vertices (4, 4) → (4, 6) → (5, 5). Public subsidy-expenditure rectangle shaded polygon with vertices (0, 5) → (5, 5) → (5, 7) → (0, 7).",
                "instruction": "For “Correct a positive production externality”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Effective supply after policy; Per-unit corrective-policy wedge; Before-policy welfare-loss triangle; Public subsidy-expenditure rectangle.",
                    "feedback": "The subsidy lowers effective supply onto MSC and raises output to 5; its payment rectangle uses the receipt–buyer-price wedge, while the before-policy loss triangle represents benefits now recovered."
                  },
                  {
                    "key": "misconception2",
                    "label": "Label the entire marginal external-effect rectangle as deadweight loss.",
                    "feedback": "The external-effect wedge applies to units produced, but deadweight loss measures the net surplus forgone over the inefficient quantity interval; its boundary is the social marginal curves."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The private baseline has Qm = 4. After subsidy, buyers pay 5, sellers receive 7 and Q = 5. The initial loss triangle shows the forgone benefit recovered before financing costs.",
            "explanation": {
              "question": "Why is this different from the no-externality subsidy?",
              "options": [
                "Every subsidy necessarily creates the same overproduction loss.",
                "Here the added output corrects an existing underproduction problem."
              ],
              "answer": 1,
              "feedback": [
                "A welfare judgment requires the initial distortion; the no-externality market has a different starting point.",
                "The positive external benefit means social cost is below private cost in this example."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "At Q = 5 with subsidy 2 per unit, what is public expenditure?",
              "options": [
                "10 monetary units per period.",
                "8 monetary units per period."
              ],
              "answer": 0,
              "feedback": [
                "Expenditure = 5 × 2 = 10; the initial welfare loss of 1 is removed before financing costs.",
                "Use subsidized quantity 5 rather than original private quantity 4."
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.regulation_diagram",
        "scope": "common",
        "title": "Legislation and regulation response diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "optimalCap",
            "title": "An enforceable cap at the optimum",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "Compliance and the allocation of production rights are assumed. This selected mechanism does not represent every kind of regulation.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal private benefit (MPB) connects (0, 10) → (10, 0). Marginal private cost (MPC) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "mpb": "Marginal private benefit (MPB)",
              "mpc": "Marginal private cost (MPC)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "externalWedge": "Marginal external-effect wedge",
              "quantityCap": "Enforced quantity cap",
              "market": "Private market outcome (Qm)",
              "optimum": "Social optimum (Q*)",
              "initialLoss": "Before-policy welfare-loss triangle",
              "marketQ": "Private market outcome (Qm) — dashed quantity guide",
              "marketP": "Private market outcome (Qm) — dashed vertical-axis guide",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "A cap sets Q = 4 when Q* = 4 and Qm = 5. What happens to excessive production?",
              "options": [
                "It must shift supply to a new cost curve.",
                "It eliminates the illustrated excessive output."
              ],
              "answer": 1,
              "feedback": [
                "A quantity constraint need not change the underlying production technology or marginal-cost curve.",
                "A binding, fully enforced cap directly restricts output to Q*."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social benefit (MSB) connects (0, 10) → (10, 0). Marginal social cost (MSC) connects (0, 2) → (10, 12).",
                "instruction": "Which social marginal curves establish the before-policy comparison?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Shift the marginal-cost curve to represent this quantity cap.",
                    "feedback": "This scenario directly restricts quantity while holding technology and marginal curves fixed; its vertical cap is not a supply-cost shift."
                  },
                  {
                    "key": "construct",
                    "label": "Add Marginal social benefit (MSB); Marginal social cost (MSC).",
                    "feedback": "The social curves show MSC 2 above MPC with unchanged MSB, establishing the external-cost comparison before a cap is drawn."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Marginal external-effect wedge connects (4, 4) → (4, 6). Private market outcome (Qm) at (5, 5). Social optimum (Q*) at (4, 6). Private market outcome (Qm) — dashed quantity guide: dashed path (5, 0) → (5, 5). Private market outcome (Qm) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5). Social optimum (Q*) — dashed quantity guide: dashed path (4, 0) → (4, 6). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 6) → (4, 6).",
                "instruction": "For “An enforceable cap at the optimum”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Marginal external-effect wedge; Private market outcome (Qm); Social optimum (Q*), with dashed axis-reading guides.",
                    "feedback": "The wedge and crossing guides identify excessive private output 5 versus efficient output 4, providing the reference for the quantity restriction."
                  },
                  {
                    "key": "misconception1",
                    "label": "Use only the private crossing as the social optimum.",
                    "feedback": "The private outcome compares MPB with MPC; the social optimum compares MSB with MSC. An unpriced external effect separates those comparisons."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Enforced quantity cap connects (4, 0) → (4, 10). Before-policy welfare-loss triangle shaded polygon with vertices (4, 6) → (5, 5) → (5, 7).",
                "instruction": "For “An enforceable cap at the optimum”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Label the entire marginal external-effect rectangle as deadweight loss.",
                    "feedback": "The external-effect wedge applies to units produced, but deadweight loss measures the net surplus forgone over the inefficient quantity interval; its boundary is the social marginal curves."
                  },
                  {
                    "key": "compare",
                    "label": "Add Enforced quantity cap; Before-policy welfare-loss triangle.",
                    "feedback": "The vertical cap at Q = 4 enforces the efficient quantity without shifting costs; the shaded triangle records the before-cap loss, which is removed at this cap."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The vertical cap is Q = 4; the original loss triangle from 4 to 5 is fully avoided under compliance. No cost curve shifts.",
            "explanation": {
              "question": "What assumption supports the cap’s illustrated outcome?",
              "options": [
                "The cap is enforced, and the same technology and marginal curves remain relevant.",
                "All regulations necessarily change supply costs by the same amount."
              ],
              "answer": 0,
              "feedback": [
                "This example restricts quantity directly rather than modelling a technological standard.",
                "Other regulations may change costs or technology, so their geometry would require a different specified mechanism."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "What welfare loss remains with this cap?",
              "options": [
                "1 monetary unit per period.",
                "Zero in this illustration."
              ],
              "answer": 1,
              "feedback": [
                "1 is the original loss without this effective cap, not the remaining loss.",
                "The cap equals Q*, so no excessive units remain between the cap and the social optimum."
              ]
            }
          },
          {
            "key": "weakCap",
            "title": "A partially corrective quantity cap",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "Compliance and the allocation of production rights are assumed. This selected mechanism does not represent every kind of regulation.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal private benefit (MPB) connects (0, 10) → (10, 0). Marginal private cost (MPC) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "mpb": "Marginal private benefit (MPB)",
              "mpc": "Marginal private cost (MPC)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "externalWedge": "Marginal external-effect wedge",
              "quantityCap": "Enforced quantity cap",
              "market": "Private market outcome (Qm)",
              "optimum": "Social optimum (Q*)",
              "initialLoss": "Before-policy welfare-loss triangle",
              "remainingLoss": "Remaining welfare-loss triangle",
              "marketQ": "Private market outcome (Qm) — dashed quantity guide",
              "marketP": "Private market outcome (Qm) — dashed vertical-axis guide",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "A cap sets Q = 4.5 when Q* = 4 and Qm = 5. Does it fully remove excessive production?",
              "options": [
                "No: it reduces overproduction but leaves Q above the optimum.",
                "Yes: every restriction achieves the social optimum."
              ],
              "answer": 0,
              "feedback": [
                "The cap lies between the private and social quantities.",
                "A smaller quantity gap can still carry a positive welfare loss."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social benefit (MSB) connects (0, 10) → (10, 0). Marginal social cost (MSC) connects (0, 2) → (10, 12).",
                "instruction": "Which social marginal curves establish the before-policy comparison?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal social benefit (MSB); Marginal social cost (MSC).",
                    "feedback": "The social curves show MSC 2 above MPC with unchanged MSB, establishing the external-cost comparison before a cap is drawn."
                  },
                  {
                    "key": "misconception0",
                    "label": "Shift the marginal-cost curve to represent this quantity cap.",
                    "feedback": "This scenario directly restricts quantity while holding technology and marginal curves fixed; its vertical cap is not a supply-cost shift."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Marginal external-effect wedge connects (4, 4) → (4, 6). Private market outcome (Qm) at (5, 5). Social optimum (Q*) at (4, 6). Private market outcome (Qm) — dashed quantity guide: dashed path (5, 0) → (5, 5). Private market outcome (Qm) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5). Social optimum (Q*) — dashed quantity guide: dashed path (4, 0) → (4, 6). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 6) → (4, 6).",
                "instruction": "For “A partially corrective quantity cap”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Use only the private crossing as the social optimum.",
                    "feedback": "The private outcome compares MPB with MPC; the social optimum compares MSB with MSC. An unpriced external effect separates those comparisons."
                  },
                  {
                    "key": "read",
                    "label": "Add Marginal external-effect wedge; Private market outcome (Qm); Social optimum (Q*), with dashed axis-reading guides.",
                    "feedback": "The wedge and guides identify private output 5 and efficient output 4, showing the quantity interval over which costs exceed benefits."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Enforced quantity cap connects (4.5, 0) → (4.5, 10). Before-policy welfare-loss triangle shaded polygon with vertices (4, 6) → (5, 5) → (5, 7). Remaining welfare-loss triangle shaded polygon with vertices (4, 6) → (4.5, 5.5) → (4.5, 6.5).",
                "instruction": "For “A partially corrective quantity cap”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Enforced quantity cap; Before-policy welfare-loss triangle; Remaining welfare-loss triangle.",
                    "feedback": "The cap at Q = 4.5 removes only part of overproduction; beside the before-policy triangle, the smaller triangle from 4 to 4.5 shows the remaining loss."
                  },
                  {
                    "key": "misconception2",
                    "label": "Label the entire marginal external-effect rectangle as deadweight loss.",
                    "feedback": "The external-effect wedge applies to units produced, but deadweight loss measures the net surplus forgone over the inefficient quantity interval; its boundary is the social marginal curves."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The vertical cap is Q = 4.5; the original Qm = 5 and Q* = 4 remain marked. The smaller triangle between 4 and 4.5 is remaining loss.",
            "explanation": {
              "question": "What assumption supports the cap’s illustrated outcome?",
              "options": [
                "All regulations necessarily change supply costs by the same amount.",
                "The cap is enforced, and the same technology and marginal curves remain relevant."
              ],
              "answer": 1,
              "feedback": [
                "Other regulations may change costs or technology, so their geometry would require a different specified mechanism.",
                "This example restricts quantity directly rather than modelling a technological standard."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "What welfare loss remains with this cap?",
              "options": [
                "0.25 monetary units per period.",
                "1 monetary unit per period."
              ],
              "answer": 0,
              "feedback": [
                "At Q = 4.5, marginal harm exceeds benefit by 1; remaining loss = ½ × 0.5 × 1 = 0.25.",
                "1 is the original loss from Q = 4 to 5, before the cap."
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.education_diagram",
        "scope": "common",
        "title": "Education response diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "effective",
            "title": "Full response under a stated learning assumption",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "MSB is held fixed here. The drawing isolates information/perceived-benefit change and does not prove how a real campaign changes behavior.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal private benefit (MPB) connects (0, 8) → (8, 0). Marginal private cost (MPC) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "mpb": "Marginal private benefit (MPB)",
              "mpc": "Marginal private cost (MPC)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "externalWedge": "Marginal external-effect wedge",
              "informedMpb": "Perceived MPB after information",
              "market": "Private market outcome (Qm)",
              "optimum": "Social optimum (Q*)",
              "response": "Illustrated response",
              "initialLoss": "Before-policy welfare-loss triangle",
              "marketQ": "Private market outcome (Qm) — dashed quantity guide",
              "marketP": "Private market outcome (Qm) — dashed vertical-axis guide",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide",
              "responseQ": "Illustrated response — dashed quantity guide",
              "responseP": "Illustrated response — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Information raises perceived MPB from 8 − Q to MSB = 10 − Q. What happens to private choice?",
              "options": [
                "MSB must fall whenever people learn more.",
                "Q rises from 4 to 5, matching the social optimum."
              ],
              "answer": 1,
              "feedback": [
                "This example fixes underlying social benefit and changes perceived private benefit.",
                "Under the assumed effective learning, private perceived benefit reaches social benefit."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social benefit (MSB) connects (0, 10) → (10, 0). Marginal social cost (MSC) connects (0, 0) → (10, 10).",
                "instruction": "Which social marginal curves establish the before-policy comparison?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Move MSB down instead of changing perceived MPB.",
                    "feedback": "The specified information intervention holds underlying MSB fixed and raises perceived private benefit; the response can be partial."
                  },
                  {
                    "key": "construct",
                    "label": "Add Marginal social benefit (MSB); Marginal social cost (MSC).",
                    "feedback": "MSB lies above the existing perceived MPB while MSC equals MPC, showing the benefit gap before information changes private decisions."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Marginal external-effect wedge connects (5, 3) → (5, 5). Private market outcome (Qm) at (4, 4). Social optimum (Q*) at (5, 5). Private market outcome (Qm) — dashed quantity guide: dashed path (4, 0) → (4, 4). Private market outcome (Qm) — dashed vertical-axis guide: dashed path (0, 4) → (4, 4). Social optimum (Q*) — dashed quantity guide: dashed path (5, 0) → (5, 5). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5).",
                "instruction": "For “Full response under a stated learning assumption”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Marginal external-effect wedge; Private market outcome (Qm); Social optimum (Q*), with dashed axis-reading guides.",
                    "feedback": "The wedge at Q = 5 measures the benefit gap of 2; guides mark private quantity 4 below socially efficient quantity 5."
                  },
                  {
                    "key": "misconception1",
                    "label": "Use only the private crossing as the social optimum.",
                    "feedback": "The private outcome compares MPB with MPC; the social optimum compares MSB with MSC. An unpriced external effect separates those comparisons."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Perceived MPB after information connects (0, 10) → (10, 0). Illustrated response at (5, 5). Before-policy welfare-loss triangle shaded polygon with vertices (4, 4) → (4, 6) → (5, 5). Illustrated response — dashed quantity guide: dashed path (5, 0) → (5, 5). Illustrated response — dashed vertical-axis guide: dashed path (0, 5) → (5, 5).",
                "instruction": "For “Full response under a stated learning assumption”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Label the entire marginal external-effect rectangle as deadweight loss.",
                    "feedback": "The external-effect wedge applies to units produced, but deadweight loss measures the net surplus forgone over the inefficient quantity interval; its boundary is the social marginal curves."
                  },
                  {
                    "key": "compare",
                    "label": "Add Perceived MPB after information; Illustrated response; Before-policy welfare-loss triangle, with dashed axis-reading guides.",
                    "feedback": "The new perceived MPB coincides with MSB and meets cost at (5,5); the before-policy triangle shows benefits recovered if consumers respond as assumed."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Initial MPB = 8 − Q and fixed MSB = 10 − Q are distinct. The informed MPB becomes 10 − Q, with response (5,5); the original loss triangle is removed.",
            "explanation": {
              "question": "Which limit should guide interpretation of the campaign?",
              "options": [
                "The size of the private response is conditional on effective learning.",
                "Every education campaign must shift MPB exactly to MSB."
              ],
              "answer": 0,
              "feedback": [
                "Campaigns can have partial or absent responses, and real interventions can also change preferences or underlying benefits.",
                "The full adjustment is a scenario assumption, not a general causal guarantee."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "What welfare loss remains in this response scenario?",
              "options": [
                "1 monetary unit per period.",
                "Zero in this illustration."
              ],
              "answer": 1,
              "feedback": [
                "1 is the original underconsumption loss, rather than the remaining loss after full response.",
                "The private and social crossings coincide at Q = 5, removing the original loss under the stated assumptions."
              ]
            }
          },
          {
            "key": "partial",
            "title": "Partial response to information",
            "assumption": "Competitive market, full compliance, no administrative costs and efficient allocation of traded units. Marginal curves capture the effects specified here.",
            "limitation": "MSB is held fixed here. The drawing isolates information/perceived-benefit change and does not prove how a real campaign changes behavior.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Marginal private benefit (MPB) connects (0, 8) → (8, 0). Marginal private cost (MPC) connects (0, 0) → (10, 10).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "mpb": "Marginal private benefit (MPB)",
              "mpc": "Marginal private cost (MPC)",
              "msb": "Marginal social benefit (MSB)",
              "msc": "Marginal social cost (MSC)",
              "externalWedge": "Marginal external-effect wedge",
              "informedMpb": "Perceived MPB after information",
              "market": "Private market outcome (Qm)",
              "optimum": "Social optimum (Q*)",
              "response": "Illustrated response",
              "initialLoss": "Before-policy welfare-loss triangle",
              "remainingLoss": "Remaining welfare-loss triangle",
              "marketQ": "Private market outcome (Qm) — dashed quantity guide",
              "marketP": "Private market outcome (Qm) — dashed vertical-axis guide",
              "optimumQ": "Social optimum (Q*) — dashed quantity guide",
              "optimumP": "Social optimum (Q*) — dashed vertical-axis guide",
              "responseQ": "Illustrated response — dashed quantity guide",
              "responseP": "Illustrated response — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Information raises perceived MPB from 8 − Q to 9 − Q, while MSB = 10 − Q stays fixed. Is underconsumption fully corrected?",
              "options": [
                "No: Q rises from 4 to 4.5 but remains below Q* = 5.",
                "Yes: any information campaign necessarily closes the entire gap."
              ],
              "answer": 0,
              "feedback": [
                "The new private crossing lies between the original market output and the optimum.",
                "The private-benefit shift here is only half of the external-benefit gap."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal social benefit (MSB) connects (0, 10) → (10, 0). Marginal social cost (MSC) connects (0, 0) → (10, 10).",
                "instruction": "Which social marginal curves establish the before-policy comparison?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal social benefit (MSB); Marginal social cost (MSC).",
                    "feedback": "MSB lies above the existing perceived MPB while MSC equals MPC, showing the benefit gap before information changes private decisions."
                  },
                  {
                    "key": "misconception0",
                    "label": "Move MSB down instead of changing perceived MPB.",
                    "feedback": "The specified information intervention holds underlying MSB fixed and raises perceived private benefit; the response can be partial."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Marginal external-effect wedge connects (5, 3) → (5, 5). Private market outcome (Qm) at (4, 4). Social optimum (Q*) at (5, 5). Private market outcome (Qm) — dashed quantity guide: dashed path (4, 0) → (4, 4). Private market outcome (Qm) — dashed vertical-axis guide: dashed path (0, 4) → (4, 4). Social optimum (Q*) — dashed quantity guide: dashed path (5, 0) → (5, 5). Social optimum (Q*) — dashed vertical-axis guide: dashed path (0, 5) → (5, 5).",
                "instruction": "For “Partial response to information”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Use only the private crossing as the social optimum.",
                    "feedback": "The private outcome compares MPB with MPC; the social optimum compares MSB with MSC. An unpriced external effect separates those comparisons."
                  },
                  {
                    "key": "read",
                    "label": "Add Marginal external-effect wedge; Private market outcome (Qm); Social optimum (Q*), with dashed axis-reading guides.",
                    "feedback": "The wedge of 2 and the guides distinguish private quantity 4 from efficient quantity 5, setting the benchmark for a partial response."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Perceived MPB after information connects (0, 9) → (9, 0). Illustrated response at (4.5, 4.5). Before-policy welfare-loss triangle shaded polygon with vertices (4, 4) → (4, 6) → (5, 5). Remaining welfare-loss triangle shaded polygon with vertices (4.5, 4.5) → (4.5, 5.5) → (5, 5). Illustrated response — dashed quantity guide: dashed path (4.5, 0) → (4.5, 4.5). Illustrated response — dashed vertical-axis guide: dashed path (0, 4.5) → (4.5, 4.5).",
                "instruction": "For “Partial response to information”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Perceived MPB after information; Illustrated response; Before-policy welfare-loss triangle; Remaining welfare-loss triangle, with dashed axis-reading guides.",
                    "feedback": "Perceived MPB rises only to P = 9 − Q and meets cost at (4.5,4.5); the remaining triangle from 4.5 to 5 shows benefits still forgone beside the before-policy loss."
                  },
                  {
                    "key": "misconception2",
                    "label": "Label the entire marginal external-effect rectangle as deadweight loss.",
                    "feedback": "The external-effect wedge applies to units produced, but deadweight loss measures the net surplus forgone over the inefficient quantity interval; its boundary is the social marginal curves."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Initial MPB = 8 − Q and fixed MSB = 10 − Q are distinct. The informed MPB becomes 9 − Q, with response (4.5,4.5) and a remaining underconsumption triangle.",
            "explanation": {
              "question": "Which limit should guide interpretation of the campaign?",
              "options": [
                "Every education campaign must shift MPB exactly to MSB.",
                "The size of the private response is conditional on effective learning."
              ],
              "answer": 1,
              "feedback": [
                "The full adjustment is a scenario assumption, not a general causal guarantee.",
                "Campaigns can have partial or absent responses, and real interventions can also change preferences or underlying benefits."
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "What welfare loss remains in this response scenario?",
              "options": [
                "0.25 monetary units per period.",
                "Zero."
              ],
              "answer": 0,
              "feedback": [
                "The missing-output triangle has base 0.5 and height 1: area 0.25.",
                "Perceived MPB still lies below MSB, so socially beneficial units between 4.5 and 5 remain unconsumed."
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "2.9",
    "unit": 2,
    "title": "Public goods",
    "summary": "Why might a market underprovide a public good?",
    "question": "Why might a market underprovide a public good?",
    "scope": "common",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "public good",
        "definition": "A good that is non-rival and non-excludable."
      },
      {
        "term": "free rider",
        "definition": "A person who benefits from a good without contributing to its cost."
      }
    ],
    "sections": [
      {
        "id": "public",
        "heading": "Public goods and free riders",
        "body": [
          "A pure public good is non-rival: one person’s use does not reduce another’s; it is also non-excludable: it is difficult to prevent non-payers from benefiting. Free riding makes private charging difficult, so markets may underprovide it. Government can provide the good directly or contract a private supplier and finance it through taxation.",
          "A flood warning broadcast can inform another resident without reducing the warning available to you: non-rivalry. It is difficult to keep a non-payer within earshot from hearing it: non-excludability. A free rider benefits without contributing, so voluntary payments may fail to finance a socially valuable service even if many value it.",
          "“Public good” describes these characteristics, not government ownership or whether a service is desirable. A public hospital bed is rival when occupied; a toll road can exclude non-payers. A common fishing ground differs from a pure public good because fish are rival. Congestion can make a previously non-rival service rival over some range.",
          "Government can finance provision through taxation and operate it itself or contract a private provider. Contracting can bring expertise and cost competition; monitoring quality, defining service obligations and preventing weak competition are difficult. Direct provision can support universal access but may face budget and incentive problems. Compare the quality and accountability of each arrangement, rather than assuming either ownership form is automatically efficient."
        ],
        "scope": "common",
        "limitation": "Few real goods satisfy both conditions perfectly."
      }
    ],
    "model": "none",
    "modelPrompt": "Use the worked situation to identify the mechanism, then explain one condition that could change the conclusion.",
    "modelAssumption": "The example isolates one mechanism; other relevant conditions are held fixed unless stated.",
    "modelLimitation": "These illustrative examples isolate a mechanism and cannot establish a universal prediction or a causal empirical finding.",
    "worked": {
      "prompt": "A flood warning costs $600 per year. One hundred households each value access at $10 per year.",
      "steps": [
        "Total stated benefit is 100×$10=$1,000, exceeding the $600 resource cost.",
        "A household can hear the warning even if it does not pay, so it may withhold a voluntary contribution.",
        "If all reason this way, too little funding is raised despite positive net benefit.",
        "A compulsory equal contribution of $6 per household would cover cost, though fairness and valuation accuracy still require scrutiny."
      ],
      "conclusion": "Non-excludability creates a funding problem; total benefit exceeding cost does not ensure a viable voluntary private sale."
    },
    "quiz": {
      "question": "Which feature distinguishes an open-access fish stock from a pure public good?",
      "options": [
        "Fish are rival: one catch leaves fewer for others.",
        "Fish cannot generate benefits for anyone.",
        "Every government-owned resource is non-rival.",
        "Difficult exclusion guarantees efficient voluntary provision."
      ],
      "answer": 0,
      "feedback": [
        "Correct: rivalry makes the stock a common resource rather than a pure public good.",
        "Both common resources and public goods provide benefits.",
        "Ownership does not determine rivalry; a public hospital bed is also rival.",
        "Difficult exclusion can instead create overuse or free-rider problems."
      ],
      "scope": "common"
    },
    "challenge": {
      "prompt": "Explain why a socially beneficial flood-warning service may be underprovided by voluntary private contributions.",
      "hint": "Use both characteristics of a public good and the incentive to withhold payment.",
      "modelAnswer": "The warning is non-rival because another resident can hear it without reducing its value to others, and non-excludable because preventing non-payers from hearing it is difficult. Residents may therefore free ride, withholding contributions while expecting access. Revenue may fail to cover the service cost even when total willingness to pay exceeds that cost.",
      "rubric": [
        "Explain non-rivalry in the warning example.",
        "Explain difficulty of excluding non-payers.",
        "Link non-excludability to an incentive to free ride.",
        "Explain how weak funding can cause underprovision despite social benefit."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "common"
    },
    "coverage": [
      {
        "id": "2.9.characteristics",
        "point": "Non-rivalry, non-excludability and free riders",
        "status": "taught",
        "evidence": "section:public"
      },
      {
        "id": "2.9.responses",
        "point": "Direct provision and private-sector contracting",
        "status": "taught",
        "evidence": "section:public"
      }
    ],
    "diagrams": []
  },
  {
    "id": "2.10",
    "unit": 2,
    "title": "Asymmetric information",
    "summary": "What happens when one party knows more than another?",
    "question": "What happens when one party knows more than another?",
    "scope": "hl",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "asymmetric information",
        "definition": "A situation in which one side of a transaction has relevant information the other lacks."
      },
      {
        "term": "adverse selection",
        "definition": "A pre-contract information problem in which hidden characteristics affect the mix of participants."
      },
      {
        "term": "moral hazard",
        "definition": "A post-contract information problem in which hidden actions and changed incentives can increase risk."
      }
    ],
    "sections": [
      {
        "id": "information",
        "heading": "Hidden information and actions",
        "body": [
          "Asymmetric information arises when one party to a transaction has relevant information the other lacks. Adverse selection can occur before a transaction when hidden characteristics alter who participates; moral hazard can occur after an agreement when hidden actions change incentives.",
          "In a used-bike market, sellers may know hidden defects while buyers cannot distinguish quality. Buyers offer a price reflecting average quality; owners of good bikes may withdraw because that price is too low. The resulting worse mix can reduce trust and trade: adverse selection is about hidden characteristics before agreement.",
          "After insurance is purchased, reduced personal exposure to losses can weaken incentives to take care when behavior is hard to observe: moral hazard. It does not mean all insured people act dishonestly. Separate the timing and hidden fact: pre-contract risk type is adverse selection; post-contract care is moral hazard."
        ],
        "scope": "hl",
        "limitation": "Information gaps differ across markets and may not always cause failure."
      },
      {
        "id": "response",
        "heading": "Responses",
        "body": [
          "Governments may require disclosure, regulate conduct or supply information. A seller can signal quality through a credible warranty; a buyer can screen through inspection or questions. Each response has costs and can be imperfect.",
          "Disclosure laws and independent information can improve comparisons, while safety regulation can set a minimum standard. These require accurate information, enforcement and administrative resources. A signal is information sent by the informed side, such as a costly warranty; screening is an effort by the less-informed side, such as an inspection or risk questionnaire.",
          "A warranty is credible only if the seller can and must honor it; an unsupported “excellent quality” label may convey little. An insurance deductible makes the insured pay part of a loss, retaining an incentive for care, but may discourage legitimate claims. Screening can improve pricing while also excluding high-risk households. Evaluate reduced information problems against costs and access."
        ],
        "scope": "hl",
        "limitation": "A warranty is only credible if the seller can honour it."
      }
    ],
    "model": "none",
    "modelPrompt": "Use the worked situation to identify the mechanism, then explain one condition that could change the conclusion.",
    "modelAssumption": "The example isolates one mechanism; other relevant conditions are held fixed unless stated.",
    "modelLimitation": "These illustrative examples isolate a mechanism and cannot establish a universal prediction or a causal empirical finding.",
    "worked": {
      "prompt": "An insurer charges a common $300 premium. Low-risk households expect $100 in annual claims; high-risk households expect $500.",
      "steps": [
        "Low-risk buyers may view the common premium as poor value and be less likely to join.",
        "If high-risk buyers become more prevalent, average expected claims can exceed the premium.",
        "Raising the common premium may drive out more low-risk buyers, further worsening the pool.",
        "Risk screening may help distinguish types, but can be costly and reduce access for high-risk households."
      ],
      "conclusion": "This is adverse selection from hidden risk before purchase; it differs from changed care after insurance."
    },
    "quiz": {
      "question": "After buying theft insurance, a cyclist becomes less careful about locking a bike, and the insurer cannot observe this. What is the problem?",
      "options": [
        "Adverse selection from hidden risk before signing.",
        "A public good because insurance is non-rival.",
        "Moral hazard from hidden action after signing.",
        "Perfect information because the cyclist knows the action."
      ],
      "answer": 2,
      "feedback": [
        "The described change happens after the contract, rather than selecting risk types beforehand.",
        "Insurance coverage is excludable and is not a pure public good.",
        "Correct: insurance changes incentives for care when actions are hard to observe.",
        "Information is asymmetric precisely because the insurer cannot observe the relevant action."
      ],
      "scope": "hl"
    },
    "challenge": {
      "prompt": "Explain how a credible warranty can reduce asymmetric information in a used-bike market, and identify one limitation.",
      "hint": "Identify which side sends the signal and why an empty promise is different.",
      "modelAnswer": "A seller knows more about hidden defects than the buyer. A warranty makes the seller bear repair costs, so a reliable, enforceable promise is more costly for a low-quality seller and can signal quality. Buyers may become more willing to trade. The signal weakens if the seller cannot honor the warranty or enforcing it is expensive.",
      "rubric": [
        "Identify the seller’s information advantage.",
        "Explain how a warranty transfers some defect risk to the seller.",
        "Link credibility to buyer confidence or improved trade.",
        "Explain an enforcement or solvency limitation."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "hl"
    },
    "coverage": [
      {
        "id": "2.10.asymmetry",
        "point": "Asymmetric information, adverse selection and moral hazard",
        "status": "taught",
        "evidence": "section:information"
      },
      {
        "id": "2.10.responses",
        "point": "Government legislation, regulation and information; private signalling and screening",
        "status": "taught",
        "evidence": "section:response"
      }
    ],
    "diagrams": []
  },
  {
    "id": "2.11",
    "unit": 2,
    "title": "Market power",
    "summary": "How does competition shape firms’ choices?",
    "question": "How does competition shape firms’ choices?",
    "scope": "hl",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "economic profit",
        "definition": "Total revenue minus explicit costs and implicit opportunity costs."
      },
      {
        "term": "marginal revenue",
        "definition": "The extra total revenue from selling another unit."
      },
      {
        "term": "market power",
        "definition": "The ability of a firm to influence its selling price."
      },
      {
        "term": "Nash equilibrium",
        "definition": "A combination of strategies in which no player gains by changing its strategy alone, given the others’ strategies."
      }
    ],
    "sections": [
      {
        "id": "structures",
        "heading": "Four market structures",
        "body": [
          "Perfect competition has many price-taking firms, homogeneous products and free entry; monopoly has one seller with substantial barriers. Monopolistic competition combines many firms and differentiated products with relatively easy entry. Oligopoly has few interdependent firms, which may compete in price or other features or collude.",
          "Compare entry barriers, number of sellers and product differentiation. A competitive wheat seller supplies an almost identical product among many sellers and cannot choose the market price. A sole local water network may face high infrastructure barriers. Cafes illustrate differentiated products with relatively easy entry. A small number of airlines on a route can make each firm sensitive to rivals’ decisions. These are illustrations, not definitive classifications of entire industries.",
          "A price taker can sell an additional unit at the market price, so P=AR=MR for its own output. A seller facing downward-sloping demand normally must reduce price to sell more, so MR lies below AR when all units sell at one price. Market power is the ability to influence price; barriers and available substitutes determine how strong it is."
        ],
        "scope": "hl",
        "limitation": "These are simplified benchmarks and real markets may fit imperfectly."
      },
      {
        "id": "profit",
        "heading": "Revenue, cost and profit",
        "body": [
          "Profit equals total revenue minus total cost. Marginal revenue and marginal cost measure the change in total revenue and total cost from one more unit; average revenue and average cost divide their totals by output. A profit-maximizing firm chooses output where marginal revenue equals marginal cost when the relevant conditions hold. Normal profit covers opportunity costs; abnormal profit exceeds them.",
          "Total cost includes explicit payments and implicit opportunity costs. Normal profit is the return required to keep entrepreneurial resources in their current use and is included in economic cost; economic profit of zero can therefore be sustainable. Abnormal profit is revenue above all these costs; a loss means revenue fails to cover them.",
          "To maximize profit, expand while MR exceeds MC and stop where the next unit would cost more than it adds to revenue. For smooth curves, choose MR=MC where MC crosses MR from below and check feasible boundary outputs. MC=MR is not sufficient on its own: multiple intersections or a loss-making shutdown option can change the choice.",
          "In the short run some inputs are fixed. A competitive firm may continue with losses if revenue covers variable cost and contributes toward fixed cost; in the long run all costs must be covered to remain. Entry following abnormal competitive profits expands market supply and lowers price; exit after losses does the reverse. With free entry and comparable firms, long-run equilibrium tends toward normal profit and P=MC, rather than guaranteed abnormal profit."
        ],
        "scope": "hl",
        "limitation": "The equality alone is not enough without checking that profit is maximized."
      },
      {
        "id": "power",
        "heading": "Power and outcomes",
        "body": [
          "A price-taking firm faces market price as its average and marginal revenue. A monopoly can restrict output below the competitive benchmark and charge more, creating potential welfare loss. Large firms may gain economies of scale or fund research, but market power can reduce choice. Governments may regulate, legislate, fine or own firms.",
          "For a single-price monopolist, find output using MR=MC, then move vertically to the demand (AR) curve to find price; do not read the selling price from MR. Relative to a competitive benchmark with the same costs, restricted output and P>MC leave mutually beneficial units untraded. A monopolist can nevertheless make losses if demand is too weak relative to costs.",
          "A natural monopoly occurs when one firm can supply relevant market demand at lower average cost than multiple firms, often because infrastructure has large fixed costs and falling average cost. Marginal-cost pricing may then leave revenue below total cost; regulation must consider funding and incentives as well as price. Economies of scale and research budgets can lower cost or support innovation, but market protection can also weaken pressure to improve.",
          "Monopolistic competition allows product variety and some price-setting ability. Successful differentiated firms may earn abnormal profit in the short run; entry of alternatives reduces each incumbent’s demand until normal profit in the simple long-run model. Downward-sloping demand typically leaves P>MC and output below the minimum-AC scale, trading some efficiency for variety.",
          "Competition law may prohibit collusion or block harmful mergers; regulators can cap prices or require access to a network. Fines deter misconduct only when detection and penalties are credible. Public ownership can pursue access and public goals but needs accountability and funding. Compare lower prices and choice with scale economies, investment incentives and regulatory information limits."
        ],
        "scope": "hl",
        "limitation": "The comparison depends on costs and market conditions."
      },
      {
        "id": "oligopoly",
        "heading": "Interdependence",
        "body": [
          "Oligopolists consider rivals’ responses. A collusive agreement may raise prices but gives each member an incentive to cheat; price wars and non-price competition are alternatives.",
          "Consider two firms choosing a high or low price. Payoffs (A,B) are (8,8) if both choose high, (10,3) if A alone chooses low, (3,10) if B alone chooses low, and (5,5) if both choose low. If B chooses high, A prefers 10 to 8; if B chooses low, A prefers 5 to 3. The same holds for B, so both choosing low is a Nash equilibrium even though both would prefer (8,8). These are illustrative profits, not an actual market estimate.",
          "A cartel seeks joint monopoly profit by restricting total output, but each member can gain by secretly selling more. Repeated interaction and detection may help sustain cooperation; entry and enforcement can disrupt it. Non-collusive firms can compete on service, design, advertising or price, including costly price wars.",
          "A four-firm concentration ratio adds the market shares of the four largest firms: 30%+25%+15%+10%=80%. The ratio depends on the market definition and does not itself prove collusion or high prices; imports, potential entry and the strength of smaller rivals also matter."
        ],
        "scope": "hl",
        "limitation": "A simple description cannot predict every strategic interaction."
      }
    ],
    "model": "firm",
    "modelPrompt": "Compare marginal revenue with marginal cost before selecting output. Find selling price from demand, then compare revenue with total cost.",
    "modelAssumption": "A single-price firm compares economic costs and revenues; output choices and market demand constrain the result.",
    "modelLimitation": "Real firms face uncertainty, strategic responses and multiple objectives.",
    "worked": {
      "prompt": "A firm has output Q=0,1,2,3; total revenue is $0,$12,$22,$30 and total economic cost is $6,$13,$19,$29.",
      "steps": [
        "At Q=1,2,3, profit TR−TC is −$1,$3,$1; at Q=0 the fixed cost gives −$6. Q=2 maximizes profit among these options.",
        "For the second unit, MR=$22−$12=$10 and MC=$19−$13=$6, so adding it raises profit by $4.",
        "For the third unit, MR=$30−$22=$8 and MC=$29−$19=$10, so adding it lowers profit by $2.",
        "At Q=2, AR=$22/2=$11 and AC=$19/2=$9.50; profit is ($11−$9.50)×2=$3."
      ],
      "conclusion": "With discrete output, compare incremental revenues and costs; an exact numerical MR=MC equality need not occur."
    },
    "quiz": {
      "question": "For a single-price monopolist facing downward-sloping demand, how should price be found after choosing the profit-maximizing output?",
      "options": [
        "Read price from MC at that output.",
        "Read price from MR at that output.",
        "Choose any price independently of demand.",
        "Read price from the demand/AR curve at that output."
      ],
      "answer": 3,
      "feedback": [
        "MC helps determine output but does not show buyers’ willingness to pay.",
        "MR is the extra revenue, which is below price under this demand structure.",
        "Selling the chosen output requires a price buyers will pay on demand.",
        "Correct: demand gives the price consistent with the selected quantity."
      ],
      "scope": "hl"
    },
    "challenge": {
      "prompt": "Explain why abnormal profits may persist under monopoly but attract entry under perfect competition.",
      "hint": "Compare entry barriers and the effect of entry on market supply.",
      "modelAnswer": "Abnormal profit is revenue above economic costs, including normal profit. Under perfect competition, free entry attracts firms, expands market supply and tends to reduce price and incumbent profit. A monopolist protected by substantial legal, cost or resource barriers may avoid that entry pressure, allowing abnormal profit to persist. Persistence is possible, not guaranteed, because demand and costs can still cause losses.",
      "rubric": [
        "Define abnormal profit using economic costs.",
        "Link free entry to expanded market supply.",
        "Explain the resulting downward pressure on competitive price and profits.",
        "Explain how a specific barrier can protect monopoly profit without guaranteeing it."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "hl"
    },
    "coverage": [
      {
        "id": "2.11.structures",
        "point": "Features of perfect competition, monopoly, oligopoly and monopolistic competition",
        "status": "taught",
        "evidence": "section:structures"
      },
      {
        "id": "2.11.profit_rules",
        "point": "TR minus TC, MC equals MR and abnormal, normal and loss outcomes",
        "status": "taught",
        "evidence": "section:profit"
      },
      {
        "id": "2.11.cost_revenue_calculation",
        "point": "Calculate profit, MC, MR, AC and AR from data",
        "status": "taught",
        "evidence": "worked"
      },
      {
        "id": "2.11.market_power",
        "point": "Market power, price takers and price makers",
        "status": "taught",
        "evidence": "section:power"
      },
      {
        "id": "2.11.perfect_competition_diagram",
        "point": "Perfect competition price-taker diagram P equals D equals AR equals MR",
        "status": "taught",
        "evidence": "diagram:2.11.perfect_competition_diagram"
      },
      {
        "id": "2.11.perfect_profit_diagram",
        "point": "Perfect competition diagrams: abnormal profit, normal profit and losses",
        "status": "taught",
        "evidence": "diagram:2.11.perfect_profit_diagram"
      },
      {
        "id": "2.11.perfect_equilibrium_diagram",
        "point": "Perfect competition equilibrium and allocative efficiency diagram",
        "status": "taught",
        "evidence": "diagram:2.11.perfect_equilibrium_diagram"
      },
      {
        "id": "2.11.perfect_run",
        "point": "Perfect competition short- and long-run profit maximization",
        "status": "taught",
        "evidence": "section:profit"
      },
      {
        "id": "2.11.monopoly_diagram",
        "point": "Monopoly diagrams: abnormal profit, normal profit and losses",
        "status": "taught",
        "evidence": "diagram:2.11.monopoly_diagram"
      },
      {
        "id": "2.11.monopoly_welfare_diagram",
        "point": "Monopoly versus perfect competition price, output and welfare loss diagram",
        "status": "taught",
        "evidence": "diagram:2.11.monopoly_welfare_diagram"
      },
      {
        "id": "2.11.natural_monopoly_diagram",
        "point": "Natural monopoly diagram",
        "status": "taught",
        "evidence": "diagram:2.11.natural_monopoly_diagram"
      },
      {
        "id": "2.11.monopoly_outcomes",
        "point": "Monopoly profit maximization, restricted output and allocative inefficiency",
        "status": "taught",
        "evidence": "section:power"
      },
      {
        "id": "2.11.oligopoly_diagram",
        "point": "Collusive oligopoly acting as monopoly diagram",
        "status": "taught",
        "evidence": "diagram:2.11.oligopoly_diagram"
      },
      {
        "id": "2.11.oligopoly_behavior",
        "point": "Collusion, non-collusion, interdependence, price wars, cheating and inefficiency",
        "status": "taught",
        "evidence": "section:oligopoly"
      },
      {
        "id": "2.11.payoff_matrix",
        "point": "Simple game theory payoff matrix",
        "status": "taught",
        "evidence": "section:oligopoly"
      },
      {
        "id": "2.11.oligopoly_competition",
        "point": "Price and non-price competition and concentration ratios",
        "status": "taught",
        "evidence": "section:oligopoly"
      },
      {
        "id": "2.11.monopolistic_profit_diagram",
        "point": "Monopolistic competition diagrams: abnormal profit, normal profit and losses",
        "status": "taught",
        "evidence": "diagram:2.11.monopolistic_profit_diagram"
      },
      {
        "id": "2.11.monopolistic_demand_diagram",
        "point": "Monopolistic competition and monopoly demand elasticity comparison diagram",
        "status": "taught",
        "evidence": "diagram:2.11.monopolistic_demand_diagram"
      },
      {
        "id": "2.11.monopolistic_outcomes",
        "point": "Short- and long-run outcomes, inefficiency and product variety",
        "status": "taught",
        "evidence": "section:power"
      },
      {
        "id": "2.11.large_firm_benefits",
        "point": "Economies of scale, natural monopoly and R&D innovation benefits",
        "status": "taught",
        "evidence": "section:power"
      },
      {
        "id": "2.11.large_firm_risks",
        "point": "Risks to output, prices and consumer choice",
        "status": "taught",
        "evidence": "section:power"
      },
      {
        "id": "2.11.power_responses",
        "point": "Regulation, legislation, government ownership and fines",
        "status": "taught",
        "evidence": "section:power"
      }
    ],
    "diagrams": [
      {
        "id": "2.11.perfect_competition_diagram",
        "scope": "hl",
        "title": "Perfect competition price-taker diagram P equals D equals AR equals MR",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "priceTaker",
            "title": "A market price and a small price-taking firm",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "A loss-making firm operates only conditionally in the short run: assume price covers AVC. Entry, exit and cost changes need additional assumptions.",
            "baseDescription": "Market panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Market demand connects (0, 12) → (10, 2). Individual firm panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Firm demand = price = AR connects (0, 6) → (10, 6).",
            "labels": {
              "market": "Market panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "marketDemand": "Market demand",
              "marketSupply": "Market supply",
              "marketEquilibrium": "Market equilibrium",
              "commonPrice": "Price shared with firm panel",
              "marketEquilibriumQ": "Market equilibrium — dashed quantity guide",
              "marketEquilibriumP": "Market equilibrium — dashed vertical-axis guide",
              "firm": "Individual firm panel",
              "ar": "Firm demand = price = AR",
              "mr": "Firm price = marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "The market sets price 6. What demand curve does a small competitive firm face?",
              "options": [
                "The whole market’s downward demand curve.",
                "A horizontal P = AR = MR = 6 line."
              ],
              "answer": 1,
              "feedback": [
                "Market demand describes all buyers; the individual price taker faces a different constraint.",
                "The firm can sell its small output at the given price but cannot raise that market price."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Market panel: Market supply connects (0, 0) → (10, 10). Individual firm panel: Firm price = marginal revenue (MR) connects (0, 6) → (10, 6). Marginal cost (MC) connects (0, 2) → (10, 12).",
                "instruction": "For “A market price and a small price-taking firm”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Give the small competitive firm the whole market’s downward demand.",
                    "feedback": "The market establishes price; the price-taking firm faces horizontal demand and MR at that price."
                  },
                  {
                    "key": "construct",
                    "label": "Add Market supply; Firm price = marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Market supply completes the market-price comparison, while the firm faces horizontal MR at 6 and rising MC; the two panels distinguish market price formation from the individual output decision."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Market panel: Market equilibrium at (6, 6). Market equilibrium — dashed quantity guide: dashed path (6, 0) → (6, 6). Market equilibrium — dashed vertical-axis guide: dashed path (0, 6) → (6, 6). Individual firm panel: Average economic cost (AC) is a sampled smooth curve, shown from (0.889, 11.444) to (10, 7.8). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 6). AC at chosen output at (4, 6). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + Q/2 + 8/Q for positive Q; it falls toward a minimum and then rises.",
                "instruction": "For “A market price and a small price-taking firm”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Market equilibrium; Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "The market guides give price 6, while the individual firm selects Q = 4; its AC point is 6, so price covers all economic cost including normal profit."
                  },
                  {
                    "key": "misconception1",
                    "label": "Make the individual firm produce the market’s total quantity.",
                    "feedback": "The common link is market price, not identical output. Read the individual firm’s chosen output from its own MR and MC, then compare price with AC."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Market panel: Price shared with firm panel: directed arrow (1, 6) → (9, 6).",
                "instruction": "For “A market price and a small price-taking firm”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Infer profit from MR = MC without comparing price with AC.",
                    "feedback": "MR = MC identifies the chosen output; economic profit or loss depends on P minus AC across that output."
                  },
                  {
                    "key": "compare",
                    "label": "Add Price shared with firm panel.",
                    "feedback": "The horizontal arrow carries the market price of 6 across the market panel, emphasizing that this price is shared with the firm rather than equating their output quantities."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The market panel crosses at (6,6). The firm panel has horizontal AR = MR = 6 and MC = 2 + Q, giving firm Q = 4. Market and firm quantities are different scales of activity.",
            "explanation": {
              "question": "Why choose firm Q = 4?",
              "options": [
                "MR = MC there, with MC crossing MR from below.",
                "The firm must produce market quantity 6."
              ],
              "answer": 0,
              "feedback": [
                "For Q below 4, MR exceeds MC; beyond 4, the extra cost exceeds extra revenue.",
                "A small firm’s chosen output is not total market output. The common link across panels is price 6."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.perfect_profit_diagram",
        "scope": "hl",
        "title": "Perfect competition diagrams: abnormal profit, normal profit and losses",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "profit",
            "title": "Competitive firm: abnormal profit",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "A loss-making firm operates only conditionally in the short run: assume price covers AVC. Entry, exit and cost changes need additional assumptions. The individual firm is a price taker.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Firm demand = price = AR connects (0, 6) → (10, 6).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Firm demand = price = AR",
              "mr": "Firm price = marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "profit": "Economic-profit rectangle",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At chosen Q = 4, price is 6 and AC is 4. Which outcome follows?",
              "options": [
                "Abnormal profit of 8.",
                "A loss, because marginal cost alone determines total cost."
              ],
              "answer": 0,
              "feedback": [
                "Economic profit = (P − AC) × Q = (6 − 4) × 4.",
                "The marginal condition chooses quantity; the average-cost comparison measures total profit or loss."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Firm price = marginal revenue (MR) connects (0, 6) → (10, 6). Marginal cost (MC) connects (0, 2) → (10, 12).",
                "instruction": "For “Competitive firm: abnormal profit”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Firm price = marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Horizontal MR at 6 meets rising MC at Q = 4, identifying the price-taking firm's marginal output decision before average cost is added."
                  },
                  {
                    "key": "misconception0",
                    "label": "Give the small competitive firm the whole market’s downward demand.",
                    "feedback": "The market establishes price; the price-taking firm faces horizontal demand and MR at that price."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (0.5, 2.25) to (10, 7). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 6). AC at chosen output at (4, 4). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + Q/2 for positive Q; it rises with Q.",
                "instruction": "For “Competitive firm: abnormal profit”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Place the AC reading at the MR intercept instead of the chosen output.",
                    "feedback": "MR = MC fixes Q = 4. Read AC vertically at that same quantity before comparing it with price 6; an intercept describes a different output."
                  },
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added AC point is 4, so price exceeds average economic cost at this output."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Economic-profit rectangle shaded polygon with vertices (0, 4) → (4, 4) → (4, 6) → (0, 6).",
                "instruction": "For “Competitive firm: abnormal profit”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Economic-profit rectangle.",
                    "feedback": "The rectangle spans four units between AC 4 and price 6, measuring economic profit as the price–average-cost gap times output."
                  },
                  {
                    "key": "misconception2",
                    "label": "Shade a profit rectangle between price and MC instead of AC.",
                    "feedback": "Total economic profit uses average total economic cost: (P − AC) × Q. MC describes an extra unit and cannot replace AC when measuring total profit or loss."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "First find MR = MC at Q = 4 on horizontal MR = 6. Then read AC = 4. The rectangle has width 4 and height 2, representing profit 8.",
            "explanation": {
              "question": "Why are the output and profit decisions separate?",
              "options": [
                "MR = MC always guarantees positive economic profit.",
                "MR = MC chooses output, while P versus AC determines economic profit."
              ],
              "answer": 1,
              "feedback": [
                "Equal marginal values do not imply P exceeds AC; normal profit and loss are both possible.",
                "Marginal revenue and marginal cost describe the next unit; AC includes the full average economic cost."
              ]
            },
            "extension": null
          },
          {
            "key": "normal",
            "title": "Competitive firm: normal profit",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "A loss-making firm operates only conditionally in the short run: assume price covers AVC. Entry, exit and cost changes need additional assumptions. The individual firm is a price taker.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Firm demand = price = AR connects (0, 6) → (10, 6).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Firm demand = price = AR",
              "mr": "Firm price = marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At chosen Q = 4, price is 6 and AC is 6. Which outcome follows?",
              "options": [
                "No normal return is earned.",
                "Zero economic profit."
              ],
              "answer": 1,
              "feedback": [
                "Normal profit is an opportunity cost included in economic AC, not an extra abnormal surplus.",
                "Price equals AC, which already includes the normal return."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Firm price = marginal revenue (MR) connects (0, 6) → (10, 6). Marginal cost (MC) connects (0, 2) → (10, 12).",
                "instruction": "For “Competitive firm: normal profit”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Give the small competitive firm the whole market’s downward demand.",
                    "feedback": "The market establishes price; the price-taking firm faces horizontal demand and MR at that price."
                  },
                  {
                    "key": "construct",
                    "label": "Add Firm price = marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Horizontal MR at 6 meets rising MC at Q = 4, identifying the price-taking firm's marginal output decision before average cost is added."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (0.889, 11.444) to (10, 7.8). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 6). AC at chosen output at (4, 6). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + Q/2 + 8/Q for positive Q; it falls toward a minimum and then rises.",
                "instruction": "For “Competitive firm: normal profit”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added AC point is 6, so price covers all economic cost including normal profit."
                  },
                  {
                    "key": "misconception1",
                    "label": "Place the AC reading at the MR intercept instead of the chosen output.",
                    "feedback": "MR = MC fixes Q = 4. Read AC vertically at that same quantity before comparing it with price 6; an intercept describes a different output."
                  }
                ],
                "answer": "read"
              }
            ],
            "comparison": "First find MR = MC at Q = 4 on horizontal MR = 6. Then read AC = 6. P = AC, so there is no nonzero profit rectangle.",
            "explanation": {
              "question": "Why are the output and profit decisions separate?",
              "options": [
                "MR = MC chooses output, while P versus AC determines economic profit.",
                "MR = MC always guarantees positive economic profit."
              ],
              "answer": 0,
              "feedback": [
                "Marginal revenue and marginal cost describe the next unit; AC includes the full average economic cost.",
                "Equal marginal values do not imply P exceeds AC; normal profit and loss are both possible."
              ]
            },
            "extension": null
          },
          {
            "key": "loss",
            "title": "Competitive firm: short-run loss",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "A loss-making firm operates only conditionally in the short run: assume price covers AVC. Entry, exit and cost changes need additional assumptions. The individual firm is a price taker.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Firm demand = price = AR connects (0, 6) → (10, 6).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Firm demand = price = AR",
              "mr": "Firm price = marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "profit": "Economic-loss rectangle",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At chosen Q = 4, price is 6 and AC is 8. Which outcome follows?",
              "options": [
                "Economic loss of 8.",
                "A profit, because price exceeds marginal cost."
              ],
              "answer": 0,
              "feedback": [
                "Economic profit = (P − AC) × Q = (6 − 8) × 4.",
                "The marginal condition chooses quantity; the average-cost comparison measures total profit or loss."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Firm price = marginal revenue (MR) connects (0, 6) → (10, 6). Marginal cost (MC) connects (0, 2) → (10, 12).",
                "instruction": "For “Competitive firm: short-run loss”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Firm price = marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Horizontal MR at 6 meets rising MC at Q = 4, identifying the price-taking firm's marginal output decision before average cost is added."
                  },
                  {
                    "key": "misconception0",
                    "label": "Give the small competitive firm the whole market’s downward demand.",
                    "feedback": "The market establishes price; the price-taking firm faces horizontal demand and MR at that price."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (1.778, 11.889) to (10, 8.6). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 6). AC at chosen output at (4, 8). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + Q/2 + 16/Q for positive Q; it falls toward a minimum and then rises.",
                "instruction": "For “Competitive firm: short-run loss”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Place the AC reading at the MR intercept instead of the chosen output.",
                    "feedback": "MR = MC fixes Q = 4. Read AC vertically at that same quantity before comparing it with price 6; an intercept describes a different output."
                  },
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added AC point is 8, so price falls short of average economic cost at this output."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Economic-loss rectangle shaded polygon with vertices (0, 6) → (4, 6) → (4, 8) → (0, 8).",
                "instruction": "For “Competitive firm: short-run loss”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Economic-loss rectangle.",
                    "feedback": "The rectangle spans four units between price 6 and AC 8, measuring economic loss of 8 rather than a marginal-cost gap."
                  },
                  {
                    "key": "misconception2",
                    "label": "Shade a profit rectangle between price and MC instead of AC.",
                    "feedback": "Total economic profit uses average total economic cost: (P − AC) × Q. MC describes an extra unit and cannot replace AC when measuring total profit or loss."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "First find MR = MC at Q = 4 on horizontal MR = 6. Then read AC = 8. The rectangle has width 4 and height 2, representing loss 8.",
            "explanation": {
              "question": "Why are the output and profit decisions separate?",
              "options": [
                "MR = MC always guarantees positive economic profit.",
                "MR = MC can identify the least-loss output, provided short-run revenue covers variable cost."
              ],
              "answer": 1,
              "feedback": [
                "Equal marginal values do not imply P exceeds AC; normal profit and loss are both possible.",
                "Here AVC is assumed no greater than price; fixed costs can still cause P < AC and an economic loss."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.perfect_equilibrium_diagram",
        "scope": "hl",
        "title": "Perfect competition equilibrium and allocative efficiency diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "longRun",
            "title": "Long-run competitive equilibrium",
            "assumption": "Free entry/exit, identical accessible technology, unchanged cost conditions and no external effects are assumed. Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "Real entry barriers, heterogeneous costs or external effects can prevent this benchmark. Market output 6 and individual firm output 4 are distinct.",
            "baseDescription": "Market panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Market demand connects (0, 12) → (10, 2). Individual firm panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Firm demand = price = AR connects (0, 6) → (10, 6).",
            "labels": {
              "market": "Market panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "marketDemand": "Market demand",
              "marketSupply": "Market supply",
              "marketEquilibrium": "Market equilibrium",
              "commonPrice": "Price shared with firm panel",
              "marketEquilibriumQ": "Market equilibrium — dashed quantity guide",
              "marketEquilibriumP": "Market equilibrium — dashed vertical-axis guide",
              "firm": "Individual firm panel",
              "ar": "Firm demand = price = AR",
              "mr": "Firm price = marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "With free entry and exit under unchanged cost conditions, where does a competitive firm settle?",
              "options": [
                "Price remains permanently above AC with unrestricted identical entry.",
                "P = MR = MC = minimum AC."
              ],
              "answer": 1,
              "feedback": [
                "Persistent abnormal profit needs a reason entry cannot eliminate it under the stated assumptions.",
                "Entry erodes abnormal profit and exit reduces losses in this benchmark."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Market panel: Market supply connects (0, 0) → (10, 10). Individual firm panel: Firm price = marginal revenue (MR) connects (0, 6) → (10, 6). Marginal cost (MC) connects (0, 2) → (10, 12).",
                "instruction": "For “Long-run competitive equilibrium”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Give the small competitive firm the whole market’s downward demand.",
                    "feedback": "The market establishes price; the price-taking firm faces horizontal demand and MR at that price."
                  },
                  {
                    "key": "construct",
                    "label": "Add Market supply; Firm price = marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Market supply completes the market-price comparison, while the firm faces horizontal MR at 6 and rising MC; the two panels distinguish market price formation from the individual output decision."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Market panel: Market equilibrium at (6, 6). Market equilibrium — dashed quantity guide: dashed path (6, 0) → (6, 6). Market equilibrium — dashed vertical-axis guide: dashed path (0, 6) → (6, 6). Individual firm panel: Average economic cost (AC) is a sampled smooth curve, shown from (0.889, 11.444) to (10, 7.8). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 6). AC at chosen output at (4, 6). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + Q/2 + 8/Q for positive Q; it falls toward a minimum and then rises.",
                "instruction": "For “Long-run competitive equilibrium”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Market equilibrium; Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "The market guides give price 6, while the individual firm selects Q = 4; its AC point is 6, so price covers all economic cost including normal profit."
                  },
                  {
                    "key": "misconception1",
                    "label": "Make the individual firm produce the market’s total quantity.",
                    "feedback": "The common link is market price, not identical output. Read the individual firm’s chosen output from its own MR and MC, then compare price with AC."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Market panel: Price shared with firm panel: directed arrow (1, 6) → (9, 6).",
                "instruction": "For “Long-run competitive equilibrium”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Infer profit from MR = MC without comparing price with AC.",
                    "feedback": "MR = MC identifies the chosen output; economic profit or loss depends on P minus AC across that output."
                  },
                  {
                    "key": "compare",
                    "label": "Add Price shared with firm panel.",
                    "feedback": "The horizontal arrow carries the market price of 6 across the market panel, emphasizing that this price is shared with the firm rather than equating their output quantities."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Market price is 6. At firm Q = 4, MC = 6 and AC reaches its minimum of 6, giving zero economic profit; no positive profit rectangle appears.",
            "explanation": {
              "question": "Why is P = MC allocatively efficient in this benchmark?",
              "options": [
                "Price reflects marginal willingness to pay, so MB equals MC when external effects are absent.",
                "Zero economic profit means owners receive no normal return."
              ],
              "answer": 0,
              "feedback": [
                "The equality aligns marginal social benefit and marginal social cost under the benchmark assumptions.",
                "Normal return is part of AC; zero economic profit still covers that opportunity cost."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.monopoly_diagram",
        "scope": "hl",
        "title": "Monopoly diagrams: abnormal profit, normal profit and losses",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "profit",
            "title": "Monopolist: abnormal profit",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "A loss-making firm operates only conditionally in the short run: assume price covers AVC. Entry, exit and cost changes need additional assumptions. Market power does not guarantee profit.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Average revenue / demand (AR) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Average revenue / demand (AR)",
              "mr": "Marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "profit": "Economic-profit rectangle",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At chosen Q = 4, price is 6 and AC is 4. Which outcome follows?",
              "options": [
                "Abnormal profit of 8.",
                "A loss, because marginal cost alone determines total cost."
              ],
              "answer": 0,
              "feedback": [
                "Economic profit = (P − AC) × Q = (6 − 4) × 4.",
                "The marginal condition chooses quantity; the average-cost comparison measures total profit or loss."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal revenue (MR) connects (0, 10) → (5, 0). Marginal cost (MC) connects (0, 2) → (10, 2).",
                "instruction": "For “Monopolist: abnormal profit”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Downward MR intersects horizontal MC = 2 at Q = 4, identifying the unconstrained single-price output decision; demand determines the price at that quantity."
                  },
                  {
                    "key": "misconception0",
                    "label": "Choose output where demand price equals MC, ignoring MR.",
                    "feedback": "For an unconstrained single-price seller, MR = MC selects output; demand/AR then gives the price. The marginal-cost-pricing scenario explicitly compares a regulated alternative."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (0.889, 11) to (10, 2.8). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 2). AC at chosen output at (4, 4). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + 8/Q for positive Q; it declines over the relevant range.",
                "instruction": "For “Monopolist: abnormal profit”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read price from MR at the selected output rather than demand/AR.",
                    "feedback": "MR = MC selects unconstrained monopoly-like output. The selling price comes from demand/AR at that output and differs from MR; regulation is identified separately."
                  },
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added AC point is 4, so price exceeds average economic cost at this output."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Economic-profit rectangle shaded polygon with vertices (0, 4) → (4, 4) → (4, 6) → (0, 6).",
                "instruction": "For “Monopolist: abnormal profit”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Economic-profit rectangle.",
                    "feedback": "The rectangle spans four units between AC 4 and price 6, measuring economic profit as the price–average-cost gap times output."
                  },
                  {
                    "key": "misconception2",
                    "label": "Shade a profit rectangle between price and MC instead of AC.",
                    "feedback": "Total economic profit uses average total economic cost: (P − AC) × Q. MC describes an extra unit and cannot replace AC when measuring total profit or loss."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "First find MR = MC at Q = 4 on MR = 10 − 2Q and MC = 2. Read price 6 from AR = 10 − Q. Then read AC = 4. The rectangle has width 4 and height 2, representing profit 8.",
            "explanation": {
              "question": "Why are the output and profit decisions separate?",
              "options": [
                "MR = MC always guarantees positive economic profit.",
                "MR = MC chooses output, while P versus AC determines economic profit."
              ],
              "answer": 1,
              "feedback": [
                "Equal marginal values do not imply P exceeds AC; normal profit and loss are both possible.",
                "Marginal revenue and marginal cost describe the next unit; AC includes the full average economic cost."
              ]
            },
            "extension": null
          },
          {
            "key": "normal",
            "title": "Monopolist: normal profit",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "A loss-making firm operates only conditionally in the short run: assume price covers AVC. Entry, exit and cost changes need additional assumptions. Market power does not guarantee profit.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Average revenue / demand (AR) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Average revenue / demand (AR)",
              "mr": "Marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At chosen Q = 4, price is 6 and AC is 6. Which outcome follows?",
              "options": [
                "No normal return is earned.",
                "Zero economic profit."
              ],
              "answer": 1,
              "feedback": [
                "Normal profit is an opportunity cost included in economic AC, not an extra abnormal surplus.",
                "Price equals AC, which already includes the normal return."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal revenue (MR) connects (0, 10) → (5, 0). Marginal cost (MC) connects (0, 2) → (10, 2).",
                "instruction": "For “Monopolist: normal profit”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Choose output where demand price equals MC, ignoring MR.",
                    "feedback": "For an unconstrained single-price seller, MR = MC selects output; demand/AR then gives the price. The marginal-cost-pricing scenario explicitly compares a regulated alternative."
                  },
                  {
                    "key": "construct",
                    "label": "Add Marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Downward MR intersects horizontal MC = 2 at Q = 4, identifying the unconstrained single-price output decision; demand determines the price at that quantity."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (1.778, 11) to (10, 3.6). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 2). AC at chosen output at (4, 6). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + 16/Q for positive Q; it declines over the relevant range.",
                "instruction": "For “Monopolist: normal profit”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added AC point is 6, so price covers all economic cost including normal profit."
                  },
                  {
                    "key": "misconception1",
                    "label": "Read price from MR at the selected output rather than demand/AR.",
                    "feedback": "MR = MC selects unconstrained monopoly-like output. The selling price comes from demand/AR at that output and differs from MR; regulation is identified separately."
                  }
                ],
                "answer": "read"
              }
            ],
            "comparison": "First find MR = MC at Q = 4 on MR = 10 − 2Q and MC = 2. Read price 6 from AR = 10 − Q. Then read AC = 6. P = AC, so there is no nonzero profit rectangle.",
            "explanation": {
              "question": "Why are the output and profit decisions separate?",
              "options": [
                "MR = MC chooses output, while P versus AC determines economic profit.",
                "MR = MC always guarantees positive economic profit."
              ],
              "answer": 0,
              "feedback": [
                "Marginal revenue and marginal cost describe the next unit; AC includes the full average economic cost.",
                "Equal marginal values do not imply P exceeds AC; normal profit and loss are both possible."
              ]
            },
            "extension": null
          },
          {
            "key": "loss",
            "title": "Monopolist: short-run loss",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "A loss-making firm operates only conditionally in the short run: assume price covers AVC. Entry, exit and cost changes need additional assumptions. Market power does not guarantee profit.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Average revenue / demand (AR) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Average revenue / demand (AR)",
              "mr": "Marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "profit": "Economic-loss rectangle",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At chosen Q = 4, price is 6 and AC is 8. Which outcome follows?",
              "options": [
                "Economic loss of 8.",
                "A profit, because price exceeds marginal cost."
              ],
              "answer": 0,
              "feedback": [
                "Economic profit = (P − AC) × Q = (6 − 8) × 4.",
                "The marginal condition chooses quantity; the average-cost comparison measures total profit or loss."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal revenue (MR) connects (0, 10) → (5, 0). Marginal cost (MC) connects (0, 2) → (10, 2).",
                "instruction": "For “Monopolist: short-run loss”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Downward MR intersects horizontal MC = 2 at Q = 4, identifying the unconstrained single-price output decision; demand determines the price at that quantity."
                  },
                  {
                    "key": "misconception0",
                    "label": "Choose output where demand price equals MC, ignoring MR.",
                    "feedback": "For an unconstrained single-price seller, MR = MC selects output; demand/AR then gives the price. The marginal-cost-pricing scenario explicitly compares a regulated alternative."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (2.667, 11) to (10, 4.4). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 2). AC at chosen output at (4, 8). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + 24/Q for positive Q; it declines over the relevant range.",
                "instruction": "For “Monopolist: short-run loss”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read price from MR at the selected output rather than demand/AR.",
                    "feedback": "MR = MC selects unconstrained monopoly-like output. The selling price comes from demand/AR at that output and differs from MR; regulation is identified separately."
                  },
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added AC point is 8, so price falls short of average economic cost at this output."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Economic-loss rectangle shaded polygon with vertices (0, 6) → (4, 6) → (4, 8) → (0, 8).",
                "instruction": "For “Monopolist: short-run loss”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Economic-loss rectangle.",
                    "feedback": "The rectangle spans four units between price 6 and AC 8, measuring economic loss of 8 rather than a marginal-cost gap."
                  },
                  {
                    "key": "misconception2",
                    "label": "Shade a profit rectangle between price and MC instead of AC.",
                    "feedback": "Total economic profit uses average total economic cost: (P − AC) × Q. MC describes an extra unit and cannot replace AC when measuring total profit or loss."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "First find MR = MC at Q = 4 on MR = 10 − 2Q and MC = 2. Read price 6 from AR = 10 − Q. Then read AC = 8. The rectangle has width 4 and height 2, representing loss 8.",
            "explanation": {
              "question": "Why are the output and profit decisions separate?",
              "options": [
                "MR = MC always guarantees positive economic profit.",
                "MR = MC can identify the least-loss output, provided short-run revenue covers variable cost."
              ],
              "answer": 1,
              "feedback": [
                "Equal marginal values do not imply P exceeds AC; normal profit and loss are both possible.",
                "Here AVC is assumed no greater than price; fixed costs can still cause P < AC and an economic loss."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.monopoly_welfare_diagram",
        "scope": "hl",
        "title": "Monopoly versus perfect competition price, output and welfare loss diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "benchmark",
            "title": "Monopoly versus a shared-cost competitive benchmark",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost. The benchmark uses exactly the same demand and MC.",
            "limitation": "This comparison does not prove a real competitive industry would have the same costs, innovation or product quality as a real monopolist.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Average revenue / demand (AR) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Average revenue / demand (AR)",
              "mr": "Marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "competitiveBenchmark": "Same-cost competitive benchmark",
              "profit": "Economic-profit rectangle",
              "deadweightLoss": "Deadweight-loss triangle",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide",
              "competitiveBenchmarkQ": "Same-cost competitive benchmark — dashed quantity guide",
              "competitiveBenchmarkP": "Same-cost competitive benchmark — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "With D = 10 − Q, MR = 10 − 2Q and MC = 2, does monopoly choose the P = MC quantity?",
              "options": [
                "Yes: the monopolist always charges marginal cost.",
                "No: MR = MC gives Qm = 4, less than Qc = 8."
              ],
              "answer": 1,
              "feedback": [
                "A single-price monopolist uses MR for its marginal revenue decision, not the demand price.",
                "At Q = 4, MR = 2 but demand price is 6. P = MC instead gives Q = 8."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal revenue (MR) connects (0, 10) → (5, 0). Marginal cost (MC) connects (0, 2) → (10, 2).",
                "instruction": "For “Monopoly versus a shared-cost competitive benchmark”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Choose output where demand price equals MC, ignoring MR.",
                    "feedback": "For an unconstrained single-price seller, MR = MC selects output; demand/AR then gives the price. The marginal-cost-pricing scenario explicitly compares a regulated alternative."
                  },
                  {
                    "key": "construct",
                    "label": "Add Marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Downward MR intersects horizontal MC = 2 at Q = 4, identifying the unconstrained single-price output decision; demand determines the price at that quantity."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (0.889, 11) to (10, 2.8). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 2). AC at chosen output at (4, 4). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + 8/Q for positive Q; it declines over the relevant range.",
                "instruction": "For “Monopoly versus a shared-cost competitive benchmark”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added AC point is 4, so price exceeds average economic cost at this output."
                  },
                  {
                    "key": "misconception1",
                    "label": "Read price from MR at the selected output rather than demand/AR.",
                    "feedback": "MR = MC selects unconstrained monopoly-like output. The selling price comes from demand/AR at that output and differs from MR; regulation is identified separately."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Same-cost competitive benchmark at (8, 2). Economic-profit rectangle shaded polygon with vertices (0, 4) → (4, 4) → (4, 6) → (0, 6). Deadweight-loss triangle shaded polygon with vertices (4, 2) → (4, 6) → (8, 2). Same-cost competitive benchmark — dashed quantity guide: dashed path (8, 0) → (8, 2). Same-cost competitive benchmark — dashed vertical-axis guide: dashed path (0, 2) → (8, 2).",
                "instruction": "For “Monopoly versus a shared-cost competitive benchmark”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Use the monopoly profit rectangle as the whole deadweight loss.",
                    "feedback": "Profit and welfare loss are different areas. The missing trades from Q = 4 to 8 carry net social benefit between demand and MC, yielding the welfare-loss triangle."
                  },
                  {
                    "key": "compare",
                    "label": "Add Same-cost competitive benchmark; Economic-profit rectangle; Deadweight-loss triangle, with dashed axis-reading guides.",
                    "feedback": "The benchmark point at (8,2) marks demand = MC; the triangle over missing units 4 to 8 is welfare loss, while the separate price–AC rectangle measures monopoly profit."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Monopoly has Qm = 4 and Pm = 6. The same-demand, same-MC benchmark gives Qc = 8 and Pc = 2. The triangle between D and MC over 4–8 is welfare loss 8. The additional P/AC rectangle is private profit, not the welfare-loss area.",
            "explanation": {
              "question": "Why are the unproduced units from 4 to 8 a welfare loss here?",
              "options": [
                "Their marginal willingness to pay exceeds the assumed marginal cost.",
                "Every unit of monopoly profit is automatically deadweight loss."
              ],
              "answer": 0,
              "feedback": [
                "Those trades would add net surplus in the shared-cost benchmark: loss = ½ × 4 × 4 = 8.",
                "Profit includes transfers and cost recovery; deadweight loss is the net surplus forgone from missing trades."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.natural_monopoly_diagram",
        "scope": "hl",
        "title": "Natural monopoly diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "unregulated",
            "title": "Declining average cost with monopoly pricing",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost. Relevant demand intersects a declining LRAC range.",
            "limitation": "Declining LRAC illustrates scale economies; it is not a general proof of cost subadditivity for every technology. Financing a regulated loss has its own costs.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Average revenue / demand (AR) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Average revenue / demand (AR)",
              "mr": "Marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Long-run average cost (LRAC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "profit": "Economic-profit rectangle",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "With LRAC = 2 + 12/Q and MC = 2, what happens as output rises?",
              "options": [
                "LRAC declines toward MC over the illustrated range.",
                "LRAC must rise because fixed cost is positive."
              ],
              "answer": 0,
              "feedback": [
                "The fixed cost 12 is spread across more units, so LRAC falls.",
                "A fixed cost raises average cost, but its per-unit burden shrinks as Q rises."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal revenue (MR) connects (0, 10) → (5, 0). Marginal cost (MC) connects (0, 2) → (10, 2).",
                "instruction": "For “Declining average cost with monopoly pricing”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Downward MR intersects horizontal MC = 2 at Q = 4, identifying the unconstrained single-price output decision; demand determines the price at that quantity."
                  },
                  {
                    "key": "misconception0",
                    "label": "Choose output where demand price equals MC, ignoring MR.",
                    "feedback": "For an unconstrained single-price seller, MR = MC selects output; demand/AR then gives the price. The marginal-cost-pricing scenario explicitly compares a regulated alternative."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Long-run average cost (LRAC) is a sampled smooth curve, shown from (1.333, 11) to (10, 3.2). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 2). AC at chosen output at (4, 5). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Long-run average cost (LRAC) follows LRAC = 2 + 12/Q for positive Q; it declines over the relevant range.",
                "instruction": "For “Declining average cost with monopoly pricing”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read price from MR at the selected output rather than demand/AR.",
                    "feedback": "MR = MC selects unconstrained monopoly-like output. The selling price comes from demand/AR at that output and differs from MR; regulation is identified separately."
                  },
                  {
                    "key": "read",
                    "label": "Add Long-run average cost (LRAC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added LRAC point is 5, so price exceeds average economic cost at this output."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Economic-profit rectangle shaded polygon with vertices (0, 5) → (4, 5) → (4, 6) → (0, 6).",
                "instruction": "For “Declining average cost with monopoly pricing”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Economic-profit rectangle.",
                    "feedback": "The rectangle spans four units between LRAC 5 and price 6, measuring economic profit as the price–average-cost gap times output."
                  },
                  {
                    "key": "misconception2",
                    "label": "Shade a profit rectangle between price and MC instead of AC.",
                    "feedback": "Total economic profit uses average total economic cost: (P − AC) × Q. MC describes an extra unit and cannot replace AC when measuring total profit or loss."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "MR = MC selects Q = 4; AR gives P = 6 and LRAC = 5. The profit rectangle is (6 − 5) × 4 = 4. LRAC remains above MC and declines across the relevant demand range.",
            "explanation": {
              "question": "What trade-off does marginal-cost pricing reveal?",
              "options": [
                "A subsidy is unnecessary whenever price equals marginal cost.",
                "Allocative pricing can require a financing solution for fixed costs."
              ],
              "answer": 1,
              "feedback": [
                "Here the explicit fixed cost remains unrecovered at P = MC; a sustainable policy must address it.",
                "At P = MC, the firm can incur a total-cost deficit even while an extra unit is priced at its marginal cost."
              ]
            },
            "extension": null
          },
          {
            "key": "marginalCostPrice",
            "title": "Marginal-cost pricing and cost recovery",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost. Relevant demand intersects a declining LRAC range.",
            "limitation": "Declining LRAC illustrates scale economies; it is not a general proof of cost subadditivity for every technology. Financing a regulated loss has its own costs.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Average revenue / demand (AR) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Average revenue / demand (AR)",
              "mr": "Marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Long-run average cost (LRAC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "profit": "Economic-loss rectangle",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "If a regulator requires P = MC = 2, can this firm cover LRAC at Q = 8?",
              "options": [
                "Yes: pricing at MC always covers total cost.",
                "No: LRAC is 3.5, so the firm makes a loss without support."
              ],
              "answer": 1,
              "feedback": [
                "MC covers the incremental unit cost, not necessarily fixed-cost recovery.",
                "At Q = 8, total revenue 16 is below total cost 28."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal revenue (MR) connects (0, 10) → (5, 0). Marginal cost (MC) connects (0, 2) → (10, 2).",
                "instruction": "For “Marginal-cost pricing and cost recovery”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Shift MC upward to force the regulated price to equal the unregulated monopoly price.",
                    "feedback": "Marginal-cost pricing changes the pricing rule, not technology or MC. Keep MC at 2 and retain MR as the unregulated comparison; regulation uses demand = MC."
                  },
                  {
                    "key": "construct",
                    "label": "Add Marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Downward MR and horizontal MC = 2 establish the unregulated MR = MC reference at Q = 4; regulated marginal-cost pricing instead uses demand = MC."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Long-run average cost (LRAC) is a sampled smooth curve, shown from (1.333, 11) to (10, 3.2). Chosen output and demand price at (8, 2). Marginal-decision reference: MR = MC at (4, 2). AC at chosen output at (8, 3.5). Chosen output and demand price — dashed quantity guide: dashed path (8, 0) → (8, 2). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 2) → (8, 2). Long-run average cost (LRAC) follows LRAC = 2 + 12/Q for positive Q; it declines over the relevant range.",
                "instruction": "For “Marginal-cost pricing and cost recovery”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Long-run average cost (LRAC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "The guides mark regulated Q = 8, P = MC = 2, where LRAC = 3.5 exceeds price; the separate MR = MC point at Q = 4 is the unregulated reference."
                  },
                  {
                    "key": "misconception1",
                    "label": "Use the MR = MC output Q = 4 as the regulated output.",
                    "feedback": "Q = 4 is the unregulated profit-maximizing reference. The stated regulator requires P = MC, so read demand at MC = 2 to obtain Q = 8; LRAC there is 3.5."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Economic-loss rectangle shaded polygon with vertices (0, 2) → (8, 2) → (8, 3.5) → (0, 3.5).",
                "instruction": "For “Marginal-cost pricing and cost recovery”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Shade a profit rectangle between price and MC instead of AC.",
                    "feedback": "Total economic profit uses average total economic cost: (P − AC) × Q. MC describes an extra unit and cannot replace AC when measuring total profit or loss."
                  },
                  {
                    "key": "compare",
                    "label": "Add Economic-loss rectangle.",
                    "feedback": "The loss rectangle spans Q = 0 to 8 between P = 2 and LRAC = 3.5, showing a cost-recovery shortfall of 12 under marginal-cost pricing."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The monopoly reference remains MR = MC at (Q,MC) = (4,2). Regulated output is Q = 8 with P = 2 and LRAC = 3.5, so the loss rectangle is 12.",
            "explanation": {
              "question": "What trade-off does marginal-cost pricing reveal?",
              "options": [
                "Allocative pricing can require a financing solution for fixed costs.",
                "A subsidy is unnecessary whenever price equals marginal cost."
              ],
              "answer": 0,
              "feedback": [
                "At P = MC, the firm can incur a total-cost deficit even while an extra unit is priced at its marginal cost.",
                "Here the explicit fixed cost remains unrecovered at P = MC; a sustainable policy must address it."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.oligopoly_diagram",
        "scope": "hl",
        "title": "Collusive oligopoly acting as monopoly diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "cartel",
            "title": "A joint-profit-maximizing cartel benchmark",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost. Successful joint coordination and aggregate curves are assumed.",
            "limitation": "The model does not solve cartel stability, member quotas or strategic retaliation. Real oligopolies need not behave as a monopolist.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Average revenue / demand (AR) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Average revenue / demand (AR)",
              "mr": "Marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "profit": "Economic-profit rectangle",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "If firms coordinate as one aggregate profit maximizer, which marginal condition determines joint output?",
              "options": [
                "Aggregate MR = aggregate MC.",
                "Each firm must sell the entire market quantity independently."
              ],
              "answer": 0,
              "feedback": [
                "Treating the cartel as a joint seller gives Q = 4, where MR = 10 − 2Q equals MC = 2.",
                "The diagram shows aggregate industry demand and costs, not every member’s separate curves."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal revenue (MR) connects (0, 10) → (5, 0). Marginal cost (MC) connects (0, 2) → (10, 2).",
                "instruction": "For “A joint-profit-maximizing cartel benchmark”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Downward MR intersects horizontal MC = 2 at Q = 4, identifying the unconstrained single-price output decision; demand determines the price at that quantity."
                  },
                  {
                    "key": "misconception0",
                    "label": "Choose output where demand price equals MC, ignoring MR.",
                    "feedback": "For an unconstrained single-price seller, MR = MC selects output; demand/AR then gives the price. The marginal-cost-pricing scenario explicitly compares a regulated alternative."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (0.889, 11) to (10, 2.8). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 2). AC at chosen output at (4, 4). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + 8/Q for positive Q; it declines over the relevant range.",
                "instruction": "For “A joint-profit-maximizing cartel benchmark”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read price from MR at the selected output rather than demand/AR.",
                    "feedback": "MR = MC selects unconstrained monopoly-like output. The selling price comes from demand/AR at that output and differs from MR; regulation is identified separately."
                  },
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added AC point is 4, so price exceeds average economic cost at this output."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Economic-profit rectangle shaded polygon with vertices (0, 4) → (4, 4) → (4, 6) → (0, 6).",
                "instruction": "For “A joint-profit-maximizing cartel benchmark”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Economic-profit rectangle.",
                    "feedback": "The rectangle spans four units between AC 4 and price 6, measuring economic profit as the price–average-cost gap times output."
                  },
                  {
                    "key": "misconception2",
                    "label": "Shade a profit rectangle between price and MC instead of AC.",
                    "feedback": "Total economic profit uses average total economic cost: (P − AC) × Q. MC describes an extra unit and cannot replace AC when measuring total profit or loss."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The aggregate cartel chooses joint Q = 4 and reads joint price P = 6 from D. The shown AC/profit rectangle belongs to the illustrative aggregate cost configuration.",
            "explanation": {
              "question": "Why is this not a diagram of every oligopoly?",
              "options": [
                "A small number of firms guarantees stable joint profit maximization.",
                "It assumes successful coordination; incentives to cheat can undermine that outcome."
              ],
              "answer": 1,
              "feedback": [
                "Market concentration alone does not establish collusion or remove incentives to undercut rivals.",
                "Interdependence can produce several outcomes; a cartel must sustain agreement on output, prices and allocation."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.monopolistic_profit_diagram",
        "scope": "hl",
        "title": "Monopolistic competition diagrams: abnormal profit, normal profit and losses",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "profit",
            "title": "Differentiated firm: abnormal profit",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "A loss-making firm operates only conditionally in the short run: assume price covers AVC. Entry, exit and cost changes need additional assumptions. Individual demand depends on differentiation and substitutes; entry may change it in the long run.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Average revenue / demand (AR) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Average revenue / demand (AR)",
              "mr": "Marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "profit": "Economic-profit rectangle",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At chosen Q = 4, price is 6 and AC is 4. Which outcome follows?",
              "options": [
                "A loss, because marginal cost alone determines total cost.",
                "Abnormal profit of 8."
              ],
              "answer": 1,
              "feedback": [
                "The marginal condition chooses quantity; the average-cost comparison measures total profit or loss.",
                "Economic profit = (P − AC) × Q = (6 − 4) × 4."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal revenue (MR) connects (0, 10) → (5, 0). Marginal cost (MC) connects (0, 2) → (10, 2).",
                "instruction": "For “Differentiated firm: abnormal profit”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Choose output where demand price equals MC, ignoring MR.",
                    "feedback": "For an unconstrained single-price seller, MR = MC selects output; demand/AR then gives the price. The marginal-cost-pricing scenario explicitly compares a regulated alternative."
                  },
                  {
                    "key": "construct",
                    "label": "Add Marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Downward MR intersects horizontal MC = 2 at Q = 4, identifying the unconstrained single-price output decision; demand determines the price at that quantity."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (0.889, 11) to (10, 2.8). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 2). AC at chosen output at (4, 4). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + 8/Q for positive Q; it declines over the relevant range.",
                "instruction": "For “Differentiated firm: abnormal profit”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added AC point is 4, so price exceeds average economic cost at this output."
                  },
                  {
                    "key": "misconception1",
                    "label": "Read price from MR at the selected output rather than demand/AR.",
                    "feedback": "MR = MC selects unconstrained monopoly-like output. The selling price comes from demand/AR at that output and differs from MR; regulation is identified separately."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Economic-profit rectangle shaded polygon with vertices (0, 4) → (4, 4) → (4, 6) → (0, 6).",
                "instruction": "For “Differentiated firm: abnormal profit”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Shade a profit rectangle between price and MC instead of AC.",
                    "feedback": "Total economic profit uses average total economic cost: (P − AC) × Q. MC describes an extra unit and cannot replace AC when measuring total profit or loss."
                  },
                  {
                    "key": "compare",
                    "label": "Add Economic-profit rectangle.",
                    "feedback": "The rectangle spans four units between AC 4 and price 6, measuring economic profit as the price–average-cost gap times output."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "First find MR = MC at Q = 4 on MR = 10 − 2Q and MC = 2. Read price 6 from AR = 10 − Q. Then read AC = 4. The rectangle has width 4 and height 2, representing profit 8.",
            "explanation": {
              "question": "Why are the output and profit decisions separate?",
              "options": [
                "MR = MC chooses output, while P versus AC determines economic profit.",
                "MR = MC always guarantees positive economic profit."
              ],
              "answer": 0,
              "feedback": [
                "Marginal revenue and marginal cost describe the next unit; AC includes the full average economic cost.",
                "Equal marginal values do not imply P exceeds AC; normal profit and loss are both possible."
              ]
            },
            "extension": null
          },
          {
            "key": "normal",
            "title": "Differentiated firm: normal profit",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "A loss-making firm operates only conditionally in the short run: assume price covers AVC. Entry, exit and cost changes need additional assumptions. Individual demand depends on differentiation and substitutes; entry may change it in the long run.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Average revenue / demand (AR) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Average revenue / demand (AR)",
              "mr": "Marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At chosen Q = 4, price is 6 and AC is 6. Which outcome follows?",
              "options": [
                "Zero economic profit.",
                "No normal return is earned."
              ],
              "answer": 0,
              "feedback": [
                "Price equals AC, which already includes the normal return.",
                "Normal profit is an opportunity cost included in economic AC, not an extra abnormal surplus."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal revenue (MR) connects (0, 10) → (5, 0). Marginal cost (MC) connects (0, 2) → (10, 2).",
                "instruction": "For “Differentiated firm: normal profit”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Downward MR intersects horizontal MC = 2 at Q = 4, identifying the unconstrained single-price output decision; demand determines the price at that quantity."
                  },
                  {
                    "key": "misconception0",
                    "label": "Choose output where demand price equals MC, ignoring MR.",
                    "feedback": "For an unconstrained single-price seller, MR = MC selects output; demand/AR then gives the price. The marginal-cost-pricing scenario explicitly compares a regulated alternative."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (1.778, 11) to (10, 3.6). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 2). AC at chosen output at (4, 6). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + 16/Q for positive Q; it declines over the relevant range.",
                "instruction": "For “Differentiated firm: normal profit”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read price from MR at the selected output rather than demand/AR.",
                    "feedback": "MR = MC selects unconstrained monopoly-like output. The selling price comes from demand/AR at that output and differs from MR; regulation is identified separately."
                  },
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added AC point is 6, so price covers all economic cost including normal profit."
                  }
                ],
                "answer": "read"
              }
            ],
            "comparison": "First find MR = MC at Q = 4 on MR = 10 − 2Q and MC = 2. Read price 6 from AR = 10 − Q. Then read AC = 6. P = AC, so there is no nonzero profit rectangle.",
            "explanation": {
              "question": "Why are the output and profit decisions separate?",
              "options": [
                "MR = MC always guarantees positive economic profit.",
                "MR = MC chooses output, while P versus AC determines economic profit."
              ],
              "answer": 1,
              "feedback": [
                "Equal marginal values do not imply P exceeds AC; normal profit and loss are both possible.",
                "Marginal revenue and marginal cost describe the next unit; AC includes the full average economic cost."
              ]
            },
            "extension": null
          },
          {
            "key": "loss",
            "title": "Differentiated firm: short-run loss",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "A loss-making firm operates only conditionally in the short run: assume price covers AVC. Entry, exit and cost changes need additional assumptions. Individual demand depends on differentiation and substitutes; entry may change it in the long run.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Average revenue / demand (AR) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Average revenue / demand (AR)",
              "mr": "Marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "profit": "Economic-loss rectangle",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "At chosen Q = 4, price is 6 and AC is 8. Which outcome follows?",
              "options": [
                "A profit, because price exceeds marginal cost.",
                "Economic loss of 8."
              ],
              "answer": 1,
              "feedback": [
                "The marginal condition chooses quantity; the average-cost comparison measures total profit or loss.",
                "Economic profit = (P − AC) × Q = (6 − 8) × 4."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal revenue (MR) connects (0, 10) → (5, 0). Marginal cost (MC) connects (0, 2) → (10, 2).",
                "instruction": "For “Differentiated firm: short-run loss”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Choose output where demand price equals MC, ignoring MR.",
                    "feedback": "For an unconstrained single-price seller, MR = MC selects output; demand/AR then gives the price. The marginal-cost-pricing scenario explicitly compares a regulated alternative."
                  },
                  {
                    "key": "construct",
                    "label": "Add Marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Downward MR intersects horizontal MC = 2 at Q = 4, identifying the unconstrained single-price output decision; demand determines the price at that quantity."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (2.667, 11) to (10, 4.4). Chosen output and demand price at (4, 6). Marginal-decision reference: MR = MC at (4, 2). AC at chosen output at (4, 8). Chosen output and demand price — dashed quantity guide: dashed path (4, 0) → (4, 6). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 6) → (4, 6). Average economic cost (AC) follows AC = 2 + 24/Q for positive Q; it declines over the relevant range.",
                "instruction": "For “Differentiated firm: short-run loss”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "At Q = 4, demand gives P = 6 while the added AC point is 8, so price falls short of average economic cost at this output."
                  },
                  {
                    "key": "misconception1",
                    "label": "Read price from MR at the selected output rather than demand/AR.",
                    "feedback": "MR = MC selects unconstrained monopoly-like output. The selling price comes from demand/AR at that output and differs from MR; regulation is identified separately."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Economic-loss rectangle shaded polygon with vertices (0, 6) → (4, 6) → (4, 8) → (0, 8).",
                "instruction": "For “Differentiated firm: short-run loss”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Shade a profit rectangle between price and MC instead of AC.",
                    "feedback": "Total economic profit uses average total economic cost: (P − AC) × Q. MC describes an extra unit and cannot replace AC when measuring total profit or loss."
                  },
                  {
                    "key": "compare",
                    "label": "Add Economic-loss rectangle.",
                    "feedback": "The rectangle spans four units between price 6 and AC 8, measuring economic loss of 8 rather than a marginal-cost gap."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "First find MR = MC at Q = 4 on MR = 10 − 2Q and MC = 2. Read price 6 from AR = 10 − Q. Then read AC = 8. The rectangle has width 4 and height 2, representing loss 8.",
            "explanation": {
              "question": "Why are the output and profit decisions separate?",
              "options": [
                "MR = MC can identify the least-loss output, provided short-run revenue covers variable cost.",
                "MR = MC always guarantees positive economic profit."
              ],
              "answer": 0,
              "feedback": [
                "Here AVC is assumed no greater than price; fixed costs can still cause P < AC and an economic loss.",
                "Equal marginal values do not imply P exceeds AC; normal profit and loss are both possible."
              ]
            },
            "extension": null
          },
          {
            "key": "longRun",
            "title": "Long-run tangency with excess capacity",
            "assumption": "Free entry and exit, differentiated products and the stated cost/demand configuration are assumed. Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost.",
            "limitation": "The result is a benchmark under entry assumptions; it does not establish that all real differentiated markets reach this exact tangency.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–16. Coordinates below are (horizontal, vertical). Average revenue / demand (AR) connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "ar": "Average revenue / demand (AR)",
              "mr": "Marginal revenue (MR)",
              "mc": "Marginal cost (MC)",
              "ac": "Average economic cost (AC)",
              "chosenOutput": "Chosen output and demand price",
              "marginalIntersection": "Marginal-decision reference: MR = MC",
              "averageCost": "AC at chosen output",
              "minimumAC": "Minimum average-cost point",
              "excessCapacity": "Excess-capacity output gap",
              "chosenOutputQ": "Chosen output and demand price — dashed quantity guide",
              "chosenOutputP": "Chosen output and demand price — dashed vertical-axis guide",
              "minimumACQ": "Minimum average-cost point — dashed quantity guide",
              "minimumACP": "Minimum average-cost point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Entry reduces the representative differentiated firm’s demand until AR is tangent to AC. Must it produce at minimum AC?",
              "options": [
                "No: tangency can occur to the left of minimum AC.",
                "Yes: zero economic profit always means minimum AC."
              ],
              "answer": 0,
              "feedback": [
                "Here AR = AC at Q = 8/3, while minimum AC occurs at Q = √(64/3), about 4.62.",
                "Zero profit requires P = AC at chosen output, not AC minimization."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Marginal revenue (MR) connects (0, 10) → (5, 0). Marginal cost (MC) connects (0, 2) → (10, 12).",
                "instruction": "For “Long-run tangency with excess capacity”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Marginal revenue (MR); Marginal cost (MC).",
                    "feedback": "Downward MR meets rising MC at Q ≈ 2.667, identifying the differentiated firm's output decision; its price must be read from the separate demand curve."
                  },
                  {
                    "key": "misconception0",
                    "label": "Choose output where demand price equals MC, ignoring MR.",
                    "feedback": "For an unconstrained single-price seller, MR = MC selects output; demand/AR then gives the price. The marginal-cost-pricing scenario explicitly compares a regulated alternative."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Average economic cost (AC) is a sampled smooth curve, shown from (1.185, 11.593) to (10, 8.067). Chosen output and demand price at (2.667, 7.333). Marginal-decision reference: MR = MC at (2.667, 4.667). AC at chosen output at (2.667, 7.333). Chosen output and demand price — dashed quantity guide: dashed path (2.667, 0) → (2.667, 7.333). Chosen output and demand price — dashed vertical-axis guide: dashed path (0, 7.333) → (2.667, 7.333). Average economic cost (AC) follows AC = 2 + Q/2 + 10.667/Q for positive Q; it falls toward a minimum and then rises.",
                "instruction": "For “Long-run tangency with excess capacity”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Read price from MR at the selected output rather than demand/AR.",
                    "feedback": "MR = MC selects unconstrained monopoly-like output. The selling price comes from demand/AR at that output and differs from MR; regulation is identified separately."
                  },
                  {
                    "key": "read",
                    "label": "Add Average economic cost (AC); Chosen output and demand price; Marginal-decision reference: MR = MC; AC at chosen output, with dashed axis-reading guides.",
                    "feedback": "The selected point reads Q ≈ 2.667 and P ≈ 7.333 where demand is tangent to AC, so economic profit is zero despite price exceeding MC."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Minimum average-cost point at (4.619, 6.619). Excess-capacity output gap: directed arrow (2.667, 1) → (4.619, 1). Minimum average-cost point — dashed quantity guide: dashed path (4.619, 0) → (4.619, 6.619). Minimum average-cost point — dashed vertical-axis guide: dashed path (0, 6.619) → (4.619, 6.619).",
                "instruction": "For “Long-run tangency with excess capacity”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Minimum average-cost point; Excess-capacity output gap, with dashed axis-reading guides.",
                    "feedback": "The AC-minimum point lies at Q ≈ 4.619, beyond the chosen Q ≈ 2.667; the horizontal gap measures excess capacity despite zero economic profit."
                  },
                  {
                    "key": "misconception2",
                    "label": "Mark the chosen output as the minimum-AC output because economic profit is zero.",
                    "feedback": "Zero economic profit occurs where demand is tangent to AC at Q ≈ 2.667. Minimum AC is farther right at Q ≈ 4.619, so the output gap remains despite normal profit."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "At Q = 8/3, AR = AC = 22/3 and MR = MC = 14/3. AR and AC have the same slope −1 there. The horizontal excess-capacity arrow runs from 8/3 to about 4.62, the minimum-AC quantity. No positive profit rectangle appears.",
            "explanation": {
              "question": "Why can zero economic profit coexist with excess capacity?",
              "options": [
                "Tangency requires the demand curve to be horizontal.",
                "The firm’s downward demand is tangent to AC before AC reaches its minimum."
              ],
              "answer": 1,
              "feedback": [
                "A horizontal demand curve describes the competitive benchmark; this differentiated firm retains downward demand.",
                "Differentiation gives downward AR, while entry can remove abnormal profit; the tangency point can remain on falling AC."
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.monopolistic_demand_diagram",
        "scope": "hl",
        "title": "Monopolistic competition and monopoly demand elasticity comparison diagram",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "substitutes",
            "title": "Compare demand at the same price and quantity",
            "assumption": "Illustrative single-product firm maximizing economic profit; curves describe the same period. Normal profit is included in economic cost. Compare both curves at the same P, Q and axis scale.",
            "limitation": "The curves illustrate a substitutability assumption, not an empirical estimate or a universal elasticity ranking.",
            "baseDescription": "Diagram panel: Horizontal axis: Quantity per period (Q), 0–10. Vertical axis: Price, cost or revenue per unit (P), 0–12. Coordinates below are (horizontal, vertical). Monopoly demand benchmark connects (0, 10) → (10, 0).",
            "labels": {
              "main": "Diagram panel",
              "q": "Quantity per period (Q)",
              "p": "Price, cost or revenue per unit (P)",
              "monopolyDemand": "Monopoly demand benchmark",
              "differentiatedDemand": "Differentiated-firm demand",
              "reference": "Shared reference point",
              "response": "Illustrated response",
              "referenceQ": "Shared reference point — dashed quantity guide",
              "referenceP": "Shared reference point — dashed vertical-axis guide"
            },
            "prediction": {
              "question": "Both curves pass through (4,6). If differentiated-firm demand is P = 8 − 0.5Q rather than monopoly D = 10 − Q, which is locally more elastic?",
              "options": [
                "The monopoly curve merely because its intercept is higher.",
                "The differentiated-firm curve, under the stated substitutability assumption."
              ],
              "answer": 1,
              "feedback": [
                "The intercept alone is not an elasticity measure; compare local slope and the common P/Q ratio.",
                "At the common point, |PED| is 3 for the differentiated firm and 1.5 for the monopoly example."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Differentiated-firm demand connects (0, 8) → (10, 3).",
                "instruction": "For “Compare demand at the same price and quantity”, build the first labelled relationship. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "Compare the two curves at different price–quantity points and use slope alone.",
                    "feedback": "The stated comparison evaluates both curves at (4,6), so the common P/Q ratio makes the local elasticity calculation meaningful."
                  },
                  {
                    "key": "construct",
                    "label": "Add Differentiated-firm demand.",
                    "feedback": "The added flatter differentiated-firm demand passes through (4,6), showing greater local price responsiveness than the steeper monopoly comparison on the same axes."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Shared reference point at (4, 6). Shared reference point — dashed quantity guide: dashed path (4, 0) → (4, 6). Shared reference point — dashed vertical-axis guide: dashed path (0, 6) → (4, 6).",
                "instruction": "For “Compare demand at the same price and quantity”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "read",
                    "label": "Add Shared reference point, with dashed axis-reading guides.",
                    "feedback": "The guides fix the shared point Q = 4, P = 6 on both demand curves, holding P/Q constant for a meaningful local elasticity comparison."
                  },
                  {
                    "key": "misconception1",
                    "label": "Use different reference prices and quantities to compare the two demand elasticities.",
                    "feedback": "Both curves pass through (4,6). Keeping this common P/Q reference isolates local responsiveness; MR = MC is not part of this demand-curve comparison."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Illustrated response: directed arrow (3, 6) → (5, 6).",
                "instruction": "For “Compare demand at the same price and quantity”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "Compare the two curves at different price–quantity points and use slope alone.",
                    "feedback": "The stated comparison evaluates both curves at (4,6), so the common P/Q ratio makes the local elasticity calculation meaningful."
                  },
                  {
                    "key": "compare",
                    "label": "Add Illustrated response.",
                    "feedback": "The horizontal arrow from Q = 3 to 5 at P = 6 is a response-comparison cue, not an observed movement along a demand curve or a new equilibrium."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "Both curves cross at (4,6). The horizontal arrow marks quantity responsiveness as a comparison cue, not a measured move between distinct equilibria.",
            "explanation": {
              "question": "Why qualify this elasticity ranking?",
              "options": [
                "It is an illustrative assumption about substitutes at a shared point, not a universal market-structure law.",
                "Monopolistic competition must be more elastic at every price and quantity in every market."
              ],
              "answer": 0,
              "feedback": [
                "Close substitutes can make individual demand more responsive, but actual responsiveness depends on market definition, substitutes and the point evaluated.",
                "A local example does not establish a universal ranking across products or evaluation points."
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  {
    "id": "2.12",
    "unit": 2,
    "title": "Equity and market outcomes",
    "summary": "Why might market incomes differ?",
    "question": "Why might market incomes differ?",
    "scope": "hl",
    "concepts": [
      "choice"
    ],
    "terms": [
      {
        "term": "income",
        "definition": "A flow of receipts, such as wages and rent, measured over a period."
      },
      {
        "term": "wealth",
        "definition": "A stock of assets minus liabilities, measured at a point in time."
      },
      {
        "term": "equity",
        "definition": "Fairness, evaluated using an explicit value criterion rather than assumed to mean equality."
      }
    ],
    "sections": [
      {
        "id": "inequality",
        "heading": "Income and wealth",
        "body": [
          "Income is a flow received over a period; wealth is a stock of assets less liabilities at a point in time. Market outcomes can be unequal because ownership, access to education, bargaining power and opportunities differ. Wealth can generate income, reinforcing differences over time.",
          "Households supply labour and other factors to firms and receive wages, rent, interest and profit. Differences in land, financial assets, skills, health, bargaining power and access to employment produce unequal factor incomes. Firms’ spending on factors is therefore not distributed equally merely because markets clear.",
          "Suppose one household earns wages of $2,000 monthly and owns $50,000 of assets yielding 4% per year; another earns the same wage but has no assets. The owner receives $2,000 annually, about $166.67 monthly, in additional asset income. If it saves part of that income, its asset stock can grow and generate more future income. Wealth and income are related but use different units and time frames.",
          "Inheritance and unequal access to education or credit can reinforce differences across generations. Taxes, transfers and public services can alter disposable incomes and opportunities, but involve funding and incentive trade-offs. Unequal outcomes do not by themselves establish a fairness judgment: equity requires a stated criterion."
        ],
        "scope": "hl",
        "limitation": "The relative importance of causes differs across societies."
      }
    ],
    "model": "none",
    "modelPrompt": "Use the worked situation to identify the mechanism, then explain one condition that could change the conclusion.",
    "modelAssumption": "The example isolates one mechanism; other relevant conditions are held fixed unless stated.",
    "modelLimitation": "These illustrative examples isolate a mechanism and cannot establish a universal prediction or a causal empirical finding.",
    "worked": {
      "prompt": "Households A and B each earn $2,000 monthly wages. A also owns $50,000 yielding 4% annually; B owns no assets.",
      "steps": [
        "A’s annual asset income is $50,000×0.04=$2,000.",
        "Convert to a monthly flow: $2,000/12≈$166.67.",
        "A’s monthly income is about $2,166.67 compared with B’s $2,000, before taxes and transfers.",
        "If A saves all the asset income, wealth rises to $52,000 before valuation changes; at the same yield it can generate more future income."
      ],
      "conclusion": "Equal wages need not imply equal total income or wealth; ownership links today’s asset stock to future income flows."
    },
    "quiz": {
      "question": "Two households have the same wages but one receives rent from an inherited property. What follows?",
      "options": [
        "Their wealth must be equal because wages are equal.",
        "Their total income can differ because ownership generates a factor-income flow.",
        "Rent is a stock and property is a flow.",
        "The example proves every unequal outcome is unfair."
      ],
      "answer": 1,
      "feedback": [
        "Equal labour income does not imply equal asset ownership.",
        "Correct: rent adds to wages, linking wealth to total household income.",
        "Property wealth is measured at a point in time; rent is received over a period.",
        "Fairness requires a value criterion; unequal outcomes alone do not settle the normative judgment."
      ],
      "scope": "hl"
    },
    "challenge": {
      "prompt": "Explain how unequal wealth can generate unequal incomes even when two households earn identical wages.",
      "hint": "Distinguish a stock at a point in time from a flow over a period.",
      "modelAnswer": "Wealth is a stock of net assets, while income is a flow. A household owning rental property or financial assets can receive rent, interest or dividends in addition to wages. A household without those assets receives no corresponding flow, so equal wages can coexist with unequal total income. Saving some asset income can enlarge wealth and reinforce the gap over time.",
      "rubric": [
        "Distinguish wealth stock from income flow.",
        "Identify an asset and its related income.",
        "Explain why equal wages need not imply equal total income.",
        "Explain how saving asset income can reinforce future differences."
      ],
      "command": "Explain",
      "marks": 4,
      "scope": "hl"
    },
    "coverage": [
      {
        "id": "2.12.inequality",
        "point": "Free markets and unequal income and wealth distribution",
        "status": "taught",
        "evidence": "section:inequality"
      },
      {
        "id": "2.12.circular_flow_diagram",
        "point": "Circular flow diagram illustrating causes of inequality",
        "status": "taught",
        "evidence": "diagram:2.12.circular_flow_diagram"
      }
    ],
    "diagrams": [
      {
        "id": "2.12.circular_flow_diagram",
        "scope": "hl",
        "title": "Circular flow diagram illustrating causes of inequality",
        "introduction": "Predict the economic result, construct the labelled layers in order, compare the initial and final views, then explain the mechanism. This guided example supports practice; it does not certify independent mastery.",
        "scenarios": [
          {
            "key": "inequality",
            "title": "Income groups and conditional asset feedback",
            "assumption": "The diagram is a simplified flow map. Layout coordinates are positions, not prices or quantities; real and money flows are distinguished by their labels and direction.",
            "limitation": "Unequal factor ownership is one possible cause of inequality, not the sole cause. Saving, returns, debt, transfers and asset prices affect wealth.",
            "baseDescription": "Diagram panel: Layout only; no economic axis scale. Higher-income households sector box. Firms sector box. Real factors: households → firms; directed path from Higher-income households to Firms. Factor income 80: firms → higher-income households; directed path from Firms to Higher-income households.",
            "labels": {
              "main": "Diagram panel",
              "flowX": "Flow layout: horizontal position",
              "flowY": "Flow layout: vertical position",
              "households": "Higher-income households",
              "firms": "Firms",
              "finance": "Financial sector",
              "government": "Government",
              "foreign": "Foreign sector",
              "householdsLow": "Lower-income households",
              "factors": "Real factors: households → firms",
              "income": "Factor income 80: firms → higher-income households",
              "goods": "Real goods and services: firms → households",
              "expenditure": "Consumption expenditure: households → firms",
              "saving": "Saving 20: higher-income households → finance",
              "investment": "Investment spending (I): finance → firms",
              "tax": "Taxes (T): households → government",
              "governmentSpending": "Government spending (G): government → firms",
              "imports": "Import spending leakage (M): domestic firms → foreign sector",
              "exports": "Export receipts injection (X): foreign sector → domestic firms",
              "factorsLow": "Real factors: lower-income households → firms",
              "incomeLow": "Factor income 20: firms → lower-income households",
              "savingLow": "Saving 2: lower-income households → finance",
              "taxLow": "Taxes: lower-income households → government",
              "transfers": "Transfers: government → lower-income households",
              "assetFeedback": "Conditional asset-income feedback: finance → households"
            },
            "prediction": {
              "question": "Two groups earn 80 and 20 and save 20 and 2. Must their wealth remain equal?",
              "options": [
                "No: unequal saving can contribute to divergent asset accumulation.",
                "Yes: the same economy guarantees equal asset ownership."
              ],
              "answer": 0,
              "feedback": [
                "Saving 20 versus 2 creates different potential additions to assets, conditional on returns, liabilities and how funds are invested.",
                "Aggregate membership does not equalize income, saving or wealth."
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "Diagram panel: Financial sector sector box. Government sector box. Foreign sector sector box. Lower-income households sector box.",
                "instruction": "Which sector boxes must be added to distinguish the participants beyond the starting household–firm core?",
                "choices": [
                  {
                    "key": "construct",
                    "label": "Add Financial sector; Government; Foreign sector; Lower-income households.",
                    "feedback": "The additional boxes separate finance, government, the foreign sector and lower-income households, allowing distinct institutional and household flows to be traced."
                  },
                  {
                    "key": "misconception0",
                    "label": "Merge finance, government and the foreign sector into the firms box.",
                    "feedback": "Separate sector boxes allow saving and investment, taxes and spending, and import/export payments to be traced in distinct directions. Merging the sectors hides the leakage/injection mechanisms."
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "Diagram panel: Real goods and services: firms → households; directed path from Firms to Higher-income households. Consumption expenditure: households → firms; directed path from Higher-income households to Firms. Real factors: lower-income households → firms; directed path from Lower-income households to Firms. Factor income 20: firms → lower-income households; directed path from Firms to Lower-income households.",
                "instruction": "For “Income groups and conditional asset feedback”, read the marked economic outcomes. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "Send goods and consumption spending from firms to households in the same direction.",
                    "feedback": "Goods and services go from firms to households; household spending returns to firms. These real and money flows are counterparts moving in opposite directions."
                  },
                  {
                    "key": "read",
                    "label": "Add Real goods and services: firms → households; Consumption expenditure: households → firms; Real factors: lower-income households → firms; Factor income 20: firms → lower-income households.",
                    "feedback": "The opposing goods and consumption-payment arrows complete the higher-income household–firm loop; the lower-income factor and income-20 arrows show labour inputs exchanged for income."
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "Diagram panel: Saving 20: higher-income households → finance; directed path from Higher-income households to Financial sector. Investment spending (I): finance → firms; directed path from Financial sector to Firms. Taxes (T): households → government; directed path from Higher-income households to Government. Government spending (G): government → firms; directed path from Government to Firms. Import spending leakage (M): domestic firms → foreign sector; directed path from Firms to Foreign sector. Export receipts injection (X): foreign sector → domestic firms; directed path from Foreign sector to Firms. Saving 2: lower-income households → finance; directed path from Lower-income households to Financial sector. Taxes: lower-income households → government; directed path from Lower-income households to Government. Transfers: government → lower-income households; directed path from Government to Lower-income households. Conditional asset-income feedback: finance → households; directed path from Financial sector to Higher-income households.",
                "instruction": "For “Income groups and conditional asset feedback”, complete the visual comparison. Which drawing matches the stated scenario?",
                "choices": [
                  {
                    "key": "compare",
                    "label": "Add Saving 20: higher-income households → finance; Investment spending (I): finance → firms; Taxes (T): households → government; Government spending (G): government → firms; Import spending leakage (M): domestic firms → foreign sector; Export receipts injection (X): foreign sector → domestic firms; Saving 2: lower-income households → finance; Taxes: lower-income households → government; Transfers: government → lower-income households; Conditional asset-income feedback: finance → households.",
                    "feedback": "The added arrows distinguish saving 20 versus 2 and government transfers to lower-income households, alongside domestic leakages and injections; the asset-income return is a conditional feedback to higher-income households."
                  },
                  {
                    "key": "misconception2",
                    "label": "Draw saving, tax and import payments as injections into domestic spending.",
                    "feedback": "S, T and M are leakages from the domestic spending stream in this example. I, G and X are injections in the opposite direction; the flow labels distinguish them."
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "The high-income group receives 80 and the lower-income group 20, total 100. Saving flows are 20 and 2. Taxes and transfers can redistribute; the asset-feedback arrow is conditional.",
            "explanation": {
              "question": "Why is the finance-to-household feedback arrow conditional?",
              "options": [
                "Saving is itself the same thing as current factor income.",
                "Saving may finance assets that later generate income, but saving is not automatically the saver’s own productive investment."
              ],
              "answer": 1,
              "feedback": [
                "Existing assets can generate income, while saving changes possible asset holdings; these concepts must be distinguished.",
                "Income is a flow per period; wealth is a stock of assets less liabilities. Returns and ownership connect them over time."
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  }
];
if (typeof module !== 'undefined') module.exports = globalThis.ECON_LESSONS;
