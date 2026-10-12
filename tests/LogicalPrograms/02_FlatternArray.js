let array = [1,2,[3,[4,5]]];

function flatternArray(array)
{
   let result = [];
   for(let num of array)
    {
        if(Array.isArray(num))
        {
          result = result.concat(flatternArray(num));
        }
        else
        {
           result.push(num);
        }
    } 

  return result;
}
console.log(flatternArray(array));


