// Manual Hong Kong Traditional Chinese overlay; canonical metadata remains in content-en.js.
globalThis.ECON_TRANSLATIONS = globalThis.ECON_TRANSLATIONS || {};
globalThis.ECON_TRANSLATIONS['zh-Hant-HK'] = {
  "1.1": {
    "title": "甚麼是經濟學？",
    "summary": "資源稀缺時，社會如何作出選擇？",
    "question": "資源稀缺時，社會如何作出選擇？",
    "terms": [
      {
        "term": "scarcity",
        "definition": "相對於人們希望使用資源的用途，資源是有限的。"
      },
      {
        "term": "opportunity cost",
        "definition": "作出選擇時放棄的次佳選擇。"
      },
      {
        "term": "production possibilities curve",
        "definition": "在既定資源和技術下，兩種產出可達到組合的邊界。"
      }
    ],
    "sections": [
      {
        "id": "choice",
        "heading": "稀缺性與選擇",
        "body": [
          "經濟學研究個人及社會如何在資源有限下選擇。Microeconomics研究個別市場和決策；macroeconomics研究整體經濟結果。需要與慾望可超過可用資源，因此sustainability關注選擇能否持續而不耗盡資源。",
          "經濟學以證據探究人的決策及制度，故屬社會科學。Microeconomics問巴士票價如何影響乘客；macroeconomics問整體失業如何變化。人的反應各異，所以經濟預測帶有條件，並非物理定律。",
          "用九個角度解釋選擇：scarcity（資源有限）、choice（選取替代方案）、efficiency（避免浪費）、equity（公平）、economic well-being（物質生活及保障）、sustainability（維持後代的可能性）、change（隨時間調整）、interdependence（決策影響他人）、intervention（有意的政策行動）。限水可保存稀缺資源，亦帶出住戶之間的公平問題。"
        ],
        "limitation": "模型簡化了人類多樣的動機。"
      },
      {
        "id": "production",
        "heading": "資源與機會成本",
        "body": [
          "land、labour、capital及entrepreneurship是生產要素。選一種用途便放棄次佳用途，形成opportunity cost。Free good只有在足夠充裕的情況下才沒有機會成本。",
          "Land指泥土、陽光等天然資源；labour是人的勞力和技能；capital是焗爐等已生產設備，而非金錢本身；entrepreneurship組織資源並承擔營商風險。麵包店四者皆需。預算讓人取得資源，卻不消除稀缺性。",
          "Opportunity cost只計放棄的次佳選擇，並非所有被拒方案的總和。若兩小時溫習的次佳用途是賺$24的工作，該工作就是機會成本。人煙稀少處的空氣可為free good，但污染令防害需要資源時，清新空氣便變得稀缺。"
        ],
        "limitation": "情況改變可令資源不再是free good。"
      },
      {
        "id": "ppc",
        "heading": "生產可能性",
        "body": [
          "Production possibilities curve（PPC）顯示既定資源和技術下兩財可達的最大組合。內部點可反映失業或低效率；外部點目前不可達。移近邊界可增加實際產出；邊界外移代表生產能力增加。資源愈來愈不適合擴張中的活動時，向外彎的邊界可表示機會成本遞增；直線則表示機會成本不變。",
          "畫PPC時，橫軸為每週桌子數，縱軸為每週籃子數。連接(0,10)和(5,0)的直線上，(2,6)有效率，(2,3)可達但低於產能，(4,6)以現有資源不可達。沿此線每多一張桌子便放棄兩個籃子。",
          "從(2,3)移至(2,6)是利用閒置產能：實際產出增加，邊界沒有移動。培訓工人或添置較佳設備可令邊界外移。外彎曲線先使用最適合製桌的工人，所以後來每張桌子的籃子代價愈大。"
        ],
        "limitation": "兩種財貨無法涵蓋現實所有選擇。"
      },
      {
        "id": "systems",
        "heading": "經濟制度",
        "body": [
          "所有經濟都要決定生產甚麼及多少、如何生產、為誰生產。市場靠價格及私人決策；計劃制度較依賴中央指令。混合經濟結合兩者，包括政府干預。",
          "加價可鼓勵企業供應稀缺產品並抑制部分購買；計劃機關則可分配產量目標及領取權。兩者都不保證公平或良好資訊。混合經濟可用市場供應麵包、公營基本教育，並以污染規例管理工廠。",
          "Circular flow由住戶向企業供應要素、收取工資、租金、利息及利潤開始；住戶支出購買企業產出，流向相反。儲蓄、稅項、進口是國內支出的漏出；投資、政府支出、出口是注入。銀行連接儲蓄與投資，政府徵稅和支出，海外部門貿易。"
        ],
        "limitation": "現實經濟制度分佈於一個連續範圍。"
      }
    ],
    "modelPrompt": "預測重新分配固定資源如何改變兩種產出；分清移近產能與改變產能。",
    "modelAssumption": "假設兩財、固定時段及既定資源技術；邊界點有效使用資源。",
    "modelLimitation": "兩財邊界省略分配、品質和環境後果；單看內部點無法判斷原因。",
    "worked": {
      "prompt": "某鎮的直線PPC由每週零桌子、10籃子連至5桌子、零籃子。它沿邊界由1張桌子增至3張。",
      "steps": [
        "斜率表示每多一張桌子放棄10/5=2個籃子。",
        "起初製8個籃子；桌子為3張時可製4個籃子。",
        "多2張桌子的代價是8−4=4個籃子。資源與技術未變。"
      ],
      "conclusion": "該鎮改變產出組合，並沒有增加生產能力。"
    },
    "quiz": {
      "question": "某鎮由內部點移至既有PPC，最佳解釋是甚麼？",
      "options": [
        "改善現有資源使用可增加實際產出。",
        "技術必定進步並使PPC外移。",
        "該點在邊界上，所以不可達。",
        "所有生產的機會成本已消失。"
      ],
      "feedback": [
        "正確：可在不改變產能下減少閒置資源或低效率。",
        "技術改變可移動產能，但這次是移到同一邊界。",
        "在假設下，邊界點可達且有生產效率。",
        "即使充分使用資源，兩財仍有取捨。"
      ]
    },
    "challenge": {
      "hint": "指出稀缺的實物資源及其次佳用途。"
    },
    "coverage": [
      {
        "id": "1.1.social_science",
        "point": "經濟學作為社會科學；microeconomics與macroeconomics之別"
      },
      {
        "id": "1.1.central_concepts",
        "point": "九個核心概念"
      },
      {
        "id": "1.1.factors",
        "point": "生產要素"
      },
      {
        "id": "1.1.scarcity",
        "point": "稀缺性、需要、慾望及可持續性"
      },
      {
        "id": "1.1.opportunity_cost",
        "point": "機會成本與free goods"
      },
      {
        "id": "1.1.economic_questions",
        "point": "基本經濟問題"
      },
      {
        "id": "1.1.systems",
        "point": "市場、計劃、混合制度與干預"
      },
      {
        "id": "1.1.ppc_assumptions",
        "point": "PPC假設及特徵"
      },
      {
        "id": "1.1.ppc_choice_diagram",
        "point": "PPC圖：稀缺性、選擇、機會成本、失業及效率"
      },
      {
        "id": "1.1.ppc_growth_diagram",
        "point": "PPC圖：實際增長與生產可能性的增長"
      },
      {
        "id": "1.1.ppc_cost_diagram",
        "point": "PPC圖：遞增及不變機會成本"
      },
      {
        "id": "1.1.circular_flow_diagram",
        "point": "Circular flow圖：部門、相互依存、漏出及注入"
      }
    ],
    "diagrams": [
      {
        "id": "1.1.ppc_choice_diagram",
        "scope": "common",
        "title": "生產可能性曲線（PPC）圖：稀少性、選擇、機會成本、失業與效率",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "choice",
            "title": "可行、有效率，還是超出產能？",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "邊界代表生產可能性，而非社會最偏好的組合。邊界內的產出可能反映失業或效率不足。",
            "baseDescription": "圖表面板: 橫軸：每期X產量, 0–12。縱軸：每期Y產量, 0–12。以下座標為（水平，垂直）。 生產可能性曲線（PPC）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "outputX": "每期X產量",
              "outputY": "每期Y產量",
              "frontier": "生產可能性曲線（PPC）",
              "A": "A：邊界內的可行點",
              "B": "B：邊界上的有效率點",
              "C": "C：邊界上的有效率點",
              "D": "D：目前無法達到的點",
              "choice": "選擇B→C",
              "opportunityCost": "機會成本輔助線：放棄的Y"
            },
            "prediction": {
              "question": "在X + Y = 10的邊界上，經濟目前能否生產D = (7,6)？",
              "options": [
                "不能：D超出目前產能。",
                "能：任何兩種物品的組合都可行。"
              ],
              "answer": 0,
              "feedback": [
                "D合共需要13單位，超過邊界的總量10。",
                "稀少性限制可行組合；兩個數量均為正並不代表該點可達到。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: A：邊界內的可行點位於(2, 4)。B：邊界上的有效率點位於(2, 8)。",
                "instruction": "就「可行、有效率，還是超出產能？」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上A：邊界內的可行點；B：邊界上的有效率點。",
                    "feedback": "A在(2,4)，位於邊界內；B在(2,8)，位於邊界上：相同X產量可配合更充分運用產能。"
                  },
                  {
                    "key": "misconception0",
                    "label": "每當產出點移動，就移動邊界。",
                    "feedback": "點的移動可改變資源運用或生產選擇，而不改變產能。只採用本情境指明的邊界變動。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: C：邊界上的有效率點位於(5, 5)。D：目前無法達到的點位於(7, 6)。",
                "instruction": "就「可行、有效率，還是超出產能？」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把D標為有效率，把A標為無法達到。",
                    "feedback": "D = (7,6)位於X + Y = 10以外，A = (2,4)則在其內。有效率須是B或C等可行的邊界點。"
                  },
                  {
                    "key": "read",
                    "label": "加上C：邊界上的有效率點；D：目前無法達到的點。",
                    "feedback": "C在(5,5)，位於X + Y = 10上；D在(7,6)，合共需要13單位，超出目前產能。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 選擇B→C：定向箭嘴 (2, 8) → (5, 5)。機會成本輔助線：放棄的Y：破線路徑 (2, 8) → (5, 8) → (5, 5)。",
                "instruction": "就「可行、有效率，還是超出產能？」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上選擇B→C，並附讀取座標軸的破線輔助線。",
                    "feedback": "B→C箭嘴增加3 X，破線路徑量度Y由8降至5；這項犧牲就是機會成本。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把Y的機會成本顯示為C點的總產出。",
                    "feedback": "機會成本是放棄的次佳產出：B→C使Y由8降至5，犧牲3 Y，而非C點剩餘的總產出。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "A (2,4)在邊界內；B (2,8)與C (5,5)有效率；D (7,6)在邊界外。B→C增加3 X並犧牲3 Y。",
            "explanation": {
              "question": "為何B→C有機會成本（opportunity cost）？",
              "options": [
                "因為邊界內的點總是用盡全部資源。",
                "在充分發揮產能時，增加X就須放棄Y。"
              ],
              "answer": 1,
              "feedback": [
                "A在邊界內，因此閒置或未有效運用的資源可容許增加產出，而無須作同樣的取捨。",
                "輔助路徑記錄X由2升至5時，Y由8降至5。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "1.1.ppc_growth_diagram",
        "scope": "common",
        "title": "生產可能性曲線（PPC）圖：實際增長與生產可能性增長",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "actual",
            "title": "實際增長（actual growth）：運用閒置資源",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "邊界移動展示潛在產出，並不保證實際產出達到新邊界。",
            "baseDescription": "圖表面板: 橫軸：每期X產量, 0–12。縱軸：每期Y產量, 0–12。以下座標為（水平，垂直）。 生產可能性曲線（PPC）連接(0, 10) → (10, 0)。 初始點位於(2, 4)。",
            "labels": {
              "main": "圖表面板",
              "outputX": "每期X產量",
              "outputY": "每期Y產量",
              "frontier": "生產可能性曲線（PPC）",
              "initial": "初始點",
              "capacity": "現有產能上的點",
              "final": "最終點",
              "growth": "實際產出增長箭嘴",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "若產出由(2,4)移至現有邊界上的(2,8)，有何改變？",
              "options": [
                "生產邊界必須向外移。",
                "實際產出增加，而邊界不變。"
              ],
              "answer": 1,
              "feedback": [
                "更充分運用現有資源，未必改變最大產能。",
                "在X = 2時，運用現有潛力使Y由4升至8。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 現有產能上的點位於(2, 8)。",
                "instruction": "在讀取產出比較前，哪幅圖先確立所述的產能參照？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "每當產出點移動，就移動邊界。",
                    "feedback": "點的移動可改變資源運用或生產選擇，而不改變產能。只採用本情境指明的邊界變動。"
                  },
                  {
                    "key": "construct",
                    "label": "加上現有產能上的點。",
                    "feedback": "(2,8)在現有邊界上：到達該點代表更充分運用目前產能，無須移動邊界。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(2, 8)。最終點——數量讀值破線：破線路徑 (2, 0) → (2, 8)。最終點——縱軸讀值破線：破線路徑 (0, 8) → (2, 8)。",
                "instruction": "就「實際增長（actual growth）：運用閒置資源」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "輔助線讀出最終邊界點的X = 2與Y = 8，區分更充分運用資源與產能增加。"
                  },
                  {
                    "key": "misconception1",
                    "label": "每當產出點移動，就移動邊界。",
                    "feedback": "點的移動可改變資源運用或生產選擇，而不改變產能。只採用本情境指明的邊界變動。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 實際產出增長箭嘴：定向箭嘴 (2, 4) → (2, 8)。",
                "instruction": "就「實際增長（actual growth）：運用閒置資源」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "每當產出點移動，就移動邊界。",
                    "feedback": "點的移動可改變資源運用或生產選擇，而不改變產能。只採用本情境指明的邊界變動。"
                  },
                  {
                    "key": "compare",
                    "label": "加上實際產出增長箭嘴。",
                    "feedback": "由(2,4)至(2,8)的向上箭嘴顯示減少閒置產能帶來實際產出增長，X保持不變。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "箭嘴連接內部點(2,4)與邊界點(2,8)；X + Y = 10的邊界不變。",
            "explanation": {
              "question": "哪項觀察可區分實際增長與潛在增長？",
              "options": [
                "移近現有邊界顯示資源運用改善。",
                "每次實際產出增加，都必須有邊界外移。"
              ],
              "answer": 0,
              "feedback": [
                "減少閒置資源可增加經濟的實際生產。",
                "初始點在邊界內，已顯示增產空間。"
              ]
            },
            "extension": null
          },
          {
            "key": "capacity",
            "title": "產能增長：邊界向外移",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "邊界移動展示潛在產出，並不保證實際產出達到新邊界。",
            "baseDescription": "圖表面板: 橫軸：每期X產量, 0–12。縱軸：每期Y產量, 0–12。以下座標為（水平，垂直）。 生產可能性曲線（PPC）連接(0, 10) → (10, 0)。 初始點位於(2, 4)。",
            "labels": {
              "main": "圖表面板",
              "outputX": "每期X產量",
              "outputY": "每期Y產量",
              "frontier": "生產可能性曲線（PPC）",
              "newFrontier": "新的生產可能性曲線",
              "initial": "初始點",
              "final": "最終點",
              "growth": "運用擴大產能增加產出",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "若產能由X + Y = 10擴至X + Y = 12，有何改變？",
              "options": [
                "邊界向外移；更多組合變得可行。",
                "只是在不變的邊界內移動一個點。"
              ],
              "answer": 0,
              "feedback": [
                "兩個截距均由10升至12；在X = 2時，潛在Y升至10。",
                "產能改變會改變邊界，而不只是資源運用程度。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 新的生產可能性曲線連接(0, 12) → (12, 0)。",
                "instruction": "在讀取產出比較前，哪幅圖先確立所述的產能參照？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上新的生產可能性曲線。",
                    "feedback": "新邊界在兩軸的截距為12而非10，顯示生產可能性擴大，而非只有資源運用改變。"
                  },
                  {
                    "key": "misconception0",
                    "label": "每當產出點移動，就移動邊界。",
                    "feedback": "點的移動可改變資源運用或生產選擇，而不改變產能。只採用本情境指明的邊界變動。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(2, 10)。最終點——數量讀值破線：破線路徑 (2, 0) → (2, 10)。最終點——縱軸讀值破線：破線路徑 (0, 10) → (2, 10)。",
                "instruction": "就「產能增長：邊界向外移」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "每當產出點移動，就移動邊界。",
                    "feedback": "點的移動可改變資源運用或生產選擇，而不改變產能。只採用本情境指明的邊界變動。"
                  },
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "輔助線定位擴大邊界上的最終組合X = 2、Y = 10；在此X水平，舊邊界只能生產8 Y。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 運用擴大產能增加產出：定向箭嘴 (2, 4) → (2, 10)。",
                "instruction": "就「產能增長：邊界向外移」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上運用擴大產能增加產出。",
                    "feedback": "由(2,4)至(2,10)的箭嘴顯示例中的產出增幅；其終點需要已畫出的擴大產能。"
                  },
                  {
                    "key": "misconception2",
                    "label": "每當產出點移動，就移動邊界。",
                    "feedback": "點的移動可改變資源運用或生產選擇，而不改變產能。只採用本情境指明的邊界變動。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "舊邊界截距為10，新邊界為12。例中的最終點(2,10)位於新邊界上。",
            "explanation": {
              "question": "哪項觀察可區分實際增長與潛在增長？",
              "options": [
                "目前產出有任何增加，都證明產能已增加。",
                "新邊界顯示產能增加。"
              ],
              "answer": 1,
              "feedback": [
                "實際產出可在不變的邊界內增加。",
                "最終點運用了新增產能；它原本在舊邊界外。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "1.1.ppc_cost_diagram",
        "scope": "common",
        "title": "生產可能性曲線（PPC）圖：遞增與不變的機會成本",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "constant",
            "title": "不變的機會成本（constant opportunity cost）",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "這些形狀展示資源適用程度的不同假設；邊界並不量度金錢成本。",
            "baseDescription": "圖表面板: 橫軸：每期X產量, 0–6。縱軸：每期Y產量, 0–12。以下座標為（水平，垂直）。 生產可能性曲線（PPC）連接(0, 10) → (5, 0)。",
            "labels": {
              "main": "圖表面板",
              "outputX": "每期X產量",
              "outputY": "每期Y產量",
              "frontier": "生產可能性曲線（PPC）",
              "allocation0": "第一個生產組合",
              "allocation1": "第二個生產組合",
              "allocation2": "第三個生產組合",
              "firstSacrifice": "第一次X增量與Y犧牲量",
              "secondSacrifice": "第二次X增量與Y犧牲量",
              "allocation0Q": "第一個生產組合——數量讀值破線",
              "allocation0P": "第一個生產組合——縱軸讀值破線",
              "allocation1Q": "第二個生產組合——數量讀值破線",
              "allocation1P": "第二個生產組合——縱軸讀值破線",
              "allocation2Q": "第三個生產組合——數量讀值破線",
              "allocation2P": "第三個生產組合——縱軸讀值破線"
            },
            "prediction": {
              "question": "比較連續兩次各增加1單位X，放棄的Y有何變化？",
              "options": [
                "第二次犧牲量必須大於第一次。",
                "每次犧牲量均維持2 Y。"
              ],
              "answer": 1,
              "feedback": [
                "在這條直線邊界上，取捨比率不變。",
                "直線邊界經過(0,10)、(1,8)、(2,6)。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 第一個生產組合位於(0, 10)。第一個生產組合——數量讀值破線：破線路徑 (0, 0) → (0, 10)。第一個生產組合——縱軸讀值破線：破線路徑 (0, 10) → (0, 10)。",
                "instruction": "在讀取產出比較前，哪幅圖先確立所述的產能參照？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "每當產出點移動，就移動邊界。",
                    "feedback": "點的移動可改變資源運用或生產選擇，而不改變產能。只採用本情境指明的邊界變動。"
                  },
                  {
                    "key": "construct",
                    "label": "加上第一個生產組合，並附讀取座標軸的破線輔助線。",
                    "feedback": "第一點與輔助線定位起始組合(0,10)，其後的Y犧牲量以此量度。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 第二個生產組合位於(1, 8)。第三個生產組合位於(2, 6)。第二個生產組合——數量讀值破線：破線路徑 (1, 0) → (1, 8)。第二個生產組合——縱軸讀值破線：破線路徑 (0, 8) → (1, 8)。第三個生產組合——數量讀值破線：破線路徑 (2, 0) → (2, 6)。第三個生產組合——縱軸讀值破線：破線路徑 (0, 6) → (2, 6)。",
                "instruction": "就「不變的機會成本（constant opportunity cost）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上第二個生產組合；第三個生產組合，並附讀取座標軸的破線輔助線。",
                    "feedback": "新增點(1,8)與(2,6)每次增加一單位X並減少兩單位Y，因此直線邊界表示機會成本不變。"
                  },
                  {
                    "key": "misconception1",
                    "label": "把第二次相同X增量的Y犧牲量標得較大。",
                    "feedback": "所標組合的Y損失為10 − 8 = 2及8 − 6 = 2。本例直線邊界的機會成本不變。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 第一次X增量與Y犧牲量：定向箭嘴 (0, 10) → (1, 8)。第二次X增量與Y犧牲量：定向箭嘴 (1, 8) → (2, 6)。",
                "instruction": "就「不變的機會成本（constant opportunity cost）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把第二次相同X增量的Y犧牲量標得較大。",
                    "feedback": "所標組合的Y損失為10 − 8 = 2及8 − 6 = 2。本例直線邊界的機會成本不變。"
                  },
                  {
                    "key": "compare",
                    "label": "加上第一次X增量與Y犧牲量；第二次X增量與Y犧牲量。",
                    "feedback": "兩個箭嘴各向右一單位、向下兩單位，清楚顯示相同X增量所犧牲的Y相同。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "在同一直線邊界上，相同X增量帶來2與2的Y損失。",
            "explanation": {
              "question": "哪項經濟解釋符合此邊界？",
              "options": [
                "例中X與Y的取捨比率不變。",
                "所有現實資源必須同樣容易轉用。"
              ],
              "answer": 0,
              "feedback": [
                "在本模型中，斜率不變使每增加一單位X所犧牲的Y相同。",
                "示例中的直線邊界不能證明所有資源均能同樣容易地轉用。"
              ]
            },
            "extension": null
          },
          {
            "key": "increasing",
            "title": "遞增的機會成本（increasing opportunity cost）",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "這些形狀展示資源適用程度的不同假設；邊界並不量度金錢成本。",
            "baseDescription": "圖表面板: 橫軸：每期X產量, 0–4。縱軸：每期Y產量, 0–12。以下座標為（水平，垂直）。 生產可能性曲線（PPC）是以取樣點繪成的平滑曲線，顯示由(0, 10)至(3.162, 0)。彎曲邊界在非負可行產量範圍遵循Y = 10 − X²；相同X增量的Y犧牲量遞增。",
            "labels": {
              "main": "圖表面板",
              "outputX": "每期X產量",
              "outputY": "每期Y產量",
              "frontier": "生產可能性曲線（PPC）",
              "allocation0": "第一個生產組合",
              "allocation1": "第二個生產組合",
              "allocation2": "第三個生產組合",
              "firstSacrifice": "第一次X增量與Y犧牲量",
              "secondSacrifice": "第二次X增量與Y犧牲量",
              "allocation0Q": "第一個生產組合——數量讀值破線",
              "allocation0P": "第一個生產組合——縱軸讀值破線",
              "allocation1Q": "第二個生產組合——數量讀值破線",
              "allocation1P": "第二個生產組合——縱軸讀值破線",
              "allocation2Q": "第三個生產組合——數量讀值破線",
              "allocation2P": "第三個生產組合——縱軸讀值破線"
            },
            "prediction": {
              "question": "比較連續兩次各增加1單位X，放棄的Y有何變化？",
              "options": [
                "放棄的Y由1升至3。",
                "放棄的Y維持1不變。"
              ],
              "answer": 0,
              "feedback": [
                "彎曲邊界經過(0,10)、(1,9)、(2,6)。",
                "相同水平變動未必有相同垂直犧牲量。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 第一個生產組合位於(0, 10)。第一個生產組合——數量讀值破線：破線路徑 (0, 0) → (0, 10)。第一個生產組合——縱軸讀值破線：破線路徑 (0, 10) → (0, 10)。",
                "instruction": "在讀取產出比較前，哪幅圖先確立所述的產能參照？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上第一個生產組合，並附讀取座標軸的破線輔助線。",
                    "feedback": "(0,10)確立彎曲邊界上的起始組合，再量度接連的Y犧牲量。"
                  },
                  {
                    "key": "misconception0",
                    "label": "每當產出點移動，就移動邊界。",
                    "feedback": "點的移動可改變資源運用或生產選擇，而不改變產能。只採用本情境指明的邊界變動。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 第二個生產組合位於(1, 9)。第三個生產組合位於(2, 6)。第二個生產組合——數量讀值破線：破線路徑 (1, 0) → (1, 9)。第二個生產組合——縱軸讀值破線：破線路徑 (0, 9) → (1, 9)。第三個生產組合——數量讀值破線：破線路徑 (2, 0) → (2, 6)。第三個生產組合——縱軸讀值破線：破線路徑 (0, 6) → (2, 6)。",
                "instruction": "就「遞增的機會成本（increasing opportunity cost）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把兩次相同X增量的Y犧牲量標成相同。",
                    "feedback": "所標組合的Y損失為10 − 9 = 1及9 − 6 = 3。因此在此彎曲邊界上，相同X增量的機會成本遞增。"
                  },
                  {
                    "key": "read",
                    "label": "加上第二個生產組合；第三個生產組合，並附讀取座標軸的破線輔助線。",
                    "feedback": "(1,9)與(2,6)顯示每次X增加一單位，先犧牲一單位Y，再犧牲三單位Y。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 第一次X增量與Y犧牲量：定向箭嘴 (0, 10) → (1, 9)。第二次X增量與Y犧牲量：定向箭嘴 (1, 9) → (2, 6)。",
                "instruction": "就「遞增的機會成本（increasing opportunity cost）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上第一次X增量與Y犧牲量；第二次X增量與Y犧牲量。",
                    "feedback": "兩個箭嘴的水平增量相同，但垂直下降量逐次增加，顯示機會成本遞增。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把兩次相同X增量的Y犧牲量標成相同。",
                    "feedback": "所標組合的Y損失為10 − 9 = 1及9 − 6 = 3。因此在此彎曲邊界上，相同X增量的機會成本遞增。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "相同X增量先後帶來1與3的Y損失，以沿平滑彎曲邊界的兩次定向移動展示。",
            "explanation": {
              "question": "哪項經濟解釋符合此邊界？",
              "options": [
                "每個經濟必然有完全相同的曲率。",
                "隨X生產擴大，所用資源變得較不適合生產X。"
              ],
              "answer": 1,
              "feedback": [
                "形狀是關於資源取捨的假設，並非普遍的實證定律。",
                "資源適用程度的差異可導致邊際機會成本遞增。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "1.1.circular_flow_diagram",
        "scope": "common",
        "title": "循環流程圖（circular flow）：部門、相互依存、流失與注入",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "fiveSector",
            "title": "由兩部門至五部門",
            "assumption": "本圖是簡化流程圖。布局座標代表位置，而非價格或數量；實物流與貨幣流以標示和方向區分。",
            "limitation": "本例的進口／出口是貨幣流失／注入。各部門總流量無須個別相等；金融活動已簡化。",
            "baseDescription": "圖表面板: 只表示布局；沒有經濟量的軸刻度。 住戶（households）部門方框。廠商（firms）部門方框。實物生產要素：住戶 → 廠商；定向路徑由住戶（households）至廠商（firms）。 要素收入：廠商 → 住戶；定向路徑由廠商（firms）至住戶（households）。",
            "labels": {
              "main": "圖表面板",
              "flowX": "流程布局：水平位置",
              "flowY": "流程布局：垂直位置",
              "households": "住戶（households）",
              "firms": "廠商（firms）",
              "finance": "金融部門（financial sector）",
              "government": "政府（government）",
              "foreign": "對外部門（foreign sector）",
              "factors": "實物生產要素：住戶 → 廠商",
              "income": "要素收入：廠商 → 住戶",
              "goods": "實物物品與服務：廠商 → 住戶",
              "expenditure": "消費開支：住戶 → 廠商",
              "saving": "儲蓄（S）：住戶 → 金融部門",
              "investment": "投資開支（I）：金融部門 → 廠商",
              "tax": "稅款（T）：住戶 → 政府",
              "governmentSpending": "政府開支（G）：政府 → 廠商",
              "imports": "進口開支流失（M）：本地廠商 → 對外部門",
              "exports": "出口收入注入（X）：對外部門 → 本地廠商"
            },
            "prediction": {
              "question": "當住戶向廠商提供生產要素時，哪項流量方向相反？",
              "options": [
                "要素收入由住戶流向廠商。",
                "要素收入由廠商流向住戶。"
              ],
              "answer": 1,
              "feedback": [
                "廠商使用生產要素後支付收入，方向與實物要素流相反。",
                "工資、租金、利息和利潤是對住戶提供要素的報酬。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 金融部門（financial sector）部門方框。政府（government）部門方框。對外部門（foreign sector）部門方框。",
                "instruction": "在起始的住戶—廠商核心以外，須加上哪些部門方框以區分參與者？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "把金融、政府及對外部門併入廠商方框。",
                    "feedback": "獨立部門方框可分別追蹤儲蓄與投資、稅款與開支、進出口付款的流向。合併部門會掩蓋流失／注入機制。"
                  },
                  {
                    "key": "construct",
                    "label": "加上金融部門（financial sector）；政府（government）；對外部門（foreign sector）。",
                    "feedback": "獨立的金融、政府及對外部門方框，辨認住戶—廠商核心以外的不同部門；此步驟不新增付款箭嘴。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 實物物品與服務：廠商 → 住戶；定向路徑由廠商（firms）至住戶（households）。 消費開支：住戶 → 廠商；定向路徑由住戶（households）至廠商（firms）。",
                "instruction": "就「由兩部門至五部門」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上實物物品與服務：廠商 → 住戶；消費開支：住戶 → 廠商。",
                    "feedback": "物品箭嘴由廠商指向住戶，消費開支則流回廠商：實物產出與付款方向相反。"
                  },
                  {
                    "key": "misconception1",
                    "label": "把物品與消費開支均由廠商指向住戶。",
                    "feedback": "物品與服務由廠商流向住戶；住戶開支則流回廠商。兩者是方向相反、互相對應的實物流與貨幣流。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 儲蓄（S）：住戶 → 金融部門；定向路徑由住戶（households）至金融部門（financial sector）。 投資開支（I）：金融部門 → 廠商；定向路徑由金融部門（financial sector）至廠商（firms）。 稅款（T）：住戶 → 政府；定向路徑由住戶（households）至政府（government）。 政府開支（G）：政府 → 廠商；定向路徑由政府（government）至廠商（firms）。 進口開支流失（M）：本地廠商 → 對外部門；定向路徑由廠商（firms）至對外部門（foreign sector）。 出口收入注入（X）：對外部門 → 本地廠商；定向路徑由對外部門（foreign sector）至廠商（firms）。",
                "instruction": "就「由兩部門至五部門」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把儲蓄、稅款和進口付款畫成對本地開支的注入。",
                    "feedback": "本例S、T、M是本地開支流的流失；I、G、X則是相反方向的注入，流程標示可區分兩者。"
                  },
                  {
                    "key": "compare",
                    "label": "加上儲蓄（S）：住戶 → 金融部門；投資開支（I）：金融部門 → 廠商；稅款（T）：住戶 → 政府；政府開支（G）：政府 → 廠商；進口開支流失（M）：本地廠商 → 對外部門；出口收入注入（X）：對外部門 → 本地廠商。",
                    "feedback": "新增的S、T、M箭嘴離開本地開支流；I、G、X則經三個新增部門把開支帶回廠商。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "住戶提供生產要素並購買物品；廠商支付要素收入並供應物品。儲蓄、稅款和進口離開本地開支流；投資、政府開支和出口注入開支。",
            "explanation": {
              "question": "為何儲蓄與投資的流向不同？",
              "options": [
                "儲蓄把資金導向金融部門；投資把開支導向廠商。",
                "每項流失均須與其對應注入個別相等。"
              ],
              "answer": 0,
              "feedback": [
                "分開的箭嘴區分融資流與開支流；S、T、M無須逐一等於I、G、X。",
                "整體經濟的會計平衡不要求圖中每對箭嘴均相等。"
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  "1.2": {
    "title": "經濟學家如何理解世界",
    "summary": "證據及價值觀如何塑造經濟論證？",
    "question": "證據及價值觀如何塑造經濟論證？",
    "terms": [
      {
        "term": "positive statement",
        "definition": "關於現在、過去或將來，原則上能以證據檢驗的陳述。"
      },
      {
        "term": "normative statement",
        "definition": "依賴價值判斷、關於事情應如何發生的陳述。"
      },
      {
        "term": "ceteris paribus",
        "definition": "研究一項關係時，把其他相關影響因素保持不變。"
      }
    ],
    "sections": [
      {
        "id": "methods",
        "heading": "陳述與證據",
        "body": [
          "Positive陳述原則上能以證據檢驗；normative陳述表達事情應如何的價值判斷。經濟學家建立模型、列明ceteris paribus（其他相關因素不變）等假設、推導假說，再比對預測與證據。可靠證據推翻預測時，可促成修訂。",
          "Hypothesis是模型的具體預測，例如「其他條件不變，巴士減價會增加乘車次數」。模型刻意選取關係；theory則是由推理及證據支持的較廣解釋。先以數據檢驗，考慮其他成因，再把相關性視為因果。反證可挑戰機制或假設。",
          "「巴士票價下跌10%」即使錯誤仍是positive，因可檢驗。「巴士應價格相宜」包含價值判斷，屬normative。Equality指相等分配；equity關乎公平。收入及出行需要不同時，相同車費也可被認為不公平。政策論證常結合可檢驗預測和明示的公平準則。"
        ],
        "limitation": "單靠觀察證據未必能確立因果關係。"
      },
      {
        "id": "ideas",
        "heading": "不斷演變的學派",
        "body": [
          "Smith認為分散市場能協調活動。後人研究效用與邊際選擇；Say連繫生產及購買力，Marx批判資本主義及其權力分配。Keynes重視總需求不足，monetarist及new classical學者質疑持續干預。Behavioural economics借助心理學；circular economy透過重用及重新設計減廢。",
          "十八世紀Smith解釋專門化及自利如何經市場協調活動；laissez-faire主張少干預，但不代表每個市場結果都理想。十九世紀邊際分析研究下一單位的額外利益及成本，不只看總量。Utility是滿足；邊際效用遞減可降低額外單位的支付意願。",
          "Say's law把生產連繫至其創造的購買力；總體需求能否持續不足是主要爭議。Marx重視所有權、階級衝突及工人參與生產的產出分配。Keynes認為疲弱總需求可延續失業，支持穩定政策。Monetarist重視貨幣及酌情政策的限制；new classical強調預期與市場調整。這些只是入門比較，並非完整理論。",
          "Behavioural economics用心理學研究行為如何有系統地偏離簡單理性選擇模型。環境經濟學把生產連至生態及物理限制。Circular economy將產品設計為可修理、重用、回收物料；雖可減少開採及廢物，但回收仍耗能，鮮能回收全部。"
        ],
        "limitation": "這些簡介省略了各學派內部的大量分歧。"
      }
    ],
    "modelPrompt": "利用例題找出機制，再解釋一項可改變結論的條件。",
    "modelAssumption": "例子只抽取一項機制；除非另有說明，其他相關條件不變。",
    "modelLimitation": "這些示例只分離一項機制，不能確立普遍預測或因果實證結論。",
    "worked": {
      "prompt": "減價後乘車次數由10,000增至12,000；沒有減價的可比城市則由10,000增至11,000。",
      "steps": [
        "首個城市增加2,000次，對照城市增加1,000次。",
        "簡單比較把額外1,000次歸因於減價，而非全部2,000次。",
        "下因果結論前，檢查路線、人口、燃油價及原來趨勢是否可比。"
      ],
      "conclusion": "比較提供與positive假說相關的證據；補貼是否公平仍需價值判斷。"
    },
    "quiz": {
      "question": "哪項是normative陳述？",
      "options": [
        "去年平均巴士票價下跌10%。",
        "較低票價增加了此市的乘車次數。",
        "市政府應優先照顧巴士乘客而非駕駛者。",
        "今年巴士開支為$200萬。"
      ],
      "feedback": [
        "這是關於觀察到價格變化的可檢驗陳述。",
        "這是positive因果陳述；難以檢驗不會令它變成normative。",
        "正確：「應」以價值判斷排列政策優先次序。",
        "即使數字不準確，這仍是可量度的預算陳述。"
      ]
    },
    "challenge": {
      "hint": "找出可同時影響兩個變數的因素。"
    },
    "coverage": [
      {
        "id": "1.2.positive",
        "point": "Positive economics：邏輯、假說、模型、理論、ceteris paribus、證據與反駁"
      },
      {
        "id": "1.2.normative",
        "point": "Normative economics、價值判斷、equity與equality"
      },
      {
        "id": "1.2.smith",
        "point": "十八世紀Smith與laissez-faire"
      },
      {
        "id": "1.2.nineteenth",
        "point": "十九世紀效用、邊際、Say's law及Marx批判"
      },
      {
        "id": "1.2.twentieth",
        "point": "Keynes政策及monetarist／new classical反革命"
      },
      {
        "id": "1.2.twentyfirst",
        "point": "Behavioural economics、跨學科連繫與circular economy"
      }
    ],
    "diagrams": []
  },
  "2.1": {
    "title": "需求",
    "summary": "價格變化為何會改變購買量？",
    "question": "價格變化為何會改變購買量？",
    "terms": [
      {
        "term": "demand",
        "definition": "指定期間內，消費者在不同價格下願意且能夠購買的數量。"
      },
      {
        "term": "quantity demanded",
        "definition": "買方在該財貨某一自身價格下選購的數量。"
      },
      {
        "term": "substitute",
        "definition": "能滿足相似慾望的替代財貨。"
      }
    ],
    "sections": [
      {
        "id": "demand",
        "heading": "需求及其曲線",
        "body": [
          "Demand是某期間在不同價格下購買的意願及能力。其他條件不變，減價通常增加quantity demanded，即沿向下傾斜曲線移動。市場需求把各人在每一價格下的數量相加。",
          "沒有購買力的願望不是有效需求。須列明時段及單位：每個麵包$4時，A每日要3個、B要2個，市場需求量是5個；$2時各要5及4個，共9個。相加的是同一價格的數量，不是價格。",
          "縱軸為每個麵包價格，橫軸為每日麵包量；在同一需求曲線D標出(Q=5,P=4)及(Q=9,P=2)。減價沿D向右下移，需求量增加，需求本身沒有移位。"
        ],
        "limitation": "此定律描述其他決定因素不變時的關係。"
      },
      {
        "id": "shifts",
        "heading": "需求移位",
        "body": [
          "收入、喜好、預期、替代品與互補品價格、消費者人數可改變需求。需求增加令整條曲線右移；財貨自身價格改變則沿曲線移動。",
          "若茶與咖啡是替代品，茶加價可增加每個咖啡價格下的咖啡需求。若打印機與墨水互補，打印機加價可降低墨水需求。收入上升增加normal good需求，減少inferior good需求；分類依收入反應，並非品質。",
          "好評、買家增加或預期將來加價可增加當前需求；相反變化可減少需求。解釋移位時，指出改變的非價格因素，說明同一自身價格下買家現在想買不同數量，並保持時段及其他因素不變。"
        ],
        "limitation": "收入影響視乎財貨屬normal good還是inferior good。"
      },
      {
        "id": "hl",
        "heading": "需求向下傾斜的原因",
        "body": [
          "減價可使消費者轉買該財，並改變實質購買力。Diminishing marginal utility亦有助解釋對額外單位的支付意願。",
          "麵包減價的substitution effect是它相對替代品變便宜。Income effect是同一筆錢可買更多；對normal good會再增購，對inferior good則相反。Diminishing marginal utility指每多一個麵包的滿足較少，故可能須更低價格才誘使再買。這是模型解釋，不是聲稱每個人總有相同行為。"
        ],
        "limitation": "Income effect視乎財貨類別。"
      }
    ],
    "modelPrompt": "改變一個非價格因素，預測均衡價格及數量方向；指出哪條曲線移位，哪條是沿線移動。",
    "modelAssumption": "假設競爭市場，供求穩定、價格可調、其他決定因素不變。",
    "modelLimitation": "現實市場或有調整延誤、價格僵固、資訊問題或市場力量。",
    "worked": {
      "prompt": "每個麵包$4時，A每日要3個、B要2個；$2時A要5個、B要4個。",
      "steps": [
        "$4時市場需求量為每日3+2=5個麵包。",
        "$2時是每日5+4=9個。",
        "其他因素不變，減價使市場需求上由(5,4)沿線移至(9,2)。"
      ],
      "conclusion": "在每個價格相加數量；自身價格改變影響需求量，而非需求本身。"
    },
    "quiz": {
      "question": "咖啡自身價格不變，替代品茶加價，預計如何？",
      "options": [
        "咖啡需求右移。",
        "咖啡需求量沿原曲線向下移。",
        "咖啡供給右移。",
        "茶較貴令咖啡需求左移。"
      ],
      "feedback": [
        "正確：咖啡價格相同，買家轉買咖啡。",
        "沿咖啡需求移動須咖啡自身價格改變。",
        "題中變化影響買家，並非咖啡生產者成本或產能。",
        "此說較適合互補品；替代品在另一選項加價時相對更吸引。"
      ]
    },
    "challenge": {
      "hint": "解釋需求移位時保持咖啡自身價格不變。"
    },
    "coverage": [
      {
        "id": "2.1.law",
        "point": "需求定律"
      },
      {
        "id": "2.1.assumptions_hl",
        "point": "Income effect、substitution effect及邊際效用遞減"
      },
      {
        "id": "2.1.curve_diagram",
        "point": "向下傾斜需求圖"
      },
      {
        "id": "2.1.individual_market",
        "point": "個人及市場需求"
      },
      {
        "id": "2.1.determinants",
        "point": "收入、喜好、預期、相關財貨及消費者人數"
      },
      {
        "id": "2.1.shifts_diagram",
        "point": "需求圖：沿線移動與整線移位"
      }
    ],
    "diagrams": [
      {
        "id": "2.1.curve_diagram",
        "scope": "common",
        "title": "向下傾斜的需求（demand）圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "demand",
            "title": "閱讀需求表（demand schedule）",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "假設競爭市場價格具彈性。單憑本圖不能確定現實調整速度或得益分配。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "initial": "初始點",
              "final": "最終點",
              "movement": "沿曲線的本身價格變動",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "本身價格由8降至4。此曲線的需求量如何變化？",
              "options": [
                "數量由2升至6。",
                "整條曲線向右移。"
              ],
              "answer": 0,
              "feedback": [
                "在D上，P = 10 − Q；兩點為(2,8)及(6,4)。",
                "物品本身價格變動，表示沿不變曲線移動。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(2, 8)。初始點——數量讀值破線：破線路徑 (2, 0) → (2, 8)。初始點——縱軸讀值破線：破線路徑 (0, 8) → (2, 8)。",
                "instruction": "就「閱讀需求表（demand schedule）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "點及輔助線讀出現有需求表上P = 8時Q = 2，確立初始本身價格觀察。"
                  },
                  {
                    "key": "misconception0",
                    "label": "移動整條曲線以表示本身價格變動。",
                    "feedback": "其他決定因素不變時，本身價格變動使觀察點沿不變的需求表移動。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(6, 4)。最終點——數量讀值破線：破線路徑 (6, 0) → (6, 4)。最終點——縱軸讀值破線：破線路徑 (0, 4) → (6, 4)。",
                "instruction": "就「閱讀需求表（demand schedule）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把橫座標讀為價格、縱座標讀為數量。",
                    "feedback": "這些市場軸以橫軸表示每期數量、縱軸表示單位價格。對調兩軸會倒轉需求表讀值及移動的含義。"
                  },
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "第二點讀出同一需求曲線上的Q = 6、P = 4：較低本身價格配合較大需求量。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 沿曲線的本身價格變動：定向箭嘴 (2, 8) → (6, 4)。",
                "instruction": "就「閱讀需求表（demand schedule）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上沿曲線的本身價格變動。",
                    "feedback": "向右下的箭嘴沿不變需求連接兩點，區分本身價格引致的移動與需求曲線移動。"
                  },
                  {
                    "key": "misconception2",
                    "label": "移動整條曲線以表示本身價格變動。",
                    "feedback": "其他決定因素不變時，本身價格變動使觀察點沿不變的需求表移動。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "向下箭嘴連接(2,8)至(6,4)。破線輔助線以橫向讀數量、縱向讀價格。",
            "explanation": {
              "question": "為何稱為需求量（quantity demanded）變動？",
              "options": [
                "必定有非價格決定因素改變。",
                "只有物品本身價格改變；其他決定因素不變。"
              ],
              "answer": 1,
              "feedback": [
                "非價格決定因素改變須用另一條曲線表示；本情境沒有加入另一條曲線。",
                "兩項觀察均在同一個不變的需求表上。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.1.shifts_diagram",
        "scope": "common",
        "title": "沿需求曲線移動與需求曲線移動圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "movement",
            "title": "只改變本身價格",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "假設競爭市場價格具彈性。單憑本圖不能確定現實調整速度或得益分配。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "initial": "初始點",
              "final": "最終點",
              "movement": "沿曲線的本身價格變動",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "只有本身價格由6降至4。哪幅圖適當？",
              "options": [
                "因為數量改變，所以移動整條曲線。",
                "沿現有曲線移動，使數量由4升至6。"
              ],
              "answer": 1,
              "feedback": [
                "單憑數量改變，不能判定曲線移動。",
                "不變的需求表已描述對本身價格的反應。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(4, 6)。初始點——數量讀值破線：破線路徑 (4, 0) → (4, 6)。初始點——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。",
                "instruction": "就「只改變本身價格」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "移動整條曲線以表示本身價格變動。",
                    "feedback": "其他決定因素不變時，本身價格變動使觀察點沿不變的需求表移動。"
                  },
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "輔助線定位初始需求觀察Q = 4、P = 6；需求表本身不變。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(6, 4)。最終點——數量讀值破線：破線路徑 (6, 0) → (6, 4)。最終點——縱軸讀值破線：破線路徑 (0, 4) → (6, 4)。",
                "instruction": "就「只改變本身價格」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "新輔助線讀出現有曲線上的Q = 6、P = 4，因此本身價格下降時需求量上升。"
                  },
                  {
                    "key": "misconception1",
                    "label": "把橫座標讀為價格、縱座標讀為數量。",
                    "feedback": "這些市場軸以橫軸表示每期數量、縱軸表示單位價格。對調兩軸會倒轉需求表讀值及移動的含義。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 沿曲線的本身價格變動：定向箭嘴 (4, 6) → (6, 4)。",
                "instruction": "就「只改變本身價格」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "移動整條曲線以表示本身價格變動。",
                    "feedback": "其他決定因素不變時，本身價格變動使觀察點沿不變的需求表移動。"
                  },
                  {
                    "key": "compare",
                    "label": "加上沿曲線的本身價格變動。",
                    "feedback": "由(4,6)至(6,4)的箭嘴沿同一需求曲線，顯示本身價格引致的移動。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "在D0上，(4,6)→(6,4)；曲線不變。",
            "explanation": {
              "question": "甚麼指出此變化的成因？",
              "options": [
                "物品本身價格改變，其他決定因素不變。",
                "此移動需要偏好或技術改變。"
              ],
              "answer": 0,
              "feedback": [
                "兩項觀察均在原有曲線上。",
                "非價格變動會改變需求表，而非解釋沿曲線移動。"
              ]
            },
            "extension": null
          },
          {
            "key": "increase",
            "title": "正常物品（normal good）的收入增加",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "收入效果適用於正常物品；劣等物品（inferior goods）的反應可能不同。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "shiftedDemand": "增加後的需求（D1）",
              "initial": "初始點",
              "final": "最終點",
              "increase": "相同價格下的增量",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "此正常物品的消費者收入上升。在價格6時，需求如何變化？",
              "options": [
                "向右移使相同價格下的數量由4升至6。",
                "因價格改變而沿不變曲線移動。"
              ],
              "answer": 0,
              "feedback": [
                "所述非價格決定因素改變各價格下的購買意欲或能力。",
                "此比較固定本身價格；成因是收入或成本。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(4, 6)。初始點——數量讀值破線：破線路徑 (4, 0) → (4, 6)。初始點——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。",
                "instruction": "就「正常物品（normal good）的收入增加」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始點(4,6)記錄非價格變動前，參照價格下的需求量。"
                  },
                  {
                    "key": "misconception0",
                    "label": "保留原有曲線，把非價格變動當作本身價格引致的沿線移動。",
                    "feedback": "所述收入或成本變動改變固定價格下選擇的數量，故須以新曲線區分，不能當作沿舊曲線移動。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 增加後的需求（D1）連接(0, 12) → (10, 2)。 最終點位於(6, 6)。最終點——數量讀值破線：破線路徑 (6, 0) → (6, 6)。最終點——縱軸讀值破線：破線路徑 (0, 6) → (6, 6)。",
                "instruction": "就「正常物品（normal good）的收入增加」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把橫座標讀為價格、縱座標讀為數量。",
                    "feedback": "這些市場軸以橫軸表示每期數量、縱軸表示單位價格。對調兩軸會倒轉需求表讀值及移動的含義。"
                  },
                  {
                    "key": "read",
                    "label": "加上增加後的需求（D1）；最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "D1在D0右方，其點(6,6)顯示同一價格6下的需求量較大。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 相同價格下的增量：定向箭嘴 (4, 6) → (6, 6)。",
                "instruction": "就「正常物品（normal good）的收入增加」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上相同價格下的增量。",
                    "feedback": "由Q = 4至Q = 6的水平箭嘴維持價格6，區分需求增加與本身價格引致的沿線移動。"
                  },
                  {
                    "key": "misconception2",
                    "label": "保留原有曲線，把非價格變動當作本身價格引致的沿線移動。",
                    "feedback": "所述收入或成本變動改變固定價格下選擇的數量，故須以新曲線區分，不能當作沿舊曲線移動。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "D0：P = 10 − Q變為D1：P = 12 − Q。在P = 6時，Q由4升至6。",
            "explanation": {
              "question": "甚麼指出此變化的成因？",
              "options": [
                "只有本身價格改變就會引致此曲線移動。",
                "較高收入提高正常物品的需求。"
              ],
              "answer": 1,
              "feedback": [
                "本身價格改變沿曲線的數量，不會移動需求表。",
                "相同價格的比較可分離非價格變動的影響。"
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  "2.2": {
    "title": "供給",
    "summary": "生產者為何在不同價格提供不同數量？",
    "question": "生產者為何在不同價格提供不同數量？",
    "terms": [
      {
        "term": "supply",
        "definition": "指定期間內，生產者在不同價格願意且能夠提供的數量。"
      },
      {
        "term": "quantity supplied",
        "definition": "某一自身價格下提供的數量。"
      },
      {
        "term": "marginal cost",
        "definition": "多生產一單位令總成本增加的數額。"
      }
    ],
    "sections": [
      {
        "id": "supply",
        "heading": "供給及其曲線",
        "body": [
          "Supply是某期間在各價格出售的意願及能力。其他條件不變，加價通常增加quantity supplied，表現為沿向上傾斜曲線移動。市場供給把各企業在每個價格的數量相加。",
          "Supply是整個價格數量關係，quantity supplied是其中一點。$3時A及B麵包店每日供4及6個，市場共10個；$4時供6及9個，共15個。水平加總是在相同價格加數量。",
          "縱軸為每個麵包價格、橫軸為每日麵包量時，自身價格上升通常沿同一供給曲線向右上移，因額外生產變得值得。這不使供給移位，並假設生產者可在指定時段改變產出。"
        ],
        "limitation": "某些供給曲線未必在所有範圍都向上傾斜。"
      },
      {
        "id": "shifts",
        "heading": "供給移位",
        "body": [
          "投入成本、技術、稅、補貼、預期、相關產品價格及企業數目可使供給移位。生產力改善可令供給右移；自身價格改變則沿原曲線移動。",
          "較便宜麵粉或較佳焗爐降低各產量成本，可令麵包供給右移。每單位稅提高成本使其左移；補貼可相反。企業增加擴大市場供給。預期將來加價的生產者可能暫存可儲貨品。",
          "生產面的相關財貨亦重要：土地可種小麥或大麥時，大麥加價可吸走土地，減少小麥供給；聯產品則可一起變動。須解釋資源聯繫，不可直接套用消費者替代品／互補品規則。"
        ],
        "limitation": "移位幅度及時間視乎生產者情況。"
      },
      {
        "id": "hl",
        "heading": "邊際成本",
        "body": [
          "有固定投入時，增加可變投入可最終出現邊際回報遞減，推高邊際成本。生產者可能要求更高價格才供應額外產出。",
          "固定焗爐配1、2、3名工人分別產10、24、32個麵包。第二名增產14個，第三名只增8個。固定投入及技術不變，額外可變投入的增產下降便開始邊際回報遞減。每名額外工人$40時，每個額外麵包的勞動成本由$40/14升至$40/8，有助解釋邊際成本上升及向上供給。"
        ],
        "limitation": "這是短期解釋，並非通用供給曲線。"
      }
    ],
    "modelPrompt": "改變一個非價格因素，預測均衡價格及數量方向；指出哪條曲線移位，哪條是沿線移動。",
    "modelAssumption": "假設競爭市場，供求穩定、價格可調、其他決定因素不變。",
    "modelLimitation": "現實市場或有調整延誤、價格僵固、資訊問題或市場力量。",
    "worked": {
      "prompt": "$3時A及B麵包店每日供4及6個；$4時供6及9個。",
      "steps": [
        "$3時市場供給量為每日4+6=10個麵包。",
        "$4時為每日6+9=15個。",
        "成本及技術不變，自身價格上升造成沿供給曲線向上移動。"
      ],
      "conclusion": "市場供給相加同價數量；供給量較大本身不代表供給右移。"
    },
    "quiz": {
      "question": "麵包自身價格不變，麵粉變便宜，供給可能怎變？",
      "options": [
        "沿原有麵包供給曲線向下移。",
        "麵包供給右移。",
        "麵包需求右移。",
        "成本下降令供給左移。"
      ],
      "feedback": [
        "沿供給移動由麵包自身價格改變造成。",
        "正確：較低投入成本令各價格下更多麵包有利可圖。",
        "變化直接影響生產者成本，而非消費者購買意願。",
        "成本下降通常擴大供給；成本上升才會左移。"
      ]
    },
    "challenge": {
      "hint": "分清投入品價格與財貨自身價格的變化。"
    },
    "coverage": [
      {
        "id": "2.2.law",
        "point": "供給定律"
      },
      {
        "id": "2.2.assumptions_hl",
        "point": "邊際回報遞減與邊際成本遞增"
      },
      {
        "id": "2.2.curve_diagram",
        "point": "向上傾斜供給圖"
      },
      {
        "id": "2.2.individual_market",
        "point": "個別及市場供給"
      },
      {
        "id": "2.2.determinants",
        "point": "投入成本、相關財貨、稅、補貼、預期、技術及企業"
      },
      {
        "id": "2.2.shifts_diagram",
        "point": "供給圖：沿線移動與整線移位"
      }
    ],
    "diagrams": [
      {
        "id": "2.2.curve_diagram",
        "scope": "common",
        "title": "向上傾斜的供應（supply）圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "supply",
            "title": "閱讀供應表（supply schedule）",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "假設競爭市場價格具彈性。單憑本圖不能確定現實調整速度或得益分配。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "supply": "供應（S）",
              "initial": "初始點",
              "final": "最終點",
              "movement": "沿曲線的本身價格變動",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "本身價格由2升至6。此曲線的供應量如何變化？",
              "options": [
                "整條曲線向右移。",
                "數量由2升至6。"
              ],
              "answer": 1,
              "feedback": [
                "物品本身價格變動，表示沿不變曲線移動。",
                "在S上，P = Q；兩點為(2,2)及(6,6)。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(2, 2)。初始點——數量讀值破線：破線路徑 (2, 0) → (2, 2)。初始點——縱軸讀值破線：破線路徑 (0, 2) → (2, 2)。",
                "instruction": "就「閱讀供應表（supply schedule）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "移動整條曲線以表示本身價格變動。",
                    "feedback": "其他決定因素不變時，本身價格變動使觀察點沿不變的需求表移動。"
                  },
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始供應點與輔助線讀出Q = 2、P = 2，確立供應表上的一個價格—數量組合。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(6, 6)。最終點——數量讀值破線：破線路徑 (6, 0) → (6, 6)。最終點——縱軸讀值破線：破線路徑 (0, 6) → (6, 6)。",
                "instruction": "就「閱讀供應表（supply schedule）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "最終點讀出不變供應上的Q = 6、P = 6：較高本身價格使較多數量值得供應。"
                  },
                  {
                    "key": "misconception1",
                    "label": "把橫座標讀為價格、縱座標讀為數量。",
                    "feedback": "這些市場軸以橫軸表示每期數量、縱軸表示單位價格。對調兩軸會倒轉需求表讀值及移動的含義。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 沿曲線的本身價格變動：定向箭嘴 (2, 2) → (6, 6)。",
                "instruction": "就「閱讀供應表（supply schedule）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "移動整條曲線以表示本身價格變動。",
                    "feedback": "其他決定因素不變時，本身價格變動使觀察點沿不變的需求表移動。"
                  },
                  {
                    "key": "compare",
                    "label": "加上沿曲線的本身價格變動。",
                    "feedback": "向右上箭嘴沿供應曲線由(2,2)至(6,6)，顯示本身價格引致的沿線移動，而非供應增加。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "向上箭嘴連接(2,2)至(6,6)。破線輔助線以橫向讀數量、縱向讀價格。",
            "explanation": {
              "question": "為何稱為供應量（quantity supplied）變動？",
              "options": [
                "只有物品本身價格改變；其他決定因素不變。",
                "必定有非價格決定因素改變。"
              ],
              "answer": 0,
              "feedback": [
                "兩項觀察均在同一個不變的需求表上。",
                "非價格決定因素改變須用另一條曲線表示；本情境沒有加入另一條曲線。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.2.shifts_diagram",
        "scope": "common",
        "title": "沿供應曲線移動與供應曲線移動圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "movement",
            "title": "只改變本身價格",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "假設競爭市場價格具彈性。單憑本圖不能確定現實調整速度或得益分配。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "supply": "供應（S）",
              "initial": "初始點",
              "final": "最終點",
              "movement": "沿曲線的本身價格變動",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "只有本身價格由4升至6。哪幅圖適當？",
              "options": [
                "沿現有曲線移動，使數量由4升至6。",
                "因為數量改變，所以移動整條曲線。"
              ],
              "answer": 0,
              "feedback": [
                "不變的需求表已描述對本身價格的反應。",
                "單憑數量改變，不能判定曲線移動。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(4, 4)。初始點——數量讀值破線：破線路徑 (4, 0) → (4, 4)。初始點——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「只改變本身價格」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始輔助線定位現有供應曲線上P = 4時Q = 4。"
                  },
                  {
                    "key": "misconception0",
                    "label": "移動整條曲線以表示本身價格變動。",
                    "feedback": "其他決定因素不變時，本身價格變動使觀察點沿不變的需求表移動。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(6, 6)。最終點——數量讀值破線：破線路徑 (6, 0) → (6, 6)。最終點——縱軸讀值破線：破線路徑 (0, 6) → (6, 6)。",
                "instruction": "就「只改變本身價格」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把橫座標讀為價格、縱座標讀為數量。",
                    "feedback": "這些市場軸以橫軸表示每期數量、縱軸表示單位價格。對調兩軸會倒轉需求表讀值及移動的含義。"
                  },
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "最終輔助線定位同一供應曲線上的Q = 6、P = 6，顯示本身價格上升時供應量增加。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 沿曲線的本身價格變動：定向箭嘴 (4, 4) → (6, 6)。",
                "instruction": "就「只改變本身價格」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上沿曲線的本身價格變動。",
                    "feedback": "由(4,4)至(6,6)的箭嘴描出沿不變供應曲線的本身價格變動。"
                  },
                  {
                    "key": "misconception2",
                    "label": "移動整條曲線以表示本身價格變動。",
                    "feedback": "其他決定因素不變時，本身價格變動使觀察點沿不變的需求表移動。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "在S0上，(4,4)→(6,6)；曲線不變。",
            "explanation": {
              "question": "甚麼指出此變化的成因？",
              "options": [
                "此移動需要偏好或技術改變。",
                "物品本身價格改變，其他決定因素不變。"
              ],
              "answer": 1,
              "feedback": [
                "非價格變動會改變需求表，而非解釋沿曲線移動。",
                "兩項觀察均在原有曲線上。"
              ]
            },
            "extension": null
          },
          {
            "key": "increase",
            "title": "較低生產成本",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "假設競爭市場價格具彈性。單憑本圖不能確定現實調整速度或得益分配。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "supply": "供應（S）",
              "shiftedSupply": "增加後的供應（S1）",
              "initial": "初始點",
              "final": "最終點",
              "increase": "相同價格下的增量",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "生產成本下降。在價格4時，供應如何變化？",
              "options": [
                "因價格改變而沿不變曲線移動。",
                "向右移使相同價格下的數量由4升至6。"
              ],
              "answer": 1,
              "feedback": [
                "此比較固定本身價格；成因是收入或成本。",
                "生產成本下降會提高賣方在各價格下的供應意欲或能力。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(4, 4)。初始點——數量讀值破線：破線路徑 (4, 0) → (4, 4)。初始點——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「較低生產成本」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "保留原有曲線，把非價格變動當作本身價格引致的沿線移動。",
                    "feedback": "所述收入或成本變動改變固定價格下選擇的數量，故須以新曲線區分，不能當作沿舊曲線移動。"
                  },
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始供應點(4,4)記錄成本變動前，參照價格下的供應量。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 增加後的供應（S1）連接(2, 0) → (10, 8)。 最終點位於(6, 4)。最終點——數量讀值破線：破線路徑 (6, 0) → (6, 4)。最終點——縱軸讀值破線：破線路徑 (0, 4) → (6, 4)。",
                "instruction": "就「較低生產成本」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上增加後的供應（S1）；最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "S1在S0右方，最終點(6,4)顯示價格維持4時供應較大。"
                  },
                  {
                    "key": "misconception1",
                    "label": "把橫座標讀為價格、縱座標讀為數量。",
                    "feedback": "這些市場軸以橫軸表示每期數量、縱軸表示單位價格。對調兩軸會倒轉需求表讀值及移動的含義。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 相同價格下的增量：定向箭嘴 (4, 4) → (6, 4)。",
                "instruction": "就「較低生產成本」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "保留原有曲線，把非價格變動當作本身價格引致的沿線移動。",
                    "feedback": "所述收入或成本變動改變固定價格下選擇的數量，故須以新曲線區分，不能當作沿舊曲線移動。"
                  },
                  {
                    "key": "compare",
                    "label": "加上相同價格下的增量。",
                    "feedback": "水平箭嘴在P = 4由Q = 4移至Q = 6，區分供應增加與沿S0移動。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "S0：P = Q變為S1：P = Q − 2。在P = 4時，Q由4升至6。",
            "explanation": {
              "question": "甚麼指出此變化的成因？",
              "options": [
                "較低成本使給定售價下的供應增加。",
                "只有本身價格改變就會引致此曲線移動。"
              ],
              "answer": 0,
              "feedback": [
                "相同價格的比較可分離非價格變動的影響。",
                "本身價格改變沿曲線的數量，不會移動需求表。"
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  "2.3": {
    "title": "競爭市場均衡",
    "summary": "價格如何協調買賣雙方？",
    "question": "價格如何協調買賣雙方？",
    "terms": [
      {
        "term": "equilibrium",
        "definition": "計劃需求量等於計劃供給量的價格與數量。"
      },
      {
        "term": "consumer surplus",
        "definition": "把所購各單位的支付意願減去實付價格，再加總。"
      },
      {
        "term": "allocative efficiency",
        "definition": "邊際社會利益等於邊際社會成本的產出。"
      }
    ],
    "sections": [
      {
        "id": "equilibrium",
        "heading": "均衡與調整",
        "body": [
          "Equilibrium在需求量等於供給量時出現。高於均衡價，過剩帶來減價壓力；低於均衡價，短缺帶來加價壓力。價格傳達稀缺訊號、提供誘因，並在買家間配給財貨。",
          "設每日麵包Qd=100−10P、Qs=20+10P。$3時買方要70、賣方供50，短缺20促使競價或加價；$5時供70、要50，過剩20促使減價。$4時雙方均計劃60，沒有這種壓力。",
          "價格傳達相對稀缺及潛在利潤，鼓勵增產或節用，把財貨配給願意且有能力購買者，並引導資源流向獲支出的活動。這反映購買力，並不證明分配公平。供給不變時需求增加通常提高均衡價與量；供給增加通常降價增量。"
        ],
        "limitation": "調整或很緩慢，亦可被市場力量或規管阻礙。"
      },
      {
        "id": "surplus",
        "heading": "盈餘與效率",
        "body": [
          "Consumer surplus是所購各單位支付意願與價格之差的總和；producer surplus是所售各單位價格減最低願供價格的總和。沒有外部性的競爭市場，在邊際利益與邊際成本交點使兩者總和最大。",
          "一本書願付$9而實付$6，consumer surplus為$3。賣家最低接受$4而收到$6，該單位producer surplus為$2。加總各單位差額得總盈餘；producer surplus未扣固定成本，故不等於利潤。",
          "Allocative efficiency要求marginal social benefit=marginal social cost，即最後一單位利益等於所用資源成本。低於此產量，再增一單位利大於成本；高於則成本大於利益。競爭均衡只有在無外部性及有相關資訊等假設下才達成，亦不表示收入相等。"
        ],
        "limitation": "有外部影響時，私人盈餘未必等於社會福利。"
      },
      {
        "id": "hl",
        "heading": "計算盈餘",
        "body": [
          "三角盈餘面積為底乘高再除二；底4單位、高$6，便是$12。",
          "線性需求價格截距$10、供給截距$2，均衡價$6、量40時，consumer surplus=½×40×($10−$6)=$80；producer surplus=½×40×($6−$2)=$80。軸須列時段；量為每日，面積金額也是每日。"
        ],
        "limitation": "三角形公式只適用於相關邊界為直線時。"
      }
    ],
    "modelPrompt": "改變一個非價格因素，預測均衡價格及數量方向；指出哪條曲線移位，哪條是沿線移動。",
    "modelAssumption": "假設競爭市場，供求穩定、價格可調、其他決定因素不變。",
    "modelLimitation": "現實市場或有調整延誤、價格僵固、資訊問題或市場力量。",
    "worked": {
      "prompt": "每日需求Qd=100−10P，供給Qs=20+10P，價格以元計。",
      "steps": [
        "把計劃購買與出售設為相等：100−10P=20+10P。",
        "整理得80=20P，因此P=$4。",
        "代入任一式得Q=100−40=每日60單位。$3時短缺70−50=20，形成加價壓力。"
      ],
      "conclusion": "均衡為$4及60單位；調整取決於價格能否變動。"
    },
    "quiz": {
      "question": "$5時Qd=50、Qs=70，價格可調時預計如何？",
      "options": [
        "短缺造成加價壓力。",
        "過剩造成減價壓力。",
        "產出高，所以供給必定右移。",
        "已有交易，故市場已均衡。"
      ],
      "feedback": [
        "供給量大於需求量，故是過剩而非短缺。",
        "正確：計劃產出滯銷，鼓勵賣家減價。",
        "價格調整沿現有曲線移動；沒有非價格供給因素改變。",
        "均衡要求計劃數量相等，不只是正數。"
      ]
    },
    "challenge": {
      "hint": "連繫買家競爭與賣家誘因。"
    },
    "coverage": [
      {
        "id": "2.3.equilibrium_diagram",
        "point": "需求供給市場均衡圖"
      },
      {
        "id": "2.3.changes_diagram",
        "point": "均衡變化、短缺、過剩及價格機制圖"
      },
      {
        "id": "2.3.price_mechanism",
        "point": "訊號、誘因、資源配置及配給"
      },
      {
        "id": "2.3.surplus_diagram",
        "point": "消費者、生產者及社會盈餘圖"
      },
      {
        "id": "2.3.efficiency",
        "point": "配置效率、社會盈餘最大及MB=MC"
      },
      {
        "id": "2.3.surplus_calculation_hl",
        "point": "由圖計算消費者及生產者盈餘"
      }
    ],
    "diagrams": [
      {
        "id": "2.3.equilibrium_diagram",
        "scope": "common",
        "title": "需求與供應的市場均衡（market equilibrium）圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "crossing",
            "title": "計劃購買量等於計劃銷售量之處",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "假設競爭市場價格具彈性。單憑本圖不能確定現實調整速度或得益分配。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "supply": "供應（S）",
              "equilibrium": "均衡（E）",
              "adjustment": "移向均衡的示例過程",
              "equilibriumQ": "均衡（E）——數量讀值破線",
              "equilibriumP": "均衡（E）——縱軸讀值破線",
              "crossing": "穿過交點的供應輔助線"
            },
            "prediction": {
              "question": "若D：P = 10 − Q、S：P = Q，哪個價格使市場出清？",
              "options": [
                "P = 5，此時Qd = Qs = 5。",
                "P = 4，因為較低價格總能使市場出清。"
              ],
              "answer": 0,
              "feedback": [
                "交點使兩方程在(Q,P) = (5,5)相等。",
                "在P = 4時，需求量為6、供應量為4：計劃購買量超過計劃銷售量。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 均衡（E）位於(5, 5)。均衡（E）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。均衡（E）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。",
                "instruction": "就「計劃購買量等於計劃銷售量之處」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上均衡（E），並附讀取座標軸的破線輔助線。",
                    "feedback": "E及其輔助線標出需求與供應交點Q = 5、P = 5，因此計劃購買量等於計劃銷售量。"
                  },
                  {
                    "key": "misconception0",
                    "label": "把任何選定價格下的需求量稱為實際售出量。",
                    "feedback": "單憑計劃需求不能確定成交量：須比較供應與需求，或在指定曲線移動後找出新交點。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 穿過交點的供應輔助線：破線路徑 (4, 4) → (6, 6)。",
                "instruction": "就「計劃購買量等於計劃銷售量之處」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把任何選定價格下的需求量稱為實際售出量。",
                    "feedback": "單憑計劃需求不能確定成交量：須比較供應與需求，或在指定曲線移動後找出新交點。"
                  },
                  {
                    "key": "read",
                    "label": "加上由(4,4)至(6,6)、穿過均衡的供應破線輔助線。",
                    "feedback": "破線線段由(4,4)至(6,6)，沿供應穿過E，確認交點同時在賣方供應表與需求曲線上。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 移向均衡的示例過程：定向箭嘴 (4, 6) → (5, 5)。",
                "instruction": "就「計劃購買量等於計劃銷售量之處」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上移向均衡的示例過程。",
                    "feedback": "箭嘴由高價格位置向下指向E，展示價格向市場出清交點下調。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把任何選定價格下的需求量稱為實際售出量。",
                    "feedback": "單憑計劃需求不能確定成交量：須比較供應與需求，或在指定曲線移動後找出新交點。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "E = (5,5)位於D／S交點。交點破線輔助線沿E附近的供應；調整示例箭嘴指向E，而非描出新曲線。",
            "explanation": {
              "question": "為何此交點是均衡？",
              "options": [
                "所有消費者和生產者都能得到所有想要的東西，沒有稀少性。",
                "在此價格下，沒有超額計劃需求或供應。"
              ],
              "answer": 1,
              "feedback": [
                "均衡透過價格分配稀少產出；支付意欲與能力仍然重要。",
                "在此簡單競爭市場，計劃數量相等消除短缺／過剩壓力。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.3.changes_diagram",
        "scope": "common",
        "title": "均衡變動、短缺、過剩與價格機制（price mechanism）圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "shortage",
            "title": "價格低於均衡",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "假設競爭市場價格具彈性。單憑本圖不能確定現實調整速度或得益分配。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "supply": "供應（S）",
              "chosenPrice": "選定的非均衡價格",
              "demandQuantity": "需求量（Qd）",
              "supplyQuantity": "供應量（Qs）",
              "priceAdjustment": "價格調整方向",
              "demandQuantityQ": "需求量（Qd）——數量讀值破線",
              "demandQuantityP": "需求量（Qd）——縱軸讀值破線",
              "supplyQuantityQ": "供應量（Qs）——數量讀值破線",
              "supplyQuantityP": "供應量（Qs）——縱軸讀值破線"
            },
            "prediction": {
              "question": "在P = 4時，買方還是賣方的計劃數量較大？",
              "options": [
                "賣方：Qs大於Qd。",
                "買方：Qd = 6大於Qs = 4。"
              ],
              "answer": 1,
              "feedback": [
                "在此價格下，兩個需求／供應表給出相反的數量排序。",
                "在選定的水平價格線上讀取各曲線。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 選定的非均衡價格連接(0, 4) → (10, 4)。",
                "instruction": "就「價格低於均衡」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "把任何選定價格下的需求量稱為實際售出量。",
                    "feedback": "單憑計劃需求不能確定成交量：須比較供應與需求，或在指定曲線移動後找出新交點。"
                  },
                  {
                    "key": "construct",
                    "label": "加上選定的非均衡價格。",
                    "feedback": "水平線把P固定於4，低於需求—供應交點，確立讀取買賣計劃的價格。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 需求量（Qd）位於(6, 4)。供應量（Qs）位於(4, 4)。需求量（Qd）——數量讀值破線：破線路徑 (6, 0) → (6, 4)。需求量（Qd）——縱軸讀值破線：破線路徑 (0, 4) → (6, 4)。供應量（Qs）——數量讀值破線：破線路徑 (4, 0) → (4, 4)。供應量（Qs）——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「價格低於均衡」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上需求量（Qd）；供應量（Qs），並附讀取座標軸的破線輔助線。",
                    "feedback": "在P = 4時，需求給出Qd = 6、供應給出Qs = 4；分開的點與輔助線顯示超額需求2。"
                  },
                  {
                    "key": "misconception1",
                    "label": "在選定價格下，從同一條曲線讀出需求量與供應量。",
                    "feedback": "計劃購買量從需求讀取，計劃銷售量從供應讀取。正因這兩個數量在該價格不同，才有短缺或過剩。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 價格調整方向：定向箭嘴 (8, 4) → (8, 5)。",
                "instruction": "就「價格低於均衡」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把任何選定價格下的需求量稱為實際售出量。",
                    "feedback": "單憑計劃需求不能確定成交量：須比較供應與需求，或在指定曲線移動後找出新交點。"
                  },
                  {
                    "key": "compare",
                    "label": "加上價格調整方向。",
                    "feedback": "由P = 4向5的向上箭嘴，顯示價格可自由調整時，短缺帶來的價格壓力。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "在P = 4時，短缺為2單位；調整箭嘴向上指向P = 5。",
            "explanation": {
              "question": "價格機制如何協調此市場？",
              "options": [
                "價格上升壓力抑制部分購買，並鼓勵供應。",
                "價格調整必須即時讓每名參與者得到最喜歡的結果。"
              ],
              "answer": 0,
              "feedback": [
                "移向P = 5可收窄計劃購買與銷售的差額。",
                "調整取決於制度與彈性；均衡不會滿足所有願望。"
              ]
            },
            "extension": null
          },
          {
            "key": "surplus",
            "title": "價格高於均衡",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "假設競爭市場價格具彈性。單憑本圖不能確定現實調整速度或得益分配。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "supply": "供應（S）",
              "chosenPrice": "選定的非均衡價格",
              "demandQuantity": "需求量（Qd）",
              "supplyQuantity": "供應量（Qs）",
              "priceAdjustment": "價格調整方向",
              "demandQuantityQ": "需求量（Qd）——數量讀值破線",
              "demandQuantityP": "需求量（Qd）——縱軸讀值破線",
              "supplyQuantityQ": "供應量（Qs）——數量讀值破線",
              "supplyQuantityP": "供應量（Qs）——縱軸讀值破線"
            },
            "prediction": {
              "question": "在P = 6時，買方還是賣方的計劃數量較大？",
              "options": [
                "賣方：Qs = 6大於Qd = 4。",
                "買方：Qd大於Qs。"
              ],
              "answer": 0,
              "feedback": [
                "在選定的水平價格線上讀取各曲線。",
                "在此價格下，兩個需求／供應表給出相反的數量排序。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 選定的非均衡價格連接(0, 6) → (10, 6)。",
                "instruction": "就「價格高於均衡」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上選定的非均衡價格。",
                    "feedback": "水平線把P固定於6，高於需求—供應交點，確立讀取買賣計劃的價格。"
                  },
                  {
                    "key": "misconception0",
                    "label": "把任何選定價格下的需求量稱為實際售出量。",
                    "feedback": "單憑計劃需求不能確定成交量：須比較供應與需求，或在指定曲線移動後找出新交點。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 需求量（Qd）位於(4, 6)。供應量（Qs）位於(6, 6)。需求量（Qd）——數量讀值破線：破線路徑 (4, 0) → (4, 6)。需求量（Qd）——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。供應量（Qs）——數量讀值破線：破線路徑 (6, 0) → (6, 6)。供應量（Qs）——縱軸讀值破線：破線路徑 (0, 6) → (6, 6)。",
                "instruction": "就「價格高於均衡」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "在選定價格下，從同一條曲線讀出需求量與供應量。",
                    "feedback": "計劃購買量從需求讀取，計劃銷售量從供應讀取。正因這兩個數量在該價格不同，才有短缺或過剩。"
                  },
                  {
                    "key": "read",
                    "label": "加上需求量（Qd）；供應量（Qs），並附讀取座標軸的破線輔助線。",
                    "feedback": "在P = 6時，需求給出Qd = 4、供應給出Qs = 6；分開的點與輔助線顯示超額供應2。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 價格調整方向：定向箭嘴 (8, 6) → (8, 5)。",
                "instruction": "就「價格高於均衡」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上價格調整方向。",
                    "feedback": "由P = 6向5的向下箭嘴，顯示價格可自由調整時，過剩帶來的價格壓力。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把任何選定價格下的需求量稱為實際售出量。",
                    "feedback": "單憑計劃需求不能確定成交量：須比較供應與需求，或在指定曲線移動後找出新交點。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "在P = 6時，過剩為2單位；調整箭嘴向下指向P = 5。",
            "explanation": {
              "question": "價格機制如何協調此市場？",
              "options": [
                "價格調整必須即時讓每名參與者得到最喜歡的結果。",
                "價格下降壓力鼓勵購買，並抑制供應。"
              ],
              "answer": 1,
              "feedback": [
                "調整取決於制度與彈性；均衡不會滿足所有願望。",
                "移向P = 5可收窄計劃購買與銷售的差額。"
              ]
            },
            "extension": null
          },
          {
            "key": "demandIncrease",
            "title": "需求增加",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "假設競爭市場價格具彈性。單憑本圖不能確定現實調整速度或得益分配。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "supply": "供應（S）",
              "shift": "增加後的需求（D1）",
              "initial": "初始點",
              "final": "最終點",
              "equilibriumChange": "均衡變動箭嘴",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "需求移至P = 12 − Q。均衡如何變化？",
              "options": [
                "價格下降、數量上升。",
                "均衡價格與數量均升至6。"
              ],
              "answer": 1,
              "feedback": [
                "該方向屬於另一種曲線移動。",
                "聯立移動後的曲線與不變的曲線；新交點決定兩個數值。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 增加後的需求（D1）連接(0, 12) → (10, 2)。",
                "instruction": "就「需求增加」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "把任何選定價格下的需求量稱為實際售出量。",
                    "feedback": "單憑計劃需求不能確定成交量：須比較供應與需求，或在指定曲線移動後找出新交點。"
                  },
                  {
                    "key": "construct",
                    "label": "加上增加後的需求（D1）。",
                    "feedback": "D1向外移至P = 12 − Q，供應不變，表示每個價格下的意欲購買量較大。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 初始點位於(5, 5)。最終點位於(6, 6)。初始點——數量讀值破線：破線路徑 (5, 0) → (5, 5)。初始點——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。最終點——數量讀值破線：破線路徑 (6, 0) → (6, 6)。最終點——縱軸讀值破線：破線路徑 (0, 6) → (6, 6)。",
                "instruction": "就「需求增加」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上初始點；最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始與最終交點由(5,5)移至(6,6)；輔助線顯示均衡數量與價格均上升。"
                  },
                  {
                    "key": "misconception1",
                    "label": "在選定價格下，從同一條曲線讀出需求量與供應量。",
                    "feedback": "計劃購買量從需求讀取，計劃銷售量從供應讀取。正因這兩個數量在該價格不同，才有短缺或過剩。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 均衡變動箭嘴：定向箭嘴 (5, 5) → (6, 6)。",
                "instruction": "就「需求增加」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把任何選定價格下的需求量稱為實際售出量。",
                    "feedback": "單憑計劃需求不能確定成交量：須比較供應與需求，或在指定曲線移動後找出新交點。"
                  },
                  {
                    "key": "compare",
                    "label": "加上均衡變動箭嘴。",
                    "feedback": "向右上箭嘴連接新舊均衡：需求增加使價格與數量沿不變供應曲線上升。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "新需求交點為(6,6)，初始E = (5,5)。",
            "explanation": {
              "question": "價格機制如何協調此市場？",
              "options": [
                "較高價格傳遞需求較強的訊息，並鼓勵沿供應曲線擴產。",
                "價格調整必須即時讓每名參與者得到最喜歡的結果。"
              ],
              "answer": 0,
              "feedback": [
                "價格傳遞稀少程度改變的訊息，並改變不變曲線上的誘因。",
                "調整取決於制度與彈性；均衡不會滿足所有願望。"
              ]
            },
            "extension": null
          },
          {
            "key": "supplyIncrease",
            "title": "供應增加",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "假設競爭市場價格具彈性。單憑本圖不能確定現實調整速度或得益分配。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "supply": "供應（S）",
              "shift": "增加後的供應（S1）",
              "initial": "初始點",
              "final": "最終點",
              "equilibriumChange": "均衡變動箭嘴",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "供應移至P = Q − 2。均衡如何變化？",
              "options": [
                "數量升至6、價格降至4。",
                "價格與數量均上升。"
              ],
              "answer": 0,
              "feedback": [
                "聯立移動後的曲線與不變的曲線；新交點決定兩個數值。",
                "該方向屬於另一種曲線移動。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 增加後的供應（S1）連接(2, 0) → (10, 8)。",
                "instruction": "就「供應增加」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上增加後的供應（S1）。",
                    "feedback": "S1向外移至P = Q − 2，需求不變，表示每個價格下的意欲銷售量較大。"
                  },
                  {
                    "key": "misconception0",
                    "label": "把任何選定價格下的需求量稱為實際售出量。",
                    "feedback": "單憑計劃需求不能確定成交量：須比較供應與需求，或在指定曲線移動後找出新交點。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 初始點位於(5, 5)。最終點位於(6, 4)。初始點——數量讀值破線：破線路徑 (5, 0) → (5, 5)。初始點——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。最終點——數量讀值破線：破線路徑 (6, 0) → (6, 4)。最終點——縱軸讀值破線：破線路徑 (0, 4) → (6, 4)。",
                "instruction": "就「供應增加」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "在選定價格下，從同一條曲線讀出需求量與供應量。",
                    "feedback": "計劃購買量從需求讀取，計劃銷售量從供應讀取。正因這兩個數量在該價格不同，才有短缺或過剩。"
                  },
                  {
                    "key": "read",
                    "label": "加上初始點；最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "交點由(5,5)移至(6,4)；輔助線顯示均衡數量上升、價格下降。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 均衡變動箭嘴：定向箭嘴 (5, 5) → (6, 4)。",
                "instruction": "就「供應增加」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上均衡變動箭嘴。",
                    "feedback": "向右下箭嘴連接兩個均衡：供應增加使價格下降，數量沿不變需求曲線擴大。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把任何選定價格下的需求量稱為實際售出量。",
                    "feedback": "單憑計劃需求不能確定成交量：須比較供應與需求，或在指定曲線移動後找出新交點。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "新供應交點為(6,4)，初始E = (5,5)。",
            "explanation": {
              "question": "價格機制如何協調此市場？",
              "options": [
                "價格調整必須即時讓每名參與者得到最喜歡的結果。",
                "較低成本擴大供應；較低市場價格鼓勵購買。"
              ],
              "answer": 1,
              "feedback": [
                "調整取決於制度與彈性；均衡不會滿足所有願望。",
                "價格傳遞稀少程度改變的訊息，並改變不變曲線上的誘因。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.3.surplus_diagram",
        "scope": "common",
        "title": "消費者盈餘、生產者盈餘與社會盈餘（surplus）圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "surplus",
            "title": "自願交易的兩種不同得益",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "面積是這些假設下的福利示例量度；分配、資訊與融資成本可改變政策判斷。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "supply": "供應（S）",
              "equilibrium": "均衡（E）",
              "consumerSurplus": "消費者盈餘（CS）",
              "producerSurplus": "生產者盈餘（PS）",
              "equilibriumQ": "均衡（E）——數量讀值破線",
              "equilibriumP": "均衡（E）——縱軸讀值破線"
            },
            "prediction": {
              "question": "在競爭均衡交點，消費者得益顯示在哪裏？",
              "options": [
                "市場價格下方的整個長方形。",
                "需求以下、市場價格以上，直至Q = 5。"
              ],
              "answer": 1,
              "feedback": [
                "價格乘數量的長方形是開支／收益，而非消費者盈餘。",
                "首五單位每一單位的支付意欲均高於價格。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 均衡（E）位於(5, 5)。均衡（E）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。均衡（E）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。",
                "instruction": "就「自願交易的兩種不同得益」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "把整個開支長方形塗成消費者盈餘。",
                    "feedback": "消費者盈餘在價格以上、支付意欲以下；完整P × Q長方形記錄付款，而非消費者淨得益。"
                  },
                  {
                    "key": "construct",
                    "label": "加上均衡（E），並附讀取座標軸的破線輔助線。",
                    "feedback": "交點及輔助線定位P = 5、Q = 5，確立盈餘面積的價格與成交量界線。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 消費者盈餘（CS）的陰影多邊形頂點為 (0, 5) → (0, 10) → (5, 5)。",
                "instruction": "就「自願交易的兩種不同得益」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上消費者盈餘（CS）。",
                    "feedback": "陰影三角形位於需求以下、P = 5以上，直至Q = 5，量度買方超出開支的支付意欲。"
                  },
                  {
                    "key": "misconception1",
                    "label": "把整個價格乘數量長方形塗成淨福利。",
                    "feedback": "淨福利採用邊際利益與邊際成本，或支付意欲與價格之間的差額；開支本身並非淨盈餘。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 生產者盈餘（PS）的陰影多邊形頂點為 (0, 0) → (0, 5) → (5, 5)。",
                "instruction": "就「自願交易的兩種不同得益」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把整個價格乘數量長方形塗成淨福利。",
                    "feedback": "淨福利採用邊際利益與邊際成本，或支付意欲與價格之間的差額；開支本身並非淨盈餘。"
                  },
                  {
                    "key": "compare",
                    "label": "加上生產者盈餘（PS）。",
                    "feedback": "新增三角形在供應以上、P = 5以下，直至Q = 5，量度賣方超出邊際供應成本的收入。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "CS是P = 5以上、D以下的上方三角形。PS是P = 5以下、S以上的下方三角形。它們是分開的面積，不是兩個收益長方形。",
            "explanation": {
              "question": "為何此處可把CS與PS相加？",
              "options": [
                "它們代表同一批交易的不同私人得益，並假設沒有外部影響。",
                "收益長方形也須加上，作為第三種福利得益。"
              ],
              "answer": 0,
              "feedback": [
                "CS與PS量度扣除付款與供應成本後的利益；付款本身是收入轉移。",
                "再次加入收益，會重複計算盈餘界線已處理的付款。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "根據兩個三角形，總盈餘是多少？",
              "options": [
                "每期50貨幣單位。",
                "每期25貨幣單位。"
              ],
              "answer": 1,
              "feedback": [
                "25是收益長方形，但每個盈餘三角形只有它的一半；把兩個完整長方形相加會高估盈餘。",
                "每個三角形為½ × 5 × 5 = 12.5，合共25。"
              ]
            }
          }
        ]
      }
    ]
  },
  "2.4": {
    "title": "行為經濟學",
    "summary": "人們總在充分知情下選擇嗎？",
    "question": "人們總在充分知情下選擇嗎？",
    "terms": [
      {
        "term": "bounded rationality",
        "definition": "資訊處理及時間限制，制約完全最優化的選擇。"
      },
      {
        "term": "nudge",
        "definition": "保留選項、不顯著改變經濟誘因，卻影響決策的選擇架構改變。"
      },
      {
        "term": "satisficing",
        "definition": "選擇可接受結果，而非尋求絕對最大值。"
      }
    ],
    "sections": [
      {
        "id": "behaviour",
        "heading": "選擇與限制",
        "body": [
          "理性模型假設偏好一致、資訊足夠及效用最大化。人們卻可能用經驗法則：最初數字錨定判斷，framing改變選項觀感，容易想起的例子被過度重視。Bounded rationality、自制有限、關心他人及資訊不全均挑戰最簡模型。",
          "Utility maximization是選可負擔組合中最喜歡的，不是買最多件。簡單理性模型假設偏好一致且有足夠資訊比較。Bounded rationality指時間及認知限制阻止全面比較；bounded self-control解釋計劃與實際儲蓄的落差；bounded selfishness容許關心他人。",
          "「選中間價」等經驗法則省力但可誤導。Anchoring是任意初始價格影響後來判斷；framing是相同機率的「90%生存」與「10%死亡」引起不同反應；availability bias是鮮明近期意外壓過不易記起的統計證據。三者機制不同，須指出決策哪個特徵改變。"
        ],
        "limitation": "有偏誤不代表每個人都犯同一錯誤。"
      },
      {
        "id": "nudges",
        "heading": "選擇架構與企業",
        "body": [
          "Default改變不採行動時所得選項；restricted choice移除選項；mandated choice要求主動選擇。Nudge保留選項而改變環境。企業或追求市場份額、增長、社會責任或滿意利潤，未必只求最大利潤。",
          "可輕易退出的退休金自動登記改變default並保留選擇，屬nudge。禁售有害產品是限制選擇；要求勾選是或否是強制選擇，兩者都不只是default。Nudge可成本低，但也可能操縱選擇，或在慣性弱時失效。",
          "企業可為擴大市場份額、投資增長、維護社會使命或達滿意目標而接受較低當期利潤。Satisficing指限制下接受足夠好的結果。這不代表不重視利潤，存續仍要籌措成本資金。"
        ],
        "limitation": "改變default可令不同人受益或受損。"
      }
    ],
    "modelPrompt": "利用例題找出機制，再解釋一項可改變結論的條件。",
    "modelAssumption": "例子只抽取一項機制；除非另有說明，其他相關條件不變。",
    "modelLimitation": "這些示例只分離一項機制，不能確立普遍預測或因果實證結論。",
    "worked": {
      "prompt": "200名合資格工人中80人主動加入退休計劃；改為可退出的自動登記後，150人保持加入。",
      "steps": [
        "原參與率為80/200×100=40%。",
        "Default改變後參與率150/200×100=75%，增加35個百分點。",
        "慣性及注意有限提供機制，但單靠前後比較不能排除其他變化。"
      ],
      "conclusion": "Default可保留選擇而影響行為；參與增加不證明每名工人福利改善。"
    },
    "quiz": {
      "question": "哪項是以default作nudge？",
      "options": [
        "停售所有含糖飲品。",
        "強制徵收糖稅。",
        "要求每名買家明確選飲品。",
        "自動提供水，但可免費改選其他飲品。"
      ],
      "feedback": [
        "移除選項是限制選擇，不只是改變default。",
        "稅透過價格改變實際誘因。",
        "Mandated choice要求採取行動，而非指派default。",
        "正確：不行動便得到水，其他選項仍保留。"
      ]
    },
    "challenge": {
      "hint": "考慮有迫切財務需要的住戶。"
    },
    "coverage": [
      {
        "id": "2.4.rational",
        "point": "理性選擇、效用最大化及完全資訊"
      },
      {
        "id": "2.4.biases",
        "point": "經驗法則、anchoring、framing及availability bias"
      },
      {
        "id": "2.4.bounds",
        "point": "Bounded rationality、自制與自利有限；不完全資訊"
      },
      {
        "id": "2.4.choice_architecture",
        "point": "Default、限制選擇、強制選擇及nudge"
      },
      {
        "id": "2.4.objectives",
        "point": "利潤、社會責任、市場份額、satisficing及增長目標"
      }
    ],
    "diagrams": []
  },
  "2.5": {
    "title": "需求彈性",
    "summary": "購買量對價格及收入有多敏感？",
    "question": "購買量對價格及收入有多敏感？",
    "terms": [
      {
        "term": "price elasticity of demand",
        "definition": "需求量百分比變化除以自身價格百分比變化。"
      },
      {
        "term": "income elasticity of demand",
        "definition": "需求量百分比變化除以收入百分比變化。"
      },
      {
        "term": "total revenue",
        "definition": "價格乘以銷售量。"
      }
    ],
    "sections": [
      {
        "id": "ped",
        "heading": "價格彈性",
        "body": [
          "Price elasticity of demand（PED）=需求量百分比變化÷價格百分比變化。通常的負號反映反向關係；把絕對值與1比較。大於1為富彈性，小於1為缺乏彈性，等於1為單一彈性。替代品、時間、必需性及佔收入支出比例影響反應。",
          "一致使用指定基數。本課初值法：百分比變化=(新−舊)/舊×100。$10升至$11為10%；100降至80為−20%，故PED=−2。此範圍價格升1%對應量約跌2%，不是減兩個單位。",
          "PED=0指數量不反應，以垂直需求線示意。完全彈性需求為水平線：理想模型中買家接受市場價，但更高價不買。單一彈性是相反方向的同比例變化，不是45度直線。近似替代品較多、調整時間較長、預算比重較大通常令反應較強；必需品常缺乏實際替代。"
        ],
        "limitation": "百分比計算視乎所選基數或中點法。"
      },
      {
        "id": "revenue",
        "heading": "收益與價格",
        "body": [
          "Total revenue=價格×數量。以點彈性分析足夠小的價格變化時，其他條件不變，富彈性需求下加價會減少收益，缺乏彈性需求下則增加收益。點彈性為1時，收益的一階變化為零。這些局部規則不能決定以初始值PED量度的大幅有限變化後的收益。",
          "有限變化須直接比較P0×Q0與P1×Q1。例如Q0=10、Q1=1、P0=1、P1=2，初始值PED=−0.9，但收益由1×10=10跌至2×1=2。之前的例子中收益由$10×100=$1,000跌至$11×80=$880。收益是銷售收入而非利潤，成本也可改變。",
          "企業改價前應估計PED；政府向反應較弱財貨課稅，可在較小減量下收稅，但可能與減少有害消費目標衝突。估計取決於市場定義、替代選項及時段。"
        ],
        "limitation": "彈性可隨曲線位置及消費者而變。"
      },
      {
        "id": "yed",
        "heading": "收入彈性",
        "body": [
          "Income elasticity of demand（YED）=需求量百分比變化÷收入百分比變化。正值為normal good，負值為inferior good；正而小於1表示必需品，大於1表示奢侈品。",
          "收入$2,000升至$2,200（10%），每月咖啡店次數10增至12（20%），YED=20/10=2，在此樣本屬normal且收入富彈性。巴士次數20降至19（−5%），YED=−0.5，在此收入範圍屬inferior good。「劣等」描述需求反應，並非道德或品質判斷。",
          "求缺值可用彈性乘指定百分比變化：YED=0.6、收入增5%，量便增3%。由200預測為206，假設估計適用此範圍。"
        ],
        "limitation": "分類視乎情境及收入範圍。"
      },
      {
        "id": "hl",
        "heading": "沿直線的彈性",
        "body": [
          "向下直線需求的PED會變：中點以上富彈性，中點為單一彈性，以下缺乏彈性。初級產品短期替代品往往較製成品少，但非必然。",
          "斜率不變是絕對變化固定；彈性比較比例。線性曲線高價低量端，同一單位數量變化佔數量百分比較大，PED絕對值便較大。",
          "基本食品常因滿足基本需要而PED低，特定製成品牌則可有近似替代。這只是趨勢，不是保證彈性的分類。收入升時，高YED行業可較必需品擴張快，影響企業產能計劃及經濟部門就業。"
        ],
        "limitation": "中點結論假設直線具正截距。"
      }
    ],
    "modelPrompt": "比較價量比例變化，先預測收益效果才計算。",
    "modelAssumption": "採用指定範圍的初值百分比變化；需求關係穩定，其他因素不變。 此有限變化估計並非點彈性；收益須比較P0×Q0與P1×Q1。",
    "modelLimitation": "估計彈性取決於範圍、百分比計法、時段及可用替代品。",
    "worked": {
      "prompt": "價格由$10升至$11，每週需求量100降至80。用初值法。",
      "steps": [
        "價格變化率為(11−10)/10×100=10%。",
        "數量變化率為(80−100)/100×100=−20%。",
        "PED=−20/10=−2，絕對值2，此範圍需求富彈性。",
        "收益由$10×100=$1,000降至$11×80=$880。"
      ],
      "conclusion": "數量反應超過加價，收益跌$120；這本身不能判定利潤。"
    },
    "quiz": {
      "question": "其他條件不變，收入升10%、需求跌5%，何解釋正確？",
      "options": [
        "YED=2，故屬奢侈品。",
        "PED=−0.5，故價格需求缺乏彈性。",
        "YED=−0.5，此範圍為inferior good。",
        "YED=0.5，故屬normal必需品。"
      ],
      "feedback": [
        "用數量變化除以收入變化，不可倒轉，並保留負號。",
        "變動的是收入，所以是YED而非PED。",
        "正確：−5%/10%=−0.5，收入升而需求跌。",
        "符號為負，不能歸類為normal good。"
      ]
    },
    "challenge": {
      "hint": "比較百分比變化，再計價格乘數量。"
    },
    "coverage": [
      {
        "id": "2.5.elasticity",
        "point": "彈性的意義及程度"
      },
      {
        "id": "2.5.ped_formula",
        "point": "PED公式及解讀"
      },
      {
        "id": "2.5.ped_diagrams",
        "point": "相對富／缺乏彈性需求；完全彈性、完全無彈性及單一PED圖"
      },
      {
        "id": "2.5.ped_line_hl",
        "point": "沿直線需求PED改變圖"
      },
      {
        "id": "2.5.ped_determinants",
        "point": "PED決定因素"
      },
      {
        "id": "2.5.ped_revenue_diagram",
        "point": "PED與總收益的價格變化圖"
      },
      {
        "id": "2.5.ped_decisions",
        "point": "企業及政府決策中的PED"
      },
      {
        "id": "2.5.ped_commodities_hl",
        "point": "初級產品與製成品PED比較"
      },
      {
        "id": "2.5.ped_calculation",
        "point": "由數據計PED、價格、數量或總收益"
      },
      {
        "id": "2.5.yed_formula",
        "point": "YED公式、正負、normal及inferior goods、必需及奢侈品"
      },
      {
        "id": "2.5.yed_engel_diagram",
        "point": "收入富彈性、缺乏彈性及inferior goods的Engel curves"
      },
      {
        "id": "2.5.yed_calculation",
        "point": "由數據計YED、收入或數量"
      },
      {
        "id": "2.5.yed_importance_hl",
        "point": "企業及部門轉變中的YED"
      }
    ],
    "diagrams": [
      {
        "id": "2.5.ped_diagrams",
        "scope": "common",
        "title": "相對富有與缺乏彈性的需求；完全彈性、完全無彈性與單一需求價格彈性（PED）圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "relative",
            "title": "在同一參照點比較反應程度",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "這些是其他決定因素不變的局部或極端需求模型。須說明採用點彈性、中點法，還是以初始值計算百分比的彈性。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–12。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 相對富有彈性的曲線連接(0, 8) → (12, 2)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "elastic": "相對富有彈性的曲線",
              "inelastic": "相對缺乏彈性的曲線",
              "reference": "共同參照點",
              "quantityResponse": "數量反應比較提示",
              "referenceQ": "共同參照點——數量讀值破線",
              "referenceP": "共同參照點——縱軸讀值破線"
            },
            "prediction": {
              "question": "在相同參照點與相同座標軸上，哪條曲線反應較大？",
              "options": [
                "相對富有彈性的曲線在共同點有較大的數量百分比反應。",
                "單憑曲線斜率，便可在所有可能的價格與數量排序彈性。"
              ],
              "answer": 0,
              "feedback": [
                "兩曲線均經過(4,6)；對給定價格百分比變動，較平坦曲線的局部數量百分比反應較大。",
                "彈性包括P/Q比率；不相關的點或不同軸比例，會使只按斜率作比較失效。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 相對缺乏彈性的曲線連接(0, 14) → (7, 0)。",
                "instruction": "就「在同一參照點比較反應程度」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上相對缺乏彈性的曲線。",
                    "feedback": "新增較陡需求曲線經過(4,6)，可在相同座標軸上，把它較小的數量反應與較平坦曲線比較。"
                  },
                  {
                    "key": "misconception0",
                    "label": "採用互不相關的參照價格與數量，按斜率排序反應程度。",
                    "feedback": "有效局部比較需要相同P/Q參照與軸比例；完全彈性及單一彈性情況須保留各自的水平、垂直或比例幾何形狀。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 共同參照點位於(4, 6)。共同參照點——數量讀值破線：破線路徑 (4, 0) → (4, 6)。共同參照點——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。",
                "instruction": "就「在同一參照點比較反應程度」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "採用互不相關的參照價格與數量，按斜率排序反應程度。",
                    "feedback": "有效局部比較需要相同P/Q參照與軸比例；完全彈性及單一彈性情況須保留各自的水平、垂直或比例幾何形狀。"
                  },
                  {
                    "key": "read",
                    "label": "加上共同參照點，並附讀取座標軸的破線輔助線。",
                    "feedback": "共同點與輔助線為兩曲線固定Q = 4、P = 6，使P/Q不變，以比較局部反應。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 數量反應比較提示：定向箭嘴 (3, 6) → (5, 6)。",
                "instruction": "就「在同一參照點比較反應程度」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上數量反應比較提示。",
                    "feedback": "水平箭嘴是參照價格下的數量反應提示，並非沿任何一條需求曲線移動或新的均衡。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把比較箭嘴當作由不明衝擊引致的實際均衡變動。",
                    "feedback": "水平箭嘴是共同參照價格下的反應提示；它不新增供應／需求移動，也不確定新市場均衡。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "箭嘴標示共同參照價格下數量反應的水平方向。它是比較提示，並非另一條已量度的反應曲線。",
            "explanation": {
              "question": "為何此彈性比較必須採用相同參照點？",
              "options": [
                "斜率決定彈性，不受單位或參照值影響。",
                "在共同P與Q下，局部數量反應的差異決定彈性排序。"
              ],
              "answer": 1,
              "feedback": [
                "改變單位或評估點，可改變視覺斜率比較，卻不能證明所聲稱的普遍彈性排序。",
                "點彈性採用局部數量斜率乘P/Q；本比較固定P/Q。"
              ]
            },
            "extension": null
          },
          {
            "key": "perfectElastic",
            "title": "完全彈性（perfectly elastic）的極端情況",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "這些是其他決定因素不變的局部或極端需求模型。須說明採用點彈性、中點法，還是以初始值計算百分比的彈性。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–12。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 完全彈性曲線連接(0, 4) → (12, 4)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "perfectElastic": "完全彈性曲線",
              "initial": "初始點",
              "final": "最終點",
              "response": "示例反應",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "預測此|PED|情況代表的反應。",
              "options": [
                "價格改變，數量固定。",
                "在圖示的固定價格下，數量可改變。"
              ],
              "answer": 1,
              "feedback": [
                "那是垂直、完全無彈性的曲線。",
                "水平曲線把價格固定於4；兩點數量為4及8。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(4, 4)。初始點——數量讀值破線：破線路徑 (4, 0) → (4, 4)。初始點——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「完全彈性（perfectly elastic）的極端情況」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  },
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "第一點讀出水平需求曲線上的Q = 4、P = 4，確立其固定價格水平。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(8, 4)。最終點——數量讀值破線：破線路徑 (8, 0) → (8, 4)。最終點——縱軸讀值破線：破線路徑 (0, 4) → (8, 4)。",
                "instruction": "就「完全彈性（perfectly elastic）的極端情況」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "第二點讀出相同P = 4下Q = 8；完全彈性需求價格固定時，數量可改變。"
                  },
                  {
                    "key": "misconception1",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 示例反應：定向箭嘴 (4, 4) → (8, 4)。",
                "instruction": "就「完全彈性（perfectly elastic）的極端情況」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "在固定數量下，把反應箭嘴畫成垂直。",
                    "feedback": "水平曲線維持價格不變、數量改變。固定數量下的垂直反應會表示完全無彈性的極端情況。"
                  },
                  {
                    "key": "compare",
                    "label": "加上示例反應。",
                    "feedback": "水平箭嘴連接(4,4)至(8,4)，展示完全彈性需求的固定價格幾何形狀。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "兩點由(4,4)水平移至(8,4)，價格不變。",
            "explanation": {
              "question": "應如何理解此極端情況？",
              "options": [
                "它在情境所述條件下分離出一種極端反應。",
                "每個現實市場在所有價格下均須如此。"
              ],
              "answer": 0,
              "feedback": [
                "極端模型突顯反應程度；現實供應或需求可以沒那麼極端。",
                "現實的有限反應取決於市場條件與時間。"
              ]
            },
            "extension": null
          },
          {
            "key": "perfectInelastic",
            "title": "完全無彈性（perfectly inelastic）的極端情況",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "這些是其他決定因素不變的局部或極端需求模型。須說明採用點彈性、中點法，還是以初始值計算百分比的彈性。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–12。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 完全無彈性曲線連接(4, 0) → (4, 16)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "perfectInelastic": "完全無彈性曲線",
              "initial": "初始點",
              "final": "最終點",
              "response": "示例反應",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "預測此|PED|情況代表的反應。",
              "options": [
                "價格改變，數量維持4。",
                "價格固定，數量改變。"
              ],
              "answer": 0,
              "feedback": [
                "垂直曲線把數量固定於4；兩個價格為4及8。",
                "那是水平、完全彈性的曲線。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(4, 4)。初始點——數量讀值破線：破線路徑 (4, 0) → (4, 4)。初始點——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「完全無彈性（perfectly inelastic）的極端情況」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "第一點讀出垂直需求曲線上的Q = 4、P = 4，確立其固定數量。"
                  },
                  {
                    "key": "misconception0",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(4, 8)。最終點——數量讀值破線：破線路徑 (4, 0) → (4, 8)。最終點——縱軸讀值破線：破線路徑 (0, 8) → (4, 8)。",
                "instruction": "就「完全無彈性（perfectly inelastic）的極端情況」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  },
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "第二點讀出相同Q = 4下P = 8：價格變動不改變需求量。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 示例反應：定向箭嘴 (4, 4) → (4, 8)。",
                "instruction": "就「完全無彈性（perfectly inelastic）的極端情況」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上示例反應。",
                    "feedback": "垂直箭嘴連接(4,4)至(4,8)，顯示數量反應為零，因此需求完全無彈性。"
                  },
                  {
                    "key": "misconception2",
                    "label": "在固定價格下，把反應箭嘴畫成水平。",
                    "feedback": "垂直曲線維持數量不變、價格改變。固定價格下的水平反應會表示完全彈性的極端情況。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "兩點由(4,4)垂直移至(4,8)，數量不變。",
            "explanation": {
              "question": "應如何理解此極端情況？",
              "options": [
                "每個現實市場在所有價格下均須如此。",
                "它在情境所述條件下分離出一種極端反應。"
              ],
              "answer": 1,
              "feedback": [
                "現實的有限反應取決於市場條件與時間。",
                "極端模型突顯反應程度；現實供應或需求可以沒那麼極端。"
              ]
            },
            "extension": null
          },
          {
            "key": "unit",
            "title": "單一彈性（unit elasticity）：直角雙曲線",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "這些是其他決定因素不變的局部或極端需求模型。須說明採用點彈性、中點法，還是以初始值計算百分比的彈性。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–12。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 單一彈性曲線是以取樣點繪成的平滑曲線，顯示由(1, 12)至(12, 1)。需求曲線是在正Q範圍的直角雙曲線P = 12/Q；它向下傾斜，點|PED| = 1維持不變。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "unit": "單一彈性曲線",
              "initial": "初始點",
              "final": "最終點",
              "response": "示例反應",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "預測此|PED|情況代表的反應。",
              "options": [
                "任何向下的直線需求曲線在各處都是單一彈性。",
                "每一點的數量比例反應均有|PED| = 1。"
              ],
              "answer": 1,
              "feedback": [
                "直線需求的點彈性會改變；雙曲線則有不變的單一彈性。",
                "在P = 12/Q上，數量2→4、價格6→3使PQ = 12不變。各點彈性的絕對值均為1。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(2, 6)。初始點——數量讀值破線：破線路徑 (2, 0) → (2, 6)。初始點——縱軸讀值破線：破線路徑 (0, 6) → (2, 6)。",
                "instruction": "就「單一彈性（unit elasticity）：直角雙曲線」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  },
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "第一組輔助線讀出直角雙曲線上的Q = 2、P = 6，乘積P × Q為12。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(4, 3)。最終點——數量讀值破線：破線路徑 (4, 0) → (4, 3)。最終點——縱軸讀值破線：破線路徑 (0, 3) → (4, 3)。",
                "instruction": "就「單一彈性（unit elasticity）：直角雙曲線」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "第二組輔助線讀出Q = 4、P = 3：數量倍增使價格減半，維持P × Q = 12。"
                  },
                  {
                    "key": "misconception1",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 示例反應：定向箭嘴 (2, 6) → (4, 3)。",
                "instruction": "就「單一彈性（unit elasticity）：直角雙曲線」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "沿雙曲線把數量倍增，同時維持價格不變。",
                    "feedback": "在P = 12/Q上，數量由2倍增至4，價格由6減半至3；固定價格會離開曲線。"
                  },
                  {
                    "key": "compare",
                    "label": "加上示例反應。",
                    "feedback": "向右下箭嘴連接雙曲線上乘積相等的觀察點，展示沿此曲線的單一彈性。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "取樣曲線為正Q範圍的P = 12/Q；(2,6)與(4,3)的總收益均為12。",
            "explanation": {
              "question": "哪項對單一彈性的解釋正確？",
              "options": [
                "點|PED|為1；沿雙曲線的有限變動維持收益不變。",
                "基期百分比公式對此雙曲線的每次有限變動均恰好給出1。"
              ],
              "answer": 0,
              "feedback": [
                "點彈性絕對值為1，PQ不變。以基期百分比計算的有限變動彈性未必等於點值。",
                "當Q 2→4、P 6→3，基期變動為+100%與−50%，彈性絕對值為2，儘管點彈性為1。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.5.ped_line_hl",
        "scope": "hl",
        "title": "沿直線需求曲線改變的需求價格彈性（PED）圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "segments",
            "title": "沿直線需求的彈性變動",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "採用點彈性，並非跨越相距甚遠兩點、以初始值作有限變動計算。這是HL內容。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "upper": "上段富有彈性點",
              "midpoint": "單一彈性中點",
              "lower": "下段缺乏彈性點",
              "upperQ": "上段富有彈性點——數量讀值破線",
              "upperP": "上段富有彈性點——縱軸讀值破線",
              "midpointQ": "單一彈性中點——數量讀值破線",
              "midpointP": "單一彈性中點——縱軸讀值破線",
              "lowerQ": "下段缺乏彈性點——數量讀值破線",
              "lowerP": "下段缺乏彈性點——縱軸讀值破線"
            },
            "prediction": {
              "question": "在P = 10 − Q上，Q = 2、5或8，哪裏的點|PED|最大？",
              "options": [
                "Q = 2，在上段。",
                "因斜率不變，所以各處相同。"
              ],
              "answer": 0,
              "feedback": [
                "Q = 2時，點|PED| = P/Q = 8/2 = 4。",
                "斜率不變並不維持P/Q比率不變。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 上段富有彈性點位於(2, 8)。上段富有彈性點——數量讀值破線：破線路徑 (2, 0) → (2, 8)。上段富有彈性點——縱軸讀值破線：破線路徑 (0, 8) → (2, 8)。",
                "instruction": "就「沿直線需求的彈性變動」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上上段富有彈性點，並附讀取座標軸的破線輔助線。",
                    "feedback": "上段點讀出Q = 2、P = 8；斜率為−1，點彈性絕對值P/Q = 4，因此此段富有彈性。"
                  },
                  {
                    "key": "misconception0",
                    "label": "因為是直線，把每一點標成相同彈性。",
                    "feedback": "點彈性包括P/Q；即使斜率不變，沿直線需求曲線仍會改變。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 單一彈性中點位於(5, 5)。單一彈性中點——數量讀值破線：破線路徑 (5, 0) → (5, 5)。單一彈性中點——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。",
                "instruction": "就「沿直線需求的彈性變動」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "因中點價格為正，把它標成高度富有彈性。",
                    "feedback": "在(5,5)，點|PED| = P/Q = 1。單憑價格為正不能決定彈性類別。"
                  },
                  {
                    "key": "read",
                    "label": "加上單一彈性中點，並附讀取座標軸的破線輔助線。",
                    "feedback": "中點讀出Q = 5、P = 5，使點彈性P/Q = 1，雖然直線斜率不變。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 下段缺乏彈性點位於(8, 2)。下段缺乏彈性點——數量讀值破線：破線路徑 (8, 0) → (8, 2)。下段缺乏彈性點——縱軸讀值破線：破線路徑 (0, 2) → (8, 2)。",
                "instruction": "就「沿直線需求的彈性變動」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上下段缺乏彈性點，並附讀取座標軸的破線輔助線。",
                    "feedback": "下段點讀出Q = 8、P = 2，使點彈性為0.25：P/Q下降使此段缺乏彈性。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把下段點標成比上段點更富有彈性。",
                    "feedback": "在(8,2)，點|PED| = 2/8 = 0.25，低於上段點的4。P/Q比率沿此直線下降。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "標示點為上段(2,8)、中點(5,5)、下段(8,2)；點|PED|分別為4、1、0.25。",
            "explanation": {
              "question": "為何沿此直線隨Q上升，彈性下降？",
              "options": [
                "需求曲線在每一點變成另一條曲線。",
                "P/Q下降，雖然斜率絕對值不變。"
              ],
              "answer": 1,
              "feedback": [
                "沿同一曲線移動只改變評估點，不改變需求表。",
                "在同一需求表的較後點，價格較低、數量較高，比例反應因而改變。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.5.ped_revenue_diagram",
        "scope": "common",
        "title": "需求價格彈性（PED）、總收益與價格變動圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "elastic",
            "title": "在富有彈性段減價",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "收益不等於利潤。例子採用直線需求；單一彈性中點規則是局部關係，並非一般有限變動恆等式。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "initial": "初始點",
              "final": "最終點",
              "initialRevenue": "初始總收益長方形",
              "finalRevenue": "最終總收益長方形",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "在圖示段減價，收益長方形如何變化？",
              "options": [
                "每當價格下降，收益便下降。",
                "收益上升：數量增加的效果超過價格下降。"
              ],
              "answer": 1,
              "feedback": [
                "數量較大可以有餘地彌補單位價格下降。",
                "初始長方形為2 × 8；最終為3 × 7。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(2, 8)。初始點——數量讀值破線：破線路徑 (2, 0) → (2, 8)。初始點——縱軸讀值破線：破線路徑 (0, 8) → (2, 8)。",
                "instruction": "就「在富有彈性段減價」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "對調點的價格與數量座標。",
                    "feedback": "數量在橫軸，價格在縱軸。先在軸上定位初始觀察，再以價格乘數量量度收益。"
                  },
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始輔助線讀出Q = 2、P = 8，確立量度初始收益所需的兩個維度。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(3, 7)。初始總收益長方形的陰影多邊形頂點為 (0, 0) → (2, 0) → (2, 8) → (0, 8)。最終點——數量讀值破線：破線路徑 (3, 0) → (3, 7)。最終點——縱軸讀值破線：破線路徑 (0, 7) → (3, 7)。",
                "instruction": "就「在富有彈性段減價」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上最終點；初始總收益長方形，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始長方形寬2、高8；新點(3,7)設定較低價格與較大數量以作比較。"
                  },
                  {
                    "key": "misconception1",
                    "label": "以一維的數量線量度收益。",
                    "feedback": "總收益取決於價格與數量；其長方形高為P、寬為Q，而非只有數量長度。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 最終總收益長方形的陰影多邊形頂點為 (0, 0) → (3, 0) → (3, 7) → (0, 7)。",
                "instruction": "就「在富有彈性段減價」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "以一維的數量線量度收益。",
                    "feedback": "總收益取決於價格與數量；其長方形高為P、寬為Q，而非只有數量長度。"
                  },
                  {
                    "key": "compare",
                    "label": "加上最終總收益長方形。",
                    "feedback": "最終長方形寬3、高7，收益為21，高於初始16：數量增幅的效果超過價格下降。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "初始(2,8)的TR = 16，最終(3,7)的TR = 21；兩個長方形重疊，但各自是獨立量度。",
            "explanation": {
              "question": "哪項彈性規則符合此比較？",
              "options": [
                "在此富有彈性段，減價提高總收益。",
                "收益只取決於數量，故可忽略價格部分。"
              ],
              "answer": 0,
              "feedback": [
                "收益為P × Q；彈性聯繫數量比例反應與價格比例變動。",
                "忽略價格會錯過長方形所比較的取捨。"
              ]
            },
            "extension": null
          },
          {
            "key": "inelastic",
            "title": "在缺乏彈性段減價",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "收益不等於利潤。例子採用直線需求；單一彈性中點規則是局部關係，並非一般有限變動恆等式。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "initial": "初始點",
              "final": "最終點",
              "initialRevenue": "初始總收益長方形",
              "finalRevenue": "最終總收益長方形",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "在圖示段減價，收益長方形如何變化？",
              "options": [
                "收益下降：數量增加不能抵銷價格下降。",
                "每當數量上升，收益便上升。"
              ],
              "answer": 0,
              "feedback": [
                "初始長方形為7 × 3；最終為8 × 2。",
                "若單位價格下降幅度夠大，銷量較多未必有較高收益。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(7, 3)。初始點——數量讀值破線：破線路徑 (7, 0) → (7, 3)。初始點——縱軸讀值破線：破線路徑 (0, 3) → (7, 3)。",
                "instruction": "就「在缺乏彈性段減價」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始輔助線讀出Q = 7、P = 3，確立量度初始收益的價格與數量。"
                  },
                  {
                    "key": "misconception0",
                    "label": "對調點的價格與數量座標。",
                    "feedback": "數量在橫軸，價格在縱軸。先在軸上定位初始觀察，再以價格乘數量量度收益。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(8, 2)。初始總收益長方形的陰影多邊形頂點為 (0, 0) → (7, 0) → (7, 3) → (0, 3)。最終點——數量讀值破線：破線路徑 (8, 0) → (8, 2)。最終點——縱軸讀值破線：破線路徑 (0, 2) → (8, 2)。",
                "instruction": "就「在缺乏彈性段減價」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "以一維的數量線量度收益。",
                    "feedback": "總收益取決於價格與數量；其長方形高為P、寬為Q，而非只有數量長度。"
                  },
                  {
                    "key": "read",
                    "label": "加上最終點；初始總收益長方形，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始長方形寬7、高3；新點(8,2)定位較低價格的比較。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 最終總收益長方形的陰影多邊形頂點為 (0, 0) → (8, 0) → (8, 2) → (0, 2)。",
                "instruction": "就「在缺乏彈性段減價」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上最終總收益長方形。",
                    "feedback": "最終長方形寬8、高2，收益由21降至16：數量增幅不能抵銷價格下降。"
                  },
                  {
                    "key": "misconception2",
                    "label": "以一維的數量線量度收益。",
                    "feedback": "總收益取決於價格與數量；其長方形高為P、寬為Q，而非只有數量長度。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "初始(7,3)的TR = 21，最終(8,2)的TR = 16；須比較完整長方形，而非只有重疊部分。",
            "explanation": {
              "question": "哪項彈性規則符合此比較？",
              "options": [
                "收益只取決於數量，故可忽略價格部分。",
                "在此缺乏彈性段，減價降低總收益。"
              ],
              "answer": 1,
              "feedback": [
                "忽略價格會錯過長方形所比較的取捨。",
                "收益為P × Q；彈性聯繫數量比例反應與價格比例變動。"
              ]
            },
            "extension": null
          },
          {
            "key": "unit",
            "title": "局部單一彈性的收益最大點",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "收益不等於利潤。例子採用直線需求；單一彈性中點規則是局部關係，並非一般有限變動恆等式。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "initial": "初始點",
              "initialRevenue": "初始總收益長方形",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線"
            },
            "prediction": {
              "question": "在中點(5,5)，很小的價格變動對收益有甚麼一階影響？",
              "options": [
                "每次有限幅度減價都使收益完全不變。",
                "收益在其最大點局部平穩。"
              ],
              "answer": 1,
              "feedback": [
                "這條直線的單一彈性條件只適用於局部；有限幅度離開此點會降低收益。",
                "在Q = 5時，點|PED| = 1，TR = Q(10 − Q)達到高峰。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(5, 5)。初始點——數量讀值破線：破線路徑 (5, 0) → (5, 5)。初始點——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。",
                "instruction": "就「局部單一彈性的收益最大點」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "對調點的價格與數量座標。",
                    "feedback": "數量在橫軸，價格在縱軸。先在軸上定位初始觀察，再以價格乘數量量度收益。"
                  },
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "中點輔助線讀出Q = 5、P = 5，這條直線需求在此處的局部點彈性為一。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 初始總收益長方形的陰影多邊形頂點為 (0, 0) → (5, 0) → (5, 5) → (0, 5)。",
                "instruction": "就「局部單一彈性的收益最大點」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上初始總收益長方形。",
                    "feedback": "長方形寬5、高5，中點收益為25；這是單一狀態的面積，並不聲稱有限價格變動維持收益不變。"
                  },
                  {
                    "key": "misconception1",
                    "label": "以一維的數量線量度收益。",
                    "feedback": "總收益取決於價格與數量；其長方形高為P、寬為Q，而非只有數量長度。"
                  }
                ],
                "answer": "read"
              }
            ],
            "comparison": "只畫出中點及其單一TR長方形：Q = 5、P = 5、TR = 25，沒有虛構的第二狀態。",
            "explanation": {
              "question": "哪項彈性規則符合此比較？",
              "options": [
                "單一彈性點沒有一階收益變動；任意有限幅度變動則不同。",
                "直線上任何兩點的收益均相同。"
              ],
              "answer": 0,
              "feedback": [
                "此處TR = 25最大；例如Q = 6、P = 4時為24。",
                "若要在一段範圍內收益不變，須用P = 12/Q等另一種曲線。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.5.yed_engel_diagram",
        "scope": "common",
        "title": "收入富有彈性、缺乏彈性與劣等物品的恩格爾曲線（Engel curves）",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "incomeElastic",
            "title": "收入富有彈性的正常物品",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "線段只適用於圖示的正收入範圍。在其他收入水平，物品類別可能改變；收入並非物品本身價格。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–16。縱軸：每期收入（Y）, 0–140。以下座標為（水平，垂直）。 示例收入範圍的恩格爾曲線連接(10, 100) → (14, 120)。",
            "labels": {
              "main": "圖表面板",
              "quantity": "每期數量（Q）",
              "income": "每期收入（Y）",
              "engel": "示例收入範圍的恩格爾曲線",
              "initial": "初始點",
              "final": "最終點",
              "incomeChange": "收入變動方向",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "收入由100升至120。在此示例範圍，數量如何變化？",
              "options": [
                "數量由10升至14，比例增幅大於收入。",
                "數量上升的比例小於收入。"
              ],
              "answer": 0,
              "feedback": [
                "以初始值計算，收入升20%，數量變動40%。",
                "正數量反應表示正常物品；反應的相對大小決定彈性類別。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(10, 100)。初始點——數量讀值破線：破線路徑 (10, 0) → (10, 100)。初始點——縱軸讀值破線：破線路徑 (0, 100) → (10, 100)。",
                "instruction": "就「收入富有彈性的正常物品」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始輔助線讀出數量10、收入100；縱座標是收入，確立YED基準。"
                  },
                  {
                    "key": "misconception0",
                    "label": "把本身價格放在縱軸，並把變動標為PED。",
                    "feedback": "這是恩格爾曲線：縱軸變量是收入，YED比較數量與收入的百分比變動。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(14, 120)。最終點——數量讀值破線：破線路徑 (14, 0) → (14, 120)。最終點——縱軸讀值破線：破線路徑 (0, 120) → (14, 120)。",
                "instruction": "就「收入富有彈性的正常物品」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把縱向收入變動當作價格變動。",
                    "feedback": "此處縱軸變量是收入，所標反應教授YED。PED需要本身價格觀察，本情境沒有提供。"
                  },
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "最終點讀出數量14、收入120，即相對初始值，數量升40%、收入升20%。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 收入變動方向：定向箭嘴 (10, 100) → (14, 120)。",
                "instruction": "就「收入富有彈性的正常物品」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上收入變動方向。",
                    "feedback": "向右上箭嘴連接(10,100)至(14,120)：在示例範圍，數量隨收入增加的比例較大。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把本身價格放在縱軸，並把變動標為PED。",
                    "feedback": "這是恩格爾曲線：縱軸變量是收入，YED比較數量與收入的百分比變動。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "收入在縱軸、數量在橫軸：恩格爾線段連接(Q,Y) = (10,100)至(14,120)。箭嘴顯示收入增加。",
            "explanation": {
              "question": "以基期百分比變動計算，哪項需求收入彈性（YED）解釋正確？",
              "options": [
                "只看視覺斜率即可讀出YED，無須任何參照值。",
                "YED = 2：收入富有彈性，屬正常物品。"
              ],
              "answer": 1,
              "feedback": [
                "斜率取決於所選座標軸與單位；百分比比率採用兩個初始值。",
                "以初始Q = 10及初始收入 = 100計算，YED = (%ΔQ)/(%Δ收入) = 2。"
              ]
            },
            "extension": null
          },
          {
            "key": "incomeInelastic",
            "title": "收入缺乏彈性的正常物品",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "線段只適用於圖示的正收入範圍。在其他收入水平，物品類別可能改變；收入並非物品本身價格。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–16。縱軸：每期收入（Y）, 0–140。以下座標為（水平，垂直）。 示例收入範圍的恩格爾曲線連接(10, 100) → (11, 120)。",
            "labels": {
              "main": "圖表面板",
              "quantity": "每期數量（Q）",
              "income": "每期收入（Y）",
              "engel": "示例收入範圍的恩格爾曲線",
              "initial": "初始點",
              "final": "最終點",
              "incomeChange": "收入變動方向",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "收入由100升至120。在此示例範圍，數量如何變化？",
              "options": [
                "數量下降，因此是劣等物品。",
                "數量由10升至11，比例增幅小於收入。"
              ],
              "answer": 1,
              "feedback": [
                "正數量反應表示正常物品；反應的相對大小決定彈性類別。",
                "以初始值計算，收入升20%，數量變動10%。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(10, 100)。初始點——數量讀值破線：破線路徑 (10, 0) → (10, 100)。初始點——縱軸讀值破線：破線路徑 (0, 100) → (10, 100)。",
                "instruction": "就「收入缺乏彈性的正常物品」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "把本身價格放在縱軸，並把變動標為PED。",
                    "feedback": "這是恩格爾曲線：縱軸變量是收入，YED比較數量與收入的百分比變動。"
                  },
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始點讀出收入100時數量10，以縱軸收入確立基準。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(11, 120)。最終點——數量讀值破線：破線路徑 (11, 0) → (11, 120)。最終點——縱軸讀值破線：破線路徑 (0, 120) → (11, 120)。",
                "instruction": "就「收入缺乏彈性的正常物品」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "最終點讀出收入120時數量11；相對基準，收入升20%、數量升10%。"
                  },
                  {
                    "key": "misconception1",
                    "label": "把縱向收入變動當作價格變動。",
                    "feedback": "此處縱軸變量是收入，所標反應教授YED。PED需要本身價格觀察，本情境沒有提供。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 收入變動方向：定向箭嘴 (10, 100) → (11, 120)。",
                "instruction": "就「收入缺乏彈性的正常物品」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把本身價格放在縱軸，並把變動標為PED。",
                    "feedback": "這是恩格爾曲線：縱軸變量是收入，YED比較數量與收入的百分比變動。"
                  },
                  {
                    "key": "compare",
                    "label": "加上收入變動方向。",
                    "feedback": "向右上箭嘴顯示數量對收入上升有正但小於比例的反應，即收入缺乏彈性。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "收入在縱軸、數量在橫軸：恩格爾線段連接(Q,Y) = (10,100)至(11,120)。箭嘴顯示收入增加。",
            "explanation": {
              "question": "以基期百分比變動計算，哪項需求收入彈性（YED）解釋正確？",
              "options": [
                "YED = 0.5：收入缺乏彈性，屬正常物品。",
                "只看視覺斜率即可讀出YED，無須任何參照值。"
              ],
              "answer": 0,
              "feedback": [
                "以初始Q = 10及初始收入 = 100計算，YED = (%ΔQ)/(%Δ收入) = 0.5。",
                "斜率取決於所選座標軸與單位；百分比比率採用兩個初始值。"
              ]
            },
            "extension": null
          },
          {
            "key": "inferior",
            "title": "劣等物品的收入範圍",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "線段只適用於圖示的正收入範圍。在其他收入水平，物品類別可能改變；收入並非物品本身價格。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–16。縱軸：每期收入（Y）, 0–140。以下座標為（水平，垂直）。 示例收入範圍的恩格爾曲線連接(10, 100) → (9, 120)。",
            "labels": {
              "main": "圖表面板",
              "quantity": "每期數量（Q）",
              "income": "每期收入（Y）",
              "engel": "示例收入範圍的恩格爾曲線",
              "initial": "初始點",
              "final": "最終點",
              "incomeChange": "收入變動方向",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "收入由100升至120。在此示例範圍，數量如何變化？",
              "options": [
                "數量由10降至9。",
                "因為所有物品都是正常物品，所以數量必須上升。"
              ],
              "answer": 0,
              "feedback": [
                "以初始值計算，收入升20%，數量變動−10%。",
                "劣等物品在指定範圍的收入反應為負。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(10, 100)。初始點——數量讀值破線：破線路徑 (10, 0) → (10, 100)。初始點——縱軸讀值破線：破線路徑 (0, 100) → (10, 100)。",
                "instruction": "就「劣等物品的收入範圍」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始點與輔助線讀出收入100時數量10，設定收入反應基準。"
                  },
                  {
                    "key": "misconception0",
                    "label": "把本身價格放在縱軸，並把變動標為PED。",
                    "feedback": "這是恩格爾曲線：縱軸變量是收入，YED比較數量與收入的百分比變動。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(9, 120)。最終點——數量讀值破線：破線路徑 (9, 0) → (9, 120)。最終點——縱軸讀值破線：破線路徑 (0, 120) → (9, 120)。",
                "instruction": "就「劣等物品的收入範圍」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把縱向收入變動當作價格變動。",
                    "feedback": "此處縱軸變量是收入，所標反應教授YED。PED需要本身價格觀察，本情境沒有提供。"
                  },
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "最終點讀出收入120時數量9，顯示此示例範圍收入上升而數量下降。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 收入變動方向：定向箭嘴 (10, 100) → (9, 120)。",
                "instruction": "就「劣等物品的收入範圍」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上收入變動方向。",
                    "feedback": "向左上箭嘴把較高收入連至較低需求量，表示此劣等物品例子的YED為負。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把本身價格放在縱軸，並把變動標為PED。",
                    "feedback": "這是恩格爾曲線：縱軸變量是收入，YED比較數量與收入的百分比變動。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "收入在縱軸、數量在橫軸：恩格爾線段連接(Q,Y) = (10,100)至(9,120)。箭嘴顯示收入增加。",
            "explanation": {
              "question": "以基期百分比變動計算，哪項需求收入彈性（YED）解釋正確？",
              "options": [
                "只看視覺斜率即可讀出YED，無須任何參照值。",
                "YED = −0.5：在此範圍屬劣等物品。"
              ],
              "answer": 1,
              "feedback": [
                "斜率取決於所選座標軸與單位；百分比比率採用兩個初始值。",
                "以初始Q = 10及初始收入 = 100計算，YED = (%ΔQ)/(%Δ收入) = −0.5。"
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  "2.6": {
    "title": "供給彈性",
    "summary": "生產者能多快擴產？",
    "question": "生產者能多快擴產？",
    "terms": [
      {
        "term": "price elasticity of supply",
        "definition": "供給量百分比變化除以價格百分比變化。"
      },
      {
        "term": "spare capacity",
        "definition": "毋須重大新投資即可支持增產的現有設備或投入。"
      }
    ],
    "sections": [
      {
        "id": "pes",
        "heading": "供給價格彈性",
        "body": [
          "PES=供給量百分比變化÷價格百分比變化。大於1為相對富彈性，小於1為相對缺乏彈性。閒置產能、時間、要素流動性、存貨及成本上升影響反應。",
          "初值法下$20升至$22為10%，100增至105為5%，故PES=0.5。此範圍加價1%對應產出約增0.5%。PES大於1富彈性，等於1單一彈性，零為完全無彈性。",
          "垂直供給線表示期內可供量固定；水平線是單一價格下供給無限的理想情況，兩者都非適用所有時段。PES=1.5、加價4%，預計供給增6%；由500增至530。",
          "閒置機器及易取得工人容許不大增成本便擴產。儲存可令賣家迅速釋出存貨，易腐品則難保存。時間容許投資與培訓；要素流動性讓資源進入行業。接近滿產時，邊際成本急升可限制反應。"
        ],
        "limitation": "彈性數值視乎時段及計算慣例。"
      },
      {
        "id": "hl",
        "heading": "財貨之間的差異",
        "body": [
          "農作物須時間生長，短期產出反應或較弱；有閒置產能的部分製成品可較快回應。",
          "加價後不能即時重新種出收成，土地與天氣限制產出；製成品有時可利用額外班次及存貨擴供。長期農民可多種植或改技術，而滿產工廠亦可反應弱。應比較實際限制和時段，不能以「初級」或「製造」標籤當證據。"
        ],
        "limitation": "儲存、產能及生產方式可令比較相反。"
      }
    ],
    "modelPrompt": "改變一個非價格因素，預測均衡價格及數量方向；指出哪條曲線移位，哪條是沿線移動。",
    "modelAssumption": "假設競爭市場，供求穩定、價格可調、其他決定因素不變。",
    "modelLimitation": "現實市場或有調整延誤、價格僵固、資訊問題或市場力量。",
    "worked": {
      "prompt": "生產者價格由$20升至$22，每週產量100增至105單位。",
      "steps": [
        "價格升幅為(22−20)/20×100=10%。",
        "供給量升幅為(105−100)/100×100=5%。",
        "PES=5/10=0.5，此範圍相對缺乏彈性。"
      ],
      "conclusion": "產出比例增幅低於價格；產能或調整限制或可解釋，但單憑數字不能確定成因。"
    },
    "quiz": {
      "question": "鮮果供給為何在加價後即時比數年後缺乏彈性？",
      "options": [
        "水果需求必定完全彈性。",
        "當前收成大致固定，往後種植及投資可改變產能。",
        "供給受限時PES必定為負。",
        "長期供給總變成無限。"
      ],
      "feedback": [
        "需求反應不能解釋種果所需生產時間。",
        "正確：時間容許調整即時固定的投入。",
        "擴產受限可表示PES小而正或為零，未必為負。",
        "雖可作更多調整，長期仍受土地及成本限制。"
      ]
    },
    "challenge": {
      "hint": "比較擴產的額外成本及延誤。"
    },
    "coverage": [
      {
        "id": "2.6.pes_formula",
        "point": "PES公式及程度"
      },
      {
        "id": "2.6.pes_diagrams",
        "point": "相對及完全彈性、無彈性、單一PES圖"
      },
      {
        "id": "2.6.pes_determinants",
        "point": "時間、要素流動性、閒置產能、儲存及成本因素"
      },
      {
        "id": "2.6.pes_commodities_hl",
        "point": "初級產品與製成品PES比較"
      },
      {
        "id": "2.6.pes_calculation",
        "point": "由數據計PES、價格或數量"
      }
    ],
    "diagrams": [
      {
        "id": "2.6.pes_diagrams",
        "scope": "common",
        "title": "相對彈性、完全彈性、無彈性與單一供應價格彈性（PES）圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "relative",
            "title": "在同一參照點比較反應程度",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "供應反應取決於剩餘產能、儲存、要素流動性及可用時間；這些例子不能得出普遍排序。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–12。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 相對富有彈性的曲線連接(0, 2) → (12, 8)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "elastic": "相對富有彈性的曲線",
              "inelastic": "相對缺乏彈性的曲線",
              "reference": "共同參照點",
              "quantityResponse": "數量反應比較提示",
              "referenceQ": "共同參照點——數量讀值破線",
              "referenceP": "共同參照點——縱軸讀值破線"
            },
            "prediction": {
              "question": "在相同參照點與相同座標軸上，哪條曲線反應較大？",
              "options": [
                "單憑曲線斜率，便可在所有可能的價格與數量排序彈性。",
                "相對富有彈性的曲線在共同點有較大的數量百分比反應。"
              ],
              "answer": 1,
              "feedback": [
                "彈性包括P/Q比率；不相關的點或不同軸比例，會使只按斜率作比較失效。",
                "兩曲線均經過(4,4)；對給定價格百分比變動，較平坦曲線的局部數量百分比反應較大。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 相對缺乏彈性的曲線連接(2, 0) → (10, 16)。",
                "instruction": "就「在同一參照點比較反應程度」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "採用互不相關的參照價格與數量，按斜率排序反應程度。",
                    "feedback": "有效局部比較需要相同P/Q參照與軸比例；完全彈性及單一彈性情況須保留各自的水平、垂直或比例幾何形狀。"
                  },
                  {
                    "key": "construct",
                    "label": "加上相對缺乏彈性的曲線。",
                    "feedback": "新增較陡供應曲線經過(4,4)，可在共同座標軸上，把它較小的數量反應與較平坦供應曲線比較。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 共同參照點位於(4, 4)。共同參照點——數量讀值破線：破線路徑 (4, 0) → (4, 4)。共同參照點——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「在同一參照點比較反應程度」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上共同參照點，並附讀取座標軸的破線輔助線。",
                    "feedback": "共同點為兩曲線固定Q = 4、P = 4；共同P/Q參照令局部彈性比較有意義。"
                  },
                  {
                    "key": "misconception1",
                    "label": "採用互不相關的參照價格與數量，按斜率排序反應程度。",
                    "feedback": "有效局部比較需要相同P/Q參照與軸比例；完全彈性及單一彈性情況須保留各自的水平、垂直或比例幾何形狀。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 數量反應比較提示：定向箭嘴 (3, 4) → (5, 4)。",
                "instruction": "就「在同一參照點比較反應程度」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把比較箭嘴當作由不明衝擊引致的實際均衡變動。",
                    "feedback": "水平箭嘴是共同參照價格下的反應提示；它不新增供應／需求移動，也不確定新市場均衡。"
                  },
                  {
                    "key": "compare",
                    "label": "加上數量反應比較提示。",
                    "feedback": "水平箭嘴提示參照價格下的數量反應比較；它不確定衝擊或新市場均衡。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "箭嘴標示共同參照價格下數量反應的水平方向。它是比較提示，並非另一條已量度的反應曲線。",
            "explanation": {
              "question": "為何此彈性比較必須採用相同參照點？",
              "options": [
                "在共同P與Q下，局部數量反應的差異決定彈性排序。",
                "斜率決定彈性，不受單位或參照值影響。"
              ],
              "answer": 0,
              "feedback": [
                "點彈性採用局部數量斜率乘P/Q；本比較固定P/Q。",
                "改變單位或評估點，可改變視覺斜率比較，卻不能證明所聲稱的普遍彈性排序。"
              ]
            },
            "extension": null
          },
          {
            "key": "perfectElastic",
            "title": "完全彈性（perfectly elastic）的極端情況",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "供應反應取決於剩餘產能、儲存、要素流動性及可用時間；這些例子不能得出普遍排序。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–12。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 完全彈性曲線連接(0, 4) → (12, 4)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "perfectElastic": "完全彈性曲線",
              "initial": "初始點",
              "final": "最終點",
              "response": "示例反應",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "預測此PES情況代表的反應。",
              "options": [
                "在圖示的固定價格下，數量可改變。",
                "價格改變，數量固定。"
              ],
              "answer": 0,
              "feedback": [
                "水平曲線把價格固定於4；兩點數量為4及8。",
                "那是垂直、完全無彈性的曲線。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(4, 4)。初始點——數量讀值破線：破線路徑 (4, 0) → (4, 4)。初始點——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「完全彈性（perfectly elastic）的極端情況」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "第一組輔助線讀出水平供應曲線上的Q = 4、P = 4，辨認其固定價格。"
                  },
                  {
                    "key": "misconception0",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(8, 4)。最終點——數量讀值破線：破線路徑 (8, 0) → (8, 4)。最終點——縱軸讀值破線：破線路徑 (0, 4) → (8, 4)。",
                "instruction": "就「完全彈性（perfectly elastic）的極端情況」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  },
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "第二點讀出相同P = 4下Q = 8；完全彈性供應曲線容許此價格下有不同數量。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 示例反應：定向箭嘴 (4, 4) → (8, 4)。",
                "instruction": "就「完全彈性（perfectly elastic）的極端情況」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上示例反應。",
                    "feedback": "水平箭嘴連接(4,4)至(8,4)，展示固定供應價格下的數量變化。"
                  },
                  {
                    "key": "misconception2",
                    "label": "在固定數量下，把反應箭嘴畫成垂直。",
                    "feedback": "水平曲線維持價格不變、數量改變。固定數量下的垂直反應會表示完全無彈性的極端情況。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "兩點由(4,4)水平移至(8,4)，價格不變。",
            "explanation": {
              "question": "應如何理解此極端情況？",
              "options": [
                "每個現實市場在所有價格下均須如此。",
                "它在情境所述條件下分離出一種極端反應。"
              ],
              "answer": 1,
              "feedback": [
                "現實的有限反應取決於市場條件與時間。",
                "極端模型突顯反應程度；現實供應或需求可以沒那麼極端。"
              ]
            },
            "extension": null
          },
          {
            "key": "perfectInelastic",
            "title": "完全無彈性（perfectly inelastic）的極端情況",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "供應反應取決於剩餘產能、儲存、要素流動性及可用時間；這些例子不能得出普遍排序。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–12。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 完全無彈性曲線連接(4, 0) → (4, 16)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "perfectInelastic": "完全無彈性曲線",
              "initial": "初始點",
              "final": "最終點",
              "response": "示例反應",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "預測此PES情況代表的反應。",
              "options": [
                "價格固定，數量改變。",
                "價格改變，數量維持4。"
              ],
              "answer": 1,
              "feedback": [
                "那是水平、完全彈性的曲線。",
                "垂直曲線把數量固定於4；兩個價格為4及8。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(4, 4)。初始點——數量讀值破線：破線路徑 (4, 0) → (4, 4)。初始點——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「完全無彈性（perfectly inelastic）的極端情況」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  },
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "第一點讀出垂直供應曲線上的Q = 4、P = 4，辨認固定可供數量。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(4, 8)。最終點——數量讀值破線：破線路徑 (4, 0) → (4, 8)。最終點——縱軸讀值破線：破線路徑 (0, 8) → (4, 8)。",
                "instruction": "就「完全無彈性（perfectly inelastic）的極端情況」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "第二點讀出P = 8、Q仍為4：此極端情況中，較高價格不引起數量反應。"
                  },
                  {
                    "key": "misconception1",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 示例反應：定向箭嘴 (4, 4) → (4, 8)。",
                "instruction": "就「完全無彈性（perfectly inelastic）的極端情況」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "在固定價格下，把反應箭嘴畫成水平。",
                    "feedback": "垂直曲線維持數量不變、價格改變。固定價格下的水平反應會表示完全彈性的極端情況。"
                  },
                  {
                    "key": "compare",
                    "label": "加上示例反應。",
                    "feedback": "垂直箭嘴顯示價格由4升至8，供應量不變，即完全無彈性情況。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "兩點由(4,4)垂直移至(4,8)，數量不變。",
            "explanation": {
              "question": "應如何理解此極端情況？",
              "options": [
                "它在情境所述條件下分離出一種極端反應。",
                "每個現實市場在所有價格下均須如此。"
              ],
              "answer": 0,
              "feedback": [
                "極端模型突顯反應程度；現實供應或需求可以沒那麼極端。",
                "現實的有限反應取決於市場條件與時間。"
              ]
            },
            "extension": null
          },
          {
            "key": "unit",
            "title": "單一彈性（unit elasticity）：穿過原點的射線",
            "assumption": "數量為每期的示例單位；除非明確改變，否則偏好、技術、投入價格及其他指明的決定因素均保持不變。",
            "limitation": "供應反應取決於剩餘產能、儲存、要素流動性及可用時間；這些例子不能得出普遍排序。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–12。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 單一彈性曲線連接(0, 0) → (12, 12)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "unit": "單一彈性曲線",
              "initial": "初始點",
              "final": "最終點",
              "response": "示例反應",
              "initialQ": "初始點——數量讀值破線",
              "initialP": "初始點——縱軸讀值破線",
              "finalQ": "最終點——數量讀值破線",
              "finalP": "最終點——縱軸讀值破線"
            },
            "prediction": {
              "question": "預測此PES情況代表的反應。",
              "options": [
                "數量與價格的比例變動幅度相同。",
                "單一彈性的供應曲線必須是水平。"
              ],
              "answer": 0,
              "feedback": [
                "射線P = Q穿過原點；(2,2)→(4,4)使兩變量均倍增。",
                "水平曲線完全彈性；原點射線則是有限的單一彈性。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 初始點位於(2, 2)。初始點——數量讀值破線：破線路徑 (2, 0) → (2, 2)。初始點——縱軸讀值破線：破線路徑 (0, 2) → (2, 2)。",
                "instruction": "就「單一彈性（unit elasticity）：穿過原點的射線」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上初始點，並附讀取座標軸的破線輔助線。",
                    "feedback": "初始點(2,2)位於從原點出發的供應射線上，確立本例價格與數量數值相等。"
                  },
                  {
                    "key": "misconception0",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 最終點位於(4, 4)。最終點——數量讀值破線：破線路徑 (4, 0) → (4, 4)。最終點——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「單一彈性（unit elasticity）：穿過原點的射線」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "畫軸輔助線時，把所標價格與數量對調。",
                    "feedback": "數量是橫座標，價格是縱座標。把選定點投影到相應座標軸，無須轉動曲線。"
                  },
                  {
                    "key": "read",
                    "label": "加上最終點，並附讀取座標軸的破線輔助線。",
                    "feedback": "最終點(4,4)使價格與數量均倍增，保留射線上的比例關係。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 示例反應：定向箭嘴 (2, 2) → (4, 4)。",
                "instruction": "就「單一彈性（unit elasticity）：穿過原點的射線」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上示例反應。",
                    "feedback": "向右上箭嘴使兩個座標均倍增；數量與價格的比例變動展示單一彈性供應。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把反應畫成價格改變而數量不變。",
                    "feedback": "射線P = Q要求兩變量按比例變動；(2,2)→(4,4)使兩者均倍增。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "原點射線連接(2,2)與(4,4)；價格與數量按相同比例上升。",
            "explanation": {
              "question": "哪項對單一彈性的解釋正確？",
              "options": [
                "射線的截距可改變，而不影響各處的單一彈性。",
                "在此射線上，基期法與中點法的比例變動均給出PES = 1。"
              ],
              "answer": 1,
              "feedback": [
                "原點射線有所需比例關係；非零截距通常會改變點PES。",
                "當P與Q均由2→4，兩種慣例的百分比變動都相等。"
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  "2.7": {
    "title": "政府干預",
    "summary": "政策如何改變市場結果？",
    "question": "政策如何改變市場結果？",
    "terms": [
      {
        "term": "price ceiling",
        "definition": "法定最高價格；低於未受規管均衡價時具約束力。"
      },
      {
        "term": "price floor",
        "definition": "法定最低價格；高於未受規管均衡價時具約束力。"
      },
      {
        "term": "indirect tax",
        "definition": "對商品服務支出課稅，使買方付款與賣方淨收入出現差額。"
      },
      {
        "term": "subsidy",
        "definition": "政府財政支援，使受助者相對買方付款降低成本或增加收入。"
      }
    ],
    "sections": [
      {
        "id": "controls",
        "heading": "價格管制",
        "body": [
          "低於均衡的有效price ceiling令需求量超過供給量，造成短缺；高於均衡的有效floor造成過剩。消費者、生產者、納稅人後果各異，視乎取得機會及政策設計。"
        ],
        "limitation": "實際分配亦取決於執法及非價格配給。"
      },
      {
        "id": "tax",
        "heading": "稅項與補貼",
        "body": [
          "Indirect tax提高供應者成本、令供給上移；買方價通常升，賣方淨價及交易量跌。每單位subsidy使供給下移；買方價通常跌，賣方收入及數量升。稅收或補貼開支=每單位金額×交易量。",
          "每單位稅t須區分買方價Pb及賣方淨價Ps：Pb−Ps=t。稅負歸宿取決於差額，不是誰向政府付款。相對缺乏彈性一方較難改變行為，通常承擔較多經濟負擔。",
          "補貼造成反向差額：賣方所得高於買方付款。可支持消費或生產，但納稅人有機會成本；若無外部利益支持，或鼓勵過量產出。稅收及補貼開支用政策後交易量，不是原有數量。"
        ],
        "limitation": "負擔分配取決於彈性。"
      },
      {
        "id": "evaluation",
        "heading": "選擇政策",
        "body": [
          "政府可為籌收入、支援住戶企業、糾正市場失效、改變消費或改善公平而干預；亦可規管、立法或直接提供。比較成效、行政成本、意外影響及持份者結果。",
          "直接提供供應基層醫療等服務；規管訂安全標準等要求；立法創可執行規則。政策可籌收入、保護低收入住戶、支援企業、改產出或消費、處理外部成本與資訊問題，但目標可互相衝突。",
          "按明示目標及替代方案評估政策。問誰付款、誰能取得，短長期如何，會否逃避，政府有否足夠資訊及行政能力。管制價較低本身不證明所有住戶更易取得。"
        ],
        "limitation": "沒有政策自動在每個市場都最佳。"
      },
      {
        "id": "hl",
        "heading": "Nudge及計算",
        "body": [
          "Nudge可藉呈現方式或default改變消費者決策。財政成本=每單位補貼×政策後數量；價格管制短缺=管制價下需求量減供給量。",
          "Qd=100−10P、Qs=20+10P時，均衡$4及60。$3 ceiling使Qd=70、Qs=50，短缺20。無公共存貨或進口，最多售50。部分買家付較低價，其他人卻可能排隊、遇品質下降或額外私下付款。此例高於$4的ceiling無約束力。",
          "$5 floor使Qs=70、Qd=50，過剩20。政府收購則納稅人埋單；不收購則有貨滯銷，有生產者未能出售。低於均衡的floor無約束力。執法及取得機會決定誰得益。",
          "Qd=100−10Pb、Qs=20+10Ps，稅$2時代入Pb=Ps+2。100−10(Ps+2)=20+10Ps，得Ps=$3、Pb=$5、Q=50。較原$4雙方各負$1；稅收$2×50=$100。",
          "補貼$2則Ps=Pb+2，100−10Pb=20+10(Pb+2)。Pb=$3、Ps=$5、Q=70，開支$140。負擔／利益平分來自此特定斜率；相對彈性改變，分配亦變。飯堂較健康的default保留選擇，是消費者nudge，而非強定數量。"
        ],
        "limitation": "量化結果視乎假設的需求供給表。"
      }
    ],
    "modelPrompt": "比較有效ceiling與每單位稅，指出交易量、短缺及各價格誰付誰收。",
    "modelAssumption": "假設政策獲執行、線性競爭供求；除另述外無逃避或額外公共存貨。",
    "modelLimitation": "實際取得、歸宿及福利取決於執法、相對彈性及更廣影響。",
    "worked": {
      "prompt": "HL延伸：無政策時Qd=100−10P、Qs=20+10P。政府設$3 price ceiling。",
      "steps": [
        "求均衡：100−10P=20+10P，得P=$4、Q=60。",
        "Ceiling下Qd=100−30=70、Qs=20+30=50。",
        "短缺70−50=20單位；無其他供給，交易不超50。",
        "部分成功買家省$1；未能買到的人或須排隊或往別處買。"
      ],
      "conclusion": "Ceiling具約束力並降低合法價格，但不保證所有買家買到。"
    },
    "quiz": {
      "question": "有效ceiling令Qd=70、Qs=50。無額外存貨，哪項有支持？",
      "options": [
        "全部70名願買者可按ceiling購買。",
        "有20單位過剩。",
        "最多交易50單位，短缺20。",
        "合法價格必須即時回復均衡。"
      ],
      "feedback": [
        "只有50供給，願買並不足夠。",
        "需求超過供給，故是短缺。",
        "正確：可供數量限制交易，70−50=20量度超額需求。",
        "獲執行的有效ceiling阻止合法價格升越上限。"
      ]
    },
    "challenge": {
      "hint": "分清取得住房與找不到住房的租客。"
    },
    "coverage": [
      {
        "id": "2.7.reasons",
        "point": "收入、企業住戶支援、生產、消費、市場失效及公平動機"
      },
      {
        "id": "2.7.ceiling_diagram",
        "point": "Price ceiling圖及持份者影響"
      },
      {
        "id": "2.7.floor_diagram",
        "point": "Price floor圖及持份者影響"
      },
      {
        "id": "2.7.tax_diagram",
        "point": "Indirect tax圖及持份者影響"
      },
      {
        "id": "2.7.subsidy_diagram",
        "point": "Subsidy圖及持份者影響"
      },
      {
        "id": "2.7.other_interventions",
        "point": "直接提供、規管及立法"
      },
      {
        "id": "2.7.nudges_hl",
        "point": "消費者nudge"
      },
      {
        "id": "2.7.controls_calculation_hl",
        "point": "計算ceiling及floor對市場及持份者影響"
      },
      {
        "id": "2.7.tax_subsidy_calculation_hl",
        "point": "計算稅與補貼對市場及持份者影響"
      },
      {
        "id": "2.7.evaluation",
        "point": "評估干預對市場及持份者的後果"
      }
    ],
    "diagrams": [
      {
        "id": "2.7.ceiling_diagram",
        "scope": "common",
        "title": "價格上限（price ceiling）圖與持份者影響",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "binding",
            "title": "具約束力的價格上限",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "未有指明稀少物品如何分配；單靠價格上限不能確保有效率配給。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "supply": "供應（S）",
              "control": "法定價格管制",
              "transactions": "實際私人交易",
              "demandQuantity": "需求量（Qd）",
              "supplyQuantity": "供應量（Qs）",
              "gap": "超額需求或供應：數量差距",
              "demandQuantityQ": "需求量（Qd）——數量讀值破線",
              "demandQuantityP": "需求量（Qd）——縱軸讀值破線",
              "supplyQuantityQ": "供應量（Qs）——數量讀值破線",
              "supplyQuantityP": "供應量（Qs）——縱軸讀值破線"
            },
            "prediction": {
              "question": "法定最高價格為4，低於均衡5。會出現甚麼失衡？",
              "options": [
                "過剩：供應者售出所有意欲供應的6單位。",
                "短缺：Qd = 6、Qs = 4。"
              ],
              "answer": 1,
              "feedback": [
                "供應限制可能成交量；需求並不保證能交付。",
                "較低價格鼓勵購買，但抑制供應。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 法定價格管制連接(0, 4) → (10, 4)。",
                "instruction": "就「具約束力的價格上限」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "把法定上限畫在市場出清價格以上。",
                    "feedback": "具約束力的上限是P = 4，低於交點P = 5。高於均衡的上限不會限制此市場。"
                  },
                  {
                    "key": "construct",
                    "label": "加上法定價格管制。",
                    "feedback": "法定價格線在均衡以下的P = 4呈水平，顯示具約束力上限，而非任何需求／供應表改變。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 需求量（Qd）位於(6, 4)。供應量（Qs）位於(4, 4)。需求量（Qd）——數量讀值破線：破線路徑 (6, 0) → (6, 4)。需求量（Qd）——縱軸讀值破線：破線路徑 (0, 4) → (6, 4)。供應量（Qs）——數量讀值破線：破線路徑 (4, 0) → (4, 4)。供應量（Qs）——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「具約束力的價格上限」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上需求量（Qd）；供應量（Qs），並附讀取座標軸的破線輔助線。",
                    "feedback": "點與輔助線讀出上限下Qd = 6、Qs = 4：意欲購買量比可供數量多2。"
                  },
                  {
                    "key": "misconception1",
                    "label": "在選定價格下，從同一條曲線讀出需求量與供應量。",
                    "feedback": "計劃購買量從需求讀取，計劃銷售量從供應讀取。正因這兩個數量在該價格不同，才有短缺或過剩。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 實際私人交易連接(4, 0) → (4, 4)。 超額需求或供應：數量差距：定向箭嘴 (4, 4.4) → (6, 4.4)。",
                "instruction": "就「具約束力的價格上限」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把實際交易畫在Qd與Qs的較大者。",
                    "feedback": "沒有其他買方或賣方時，較短的一方限制私人交易。人們想交易的數量不會自動成為完成銷售。"
                  },
                  {
                    "key": "compare",
                    "label": "加上實際私人交易；超額需求或供應：數量差距。",
                    "feedback": "交易線停在Q = 4，因供應是較短的一方；水平差距箭嘴量度兩單位未獲滿足的需求。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "上限P = 4帶來短缺2；本例實際交易不能超過供應4。",
            "explanation": {
              "question": "哪項持份者結論有根據？",
              "options": [
                "部分取得物品的買方付得較少，但其他有購買意欲者可能因配給而買不到。",
                "每名消費者必然受惠於價格上限。"
              ],
              "answer": 0,
              "feedback": [
                "較低法定價格沒有說明誰會取得有限數量。",
                "除了標價，取得物品的機會、排隊、質素與分配也很重要。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.7.floor_diagram",
        "scope": "common",
        "title": "價格下限（price floor）圖與持份者影響",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "privateSales",
            "title": "沒有政府收購的價格下限",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "本情境不包括政府收購、儲存與處置，也排除非法折扣及執法問題。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "supply": "供應（S）",
              "control": "法定價格管制",
              "transactions": "實際私人交易",
              "demandQuantity": "需求量（Qd）",
              "supplyQuantity": "供應量（Qs）",
              "gap": "超額需求或供應：數量差距",
              "demandQuantityQ": "需求量（Qd）——數量讀值破線",
              "demandQuantityP": "需求量（Qd）——縱軸讀值破線",
              "supplyQuantityQ": "供應量（Qs）——數量讀值破線",
              "supplyQuantityP": "供應量（Qs）——縱軸讀值破線"
            },
            "prediction": {
              "question": "法定最低價格為6，高於均衡5。會出現甚麼失衡？",
              "options": [
                "過剩：Qs = 6、Qd = 4。",
                "私人買方自動買入全部6單位供應。"
              ],
              "answer": 0,
              "feedback": [
                "在較高價格下，私人買方只需求4單位。",
                "供應量是計劃銷售量，並非銷售證據。本例不假設政府收購。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 法定價格管制連接(0, 6) → (10, 6)。",
                "instruction": "就「沒有政府收購的價格下限」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上法定價格管制。",
                    "feedback": "法定價格線在均衡以上P = 6，顯示具約束力下限，需求與供應維持不變。"
                  },
                  {
                    "key": "misconception0",
                    "label": "把法定下限畫在市場出清價格以下。",
                    "feedback": "具約束力的下限是P = 6，高於交點P = 5。低於均衡的下限不會限制此市場。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 需求量（Qd）位於(4, 6)。供應量（Qs）位於(6, 6)。需求量（Qd）——數量讀值破線：破線路徑 (4, 0) → (4, 6)。需求量（Qd）——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。供應量（Qs）——數量讀值破線：破線路徑 (6, 0) → (6, 6)。供應量（Qs）——縱軸讀值破線：破線路徑 (0, 6) → (6, 6)。",
                "instruction": "就「沒有政府收購的價格下限」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "在選定價格下，從同一條曲線讀出需求量與供應量。",
                    "feedback": "計劃購買量從需求讀取，計劃銷售量從供應讀取。正因這兩個數量在該價格不同，才有短缺或過剩。"
                  },
                  {
                    "key": "read",
                    "label": "加上需求量（Qd）；供應量（Qs），並附讀取座標軸的破線輔助線。",
                    "feedback": "下限所標數量為Qd = 4、Qs = 6，顯示兩單位超額供應。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 實際私人交易連接(4, 0) → (4, 6)。 超額需求或供應：數量差距：定向箭嘴 (4, 6.4) → (6, 6.4)。",
                "instruction": "就「沒有政府收購的價格下限」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上實際私人交易；超額需求或供應：數量差距。",
                    "feedback": "私人銷售線標出受需求限制的Q = 4；由4至6的箭嘴量度未售出供應，不假設政府收購。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把實際交易畫在Qd與Qs的較大者。",
                    "feedback": "沒有其他買方或賣方時，較短的一方限制私人交易。人們想交易的數量不會自動成為完成銷售。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "下限P = 6帶來過剩2；沒有政府收購過剩時，實際私人銷售為4。",
            "explanation": {
              "question": "哪項持份者結論有根據？",
              "options": [
                "只要有價格下限，政府就必須收購過剩。",
                "賣方的私人銷售每單位收入較高，但未售出產量與較低銷量影響其結果。"
              ],
              "answer": 1,
              "feedback": [
                "單靠法定最低價格並不包含政府收購承諾。",
                "本情境只顯示私人銷售；收購計劃會是另一項政策。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.7.tax_diagram",
        "scope": "common",
        "title": "間接稅（indirect tax）圖與持份者影響",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "tax2",
            "title": "每單位2的從量稅（specific tax）",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "面積是這些假設下的福利示例量度；分配、資訊與融資成本可改變政策判斷。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "supply": "供應（S）",
              "effectiveSupply": "政策後的有效供應",
              "wedge": "每單位政策楔子",
              "buyer": "買方價格",
              "seller": "賣方稅後淨收入",
              "taxRevenue": "稅收長方形",
              "deadweightLoss": "無謂損失三角形（deadweight loss）",
              "buyerQ": "買方價格——數量讀值破線",
              "buyerP": "買方價格——縱軸讀值破線",
              "sellerQ": "賣方稅後淨收入——數量讀值破線",
              "sellerP": "賣方稅後淨收入——縱軸讀值破線"
            },
            "prediction": {
              "question": "每單位2的稅提高有效供應成本。成交產量如何變化？",
              "options": [
                "因政府收款，產量上升。",
                "產量由5降至4。"
              ],
              "answer": 1,
              "feedback": [
                "稅提高買方面對的價格，並降低賣方淨價格。",
                "有效供應為P = Q + 2，與需求交於買方價格6。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 政策後的有效供應連接(0, 2) → (10, 12)。",
                "instruction": "就「每單位2的從量稅（specific tax）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "把政策後買方付款與賣方收入當作相同價格。",
                    "feedback": "從量稅或補貼產生每單位楔子。兩方讀取同一價格會抹去機制，並錯標政府款項長方形。"
                  },
                  {
                    "key": "construct",
                    "label": "加上政策後的有效供應。",
                    "feedback": "有效供應曲線向上移2至P = Q + 2，因賣方除了淨收入，還須收取稅款。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 每單位政策楔子連接(4, 6) → (4, 4)。 買方價格位於(4, 6)。賣方稅後淨收入位於(4, 4)。買方價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。買方價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。賣方稅後淨收入——數量讀值破線：破線路徑 (4, 0) → (4, 4)。賣方稅後淨收入——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「每單位2的從量稅（specific tax）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上每單位政策楔子；買方價格；賣方稅後淨收入，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，垂直楔子分開買方價格6與賣方淨收入4，顯示每單位稅2。"
                  },
                  {
                    "key": "misconception1",
                    "label": "把買方付款與賣方收入放在相同縱座標。",
                    "feedback": "在成交量4，買方付6、賣方保留4。垂直差距是稅2，並非兩個數量之間的短缺。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 稅收長方形的陰影多邊形頂點為 (0, 4) → (4, 4) → (4, 6) → (0, 6)。無謂損失三角形（deadweight loss）的陰影多邊形頂點為 (4, 4) → (4, 6) → (5, 5)。",
                "instruction": "就「每單位2的從量稅（specific tax）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把政府付款長方形稱為無謂損失三角形。",
                    "feedback": "政府收入或開支是以楔子 × 成交量量度的長方形付款。無謂損失是扭曲產量區間上，另一個三角形淨盈餘變動。"
                  },
                  {
                    "key": "compare",
                    "label": "加上稅收長方形；無謂損失三角形（deadweight loss）。",
                    "feedback": "長方形量度四單位成交量的稅收；另一個三角形涵蓋Q = 4至5之間失去的互利交易。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "買方付6、賣方淨得4、Q = 4；垂直楔子為2。長方形是稅收，三角形標出失去的互利交易。",
            "explanation": {
              "question": "哪項楔子解釋正確？",
              "options": [
                "稅使買方付款與賣方淨收入分離。",
                "因消費者繳稅，所以稅只改變需求。"
              ],
              "answer": 0,
              "feedback": [
                "本例雙方均承擔稅負：買方價格上升、賣方淨收入下降。",
                "單憑法定收稅對象，不能決定經濟稅負歸宿（incidence）。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "稅收與無謂損失分別是多少？",
              "options": [
                "稅收12、損失2。",
                "稅收8、損失1。"
              ],
              "answer": 1,
              "feedback": [
                "用課稅數量4計算稅收；損失盈餘是三角形，而非完整長方形。",
                "稅收 = 4 × 2 = 8；損失盈餘 = ½ × (5 − 4) × 2 = 1。"
              ]
            }
          }
        ]
      },
      {
        "id": "2.7.subsidy_diagram",
        "scope": "common",
        "title": "補貼（subsidy）圖與持份者影響",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "subsidy2",
            "title": "每單位2的生產者補貼",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "面積是這些假設下的福利示例量度；分配、資訊與融資成本可改變政策判斷。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 需求（D）連接(0, 10) → (10, 0)。 供應（S）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "demand": "需求（D）",
              "supply": "供應（S）",
              "effectiveSupply": "政策後的有效供應",
              "wedge": "每單位政策楔子",
              "buyer": "買方價格",
              "seller": "賣方含補貼總收入",
              "subsidyExpenditure": "政府補貼開支長方形",
              "deadweightLoss": "無謂損失三角形（deadweight loss）",
              "buyerQ": "買方價格——數量讀值破線",
              "buyerP": "買方價格——縱軸讀值破線",
              "sellerQ": "賣方含補貼總收入——數量讀值破線",
              "sellerP": "賣方含補貼總收入——縱軸讀值破線"
            },
            "prediction": {
              "question": "每單位2的補貼降低買方的有效供應成本。成交產量如何變化？",
              "options": [
                "產量由5升至6。",
                "因賣方每單位收入減少，產量下降。"
              ],
              "answer": 0,
              "feedback": [
                "有效供應為P = Q − 2，與需求交於買方價格4。",
                "賣方收取買方價格加補貼，因此收入為6。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 政策後的有效供應連接(2, 0) → (10, 8)。",
                "instruction": "就「每單位2的生產者補貼」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上政策後的有效供應。",
                    "feedback": "有效供應曲線向下移2至P = Q − 2，因補貼補充買方付給賣方的款項。"
                  },
                  {
                    "key": "misconception0",
                    "label": "把政策後買方付款與賣方收入當作相同價格。",
                    "feedback": "從量稅或補貼產生每單位楔子。兩方讀取同一價格會抹去機制，並錯標政府款項長方形。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 每單位政策楔子連接(6, 4) → (6, 6)。 買方價格位於(6, 4)。賣方含補貼總收入位於(6, 6)。買方價格——數量讀值破線：破線路徑 (6, 0) → (6, 4)。買方價格——縱軸讀值破線：破線路徑 (0, 4) → (6, 4)。賣方含補貼總收入——數量讀值破線：破線路徑 (6, 0) → (6, 6)。賣方含補貼總收入——縱軸讀值破線：破線路徑 (0, 6) → (6, 6)。",
                "instruction": "就「每單位2的生產者補貼」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把買方付款與賣方收入放在相同縱座標。",
                    "feedback": "在成交量6，買方付4、賣方含補貼收6。垂直差距2是付款楔子，並非超額供應的數量差距。"
                  },
                  {
                    "key": "read",
                    "label": "加上每單位政策楔子；買方價格；賣方含補貼總收入，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 6，垂直楔子分開買方價格4與賣方總收入6，顯示每單位支付的補貼。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 政府補貼開支長方形的陰影多邊形頂點為 (0, 4) → (6, 4) → (6, 6) → (0, 6)。無謂損失三角形（deadweight loss）的陰影多邊形頂點為 (5, 5) → (6, 4) → (6, 6)。",
                "instruction": "就「每單位2的生產者補貼」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上政府補貼開支長方形；無謂損失三角形（deadweight loss）。",
                    "feedback": "長方形量度六單位的補貼開支；另一個三角形涵蓋Q = 5至6之間成本超過利益的額外單位。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把政府付款長方形稱為無謂損失三角形。",
                    "feedback": "政府收入或開支是以楔子 × 成交量量度的長方形付款。無謂損失是扭曲產量區間上，另一個三角形淨盈餘變動。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "買方付4、賣方收6、Q = 6；楔子為2。長方形是政府開支，三角形標出成本超過利益的額外單位。",
            "explanation": {
              "question": "哪項楔子解釋正確？",
              "options": [
                "政府開支自動成為淨福利得益。",
                "補貼使買方付款與賣方總收入分離。"
              ],
              "answer": 1,
              "feedback": [
                "把政府付款算作利益，卻不計融資與扭曲成本，會錯估福利。",
                "補貼為轉移付款提供資金，並改變生產；淨福利也取決於成本與利益。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "補貼開支與無謂損失分別是多少？",
              "options": [
                "開支12、損失1。",
                "開支8、損失2。"
              ],
              "answer": 0,
              "feedback": [
                "開支 = 6 × 2 = 12；損失 = ½ × (6 − 5) × 2 = 1。",
                "用補貼後數量6計算開支；扭曲是額外一單位上的三角形。"
              ]
            }
          }
        ]
      }
    ]
  },
  "2.8": {
    "title": "外部性與共有資源",
    "summary": "私人決策何時對他人造成成本或利益？",
    "question": "私人決策何時對他人造成成本或利益？",
    "terms": [
      {
        "term": "externality",
        "definition": "生產或消費的成本或利益由交易以外的第三方承受。"
      },
      {
        "term": "marginal social cost",
        "definition": "多一單位帶給社會的額外成本，包括私人成本及外部影響。"
      },
      {
        "term": "marginal social benefit",
        "definition": "多一單位帶給社會的額外利益，包括私人利益及外部影響。"
      },
      {
        "term": "common resource",
        "definition": "具競爭性、卻難排除使用者的資源。"
      }
    ],
    "sections": [
      {
        "id": "externalities",
        "heading": "四種外部性",
        "body": [
          "Externality是影響交易外第三方的成本或利益。工廠污染屬negative production externality：MSC>MPC；消費噪音屬negative consumption externality：MSB<MPB。研究外溢可產生positive production externality：MSC<MPC；疫苗可產生positive consumption externality：MSB>MPB。",
          "分清是誰的活動外溢。工廠煙在生產時傷居民（MSC>MPC）；夜間大聲音樂在消費時擾鄰（MSB<MPB）；養蜂在生產時幫別家作物授粉（本課成本面慣例MSC<MPC）；接種在消費時降低他人感染風險（MSB>MPB）。買方付的價格本身屬交易內，並非外部成本。",
          "成本面圖縱軸為每單位成本／利益，橫軸為每期產出。負生產外部性把MSC置MPC上，MSB=MPB，私人交點在社會交點右。負消費外部性把MSB置MPB下，MSC=MPC。正生產為MSC<MPC；正消費為MSB>MPB，兩者私人產出均低於社會最優。"
        ],
        "limitation": "例子只作說明；現實活動可同時有多種影響。"
      },
      {
        "id": "optimum",
        "heading": "社會有效率產出",
        "body": [
          "社會最優在MSB=MSC。簡單模型中負外部性引致過量生產／消費，正外部性令活動不足。福利損失是市場產量與社會最優之間數量區間，社會邊際利益及成本之間的面積。",
          "市場參與者比較私人成本利益，社會則須計第三方影響。污染活動額外一單位私人利益$12、成本$8、外部損害$6，私人淨利$4，社會淨利卻$12−$14=−$2。生產此單位降低總福利。",
          "外部性圖標私人產量Qm及最優Q*，只在數量差距內把MSB與MSC之間塗色，不是塗整個外部成本長方形。面積量度此模型失去的潛在淨利益。福利估計須把健康、生物多樣性等貨幣化，數值不確定。"
        ],
        "limitation": "社會成本及利益難以量度。"
      },
      {
        "id": "responses",
        "heading": "政策與資源",
        "body": [
          "稅可內部化外部成本，補貼可鼓勵有外部利益的活動；規管、資訊及直接提供亦可改結果。Merit good或消費不足、demerit good或過量，成因包括資訊不全。共有資源具競爭性但難排除人，易過用；集體規則、監察及國際合作可助，但執行困難。",
          "Pigouvian tax旨在使決策者面對有效率產出下的邊際外部損害。碳稅為排放定價、獎勵潔淨技術，但須考慮排放量度、跨境碳洩漏及低收入者負擔。額外社會利益未獲私人回報時，補貼可鼓勵接種或潔淨研究。",
          "規管可限排或強制設備，監察可行時或有效，但可能忽略企業減排成本差異。教育可糾正風險誤解，使demerit需求左移、merit需求右移；若上癮、負擔能力等限制主導，單靠資訊或失效。公營提供可擴闊機會，仍須資金及產能。",
          "魚群具競爭性，一人捕魚令他人可捕更少；難排除使用者可導致過捕。每名漁民獨享額外捕獲利益，魚群損失卻共同承擔，所以個人有利可變集體不可持續。當地使用者可協定配額、監察及懲處，但須有正當參與及可行執法。",
          "Tradable permits設總排放額並容許交易，減排成本低者可賣給高者。上限控制數量，但許可價格及執法或不確定。國際協定可處理跨境外溢，惟搭便車、能力不均、目標爭議及監察昂貴會削弱合作。以成效、資訊需要、分配及行政可行性比較稅、上限與集體規則。",
          "Merit goods被判定相對社會理想水平消費不足；demerit goods則過量。個人利益或傷害資訊不全也可造成此情況，故判斷不等同存在第三方外部性。"
        ],
        "limitation": "當局缺資訊或執行能力，政策或適得其反。"
      },
      {
        "id": "hl",
        "heading": "計算福利損失",
        "body": [
          "福利損失為三角形時，計½×數量差距×市場產量下MSC與MSB垂直差。",
          "Qm−Q*=20，Qm下MSC與MSB差$6，直線於Q*相交，損失=½×20×$6=每期$60。公式須符合此幾何；非線性差距須別種面積計算。"
        ],
        "limitation": "公式假設直線邊界及三角面積。"
      }
    ],
    "modelPrompt": "加入第三方成本，預測私人產量高於還是低於社會最優。",
    "modelAssumption": "假設私人及社會邊際影響可貨幣化，排除其他市場失效。",
    "modelLimitation": "損害及外溢利益難量度；示意曲線不能確立實際政策稅率。",
    "worked": {
      "prompt": "工廠多一單位帶來私人利益$12、成本$8及第三方損害$6。",
      "steps": [
        "私人淨利益$12−$8=$4，故交易對私人有吸引力。",
        "MSC為私人成本加外部損害：$8+$6=$14。",
        "社會淨利益$12−$14=−$2，故該額外單位降低福利。",
        "校準準確的外部成本稅可改私人誘因，但設定須損害資訊。"
      ],
      "conclusion": "負生產外部性可令私人有利的產出對社會過量。"
    },
    "quiz": {
      "question": "接種降低他人感染風險，哪項表示正確？",
      "options": [
        "負生產外部性，MSC在MPC之上。",
        "正消費外部性，MSB在MPB之上。",
        "正生產外部性，MSC在MPC之下。",
        "接種者亦得益，故無外部性。"
      ],
      "feedback": [
        "所述外溢是消費的利益，不是生產造成的損害。",
        "正確：第三方健康保護加在接種者私人利益之上。",
        "這是生產外溢的成本面慣例；例子關乎消費疫苗。",
        "私人與外部利益可並存，第三方仍在交易外得益。"
      ]
    },
    "challenge": {
      "hint": "連繫個人誘因與共享的競爭性資源。"
    },
    "coverage": [
      {
        "id": "2.8.social_optimum_diagram",
        "point": "MSB=MSC、配置效率及最大社會盈餘圖"
      },
      {
        "id": "2.8.negative_production_diagram",
        "point": "負生產外部性及福利損失圖"
      },
      {
        "id": "2.8.negative_consumption_diagram",
        "point": "負消費外部性及福利損失圖"
      },
      {
        "id": "2.8.positive_production_diagram",
        "point": "正生產外部性及福利損失圖"
      },
      {
        "id": "2.8.positive_consumption_diagram",
        "point": "正消費外部性及福利損失圖"
      },
      {
        "id": "2.8.merit_demerit",
        "point": "Merit goods與demerit goods"
      },
      {
        "id": "2.8.common_resources",
        "point": "競爭性、非排他性、公地悲劇及不可持續生產"
      },
      {
        "id": "2.8.welfare_calculation_hl",
        "point": "由圖計福利損失"
      },
      {
        "id": "2.8.pigouvian_diagram",
        "point": "Pigouvian tax應對圖"
      },
      {
        "id": "2.8.carbon_diagram",
        "point": "碳稅對污染行業效果圖"
      },
      {
        "id": "2.8.subsidy_diagram",
        "point": "補貼應對圖"
      },
      {
        "id": "2.8.regulation_diagram",
        "point": "立法及規管應對圖"
      },
      {
        "id": "2.8.education_diagram",
        "point": "教育應對圖"
      },
      {
        "id": "2.8.other_responses",
        "point": "Tradable permits、國際協定、集體自治及政府提供"
      },
      {
        "id": "2.8.policy_evaluation",
        "point": "干預及資源管理的量度、成效與持份者後果"
      },
      {
        "id": "2.8.cooperation",
        "point": "國際合作、全球可持續性、監察及執法挑戰"
      }
    ],
    "diagrams": [
      {
        "id": "2.8.social_optimum_diagram",
        "scope": "common",
        "title": "MSB等於MSC、配置效率（allocative efficiency）與最大社會盈餘圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "optimum",
            "title": "社會邊際利益等於社會邊際成本",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "面積是這些假設下的福利示例量度；分配、資訊與融資成本可改變政策判斷。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際社會利益（MSB）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "optimum": "社會最適點（Q*）",
              "belowOptimum": "Q = 4時的MSB",
              "aboveOptimum": "Q = 6時的MSB",
              "netBenefit": "總淨社會利益面積",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線"
            },
            "prediction": {
              "question": "在Q = 4，MSB = 6、MSC = 4。再增加一小單位能否增加淨社會利益？",
              "options": [
                "不能：任何低於Q = 5的生產都已有過高社會成本。",
                "能：邊際利益超過邊際成本。"
              ],
              "answer": 1,
              "feedback": [
                "在交點以下，MSB高於MSC；增產可增加淨利益。",
                "在Q = 4，邊際淨利益為正，6 − 4 = 2。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會成本（MSC）連接(0, 0) → (10, 10)。",
                "instruction": "就「社會邊際利益等於社會邊際成本」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "把社會最適點設於總利益為零之處。",
                    "feedback": "最適點使邊際社會利益與邊際社會成本相等；總淨利益仍可為正。"
                  },
                  {
                    "key": "construct",
                    "label": "加上邊際社會成本（MSC）。",
                    "feedback": "MSC沿P = Q上升，與現有下降MSB曲線比較，提供評估每個額外單位所需的社會邊際成本。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 社會最適點（Q*）位於(5, 5)。Q = 4時的MSB位於(4, 6)。Q = 6時的MSB位於(6, 4)。社會最適點（Q*）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。",
                "instruction": "就「社會邊際利益等於社會邊際成本」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上社會最適點（Q*）；Q = 4時的MSB；Q = 6時的MSB，並附讀取座標軸的破線輔助線。",
                    "feedback": "交點標出Q* = 5；Q = 4與6的MSB點可與MSC比較，顯示邊際淨利益先正後負。"
                  },
                  {
                    "key": "misconception1",
                    "label": "選擇最大MSB值作為社會最適數量。",
                    "feedback": "單憑高邊際利益並不足夠：最適點平衡MSB與MSC。在交點，邊際淨利益由正轉負。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 總淨社會利益面積的陰影多邊形頂點為 (0, 0) → (0, 10) → (5, 5)。",
                "instruction": "就「社會邊際利益等於社會邊際成本」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把整個價格乘數量長方形塗成淨福利。",
                    "feedback": "總淨社會利益是有效率數量之前，MSB與MSC之間的面積。價格乘數量的長方形量度開支，而非利益減社會成本。"
                  },
                  {
                    "key": "compare",
                    "label": "加上總淨社會利益面積。",
                    "feedback": "直至Q = 5，MSB與MSC之間的三角形加總正邊際淨利益，代表最大總淨社會利益。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "在Q = 4，MSB − MSC = 2；在Q = 6則為−2。直至Q* = 5的MSB與MSC之間三角形代表最大總淨利益。",
            "explanation": {
              "question": "為何應在Q* = 5停止擴產？",
              "options": [
                "超過Q*後，下一單位的社會成本大於利益。",
                "因為在Q*，總社會利益變為零。"
              ],
              "answer": 0,
              "feedback": [
                "邊際利益與成本相等，標誌邊際淨利益由正轉負。",
                "總利益仍為正；最適點關乎邊際比較，而非總利益為零。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "直至Q = 5的陰影總淨社會利益是多少？",
              "options": [
                "每期50貨幣單位。",
                "每期25貨幣單位。"
              ],
              "answer": 1,
              "feedback": [
                "使用完整5 × 10長方形，會忽略MSB與MSC之間逐漸收窄的差距。",
                "三角形底為5、高為10：½ × 5 × 10 = 25。"
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.negative_production_diagram",
        "scope": "common",
        "title": "生產負外部性（negative production externality）與福利損失圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "negativeProduction",
            "title": "生產負外部性（negative production externality）",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "假設邊際外部影響固定為2。損失是淨福利面積，並非總外部成本或利益。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際私人利益（MPB）連接(0, 10) → (10, 0)。 邊際私人成本（MPC）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "mpb": "邊際私人利益（MPB）",
              "mpc": "邊際私人成本（MPC）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "externalWedge": "邊際外部影響楔子",
              "market": "私人市場結果（Qm）",
              "optimum": "社會最適點（Q*）",
              "initialLoss": "政策前福利損失三角形",
              "marketQ": "私人市場結果（Qm）——數量讀值破線",
              "marketP": "私人市場結果（Qm）——縱軸讀值破線",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線"
            },
            "prediction": {
              "question": "若私人決策者忽略此外部成本，市場數量與社會最適量有何關係？",
              "options": [
                "市場生產或消費過多：Qm = 5 > Q* = 4。",
                "因私人決策計入所有社會成本，市場生產過少。"
              ],
              "answer": 0,
              "feedback": [
                "MSC = MPC + 2；私人交點與社會交點不同。",
                "私人決策漏計外部損害，因此擴張超過社會最適量。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會利益（MSB）連接(0, 10) → (10, 0)。 邊際社會成本（MSC）連接(0, 2) → (10, 12)。",
                "instruction": "就「生產負外部性（negative production externality）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際社會利益（MSB）；邊際社會成本（MSC）。",
                    "feedback": "MSC在MPC上方2，MSB與MPB重合，把生產外部成本定位在成本一側。"
                  },
                  {
                    "key": "misconception0",
                    "label": "只移動利益曲線以表示生產外部性。",
                    "feedback": "此生產外部影響使MPC與MSC分離；利益曲線重合。須區分成本楔子及私人／社會交點。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 邊際外部影響楔子連接(4, 4) → (4, 6)。 私人市場結果（Qm）位於(5, 5)。社會最適點（Q*）位於(4, 6)。私人市場結果（Qm）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。私人市場結果（Qm）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。社會最適點（Q*）——數量讀值破線：破線路徑 (4, 0) → (4, 6)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。",
                "instruction": "就「生產負外部性（negative production externality）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "只把私人交點當作社會最適點。",
                    "feedback": "私人結果比較MPB與MPC；社會最適點比較MSB與MSC。未被定價的外部影響使兩種比較分離。"
                  },
                  {
                    "key": "read",
                    "label": "加上邊際外部影響楔子；私人市場結果（Qm）；社會最適點（Q*），並附讀取座標軸的破線輔助線。",
                    "feedback": "Q = 4的楔子量度外部成本2；輔助線區分私人產量5與社會有效率產量4。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 政策前福利損失三角形的陰影多邊形頂點為 (4, 6) → (5, 5) → (5, 7)。",
                "instruction": "就「生產負外部性（negative production externality）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上政策前福利損失三角形。",
                    "feedback": "Q = 4至5之間，MSC與MSB之間的三角形代表過多單位的成本超過利益，而非所有外部成本。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把整個邊際外部影響長方形標為無謂損失。",
                    "feedback": "外部影響楔子適用於已生產單位，但無謂損失量度無效率數量區間所放棄的淨盈餘；其界線是社會邊際曲線。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "私人Qm = 5，社會Q* = 4。損失三角形涵蓋4至5的過多單位。",
            "explanation": {
              "question": "哪項曲線關係辨認此特定外部性？",
              "options": [
                "外部影響使利益曲線而非成本曲線移動。",
                "邊際社會成本為MSC = MPC + 2。"
              ],
              "answer": 1,
              "feedback": [
                "消費外部性採用利益楔子；此處是生產成本情況。",
                "外部影響源於生產，因此須區分私人與社會邊際成本；利益曲線重合。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "市場數量與社會最適量之間的福利損失是多少？",
              "options": [
                "每期1貨幣單位。",
                "每期2貨幣單位。"
              ],
              "answer": 0,
              "feedback": [
                "三角形為½ × 數量差1 × 邊際差2 = 1。",
                "邊際差距在最適點收窄至零，因此採用三角形而非長方形。"
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.negative_consumption_diagram",
        "scope": "common",
        "title": "消費負外部性（negative consumption externality）與福利損失圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "negativeConsumption",
            "title": "消費負外部性（negative consumption externality）",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "假設邊際外部影響固定為2。損失是淨福利面積，並非總外部成本或利益。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際私人利益（MPB）連接(0, 10) → (10, 0)。 邊際私人成本（MPC）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "mpb": "邊際私人利益（MPB）",
              "mpc": "邊際私人成本（MPC）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "externalWedge": "邊際外部影響楔子",
              "market": "私人市場結果（Qm）",
              "optimum": "社會最適點（Q*）",
              "initialLoss": "政策前福利損失三角形",
              "marketQ": "私人市場結果（Qm）——數量讀值破線",
              "marketP": "私人市場結果（Qm）——縱軸讀值破線",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線"
            },
            "prediction": {
              "question": "若私人決策者忽略此外部成本，市場數量與社會最適量有何關係？",
              "options": [
                "因私人決策計入所有社會成本，市場生產過少。",
                "市場生產或消費過多：Qm = 5 > Q* = 4。"
              ],
              "answer": 1,
              "feedback": [
                "私人決策漏計外部損害，因此擴張超過社會最適量。",
                "MSB = MPB − 2；私人交點與社會交點不同。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會利益（MSB）連接(0, 8) → (8, 0)。 邊際社會成本（MSC）連接(0, 0) → (10, 10)。",
                "instruction": "就「消費負外部性（negative consumption externality）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "只移動成本曲線以表示消費外部性。",
                    "feedback": "此消費外部影響使MPB與MSB分離；MPC與MSC重合。須區分利益楔子及私人／社會交點。"
                  },
                  {
                    "key": "construct",
                    "label": "加上邊際社會利益（MSB）；邊際社會成本（MSC）。",
                    "feedback": "MSB在MPB下方2，MSC與MPC重合，把消費外部成本定位在利益一側。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 邊際外部影響楔子連接(4, 6) → (4, 4)。 私人市場結果（Qm）位於(5, 5)。社會最適點（Q*）位於(4, 4)。私人市場結果（Qm）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。私人市場結果（Qm）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。社會最適點（Q*）——數量讀值破線：破線路徑 (4, 0) → (4, 4)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。",
                "instruction": "就「消費負外部性（negative consumption externality）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上邊際外部影響楔子；私人市場結果（Qm）；社會最適點（Q*），並附讀取座標軸的破線輔助線。",
                    "feedback": "Q = 4的向下楔子顯示社會利益比私人利益低2；所標交點區分Qm = 5與Q* = 4。"
                  },
                  {
                    "key": "misconception1",
                    "label": "只把私人交點當作社會最適點。",
                    "feedback": "私人結果比較MPB與MPC；社會最適點比較MSB與MSC。未被定價的外部影響使兩種比較分離。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 政策前福利損失三角形的陰影多邊形頂點為 (4, 4) → (5, 3) → (5, 5)。",
                "instruction": "就「消費負外部性（negative consumption externality）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把整個邊際外部影響長方形標為無謂損失。",
                    "feedback": "外部影響楔子適用於已生產單位，但無謂損失量度無效率數量區間所放棄的淨盈餘；其界線是社會邊際曲線。"
                  },
                  {
                    "key": "compare",
                    "label": "加上政策前福利損失三角形。",
                    "feedback": "Q = 4至5之間，MSC與MSB之間的三角形量度過度消費損失的淨福利。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "私人Qm = 5，社會Q* = 4。損失三角形涵蓋4至5的過多單位。",
            "explanation": {
              "question": "哪項曲線關係辨認此特定外部性？",
              "options": [
                "邊際社會利益為MSB = MPB − 2。",
                "外部影響使成本曲線而非利益曲線移動。"
              ],
              "answer": 0,
              "feedback": [
                "外部影響源於消費，因此須區分私人與社會邊際利益；成本曲線重合。",
                "生產外部性採用成本楔子；此處是消費利益情況。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "市場數量與社會最適量之間的福利損失是多少？",
              "options": [
                "每期2貨幣單位。",
                "每期1貨幣單位。"
              ],
              "answer": 1,
              "feedback": [
                "邊際差距在最適點收窄至零，因此採用三角形而非長方形。",
                "三角形為½ × 數量差1 × 邊際差2 = 1。"
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.positive_production_diagram",
        "scope": "common",
        "title": "生產正外部性（positive production externality）與福利損失圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "positiveProduction",
            "title": "生產正外部性（positive production externality）",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "假設邊際外部影響固定為2。損失是淨福利面積，並非總外部成本或利益。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際私人利益（MPB）連接(0, 10) → (10, 0)。 邊際私人成本（MPC）連接(0, 2) → (10, 12)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "mpb": "邊際私人利益（MPB）",
              "mpc": "邊際私人成本（MPC）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "externalWedge": "邊際外部影響楔子",
              "market": "私人市場結果（Qm）",
              "optimum": "社會最適點（Q*）",
              "initialLoss": "政策前福利損失三角形",
              "marketQ": "私人市場結果（Qm）——數量讀值破線",
              "marketP": "私人市場結果（Qm）——縱軸讀值破線",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線"
            },
            "prediction": {
              "question": "若私人決策者忽略此外部利益，市場數量與社會最適量有何關係？",
              "options": [
                "市場生產或消費過少：Qm = 4 < Q* = 5。",
                "因社會利益較小，市場生產過多。"
              ],
              "answer": 0,
              "feedback": [
                "MSC = MPC − 2；私人交點與社會交點不同。",
                "未被定價的利益使增產的社會理據比私人理據更強。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會利益（MSB）連接(0, 10) → (10, 0)。 邊際社會成本（MSC）連接(0, 0) → (10, 10)。",
                "instruction": "就「生產正外部性（positive production externality）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際社會利益（MSB）；邊際社會成本（MSC）。",
                    "feedback": "MSC在MPC下方2，MSB與MPB重合：生產外部利益使社會成本低於私人成本。"
                  },
                  {
                    "key": "misconception0",
                    "label": "只移動利益曲線以表示生產外部性。",
                    "feedback": "此生產外部影響使MPC與MSC分離；利益曲線重合。須區分成本楔子及私人／社會交點。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 邊際外部影響楔子連接(5, 7) → (5, 5)。 私人市場結果（Qm）位於(4, 6)。社會最適點（Q*）位於(5, 5)。私人市場結果（Qm）——數量讀值破線：破線路徑 (4, 0) → (4, 6)。私人市場結果（Qm）——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。社會最適點（Q*）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。",
                "instruction": "就「生產正外部性（positive production externality）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "只把私人交點當作社會最適點。",
                    "feedback": "私人結果比較MPB與MPC；社會最適點比較MSB與MSC。未被定價的外部影響使兩種比較分離。"
                  },
                  {
                    "key": "read",
                    "label": "加上邊際外部影響楔子；私人市場結果（Qm）；社會最適點（Q*），並附讀取座標軸的破線輔助線。",
                    "feedback": "Q = 5的楔子由MPC = 7至MSC = 5；輔助線分開私人產量4與社會產量5。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 政策前福利損失三角形的陰影多邊形頂點為 (4, 4) → (4, 6) → (5, 5)。",
                "instruction": "就「生產正外部性（positive production externality）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上政策前福利損失三角形。",
                    "feedback": "Q = 4至5缺少單位上，MSB與MSC之間的三角形代表放棄的有益生產。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把整個邊際外部影響長方形標為無謂損失。",
                    "feedback": "外部影響楔子適用於已生產單位，但無謂損失量度無效率數量區間所放棄的淨盈餘；其界線是社會邊際曲線。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "私人Qm = 4，社會Q* = 5。損失三角形涵蓋4至5缺少的有益單位。",
            "explanation": {
              "question": "哪項曲線關係辨認此特定外部性？",
              "options": [
                "外部影響使利益曲線而非成本曲線移動。",
                "邊際社會成本為MSC = MPC − 2。"
              ],
              "answer": 1,
              "feedback": [
                "消費外部性採用利益楔子；此處是生產成本情況。",
                "外部影響源於生產，因此須區分私人與社會邊際成本；利益曲線重合。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "市場數量與社會最適量之間的福利損失是多少？",
              "options": [
                "每期1貨幣單位。",
                "每期2貨幣單位。"
              ],
              "answer": 0,
              "feedback": [
                "三角形為½ × 數量差1 × 邊際差2 = 1。",
                "邊際差距在最適點收窄至零，因此採用三角形而非長方形。"
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.positive_consumption_diagram",
        "scope": "common",
        "title": "消費正外部性（positive consumption externality）與福利損失圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "positiveConsumption",
            "title": "消費正外部性（positive consumption externality）",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "假設邊際外部影響固定為2。損失是淨福利面積，並非總外部成本或利益。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際私人利益（MPB）連接(0, 8) → (8, 0)。 邊際私人成本（MPC）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "mpb": "邊際私人利益（MPB）",
              "mpc": "邊際私人成本（MPC）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "externalWedge": "邊際外部影響楔子",
              "market": "私人市場結果（Qm）",
              "optimum": "社會最適點（Q*）",
              "initialLoss": "政策前福利損失三角形",
              "marketQ": "私人市場結果（Qm）——數量讀值破線",
              "marketP": "私人市場結果（Qm）——縱軸讀值破線",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線"
            },
            "prediction": {
              "question": "若私人決策者忽略此外部利益，市場數量與社會最適量有何關係？",
              "options": [
                "因社會利益較小，市場生產過多。",
                "市場生產或消費過少：Qm = 4 < Q* = 5。"
              ],
              "answer": 1,
              "feedback": [
                "未被定價的利益使增產的社會理據比私人理據更強。",
                "MSB = MPB + 2；私人交點與社會交點不同。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會利益（MSB）連接(0, 10) → (10, 0)。 邊際社會成本（MSC）連接(0, 0) → (10, 10)。",
                "instruction": "就「消費正外部性（positive consumption externality）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "只移動成本曲線以表示消費外部性。",
                    "feedback": "此消費外部影響使MPB與MSB分離；MPC與MSC重合。須區分利益楔子及私人／社會交點。"
                  },
                  {
                    "key": "construct",
                    "label": "加上邊際社會利益（MSB）；邊際社會成本（MSC）。",
                    "feedback": "MSB在MPB上方2，MSC與MPC重合，把消費外部利益定位在利益一側。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 邊際外部影響楔子連接(5, 3) → (5, 5)。 私人市場結果（Qm）位於(4, 4)。社會最適點（Q*）位於(5, 5)。私人市場結果（Qm）——數量讀值破線：破線路徑 (4, 0) → (4, 4)。私人市場結果（Qm）——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。社會最適點（Q*）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。",
                "instruction": "就「消費正外部性（positive consumption externality）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上邊際外部影響楔子；私人市場結果（Qm）；社會最適點（Q*），並附讀取座標軸的破線輔助線。",
                    "feedback": "Q = 5的向上楔子顯示MSB比MPB高2；所標交點顯示私人數量4低於社會數量5。"
                  },
                  {
                    "key": "misconception1",
                    "label": "只把私人交點當作社會最適點。",
                    "feedback": "私人結果比較MPB與MPC；社會最適點比較MSB與MSC。未被定價的外部影響使兩種比較分離。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 政策前福利損失三角形的陰影多邊形頂點為 (4, 4) → (4, 6) → (5, 5)。",
                "instruction": "就「消費正外部性（positive consumption externality）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把整個邊際外部影響長方形標為無謂損失。",
                    "feedback": "外部影響楔子適用於已生產單位，但無謂損失量度無效率數量區間所放棄的淨盈餘；其界線是社會邊際曲線。"
                  },
                  {
                    "key": "compare",
                    "label": "加上政策前福利損失三角形。",
                    "feedback": "Q = 4至5的三角形量度私人消費過少而放棄的社會淨利益。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "私人Qm = 4，社會Q* = 5。損失三角形涵蓋4至5缺少的有益單位。",
            "explanation": {
              "question": "哪項曲線關係辨認此特定外部性？",
              "options": [
                "邊際社會利益為MSB = MPB + 2。",
                "外部影響使成本曲線而非利益曲線移動。"
              ],
              "answer": 0,
              "feedback": [
                "外部影響源於消費，因此須區分私人與社會邊際利益；成本曲線重合。",
                "生產外部性採用成本楔子；此處是消費利益情況。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "市場數量與社會最適量之間的福利損失是多少？",
              "options": [
                "每期2貨幣單位。",
                "每期1貨幣單位。"
              ],
              "answer": 1,
              "feedback": [
                "邊際差距在最適點收窄至零，因此採用三角形而非長方形。",
                "三角形為½ × 數量差1 × 邊際差2 = 1。"
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.pigouvian_diagram",
        "scope": "common",
        "title": "庇古稅（Pigouvian tax）政策反應圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "optimalTax",
            "title": "使私人誘因與社會成本一致",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "假設有準確邊際損害資訊與有效執法。稅收用途及行政成本可能影響整體福利。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際私人利益（MPB）連接(0, 10) → (10, 0)。 邊際私人成本（MPC）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "mpb": "邊際私人利益（MPB）",
              "mpc": "邊際私人成本（MPC）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "externalWedge": "邊際外部影響楔子",
              "effectiveSupply": "政策後的有效供應",
              "policyWedge": "每單位矯正政策楔子",
              "market": "私人市場結果（Qm）",
              "optimum": "社會最適點（Q*）",
              "initialLoss": "政策前福利損失三角形",
              "taxRevenue": "稅收長方形",
              "marketQ": "私人市場結果（Qm）——數量讀值破線",
              "marketP": "私人市場結果（Qm）——縱軸讀值破線",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線"
            },
            "prediction": {
              "question": "外部邊際成本為2。若在MPC上加入全面執行的稅2，會怎樣？",
              "options": [
                "產量由Qm = 5降至Q* = 4。",
                "產量維持5，因稅不能影響廠商邊際誘因。"
              ],
              "answer": 0,
              "feedback": [
                "有效供應MPC + 2與MSC重合；它與需求的交點為Q = 4。",
                "每單位稅改變額外每單位的成本，因此改變私人利潤誘因。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會利益（MSB）連接(0, 10) → (10, 0)。 邊際社會成本（MSC）連接(0, 2) → (10, 12)。",
                "instruction": "哪些社會邊際曲線確立政策前比較？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際社會利益（MSB）；邊際社會成本（MSC）。",
                    "feedback": "MSC畫在MPC上方2，MSB等於MPB，在加入任何矯正供應曲線前顯示生產外部成本。"
                  },
                  {
                    "key": "misconception0",
                    "label": "只移動利益曲線以表示生產外部性。",
                    "feedback": "此生產外部影響使MPC與MSC分離；利益曲線重合。須區分成本楔子及私人／社會交點。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 邊際外部影響楔子連接(4, 4) → (4, 6)。 私人市場結果（Qm）位於(5, 5)。社會最適點（Q*）位於(4, 6)。私人市場結果（Qm）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。私人市場結果（Qm）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。社會最適點（Q*）——數量讀值破線：破線路徑 (4, 0) → (4, 6)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。",
                "instruction": "就「使私人誘因與社會成本一致」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "只把私人交點當作社會最適點。",
                    "feedback": "私人結果比較MPB與MPC；社會最適點比較MSB與MSC。未被定價的外部影響使兩種比較分離。"
                  },
                  {
                    "key": "read",
                    "label": "加上邊際外部影響楔子；私人市場結果（Qm）；社會最適點（Q*），並附讀取座標軸的破線輔助線。",
                    "feedback": "楔子量度Q* = 4的外部成本2；兩交點顯示未矯正私人產量5超過有效率產量4。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 政策後的有效供應連接(0, 2) → (10, 12)。 每單位矯正政策楔子連接(4, 4) → (4, 6)。 政策前福利損失三角形的陰影多邊形頂點為 (4, 6) → (5, 5) → (5, 7)。稅收長方形的陰影多邊形頂點為 (0, 4) → (4, 4) → (4, 6) → (0, 6)。",
                "instruction": "就「使私人誘因與社會成本一致」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上政策後的有效供應；每單位矯正政策楔子；政策前福利損失三角形；稅收長方形。",
                    "feedback": "稅使有效供應移至MSC，並在Q = 4產生買賣雙方楔子2；稅收長方形有別於政策前損失三角形，後者的剩餘損失已被消除。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把整個邊際外部影響長方形標為無謂損失。",
                    "feedback": "外部影響楔子適用於已生產單位，但無謂損失量度無效率數量區間所放棄的淨盈餘；其界線是社會邊際曲線。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "初始私人產量為5。矯正供應與MSC重合，得出買方價格6、賣方淨價格4、Q = 4。初始損失三角形是政策前比較；在所述矯正下，剩餘損失為零。",
            "explanation": {
              "question": "甚麼使本例具有矯正作用？",
              "options": [
                "任何正稅額都自動是最適。",
                "稅等於社會最適點的邊際外部成本。"
              ],
              "answer": 1,
              "feedback": [
                "稅太低或太高，未必產生Q*。損害估算與遵從程度很重要。",
                "配合外部楔子，使私人邊際決策與社會邊際比較一致。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "在Q = 4、每單位稅2時，收取多少稅收？",
              "options": [
                "每期8貨幣單位。",
                "每期10貨幣單位。"
              ],
              "answer": 0,
              "feedback": [
                "稅收 = 課稅產量4 × 稅2 = 8；在假設下，原有福利損失1被消除。",
                "採用舊產量5，會忽略稅引致的收縮。"
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.carbon_diagram",
        "scope": "common",
        "title": "碳稅（carbon tax）對污染行業的影響圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "industryTax",
            "title": "一個污染行業的稅",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "這是行業產出圖，並非整體經濟排放模型。實際排放取決於排放強度、技術與替代；現實稅額未必等於損害。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際私人利益（MPB）連接(0, 10) → (10, 0)。 邊際私人成本（MPC）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "mpb": "邊際私人利益（MPB）",
              "mpc": "邊際私人成本（MPC）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "externalWedge": "邊際外部影響楔子",
              "effectiveSupply": "政策後的有效供應",
              "policyWedge": "每單位矯正政策楔子",
              "market": "私人市場結果（Qm）",
              "optimum": "社會最適點（Q*）",
              "initialLoss": "政策前福利損失三角形",
              "taxRevenue": "稅收長方形",
              "marketQ": "私人市場結果（Qm）——數量讀值破線",
              "marketP": "私人市場結果（Qm）——縱軸讀值破線",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線"
            },
            "prediction": {
              "question": "圖示污染行業引入每單位稅2，其產量如何變化？",
              "options": [
                "產量維持5，因稅不能影響廠商邊際誘因。",
                "產量由Qm = 5降至Q* = 4。"
              ],
              "answer": 1,
              "feedback": [
                "每單位稅改變額外每單位的成本，因此改變私人利潤誘因。",
                "有效供應MPC + 2與MSC重合；它與需求的交點為Q = 4。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會利益（MSB）連接(0, 10) → (10, 0)。 邊際社會成本（MSC）連接(0, 2) → (10, 12)。",
                "instruction": "哪些社會邊際曲線確立政策前比較？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "只移動利益曲線以表示生產外部性。",
                    "feedback": "此生產外部影響使MPC與MSC分離；利益曲線重合。須區分成本楔子及私人／社會交點。"
                  },
                  {
                    "key": "construct",
                    "label": "加上邊際社會利益（MSB）；邊際社會成本（MSC）。",
                    "feedback": "社會曲線把MSC放在私人生產成本上方2，MSB等於私人利益，辨認行業未被定價的外部成本。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 邊際外部影響楔子連接(4, 4) → (4, 6)。 私人市場結果（Qm）位於(5, 5)。社會最適點（Q*）位於(4, 6)。私人市場結果（Qm）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。私人市場結果（Qm）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。社會最適點（Q*）——數量讀值破線：破線路徑 (4, 0) → (4, 6)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。",
                "instruction": "就「一個污染行業的稅」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上邊際外部影響楔子；私人市場結果（Qm）；社會最適點（Q*），並附讀取座標軸的破線輔助線。",
                    "feedback": "楔子與輔助線顯示未矯正行業產量5及有效率產量4，兩者由外部邊際成本2區分。"
                  },
                  {
                    "key": "misconception1",
                    "label": "只把私人交點當作社會最適點。",
                    "feedback": "私人結果比較MPB與MPC；社會最適點比較MSB與MSC。未被定價的外部影響使兩種比較分離。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 政策後的有效供應連接(0, 2) → (10, 12)。 每單位矯正政策楔子連接(4, 4) → (4, 6)。 政策前福利損失三角形的陰影多邊形頂點為 (4, 6) → (5, 5) → (5, 7)。稅收長方形的陰影多邊形頂點為 (0, 4) → (4, 4) → (4, 6) → (0, 6)。",
                "instruction": "就「一個污染行業的稅」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把整個邊際外部影響長方形標為無謂損失。",
                    "feedback": "外部影響楔子適用於已生產單位，但無謂損失量度無效率數量區間所放棄的淨盈餘；其界線是社會邊際曲線。"
                  },
                  {
                    "key": "compare",
                    "label": "加上政策後的有效供應；每單位矯正政策楔子；政策前福利損失三角形；稅收長方形。",
                    "feedback": "稅使有效供應與MSC在Q = 4一致，並產生稅收長方形；陰影損失三角形是被消除的稅前損失，單憑產量下降不能量化排放。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "初始私人產量為5。矯正供應與MSC重合，得出買方價格6、賣方淨價格4、Q = 4。初始損失三角形是政策前比較；在所述矯正下，剩餘損失為零。",
            "explanation": {
              "question": "甚麼使本例具有矯正作用？",
              "options": [
                "假設此稅配合每單位行業產出的邊際外部損害。",
                "任何正稅額都自動是最適。"
              ],
              "answer": 0,
              "feedback": [
                "配合外部楔子，使私人邊際決策與社會邊際比較一致。",
                "稅太低或太高，未必產生Q*。損害估算與遵從程度很重要。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "在Q = 4、每單位稅2時，收取多少稅收？",
              "options": [
                "每期10貨幣單位。",
                "每期8貨幣單位。"
              ],
              "answer": 1,
              "feedback": [
                "採用舊產量5，會忽略稅引致的收縮。",
                "稅收 = 課稅產量4 × 稅2 = 8；在假設下，原有福利損失1被消除。"
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.subsidy_diagram",
        "scope": "common",
        "title": "補貼（subsidy）政策反應圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "producerSubsidy",
            "title": "矯正生產正外部性",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "本例明確是針對生產正外部性的生產者補貼。融資成本與準確校準很重要；針對消費正外部性的消費者補貼需要利益一側的楔子。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際私人利益（MPB）連接(0, 10) → (10, 0)。 邊際私人成本（MPC）連接(0, 2) → (10, 12)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "mpb": "邊際私人利益（MPB）",
              "mpc": "邊際私人成本（MPC）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "externalWedge": "邊際外部影響楔子",
              "effectiveSupply": "政策後的有效供應",
              "policyWedge": "每單位矯正政策楔子",
              "market": "私人市場結果（Qm）",
              "optimum": "社會最適點（Q*）",
              "initialLoss": "政策前福利損失三角形",
              "subsidyExpenditure": "政府補貼開支長方形",
              "marketQ": "私人市場結果（Qm）——數量讀值破線",
              "marketP": "私人市場結果（Qm）——縱軸讀值破線",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線"
            },
            "prediction": {
              "question": "MPC = Q + 2，MSC = Q。生產者補貼2對有效供應有何影響？",
              "options": [
                "使有效供應降至MSC，Q由4擴至5。",
                "使利益曲線向下移，並使Q收縮。"
              ],
              "answer": 0,
              "feedback": [
                "MPC − 補貼 = Q，與邊際社會成本一致。",
                "這是生產者一側的誘因；需求曲線不變。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會利益（MSB）連接(0, 10) → (10, 0)。 邊際社會成本（MSC）連接(0, 0) → (10, 10)。",
                "instruction": "哪些社會邊際曲線確立政策前比較？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際社會利益（MSB）；邊際社會成本（MSC）。",
                    "feedback": "MSC在MPC下方2，MSB等於MPB，在引入補貼前顯示生產外部利益。"
                  },
                  {
                    "key": "misconception0",
                    "label": "只移動利益曲線以表示生產外部性。",
                    "feedback": "此生產外部影響使MPC與MSC分離；利益曲線重合。須區分成本楔子及私人／社會交點。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 邊際外部影響楔子連接(5, 7) → (5, 5)。 私人市場結果（Qm）位於(4, 6)。社會最適點（Q*）位於(5, 5)。私人市場結果（Qm）——數量讀值破線：破線路徑 (4, 0) → (4, 6)。私人市場結果（Qm）——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。社會最適點（Q*）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。",
                "instruction": "就「矯正生產正外部性」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "只把私人交點當作社會最適點。",
                    "feedback": "私人結果比較MPB與MPC；社會最適點比較MSB與MSC。未被定價的外部影響使兩種比較分離。"
                  },
                  {
                    "key": "read",
                    "label": "加上邊際外部影響楔子；私人市場結果（Qm）；社會最適點（Q*），並附讀取座標軸的破線輔助線。",
                    "feedback": "向下成本楔子2配合低於社會數量5的私人數量4，顯示生產不足。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 政策後的有效供應連接(0, 0) → (10, 10)。 每單位矯正政策楔子連接(5, 5) → (5, 7)。 政策前福利損失三角形的陰影多邊形頂點為 (4, 4) → (4, 6) → (5, 5)。政府補貼開支長方形的陰影多邊形頂點為 (0, 5) → (5, 5) → (5, 7) → (0, 7)。",
                "instruction": "就「矯正生產正外部性」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上政策後的有效供應；每單位矯正政策楔子；政策前福利損失三角形；政府補貼開支長方形。",
                    "feedback": "補貼使有效供應降至MSC，產量升至5；付款長方形採用賣方收入與買方價格之差，政策前損失三角形則代表現在收回的利益。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把整個邊際外部影響長方形標為無謂損失。",
                    "feedback": "外部影響楔子適用於已生產單位，但無謂損失量度無效率數量區間所放棄的淨盈餘；其界線是社會邊際曲線。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "私人基準Qm = 4。補貼後，買方付5、賣方收7、Q = 5。初始損失三角形顯示融資成本前收回的已放棄利益。",
            "explanation": {
              "question": "為何與沒有外部性的補貼不同？",
              "options": [
                "每項補貼必然產生相同的過度生產損失。",
                "本例新增產出矯正原有生產不足問題。"
              ],
              "answer": 1,
              "feedback": [
                "福利判斷需要考慮初始扭曲；無外部性市場的起點不同。",
                "本例正外部利益表示社會成本低於私人成本。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "在Q = 5、每單位補貼2時，政府開支是多少？",
              "options": [
                "每期10貨幣單位。",
                "每期8貨幣單位。"
              ],
              "answer": 0,
              "feedback": [
                "開支 = 5 × 2 = 10；計入融資成本前，原有福利損失1被消除。",
                "採用補貼後數量5，而非原有私人數量4。"
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.regulation_diagram",
        "scope": "common",
        "title": "立法與規管（regulation）政策反應圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "optimalCap",
            "title": "在最適量的可執行上限",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "假設遵從政策並分配生產權。所選機制並不代表所有規管種類。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際私人利益（MPB）連接(0, 10) → (10, 0)。 邊際私人成本（MPC）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "mpb": "邊際私人利益（MPB）",
              "mpc": "邊際私人成本（MPC）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "externalWedge": "邊際外部影響楔子",
              "quantityCap": "強制執行的數量上限",
              "market": "私人市場結果（Qm）",
              "optimum": "社會最適點（Q*）",
              "initialLoss": "政策前福利損失三角形",
              "marketQ": "私人市場結果（Qm）——數量讀值破線",
              "marketP": "私人市場結果（Qm）——縱軸讀值破線",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線"
            },
            "prediction": {
              "question": "Q* = 4、Qm = 5時，上限設定Q = 4。過度生產如何變化？",
              "options": [
                "它必須使供應移至新成本曲線。",
                "它消除圖示的過多產出。"
              ],
              "answer": 1,
              "feedback": [
                "數量限制未必改變原有生產技術或邊際成本曲線。",
                "具約束力且全面執行的上限，直接把產出限制在Q*。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會利益（MSB）連接(0, 10) → (10, 0)。 邊際社會成本（MSC）連接(0, 2) → (10, 12)。",
                "instruction": "哪些社會邊際曲線確立政策前比較？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "移動邊際成本曲線以表示此數量上限。",
                    "feedback": "本情境直接限制數量，技術與邊際曲線不變；垂直上限並非供應成本移動。"
                  },
                  {
                    "key": "construct",
                    "label": "加上邊際社會利益（MSB）；邊際社會成本（MSC）。",
                    "feedback": "社會曲線顯示MSC在MPC上方2、MSB不變，在畫上限前確立外部成本比較。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 邊際外部影響楔子連接(4, 4) → (4, 6)。 私人市場結果（Qm）位於(5, 5)。社會最適點（Q*）位於(4, 6)。私人市場結果（Qm）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。私人市場結果（Qm）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。社會最適點（Q*）——數量讀值破線：破線路徑 (4, 0) → (4, 6)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。",
                "instruction": "就「在最適量的可執行上限」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上邊際外部影響楔子；私人市場結果（Qm）；社會最適點（Q*），並附讀取座標軸的破線輔助線。",
                    "feedback": "楔子與交點輔助線辨認過多私人產量5與有效率產量4，提供數量限制的參照。"
                  },
                  {
                    "key": "misconception1",
                    "label": "只把私人交點當作社會最適點。",
                    "feedback": "私人結果比較MPB與MPC；社會最適點比較MSB與MSC。未被定價的外部影響使兩種比較分離。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 強制執行的數量上限連接(4, 0) → (4, 10)。 政策前福利損失三角形的陰影多邊形頂點為 (4, 6) → (5, 5) → (5, 7)。",
                "instruction": "就「在最適量的可執行上限」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把整個邊際外部影響長方形標為無謂損失。",
                    "feedback": "外部影響楔子適用於已生產單位，但無謂損失量度無效率數量區間所放棄的淨盈餘；其界線是社會邊際曲線。"
                  },
                  {
                    "key": "compare",
                    "label": "加上強制執行的數量上限；政策前福利損失三角形。",
                    "feedback": "Q = 4的垂直上限無須移動成本便執行有效率數量；陰影三角形記錄上限前損失，在此上限下被消除。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "垂直上限為Q = 4；遵從政策下，4至5的原有損失三角形完全避免。成本曲線沒有移動。",
            "explanation": {
              "question": "哪項假設支持圖示的上限結果？",
              "options": [
                "上限獲執行，而且相同技術及邊際曲線仍然適用。",
                "所有規管必然使供應成本改變相同幅度。"
              ],
              "answer": 0,
              "feedback": [
                "本例直接限制數量，而非建立技術標準模型。",
                "其他規管可能改變成本或技術，故其幾何形狀需要另一個指明機制。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "此上限下剩餘多少福利損失？",
              "options": [
                "每期1貨幣單位。",
                "本例為零。"
              ],
              "answer": 1,
              "feedback": [
                "1是沒有此有效上限時的原有損失，並非剩餘損失。",
                "上限等於Q*，故上限與社會最適量之間沒有過多單位。"
              ]
            }
          },
          {
            "key": "weakCap",
            "title": "部分矯正的數量上限",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "假設遵從政策並分配生產權。所選機制並不代表所有規管種類。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際私人利益（MPB）連接(0, 10) → (10, 0)。 邊際私人成本（MPC）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "mpb": "邊際私人利益（MPB）",
              "mpc": "邊際私人成本（MPC）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "externalWedge": "邊際外部影響楔子",
              "quantityCap": "強制執行的數量上限",
              "market": "私人市場結果（Qm）",
              "optimum": "社會最適點（Q*）",
              "initialLoss": "政策前福利損失三角形",
              "remainingLoss": "剩餘福利損失三角形",
              "marketQ": "私人市場結果（Qm）——數量讀值破線",
              "marketP": "私人市場結果（Qm）——縱軸讀值破線",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線"
            },
            "prediction": {
              "question": "Q* = 4、Qm = 5時，上限設定Q = 4.5。能否完全消除過度生產？",
              "options": [
                "不能：它減少過度生產，但Q仍高於最適量。",
                "能：任何限制都會達到社會最適量。"
              ],
              "answer": 0,
              "feedback": [
                "上限在私人與社會數量之間。",
                "較小數量差距仍可帶來正福利損失。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會利益（MSB）連接(0, 10) → (10, 0)。 邊際社會成本（MSC）連接(0, 2) → (10, 12)。",
                "instruction": "哪些社會邊際曲線確立政策前比較？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際社會利益（MSB）；邊際社會成本（MSC）。",
                    "feedback": "社會曲線顯示MSC在MPC上方2、MSB不變，在畫上限前確立外部成本比較。"
                  },
                  {
                    "key": "misconception0",
                    "label": "移動邊際成本曲線以表示此數量上限。",
                    "feedback": "本情境直接限制數量，技術與邊際曲線不變；垂直上限並非供應成本移動。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 邊際外部影響楔子連接(4, 4) → (4, 6)。 私人市場結果（Qm）位於(5, 5)。社會最適點（Q*）位於(4, 6)。私人市場結果（Qm）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。私人市場結果（Qm）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。社會最適點（Q*）——數量讀值破線：破線路徑 (4, 0) → (4, 6)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。",
                "instruction": "就「部分矯正的數量上限」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "只把私人交點當作社會最適點。",
                    "feedback": "私人結果比較MPB與MPC；社會最適點比較MSB與MSC。未被定價的外部影響使兩種比較分離。"
                  },
                  {
                    "key": "read",
                    "label": "加上邊際外部影響楔子；私人市場結果（Qm）；社會最適點（Q*），並附讀取座標軸的破線輔助線。",
                    "feedback": "楔子與輔助線辨認私人產量5及有效率產量4，顯示成本超過利益的數量區間。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 強制執行的數量上限連接(4.5, 0) → (4.5, 10)。 政策前福利損失三角形的陰影多邊形頂點為 (4, 6) → (5, 5) → (5, 7)。剩餘福利損失三角形的陰影多邊形頂點為 (4, 6) → (4.5, 5.5) → (4.5, 6.5)。",
                "instruction": "就「部分矯正的數量上限」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上強制執行的數量上限；政策前福利損失三角形；剩餘福利損失三角形。",
                    "feedback": "Q = 4.5的上限只消除部分過度生產；政策前三角形旁，4至4.5的較小三角形顯示剩餘損失。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把整個邊際外部影響長方形標為無謂損失。",
                    "feedback": "外部影響楔子適用於已生產單位，但無謂損失量度無效率數量區間所放棄的淨盈餘；其界線是社會邊際曲線。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "垂直上限為Q = 4.5；原有Qm = 5與Q* = 4仍有標示。4至4.5的較小三角形是剩餘損失。",
            "explanation": {
              "question": "哪項假設支持圖示的上限結果？",
              "options": [
                "所有規管必然使供應成本改變相同幅度。",
                "上限獲執行，而且相同技術及邊際曲線仍然適用。"
              ],
              "answer": 1,
              "feedback": [
                "其他規管可能改變成本或技術，故其幾何形狀需要另一個指明機制。",
                "本例直接限制數量，而非建立技術標準模型。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "此上限下剩餘多少福利損失？",
              "options": [
                "每期0.25貨幣單位。",
                "每期1貨幣單位。"
              ],
              "answer": 0,
              "feedback": [
                "在Q = 4.5，邊際損害比利益高1；剩餘損失 = ½ × 0.5 × 1 = 0.25。",
                "1是上限前Q = 4至5的原有損失。"
              ]
            }
          }
        ]
      },
      {
        "id": "2.8.education_diagram",
        "scope": "common",
        "title": "教育（education）政策反應圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "effective",
            "title": "在所述學習假設下的全面反應",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "此處MSB固定。圖形分離資訊／感知利益變動，並不能證明現實宣傳如何改變行為。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際私人利益（MPB）連接(0, 8) → (8, 0)。 邊際私人成本（MPC）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "mpb": "邊際私人利益（MPB）",
              "mpc": "邊際私人成本（MPC）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "externalWedge": "邊際外部影響楔子",
              "informedMpb": "取得資訊後的感知MPB",
              "market": "私人市場結果（Qm）",
              "optimum": "社會最適點（Q*）",
              "response": "示例反應",
              "initialLoss": "政策前福利損失三角形",
              "marketQ": "私人市場結果（Qm）——數量讀值破線",
              "marketP": "私人市場結果（Qm）——縱軸讀值破線",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線",
              "responseQ": "示例反應——數量讀值破線",
              "responseP": "示例反應——縱軸讀值破線"
            },
            "prediction": {
              "question": "資訊使感知MPB由8 − Q升至MSB = 10 − Q。私人選擇如何變化？",
              "options": [
                "每當人們學到更多，MSB便必須下降。",
                "Q由4升至5，與社會最適量一致。"
              ],
              "answer": 1,
              "feedback": [
                "本例固定原有社會利益，改變感知私人利益。",
                "在有效學習的假設下，私人感知利益達到社會利益。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會利益（MSB）連接(0, 10) → (10, 0)。 邊際社會成本（MSC）連接(0, 0) → (10, 10)。",
                "instruction": "哪些社會邊際曲線確立政策前比較？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "改為把MSB向下移，而非改變感知MPB。",
                    "feedback": "所述資訊干預固定原有MSB，提高感知私人利益；反應可以只屬部分。"
                  },
                  {
                    "key": "construct",
                    "label": "加上邊際社會利益（MSB）；邊際社會成本（MSC）。",
                    "feedback": "MSB在現有感知MPB上方，MSC等於MPC，顯示資訊改變私人決策前的利益差距。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 邊際外部影響楔子連接(5, 3) → (5, 5)。 私人市場結果（Qm）位於(4, 4)。社會最適點（Q*）位於(5, 5)。私人市場結果（Qm）——數量讀值破線：破線路徑 (4, 0) → (4, 4)。私人市場結果（Qm）——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。社會最適點（Q*）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。",
                "instruction": "就「在所述學習假設下的全面反應」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上邊際外部影響楔子；私人市場結果（Qm）；社會最適點（Q*），並附讀取座標軸的破線輔助線。",
                    "feedback": "Q = 5的楔子量度利益差2；輔助線標出低於社會有效率數量5的私人數量4。"
                  },
                  {
                    "key": "misconception1",
                    "label": "只把私人交點當作社會最適點。",
                    "feedback": "私人結果比較MPB與MPC；社會最適點比較MSB與MSC。未被定價的外部影響使兩種比較分離。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 取得資訊後的感知MPB連接(0, 10) → (10, 0)。 示例反應位於(5, 5)。政策前福利損失三角形的陰影多邊形頂點為 (4, 4) → (4, 6) → (5, 5)。示例反應——數量讀值破線：破線路徑 (5, 0) → (5, 5)。示例反應——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。",
                "instruction": "就「在所述學習假設下的全面反應」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把整個邊際外部影響長方形標為無謂損失。",
                    "feedback": "外部影響楔子適用於已生產單位，但無謂損失量度無效率數量區間所放棄的淨盈餘；其界線是社會邊際曲線。"
                  },
                  {
                    "key": "compare",
                    "label": "加上取得資訊後的感知MPB；示例反應；政策前福利損失三角形，並附讀取座標軸的破線輔助線。",
                    "feedback": "新感知MPB與MSB重合，並在(5,5)與成本相交；若消費者按假設反應，政策前三角形顯示收回的利益。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "初始MPB = 8 − Q與固定MSB = 10 − Q有別。知情後MPB變為10 − Q，反應點為(5,5)；原有損失三角形被消除。",
            "explanation": {
              "question": "解讀宣傳效果時，應注意哪項限制？",
              "options": [
                "私人反應大小以有效學習為條件。",
                "每次教育宣傳必須使MPB恰好移至MSB。"
              ],
              "answer": 0,
              "feedback": [
                "宣傳可能只有部分反應或沒有反應；現實干預亦可改變偏好或原有利益。",
                "全面調整是情境假設，而非一般因果保證。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "此反應情境中，剩餘多少福利損失？",
              "options": [
                "每期1貨幣單位。",
                "本例為零。"
              ],
              "answer": 1,
              "feedback": [
                "1是原有消費不足損失，並非全面反應後剩餘損失。",
                "私人與社會交點在Q = 5重合，在所述假設下消除原有損失。"
              ]
            }
          },
          {
            "key": "partial",
            "title": "對資訊的部分反應",
            "assumption": "競爭市場、全面遵從政策、沒有行政成本，並有效率地分配成交單位。邊際曲線涵蓋本例指明的影響。",
            "limitation": "此處MSB固定。圖形分離資訊／感知利益變動，並不能證明現實宣傳如何改變行為。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 邊際私人利益（MPB）連接(0, 8) → (8, 0)。 邊際私人成本（MPC）連接(0, 0) → (10, 10)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "mpb": "邊際私人利益（MPB）",
              "mpc": "邊際私人成本（MPC）",
              "msb": "邊際社會利益（MSB）",
              "msc": "邊際社會成本（MSC）",
              "externalWedge": "邊際外部影響楔子",
              "informedMpb": "取得資訊後的感知MPB",
              "market": "私人市場結果（Qm）",
              "optimum": "社會最適點（Q*）",
              "response": "示例反應",
              "initialLoss": "政策前福利損失三角形",
              "remainingLoss": "剩餘福利損失三角形",
              "marketQ": "私人市場結果（Qm）——數量讀值破線",
              "marketP": "私人市場結果（Qm）——縱軸讀值破線",
              "optimumQ": "社會最適點（Q*）——數量讀值破線",
              "optimumP": "社會最適點（Q*）——縱軸讀值破線",
              "responseQ": "示例反應——數量讀值破線",
              "responseP": "示例反應——縱軸讀值破線"
            },
            "prediction": {
              "question": "資訊使感知MPB由8 − Q升至9 − Q，MSB = 10 − Q維持不變。消費不足是否完全矯正？",
              "options": [
                "否：Q由4升至4.5，但仍低於Q* = 5。",
                "是：任何資訊宣傳必然填補整個差距。"
              ],
              "answer": 0,
              "feedback": [
                "新私人交點位於原有市場產量與最適量之間。",
                "此處私人利益曲線的移幅只有外部利益差距的一半。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際社會利益（MSB）連接(0, 10) → (10, 0)。 邊際社會成本（MSC）連接(0, 0) → (10, 10)。",
                "instruction": "哪些社會邊際曲線確立政策前比較？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際社會利益（MSB）；邊際社會成本（MSC）。",
                    "feedback": "MSB在現有感知MPB上方，MSC等於MPC，顯示資訊改變私人決策前的利益差距。"
                  },
                  {
                    "key": "misconception0",
                    "label": "改為把MSB向下移，而非改變感知MPB。",
                    "feedback": "所述資訊干預固定原有MSB，提高感知私人利益；反應可以只屬部分。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 邊際外部影響楔子連接(5, 3) → (5, 5)。 私人市場結果（Qm）位於(4, 4)。社會最適點（Q*）位於(5, 5)。私人市場結果（Qm）——數量讀值破線：破線路徑 (4, 0) → (4, 4)。私人市場結果（Qm）——縱軸讀值破線：破線路徑 (0, 4) → (4, 4)。社會最適點（Q*）——數量讀值破線：破線路徑 (5, 0) → (5, 5)。社會最適點（Q*）——縱軸讀值破線：破線路徑 (0, 5) → (5, 5)。",
                "instruction": "就「對資訊的部分反應」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "只把私人交點當作社會最適點。",
                    "feedback": "私人結果比較MPB與MPC；社會最適點比較MSB與MSC。未被定價的外部影響使兩種比較分離。"
                  },
                  {
                    "key": "read",
                    "label": "加上邊際外部影響楔子；私人市場結果（Qm）；社會最適點（Q*），並附讀取座標軸的破線輔助線。",
                    "feedback": "楔子2與輔助線區分私人數量4及有效率數量5，設定部分反應的比較基準。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 取得資訊後的感知MPB連接(0, 9) → (9, 0)。 示例反應位於(4.5, 4.5)。政策前福利損失三角形的陰影多邊形頂點為 (4, 4) → (4, 6) → (5, 5)。剩餘福利損失三角形的陰影多邊形頂點為 (4.5, 4.5) → (4.5, 5.5) → (5, 5)。示例反應——數量讀值破線：破線路徑 (4.5, 0) → (4.5, 4.5)。示例反應——縱軸讀值破線：破線路徑 (0, 4.5) → (4.5, 4.5)。",
                "instruction": "就「對資訊的部分反應」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上取得資訊後的感知MPB；示例反應；政策前福利損失三角形；剩餘福利損失三角形，並附讀取座標軸的破線輔助線。",
                    "feedback": "感知MPB只升至P = 9 − Q，在(4.5,4.5)與成本相交；4.5至5的剩餘三角形，在政策前損失旁顯示仍被放棄的利益。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把整個邊際外部影響長方形標為無謂損失。",
                    "feedback": "外部影響楔子適用於已生產單位，但無謂損失量度無效率數量區間所放棄的淨盈餘；其界線是社會邊際曲線。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "初始MPB = 8 − Q與固定MSB = 10 − Q有別。知情後MPB變為9 − Q，反應點為(4.5,4.5)，並有剩餘消費不足三角形。",
            "explanation": {
              "question": "解讀宣傳效果時，應注意哪項限制？",
              "options": [
                "每次教育宣傳必須使MPB恰好移至MSB。",
                "私人反應大小以有效學習為條件。"
              ],
              "answer": 1,
              "feedback": [
                "全面調整是情境假設，而非一般因果保證。",
                "宣傳可能只有部分反應或沒有反應；現實干預亦可改變偏好或原有利益。"
              ]
            },
            "extension": {
              "scope": "hl",
              "question": "此反應情境中，剩餘多少福利損失？",
              "options": [
                "每期0.25貨幣單位。",
                "零。"
              ],
              "answer": 0,
              "feedback": [
                "缺少產出的三角形底為0.5、高為1：面積0.25。",
                "感知MPB仍低於MSB，因此4.5至5之間有社會利益的單位仍未被消費。"
              ]
            }
          }
        ]
      }
    ]
  },
  "2.9": {
    "title": "公共物品",
    "summary": "市場為何可能供應公共物品不足？",
    "question": "市場為何可能供應公共物品不足？",
    "terms": [
      {
        "term": "public good",
        "definition": "具非競爭性及非排他性的財貨。"
      },
      {
        "term": "free rider",
        "definition": "沒有分擔成本卻享用財貨利益的人。"
      }
    ],
    "sections": [
      {
        "id": "public",
        "heading": "公共物品與搭便車者",
        "body": [
          "純公共物品具non-rival：一人使用不減他人使用；亦具non-excludable：難阻不付款者受益。Free riding使私人收費困難，市場或供應不足。政府可直接提供或外判私人供應，以稅項支付。",
          "防洪警報廣播通知另一居民，不會減少你聽到的警報，這是非競爭性；難阻耳聞範圍內不付款者收聽，是非排他性。Free rider不付費而受益，故即使很多人重視，仍未必靠自願付款籌足具社會價值服務的資金。",
          "Public good指這些特性，不是政府擁有或服務是否理想。公立醫院病床被佔用時具競爭性；收費道路可排除不付費者。共有漁場因魚具競爭性而不同於純公共物品。擠塞可令原本非競爭的服務在某範圍變成競爭性。",
          "政府可徵稅籌款，自營或外判。外判可帶來專業及成本競爭，但監察品質、界定責任、防止競爭薄弱均不易。直接提供可支持全民使用，亦可能有預算及誘因問題。應比較品質和問責，不可假設某所有權形式自動有效率。"
        ],
        "limitation": "現實很少財貨完全符合兩項條件。"
      }
    ],
    "modelPrompt": "利用例題找出機制，再解釋一項可改變結論的條件。",
    "modelAssumption": "例子只抽取一項機制；除非另有說明，其他相關條件不變。",
    "modelLimitation": "這些示例只分離一項機制，不能確立普遍預測或因果實證結論。",
    "worked": {
      "prompt": "防洪警報每年成本$600；100戶各認為每年值$10。",
      "steps": [
        "所述總利益100×$10=$1,000，高於資源成本$600。",
        "住戶不付款也可聽警報，故可能不作自願供款。",
        "若人人如此想，淨利益雖正仍籌款不足。",
        "每戶強制均付$6可付成本，但公平及估值準確性仍須審視。"
      ],
      "conclusion": "非排他性造成融資問題；總利益高於成本，不保證自願私人銷售可行。"
    },
    "quiz": {
      "question": "開放魚群與純公共物品的分別是甚麼？",
      "options": [
        "魚具競爭性：捕一條便減少他人可用數量。",
        "魚不能為任何人產生利益。",
        "所有政府擁有資源都非競爭性。",
        "難排除可保證有效率自願提供。"
      ],
      "feedback": [
        "正確：競爭性令魚群屬共有資源而非純公共物品。",
        "共有資源及公共物品皆提供利益。",
        "所有權不決定競爭性，公立醫院病床亦具競爭性。",
        "難排除反可造成過用或搭便車問題。"
      ]
    },
    "challenge": {
      "hint": "運用公共物品兩特性及不付款的誘因。"
    },
    "coverage": [
      {
        "id": "2.9.characteristics",
        "point": "非競爭性、非排他性及搭便車者"
      },
      {
        "id": "2.9.responses",
        "point": "直接提供及私人外判"
      }
    ],
    "diagrams": []
  },
  "2.10": {
    "title": "資訊不對稱",
    "summary": "交易一方比另一方知得更多會怎樣？",
    "question": "交易一方比另一方知得更多會怎樣？",
    "terms": [
      {
        "term": "asymmetric information",
        "definition": "交易一方擁有另一方缺乏的相關資訊。"
      },
      {
        "term": "adverse selection",
        "definition": "隱藏特徵影響參與者組合的簽約前資訊問題。"
      },
      {
        "term": "moral hazard",
        "definition": "簽約後隱藏行動及誘因改變可提高風險的資訊問題。"
      }
    ],
    "sections": [
      {
        "id": "information",
        "heading": "隱藏資訊及行動",
        "body": [
          "Asymmetric information指交易一方有另一方缺乏的相關資訊。Adverse selection可在交易前因隱藏特徵改變誰參與而出現；moral hazard可在協議後因隱藏行動改變誘因而出現。",
          "二手單車賣家或知隱藏缺陷，買家卻無法辨品質。買家只願付平均品質價，好車主人可因價太低退出；組合變差可削信任與交易。Adverse selection關乎協議前的隱藏特徵。",
          "買保險後，若行為難觀察，個人損失負擔降低可削弱小心誘因，屬moral hazard；並非指所有投保者不誠實。分清時點及隱藏事項：簽約前風險類別是adverse selection，簽約後謹慎程度是moral hazard。"
        ],
        "limitation": "資訊差距因市場而異，未必總導致失效。"
      },
      {
        "id": "response",
        "heading": "應對方法",
        "body": [
          "政府可要求披露、規管行為或供資訊。賣家可用可信保養承諾signal品質；買家可檢查或提問作screening。每種方法有成本且未必完善。",
          "披露法及獨立資訊可改善比較，安全規管可設最低標準，但須準確資訊、執法及行政資源。Signal由知情一方發送，例如有成本保養承諾；screening由較不知情者作出，例如檢查或風險問卷。",
          "保養承諾須賣家能且必須履行才可信；空口「優質」或沒有資訊價值。保險自負額讓受保者負擔部分損失，保留謹慎誘因，但可能阻合法索償。Screening可改善定價，亦可能排除高風險住戶。須衡量資訊改善、成本及取得機會。"
        ],
        "limitation": "保養承諾須賣家有能力履行才可信。"
      }
    ],
    "modelPrompt": "利用例題找出機制，再解釋一項可改變結論的條件。",
    "modelAssumption": "例子只抽取一項機制；除非另有說明，其他相關條件不變。",
    "modelLimitation": "這些示例只分離一項機制，不能確立普遍預測或因果實證結論。",
    "worked": {
      "prompt": "保險公司統一保費$300；低風險戶每年預期索償$100，高風險戶$500。",
      "steps": [
        "低風險買家可能覺統一保費不值，較少投保。",
        "高風險者比例增加，平均預期索償可高於保費。",
        "提高統一保費可趕走更多低風險者，進一步惡化風險組合。",
        "Risk screening可區分類別，但或昂貴且降低高風險戶保障機會。"
      ],
      "conclusion": "這是購買前隱藏風險造成adverse selection，異於投保後改變謹慎程度。"
    },
    "quiz": {
      "question": "買盜竊保險後，車主鎖單車較不小心，保險公司看不到。問題是甚麼？",
      "options": [
        "簽約前隱藏風險造成adverse selection。",
        "保險非競爭性，故為public good。",
        "簽約後隱藏行動造成moral hazard。",
        "車主知道自己的行動，故是完全資訊。"
      ],
      "feedback": [
        "所述改變在簽約後，並非事前篩出風險類別。",
        "保險保障可排除人，不是純公共物品。",
        "正確：行動難觀察時，保險改變小心的誘因。",
        "正因保險公司不能觀察相關行動，資訊才不對稱。"
      ]
    },
    "challenge": {
      "hint": "指出哪方發signal，並說明何以不同於空口承諾。"
    },
    "coverage": [
      {
        "id": "2.10.asymmetry",
        "point": "Asymmetric information、adverse selection與moral hazard的關係"
      },
      {
        "id": "2.10.responses",
        "point": "政府立法、規管及資訊；私人signalling及screening"
      }
    ],
    "diagrams": []
  },
  "2.11": {
    "title": "市場力量",
    "summary": "競爭如何塑造企業選擇？",
    "question": "競爭如何塑造企業選擇？",
    "terms": [
      {
        "term": "economic profit",
        "definition": "總收益減去顯性成本及隱性機會成本。"
      },
      {
        "term": "marginal revenue",
        "definition": "多售一單位增加的總收益。"
      },
      {
        "term": "market power",
        "definition": "企業影響自身售價的能力。"
      },
      {
        "term": "Nash equilibrium",
        "definition": "在其他人策略既定下，沒有參與者能單方面改策略而得益的策略組合。"
      }
    ],
    "sections": [
      {
        "id": "structures",
        "heading": "四種市場結構",
        "body": [
          "Perfect competition有眾多價格接受者、同質產品及自由進入；monopoly只有一賣家且進入障礙大。Monopolistic competition結合多企業、產品差異及較易進入；oligopoly是少數互相依存企業，可價格／非價格競爭或合謀。",
          "比較進入障礙、賣家數目及產品差異。競爭小麥賣家與眾多對手售近同產品，不能選市場價；本地唯一水管網或有高基建障礙。咖啡店示範差異產品及較易進入；某航線少數航空公司對對手決策敏感。這些是例子，不是整個行業的定論分類。",
          "Price taker可按市場價多售一單位，所以自身產出P=AR=MR。面對向下需求且所有單位同價的賣家，增售通常須減價，故MR低於AR。Market power是影響價格能力，強弱由障礙及可用替代品決定。"
        ],
        "limitation": "這些是簡化基準，現實市場未必完全符合。"
      },
      {
        "id": "profit",
        "heading": "收益、成本及利潤",
        "body": [
          "利潤=總收益−總成本。MR、MC量度多一單位的總收益及總成本變化；AR、AC是各總額除產量。相關條件成立時，利潤最大化企業選MR=MC產量。Normal profit涵蓋機會成本；abnormal profit超過它。",
          "總成本含顯性付款及隱性機會成本。Normal profit是留住企業家資源於現有用途所需回報，計入經濟成本，故零經濟利潤可持續。Abnormal profit是收益超過全部這些成本；損失是未能涵蓋。",
          "求最大利潤，MR>MC時增產，到下一單位成本超新增收益便停止。平滑曲線選MC由下穿MR的MR=MC，亦檢查可行邊界產量。MC=MR本身不足：多交點或虧損下停產選項可改變決策。",
          "短期部分投入固定；競爭企業若收益涵蓋可變成本並分擔固定成本，可虧損續營；長期則須涵蓋全部成本。超額競爭利潤吸引進入，擴供降價；虧損退出則相反。自由進入且企業相若時，長期均衡趨normal profit及P=MC，並非保證abnormal profit。"
        ],
        "limitation": "單靠等式不足，須檢查利潤確已最大。"
      },
      {
        "id": "power",
        "heading": "力量與結果",
        "body": [
          "價格接受企業面對的市場價就是AR及MR。壟斷可較競爭基準限量加價，造成潛在福利損失。大企業可享規模經濟或資助研究，但市場力量可減選擇。政府可規管、立法、罰款或擁有企業。",
          "單一定價壟斷者先以MR=MC求量，再垂直到需求（AR）線讀價，不可從MR讀售價。與相同成本競爭基準相比，限產及P>MC令互利單位未交易。但需求相對成本太弱，壟斷亦可虧損。",
          "Natural monopoly指一企業能以低於多企業的平均成本供應相關市場需求，常因基建固定成本大且平均成本下降。邊際成本定價可使收益低於總成本，規管須兼顧融資與誘因。規模經濟及研究預算可降成本助創新，但市場保護亦可削弱改善壓力。",
          "Monopolistic competition容許產品多樣及部分定價能力。成功差異企業短期可有abnormal profit，但替代品進入降低各原企業需求，在簡單長期模型降至normal profit。向下需求通常令P>MC且量低於最低AC規模，以部分效率換多樣。",
          "競爭法可禁合謀或阻有害合併；監管者可限價或要求網絡開放。偵查與處罰可信時，罰款才有阻嚇。公有可追求使用機會及公共目標，亦需問責及資金。須把低價與選擇，對比規模經濟、投資誘因及監管資訊限制。"
        ],
        "limitation": "比較視乎成本及市場情況。"
      },
      {
        "id": "oligopoly",
        "heading": "相互依存",
        "body": [
          "寡頭企業考慮對手反應；合謀可抬價，卻給每家違約誘因，價格戰及非價格競爭亦是選項。",
          "兩企業選高／低價，利得(A,B)：同高(8,8)，僅A低(10,3)，僅B低(3,10)，同低(5,5)。B高時A選10勝8；B低時A選5勝3。B亦然，故即使雙方都較喜歡(8,8)，同低仍為Nash equilibrium。這是示意利潤，非實際市場估計。",
          "Cartel限總量求共同壟斷利潤，但各成員可暗增銷售得益。重複互動及偵查可維持合作；進入及執法可破壞。非合謀企業可在服務、設計、廣告或價格競爭，包括代價高的價格戰。",
          "四企業集中率相加最大四家的份額：30%+25%+15%+10%=80%。比率取決於市場定義，本身不證明合謀或高價；進口、潛在進入及小對手實力亦重要。"
        ],
        "limitation": "簡單描述不能預測所有策略互動。"
      }
    ],
    "modelPrompt": "選量前比較MR與MC，從需求找售價，再比較收益與總成本。",
    "modelAssumption": "假設單一定價企業比較經濟成本收益；產量選擇及市場需求限制結果。",
    "modelLimitation": "現實企業面對不確定、策略反應及多重目標。",
    "worked": {
      "prompt": "企業Q=0,1,2,3，總收益$0,$12,$22,$30，總經濟成本$6,$13,$19,$29。",
      "steps": [
        "Q=1,2,3利潤TR−TC為−$1,$3,$1；Q=0有固定成本，為−$6。這些選項中Q=2利潤最高。",
        "第二單位MR=$22−$12=$10，MC=$19−$13=$6，故增加它使利潤多$4。",
        "第三單位MR=$30−$22=$8，MC=$29−$19=$10，故增加它使利潤少$2。",
        "Q=2時AR=$22/2=$11、AC=$19/2=$9.50，利潤=($11−$9.50)×2=$3。"
      ],
      "conclusion": "離散產量須比較增量收益成本，未必出現數值恰等的MR=MC。"
    },
    "quiz": {
      "question": "面對向下需求的單一定價壟斷者選最大利潤產量後，如何找價格？",
      "options": [
        "從該量MC讀價。",
        "從該量MR讀價。",
        "獨立於需求任選價格。",
        "從該量的需求／AR線讀價。"
      ],
      "feedback": [
        "MC協助決定量，卻不顯買家支付意願。",
        "MR是額外收益，在此需求結構下低於價格。",
        "要售出所選量，價格須是需求上買家願付的。",
        "正確：需求給出與所選數量相符的價格。"
      ]
    },
    "challenge": {
      "hint": "比較進入障礙及進入對市場供給的影響。"
    },
    "coverage": [
      {
        "id": "2.11.structures",
        "point": "完全競爭、壟斷、寡頭及壟斷性競爭特徵"
      },
      {
        "id": "2.11.profit_rules",
        "point": "TR−TC、MC=MR、abnormal及normal profit與虧損"
      },
      {
        "id": "2.11.cost_revenue_calculation",
        "point": "由數據計利潤、MC、MR、AC及AR"
      },
      {
        "id": "2.11.market_power",
        "point": "Market power、價格接受者及制定者"
      },
      {
        "id": "2.11.perfect_competition_diagram",
        "point": "完全競爭價格接受者圖P=D=AR=MR"
      },
      {
        "id": "2.11.perfect_profit_diagram",
        "point": "完全競爭圖：abnormal profit、normal profit及虧損"
      },
      {
        "id": "2.11.perfect_equilibrium_diagram",
        "point": "完全競爭均衡及配置效率圖"
      },
      {
        "id": "2.11.perfect_run",
        "point": "完全競爭短長期利潤最大化"
      },
      {
        "id": "2.11.monopoly_diagram",
        "point": "壟斷圖：abnormal profit、normal profit及虧損"
      },
      {
        "id": "2.11.monopoly_welfare_diagram",
        "point": "壟斷與完全競爭的價格、產量及福利損失圖"
      },
      {
        "id": "2.11.natural_monopoly_diagram",
        "point": "Natural monopoly圖"
      },
      {
        "id": "2.11.monopoly_outcomes",
        "point": "壟斷利潤最大化、限產及配置無效率"
      },
      {
        "id": "2.11.oligopoly_diagram",
        "point": "合謀寡頭如壟斷運作圖"
      },
      {
        "id": "2.11.oligopoly_behavior",
        "point": "合謀、非合謀、相互依存、價格戰、違約及無效率"
      },
      {
        "id": "2.11.payoff_matrix",
        "point": "簡單博弈理論利得矩陣"
      },
      {
        "id": "2.11.oligopoly_competition",
        "point": "價格及非價格競爭與集中率"
      },
      {
        "id": "2.11.monopolistic_profit_diagram",
        "point": "壟斷性競爭圖：abnormal profit、normal profit及虧損"
      },
      {
        "id": "2.11.monopolistic_demand_diagram",
        "point": "壟斷性競爭與壟斷需求彈性比較圖"
      },
      {
        "id": "2.11.monopolistic_outcomes",
        "point": "短長期結果、無效率及產品多樣"
      },
      {
        "id": "2.11.large_firm_benefits",
        "point": "規模經濟、natural monopoly及研發創新利益"
      },
      {
        "id": "2.11.large_firm_risks",
        "point": "對產量、價格及消費者選擇的風險"
      },
      {
        "id": "2.11.power_responses",
        "point": "規管、立法、公有及罰款"
      }
    ],
    "diagrams": [
      {
        "id": "2.11.perfect_competition_diagram",
        "scope": "hl",
        "title": "完全競爭價格接受者（price taker）圖：P等於D等於AR等於MR",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "priceTaker",
            "title": "市場價格與小型價格接受廠商",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "虧損廠商只在短期有條件經營：假設價格足以支付AVC。進入、退出及成本變動需要額外假設。",
            "baseDescription": "市場面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 市場需求連接(0, 12) → (10, 2)。 個別廠商面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 廠商需求 = 價格 = AR連接(0, 6) → (10, 6)。",
            "labels": {
              "market": "市場面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "marketDemand": "市場需求",
              "marketSupply": "市場供應",
              "marketEquilibrium": "市場均衡",
              "commonPrice": "與廠商面板共用的價格",
              "marketEquilibriumQ": "市場均衡——數量讀值破線",
              "marketEquilibriumP": "市場均衡——縱軸讀值破線",
              "firm": "個別廠商面板",
              "ar": "廠商需求 = 價格 = AR",
              "mr": "廠商價格 = 邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "市場設定價格6。小型競爭廠商面對哪條需求曲線？",
              "options": [
                "整個市場向下的需求曲線。",
                "水平的P = AR = MR = 6直線。"
              ],
              "answer": 1,
              "feedback": [
                "市場需求描述所有買方；個別價格接受者面對另一種限制。",
                "廠商可按給定價格售出其小量產出，但不能提高該市場價格。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "市場面板: 市場供應連接(0, 0) → (10, 10)。 個別廠商面板: 廠商價格 = 邊際收益（MR）連接(0, 6) → (10, 6)。 邊際成本（MC）連接(0, 2) → (10, 12)。",
                "instruction": "就「市場價格與小型價格接受廠商」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "讓小型競爭廠商面對整個市場向下的需求曲線。",
                    "feedback": "市場確立價格；價格接受廠商面對該價格下的水平需求與MR。"
                  },
                  {
                    "key": "construct",
                    "label": "加上市場供應；廠商價格 = 邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "市場供應完成市場價格比較；廠商則面對水平MR = 6及上升MC。兩面板區分市場價格形成與個別產量決策。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "市場面板: 市場均衡位於(6, 6)。市場均衡——數量讀值破線：破線路徑 (6, 0) → (6, 6)。市場均衡——縱軸讀值破線：破線路徑 (0, 6) → (6, 6)。個別廠商面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(0.889, 11.444)至(10, 7.8)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 6)。選定產量的AC位於(4, 6)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + Q/2 + 8/Q，Q為正；它下降至最低點後再上升。",
                "instruction": "就「市場價格與小型價格接受廠商」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上市場均衡；平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "市場輔助線給出價格6，個別廠商選擇Q = 4；其AC點為6，因此價格支付所有經濟成本，包括正常利潤。"
                  },
                  {
                    "key": "misconception1",
                    "label": "使個別廠商生產市場總數量。",
                    "feedback": "共同連繫是市場價格，而非相同產量。從廠商自己的MR與MC讀出選定產量，再比較價格與AC。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "市場面板: 與廠商面板共用的價格：定向箭嘴 (1, 6) → (9, 6)。",
                "instruction": "就「市場價格與小型價格接受廠商」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "沒有比較價格與AC，便從MR = MC推斷利潤。",
                    "feedback": "MR = MC辨認選定產量；經濟利潤或虧損取決於該產量的P減AC。"
                  },
                  {
                    "key": "compare",
                    "label": "加上與廠商面板共用的價格。",
                    "feedback": "水平箭嘴把市場價格6傳過市場面板，強調廠商共用此價格，而非兩者產量相等。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "市場面板交點為(6,6)。廠商面板有水平AR = MR = 6及MC = 2 + Q，得出廠商Q = 4。市場與廠商數量是不同規模的活動。",
            "explanation": {
              "question": "為何廠商選擇Q = 4？",
              "options": [
                "在此MR = MC，MC由下方穿過MR。",
                "廠商必須生產市場數量6。"
              ],
              "answer": 0,
              "feedback": [
                "Q低於4時，MR大於MC；超過4後，額外成本大於額外收益。",
                "小型廠商選定產量並非總市場產量。兩面板的共同連繫是價格6。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.perfect_profit_diagram",
        "scope": "hl",
        "title": "完全競爭（perfect competition）圖：超額利潤、正常利潤與虧損",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "profit",
            "title": "競爭廠商：超額利潤（abnormal profit）",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "虧損廠商只在短期有條件經營：假設價格足以支付AVC。進入、退出及成本變動需要額外假設。個別廠商是價格接受者。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 廠商需求 = 價格 = AR連接(0, 6) → (10, 6)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "廠商需求 = 價格 = AR",
              "mr": "廠商價格 = 邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "profit": "經濟利潤長方形",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "選定Q = 4時，價格為6、AC為4。結果如何？",
              "options": [
                "超額利潤8。",
                "虧損，因為單憑邊際成本便決定總成本。"
              ],
              "answer": 0,
              "feedback": [
                "經濟利潤 = (P − AC) × Q = (6 − 4) × 4。",
                "邊際條件選擇數量；平均成本比較量度總利潤或虧損。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 廠商價格 = 邊際收益（MR）連接(0, 6) → (10, 6)。 邊際成本（MC）連接(0, 2) → (10, 12)。",
                "instruction": "就「競爭廠商：超額利潤（abnormal profit）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上廠商價格 = 邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "水平MR = 6在Q = 4與上升MC相交，在加入平均成本前辨認價格接受廠商的邊際產量決策。"
                  },
                  {
                    "key": "misconception0",
                    "label": "讓小型競爭廠商面對整個市場向下的需求曲線。",
                    "feedback": "市場確立價格；價格接受廠商面對該價格下的水平需求與MR。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(0.5, 2.25)至(10, 7)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 6)。選定產量的AC位於(4, 4)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + Q/2，Q為正；它隨Q上升。",
                "instruction": "就「競爭廠商：超額利潤（abnormal profit）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把AC讀值放在MR截距，而非選定產量。",
                    "feedback": "MR = MC確定Q = 4。先在同一數量垂直讀取AC，再與價格6比較；截距描述另一產量。"
                  },
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增AC點為4，因此此產量的價格超過平均經濟成本。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 經濟利潤長方形的陰影多邊形頂點為 (0, 4) → (4, 4) → (4, 6) → (0, 6)。",
                "instruction": "就「競爭廠商：超額利潤（abnormal profit）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上經濟利潤長方形。",
                    "feedback": "長方形涵蓋AC 4與價格6之間的四單位，以價格與平均成本之差乘產量量度經濟利潤。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把利潤長方形塗在價格與MC之間，而非AC。",
                    "feedback": "總經濟利潤採用平均總經濟成本：(P − AC) × Q。MC描述額外一單位，量度總利潤或虧損時不能取代AC。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "先在水平MR = 6上找出Q = 4的MR = MC，再讀AC = 4。長方形寬4、高2，代表利潤8。",
            "explanation": {
              "question": "為何產量與利潤決策須分開？",
              "options": [
                "MR = MC總能保證正經濟利潤。",
                "MR = MC選擇產量，P與AC的比較則決定經濟利潤。"
              ],
              "answer": 1,
              "feedback": [
                "邊際值相等不代表P大於AC；正常利潤與虧損都可能。",
                "邊際收益與邊際成本描述下一單位；AC包括完整平均經濟成本。"
              ]
            },
            "extension": null
          },
          {
            "key": "normal",
            "title": "競爭廠商：正常利潤（normal profit）",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "虧損廠商只在短期有條件經營：假設價格足以支付AVC。進入、退出及成本變動需要額外假設。個別廠商是價格接受者。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 廠商需求 = 價格 = AR連接(0, 6) → (10, 6)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "廠商需求 = 價格 = AR",
              "mr": "廠商價格 = 邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "選定Q = 4時，價格為6、AC為6。結果如何？",
              "options": [
                "沒有賺取正常回報。",
                "經濟利潤為零。"
              ],
              "answer": 1,
              "feedback": [
                "正常利潤是已計入經濟AC的機會成本，並非額外的超額盈餘。",
                "價格等於AC，後者已包括正常回報。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 廠商價格 = 邊際收益（MR）連接(0, 6) → (10, 6)。 邊際成本（MC）連接(0, 2) → (10, 12)。",
                "instruction": "就「競爭廠商：正常利潤（normal profit）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "讓小型競爭廠商面對整個市場向下的需求曲線。",
                    "feedback": "市場確立價格；價格接受廠商面對該價格下的水平需求與MR。"
                  },
                  {
                    "key": "construct",
                    "label": "加上廠商價格 = 邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "水平MR = 6在Q = 4與上升MC相交，在加入平均成本前辨認價格接受廠商的邊際產量決策。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(0.889, 11.444)至(10, 7.8)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 6)。選定產量的AC位於(4, 6)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + Q/2 + 8/Q，Q為正；它下降至最低點後再上升。",
                "instruction": "就「競爭廠商：正常利潤（normal profit）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增AC點為6，因此價格支付所有經濟成本，包括正常利潤。"
                  },
                  {
                    "key": "misconception1",
                    "label": "把AC讀值放在MR截距，而非選定產量。",
                    "feedback": "MR = MC確定Q = 4。先在同一數量垂直讀取AC，再與價格6比較；截距描述另一產量。"
                  }
                ],
                "answer": "read"
              }
            ],
            "comparison": "先在水平MR = 6上找出Q = 4的MR = MC，再讀AC = 6。P = AC，因此沒有非零利潤長方形。",
            "explanation": {
              "question": "為何產量與利潤決策須分開？",
              "options": [
                "MR = MC選擇產量，P與AC的比較則決定經濟利潤。",
                "MR = MC總能保證正經濟利潤。"
              ],
              "answer": 0,
              "feedback": [
                "邊際收益與邊際成本描述下一單位；AC包括完整平均經濟成本。",
                "邊際值相等不代表P大於AC；正常利潤與虧損都可能。"
              ]
            },
            "extension": null
          },
          {
            "key": "loss",
            "title": "競爭廠商：短期虧損（short-run loss）",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "虧損廠商只在短期有條件經營：假設價格足以支付AVC。進入、退出及成本變動需要額外假設。個別廠商是價格接受者。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 廠商需求 = 價格 = AR連接(0, 6) → (10, 6)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "廠商需求 = 價格 = AR",
              "mr": "廠商價格 = 邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "profit": "經濟虧損長方形",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "選定Q = 4時，價格為6、AC為8。結果如何？",
              "options": [
                "經濟虧損8。",
                "因價格超過邊際成本而有利潤。"
              ],
              "answer": 0,
              "feedback": [
                "經濟利潤 = (P − AC) × Q = (6 − 8) × 4。",
                "邊際條件選擇數量；平均成本比較量度總利潤或虧損。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 廠商價格 = 邊際收益（MR）連接(0, 6) → (10, 6)。 邊際成本（MC）連接(0, 2) → (10, 12)。",
                "instruction": "就「競爭廠商：短期虧損（short-run loss）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上廠商價格 = 邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "水平MR = 6在Q = 4與上升MC相交，在加入平均成本前辨認價格接受廠商的邊際產量決策。"
                  },
                  {
                    "key": "misconception0",
                    "label": "讓小型競爭廠商面對整個市場向下的需求曲線。",
                    "feedback": "市場確立價格；價格接受廠商面對該價格下的水平需求與MR。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(1.778, 11.889)至(10, 8.6)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 6)。選定產量的AC位於(4, 8)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + Q/2 + 16/Q，Q為正；它下降至最低點後再上升。",
                "instruction": "就「競爭廠商：短期虧損（short-run loss）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把AC讀值放在MR截距，而非選定產量。",
                    "feedback": "MR = MC確定Q = 4。先在同一數量垂直讀取AC，再與價格6比較；截距描述另一產量。"
                  },
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增AC點為8，因此此產量的價格不足以支付平均經濟成本。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 經濟虧損長方形的陰影多邊形頂點為 (0, 6) → (4, 6) → (4, 8) → (0, 8)。",
                "instruction": "就「競爭廠商：短期虧損（short-run loss）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上經濟虧損長方形。",
                    "feedback": "長方形涵蓋價格6與AC 8之間的四單位，量度經濟虧損8，而非邊際成本差距。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把利潤長方形塗在價格與MC之間，而非AC。",
                    "feedback": "總經濟利潤採用平均總經濟成本：(P − AC) × Q。MC描述額外一單位，量度總利潤或虧損時不能取代AC。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "先在水平MR = 6上找出Q = 4的MR = MC，再讀AC = 8。長方形寬4、高2，代表虧損8。",
            "explanation": {
              "question": "為何產量與利潤決策須分開？",
              "options": [
                "MR = MC總能保證正經濟利潤。",
                "只要短期收益支付可變成本，MR = MC可辨認虧損最少的產量。"
              ],
              "answer": 1,
              "feedback": [
                "邊際值相等不代表P大於AC；正常利潤與虧損都可能。",
                "此處假設AVC不大於價格；固定成本仍可使P < AC並造成經濟虧損。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.perfect_equilibrium_diagram",
        "scope": "hl",
        "title": "完全競爭均衡與配置效率（allocative efficiency）圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "longRun",
            "title": "長期競爭均衡（long-run competitive equilibrium）",
            "assumption": "假設自由進出、可取得相同技術、成本條件不變及沒有外部影響。示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "現實進入障礙、成本差異或外部影響可阻礙此基準結果。市場產量6與個別廠商產量4不同。",
            "baseDescription": "市場面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 市場需求連接(0, 12) → (10, 2)。 個別廠商面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 廠商需求 = 價格 = AR連接(0, 6) → (10, 6)。",
            "labels": {
              "market": "市場面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "marketDemand": "市場需求",
              "marketSupply": "市場供應",
              "marketEquilibrium": "市場均衡",
              "commonPrice": "與廠商面板共用的價格",
              "marketEquilibriumQ": "市場均衡——數量讀值破線",
              "marketEquilibriumP": "市場均衡——縱軸讀值破線",
              "firm": "個別廠商面板",
              "ar": "廠商需求 = 價格 = AR",
              "mr": "廠商價格 = 邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "在成本條件不變、自由進出下，競爭廠商會停留在哪裏？",
              "options": [
                "不受限制的相同廠商進入下，價格仍永久高於AC。",
                "P = MR = MC = 最低AC。"
              ],
              "answer": 1,
              "feedback": [
                "在所述假設下，若持續有超額利潤，須有進入不能消除它的原因。",
                "此基準中，進入侵蝕超額利潤，退出減少虧損。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "市場面板: 市場供應連接(0, 0) → (10, 10)。 個別廠商面板: 廠商價格 = 邊際收益（MR）連接(0, 6) → (10, 6)。 邊際成本（MC）連接(0, 2) → (10, 12)。",
                "instruction": "就「長期競爭均衡（long-run competitive equilibrium）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "讓小型競爭廠商面對整個市場向下的需求曲線。",
                    "feedback": "市場確立價格；價格接受廠商面對該價格下的水平需求與MR。"
                  },
                  {
                    "key": "construct",
                    "label": "加上市場供應；廠商價格 = 邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "市場供應完成市場價格比較；廠商則面對水平MR = 6及上升MC。兩面板區分市場價格形成與個別產量決策。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "市場面板: 市場均衡位於(6, 6)。市場均衡——數量讀值破線：破線路徑 (6, 0) → (6, 6)。市場均衡——縱軸讀值破線：破線路徑 (0, 6) → (6, 6)。個別廠商面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(0.889, 11.444)至(10, 7.8)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 6)。選定產量的AC位於(4, 6)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + Q/2 + 8/Q，Q為正；它下降至最低點後再上升。",
                "instruction": "就「長期競爭均衡（long-run competitive equilibrium）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上市場均衡；平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "市場輔助線給出價格6，個別廠商選擇Q = 4；其AC點為6，因此價格支付所有經濟成本，包括正常利潤。"
                  },
                  {
                    "key": "misconception1",
                    "label": "使個別廠商生產市場總數量。",
                    "feedback": "共同連繫是市場價格，而非相同產量。從廠商自己的MR與MC讀出選定產量，再比較價格與AC。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "市場面板: 與廠商面板共用的價格：定向箭嘴 (1, 6) → (9, 6)。",
                "instruction": "就「長期競爭均衡（long-run competitive equilibrium）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "沒有比較價格與AC，便從MR = MC推斷利潤。",
                    "feedback": "MR = MC辨認選定產量；經濟利潤或虧損取決於該產量的P減AC。"
                  },
                  {
                    "key": "compare",
                    "label": "加上與廠商面板共用的價格。",
                    "feedback": "水平箭嘴把市場價格6傳過市場面板，強調廠商共用此價格，而非兩者產量相等。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "市場價格為6。在廠商Q = 4，MC = 6、AC達最低6，經濟利潤為零；沒有正利潤長方形。",
            "explanation": {
              "question": "為何此基準下P = MC具配置效率？",
              "options": [
                "價格反映邊際支付意欲，因此沒有外部影響時MB等於MC。",
                "零經濟利潤代表擁有人沒有正常回報。"
              ],
              "answer": 0,
              "feedback": [
                "在基準假設下，此等式使邊際社會利益與邊際社會成本一致。",
                "正常回報是AC的一部分；零經濟利潤仍支付該機會成本。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.monopoly_diagram",
        "scope": "hl",
        "title": "壟斷（monopoly）圖：超額利潤、正常利潤與虧損",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "profit",
            "title": "壟斷者：超額利潤（abnormal profit）",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "虧損廠商只在短期有條件經營：假設價格足以支付AVC。進入、退出及成本變動需要額外假設。市場力量不保證利潤。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 平均收益／需求（AR）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "平均收益／需求（AR）",
              "mr": "邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "profit": "經濟利潤長方形",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "選定Q = 4時，價格為6、AC為4。結果如何？",
              "options": [
                "超額利潤8。",
                "虧損，因為單憑邊際成本便決定總成本。"
              ],
              "answer": 0,
              "feedback": [
                "經濟利潤 = (P − AC) × Q = (6 − 4) × 4。",
                "邊際條件選擇數量；平均成本比較量度總利潤或虧損。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際收益（MR）連接(0, 10) → (5, 0)。 邊際成本（MC）連接(0, 2) → (10, 2)。",
                "instruction": "就「壟斷者：超額利潤（abnormal profit）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "向下MR在Q = 4與水平MC = 2相交，辨認無約束的單一價格產量決策；需求決定該數量的價格。"
                  },
                  {
                    "key": "misconception0",
                    "label": "忽略MR，選擇需求價格等於MC的產量。",
                    "feedback": "無約束的單一價格賣方以MR = MC選產量，再從需求／AR讀價格。邊際成本定價情境明確比較受規管的另一方案。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(0.889, 11)至(10, 2.8)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 2)。選定產量的AC位於(4, 4)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + 8/Q，Q為正；它在相關範圍內下降。",
                "instruction": "就「壟斷者：超額利潤（abnormal profit）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "在選定產量從MR而非需求／AR讀取價格。",
                    "feedback": "MR = MC選擇無約束的類壟斷產量。售價來自該產量的需求／AR，與MR不同；規管另作辨認。"
                  },
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增AC點為4，因此此產量的價格超過平均經濟成本。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 經濟利潤長方形的陰影多邊形頂點為 (0, 4) → (4, 4) → (4, 6) → (0, 6)。",
                "instruction": "就「壟斷者：超額利潤（abnormal profit）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上經濟利潤長方形。",
                    "feedback": "長方形涵蓋AC 4與價格6之間的四單位，以價格與平均成本之差乘產量量度經濟利潤。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把利潤長方形塗在價格與MC之間，而非AC。",
                    "feedback": "總經濟利潤採用平均總經濟成本：(P − AC) × Q。MC描述額外一單位，量度總利潤或虧損時不能取代AC。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "先在MR = 10 − 2Q及MC = 2找出Q = 4的MR = MC。從AR = 10 − Q讀價格6，再讀AC = 4。長方形寬4、高2，代表利潤8。",
            "explanation": {
              "question": "為何產量與利潤決策須分開？",
              "options": [
                "MR = MC總能保證正經濟利潤。",
                "MR = MC選擇產量，P與AC的比較則決定經濟利潤。"
              ],
              "answer": 1,
              "feedback": [
                "邊際值相等不代表P大於AC；正常利潤與虧損都可能。",
                "邊際收益與邊際成本描述下一單位；AC包括完整平均經濟成本。"
              ]
            },
            "extension": null
          },
          {
            "key": "normal",
            "title": "壟斷者：正常利潤（normal profit）",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "虧損廠商只在短期有條件經營：假設價格足以支付AVC。進入、退出及成本變動需要額外假設。市場力量不保證利潤。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 平均收益／需求（AR）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "平均收益／需求（AR）",
              "mr": "邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "選定Q = 4時，價格為6、AC為6。結果如何？",
              "options": [
                "沒有賺取正常回報。",
                "經濟利潤為零。"
              ],
              "answer": 1,
              "feedback": [
                "正常利潤是已計入經濟AC的機會成本，並非額外的超額盈餘。",
                "價格等於AC，後者已包括正常回報。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際收益（MR）連接(0, 10) → (5, 0)。 邊際成本（MC）連接(0, 2) → (10, 2)。",
                "instruction": "就「壟斷者：正常利潤（normal profit）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "忽略MR，選擇需求價格等於MC的產量。",
                    "feedback": "無約束的單一價格賣方以MR = MC選產量，再從需求／AR讀價格。邊際成本定價情境明確比較受規管的另一方案。"
                  },
                  {
                    "key": "construct",
                    "label": "加上邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "向下MR在Q = 4與水平MC = 2相交，辨認無約束的單一價格產量決策；需求決定該數量的價格。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(1.778, 11)至(10, 3.6)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 2)。選定產量的AC位於(4, 6)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + 16/Q，Q為正；它在相關範圍內下降。",
                "instruction": "就「壟斷者：正常利潤（normal profit）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增AC點為6，因此價格支付所有經濟成本，包括正常利潤。"
                  },
                  {
                    "key": "misconception1",
                    "label": "在選定產量從MR而非需求／AR讀取價格。",
                    "feedback": "MR = MC選擇無約束的類壟斷產量。售價來自該產量的需求／AR，與MR不同；規管另作辨認。"
                  }
                ],
                "answer": "read"
              }
            ],
            "comparison": "先在MR = 10 − 2Q及MC = 2找出Q = 4的MR = MC。從AR = 10 − Q讀價格6，再讀AC = 6。P = AC，因此沒有非零利潤長方形。",
            "explanation": {
              "question": "為何產量與利潤決策須分開？",
              "options": [
                "MR = MC選擇產量，P與AC的比較則決定經濟利潤。",
                "MR = MC總能保證正經濟利潤。"
              ],
              "answer": 0,
              "feedback": [
                "邊際收益與邊際成本描述下一單位；AC包括完整平均經濟成本。",
                "邊際值相等不代表P大於AC；正常利潤與虧損都可能。"
              ]
            },
            "extension": null
          },
          {
            "key": "loss",
            "title": "壟斷者：短期虧損（short-run loss）",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "虧損廠商只在短期有條件經營：假設價格足以支付AVC。進入、退出及成本變動需要額外假設。市場力量不保證利潤。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 平均收益／需求（AR）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "平均收益／需求（AR）",
              "mr": "邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "profit": "經濟虧損長方形",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "選定Q = 4時，價格為6、AC為8。結果如何？",
              "options": [
                "經濟虧損8。",
                "因價格超過邊際成本而有利潤。"
              ],
              "answer": 0,
              "feedback": [
                "經濟利潤 = (P − AC) × Q = (6 − 8) × 4。",
                "邊際條件選擇數量；平均成本比較量度總利潤或虧損。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際收益（MR）連接(0, 10) → (5, 0)。 邊際成本（MC）連接(0, 2) → (10, 2)。",
                "instruction": "就「壟斷者：短期虧損（short-run loss）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "向下MR在Q = 4與水平MC = 2相交，辨認無約束的單一價格產量決策；需求決定該數量的價格。"
                  },
                  {
                    "key": "misconception0",
                    "label": "忽略MR，選擇需求價格等於MC的產量。",
                    "feedback": "無約束的單一價格賣方以MR = MC選產量，再從需求／AR讀價格。邊際成本定價情境明確比較受規管的另一方案。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(2.667, 11)至(10, 4.4)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 2)。選定產量的AC位於(4, 8)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + 24/Q，Q為正；它在相關範圍內下降。",
                "instruction": "就「壟斷者：短期虧損（short-run loss）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "在選定產量從MR而非需求／AR讀取價格。",
                    "feedback": "MR = MC選擇無約束的類壟斷產量。售價來自該產量的需求／AR，與MR不同；規管另作辨認。"
                  },
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增AC點為8，因此此產量的價格不足以支付平均經濟成本。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 經濟虧損長方形的陰影多邊形頂點為 (0, 6) → (4, 6) → (4, 8) → (0, 8)。",
                "instruction": "就「壟斷者：短期虧損（short-run loss）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上經濟虧損長方形。",
                    "feedback": "長方形涵蓋價格6與AC 8之間的四單位，量度經濟虧損8，而非邊際成本差距。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把利潤長方形塗在價格與MC之間，而非AC。",
                    "feedback": "總經濟利潤採用平均總經濟成本：(P − AC) × Q。MC描述額外一單位，量度總利潤或虧損時不能取代AC。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "先在MR = 10 − 2Q及MC = 2找出Q = 4的MR = MC。從AR = 10 − Q讀價格6，再讀AC = 8。長方形寬4、高2，代表虧損8。",
            "explanation": {
              "question": "為何產量與利潤決策須分開？",
              "options": [
                "MR = MC總能保證正經濟利潤。",
                "只要短期收益支付可變成本，MR = MC可辨認虧損最少的產量。"
              ],
              "answer": 1,
              "feedback": [
                "邊際值相等不代表P大於AC；正常利潤與虧損都可能。",
                "此處假設AVC不大於價格；固定成本仍可使P < AC並造成經濟虧損。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.monopoly_welfare_diagram",
        "scope": "hl",
        "title": "壟斷與完全競爭的價格、產量及福利損失比較圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "benchmark",
            "title": "壟斷與相同成本的競爭基準",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。基準採用完全相同的需求與MC。",
            "limitation": "此比較不能證明現實競爭行業與現實壟斷者有相同成本、創新或產品質素。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 平均收益／需求（AR）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "平均收益／需求（AR）",
              "mr": "邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "competitiveBenchmark": "相同成本的競爭基準",
              "profit": "經濟利潤長方形",
              "deadweightLoss": "無謂損失三角形（deadweight loss）",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線",
              "competitiveBenchmarkQ": "相同成本的競爭基準——數量讀值破線",
              "competitiveBenchmarkP": "相同成本的競爭基準——縱軸讀值破線"
            },
            "prediction": {
              "question": "若D = 10 − Q、MR = 10 − 2Q、MC = 2，壟斷會否選擇P = MC的數量？",
              "options": [
                "會：壟斷者總是收取邊際成本價格。",
                "不會：MR = MC給出Qm = 4，少於Qc = 8。"
              ],
              "answer": 1,
              "feedback": [
                "單一價格壟斷者以MR而非需求價格作邊際收益決策。",
                "在Q = 4，MR = 2，但需求價格為6。P = MC則給出Q = 8。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際收益（MR）連接(0, 10) → (5, 0)。 邊際成本（MC）連接(0, 2) → (10, 2)。",
                "instruction": "就「壟斷與相同成本的競爭基準」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "忽略MR，選擇需求價格等於MC的產量。",
                    "feedback": "無約束的單一價格賣方以MR = MC選產量，再從需求／AR讀價格。邊際成本定價情境明確比較受規管的另一方案。"
                  },
                  {
                    "key": "construct",
                    "label": "加上邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "向下MR在Q = 4與水平MC = 2相交，辨認無約束的單一價格產量決策；需求決定該數量的價格。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(0.889, 11)至(10, 2.8)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 2)。選定產量的AC位於(4, 4)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + 8/Q，Q為正；它在相關範圍內下降。",
                "instruction": "就「壟斷與相同成本的競爭基準」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增AC點為4，因此此產量的價格超過平均經濟成本。"
                  },
                  {
                    "key": "misconception1",
                    "label": "在選定產量從MR而非需求／AR讀取價格。",
                    "feedback": "MR = MC選擇無約束的類壟斷產量。售價來自該產量的需求／AR，與MR不同；規管另作辨認。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 相同成本的競爭基準位於(8, 2)。經濟利潤長方形的陰影多邊形頂點為 (0, 4) → (4, 4) → (4, 6) → (0, 6)。無謂損失三角形（deadweight loss）的陰影多邊形頂點為 (4, 2) → (4, 6) → (8, 2)。相同成本的競爭基準——數量讀值破線：破線路徑 (8, 0) → (8, 2)。相同成本的競爭基準——縱軸讀值破線：破線路徑 (0, 2) → (8, 2)。",
                "instruction": "就「壟斷與相同成本的競爭基準」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把壟斷利潤長方形當作全部無謂損失。",
                    "feedback": "利潤與福利損失是不同面積。Q = 4至8缺少的交易，在需求與MC之間有淨社會利益，形成福利損失三角形。"
                  },
                  {
                    "key": "compare",
                    "label": "加上相同成本的競爭基準；經濟利潤長方形；無謂損失三角形（deadweight loss），並附讀取座標軸的破線輔助線。",
                    "feedback": "基準點(8,2)標出需求 = MC；4至8缺少單位上的三角形是福利損失，獨立的價格—AC長方形則量度壟斷利潤。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "壟斷Qm = 4、Pm = 6。相同需求與MC基準給出Qc = 8、Pc = 2。4–8之間D與MC的三角形是福利損失8。額外P／AC長方形是私人利潤，而非福利損失面積。",
            "explanation": {
              "question": "為何此處4至8之間未生產的單位是福利損失？",
              "options": [
                "其邊際支付意欲超過假設的邊際成本。",
                "每一單位壟斷利潤都自動是無謂損失。"
              ],
              "answer": 0,
              "feedback": [
                "在相同成本基準，這些交易會增加淨盈餘：損失 = ½ × 4 × 4 = 8。",
                "利潤包括轉移與成本回收；無謂損失是缺少交易所放棄的淨盈餘。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.natural_monopoly_diagram",
        "scope": "hl",
        "title": "自然壟斷（natural monopoly）圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "unregulated",
            "title": "平均成本下降與壟斷定價",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。相關需求在LRAC下降範圍相交。",
            "limitation": "LRAC下降展示規模經濟（economies of scale），並非對每種技術成本次可加性的普遍證明。為受規管虧損融資亦有成本。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 平均收益／需求（AR）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "平均收益／需求（AR）",
              "mr": "邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "長期平均成本（LRAC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "profit": "經濟利潤長方形",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "若LRAC = 2 + 12/Q、MC = 2，隨產量上升會怎樣？",
              "options": [
                "在示例範圍，LRAC下降並趨近MC。",
                "因固定成本為正，LRAC必須上升。"
              ],
              "answer": 0,
              "feedback": [
                "固定成本12分攤到更多單位，因此LRAC下降。",
                "固定成本提高平均成本，但隨Q上升，其每單位負擔縮小。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際收益（MR）連接(0, 10) → (5, 0)。 邊際成本（MC）連接(0, 2) → (10, 2)。",
                "instruction": "就「平均成本下降與壟斷定價」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "向下MR在Q = 4與水平MC = 2相交，辨認無約束的單一價格產量決策；需求決定該數量的價格。"
                  },
                  {
                    "key": "misconception0",
                    "label": "忽略MR，選擇需求價格等於MC的產量。",
                    "feedback": "無約束的單一價格賣方以MR = MC選產量，再從需求／AR讀價格。邊際成本定價情境明確比較受規管的另一方案。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 長期平均成本（LRAC）是以取樣點繪成的平滑曲線，顯示由(1.333, 11)至(10, 3.2)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 2)。選定產量的AC位於(4, 5)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。長期平均成本（LRAC）遵循 LRAC = 2 + 12/Q，Q為正；它在相關範圍內下降。",
                "instruction": "就「平均成本下降與壟斷定價」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "在選定產量從MR而非需求／AR讀取價格。",
                    "feedback": "MR = MC選擇無約束的類壟斷產量。售價來自該產量的需求／AR，與MR不同；規管另作辨認。"
                  },
                  {
                    "key": "read",
                    "label": "加上長期平均成本（LRAC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增LRAC點為5，因此此產量價格超過平均經濟成本。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 經濟利潤長方形的陰影多邊形頂點為 (0, 5) → (4, 5) → (4, 6) → (0, 6)。",
                "instruction": "就「平均成本下降與壟斷定價」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上經濟利潤長方形。",
                    "feedback": "長方形涵蓋LRAC 5與價格6之間的四單位，以價格與平均成本之差乘產量量度經濟利潤。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把利潤長方形塗在價格與MC之間，而非AC。",
                    "feedback": "總經濟利潤採用平均總經濟成本：(P − AC) × Q。MC描述額外一單位，量度總利潤或虧損時不能取代AC。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "MR = MC選擇Q = 4；AR給出P = 6，LRAC = 5。利潤長方形為(6 − 5) × 4 = 4。LRAC維持高於MC，並在相關需求範圍下降。",
            "explanation": {
              "question": "邊際成本定價（marginal-cost pricing）揭示甚麼取捨？",
              "options": [
                "只要價格等於邊際成本，就無須補貼。",
                "具配置效率的定價可能需要為固定成本安排融資。"
              ],
              "answer": 1,
              "feedback": [
                "此處P = MC仍未收回明確的固定成本；可持續政策須處理它。",
                "在P = MC，即使額外一單位按其邊際成本定價，廠商仍可有總成本缺口。"
              ]
            },
            "extension": null
          },
          {
            "key": "marginalCostPrice",
            "title": "邊際成本定價與成本回收",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。相關需求在LRAC下降範圍相交。",
            "limitation": "LRAC下降展示規模經濟（economies of scale），並非對每種技術成本次可加性的普遍證明。為受規管虧損融資亦有成本。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 平均收益／需求（AR）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "平均收益／需求（AR）",
              "mr": "邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "長期平均成本（LRAC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "profit": "經濟虧損長方形",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "若規管者要求P = MC = 2，此廠商能否在Q = 8支付LRAC？",
              "options": [
                "能：按MC定價總能支付總成本。",
                "不能：LRAC為3.5，沒有支援時廠商會虧損。"
              ],
              "answer": 1,
              "feedback": [
                "MC支付增量單位成本，未必能回收固定成本。",
                "在Q = 8，總收益16低於總成本28。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際收益（MR）連接(0, 10) → (5, 0)。 邊際成本（MC）連接(0, 2) → (10, 2)。",
                "instruction": "就「邊際成本定價與成本回收」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "把MC向上移，迫使受規管價格等於未受規管壟斷價格。",
                    "feedback": "邊際成本定價改變定價規則，而非技術或MC。維持MC = 2，保留MR作未受規管比較；規管採用需求 = MC。"
                  },
                  {
                    "key": "construct",
                    "label": "加上邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "向下MR與水平MC = 2確立未受規管的Q = 4、MR = MC參照；受規管邊際成本定價則採用需求 = MC。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 長期平均成本（LRAC）是以取樣點繪成的平滑曲線，顯示由(1.333, 11)至(10, 3.2)。選定產量與需求價格位於(8, 2)。邊際決策參照：MR = MC位於(4, 2)。選定產量的AC位於(8, 3.5)。選定產量與需求價格——數量讀值破線：破線路徑 (8, 0) → (8, 2)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 2) → (8, 2)。長期平均成本（LRAC）遵循 LRAC = 2 + 12/Q，Q為正；它在相關範圍內下降。",
                "instruction": "就「邊際成本定價與成本回收」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上長期平均成本（LRAC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "輔助線標出受規管Q = 8、P = MC = 2，此處LRAC = 3.5高於價格；另一個Q = 4、MR = MC點是未受規管參照。"
                  },
                  {
                    "key": "misconception1",
                    "label": "把MR = MC產量Q = 4用作受規管產量。",
                    "feedback": "Q = 4是未受規管利潤最大化參照。所述規管者要求P = MC，故在MC = 2讀需求，得Q = 8；該處LRAC為3.5。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 經濟虧損長方形的陰影多邊形頂點為 (0, 2) → (8, 2) → (8, 3.5) → (0, 3.5)。",
                "instruction": "就「邊際成本定價與成本回收」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把利潤長方形塗在價格與MC之間，而非AC。",
                    "feedback": "總經濟利潤採用平均總經濟成本：(P − AC) × Q。MC描述額外一單位，量度總利潤或虧損時不能取代AC。"
                  },
                  {
                    "key": "compare",
                    "label": "加上經濟虧損長方形。",
                    "feedback": "虧損長方形在P = 2與LRAC = 3.5之間，由Q = 0至8，顯示邊際成本定價的成本回收缺口12。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "壟斷參照仍為(Q,MC) = (4,2)的MR = MC。受規管產量Q = 8、P = 2、LRAC = 3.5，故虧損長方形為12。",
            "explanation": {
              "question": "邊際成本定價（marginal-cost pricing）揭示甚麼取捨？",
              "options": [
                "具配置效率的定價可能需要為固定成本安排融資。",
                "只要價格等於邊際成本，就無須補貼。"
              ],
              "answer": 0,
              "feedback": [
                "在P = MC，即使額外一單位按其邊際成本定價，廠商仍可有總成本缺口。",
                "此處P = MC仍未收回明確的固定成本；可持續政策須處理它。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.oligopoly_diagram",
        "scope": "hl",
        "title": "勾結寡頭（collusive oligopoly）如壟斷般運作的圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "cartel",
            "title": "聯合利潤最大化的卡特爾（cartel）基準",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。假設成功聯合協調，並採用總體曲線。",
            "limitation": "本模型沒有解決卡特爾穩定性、成員配額或策略報復。現實寡頭未必如壟斷者般運作。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 平均收益／需求（AR）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "平均收益／需求（AR）",
              "mr": "邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "profit": "經濟利潤長方形",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "若廠商協調成一個總體利潤最大化者，哪項邊際條件決定聯合產量？",
              "options": [
                "總體MR = 總體MC。",
                "每間廠商都必須獨立售出整個市場數量。"
              ],
              "answer": 0,
              "feedback": [
                "把卡特爾視為聯合賣方，在MR = 10 − 2Q等於MC = 2處得Q = 4。",
                "圖示為行業總需求與成本，而非每名成員的獨立曲線。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際收益（MR）連接(0, 10) → (5, 0)。 邊際成本（MC）連接(0, 2) → (10, 2)。",
                "instruction": "就「聯合利潤最大化的卡特爾（cartel）基準」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "向下MR在Q = 4與水平MC = 2相交，辨認無約束的單一價格產量決策；需求決定該數量的價格。"
                  },
                  {
                    "key": "misconception0",
                    "label": "忽略MR，選擇需求價格等於MC的產量。",
                    "feedback": "無約束的單一價格賣方以MR = MC選產量，再從需求／AR讀價格。邊際成本定價情境明確比較受規管的另一方案。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(0.889, 11)至(10, 2.8)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 2)。選定產量的AC位於(4, 4)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + 8/Q，Q為正；它在相關範圍內下降。",
                "instruction": "就「聯合利潤最大化的卡特爾（cartel）基準」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "在選定產量從MR而非需求／AR讀取價格。",
                    "feedback": "MR = MC選擇無約束的類壟斷產量。售價來自該產量的需求／AR，與MR不同；規管另作辨認。"
                  },
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增AC點為4，因此此產量的價格超過平均經濟成本。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 經濟利潤長方形的陰影多邊形頂點為 (0, 4) → (4, 4) → (4, 6) → (0, 6)。",
                "instruction": "就「聯合利潤最大化的卡特爾（cartel）基準」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上經濟利潤長方形。",
                    "feedback": "長方形涵蓋AC 4與價格6之間的四單位，以價格與平均成本之差乘產量量度經濟利潤。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把利潤長方形塗在價格與MC之間，而非AC。",
                    "feedback": "總經濟利潤採用平均總經濟成本：(P − AC) × Q。MC描述額外一單位，量度總利潤或虧損時不能取代AC。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "總體卡特爾選擇聯合Q = 4，從D讀出聯合價格P = 6。所示AC／利潤長方形屬於示例的總體成本設定。",
            "explanation": {
              "question": "為何這不是每個寡頭市場的圖？",
              "options": [
                "廠商數目少就保證穩定的聯合利潤最大化。",
                "它假設成功協調；違約誘因可破壞該結果。"
              ],
              "answer": 1,
              "feedback": [
                "單憑市場集中度不能確立勾結，也不能消除削價競爭誘因。",
                "相互依存可產生多種結果；卡特爾須維持產量、價格與分配協議。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.monopolistic_profit_diagram",
        "scope": "hl",
        "title": "壟斷性競爭（monopolistic competition）圖：超額利潤、正常利潤與虧損",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "profit",
            "title": "差異化廠商：超額利潤（abnormal profit）",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "虧損廠商只在短期有條件經營：假設價格足以支付AVC。進入、退出及成本變動需要額外假設。個別需求取決於產品差異與替代品；長期進入可能改變需求。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 平均收益／需求（AR）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "平均收益／需求（AR）",
              "mr": "邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "profit": "經濟利潤長方形",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "選定Q = 4時，價格為6、AC為4。結果如何？",
              "options": [
                "虧損，因為單憑邊際成本便決定總成本。",
                "超額利潤8。"
              ],
              "answer": 1,
              "feedback": [
                "邊際條件選擇數量；平均成本比較量度總利潤或虧損。",
                "經濟利潤 = (P − AC) × Q = (6 − 4) × 4。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際收益（MR）連接(0, 10) → (5, 0)。 邊際成本（MC）連接(0, 2) → (10, 2)。",
                "instruction": "就「差異化廠商：超額利潤（abnormal profit）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "忽略MR，選擇需求價格等於MC的產量。",
                    "feedback": "無約束的單一價格賣方以MR = MC選產量，再從需求／AR讀價格。邊際成本定價情境明確比較受規管的另一方案。"
                  },
                  {
                    "key": "construct",
                    "label": "加上邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "向下MR在Q = 4與水平MC = 2相交，辨認無約束的單一價格產量決策；需求決定該數量的價格。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(0.889, 11)至(10, 2.8)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 2)。選定產量的AC位於(4, 4)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + 8/Q，Q為正；它在相關範圍內下降。",
                "instruction": "就「差異化廠商：超額利潤（abnormal profit）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增AC點為4，因此此產量的價格超過平均經濟成本。"
                  },
                  {
                    "key": "misconception1",
                    "label": "在選定產量從MR而非需求／AR讀取價格。",
                    "feedback": "MR = MC選擇無約束的類壟斷產量。售價來自該產量的需求／AR，與MR不同；規管另作辨認。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 經濟利潤長方形的陰影多邊形頂點為 (0, 4) → (4, 4) → (4, 6) → (0, 6)。",
                "instruction": "就「差異化廠商：超額利潤（abnormal profit）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把利潤長方形塗在價格與MC之間，而非AC。",
                    "feedback": "總經濟利潤採用平均總經濟成本：(P − AC) × Q。MC描述額外一單位，量度總利潤或虧損時不能取代AC。"
                  },
                  {
                    "key": "compare",
                    "label": "加上經濟利潤長方形。",
                    "feedback": "長方形涵蓋AC 4與價格6之間的四單位，以價格與平均成本之差乘產量量度經濟利潤。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "先在MR = 10 − 2Q及MC = 2找出Q = 4的MR = MC。從AR = 10 − Q讀價格6，再讀AC = 4。長方形寬4、高2，代表利潤8。",
            "explanation": {
              "question": "為何產量與利潤決策須分開？",
              "options": [
                "MR = MC選擇產量，P與AC的比較則決定經濟利潤。",
                "MR = MC總能保證正經濟利潤。"
              ],
              "answer": 0,
              "feedback": [
                "邊際收益與邊際成本描述下一單位；AC包括完整平均經濟成本。",
                "邊際值相等不代表P大於AC；正常利潤與虧損都可能。"
              ]
            },
            "extension": null
          },
          {
            "key": "normal",
            "title": "差異化廠商：正常利潤（normal profit）",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "虧損廠商只在短期有條件經營：假設價格足以支付AVC。進入、退出及成本變動需要額外假設。個別需求取決於產品差異與替代品；長期進入可能改變需求。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 平均收益／需求（AR）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "平均收益／需求（AR）",
              "mr": "邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "選定Q = 4時，價格為6、AC為6。結果如何？",
              "options": [
                "經濟利潤為零。",
                "沒有賺取正常回報。"
              ],
              "answer": 0,
              "feedback": [
                "價格等於AC，後者已包括正常回報。",
                "正常利潤是已計入經濟AC的機會成本，並非額外的超額盈餘。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際收益（MR）連接(0, 10) → (5, 0)。 邊際成本（MC）連接(0, 2) → (10, 2)。",
                "instruction": "就「差異化廠商：正常利潤（normal profit）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "向下MR在Q = 4與水平MC = 2相交，辨認無約束的單一價格產量決策；需求決定該數量的價格。"
                  },
                  {
                    "key": "misconception0",
                    "label": "忽略MR，選擇需求價格等於MC的產量。",
                    "feedback": "無約束的單一價格賣方以MR = MC選產量，再從需求／AR讀價格。邊際成本定價情境明確比較受規管的另一方案。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(1.778, 11)至(10, 3.6)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 2)。選定產量的AC位於(4, 6)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + 16/Q，Q為正；它在相關範圍內下降。",
                "instruction": "就「差異化廠商：正常利潤（normal profit）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "在選定產量從MR而非需求／AR讀取價格。",
                    "feedback": "MR = MC選擇無約束的類壟斷產量。售價來自該產量的需求／AR，與MR不同；規管另作辨認。"
                  },
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增AC點為6，因此價格支付所有經濟成本，包括正常利潤。"
                  }
                ],
                "answer": "read"
              }
            ],
            "comparison": "先在MR = 10 − 2Q及MC = 2找出Q = 4的MR = MC。從AR = 10 − Q讀價格6，再讀AC = 6。P = AC，因此沒有非零利潤長方形。",
            "explanation": {
              "question": "為何產量與利潤決策須分開？",
              "options": [
                "MR = MC總能保證正經濟利潤。",
                "MR = MC選擇產量，P與AC的比較則決定經濟利潤。"
              ],
              "answer": 1,
              "feedback": [
                "邊際值相等不代表P大於AC；正常利潤與虧損都可能。",
                "邊際收益與邊際成本描述下一單位；AC包括完整平均經濟成本。"
              ]
            },
            "extension": null
          },
          {
            "key": "loss",
            "title": "差異化廠商：短期虧損（short-run loss）",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "虧損廠商只在短期有條件經營：假設價格足以支付AVC。進入、退出及成本變動需要額外假設。個別需求取決於產品差異與替代品；長期進入可能改變需求。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 平均收益／需求（AR）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "平均收益／需求（AR）",
              "mr": "邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "profit": "經濟虧損長方形",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線"
            },
            "prediction": {
              "question": "選定Q = 4時，價格為6、AC為8。結果如何？",
              "options": [
                "因價格超過邊際成本而有利潤。",
                "經濟虧損8。"
              ],
              "answer": 1,
              "feedback": [
                "邊際條件選擇數量；平均成本比較量度總利潤或虧損。",
                "經濟利潤 = (P − AC) × Q = (6 − 8) × 4。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際收益（MR）連接(0, 10) → (5, 0)。 邊際成本（MC）連接(0, 2) → (10, 2)。",
                "instruction": "就「差異化廠商：短期虧損（short-run loss）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "忽略MR，選擇需求價格等於MC的產量。",
                    "feedback": "無約束的單一價格賣方以MR = MC選產量，再從需求／AR讀價格。邊際成本定價情境明確比較受規管的另一方案。"
                  },
                  {
                    "key": "construct",
                    "label": "加上邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "向下MR在Q = 4與水平MC = 2相交，辨認無約束的單一價格產量決策；需求決定該數量的價格。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(2.667, 11)至(10, 4.4)。選定產量與需求價格位於(4, 6)。邊際決策參照：MR = MC位於(4, 2)。選定產量的AC位於(4, 8)。選定產量與需求價格——數量讀值破線：破線路徑 (4, 0) → (4, 6)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。平均經濟成本（AC）遵循 AC = 2 + 24/Q，Q為正；它在相關範圍內下降。",
                "instruction": "就「差異化廠商：短期虧損（short-run loss）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "在Q = 4，需求給出P = 6，新增AC點為8，因此此產量的價格不足以支付平均經濟成本。"
                  },
                  {
                    "key": "misconception1",
                    "label": "在選定產量從MR而非需求／AR讀取價格。",
                    "feedback": "MR = MC選擇無約束的類壟斷產量。售價來自該產量的需求／AR，與MR不同；規管另作辨認。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 經濟虧損長方形的陰影多邊形頂點為 (0, 6) → (4, 6) → (4, 8) → (0, 8)。",
                "instruction": "就「差異化廠商：短期虧損（short-run loss）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "把利潤長方形塗在價格與MC之間，而非AC。",
                    "feedback": "總經濟利潤採用平均總經濟成本：(P − AC) × Q。MC描述額外一單位，量度總利潤或虧損時不能取代AC。"
                  },
                  {
                    "key": "compare",
                    "label": "加上經濟虧損長方形。",
                    "feedback": "長方形涵蓋價格6與AC 8之間的四單位，量度經濟虧損8，而非邊際成本差距。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "先在MR = 10 − 2Q及MC = 2找出Q = 4的MR = MC。從AR = 10 − Q讀價格6，再讀AC = 8。長方形寬4、高2，代表虧損8。",
            "explanation": {
              "question": "為何產量與利潤決策須分開？",
              "options": [
                "只要短期收益支付可變成本，MR = MC可辨認虧損最少的產量。",
                "MR = MC總能保證正經濟利潤。"
              ],
              "answer": 0,
              "feedback": [
                "此處假設AVC不大於價格；固定成本仍可使P < AC並造成經濟虧損。",
                "邊際值相等不代表P大於AC；正常利潤與虧損都可能。"
              ]
            },
            "extension": null
          },
          {
            "key": "longRun",
            "title": "長期相切與剩餘產能（excess capacity）",
            "assumption": "假設自由進出、差異化產品及所述成本／需求設定。示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。",
            "limitation": "結果是在進入假設下的基準，並不能確立所有現實差異化市場均達到此精確切點。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–16。以下座標為（水平，垂直）。 平均收益／需求（AR）連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "ar": "平均收益／需求（AR）",
              "mr": "邊際收益（MR）",
              "mc": "邊際成本（MC）",
              "ac": "平均經濟成本（AC）",
              "chosenOutput": "選定產量與需求價格",
              "marginalIntersection": "邊際決策參照：MR = MC",
              "averageCost": "選定產量的AC",
              "minimumAC": "最低平均成本點",
              "excessCapacity": "剩餘產能的產量差距",
              "chosenOutputQ": "選定產量與需求價格——數量讀值破線",
              "chosenOutputP": "選定產量與需求價格——縱軸讀值破線",
              "minimumACQ": "最低平均成本點——數量讀值破線",
              "minimumACP": "最低平均成本點——縱軸讀值破線"
            },
            "prediction": {
              "question": "進入使代表性差異化廠商的需求下降，直至AR與AC相切。它必須在最低AC生產嗎？",
              "options": [
                "不必：切點可在最低AC左方。",
                "必須：零經濟利潤總是代表最低AC。"
              ],
              "answer": 0,
              "feedback": [
                "此處在Q = 8/3有AR = AC；最低AC則在Q = √(64/3)，約4.62。",
                "零利潤要求選定產量有P = AC，而非AC最小化。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 邊際收益（MR）連接(0, 10) → (5, 0)。 邊際成本（MC）連接(0, 2) → (10, 12)。",
                "instruction": "就「長期相切與剩餘產能（excess capacity）」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上邊際收益（MR）；邊際成本（MC）。",
                    "feedback": "向下MR在Q ≈ 2.667與上升MC相交，辨認差異化廠商的產量決策；價格須從另一條需求曲線讀取。"
                  },
                  {
                    "key": "misconception0",
                    "label": "忽略MR，選擇需求價格等於MC的產量。",
                    "feedback": "無約束的單一價格賣方以MR = MC選產量，再從需求／AR讀價格。邊際成本定價情境明確比較受規管的另一方案。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 平均經濟成本（AC）是以取樣點繪成的平滑曲線，顯示由(1.185, 11.593)至(10, 8.067)。選定產量與需求價格位於(2.667, 7.333)。邊際決策參照：MR = MC位於(2.667, 4.667)。選定產量的AC位於(2.667, 7.333)。選定產量與需求價格——數量讀值破線：破線路徑 (2.667, 0) → (2.667, 7.333)。選定產量與需求價格——縱軸讀值破線：破線路徑 (0, 7.333) → (2.667, 7.333)。平均經濟成本（AC）遵循 AC = 2 + Q/2 + 10.667/Q，Q為正；它下降至最低點後再上升。",
                "instruction": "就「長期相切與剩餘產能（excess capacity）」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "在選定產量從MR而非需求／AR讀取價格。",
                    "feedback": "MR = MC選擇無約束的類壟斷產量。售價來自該產量的需求／AR，與MR不同；規管另作辨認。"
                  },
                  {
                    "key": "read",
                    "label": "加上平均經濟成本（AC）；選定產量與需求價格；邊際決策參照：MR = MC；選定產量的AC，並附讀取座標軸的破線輔助線。",
                    "feedback": "選定點讀出Q ≈ 2.667、P ≈ 7.333，需求在此與AC相切，因此即使價格超過MC，經濟利潤仍為零。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 最低平均成本點位於(4.619, 6.619)。剩餘產能的產量差距：定向箭嘴 (2.667, 1) → (4.619, 1)。最低平均成本點——數量讀值破線：破線路徑 (4.619, 0) → (4.619, 6.619)。最低平均成本點——縱軸讀值破線：破線路徑 (0, 6.619) → (4.619, 6.619)。",
                "instruction": "就「長期相切與剩餘產能（excess capacity）」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上最低平均成本點；剩餘產能的產量差距，並附讀取座標軸的破線輔助線。",
                    "feedback": "AC最低點在Q ≈ 4.619，超過選定Q ≈ 2.667；水平差距量度即使零經濟利潤仍存在的剩餘產能。"
                  },
                  {
                    "key": "misconception2",
                    "label": "因經濟利潤為零，把選定產量標為最低AC產量。",
                    "feedback": "零經濟利潤出現在需求與AC於Q ≈ 2.667相切之處。最低AC在更右方Q ≈ 4.619，所以即使有正常利潤，產量差距仍在。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "在Q = 8/3，AR = AC = 22/3、MR = MC = 14/3。AR與AC在該處斜率同為−1。水平剩餘產能箭嘴由8/3指向約4.62，即最低AC數量。沒有正利潤長方形。",
            "explanation": {
              "question": "為何零經濟利潤可與剩餘產能並存？",
              "options": [
                "相切要求需求曲線是水平。",
                "廠商向下的需求，在AC達最低點之前與AC相切。"
              ],
              "answer": 1,
              "feedback": [
                "水平需求曲線描述競爭基準；此差異化廠商仍有向下需求。",
                "差異化產生向下AR，進入則可消除超額利潤；切點仍可在下降AC上。"
              ]
            },
            "extension": null
          }
        ]
      },
      {
        "id": "2.11.monopolistic_demand_diagram",
        "scope": "hl",
        "title": "壟斷性競爭與壟斷的需求彈性比較圖",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "substitutes",
            "title": "在相同價格與數量比較需求",
            "assumption": "示例為把經濟利潤最大化的單一產品廠商；曲線描述同一期。正常利潤計入經濟成本。在相同P、Q及軸比例比較兩曲線。",
            "limitation": "曲線展示可替代程度的假設，並非實證估計或普遍彈性排序。",
            "baseDescription": "圖表面板: 橫軸：每期數量（Q）, 0–10。縱軸：每單位價格、成本或收益（P）, 0–12。以下座標為（水平，垂直）。 壟斷需求基準連接(0, 10) → (10, 0)。",
            "labels": {
              "main": "圖表面板",
              "q": "每期數量（Q）",
              "p": "每單位價格、成本或收益（P）",
              "monopolyDemand": "壟斷需求基準",
              "differentiatedDemand": "差異化廠商需求",
              "reference": "共同參照點",
              "response": "示例反應",
              "referenceQ": "共同參照點——數量讀值破線",
              "referenceP": "共同參照點——縱軸讀值破線"
            },
            "prediction": {
              "question": "兩曲線均經過(4,6)。若差異化廠商需求為P = 8 − 0.5Q，而壟斷D = 10 − Q，哪條局部彈性較大？",
              "options": [
                "壟斷曲線，只因其截距較高。",
                "在所述可替代程度假設下，是差異化廠商曲線。"
              ],
              "answer": 1,
              "feedback": [
                "單憑截距不能量度彈性；須比較局部斜率及共同P/Q比率。",
                "在共同點，差異化廠商的|PED|為3，壟斷例子則為1.5。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 差異化廠商需求連接(0, 8) → (10, 3)。",
                "instruction": "就「在相同價格與數量比較需求」，建構首個有標示的關係。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception0",
                    "label": "在不同價格—數量點比較兩曲線，並只採用斜率。",
                    "feedback": "所述比較在(4,6)評估兩曲線，因此共同P/Q比率令局部彈性計算有意義。"
                  },
                  {
                    "key": "construct",
                    "label": "加上差異化廠商需求。",
                    "feedback": "新增較平坦的差異化廠商需求經過(4,6)，在相同座標軸上顯示其局部價格反應大於較陡壟斷比較曲線。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 共同參照點位於(4, 6)。共同參照點——數量讀值破線：破線路徑 (4, 0) → (4, 6)。共同參照點——縱軸讀值破線：破線路徑 (0, 6) → (4, 6)。",
                "instruction": "就「在相同價格與數量比較需求」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "read",
                    "label": "加上共同參照點，並附讀取座標軸的破線輔助線。",
                    "feedback": "輔助線把兩需求曲線的共同點固定於Q = 4、P = 6，維持P/Q不變，以作有意義的局部彈性比較。"
                  },
                  {
                    "key": "misconception1",
                    "label": "採用不同參照價格與數量比較兩個需求彈性。",
                    "feedback": "兩曲線均經過(4,6)。保留此共同P/Q參照可分離局部反應；MR = MC並非此需求曲線比較的一部分。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 示例反應：定向箭嘴 (3, 6) → (5, 6)。",
                "instruction": "就「在相同價格與數量比較需求」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception2",
                    "label": "在不同價格—數量點比較兩曲線，並只採用斜率。",
                    "feedback": "所述比較在(4,6)評估兩曲線，因此共同P/Q比率令局部彈性計算有意義。"
                  },
                  {
                    "key": "compare",
                    "label": "加上示例反應。",
                    "feedback": "在P = 6由Q = 3至5的水平箭嘴是反應比較提示，並非沿需求曲線的實際移動或新均衡。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "兩曲線交於(4,6)。水平箭嘴標出數量反應作比較提示，並非不同均衡之間的已量度移動。",
            "explanation": {
              "question": "為何須限定此彈性排序的適用範圍？",
              "options": [
                "它是共同點上關於替代品的示例假設，並非普遍市場結構定律。",
                "壟斷性競爭在每個市場的每個價格與數量，必須更富有彈性。"
              ],
              "answer": 0,
              "feedback": [
                "接近替代品可使個別需求反應較大，但實際反應取決於市場定義、替代品與評估點。",
                "局部例子不能確立跨產品或評估點的普遍排序。"
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  },
  "2.12": {
    "title": "公平與市場結果",
    "summary": "市場收入為何可能不同？",
    "question": "市場收入為何可能不同？",
    "terms": [
      {
        "term": "income",
        "definition": "按一段期間量度的收入流量，如工資及租金。"
      },
      {
        "term": "wealth",
        "definition": "在某時點量度的資產減負債存量。"
      },
      {
        "term": "equity",
        "definition": "按明示價值準則評估的公平，不假設等於相等。"
      }
    ],
    "sections": [
      {
        "id": "inequality",
        "heading": "收入與財富",
        "body": [
          "Income是一段期間收到的流量；wealth是時點資產減負債的存量。所有權、教育機會、議價能力及機遇不同，可令市場結果不均。財富能創收入，隨時間強化差距。",
          "住戶向企業供勞力等要素，收工資、租金、利息及利潤。土地、金融資產、技能、健康、議價能力及就業機會差異造成要素收入不均。即使市場出清，企業要素支出也不會自動平均分配。",
          "一戶月薪$2,000並有$50,000資產、年回報4%；另一戶同薪無資產。擁有者額外每年收$2,000，即每月約$166.67。若儲部分收入，資產存量可增並創更多未來收入。財富與收入有關，但單位及時段不同。",
          "繼承及教育／信貸機會不均可延續代際差距。稅、轉移支付及公共服務可改可支配收入和機會，但有融資與誘因取捨。不均結果本身不能定公平；equity須明示準則。"
        ],
        "limitation": "各成因相對重要性因社會而異。"
      }
    ],
    "modelPrompt": "利用例題找出機制，再解釋一項可改變結論的條件。",
    "modelAssumption": "例子只抽取一項機制；除非另有說明，其他相關條件不變。",
    "modelLimitation": "這些示例只分離一項機制，不能確立普遍預測或因果實證結論。",
    "worked": {
      "prompt": "A、B兩戶月薪各$2,000；A有$50,000資產年收益4%，B無資產。",
      "steps": [
        "A每年資產收入$50,000×0.04=$2,000。",
        "換為月流量：$2,000/12≈$166.67。",
        "稅及轉移前，A月收入約$2,166.67，B為$2,000。",
        "A儲起全部資產收入，估值變動前財富升至$52,000，同收益率可創更多未來收入。"
      ],
      "conclusion": "相同工資不代表總收入或財富相同；所有權把今日資產存量連至未來收入流量。"
    },
    "quiz": {
      "question": "兩戶薪金相同，其中一戶收繼承物業租金，可推論甚麼？",
      "options": [
        "工資相同，財富必須相等。",
        "所有權產生要素收入流量，故總收入可不同。",
        "租金是存量，物業是流量。",
        "例子證明所有不均結果都不公平。"
      ],
      "feedback": [
        "勞動收入相同不代表資產所有相同。",
        "正確：租金加在工資之上，把財富連至住戶總收入。",
        "物業財富在時點量度；租金在一段期間收取。",
        "公平須價值準則；不均結果本身不能定normative判斷。"
      ]
    },
    "challenge": {
      "hint": "區分時點存量與時段流量。"
    },
    "coverage": [
      {
        "id": "2.12.inequality",
        "point": "自由市場與收入財富分配不均"
      },
      {
        "id": "2.12.circular_flow_diagram",
        "point": "展示不均成因的circular-flow圖"
      }
    ],
    "diagrams": [
      {
        "id": "2.12.circular_flow_diagram",
        "scope": "hl",
        "title": "展示不平等成因的循環流程圖（circular flow）",
        "introduction": "先預測經濟結果，依次建構有標示的圖層，比較初始與最終圖，再解釋機制。本引導例子支援練習，並不代表已具備獨立掌握的能力。",
        "scenarios": [
          {
            "key": "inequality",
            "title": "收入組別與有條件的資產回饋",
            "assumption": "本圖是簡化流程圖。布局座標代表位置，而非價格或數量；實物流與貨幣流以標示和方向區分。",
            "limitation": "要素擁有權不均是其中一個可能的不平等成因，並非唯一成因。儲蓄、回報、債務、轉移與資產價格均影響財富。",
            "baseDescription": "圖表面板: 只表示布局；沒有經濟量的軸刻度。 較高收入住戶部門方框。廠商（firms）部門方框。實物生產要素：住戶 → 廠商；定向路徑由較高收入住戶至廠商（firms）。 要素收入80：廠商 → 較高收入住戶；定向路徑由廠商（firms）至較高收入住戶。",
            "labels": {
              "main": "圖表面板",
              "flowX": "流程布局：水平位置",
              "flowY": "流程布局：垂直位置",
              "households": "較高收入住戶",
              "firms": "廠商（firms）",
              "finance": "金融部門（financial sector）",
              "government": "政府（government）",
              "foreign": "對外部門（foreign sector）",
              "householdsLow": "較低收入住戶",
              "factors": "實物生產要素：住戶 → 廠商",
              "income": "要素收入80：廠商 → 較高收入住戶",
              "goods": "實物物品與服務：廠商 → 住戶",
              "expenditure": "消費開支：住戶 → 廠商",
              "saving": "儲蓄20：較高收入住戶 → 金融部門",
              "investment": "投資開支（I）：金融部門 → 廠商",
              "tax": "稅款（T）：住戶 → 政府",
              "governmentSpending": "政府開支（G）：政府 → 廠商",
              "imports": "進口開支流失（M）：本地廠商 → 對外部門",
              "exports": "出口收入注入（X）：對外部門 → 本地廠商",
              "factorsLow": "實物生產要素：較低收入住戶 → 廠商",
              "incomeLow": "要素收入20：廠商 → 較低收入住戶",
              "savingLow": "儲蓄2：較低收入住戶 → 金融部門",
              "taxLow": "稅款：較低收入住戶 → 政府",
              "transfers": "轉移付款：政府 → 較低收入住戶",
              "assetFeedback": "有條件的資產收入回饋：金融部門 → 住戶"
            },
            "prediction": {
              "question": "兩組收入為80與20，儲蓄為20與2。其財富必須維持相等嗎？",
              "options": [
                "不必：儲蓄不均可導致資產累積分歧。",
                "必須：同一經濟保證資產擁有權相等。"
              ],
              "answer": 0,
              "feedback": [
                "儲蓄20與2帶來不同的潛在資產增量，但取決於回報、負債與資金投向。",
                "同屬一個經濟體系不會使收入、儲蓄或財富相等。"
              ]
            },
            "construction": [
              {
                "key": "construct",
                "description": "圖表面板: 金融部門（financial sector）部門方框。政府（government）部門方框。對外部門（foreign sector）部門方框。較低收入住戶部門方框。",
                "instruction": "在起始的住戶—廠商核心以外，須加上哪些部門方框以區分參與者？",
                "choices": [
                  {
                    "key": "construct",
                    "label": "加上金融部門（financial sector）；政府（government）；對外部門（foreign sector）；較低收入住戶。",
                    "feedback": "新增方框分開金融、政府、對外部門及較低收入住戶，讓不同機構與住戶流量可被追蹤。"
                  },
                  {
                    "key": "misconception0",
                    "label": "把金融、政府及對外部門併入廠商方框。",
                    "feedback": "獨立部門方框可分別追蹤儲蓄與投資、稅款與開支、進出口付款的流向。合併部門會掩蓋流失／注入機制。"
                  }
                ],
                "answer": "construct"
              },
              {
                "key": "read",
                "description": "圖表面板: 實物物品與服務：廠商 → 住戶；定向路徑由廠商（firms）至較高收入住戶。 消費開支：住戶 → 廠商；定向路徑由較高收入住戶至廠商（firms）。 實物生產要素：較低收入住戶 → 廠商；定向路徑由較低收入住戶至廠商（firms）。 要素收入20：廠商 → 較低收入住戶；定向路徑由廠商（firms）至較低收入住戶。",
                "instruction": "就「收入組別與有條件的資產回饋」，讀取所標示的經濟結果。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "misconception1",
                    "label": "把物品與消費開支均由廠商指向住戶。",
                    "feedback": "物品與服務由廠商流向住戶；住戶開支則流回廠商。兩者是方向相反、互相對應的實物流與貨幣流。"
                  },
                  {
                    "key": "read",
                    "label": "加上實物物品與服務：廠商 → 住戶；消費開支：住戶 → 廠商；實物生產要素：較低收入住戶 → 廠商；要素收入20：廠商 → 較低收入住戶。",
                    "feedback": "方向相反的物品與消費付款箭嘴完成較高收入住戶—廠商循環；較低收入的要素與收入20箭嘴顯示以勞動投入交換收入。"
                  }
                ],
                "answer": "read"
              },
              {
                "key": "compare",
                "description": "圖表面板: 儲蓄20：較高收入住戶 → 金融部門；定向路徑由較高收入住戶至金融部門（financial sector）。 投資開支（I）：金融部門 → 廠商；定向路徑由金融部門（financial sector）至廠商（firms）。 稅款（T）：住戶 → 政府；定向路徑由較高收入住戶至政府（government）。 政府開支（G）：政府 → 廠商；定向路徑由政府（government）至廠商（firms）。 進口開支流失（M）：本地廠商 → 對外部門；定向路徑由廠商（firms）至對外部門（foreign sector）。 出口收入注入（X）：對外部門 → 本地廠商；定向路徑由對外部門（foreign sector）至廠商（firms）。 儲蓄2：較低收入住戶 → 金融部門；定向路徑由較低收入住戶至金融部門（financial sector）。 稅款：較低收入住戶 → 政府；定向路徑由較低收入住戶至政府（government）。 轉移付款：政府 → 較低收入住戶；定向路徑由政府（government）至較低收入住戶。 有條件的資產收入回饋：金融部門 → 住戶；定向路徑由金融部門（financial sector）至較高收入住戶。",
                "instruction": "就「收入組別與有條件的資產回饋」，完成圖形比較。哪幅圖符合所述情境？",
                "choices": [
                  {
                    "key": "compare",
                    "label": "加上儲蓄20：較高收入住戶 → 金融部門；投資開支（I）：金融部門 → 廠商；稅款（T）：住戶 → 政府；政府開支（G）：政府 → 廠商；進口開支流失（M）：本地廠商 → 對外部門；出口收入注入（X）：對外部門 → 本地廠商；儲蓄2：較低收入住戶 → 金融部門；稅款：較低收入住戶 → 政府；轉移付款：政府 → 較低收入住戶；有條件的資產收入回饋：金融部門 → 住戶。",
                    "feedback": "新增箭嘴區分儲蓄20與2，以及政府向較低收入住戶的轉移付款，並顯示本地流失與注入；資產收入回報是對較高收入住戶的有條件回饋。"
                  },
                  {
                    "key": "misconception2",
                    "label": "把儲蓄、稅款和進口付款畫成對本地開支的注入。",
                    "feedback": "本例S、T、M是本地開支流的流失；I、G、X則是相反方向的注入，流程標示可區分兩者。"
                  }
                ],
                "answer": "compare"
              }
            ],
            "comparison": "較高收入組獲80，較低收入組獲20，合共100。儲蓄流量為20與2。稅款與轉移付款可再分配；資產回饋箭嘴有條件。",
            "explanation": {
              "question": "為何金融部門至住戶的回饋箭嘴有條件？",
              "options": [
                "儲蓄本身與目前要素收入完全相同。",
                "儲蓄可能為日後產生收入的資產融資，但不會自動成為儲蓄者本人的生產性投資。"
              ],
              "answer": 1,
              "feedback": [
                "現有資產可產生收入，儲蓄則改變可能持有的資產；須區分這些概念。",
                "收入是每期流量；財富是資產減負債的存量。回報與擁有權隨時間連繫兩者。"
              ]
            },
            "extension": null
          }
        ]
      }
    ]
  }
};
if (typeof module !== 'undefined') module.exports = globalThis.ECON_TRANSLATIONS['zh-Hant-HK'];
