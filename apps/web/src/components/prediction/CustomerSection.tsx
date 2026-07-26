import SectionCard from "./SectionCard";
import SelectField from "./SelectField";

import {
  genderOptions,
  seniorCitizenOptions,
  yesNoOptions,
} from "@/data/options";

interface Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function CustomerSection({
  formData,
  setFormData,
}: Props) {
  return (
    <SectionCard title="Customer Information">
      <SelectField
        label="Gender"
        value={formData.gender}
        options={genderOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            gender: value as string,
          })
        }
      />

      <SelectField
        label="Senior Citizen"
        value={formData.SeniorCitizen}
        options={seniorCitizenOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            SeniorCitizen: Number(value),
          })
        }
      />

      <SelectField
        label="Partner"
        value={formData.Partner}
        options={yesNoOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            Partner: value as string,
          })
        }
      />

      <SelectField
        label="Dependents"
        value={formData.Dependents}
        options={yesNoOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            Dependents: value as string,
          })
        }
      />
    </SectionCard>
  );
}