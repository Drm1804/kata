const solveHard = ([...a], [...b]) => b.every(ch => ~(a.indexOf(ch))&&a.splice(ch, 1))?a.length:0;