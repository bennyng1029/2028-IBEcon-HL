# Task 1 scope correction

Moved the numerical ceiling and floor teaching from lesson 2.7's common controls section to its existing HL section, preserving section IDs and order. The common section retains qualitative shortage, surplus and stakeholder instruction. The worked prompt now explicitly identifies the calculation as an HL extension, and the numerical quiz is tagged HL. The adjacent challenge asks for qualitative explanation and remains common.

Added a focused content test covering the common qualitative section, the numerical examples' HL section, the worked label, and quiz and challenge scopes. This extends the canonical English data and existing test suite; no new function, module or dependency was introduced. As recorded in the handoff, the repository has no graph; targeted reads of the exact handoff, schema, verification finding and owned files are the justified graphify fallback.

Checks, in order: `node --check assets/js/content-en.js`, `node --check tests/content.test.js`, and `node --test tests/content.test.js` all exited 0. This implementation check is not fresh-context functional verification or a translation review.
