const loginFields = [
    {
      fields: [
        {
          name: "role",
          label: "Select Role",
          type: "select",
          options: [
            { label: "Doctor", id: "DOCTOR" },
            { label: "Patient", id: "PATIENT" }
          ],
          media: {
            lg: 12,
            md: 12,
            sm: 12
          }
        }
      ]
    },
    {
      fields: [
        {
            name: "email",
            label: "Email",
            media: {
              lg: 12,
              md: 12,
              sm: 12
            }
          },
      ]
    },
    {
      fields: [
        {
          name: "password",
          label: "Password",
          media: {
            lg: 12,
            md: 12,
            sm: 12
          },
          extraAttributes: {
            type:'password'
          }
        }
      ]
    }
  ];
  
  export default loginFields;
  