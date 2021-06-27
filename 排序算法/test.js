var quickSort=function(arr,left,right){

  // 如果左边界比右边界大，返回结果，排序结束
  if(left>right){
    return;
  }

  // 默认值处理，如果有传入left和right参数，就赋值这个参数，否则就赋值后面的默认值
  left=left||0;
  right=right||arr.length-1;

  // 定义移动的左游标和右游标
  var leftPoint=left;
  var rightPoint=right;

  // 定义一个基准数
  var temp=arr[left];

  // 判断左右游标是否重合，如果重合，循环结束
  while(leftPoint!=rightPoint){

    // 基准数在左边，因此从右边开始一个个扫描
    // 从右到左，寻找小于基准数的数，且左游标要小于右游标
    // 如果数字大于基准数（证明不符合条件），寻找下一个
    // 直到找到比基准数小的数，游标停止递减
    while(arr[rightPoint]>=temp&&leftPoint<rightPoint){
      rightPoint--;
    }
    // 从左到右，寻找大于基准数的数，且左游标要小于右游标
    // 如果数字小于基准数（证明不符合条件），寻找下一个
    // 直到找到比基准数小的数，游标停止递增
    while(arr[leftPoint]<=temp&&leftPoint<rightPoint){
      leftPoint++;
    }

    // 如果左游标小于右游标，则交换两个数字的位置
    if(leftPoint<rightPoint){
      var changeNumber=arr[leftPoint];
      arr[leftPoint]=arr[rightPoint];
      arr[rightPoint]=changeNumber;
    }
    // 进行下一次循环，直到两个游标重合位置
  }

  // 重合之后，交换基准数
  arr[left]=arr[leftPoint];
  arr[leftPoint]=temp;

  // 递归操作左右两个数组
  quickSort(arr,left,leftPoint-1);
  quickSort(arr,leftPoint+1,right);

  return arr;
};
var numArr=[4,5,5,6];
console.log(quickSort(numArr));