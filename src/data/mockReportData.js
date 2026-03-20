import logo from '@/assets/logo.svg'
import ev1 from '@/assets/ev1.png'

export const reportData = {
  testName: 'Fitness Tracker Usability Evaluation',
  reportType: 'Heuristic Evaluation Report',
  userName: 'Jane Doe',
  author: 'UX Research Team',
  date: 'March 2026',
  logo: logo,

  description:
    'Evaluation of a fitness tracking application to identify usability issues.',

  conclusion: `
    This heuristic evaluation identified several usability
    issues affecting user control and consistency.
    The most critical issue is the inability to undo actions.
  `,

  overallScore: 43,

  options: [
    { name: 'Yes', description: 'Meets the heuristic', value: 1 },
    { name: 'No', description: 'Does not meet the heuristic', value: 0.5 },
  ],

  heuristics: [
    {
      id: 'H1',
      name: 'System Status',
      percentage: 70,
      questions: [
        {
          question: 'Is system feedback visible?',
          evaluator: 'Ev1',
          answer: 'Yes',
          value: 1,
        },
      ],
    },
    {
      id: 'H2',
      name: 'Real-world Match',
      percentage: 50,
      questions: [
        {
          question: 'Does language match real-world terminology?',
          evaluator: 'Ev1',
          answer: 'No',
          value: 0.5,
        },
      ],
    },
    {
      id: 'H3',
      name: 'User Control and Freedom',
      percentage: 30,
      questions: [
        {
          question: 'Can users undo actions?',
          evaluator: 'Ev1',
          answer: 'No',
          value: 0.5,
        },
      ],
    },
    {
      id: 'H4',
      name: 'Consistency & Standards',
      percentage: 15,
      questions: [
        {
          question: 'Are icons consistent across screens?',
          evaluator: 'Ev1',
          answer: 'No',
          value: 0.5,
        },
      ],
    },
  ],

  findings: [
    {
      title: 'Users cannot undo actions',
      severity: 'Critical',
      heuristic: 'H3',
      evidence: 'Deleting a workout permanently removes data.',
      recommendation: 'Add undo functionality or confirmation dialog.',
      image: ev1,
    },
    {
      title: 'Inconsistent navigation',
      severity: 'Major',
      heuristic: 'H4',
      evidence: 'Bottom navigation differs across screens.',
      recommendation: 'Use a consistent navigation bar.',
    },
    {
      title: 'Inconsistent iconography',
      severity: 'Minor',
      heuristic: 'H2',
      evidence: 'Save icon changes between screens.',
      recommendation: 'Standardize icons using design system.',
    },
  ],
}
