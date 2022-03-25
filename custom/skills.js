/* To customize it, just 
 * 1. Append new skill to `skills` array
 * 2. Upload it's icon to `img/skills/`
 * 3. Read at the end of this file
 */

/* icons - https://icons8.com/  (100x100px)*/ 

const skills = [
    // C/C++
    {
      skill: 'APR',
      pl: 'C',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: ''
    },
    {
      skill: 'openSSL API',
      pl: 'C',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: ''
    },
    {
      skill: 'GNU autotools',
      pl: [ 'C++', 'C' ],
      hard_soft: 'hard',
      lvl: 'beginner',
      position: ''
    },
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
      skill: 'Django',
      pl: 'Python',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'backend',
    },
    {
      skill: 'numpy, scipy, pandas',
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
    {
      skill: 'telethon',
      pl: 'Python',
      hard_soft: 'hard',
      lvl: 'average',
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
      skill: 'Java',
      pl: 'java',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'any',
    },
    {
      skill: 'vertx',
      pl: 'java',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any',
    },
    {
      skill: 'spring',
      pl: 'java',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any',
    },
    // C#
    {
      skill: 'C#',
      pl: 'C#',
      hard_soft: 'hard',
      lvl: 'advanced',
      position: 'any'
    },   
    {
      skill: 'Telegram.Bot',
      pl: 'C#',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'any'
    },
    {
      skill: 'Hangfire',
      pl: 'C#',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any'
    },
    {
      skill: 'ASP.NET',
      pl: 'C#',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'backend'
    },
    {
      skill: 'EF',
      pl: 'C#',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'backend'
    },
    {
      skill: 'NUnit, XUnit, MsTest',
      pl: 'C#',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'any'
    },
    {
      skill: 'Selenium',
      pl: [ 'C#', 'JS' ],
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any'
    },
    // other
    {
      skill: 'Lisp',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'any',
    },
    {
      skill: 'Racket',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any',
    },
    {
      skill: 'Prolog',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'any',
    },
    {
      skill: 'shell',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'any',
    },
    {
      skill: 'Linux',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'advanced',
      position: 'any',
    },
    {
      skill: 'Powershell',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'beginner',
      position: 'any',
    },

    {
      skill: 'MySQL',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'backend',
    },
    {
      skill: 'PostgreSQL',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'backend',
    },
    {
      skill: 'MongoDB',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'backend',
    },

    {
      skill: 'Jenkins',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'average',
      position: 'any'
    },
    {
      skill: 'Asynchronous programming',
      pl: 'any',
      hard_soft: 'hard',
      lvl: 'advanced',
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
      skill: 'Applied math',
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
      lvl: 'average',
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
      skill: 'Mentoring',
      pl: '',
      hard_soft: 'soft',
      lvl: '',
      position: '',
    },
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
      skill: 'Open-mindness',
      pl: '',
      hard_soft: 'soft',
      lvl: '',
      position: '',
    },
    {
      skill: 'Problem solving',
      pl: '',
      hard_soft: 'soft',
      lvl: '',
      position: '',
    },
    {
      skill: 'Creativity',
      pl: '',
      hard_soft: 'soft',
      lvl: '',
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


// have you added the new 
// 1. Programming language?
const PLs = {
  'C++': 'cpp.png',
  'Python': 'python.png',
  'C': 'c.png',
  'JS': 'js.png',
  'Java': 'java.png',
  'C#': 'csharp.png',
};

// 2. Knowledge level?
const lvls = [ 'beginner', 'average', 'advanced'];
// 3. Skill type?
const skillType = [ 'hard', 'soft' ];
// 4. Work position?
const position = [ 'backend' ];

// if so, add new type to one of this arrays(appropriate one)

// P. S. this arrays are here because it is more performant then 
// getting it from `skills` array every time the user loads the page
