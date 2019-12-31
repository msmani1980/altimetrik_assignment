console.log(solution([ [1,1,0], [1,1,1], [0,1,1] ]))
console.log(solution([ [1,1,0], [1,1,0], [0,0,1] ]))

function solution(M) {
    let str='';
    let count1 =0;
    let count2 =0;
    for(let i=0;i<M.length;i++)
    {
        for(let j=0;j<i;j++)
        {
            if(M[i][j]===1)
            {
               count1++;
            }
            else if(M[i][j]===0)
            {
                count2++;
            }
                
            
        } 
            
    }
    console.log(count1, count2)
    if(count1===1)
    {
        return("0,1,2");
    }
    if(count1===2)
    {
        return("0,1|2");
    }
    // M is now your relationship matrix SxS
}