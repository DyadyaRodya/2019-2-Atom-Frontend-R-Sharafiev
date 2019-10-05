/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */

export default function nonUniqueElements(data) {
  var i = 0; // number of element which I view
  while(i< data.length)
  {
    var j = 0; // number of element with which I compare
    var canBeDaleted = true; // flag: for unique true, for non unique false
    while (j < data.length)
    {
      if (i == j)
        j++;
      if (data[i] == data[j])
      {
        canBeDaleted = false; // found the same element
        break;
      }
      j++;
    }
    if(canBeDaleted) 
      data.splice(i,1); // it was unique
    else
      i++;
  }
  return data
}
