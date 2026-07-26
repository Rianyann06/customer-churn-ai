import SectionCard from "./SectionCard";
import SelectField from "./SelectField";

import {
  yesNoOptions,
  internetServiceOptions,
} from "@/data/options";

interface Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function ServiceSection({
  formData,
  setFormData,
}: Props) {
  return (
    <SectionCard title="Service Information">
      <SelectField
        label="Phone Service"
        value={formData.PhoneService}
        options={yesNoOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            PhoneService: value as string,
          })
        }
      />

      <SelectField
        label="Multiple Lines"
        value={formData.MultipleLines}
        options={yesNoOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            MultipleLines: value as string,
          })
        }
      />

      <SelectField
        label="Internet Service"
        value={formData.InternetService}
        options={internetServiceOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            InternetService: value as string,
          })
        }
      />

      <SelectField
        label="Online Security"
        value={formData.OnlineSecurity}
        options={yesNoOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            OnlineSecurity: value as string,
          })
        }
      />

      <SelectField
        label="Online Backup"
        value={formData.OnlineBackup}
        options={yesNoOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            OnlineBackup: value as string,
          })
        }
      />

      <SelectField
        label="Device Protection"
        value={formData.DeviceProtection}
        options={yesNoOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            DeviceProtection: value as string,
          })
        }
      />

      <SelectField
        label="Tech Support"
        value={formData.TechSupport}
        options={yesNoOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            TechSupport: value as string,
          })
        }
      />

      <SelectField
        label="Streaming TV"
        value={formData.StreamingTV}
        options={yesNoOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            StreamingTV: value as string,
          })
        }
      />

      <SelectField
        label="Streaming Movies"
        value={formData.StreamingMovies}
        options={yesNoOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            StreamingMovies: value as string,
          })
        }
      />
    </SectionCard>
  );
}