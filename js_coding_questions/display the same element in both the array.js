const arr = [
    {
      catg: 'Category Wise Analysis',
      catg_Key: '7',
      No: 9,
    },
    {
      catg: 'College wise Analysis',
      catg_Key: 'jeeadv',
      No: 3,
    },
    {
      catg: 'Course Wise Analysis',
      catg_Key: 'jeeadv_2020',
      No: 12,
    },
    {
      catg: 'subject Wise Analysis',
      catg_Key: '2020',
      No: 125,
    },
  ];
  const arr1 = [
    {
      catg: 'Analysis',
      catg_Key: '7',
      No: 9,
    },
    {
      catg: 'College wise Analysis',
      catg_Key: 'jeeadv',
      No: 3,
    },
    {
      catg: 'Course Wise Analysis',
      catg_Key: 'jeeadv_2020',
      No: 12,
    },
  
    {
      catg: 'Chapter Wise Analysis',
      catg_Key: '2024',
      No: 21,
    },
  ];
  const result=[];
  for (let value of arr){
      for (let second of arr1) {
          if (value.No === second.No && value.catg === second.catg) {
              result.push(value)
          }
      }
  }
  console.log(result)
  
  