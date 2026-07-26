import SectionCard from "./SectionCard";
import SelectField from "./SelectField";
import NumberField from "./NumberField";

import {
  contractOptions,
  paymentMethodOptions,
  yesNoOptions,
} from "@/data/options";

interface Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function BillingSection({
  formData,
  setFormData,
}: Props) {
  return (
    <SectionCard title="Billing Information">
      <SelectField
        label="Contract"
        value={formData.Contract}
        options={contractOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            Contract: value as string,
          })
        }
      />

      <SelectField
        label="Paperless Billing"
        value={formData.PaperlessBilling}
        options={yesNoOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            PaperlessBilling: value as string,
          })
        }
      />

      <SelectField
        label="Payment Method"
        value={formData.PaymentMethod}
        options={paymentMethodOptions}
        onChange={(value) =>
          setFormData({
            ...formData,
            PaymentMethod: value as string,
          })
        }
      />

      <NumberField
        label="Tenure (Months)"
        value={formData.tenure}
        onChange={(value) =>
          setFormData({
            ...formData,
            tenure: value,
          })
        }
      />

      <NumberField
        label="Monthly Charges"
        value={formData.MonthlyCharges}
        onChange={(value) =>
          setFormData({
            ...formData,
            MonthlyCharges: value,
          })
        }
      />

      <NumberField
        label="Total Charges"
        value={formData.TotalCharges}
        onChange={(value) =>
          setFormData({
            ...formData,
            TotalCharges: value,
          })
        }
      />
    </SectionCard>
  );
}