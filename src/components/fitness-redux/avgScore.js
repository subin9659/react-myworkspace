const avgScore = (source) => {
  if (source.length === 0) return [];

  console.log("---------연령별----------");
  let age10 = source.filter((it) => new RegExp("10").test(it.ageClass));
  let age20 = source.filter((it) => new RegExp("20").test(it.ageClass));
  let age30 = source.filter((it) => new RegExp("30").test(it.ageClass));
  let age40 = source.filter((it) => new RegExp("40").test(it.ageClass));
  let age50 = source.filter((it) => new RegExp("50").test(it.ageClass));
  let age60 = source.filter((it) => new RegExp("60").test(it.ageClass));
  let age70 = source.filter((it) => new RegExp("70").test(it.ageClass));

  console.log("---------10대 종목별 null 값---------");

  let age10item7 = age10.filter((it) => new RegExp("-").test(it.itemF007));
  let age10item12 = age10.filter((it) => new RegExp("-").test(it.itemF012));
  let age10item19 = age10.filter((it) => new RegExp("-").test(it.itemF019));
  let age10item20 = age10.filter((it) => new RegExp("-").test(it.itemF020));
  let age10item22 = age10.filter((it) => new RegExp("-").test(it.itemF022));

  console.log("---------10대 종목별 총 인원수---------");

  let totalAge10Item7 = age10.length - age10item7.length;
  let totalAge10Item12 = age10.length - age10item12.length;
  let totalAge10Item19 = age10.length - age10item19.length;
  let totalAge10Item20 = age10.length - age10item20.length;
  let totalAge10Item22 = age10.length - age10item22.length;

  console.log(age10);

  let sumAge10Item7 = 0;
  let sumAge10Item12 = 0;
  let sumAge10Item19 = 0;
  let sumAge10Item20 = 0;
  let sumAge10Item22 = 0;

  let avgAge10Item7 = 0;
  let avgAge10Item12 = 0;
  let avgAge10Item19 = 0;
  let avgAge10Item20 = 0;
  let avgAge10Item22 = 0;

  console.log("---------10대 종목별 값 합계 및 평균값---------");
  for (let i = 0; i < age10.length; i++) {
    if (age10[i].itemF007 != "-") {
      sumAge10Item7 = sumAge10Item7 + parseInt(age10[i].itemF007);
    }
  }
  avgAge10Item7 = sumAge10Item7 / totalAge10Item7;
  console.log(avgAge10Item7);

  for (let i = 0; i < age10.length; i++) {
    if (age10[i].itemF012 != "-") {
      sumAge10Item12 = sumAge10Item12 + parseInt(age10[i].itemF012);
    }
  }
  avgAge10Item12 = sumAge10Item12 / totalAge10Item12;

  for (let i = 0; i < age10.length; i++) {
    if (age10[i].itemF019 != "-") {
      sumAge10Item19 = sumAge10Item19 + parseInt(age10[i].itemF019);
    }
  }
  avgAge10Item19 = sumAge10Item19 / totalAge10Item19;

  for (let i = 0; i < age10.length; i++) {
    if (age10[i].itemF020 != "-") {
      sumAge10Item20 = sumAge10Item20 + parseInt(age10[i].itemF020);
    }
  }
  avgAge10Item20 = sumAge10Item20 / totalAge10Item20;

  for (let i = 0; i < age10.length; i++) {
    if (age10[i].itemF022 != "-") {
      sumAge10Item22 = sumAge10Item22 + parseInt(age10[i].itemF022);
    }
  }
  avgAge10Item22 = sumAge10Item22 / totalAge10Item22;

  console.log("---------20대 종목별 null 값---------");

  let age20item7 = age20.filter((it) => new RegExp("-").test(it.itemF007));
  let age20item12 = age20.filter((it) => new RegExp("-").test(it.itemF012));
  let age20item19 = age20.filter((it) => new RegExp("-").test(it.itemF019));
  let age20item20 = age20.filter((it) => new RegExp("-").test(it.itemF020));
  let age20item22 = age20.filter((it) => new RegExp("-").test(it.itemF022));

  console.log("---------20대 종목별 총 인원수---------");

  let totalAge20Item7 = age20.length - age20item7.length;
  let totalAge20Item12 = age20.length - age20item12.length;
  let totalAge20Item19 = age20.length - age20item19.length;
  let totalAge20Item20 = age20.length - age20item20.length;
  let totalAge20Item22 = age20.length - age20item22.length;

  console.log("---------20대 종목별 값 합계 및 평균값---------");
  let sumAge20Item7 = 0;
  let sumAge20Item12 = 0;
  let sumAge20Item19 = 0;
  let sumAge20Item20 = 0;
  let sumAge20Item22 = 0;

  let avgAge20Item7 = 0;
  let avgAge20Item12 = 0;
  let avgAge20Item19 = 0;
  let avgAge20Item20 = 0;
  let avgAge20Item22 = 0;

  for (let i = 0; i < age20.length; i++) {
    if (age20[i].itemF007 != "-") {
      sumAge20Item7 = sumAge20Item7 + parseInt(age20[i].itemF007);
    }
  }
  avgAge20Item7 = sumAge20Item7 / totalAge20Item7;
  console.log(avgAge20Item7);

  for (let i = 0; i < age20.length; i++) {
    if (age20[i].itemF012 != "-") {
      sumAge20Item12 = sumAge20Item12 + parseInt(age20[i].itemF012);
    }
  }
  avgAge20Item12 = sumAge20Item12 / totalAge20Item12;

  for (let i = 0; i < age20.length; i++) {
    if (age20[i].itemF019 != "-") {
      sumAge20Item19 = sumAge20Item19 + parseInt(age20[i].itemF019);
    }
  }
  avgAge20Item19 = sumAge20Item19 / totalAge20Item19;

  for (let i = 0; i < age20.length; i++) {
    if (age20[i].itemF020 != "-") {
      sumAge20Item20 = sumAge20Item20 + parseInt(age20[i].itemF020);
    }
  }
  avgAge20Item20 = sumAge20Item20 / totalAge20Item20;

  for (let i = 0; i < age20.length; i++) {
    if (age20[i].itemF022 != "-") {
      sumAge20Item22 = sumAge20Item22 + parseInt(age20[i].itemF022);
    }
  }
  avgAge20Item22 = sumAge20Item22 / totalAge20Item22;

  console.log("---------30대 종목별 null 값---------");

  let age30item7 = age30.filter((it) => new RegExp("-").test(it.itemF007));
  let age30item12 = age30.filter((it) => new RegExp("-").test(it.itemF012));
  let age30item19 = age30.filter((it) => new RegExp("-").test(it.itemF019));
  let age30item20 = age30.filter((it) => new RegExp("-").test(it.itemF020));
  let age30item22 = age30.filter((it) => new RegExp("-").test(it.itemF022));

  console.log("---------30대 종목별 총 인원수---------");

  let totalAge30Item7 = age30.length - age30item7.length;
  let totalAge30Item12 = age30.length - age30item12.length;
  let totalAge30Item19 = age30.length - age30item19.length;
  let totalAge30Item20 = age30.length - age30item20.length;
  let totalAge30Item22 = age30.length - age30item22.length;

  console.log("---------30대 종목별 값 합계 및 평균값---------");
  let sumAge30Item7 = 0;
  let sumAge30Item12 = 0;
  let sumAge30Item19 = 0;
  let sumAge30Item20 = 0;
  let sumAge30Item22 = 0;

  let avgAge30Item7 = 0;
  let avgAge30Item12 = 0;
  let avgAge30Item19 = 0;
  let avgAge30Item20 = 0;
  let avgAge30Item22 = 0;

  for (let i = 0; i < age30.length; i++) {
    if (age30[i].itemF007 != "-") {
      sumAge30Item7 = sumAge30Item7 + parseInt(age30[i].itemF007);
    }
  }
  avgAge30Item7 = sumAge30Item7 / totalAge30Item7;
  console.log(avgAge30Item7);

  for (let i = 0; i < age30.length; i++) {
    if (age30[i].itemF012 != "-") {
      sumAge30Item12 = sumAge30Item12 + parseInt(age30[i].itemF012);
    }
  }
  avgAge30Item12 = sumAge30Item12 / totalAge30Item12;

  for (let i = 0; i < age30.length; i++) {
    if (age30[i].itemF019 != "-") {
      sumAge30Item19 = sumAge30Item19 + parseInt(age30[i].itemF019);
    }
  }
  avgAge30Item19 = sumAge30Item19 / totalAge30Item19;

  for (let i = 0; i < age30.length; i++) {
    if (age30[i].itemF020 != "-") {
      sumAge30Item20 = sumAge30Item20 + parseInt(age30[i].itemF020);
    }
  }
  avgAge30Item20 = sumAge30Item20 / totalAge30Item20;

  for (let i = 0; i < age30.length; i++) {
    if (age30[i].itemF022 != "-") {
      sumAge10Item22 = sumAge30Item22 + parseInt(age30[i].itemF022);
    }
  }
  avgAge30Item22 = sumAge30Item22 / totalAge30Item22;

  console.log("---------40대 종목별 null 값---------");

  let age40item7 = age40.filter((it) => new RegExp("-").test(it.itemF007));
  let age40item12 = age40.filter((it) => new RegExp("-").test(it.itemF012));
  let age40item19 = age40.filter((it) => new RegExp("-").test(it.itemF019));
  let age40item20 = age40.filter((it) => new RegExp("-").test(it.itemF020));
  let age40item22 = age40.filter((it) => new RegExp("-").test(it.itemF022));

  console.log("---------40대 종목별 총 인원수---------");

  let totalAge40Item7 = age40.length - age40item7.length;
  let totalAge40Item12 = age40.length - age40item12.length;
  let totalAge40Item19 = age40.length - age40item19.length;
  let totalAge40Item20 = age40.length - age40item20.length;
  let totalAge40Item22 = age40.length - age40item22.length;

  // console.log("---------10대 종목별 값 합계 및 평균값---------");
  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF007 != "-") {
  //     sumAge10Item7 = sumAge10Item7 + parseInt(age10[i].itemF007);
  //   }
  // }
  // avgAge10Item7 = sumAge10Item7 / totalAge10Item7;
  // console.log(avgAge10Item7);

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF012 != "-") {
  //     sumAge10Item12 = sumAge10Item12 + parseInt(age10[i].itemF012);
  //   }
  // }
  // avgAge10Item12 = sumAge10Item12 / totalAge10Item12;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF019 != "-") {
  //     sumAge10Item19 = sumAge10Item19 + parseInt(age10[i].itemF019);
  //   }
  // }
  // avgAge10Item19 = sumAge10Item19 / totalAge10Item19;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF020 != "-") {
  //     sumAge10Item20 = sumAge10Item20 + parseInt(age10[i].itemF020);
  //   }
  // }
  // avgAge10Item20 = sumAge10Item20 / totalAge10Item20;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF022 != "-") {
  //     sumAge10Item22 = sumAge10Item22 + parseInt(age10[i].itemF022);
  //   }
  // }
  // avgAge10Item22 = sumAge10Item22 / totalAge10Item22;

  console.log("---------50대 종목별 null 값---------");

  let age50item7 = age50.filter((it) => new RegExp("-").test(it.itemF007));
  let age50item12 = age50.filter((it) => new RegExp("-").test(it.itemF012));
  let age50item19 = age50.filter((it) => new RegExp("-").test(it.itemF019));
  let age50item20 = age50.filter((it) => new RegExp("-").test(it.itemF020));
  let age50item22 = age50.filter((it) => new RegExp("-").test(it.itemF022));

  console.log("---------50대 종목별 총 인원수---------");

  let totalAge50Item7 = age50.length - age50item7.length;
  let totalAge50Item12 = age50.length - age50item12.length;
  let totalAge50Item19 = age50.length - age50item19.length;
  let totalAge50Item20 = age50.length - age50item20.length;
  let totalAge50Item22 = age50.length - age50item22.length;

  // console.log("---------10대 종목별 값 합계 및 평균값---------");
  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF007 != "-") {
  //     sumAge10Item7 = sumAge10Item7 + parseInt(age10[i].itemF007);
  //   }
  // }
  // avgAge10Item7 = sumAge10Item7 / totalAge10Item7;
  // console.log(avgAge10Item7);

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF012 != "-") {
  //     sumAge10Item12 = sumAge10Item12 + parseInt(age10[i].itemF012);
  //   }
  // }
  // avgAge10Item12 = sumAge10Item12 / totalAge10Item12;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF019 != "-") {
  //     sumAge10Item19 = sumAge10Item19 + parseInt(age10[i].itemF019);
  //   }
  // }
  // avgAge10Item19 = sumAge10Item19 / totalAge10Item19;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF020 != "-") {
  //     sumAge10Item20 = sumAge10Item20 + parseInt(age10[i].itemF020);
  //   }
  // }
  // avgAge10Item20 = sumAge10Item20 / totalAge10Item20;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF022 != "-") {
  //     sumAge10Item22 = sumAge10Item22 + parseInt(age10[i].itemF022);
  //   }
  // }
  // avgAge10Item22 = sumAge10Item22 / totalAge10Item22;

  console.log("---------60대 종목별 null 값---------");

  let age60item7 = age60.filter((it) => new RegExp("-").test(it.itemF007));
  let age60item12 = age60.filter((it) => new RegExp("-").test(it.itemF012));
  let age60item19 = age60.filter((it) => new RegExp("-").test(it.itemF019));
  let age60item20 = age60.filter((it) => new RegExp("-").test(it.itemF020));
  let age60item22 = age60.filter((it) => new RegExp("-").test(it.itemF022));

  console.log("---------60대 종목별 총 인원수---------");

  let totalAge60Item7 = age60.length - age60item7.length;
  let totalAge60Item12 = age60.length - age60item12.length;
  let totalAge60Item19 = age60.length - age60item19.length;
  let totalAge60Item20 = age60.length - age60item20.length;
  let totalAge60Item22 = age60.length - age60item22.length;

  // console.log("---------10대 종목별 값 합계 및 평균값---------");
  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF007 != "-") {
  //     sumAge10Item7 = sumAge10Item7 + parseInt(age10[i].itemF007);
  //   }
  // }
  // avgAge10Item7 = sumAge10Item7 / totalAge10Item7;
  // console.log(avgAge10Item7);

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF012 != "-") {
  //     sumAge10Item12 = sumAge10Item12 + parseInt(age10[i].itemF012);
  //   }
  // }
  // avgAge10Item12 = sumAge10Item12 / totalAge10Item12;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF019 != "-") {
  //     sumAge10Item19 = sumAge10Item19 + parseInt(age10[i].itemF019);
  //   }
  // }
  // avgAge10Item19 = sumAge10Item19 / totalAge10Item19;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF020 != "-") {
  //     sumAge10Item20 = sumAge10Item20 + parseInt(age10[i].itemF020);
  //   }
  // }
  // avgAge10Item20 = sumAge10Item20 / totalAge10Item20;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF022 != "-") {
  //     sumAge10Item22 = sumAge10Item22 + parseInt(age10[i].itemF022);
  //   }
  // }
  // avgAge10Item22 = sumAge10Item22 / totalAge10Item22;

  console.log("---------70대 종목별 null 값---------");

  let age70item7 = age70.filter((it) => new RegExp("-").test(it.itemF007));
  let age70item12 = age70.filter((it) => new RegExp("-").test(it.itemF012));
  let age70item19 = age70.filter((it) => new RegExp("-").test(it.itemF019));
  let age70item20 = age70.filter((it) => new RegExp("-").test(it.itemF020));
  let age70item22 = age70.filter((it) => new RegExp("-").test(it.itemF022));

  console.log("---------70대 종목별 총 인원수---------");

  let totalAge70Item7 = age70.length - age70item7.length;
  let totalAge70Item12 = age70.length - age70item12.length;
  let totalAge70Item19 = age70.length - age70item19.length;
  let totalAge70Item20 = age70.length - age70item20.length;
  let totalAge70Item22 = age70.length - age70item22.length;

  // console.log("---------10대 종목별 값 합계 및 평균값---------");
  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF007 != "-") {
  //     sumAge10Item7 = sumAge10Item7 + parseInt(age10[i].itemF007);
  //   }
  // }
  // avgAge10Item7 = sumAge10Item7 / totalAge10Item7;
  // console.log(avgAge10Item7);

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF012 != "-") {
  //     sumAge10Item12 = sumAge10Item12 + parseInt(age10[i].itemF012);
  //   }
  // }
  // avgAge10Item12 = sumAge10Item12 / totalAge10Item12;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF019 != "-") {
  //     sumAge10Item19 = sumAge10Item19 + parseInt(age10[i].itemF019);
  //   }
  // }
  // avgAge10Item19 = sumAge10Item19 / totalAge10Item19;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF020 != "-") {
  //     sumAge10Item20 = sumAge10Item20 + parseInt(age10[i].itemF020);
  //   }
  // }
  // avgAge10Item20 = sumAge10Item20 / totalAge10Item20;

  // for (let i = 0; i < age10.length; i++) {
  //   if (age10[i].itemF022 != "-") {
  //     sumAge10Item22 = sumAge10Item22 + parseInt(age10[i].itemF022);
  //   }
  // }
  // avgAge10Item22 = sumAge10Item22 / totalAge10Item22;

  const avgScoreData = [
    {
      ageClass: 10,
      item7: avgAge10Item7,
      item12: avgAge10Item12,
      item19: avgAge10Item19,
      item20: avgAge10Item20,
      item22: avgAge10Item22,
    },
    {
      ageClass: 20,
      item7: avgAge20Item7,
      item12: avgAge20Item12,
      item19: avgAge20Item19,
      item20: avgAge20Item20,
      item22: avgAge20Item22,
    },
    {
      ageClass: 30,
      item7: avgAge30Item7,
      item12: avgAge30Item12,
      item19: avgAge30Item19,
      item20: avgAge30Item20,
      item22: avgAge30Item22,
    },
    // {
    //   ageClass: 40,
    //   item7: res18gra1.length,
    //   item12: res18gra2.length,
    //   item19: res18gra3.length,
    //   item20: res18gra0.length,
    //   item22: res18gra0.length,
    // },
    // {
    //   ageClass: 50,
    //   item7: res18gra1.length,
    //   item12: res18gra2.length,
    //   item19: res18gra3.length,
    //   item20: res18gra0.length,
    //   item22: res18gra0.length,
    // },
    // {
    //   ageClass: 60,
    //   item7: res18gra1.length,
    //   item12: res18gra2.length,
    //   item19: res18gra3.length,
    //   item20: res18gra0.length,
    //   item22: res18gra0.length,
    // },
    // {
    //   ageClass: 70,
    //   item7: res18gra1.length,
    //   item12: res18gra2.length,
    //   item19: res18gra3.length,
    //   item20: res18gra0.length,
    //   item22: res18gra0.length,
    // },
  ];
  return avgScoreData;
};
export default avgScore;
