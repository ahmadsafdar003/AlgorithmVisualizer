import sort from "./sort.png";
import binSearch from "./images/binaryTree.png";
import turing from './images/turing.jpg';
import Recursion from './images/Recursion.jpg';
export function getDetails(){
   return [
      
       {
           id:2,
           title:"Recursion Tree",
           description:"The process in which a function calls itself directly or indirectly is called recursion. Work in progress",
           route:"/graph",
           img:Recursion
       },
       {
           id:3,
           title:"Sorting Algorithm",
           description:"Compare different sorting algorithms",
           route:"/sort",
           img:sort
       },
       {
           id:4,
           title:"Recursive Sorting",
           description:"Compare different recursive sorting algorithms",
           route:"/recursivesort",
           img:sort
       },
      
       {
           id:6,
           title:"Turing Machine",
           description:"A Turing machine is a mathematical model of computation that defines an abstract machine that manipulates symbols on a strip of tape according to a table of rules",
           route:"/turing",
           img:turing
       },
      
       {
           id:9,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       },
    
   ]
}