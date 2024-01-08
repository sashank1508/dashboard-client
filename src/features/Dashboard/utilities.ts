export interface ActivityRecord {
  id: string;
  user_name: string;
  model: string;
  type: string;
  usage: string;
  rate: string;
  spend: string;
  date: string;
}

export const formatDataByMonth = (data: ActivityRecord[]) => {
  const formattedData: any = {};

  data?.forEach((item) => {
    const itemDate = new Date(item.date);
    const month = itemDate.toLocaleString("default", { month: "long" });

    if (!formattedData[month]) {
      formattedData[month] = [];
    }

    formattedData[month].push(item); // Push formatted item without unwanted properties
  });

  return formattedData;
};

export const formatDataForActivity = (data: ActivityRecord[]) => {
  const formattedData: any = {};

  data.forEach((item) => {
    const { id, user_name, date, ...formattedItem } = item; // Destructure unwanted properties

    const itemDate = new Date(date);
    const month = itemDate.toLocaleString("default", { month: "long" });

    if (!formattedData[month]) {
      formattedData[month] = [];
    }

    formattedData[month].push(formattedItem); // Push formatted item without unwanted properties
  });

  return formattedData;
};

export const formatDataForLineChart = (
  dataForMonth: any,
  selectedMonth: string
) => {
  return dataForMonth
    ?.map((record: any) => {
      return {
        name: `${record.date.substring(8, 10)} ${selectedMonth.substring(
          0,
          3
        )}`,
        spend: record.spend.substring(1, record.spend.length),
      };
    })
    .sort((a: any, b: any) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
};
