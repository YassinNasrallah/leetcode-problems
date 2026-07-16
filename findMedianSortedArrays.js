var findMedianSortedArrays = function(nums1, nums2) {

let result = 0

let mergedArray = nums1.concat(nums2)
mergedArray.sort(function(a,b) {return a-b})

let Arraylength = mergedArray.length
let middle = Math.floor(Arraylength/2)

if(Arraylength%2 !==0){
   return result = mergedArray[middle]
} else return result = (mergedArray[middle - 1] + mergedArray[middle])/2








}