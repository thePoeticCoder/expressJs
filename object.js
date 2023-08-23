const users= [
    { f:'a',l:'b',a:23},
    { f:'b',l:'c',a:29},
    { f:'j',l:'h',a:2},
    { f:'q',l:'m',a:29},
    { f:'z',l:'c',a:28},
    { f:'s',l:'f',a:23}
];

const fullName=users.map((user)=>user.f+" "+user.l);
//console.log(fullName);//[ 'a b', 'b c', 'j h', 'q m', 'z c', 's f' ]