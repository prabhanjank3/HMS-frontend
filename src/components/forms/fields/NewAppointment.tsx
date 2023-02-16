const newAppointmentFields = [
    {
      fields: [
        {
          name: "patientid",
          label: "Patient Name",
          type:'select',
          options:[],
          media: {
            lg: 6,
            md: 6,
            sm: 12
          }
        },
        {
          name: "opdid",
          label: "Doctor Name",
          type:'select',
          options:[],
          media: {
            lg: 6,
            md: 6,
            sm: 12
          }
        },
      ]
    },
    {
      fields: [
        {
          name: "date",
          label: "Date",
          type: "date",
          inputFormat: "YYYY-MM-DD",
          media: {
            lg: 6,
            md: 6,
            sm: 12
          }
        },
        {
          name: "slot",
          label: "Slot",
          type: "select",
          defaultValue:-1,
          options:[],
          media: {
            lg: 6,
            md: 6,
            sm: 12
          }
        }
      ]
    },
    {
      fields: [
        {
          name: "reason",
          label: "Reason",
          media: {
            lg: 12,
            md: 12,
            sm: 12
          },
          extraAttributes: {
            multiline: true,
            rows: 3
          }
        }
      ]
    }
  ];
  
  export default newAppointmentFields;
  