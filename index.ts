for(let i = 1; i < 15; i++)
{
    if(i % 2 !== 0)
    {
        continue;
    }

    if(i % 5 === 0 )
    {
        break;
    }

    console.log(i);
}