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
          "Moving from (2,3) to (2,6) uses idle capacity: actual output grows without moving the frontier. Training workers or acquiring better equipment can move the frontier outward. On a bowed-out curve, later tables cost progressively more baskets because workers best suited to tables are used first. These are instructions for interpreting a curve; this lesson does not supply the complete assessed set of PPC diagrams."
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
          "Circular-flow reasoning starts with households supplying factors to firms and receiving wages, rent, interest and profit; households spend on firms’ output in the opposite direction. Saving, taxes and imports withdraw spending from the domestic flow; investment, government spending and exports inject it. Banks connect saving to investment, government taxes and spends, and the foreign sector trades. This is a verbal orientation; the five-sector diagram is not supplied."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "1.1.ppc_growth_diagram",
        "point": "PPC diagram: actual growth and growth in productive possibilities",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "1.1.ppc_cost_diagram",
        "point": "PPC diagram: increasing versus constant opportunity cost",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "1.1.circular_flow_diagram",
        "point": "Circular flow diagram: sectors, interdependence, leakages and injections",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
    ]
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
          "Draw price per bun vertically and buns per day horizontally. Plot (Q=5,P=4) and (Q=9,P=2) on one demand curve D. A price fall moves down and right along D: quantity demanded rises, while demand itself has not shifted. A schedule and these plotting instructions do not replace the omitted assessed diagram."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
          "For linear demand with a $10 price intercept, linear supply with a $2 price intercept, equilibrium price $6 and output 40, consumer surplus is ½×40×($10−$6)=$80; producer surplus is ½×40×($6−$2)=$80. Axes must specify the time period: with units per day, the dollar areas are per day. Full diagram construction and diagram-derived assessment remain omitted."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.3.changes_diagram",
        "point": "Changes in equilibrium, shortages, surpluses and price mechanism diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
    ]
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
          "Total revenue equals price times quantity. For an elastic response, a price rise reduces revenue; for an inelastic response it raises revenue, other things equal. Firms and governments use estimates to anticipate pricing and tax effects.",
          "Before that price rise, total revenue is $10×100=$1,000; after it, $11×80=$880. The percentage quantity loss outweighs the price gain. With inelastic demand a small price rise instead increases revenue, while unit elasticity leaves revenue unchanged locally. Revenue is sales income, not profit: costs can also change.",
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
    "modelAssumption": "Initial-value percentage changes over the stated range; a stable demand relation and other determinants held fixed.",
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.5.ped_line_hl",
        "point": "Changing PED along a straight-line demand curve diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
          "A $5 floor instead gives Qs=70 and Qd=50: a surplus of 20. If government buys it, taxpayers fund the purchases; without purchases, some output remains unsold and some producers may receive no sale. A floor below equilibrium is non-binding. Enforcement and access determine who benefits. These numerical explanations do not supply the full stakeholder diagrams.",
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.7.floor_diagram",
        "point": "Price floor diagram and stakeholder effects",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.7.tax_diagram",
        "point": "Indirect tax diagram and stakeholder effects",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.7.subsidy_diagram",
        "point": "Subsidy diagram and stakeholder effects",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
          "For a cost-side diagram put costs/benefits per unit vertically and output per period horizontally. A negative production externality places MSC above MPC; with MSB=MPB, the private intersection is to the right of the social intersection. For a negative consumption externality put MSB below MPB with MSC=MPC. Positive production places MSC below MPC; positive consumption puts MSB above MPB. Those positive cases have private output below the social optimum. No four-case set of plotted diagrams is supplied here."
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
          "If Qm−Q*=20 units and the gap between MSC and MSB at Qm is $6, with linear curves meeting at Q*, welfare loss is ½×20×$6=$60 per period. This triangle formula requires the stated geometry; a non-linear gap requires a different area calculation. The missing assessed diagram is not supplied by this arithmetic."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.8.negative_production_diagram",
        "point": "Negative production externality and welfare loss diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.8.negative_consumption_diagram",
        "point": "Negative consumption externality and welfare loss diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.8.positive_production_diagram",
        "point": "Positive production externality and welfare loss diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.8.positive_consumption_diagram",
        "point": "Positive consumption externality and welfare loss diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.8.carbon_diagram",
        "point": "Carbon tax effects on a polluting industry diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.8.subsidy_diagram",
        "point": "Subsidy response diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.8.regulation_diagram",
        "point": "Legislation and regulation response diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.8.education_diagram",
        "point": "Education response diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
    ]
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
    ]
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
          "Monopolistic competition allows product variety and some price-setting ability. Successful differentiated firms may earn abnormal profit in the short run; entry of alternatives reduces each incumbent’s demand until normal profit in the simple long-run model. Downward-sloping demand typically leaves P>MC and output below the minimum-AC scale, trading some efficiency for variety. These are verbal outcomes, not the omitted firm-diagram set.",
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
    "modelLimitation": "Real firms face uncertainty, strategic responses and multiple objectives; not every assessed firm diagram is supplied.",
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.11.perfect_profit_diagram",
        "point": "Perfect competition diagrams: abnormal profit, normal profit and losses",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.11.perfect_equilibrium_diagram",
        "point": "Perfect competition equilibrium and allocative efficiency diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.11.monopoly_welfare_diagram",
        "point": "Monopoly versus perfect competition price, output and welfare loss diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.11.natural_monopoly_diagram",
        "point": "Natural monopoly diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      },
      {
        "id": "2.11.monopolistic_demand_diagram",
        "point": "Monopolistic competition and monopoly demand elasticity comparison diagram",
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
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
          "Inheritance and unequal access to education or credit can reinforce differences across generations. Taxes, transfers and public services can alter disposable incomes and opportunities, but involve funding and incentive trade-offs. Unequal outcomes do not by themselves establish a fairness judgment: equity requires a stated criterion. A circular-flow diagram showing these channels is still omitted."
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
        "status": "omitted",
        "evidence": "The complete labelled diagram and its construction practice are not supplied. Verbal reasoning or arithmetic in this lesson is not a substitute for this diagram objective."
      }
    ]
  }
];
if (typeof module !== 'undefined') module.exports = globalThis.ECON_LESSONS;
