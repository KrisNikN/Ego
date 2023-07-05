import { PowerProps } from "sections";

export const powerProps: PowerProps = {
  columns: [
    { title: "Public Competitions", buttonText: "VIEW " },
    {
      title: "Join a Competition",
      joinFormProps: {
        formInputPlaceholder: "...Code",
        inputLabelText: "Competition code",
        submitButtonText: "JOIN NOW"
      }
    },
    { title: "Create Your Own", buttonText: "CREATE" }
  ]
};
