
//////////////////////////////////////////////////
//// single source of truth about my skills
//////////////////////////////////////////////////

const skills = [
    // C/C++
    {
      skill: 'C++ Templates',
      pl: 'C++',
      hard_soft: 'hard',
      lvl: 'advanced',
      position: ''
    },
    {
      skill: 'C++ Language',
      pl: 'C++',
      hard_soft: 'hard',
      lvl: 'average',
      position: ''
    },
    {
      skill: 'C++ STL',
      pl: 'C++',
      hard_soft: 'hard',
      lvl: 'average',
      position: ''
    },
    {
      skill: 'OOP',
      pl: ['C++', 'Python', 'JS', ],
      hard_soft: 'hard',
      lvl: 'advanced',
      position: 'backend',
    },
    {
      skill: 'C++11 and above',
      pl: 'C++',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'backend',
    },
    {
      skill: 'C language',
      pl: ['C', 'C++'],
      hard_soft: 'hard',
      lvl: 'average',
      position: 'backend',
    },
    {
      skill: `C/C++ workflow tools`,
      pl: ['C', 'C++'],
      hard_soft: 'hard',
      lvl: 'average',
      position: '',
    },
    {
      skill: 'System calls C library functions',
      pl: ['C', 'C++'],
      hard_soft: 'hard',
      lvl: 'average',
      position: '',
    },
    {
      skill: 'C/C++ manual memory management',
      pl: ['C', 'C++'],
      hard_soft: 'hard',
      lvl: 'average',
      position: '',
    },
    {
      skill: 'Assembly language knowledge(NASM)',
      pl: ['C', 'C++'],
      hard_soft: 'hard',
      lvl: 'average',
      position: '',
    },
    // Python
    {
      skill: 'Python programming language',
      pl: 'Python',
      hard_soft: 'hard',
      lvl: 'advanced',
      position: 'backend',
    },
    {
      skill: 'Python core library',
      pl: 'Python',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'backend',
    },
    {
      skill: 'Django',
      pl: 'Python',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'backend',
    },
    {
      skill: 'numpy, scipy',
      pl: 'Python',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: '',
    },
    {
      skill: 'plotting',
      pl: 'Python',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: '',
    },
    // JS
    {
      skill: 'vanila JS',
      pl: 'JS',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'backend',
    },
    {
      skill: 'CSS&HTML',
      pl: 'JS',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'backend',
    },
    {
      skill: 'NodeJS',
      pl: 'JS',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'backend',
    },
    {
      skill: 'MySQL',
      pl: ['JS', 'Python'],
      hard_soft: 'hard',
      lvl: 'average',
      position: 'backend',
    },
    {
      skill: 'JQuery',
      pl: 'JS',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'backend',
    },
    {
      skill: 'Nginx',
      pl: ['JS', 'Python'],
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'backend',
    },
    {
      skill: 'Express.js',
      pl: 'JS',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'backend',
    },
    // Java
    {
      skill: 'Java language basics',
      pl: 'java',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any',
    },
    {
      skill: 'vertx',
      pl: 'java',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any',
    },
    // other
    {
      skill: 'Asynchronous programming',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any'
    },
    {
      skill: 'Docker',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'any',
    },
    {
      skill: 'Linux cmd user',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'advanced',
      position: 'any',
    },
    {
      skill: 'Networking protocols',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'backend',
    },
    {
      skill: 'Algorithms and data structures',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'any',
    },
    {
      skill: 'Design patterns',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any',
    },
    {
      skill: 'TDD',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any',
    },
    {
      skill: 'git/github',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'advanced',
      position: 'any',
    },
    {
      skill: 'kafka',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any',
    },
    {
      skill: 'elasticsearch',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any',
    },
    // soft skills
    {
      skill: 'Effective communication',
      pl: '',
      hard_soft: 'soft',
      lvl: '',
      position: '',
    },
    {
      skill: 'Teamwork',
      pl: '',
      hard_soft: 'soft',
      lvl: '',
      position: '',
    },
    {
      skill: 'Patience',
      pl: '',
      hard_soft: 'soft',
      lvl: '',
      position: '',
    },
    {
      skill: 'Open-mindedness',
      pl: '',
      hard_soft: 'soft',
      lvl: 'advanced',
      position: '',
    },
    {
      skill: 'Problem solving',
      pl: '',
      hard_soft: 'soft',
      lvl: 'advanced',
      position: '',
    },
    {
      skill: 'Creativity',
      pl: '',
      hard_soft: 'soft',
      lvl: 'advanced',
      position: '', 
    },
    {
      skill: 'Time management',
      pl: '',
      hard_soft: 'soft',
      lvl: '',
      position: '', 
    },
  ];

  const PLs = {
    "C++": "cpp.png",
    Python: "python.png",
    C: "c.png",
    JS: "js.png",
    Java: "java.png",
  };

  const lvls = [ "beginner", "average", "advanced"];
  const skillType = [ "hard", "soft" ];
  const position = [ "backend" ];

